import { useEffect, useRef } from 'react';

// Lightweight canvas line chart without external deps
function drawChart(canvas, data) {
  const ctx = canvas.getContext('2d');
  const dpi = window.devicePixelRatio || 1;
  const width = canvas.clientWidth * dpi;
  const height = canvas.clientHeight * dpi;
  canvas.width = width;
  canvas.height = height;

  ctx.clearRect(0, 0, width, height);

  // Padding
  const pad = 24 * dpi;
  const w = width - pad * 2;
  const h = height - pad * 2;

  const maxY = Math.max(...data) * 1.1;
  const minY = Math.min(...data) * 0.9;

  // Grid
  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad + (h / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(pad + w, y);
    ctx.stroke();
  }

  // Line
  ctx.strokeStyle = '#2563eb';
  ctx.lineWidth = 2 * dpi;
  ctx.beginPath();
  data.forEach((v, idx) => {
    const x = pad + (w / (data.length - 1)) * idx;
    const y = pad + h - ((v - minY) / (maxY - minY)) * h;
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Gradient fill
  const grad = ctx.createLinearGradient(0, pad, 0, pad + h);
  grad.addColorStop(0, 'rgba(37, 99, 235, 0.25)');
  grad.addColorStop(1, 'rgba(37, 99, 235, 0)');
  ctx.fillStyle = grad;
  ctx.lineTo(pad + w, pad + h);
  ctx.lineTo(pad, pad + h);
  ctx.closePath();
  ctx.fill();
}

function UsageChart() {
  const ref = useRef(null);

  useEffect(() => {
    const data = [120, 180, 160, 220, 260, 240, 300, 330, 310, 360, 420, 400];
    const canvas = ref.current;
    if (!canvas) return;

    const handle = () => drawChart(canvas, data);
    handle();
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  return (
    <div className="p-4 rounded-xl border bg-white shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-900">Monthly Data Usage</h3>
        <span className="text-xs text-gray-500">GB over time</span>
      </div>
      <div className="h-56 w-full">
        <canvas ref={ref} className="h-full w-full" />
      </div>
    </div>
  );
}

export default UsageChart;
