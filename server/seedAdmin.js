const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Import your models
const User = require("./models/User"); // adjust path if needed
// const Product = require("./models/Product"); // if you have products

const seedDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://ashmitraina82_db_user:KCHbBDh4FoqS6jTi@cluster0.vq1fkdw.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    // Check if admin exists
    const existingAdmin = await User.findOne({ email: "admin@example.com" });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("Admin@123", 12);
      await User.create({
        userName: "admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
      });
      console.log("✅ Admin account created");
    } else {
      console.log("ℹ️ Admin already exists");
    }

    // Optional: Seed products, categories, etc.
    // await Product.insertMany([...]);

    console.log("✅ Seeding done!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
};

seedDatabase();
