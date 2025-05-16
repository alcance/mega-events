// components/Barcode.tsx
'use client';

import React, { useEffect, useRef } from 'react';

interface BarcodeProps {
  value: string;
  width?: number;
  height?: number;
}

const Barcode: React.FC<BarcodeProps> = ({ 
  value, 
  width = 300, 
  height = 80 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw the barcode on the canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);
    
    // Draw barcode
    ctx.fillStyle = '#000000';
    
    // Start with a little padding
    let x = 10;
    const barWidth = Math.max(1, Math.floor((width - 20) / (value.length * 2)));
    
    // For each character in the value
    for (let i = 0; i < value.length; i++) {
      // Get the value of the digit (0-9)
      const digit = parseInt(value[i], 10);
      
      // The higher the digit, the thicker the bar
      const barHeight = height - 20; // Leave some padding at top and bottom
      
      // Draw a bar with width proportional to the digit
      ctx.fillRect(x, 10, barWidth, barHeight);
      
      // Move to the next position with consistent spacing
      x += barWidth * 2;
    }
    
    // Add the barcode value text below the bars
    ctx.font = '16px Arial';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.fillText(value, width / 2, height - 5);
    
  }, [value, width, height]);

  return (
    <canvas 
      ref={canvasRef} 
      width={width} 
      height={height}
      className="w-full"
    />
  );
};

export default Barcode;