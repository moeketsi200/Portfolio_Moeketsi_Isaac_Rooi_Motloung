import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 60;
    const connectionDistance = 180;
    let cubesArray = [];
    const numberOfCubes = 15;
    let starsArray = [];
    const numberOfStars = 200;
    let moonsArray = [];
    const numberOfMoons = 8;
    let planetsArray = [];
    const solarSystem = [
      { color: '#b5a7a7', ring: false }, // Mercury
      { color: '#e3bb76', ring: false }, // Venus
      { color: '#6b93d6', ring: false }, // Earth
      { color: '#c1440e', ring: false }, // Mars
      { color: '#d39c7e', ring: false }, // Jupiter
      { color: '#ead6b8', ring: true },  // Saturn
      { color: '#4b70dd', ring: true },  // Uranus
      { color: '#274687', ring: false }  // Neptune
    ];

    const core = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      baseSize: 25,
      size: 25,
      sides: 6,
      rotation: 0,
      pulse: 0
    };

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      update() {
        if (Math.random() > 0.99) this.opacity = Math.random() * 0.5 + 0.3;
      }
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = 'rgba(0, 255, 213, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class WireframeCube {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.angleX = Math.random() * Math.PI * 2;
        this.angleY = Math.random() * Math.PI * 2;
        this.angleZ = Math.random() * Math.PI * 2;
        this.rotSpeedX = (Math.random() - 0.5) * 0.01;
        this.rotSpeedY = (Math.random() - 0.5) * 0.01;
        this.rotSpeedZ = (Math.random() - 0.5) * 0.01;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        else if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        else if (this.y < -this.size) this.y = canvas.height + this.size;

        this.angleX += this.rotSpeedX;
        this.angleY += this.rotSpeedY;
        this.angleZ += this.rotSpeedZ;
      }
      draw() {
        const nodes = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
        const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
        let projectedNodes = [];

        for (let i = 0; i < nodes.length; i++) {
          let [x, y, z] = nodes[i];
          let y1 = y * Math.cos(this.angleX) - z * Math.sin(this.angleX);
          let z1 = y * Math.sin(this.angleX) + z * Math.cos(this.angleX);
          y = y1; z = z1;

          let x2 = x * Math.cos(this.angleY) + z * Math.sin(this.angleY);
          let z2 = -x * Math.sin(this.angleY) + z * Math.cos(this.angleY);
          x = x2; z = z2;

          let x3 = x * Math.cos(this.angleZ) - y * Math.sin(this.angleZ);
          let y3 = x * Math.sin(this.angleZ) + y * Math.cos(this.angleZ);
          x = x3; y = y3;

          projectedNodes.push([x * this.size + this.x, y * this.size + this.y]);
        }

        ctx.strokeStyle = 'rgba(0, 255, 213, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < edges.length; i++) {
          let p1 = projectedNodes[edges[i][0]];
          let p2 = projectedNodes[edges[i][1]];
          ctx.moveTo(p1[0], p1[1]);
          ctx.lineTo(p2[0], p2[1]);
        }
        ctx.stroke();
      }
    }

    class Moon {
      constructor() {
        this.size = Math.random() * 10 + 5; // Random size between 10 and 25
        this.x = Math.random() * (canvas.width - this.size * 2) + this.size;
        this.y = Math.random() * (canvas.height - this.size * 2) + this.size;
        this.speedX = (Math.random() - 0.5) * 0.5; // Gentle drift
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        this.color = '#00ffd5'; // Site's main highlight color
        
        // Randomly choose a moon phase and a tilt angle
        const phases = ['full', 'half', 'crescent', 'gibbous'];
        this.phase = phases[Math.floor(Math.random() * phases.length)];
        this.rotationAngle = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.002; // Very slow rotation
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Bounce off edges gently
        if (this.x + this.size > canvas.width || this.x - this.size < 0) this.speedX *= -1;
        if (this.y + this.size > canvas.height || this.y - this.size < 0) this.speedY *= -1;
        
        this.rotationAngle += this.rotSpeed;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotationAngle);

        // The 3D Gradient and Neon Glow Effect
        const gradient = ctx.createRadialGradient(-this.size / 3, -this.size / 3, this.size / 10, 0, 0, this.size);
        gradient.addColorStop(0, '#ffffff'); // Bright white center
        gradient.addColorStop(0.6, this.color); // Neon mid-tone
        gradient.addColorStop(1, 'rgba(0, 255, 213, 0)'); // Fade out edge

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 20; 
        ctx.shadowColor = this.color;

        // Draw the specific moon phase shape
        ctx.beginPath();
        if (this.phase === 'full') {
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        } else if (this.phase === 'half') {
          ctx.arc(0, 0, this.size, -Math.PI / 2, Math.PI / 2);
          ctx.lineTo(0, -this.size); // Straight line back to top
        } else if (this.phase === 'crescent') {
          ctx.arc(0, 0, this.size, -Math.PI / 2, Math.PI / 2);
          ctx.quadraticCurveTo(this.size * 0.5, 0, 0, -this.size); // Inward curve
        } else if (this.phase === 'gibbous') {
          ctx.arc(0, 0, this.size, -Math.PI / 2, Math.PI / 2);
          ctx.quadraticCurveTo(-this.size * 0.5, 0, 0, -this.size); // Outward curve
        }
        ctx.fill();
        ctx.restore();
      }
    }

    class Planet {
      constructor(color, hasRing) {
        this.size = Math.random() * 10 + 5; // Same size as the moons
        this.x = Math.random() * (canvas.width - this.size * 2) + this.size;
        this.y = Math.random() * (canvas.height - this.size * 2) + this.size;
        this.speedX = (Math.random() - 0.5) * 0.5; // Gentle drift
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        this.color = color;
        this.hasRing = hasRing;
        this.rotationAngle = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.01;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Bounce off edges gently
        if (this.x + this.size > canvas.width || this.x - this.size < 0) this.speedX *= -1;
        if (this.y + this.size > canvas.height || this.y - this.size < 0) this.speedY *= -1;
        
        this.rotationAngle += this.rotSpeed;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotationAngle);

        // 3D Planet Gradient
        const gradient = ctx.createRadialGradient(-this.size / 3, -this.size / 3, this.size / 10, 0, 0, this.size);
        gradient.addColorStop(0, '#ffffff'); 
        gradient.addColorStop(0.5, this.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.6)'); // Dark edge for depth

        ctx.fillStyle = gradient;
        ctx.shadowBlur = 15; 
        ctx.shadowColor = this.color;

        // Draw the planet body
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw a 3D ring if the planet has one
        if (this.hasRing) {
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size * 2.2, this.size * 0.3, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, 0.4)`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) particlesArray.push(new Particle());
      cubesArray = [];
      for (let i = 0; i < numberOfCubes; i++) cubesArray.push(new WireframeCube());
      starsArray = [];
      for (let i = 0; i < numberOfStars; i++) starsArray.push(new Star());
      moonsArray = [];
      for (let i = 0; i < numberOfMoons; i++) moonsArray.push(new Moon());
      planetsArray = [];
      solarSystem.forEach(planet => planetsArray.push(new Planet(planet.color, planet.ring)));
    }

    function drawCore() {
      core.rotation += 0.005;
      core.pulse += 0.02;
      core.size = core.baseSize + Math.sin(core.pulse) * 5;

      ctx.strokeStyle = 'rgba(0, 255, 213, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < core.sides; i++) {
        const angle = core.rotation + (i * 2 * Math.PI) / core.sides;
        const x = core.x + Math.cos(angle) * core.size;
        const y = core.y + Math.sin(angle) * core.size;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < starsArray.length; i++) {
        starsArray[i].update();
        starsArray[i].draw();
      }

      for (let i = 0; i < moonsArray.length; i++) {
        moonsArray[i].update();
        moonsArray[i].draw();
      }

      for (let i = 0; i < planetsArray.length; i++) {
        planetsArray[i].update();
        planetsArray[i].draw();
      }

      drawCore();

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        const dxCore = particlesArray[i].x - core.x;
        const dyCore = particlesArray[i].y - core.y;
        const distanceCore = Math.sqrt(dxCore * dxCore + dyCore * dyCore);

        if (distanceCore < connectionDistance + 50) {
          ctx.beginPath();
          const opacity = 1 - (distanceCore / (connectionDistance + 50));
          ctx.strokeStyle = `rgba(0, 255, 213, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.moveTo(core.x, core.y);
          ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
          ctx.stroke();
        }

        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            let opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(0, 255, 213, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < cubesArray.length; i++) {
        cubesArray[i].update();
        cubesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      core.x = canvas.width / 2;
      core.y = canvas.height / 2;
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    // Cleanup function when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="particle-canvas" 
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} 
    />
  );
};

export default BackgroundCanvas;
