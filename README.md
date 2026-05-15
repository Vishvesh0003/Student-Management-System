# College ERP System

A comprehensive, full-stack College Enterprise Resource Planning (ERP) platform designed to streamline operations and communication between Administrators, Teachers, and Students. Built with a modern tech stack featuring React, Node.js, TypeScript, and MongoDB.

## 🌟 Key Features

### Role-Based Access Control (RBAC)
The platform defines secure boundaries through three primary user roles:
- **Admin**: Full system control, user management, and global analytics.
- **Teacher**: Class and assignment management, attendance tracking, and student analytics.
- **Student**: Access to academic records, assignments, schedules, and fee management.

### 🏛️ Admin Portal
- **Dashboard & Analytics**: High-level overview of system metrics and institutional performance.
- **User Management**: Perform CRUD operations on Teachers, Students, and other internal staff.
- **Academic Management**: Configure courses, subjects, and timetables.
- **System Settings & Logs**: Manage global configurations, view audit logs, and oversee real-time notifications.
- **Reports**: Generate and export various institutional reports.

### 👩‍🏫 Teacher Portal
- **Class Management**: View assigned classes, schedules, and class lists.
- **Attendance Tracking**: Real-time attendance sessions and record keeping.
- **Assignments**: Create, distribute, and track student assignments.
- **Announcements**: Broadcast important information to specific classes.
- **Analytics**: Visualize student performance and engagement metrics.

### 👨‍🎓 Student Portal
- **Dashboard**: Quick glance at upcoming assignments, attendance status, and recent notifications.
- **Academics**: View personal timetable, enrolled subjects, and exam results.
- **Assignments**: Track pending work and submit assignments.
- **Financials (Fee Management)**: View fee structures, track payment records, and handle pending dues.
- **Services & Profile**: Manage personal details and request institutional services.

### 💬 Real-Time Communication
- Integrated Chat and Messaging systems powered by Socket.io, allowing seamless communication within the platform.
- Real-time Notifications for important updates (e.g., assignment deadlines, new announcements).

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript & Vite
- **Styling**: Tailwind CSS, Headless UI, Radix UI & clsx/tailwind-merge
- **State/Form Management**: React Hook Form with Zod validation
- **Routing**: React Router DOM (v6)
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **Real-time**: Socket.io-client

### Backend
- **Framework**: Node.js & Express.js with TypeScript
- **Database**: MongoDB & Mongoose ORM
- **Authentication**: JWT (JSON Web Tokens) & bcryptjs for password hashing
- **Real-time Engine**: Socket.io
- **Security**: Helmet & Express Rate Limit
- **Validation**: Zod
- **Logging**: Winston & Morgan

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Instance (Local or Atlas)

### Installation

1. Clone the repository and navigate into the project directory:
   ```bash
   cd demoproject
   ```

2. Install dependencies for the root, frontend, and backend:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   cd ..
   ```

3. Configure Environment Variables:
   - Create a `.env` file in the `backend/` directory with necessary credentials:
     ```env
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Make sure your frontend `.env` points to the correct backend API URL if needed.

### Running the Application (Development)

The project leverages `concurrently` to run both the API and the UI simultaneously from the root folder.

```bash
# Run both Frontend and Backend
npm run dev
```
- **Frontend** will typically run on `http://localhost:5173`
- **Backend** will run on the port specified in your `.env` (default usually `http://localhost:5000`)

### Useful Backend Scripts
In the `backend/` directory, there are several helpful npm scripts:
- `npm run seed`: Seeds the database with initial/dummy data.
- `npm run assign-teachers`: Runs a script to assign random teachers to classes for testing purposes.

## 📁 Project Structure

```
demoproject/
├── backend/                  # Express/Node.js Server
│   ├── src/
│   │   ├── config/           # DB & environment configs
│   │   ├── controllers/      # Route logic & request handling
│   │   ├── middleware/       # Auth, error, and validation middlewares
│   │   ├── models/           # Mongoose schemas (User, Student, Class, etc.)
│   │   ├── routes/           # Express API route declarations
│   │   ├── scripts/          # Utility scripts (seeders, assigners)
│   │   ├── services/         # Core business logic
│   │   ├── socket/           # WebSockets event handlers
│   │   └── utils/            # Helper functions
│   └── package.json
├── frontend/                 # React UI Client
│   ├── src/
│   │   ├── admin/            # Admin portal pages & components
│   │   ├── components/       # Reusable UI components
│   │   ├── config/           # Frontend configs & constants
│   │   ├── context/          # React Context providers (Auth, Theme)
│   │   ├── hooks/            # Custom React hooks (useAsync, etc.)
│   │   ├── layouts/          # Page layouts & navigations
│   │   ├── student/          # Student portal pages
│   │   ├── teacher/          # Teacher portal pages
│   │   ├── services/         # API call abstractions (Axios)
│   │   └── types/            # TypeScript interfaces
│   └── package.json
└── package.json              # Root workspace package file
```

## 🔐 Security Details
- **Password Hashing**: Passwords encrypt using `bcryptjs` before storage.
- **Route Protection**: Both frontend and backend implement protected routing/endpoints based on the authenticated user's RBAC role.
- **API Security**: Powered by `helmet` for secure HTTP headers, standard CORS handling, and `express-rate-limit` to prevent brute-force abuse.
