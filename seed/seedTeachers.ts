import { Teacher } from "../../models/Teacher";
import { Department } from "../../models/Department";
import { User } from "../../models/User";

export async function seedTeachers() {

console.log("Seeding Teachers...");

await Teacher.deleteMany({});

const departments = await Department.find();
const users = await User.find({ role: "TEACHER" });

const teachers = [];

const specialisations = [
"Artificial Intelligence",
"Machine Learning",
"Thermodynamics",
"Power Systems",
"Structural Engineering"
];

const qualifications = [
"M.Tech",
"PhD",
"MSc",
"B.Tech + M.Tech"
];

const designations = [
"Assistant Professor",
"Associate Professor",
"Professor"
];

for (let i = 0; i < users.length; i++) {


teachers.push({
  userId: users[i]._id,
  departmentId: departments[i % departments.length]._id,
  specialisation: specialisations[i % specialisations.length],
  qualification: qualifications[i % qualifications.length],
  designation: designations[i % designations.length]
});


}

const result = await Teacher.insertMany(teachers);

console.log(`Inserted ${result.length} teachers`);

return result;

}
