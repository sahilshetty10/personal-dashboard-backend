const User = require("../model/Users");

const addUser = async (username, password) => {
  try {
    const user = new User({
      username,
      password,
      preferences: {
        stock1: "bitcoin",
        stock2: "ethereum",
        stock3: "ripple",
        newsCategory: "business",
        newsCountry: "ca",
        holidayCountry: "CA",
        weatherLocation: "43.781221102953786, -79.30153612140572",
      },
    });
    await user.save();
    return user;
  } catch (error) {
    throw new Error("Error adding user:", error);
  }
};

const authenticateUser = async (username, password) => {
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error("Error authenticating user:", error);
  }
};

const getUserPreferences = async (username) => {
  try {
    const user = await User.findOne({ username }).select("preferences");
    if (user) {
      return user.preferences;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error("Error getting user preferences:", error);
  }
};

const updateUserPreferences = async (username, preferences) => {
  try {
    const user = await User.findOneAndUpdate({ username }, { preferences });
    if (user) {
      return user.preferences;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error("Error updating user preferences:", error);
  }
};

module.exports = {
  addUser,
  authenticateUser,
  getUserPreferences,
  updateUserPreferences,
};
