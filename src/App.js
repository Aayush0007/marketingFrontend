import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
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

// Particle Background Component (unchanged)
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let mouse = { x: null, y: null, radius: 100 };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.reset();
        this.baseSize = this.size;
        this.hue = Math.random() * 60 + 160;
        this.glow = 0;
        this.rotation = Math.random() * Math.PI * 2;
        this.shape = Math.random() > 0.5 ? "circle" : "diamond";
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 2;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.life = Math.random() * 80 + 40;
        this.opacity = Math.random() * 0.5 + 0.5;
        this.acceleration = 0.98;
      }

      update() {
        this.speedX *= this.acceleration;
        this.speedY = this.speedY * this.acceleration + 0.02;
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.1;
        this.rotation += 0.02;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.speedX -= (dx / distance) * force * 0.1;
          this.speedY -= (dy / distance) * force * 0.1;
          this.glow = force * 20;
          this.size = this.baseSize * (1 + force * 0.5);
        } else {
          this.glow = Math.max(0, this.glow - 0.5);
          this.size = this.baseSize;
        }

        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y > canvas.height + this.size) this.reset();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, `hsla(${this.hue}, 80%, 70%, ${this.opacity})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 80%, 70%, 0)`);

        ctx.fillStyle = gradient;
        ctx.shadowBlur = this.glow;
        ctx.shadowColor = `hsl(${this.hue}, 80%, 70%)`;

        if (this.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -this.size);
          ctx.lineTo(this.size, 0);
          ctx.lineTo(0, this.size);
          ctx.lineTo(-this.size, 0);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const particlesArray = [];
    const numberOfParticles = Math.floor(window.innerWidth / 15);

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const hue = (particlesArray[a].hue + particlesArray[b].hue) / 2;
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `hsla(${hue}, 80%, 60%, ${opacity * 0.3})`;
            ctx.lineWidth = 1 + Math.sin(Date.now() * 0.001 + distance) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(255, 250, 250, 0.95)");
      gradient.addColorStop(1, "rgba(255, 250, 250, 0.85)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 50; i++) {
        ctx.fillStyle = `rgba(47, 107, 71, ${Math.random() * 0.02})`;
        ctx.fillRect(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          2,
          2
        );
      }
    };

    const animate = () => {
      drawBackground();

      for (let i = particlesArray.length - 1; i >= 0; i--) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].life <= 0) {
          particlesArray.splice(i, 1);
          particlesArray.push(new Particle());
        }
      }

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      for (let i = 0; i < 5; i++) {
        const particle = new Particle();
        particle.x = clickX;
        particle.y = clickY;
        particle.speedX = Math.random() * 4 - 2;
        particle.speedY = Math.random() * 4 - 2;
        particle.life = 30;
        particlesArray.push(particle);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseout", handleMouseOut);
    canvas.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseout", handleMouseOut);
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-auto z-0"
    />
  );
};

// New Scroll Animation Wrapper Component
const ScrollAnimationWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" }); // Trigger 50px before entering viewport

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const cursorRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorOutline = cursorOutlineRef.current;

    // Hide default cursor
    document.body.style.cursor = "none";

    // Mouse movement handler
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Inner cursor (small dot)
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;

      // Outer cursor (ring) with smooth lag effect
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    };

    // Hover effects
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, [role='button']")) {
        cursor.classList.add("cursor-hover");
        cursorOutline.classList.add("cursor-outline-hover");
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, [role='button']")) {
        cursor.classList.remove("cursor-hover");
        cursorOutline.classList.remove("cursor-outline-hover");
      }
    };

    // Click animation
    const handleMouseDown = () => {
      cursorOutline.classList.add("cursor-click");
      setTimeout(() => cursorOutline.classList.remove("cursor-click"), 150);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.body.style.cursor = "auto";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          className="fixed w-3 h-3 bg-[#2F6B47] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-100"
        ></div>
        <div
          ref={cursorOutlineRef}
          className="fixed w-8 h-8 border-2 border-[#D4A017] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-out"
        ></div>

        {/* Main content with Scroll Animation */}
        <div className="relative z-10">
          <ScrollAnimationWrapper>
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

            {/* Chat Components */}
            <div className="fixed bottom-0 right-0 z-50">
              <ChatIcon onClick={() => setIsChatOpen(true)} />
              {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} />}
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Inline CSS for cursor animations */}
        <style jsx global>{`
          .cursor-hover {
            background-color: #D4A017 !important;
            transform: translate(-50%, -50%) scale(1.5);
          }
          .cursor-outline-hover {
            border-color: #2F6B47 !important;
            transform: translate(-50%, -50%) scale(1.2);
          }
          .cursor-click {
            transform: translate(-50%, -50%) scale(0.8);
            transition: transform 0.1s ease-in-out;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;