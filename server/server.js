const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user-model"); // Adjust path if needed
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

const seedAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await User.findOne({ email: "admin@example.com" });

    if (existingAdmin) {
      console.log("Admin already exists");
    } else {
      const hashedPassword = await bcrypt.hash("admin123", 10);

      const adminUser = new User({
        userName: "Admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
      });

      await adminUser.save();
      console.log("✅ Admin user seeded successfully");
    }

    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    mongoose.connection.close();
  }
};

seedAdmin();
