import { PaymentRecord } from "../../models/PaymentRecord";
import { FeeStructure } from "../../models/FeeStructure";
import { Student } from "../../models/Student";

export async function seedFees() {

console.log("Seeding Fees...");

await PaymentRecord.deleteMany({});

const students = await Student.find();
const structures = await FeeStructure.find();

if (!structures.length) {
console.log("No fee structures found.");
return;
}

const structure = structures[0];

const payments:any = [];

for (const student of students) {

payments.push({
studentId: student._id,
structureId: structure._id,
amount: 50000,
method: "ONLINE",
paymentDate: new Date(),
status: "SUCCESS",
referenceId: "TXN" + Math.floor(Math.random() * 1000000)
});

}

const result = await PaymentRecord.insertMany(payments);

console.log(`Inserted ${result.length} payments`);

}
