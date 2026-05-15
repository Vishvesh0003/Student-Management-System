import { connectDB, disconnectDB } from "./connect";

import { seedDepartments } from "./seedDepartments";
import { seedTeachers } from "./seedTeachers";
import { seedClasses } from "./seedClasses";
import { seedSubjects } from "./seedSubjects";
import { seedStudents } from "./seedStudents";
import { seedAssignments } from "./seedAssignments";
import { seedAttendance } from "./seedAttendance";
import { seedTeacherAssignments } from "./seedTeacherAssignments";
import { seedFees } from "./seedFees";
import { seedFeeStructures } from "./seedFeeStructures";
import { seedResults } from "./seedResults";

async function seedDatabase() {

try {

await connectDB();

await seedDepartments();
await seedTeachers();
await seedClasses();
await seedSubjects();
await seedStudents();
await seedAssignments();
await seedAttendance();
await seedTeacherAssignments();
await seedFees();
await seedFeeStructures();
await seedResults();
console.log("Database seeded successfully");


} catch (err) {


console.error("Seed failed:", err);

} finally {


await disconnectDB();
process.exit();


}

}

seedDatabase();
