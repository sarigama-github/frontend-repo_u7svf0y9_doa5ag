function KPI({ label, value, delta, trend }) {
  const deltaColor = delta > 0 ? 'text-emerald-600' : delta < 0 ? 'text-rose-600' : 'text-gray-600';
  const trendText = delta > 0 ? '▲' : delta < 0 ? '▼' : '•';
  return (
    <div className="p-4 rounded-xl border bg-white shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <div className="mt-2 flex items-end justify-between">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        <span className={`text-xs ${deltaColor}`}>{trendText} {Math.abs(delta)}%</span>
      </div>
      {trend && (
        <div className="mt-3 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600" style={{ width: `${Math.min(100, Math.max(0, trend))}%` }} />
        </div>
      )}
    </div>
  );
}

function KPIGrid() {
  const items = [
    { label: 'Total Data (GB)', value: '12,480', delta: 4.2, trend: 72 },
    { label: 'Active Users', value: '1,238', delta: -1.1, trend: 56 },
    { label: 'Avg. Query Time', value: '182 ms', delta: 0.8, trend: 64 },
    { label: 'API Calls', value: '3.1M', delta: 6.9, trend: 81 },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((i) => (
        <KPI key={i.label} {...i} />
      ))}
    </section>
  );
}

export default KPIGrid;
