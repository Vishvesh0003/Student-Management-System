import { FeeStructure } from "../../models/FeeStructure";
import { Class } from "../../models/Class";

export async function seedFeeStructures() {

console.log("Seeding Fee Structures...");

await FeeStructure.deleteMany({});

const classes = await Class.find();

const structures:any = [];

for (const cls of classes) {

structures.push({
classId: cls._id,
title: "Term 1 Tuition",
amount: 50000,
dueDate: new Date("2025-03-31"),
academicYear: "2024-2025",
description: "Semester tuition fee"
});

}

const result = await FeeStructure.insertMany(structures);

console.log(`Inserted ${result.length} fee structures`);

return result;

}
