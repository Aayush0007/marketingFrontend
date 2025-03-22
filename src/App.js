import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Website from './pages/Website';
import ServiceDetail from './components/ServiceDetail';
import ContactForm from './components/ContactForm';
import BlogDetail from './components/BlogDetail';
import TermsAndConditions from './components/TermsAndConditions';
import AdminDashboard from './components/AdminDashboard';
import ChatIcon from "./components/ChatIcon";
import ChatWindow from "./components/ChatWindow";
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
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
      </Router>

      <ChatIcon onClick={() => setShowChat(true)} />
      {showChat && <ChatWindow onClose={() => setShowChat(false)} />}
    </>
  );
}

export default App;
