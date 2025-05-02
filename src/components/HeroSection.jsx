import React, { useEffect, useRef } from "react";
import HeroImg from "../assets/freepik_br_8d344293-4862-403e-87d4-08642403774a.png";

const HeroSection = ({ scrollToSection }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let mouse = { x: null, y: null, radius: 100 };

    // Canvas setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.8;

    // Enhanced Particle class with more properties
    class Particle {
      constructor() {
        this.reset();
        this.baseSize = this.size;
        this.hue = Math.random() * 60 + 160; // Green-yellow-orange spectrum
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
        // Apply acceleration and subtle gravity
        this.speedX *= this.acceleration;
        this.speedY = this.speedY * this.acceleration + 0.02;
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.1;
        this.rotation += 0.02;

        // Mouse interaction
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

        // Wrap around edges with fade
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y > canvas.height + this.size) this.reset();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Gradient and glow
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
          // Diamond shape
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

    // Particle system setup
    const particlesArray = [];
    const numberOfParticles = Math.floor(window.innerWidth / 15); // Responsive particle count

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Enhanced connections with energy flow
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

    // Background effects
    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(255, 250, 250, 0.95)");
      gradient.addColorStop(1, "rgba(255, 250, 250, 0.85)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle noise effect
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

    // Animation loop
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

    // Event handlers
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
      canvas.height = window.innerHeight * 0.8;
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
    <section
      id="home"
      className="pt-24 pb-16 px-4 bg-[#FFFAFA] min-h-[80vh] flex items-center relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-auto"
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight relative font-[Orbitron]">
            <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-orange-400 bg-clip-text text-transparent animate-gradientText">
              Expand Your Business
            </span>
            <br />
            <span className="text-[#2F6B47] relative">
              With Our AI Powered Strategies
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[#D4A017] rounded-full animate-expandLine"></span>
            </span>
          </h1>
          <p className="text-[#5A8033] text-lg leading-relaxed max-w-xl mx-auto md:mx-0 animate-fadeInUp delay-200">
            We offer a fusion of effective media and technology to meet a wide range of clients and take your brand to new heights.
          </p>
          <p className="text-[#5A8033] text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 animate-fadeInUp delay-300">
            Let's collaboratively build a bright future for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#2F6B47] text-white px-6 py-3 rounded-full text-base sm:text-lg font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started Today</span>
              <span className="absolute inset-0 bg-[#D4A017] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border border-[#2F6B47] text-[#2F6B47] px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-[#2F6B47] hover:text-[#FFFAFA] transition-all duration-300 w-full sm:w-auto animate-pulseBorder"
            >
              Explore Services
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <div className="relative w-full max-w-md md:max-w-lg group">
            <img
              src={HeroImg}
              alt="AI-powered digital marketing solutions by MarketingBirbal"
              className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#2F6B47] opacity-20 rounded-full animate-spinSlow"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D4A017] opacity-20 rounded-full animate-spinSlow reverse"></div>
          </div>
        </div>
      </div>
      <style jsx="true">{`
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes expandLine {
          0% { width: 0; }
          100% { width: 6rem; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseBorder {
          0% { border-color: #2F6B47; }
          50% { border-color: #D4A017; }
          100% { border-color: #2F6B47; }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 6s ease infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-spinSlow {
          animation: spinSlow 10s linear infinite;
        }
        .reverse {
          animation-direction: reverse;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
