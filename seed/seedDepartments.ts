import { Department } from "../../models/Department";

export async function seedDepartments() {
console.log("Seeding Departments...");

await Department.deleteMany({});

const departments = [
{ name: "Computer Science", code: "CSE" },
{ name: "Mechanical Engineering", code: "ME" },
{ name: "Electrical Engineering", code: "EE" },
{ name: "Civil Engineering", code: "CE" }
];

const result = await Department.insertMany(departments);

console.log(`Inserted ${result.length} departments`);

return result;
}
