import { Result } from "../../models/result.model";
import { Student } from "../../models/Student";

export async function seedResults() {

console.log("Seeding Results...");

await Result.deleteMany({});

const students = await Student.find();

const results:any = [];

for (const student of students) {

const sgpa = (6 + Math.random() * 4).toFixed(2);
const cgpa = (6 + Math.random() * 4).toFixed(2);

results.push({
studentId: student._id,
semester: Math.floor(Math.random() * 8) + 1,
sgpa: Number(sgpa),
cgpa: Number(cgpa),
resultStatus: "PASS"
});

}

const inserted = await Result.insertMany(results);

console.log(`Inserted ${inserted.length} results`);

}
