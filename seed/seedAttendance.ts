import { AttendanceSession } from "../../models/AttendanceSession";
import { AttendanceRecord } from "../../models/AttendanceRecord";
import { Class } from "../../models/Class";
import { Teacher } from "../../models/Teacher";
import { Subject } from "../../models/Subject";
import { Student } from "../../models/Student";

export async function seedAttendance() {

console.log("Seeding Attendance...");

await AttendanceSession.deleteMany({});
await AttendanceRecord.deleteMany({});

const classes = await Class.find();
const teachers = await Teacher.find();
const subjects = await Subject.find();
const students = await Student.find();

const sessions:any = [];

for (let i = 0; i < 50; i++) {

sessions.push({
classId: classes[i % classes.length]._id,
teacherId: teachers[i % teachers.length]._id,
subjectId: subjects[i % subjects.length]._id,
topic: `Lecture ${i+1}`,
date: new Date()
});

}

const createdSessions = await AttendanceSession.insertMany(sessions);

const records:any = [];

for (const session of createdSessions) {

for (const student of students) {


records.push({
  sessionId: session._id,
  studentId: student._id,
  status: Math.random() > 0.2 ? "PRESENT" : "ABSENT"
});


}

}

await AttendanceRecord.insertMany(records);

console.log(`Inserted ${records.length} attendance records`);

}
