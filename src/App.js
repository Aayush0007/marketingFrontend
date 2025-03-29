import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Website from "./pages/Website";
import ServiceDetail from "./components/ServiceDetail";
import ContactForm from "./components/ContactForm";
import BlogDetail from "./components/BlogDetail";
import TermsAndConditions from "./components/TermsAndConditions";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import ChatIcon from "./components/ChatIcon";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      {/* Main content */}
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* Chat Components - Always visible */}
        <div className="fixed bottom-0 right-0 z-50">
          <ChatIcon onClick={() => setIsChatOpen(true)} />
          {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
        </div>
      </div>
    </Router>
  );
}

export default App;