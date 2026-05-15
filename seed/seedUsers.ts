import { User } from "../../models/User";
import bcrypt from "bcryptjs";

export async function seedUsers() {
  console.log("Seeding Users...");

  await User.deleteMany({});

  const users = [];

  for (let i = 1; i <= 10; i++) {
    const hashedPassword = await bcrypt.hash("password123", 10);
    users.push({
      name: `Admin ${i}`,
      email: `admin${i}@erp.com`,
      password: hashedPassword,
      role: "ADMIN",
    });
  }

  await User.insertMany(users);
}
