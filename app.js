const express = require("express");
const bodyParser = require("body-parser");
const { getData } = require("./utils");
const cors = require("cors");

const {
  addUser,
  authenticateUser,
  getUserPreferences,
  updateUserPreferences,
} = require("./services/userServices");
const connectDb = require("./db");

connectDb();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.post("/addUser", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await addUser(username, password);
    res.send({ userId: user.username });
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/authenticateUser", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const result = await authenticateUser(username, password);
    res.send({ userId: result.username });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.post("/updateUserPreferences", async (req, res) => {
  const { username, preferences } = req.body;

  try {
    // Retrieve the current preferences from the database
    const currentPreferences = await getUserPreferences(username);

    // Merge the new preferences with the current preferences
    const updatedPreferences = {
      ...currentPreferences,
      ...preferences,
    };

    // Remove keys from updatedPreferences where the value is empty
    for (let key in updatedPreferences) {
      if (updatedPreferences[key] === "") {
        delete updatedPreferences[key];
      }
    }

    // Update the user preferences in the database
    const result = await updateUserPreferences(username, updatedPreferences);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/", async (req, res) => {
  const username = req.query.userId;
  try {
    const preferences = await getUserPreferences(username);
    const data = await getData(preferences);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
