import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId;
    let core;
    const particlesArray = [];
    const moonsArray = [];
    const mouse = {
      x: null,
      y: null,
      radius: 150
    };

    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // --- 1. Moving Background Core (Hexagon) ---
    class Core {
      constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.size = 25;
        this.speedX = 1.2;
        this.speedY = 1.2;
        this.angle = 0;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Bounce off edges
        if (this.x < this.size || this.x > canvas.width - this.size) this.speedX *= -1;
        if (this.y < this.size || this.y > canvas.height - this.size) this.speedY *= -1;
        this.angle += 0.015;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          ctx.lineTo(this.size * Math.cos(angle), this.size * Math.sin(angle));
        }
        ctx.closePath();
        ctx.strokeStyle = '#00ffd5';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#00ffd5';
        ctx.stroke();
        ctx.fillStyle = 'rgba(0, 255, 213, 0.15)';
        ctx.fill();
        ctx.restore();
      }
    }

    // --- 2. Floating Moon Phases ---
    class Moon {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 20 + 10;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.tilt = Math.random() * Math.PI * 2;
        this.phase = (Math.random() * 2 - 1) * this.radius;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < -this.radius) this.x = canvas.width + this.radius;
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = canvas.height + this.radius;
        if (this.y > canvas.height + this.radius) this.y = -this.radius;
        this.tilt += 0.001;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.tilt);
        
        // Base glowing moon
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 213, 0.3)';
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00ffd5';
        ctx.fill();

        // Cutout for the phase effect
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(this.phase, 0, this.radius * 0.95, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
        
        ctx.restore();
      }
    }

    // --- 3. Particles connected to Core ---
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }
      update() {
        // Slight pull towards the moving core
        const dx = core.x - this.x;
        const dy = core.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          this.x += dx * 0.005;
          this.y += dy * 0.005;
        }
        
        // Edge collision
        if (this.x + this.size >= canvas.width || this.x - this.size <= 0) {
          this.speedX = -this.speedX;
        }
        if (this.y + this.size >= canvas.height || this.y - this.size <= 0) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
      draw() {
        ctx.fillStyle = 'rgba(0, 255, 213, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      core = new Core();
      moonsArray.length = 0;
      particlesArray.length = 0;
      
      for (let i = 0; i < 5; i++) {
        moonsArray.push(new Moon());
      }
      for (let i = 0; i < 70; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Moons first so they sit in the background
      for (let i = 0; i < moonsArray.length; i++) {
        moonsArray[i].update();
        moonsArray[i].draw();
      }

      // Draw Core
      core.update();
      core.draw();

      // Draw Particles and connection lines
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Draw line from particle to core
        const dx = particlesArray[i].x - core.x;
        const dy = particlesArray[i].y - core.y;
        const distToCore = Math.sqrt(dx * dx + dy * dy);
        
        if (distToCore < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 213, ${1 - distToCore / 150})`;
          ctx.lineWidth = 1;
          ctx.moveTo(core.x, core.y);
          ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
          ctx.stroke();
        }

        // Draw network lines between particles
        for (let j = i; j < particlesArray.length; j++) {
          const p2 = particlesArray[j];
          const dx2 = particlesArray[i].x - p2.x;
          const dy2 = particlesArray[i].y - p2.y;
          const distToParticle = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          
          if (distToParticle < 80) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 213, ${(1 - distToParticle / 80) * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(); // Reinitialize coordinates on resize
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="particle-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;
