// ParticleCube.jsx
import React, { useRef, useEffect } from "react";
import "./ParticleCube.css";

const ParticleCube = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: 0 });
  const explosionPoints = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    // Set canvas size based on parent container
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight || 500; // Fallback height
    };

    resizeCanvas(); // Initial resize

    // Particle class
    function Particle(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.dx = (Math.random() - 0.5) * 1;
      this.dy = (Math.random() - 0.5) * 1;
      this.radius = radius;
      this.color = color;
      this.ttl = 0.45;
      this.opacity = 1;

      this.update = function () {
        const diffX = mouse.current.x - (canvas.width / 2) - this.x;
        const diffY = mouse.current.y - (canvas.height / 2) - this.y;
        const dist2 = diffX * diffX + diffY * diffY + 1;
        const ddx = 0.1 * Math.abs(diffX) * diffX / dist2;
        const ddy = 0.1 * Math.abs(diffY) * diffY / dist2;
        this.dx += ddx;
        this.dy += ddy;

        this.x += this.dx;
        this.y += this.dy;

        c.fillStyle = `rgba(120, 107, 215, ${this.opacity})`;
        c.fill();

        this.draw();
        this.radius -= this.radius / (this.ttl / 0.005);
        this.ttl -= 0.01;
      };

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      };
    }

    // ExplosionPoint class
    function ExplosionPoint(x, y) {
      this.x = x;
      this.y = y;
      this.particles = [];
      this.timer = 0;

      this.update = function () {
        this.timer += 1;

        if (this.timer % 4 === 0) {
          const radius = 4;
          this.particles.push(new Particle(this.x, this.y, radius));
        }

        for (let i = 0; i < this.particles.length; i++) {
          if (this.particles[i].ttl < 0) {
            this.particles.splice(i, 1);
            i--;
          } else {
            this.particles[i].update();
          }
        }
      };
    }

    // Function to draw a line with explosion points
    function drawLine(x1, y1, x2, y2) {
      const m = (y2 - y1) / (x2 - x1);
      const explosionAmount = 10;
      const travelInterval = (x2 - x1) / explosionAmount;

      for (let i = 1; i <= explosionAmount; i++) {
        let x = (i * travelInterval) + x1;
        let y = (m * x) + (y1 - m * x1);

        if (!isFinite(m)) {
          const yTravelInterval = (y2 - y1) / explosionAmount;
          y = (i * yTravelInterval) + y1;
        }

        explosionPoints.current.push(new ExplosionPoint(x, y));
      }
    }

    // Load the image (optional)
    const webpackImage = new Image();
    webpackImage.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/448917/webpack.png";

    // Scale factor for the cube
    const scale = 1.5; // Increase the size by 1.5x

    // Draw the cube structure with scaled coordinates
    c.save();
    c.translate(canvas.width / 2, canvas.height / 2);

    // Top box
    drawLine(-115 * scale, -64 * scale, 0, -127 * scale);
    drawLine(115 * scale, -64 * scale, 0, -127 * scale);
    drawLine(0, 0, 115 * scale, -64 * scale);
    drawLine(0, 0, -115 * scale, -64 * scale);

    // Bottom box
    drawLine(0, 135 * scale, 120 * scale, 70 * scale);
    drawLine(0, 135 * scale, -120 * scale, 70 * scale);

    // Outside lines for box height
    drawLine(-120 * scale, -64 * scale, -120 * scale, 70 * scale);
    drawLine(120 * scale, -64 * scale, 120 * scale, 70 * scale);

    // Middle lines
    drawLine(0, -10 * scale, 0, 135 * scale);

    c.restore();

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = window.requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      c.save();
      c.translate(canvas.width / 2, canvas.height / 2);
      c.drawImage(webpackImage, -175 * scale, -130 * scale, 350 * scale, 391 * scale); // Scale the image as well
      for (let i = 0; i < explosionPoints.current.length; i++) {
        explosionPoints.current[i].update();
      }
      c.restore();
    };

    animate();

    // Event listeners
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const handleTouchMove = (event) => {
      event.preventDefault();
      mouse.current.x = event.touches[0].pageX;
      mouse.current.y = event.touches[0].pageY;
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ParticleCube;