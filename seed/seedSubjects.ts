import { Subject } from "../../models/Subject";
import { Class } from "../../models/Class";
import { Teacher } from "../../models/Teacher";
import { Department } from "../../models/Department";

export async function seedSubjects() {

console.log("Seeding Subjects...");

await Subject.deleteMany({});

const classes = await Class.find();
const teachers = await Teacher.find();
const departments = await Department.find();

const subjectNames = [
"Data Structures",
"Algorithms",
"Operating Systems",
"Computer Networks",
"Database Systems",
"Software Engineering",
"Artificial Intelligence",
"Machine Learning"
];

const subjects: any[] = [];

for (let i = 0; i < 40; i++) {


const cls = classes[i % classes.length];
const teacher = teachers[i % teachers.length];
const dept = departments[i % departments.length];

subjects.push({
  name: subjectNames[i % subjectNames.length],
  code: `SUB${100 + i}`,
  credits: 3,
  teacherId: teacher._id,
  classId: cls._id,
  departmentId: dept._id
});


}

const result = await Subject.insertMany(subjects);

console.log(`Inserted ${result.length} subjects`);

return result;

}
