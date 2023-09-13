import logo from "./logo.svg";
import "./App.css";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import StudentDashboard from "./pages/studentdashboard/StudentDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendence from "./pages/Attendence/Attendence";
import Assignments from "./pages/Assignments/Assignments";
import Schedule from "./pages/Schedule/Schedule";
import Notification from "./pages/Notification/Notification";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import RegisterStudent from "./pages/RegisterStudent/RegisterStudent";
import GenerateAttendenceReport from "./pages/GenerateAttendenceReport/GenerateAttendenceReport";
import CreateSchedule from "./pages/CreateSchedule/CreateSchedule";
import PushNotification from "./pages/PushNotification/PushNotification";
import GenerateStudentReport from "./pages/GenerateStudentReport/GenerateStudentReport";
import HomePage from "./pages/HomePage/HomePage";
import StudentLogin from "./pages/StudentLogin/StudentLogin";
import EditStudent from "./pages/EditStudent/EditStudent";
import EditSchedule from "./pages/EditSchedule/EditSchedule";
import { AuthProvider } from "./context/AuthContext";
import AdminProtectedRoute from "./ProtectedRoutes/AdminProtectedRoute";
import StudentProtectedRoute from "./ProtectedRoutes/StudentProtectedRoute";
import EditPushNotification from "./pages/EditPushNotification/EditPushNotification";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin-dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/generate-attendence-report"
              element={
                <AdminProtectedRoute>
                  <GenerateAttendenceReport />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/create-schedule"
              element={
                <AdminProtectedRoute>
                  <CreateSchedule />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/push-notification"
              element={
                <AdminProtectedRoute>
                  <PushNotification />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/edit-push-notification/:id"
              element={
                <AdminProtectedRoute>
                  <EditPushNotification />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/generate-student-report"
              element={
                <AdminProtectedRoute>
                  <GenerateStudentReport />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/edit-student/:prn"
              element={
                <AdminProtectedRoute>
                  <EditStudent />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/edit-schedule/:id"
              element={
                <AdminProtectedRoute>
                  <EditSchedule />
                </AdminProtectedRoute>
              }
            />
            <Route path="/" element={<HomePage />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route
              path="/student-dashboard"
              element={
                <StudentProtectedRoute>
                  <StudentDashboard />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/attendence"
              element={
                <StudentProtectedRoute>
                  <Attendence />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/assignments"
              element={
                <StudentProtectedRoute>
                  <Assignments />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/schedule"
              element={
                <StudentProtectedRoute>
                  <Schedule />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <StudentProtectedRoute>
                  <Notification />
                </StudentProtectedRoute>
              }
            />
            <Route path="/register-student" element={<RegisterStudent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
