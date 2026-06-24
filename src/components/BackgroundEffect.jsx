import React, { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Particle class definition
    class Particle {
      constructor(isIcon = false, iconType = 0) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.isIcon = isIcon;
        this.iconType = iconType; // 0: Scales, 1: Gavel, 2: Pillar, 3: Shield, 4: Book
        this.size = isIcon ? 24 : Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 10;
      }

      update() {
        // Move slowly
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce on borders
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        // Mouse interaction (gravity pull)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Pull gently toward the mouse
            this.x += (dx / distance) * force * 1.5;
            this.y += (dy / distance) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;

        if (!this.isIcon) {
          // Draw a standard dot
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.fill();
        } else {
          // Draw custom vector outline based on type
          ctx.beginPath();
          if (this.iconType === 0) {
            // Scales of Justice
            const sz = this.size;
            ctx.moveTo(this.x, this.y - sz / 2);
            ctx.lineTo(this.x, this.y + sz / 2); // Center bar
            ctx.moveTo(this.x - sz / 3, this.y + sz / 2);
            ctx.lineTo(this.x + sz / 3, this.y + sz / 2); // Base
            ctx.moveTo(this.x - sz / 2, this.y - sz / 4);
            ctx.lineTo(this.x + sz / 2, this.y - sz / 4); // Beam
            // Left pan strings & pan
            ctx.moveTo(this.x - sz / 2, this.y - sz / 4);
            ctx.lineTo(this.x - sz / 2 - sz / 6, this.y + sz / 8);
            ctx.lineTo(this.x - sz / 2 + sz / 6, this.y + sz / 8);
            ctx.closePath();
            // Right pan strings & pan
            ctx.moveTo(this.x + sz / 2, this.y - sz / 4);
            ctx.lineTo(this.x + sz / 2 - sz / 6, this.y + sz / 8);
            ctx.lineTo(this.x + sz / 2 + sz / 6, this.y + sz / 8);
            ctx.closePath();
          } else if (this.iconType === 1) {
            // Gavel (Mallet)
            const sz = this.size;
            ctx.moveTo(this.x - sz / 3, this.y - sz / 3);
            ctx.lineTo(this.x + sz / 3, this.y + sz / 3); // Handle
            ctx.moveTo(this.x - sz / 4, this.y + sz / 6);
            ctx.lineTo(this.x + sz / 6, this.y - sz / 4); // Mallet head
            ctx.moveTo(this.x - sz / 2, this.y + sz / 3);
            ctx.lineTo(this.x + sz / 6, this.y + sz / 3); // Stand base
          } else if (this.iconType === 2) {
            // Greek Pillar / Column
            const sz = this.size;
            ctx.rect(this.x - sz / 3, this.y - sz / 2, (sz * 2) / 3, sz / 6); // Top pediment
            ctx.rect(this.x - sz / 3, this.y + sz / 3, (sz * 2) / 3, sz / 6); // Base pedestal
            // Pillars
            ctx.moveTo(this.x - sz / 4, this.y - sz / 3);
            ctx.lineTo(this.x - sz / 4, this.y + sz / 3);
            ctx.moveTo(this.x, this.y - sz / 3);
            ctx.lineTo(this.x, this.y + sz / 3);
            ctx.moveTo(this.x + sz / 4, this.y - sz / 3);
            ctx.lineTo(this.x + sz / 4, this.y + sz / 3);
          } else if (this.iconType === 3) {
            // Shield of Law
            const sz = this.size;
            ctx.moveTo(this.x - sz / 3, this.y - sz / 2);
            ctx.lineTo(this.x + sz / 3, this.y - sz / 2);
            ctx.lineTo(this.x + sz / 3, this.y);
            ctx.quadraticCurveTo(this.x + sz / 3, this.y + sz / 2, this.x, this.y + sz / 2);
            ctx.quadraticCurveTo(this.x - sz / 3, this.y + sz / 2, this.x - sz / 3, this.y);
            ctx.closePath();
          } else {
            // Law Book
            const sz = this.size;
            ctx.rect(this.x - sz / 3, this.y - sz / 2, (sz * 2) / 3, sz); // Book cover
            ctx.moveTo(this.x - sz / 6, this.y - sz / 3);
            ctx.lineTo(this.x + sz / 6, this.y - sz / 3); // Gilded line 1
            ctx.moveTo(this.x - sz / 6, this.y);
            ctx.lineTo(this.x + sz / 6, this.y); // Gilded line 2
          }
          ctx.stroke();
        }
      }
    }

    const particlesArray = [];
    const numDots = 40;
    const numIcons = 8; // Spawning 8 floating icons

    // Create simple dots
    for (let i = 0; i < numDots; i++) {
      particlesArray.push(new Particle(false));
    }

    // Create custom legal icons
    for (let i = 0; i < numIcons; i++) {
      particlesArray.push(new Particle(true, i % 5));
    }

    // Connect particles with thin lines
    const drawLines = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect nodes that are close
          if (dist < 130) {
            const opacity = (1 - dist / 130) * 0.05;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        // Draw connections to the mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particlesArray[a].x - mouse.x;
          const dy = particlesArray[a].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const opacity = (1 - dist / mouse.radius) * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
};

export default BackgroundEffect;
