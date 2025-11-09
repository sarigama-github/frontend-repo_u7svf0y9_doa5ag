import { ArrowUpRight, ArrowDownRight, Users } from 'lucide-react';

function Row({ name, usage, delta, icon }) {
  const Up = ArrowUpRight;
  const Down = ArrowDownRight;
  const isUp = delta >= 0;
  const DeltaIcon = isUp ? Up : Down;
  const deltaColor = isUp ? 'text-emerald-600' : 'text-rose-600';

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-md bg-gray-100 grid place-items-center">
          {icon || <Users className="h-4 w-4 text-gray-600" />}
        </div>
        <span className="text-sm text-gray-800">{name}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-900">{usage} GB</span>
        <span className={`text-xs ${deltaColor} flex items-center gap-1`}>
          <DeltaIcon className="h-3 w-3" />
          {Math.abs(delta)}%
        </span>
      </div>
    </div>
  );
}

function TopConsumers() {
  const rows = [
    { name: 'Data Science', usage: 2840, delta: 6.3 },
    { name: 'Product Analytics', usage: 2310, delta: -1.2 },
    { name: 'Marketing', usage: 1745, delta: 4.8 },
    { name: 'Finance', usage: 1282, delta: 2.1 },
  ];

  return (
    <div className="p-4 rounded-xl border bg-white shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-900">Top Consumers</h3>
        <span className="text-xs text-gray-500">Departments</span>
      </div>
      <div>
        {rows.map((r) => (
          <Row key={r.name} {...r} />
        ))}
      </div>
    </div>
  );
}

export default TopConsumers;
