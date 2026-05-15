import mongoose from 'mongoose';
import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(__dirname, '.env') });

const fetchTeachers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/college-erp');
        console.log('Connected to DB');

        const db = mongoose.connection.db;
        
        // Find students
        const usersCol = db!.collection('users');
        const students = await usersCol.find({ name: { $in: [ /Student 30/i, /Student 37/i ] } }).toArray();
        if (!students.length) {
            console.log('No user named Student 30 or 37 found');
            return;
        }

        // Get student objects to check student collections
        const studentIds = students.map(u => u._id);
        const studentCol = db!.collection('students');
        const studentRecords = await studentCol.find({ userId: { $in: studentIds } }).toArray();

        for (const sName of ['Student 30', 'Student 37']) {
            const user = students.find(u => new RegExp(sName, 'i').test(u.name));
            if (!user) {
                console.log(`Could not find User object for ${sName}`);
                continue;
            }
            const studentDoc = studentRecords.find(s => s.userId.toString() === user._id.toString());
            if (!studentDoc) {
                console.log(`No Student document for ${sName} (UserId: ${user._id})`);
                continue;
            }

            // check assignments
            const assignCol = db!.collection('teacherstudentassignments');
            const assignments = await assignCol.find({ studentId: studentDoc._id }).toArray();
            if (assignments.length) {
                for (const asg of assignments) {
                    const teacherUser = await usersCol.findOne({ _id: asg.teacherId });
                    console.log(`${sName} is assigned to: ${teacherUser?.name} (Role: ${teacherUser?.role}) [via direct assignment]`);
                }
            } else {
                console.log(`${sName} has NO direct assignments. Falling back to Classes...`);
                // Let's check classes
                const classId = studentDoc.classId;
                if (classId) {
                    const classCol = db!.collection('classes');
                    const cls = await classCol.findOne({ _id: classId });
                    if (cls && cls.headTeacherId) {
                        const ht = await usersCol.findOne({ _id: cls.headTeacherId });
                        console.log(`${sName} is in ${cls.name}, Head Teacher: ${ht?.name}`);
                    }
                }
            }
        }
    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
};

fetchTeachers();
