import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaPause, FaPlay } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";

import DoctorsPage from "./pages/DoctorsPage";
import StaffPage from "./pages/StaffPage";
import MedicinePage from "./pages/MedicinePage";

// Number of slides for medicine
const MEDICINE_SLIDES = 3;
const NORMAL_INTERVAL = 10000; // 10 seconds per page

const pages = ["/doctors", "/staff", "/medicine"];

function AutoRouter() {
  const navigate = useNavigate();
  const location = useLocation();

  const [paused, setPaused] = useState(false);
  const [medicineSlide, setMedicineSlide] = useState(0);

  useEffect(() => {
    if (paused) return;

    let interval;
    if (location.pathname === "/medicine") {
      interval = setInterval(() => {
        setMedicineSlide((prev) => {
          if (prev < MEDICINE_SLIDES - 1) {
            return prev + 1;
          } else {
            navigate("/doctors");
            return 0;
          }
        });
      }, NORMAL_INTERVAL);
    } else {
      interval = setInterval(() => {
        const currentIndex = pages.indexOf(location.pathname);
        const nextIndex = (currentIndex + 1) % pages.length;
        navigate(pages[nextIndex]);
      }, NORMAL_INTERVAL);
    }

    return () => clearInterval(interval);
  }, [location.pathname, navigate, paused]);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      <Header />

      {/* Pause/Play Floating Button */}
      <button
        onClick={() => setPaused((p) => !p)}
        className="fixed bottom-8 right-8 z-50 bg-yellow-500 hover:bg-yellow-600 text-black p-5 rounded-full shadow-xl transition-transform hover:scale-110"
      >
        {paused ? (
          <FaPlay className="text-2xl" />
        ) : (
          <FaPause className="text-2xl" />
        )}
      </button>

      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${location.pathname}-${medicineSlide}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-full"
          >
            <Routes location={location}>
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route
                path="/medicine"
                element={<MedicinePage currentSlide={medicineSlide} />}
              />
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
