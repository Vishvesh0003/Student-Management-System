import { Class } from "../../models/Class";
import { Department } from "../../models/Department";
import { Teacher } from "../../models/Teacher";

export async function seedClasses() {

console.log("Seeding Classes...");

await Class.deleteMany({});

const departments = await Department.find();
const teachers = await Teacher.find();

const courses = [
"B.Tech CSE",
"B.Tech ME",
"B.Tech EE",
"B.Tech CE"
];

const academicYears = [
"2023-2024",
"2024-2025",
"2025-2026"
];

const classes = [];

for (let i = 0; i < 12; i++) {


    
classes.push({
  name: `Class ${i + 1}`,
  departmentId: departments[i % departments.length]._id,
  classTeacherId: teachers[i % teachers.length]._id,
  course: courses[i % courses.length],
  academicYear: academicYears[1]
});


}

const result = await Class.insertMany(classes);

console.log(`Inserted ${result.length} classes`);

return result;

}
