import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

import DoctorsPage from "./pages/DoctorsPage";
import StaffPage from "./pages/StaffPage";
import MedicinePage from "./pages/MedicinePage";

const pages = ["/doctors", "/staff", "/medicine"];

function AutoRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = pages.indexOf(location.pathname);
      const nextIndex = (currentIndex + 1) % pages.length;
      navigate(pages[nextIndex]);
    }, 10000); // rotate every 10 seconds
    return () => clearInterval(interval);
  }, [location.pathname, navigate]);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-full"
          >
            <Routes location={location}>
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/medicine" element={<MedicinePage />} />
              <Route path="*" element={<DoctorsPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AutoRouter />
    </Router>
  );
}
