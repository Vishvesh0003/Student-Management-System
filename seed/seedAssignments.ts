import { Assignment } from "../../models/Assignment";
import { Class } from "../../models/Class";
import { Teacher } from "../../models/Teacher";
import { Subject } from "../../models/Subject";

export async function seedAssignments() {

console.log("Seeding Assignments...");

await Assignment.deleteMany({});

const classes = await Class.find();
const teachers = await Teacher.find();
const subjects = await Subject.find();

const assignments:any = [];

for (let i = 0; i < 100; i++) {

const cls = classes[i % classes.length];
const teacher = teachers[i % teachers.length];
const subject = subjects[i % subjects.length];

assignments.push({
title: `Assignment ${i + 1}`,
description: "Solve all questions and upload PDF.",
classId: cls._id,
teacherId: teacher._id,
subjectId: subject._id,
points: 100,
dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
});

}

const result = await Assignment.insertMany(assignments);

console.log(`Inserted ${result.length} assignments`);

return result;

}
