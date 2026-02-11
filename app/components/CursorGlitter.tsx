"use client";

import { useEffect, useState } from "react";

export default function CursorGlitter() {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; color: string; size: number }>
  >([]);

  useEffect(() => {
    let idCounter = 0;
    let lastTime = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle sparkle creation to every 50ms
      if (now - lastTime < 50) return;
      lastTime = now;

      const colors = [
        "#ff6b6b",
        "#ffa94d",
        "#ffd43b",
        "#51cf66",
        "#339af0",
        "#845ef7",
        "#f06595",
      ];
      const newSparkle = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
      };

      setSparkles((prev) => [...prev, newSparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            borderRadius: "50%",
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
          }}
        />
      ))}
    </div>
  );
}
