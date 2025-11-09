import Header from './components/Header';
import KPIGrid from './components/KPIGrid';
import UsageChart from './components/UsageChart';
import TopConsumers from './components/TopConsumers';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-10">
        <Header />

        <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <KPIGrid />
            <UsageChart />
          </div>
          <div className="space-y-6">
            <TopConsumers />

            <div className="p-4 rounded-xl border bg-white shadow-sm">
              <h3 className="font-medium text-gray-900 mb-3">Storage Breakdown</h3>
              <ul className="space-y-3">
                {[{label:'Warehouses',v:48},{label:'Data Lakes',v:32},{label:'Streams',v:14},{label:'Caches',v:6}].map((i)=> (
                  <li key={i.label} className="flex items-center gap-3">
                    <div className="w-full">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>{i.label}</span>
                        <span>{i.v}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600" style={{ width: `${i.v}%` }} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
