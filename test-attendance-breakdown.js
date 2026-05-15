const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/college-erp").then(async () => {
  const db = mongoose.connection;

  // Get current student ID from user for aarav.patel@college.com
  const user = await db
    .collection("users")
    .findOne({ email: "aarav.patel@college.com" });
  console.log("User:", user?.email, "ID:", user?._id.toString());

  const student = await db.collection("students").findOne({ userId: user._id });
  console.log(
    "Student ID:",
    student?._id.toString(),
    "ClassID:",
    student?.classId.toString(),
  );

  // Count attendance records by status
  const recordStats = await db
    .collection("attendancerecords")
    .aggregate([
      { $match: { studentId: student._id } },
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ])
    .toArray();
  console.log("\nAttendance Records by Status:");
  recordStats.forEach((r) => console.log(`  ${r._id}: ${r.count}`));

  // Count sessions for this student's class
  const classId = student.classId;
  const sessionCount = await db
    .collection("attendancesessions")
    .countDocuments({ classId });
  console.log("\nAttendance Sessions for class:", sessionCount);

  mongoose.connection.close();
});
