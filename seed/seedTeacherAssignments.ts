import { TeacherStudentAssignment } from "../../models/TeacherStudentAssignment";
import { Teacher } from "../../models/Teacher";
import { Class } from "../../models/Class";
import { Student } from "../../models/Student";

export async function seedTeacherAssignments() {

console.log("Seeding Teacher-Student Assignments...");

await TeacherStudentAssignment.deleteMany({});

const teachers = await Teacher.find();
const classes = await Class.find();
const students = await Student.find();

const docs: any[] = [];

for (const cls of classes) {


const classStudents = students.filter(
  s => s.classId?.toString() === cls._id.toString()
);

const teacher = teachers.find(
  t => t._id.toString() === cls.classTeacherId?.toString()
);

if (!teacher) continue;

for (const student of classStudents) {

  docs.push({
    teacherId: teacher._id,
    studentId: student._id,
    classId: cls._id
  });

}


}

if (docs.length > 0) {
await TeacherStudentAssignment.insertMany(docs);
}

console.log(`Inserted ${docs.length} teacher-student assignments`);

}
