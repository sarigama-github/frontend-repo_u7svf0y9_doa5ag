import { Calendar, Search, Settings, Database } from 'lucide-react';

function Header() {
  return (
    <header className="w-full flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow">
          <Database className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Usage Analytics</h1>
          <p className="text-sm text-gray-500">Company-wide data usage overview</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border bg-white shadow-sm">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            className="outline-none text-sm placeholder:text-gray-400"
            placeholder="Search departments, users..."
          />
        </div>

        <button className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-white shadow-sm text-sm">
          <Calendar className="h-4 w-4 text-gray-600" />
          <span className="hidden sm:inline text-gray-700">Last 30 days</span>
        </button>

        <button className="p-2 rounded-lg border bg-white shadow-sm">
          <Settings className="h-4 w-4 text-gray-700" />
        </button>
      </div>
    </header>
  );
}

export default Header;
