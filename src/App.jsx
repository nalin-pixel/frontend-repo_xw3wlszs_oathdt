import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedVendors from './components/FeaturedVendors'
import HowItWorks from './components/HowItWorks'

function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <Hero onSearch={(q) => setQuery(q)} />

        {query && (
          <section className="py-6 bg-blue-50/60 border-y border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-sm text-blue-900">
                Showing results for: <span className="font-semibold">{query}</span>
              </p>
            </div>
          </section>
        )}

        <Categories />
        <FeaturedVendors />
        <HowItWorks />
      </main>

      <footer id="contact" className="mt-auto border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ProcureX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
