import { Building2 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white">
            <Building2 className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-gray-900">ProcureX</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#categories" className="hover:text-gray-900 transition-colors">Categories</a>
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Sign in</button>
          <button className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm">Get started</button>
        </div>
      </div>
    </header>
  )
}
