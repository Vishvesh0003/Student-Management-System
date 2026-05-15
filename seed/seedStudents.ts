import { Student } from "../../models/Student";
import { Class } from "../../models/Class";
import { Department } from "../../models/Department";
import { User } from "../../models/User";

export async function seedStudents() {

console.log("Seeding Students...");

await Student.deleteMany({});

const classes = await Class.find();
const departments = await Department.find();

// student users must exist
const users = await User.find({ role: "STUDENT" });

const students: any[] = [];

for (let i = 0; i < users.length; i++) {


const cls = classes[i % classes.length];
const dept = departments[i % departments.length];

students.push({
  userId: users[i]._id,
  classId: cls._id,
  departmentId: dept._id,
  rollNumber: `ROLL${1000 + i}`,
  academicYear: "2024-2025"
});


}

const result = await Student.insertMany(students);

console.log(`Inserted ${result.length} students`);

return result;

}
