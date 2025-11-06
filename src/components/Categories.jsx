export default function Categories() {
  const categories = [
    { name: 'Office Supplies', desc: 'Paper, pens, stationery', color: 'bg-blue-50', accent: 'text-blue-700' },
    { name: 'IT & Peripherals', desc: 'Laptops, monitors, accessories', color: 'bg-indigo-50', accent: 'text-indigo-700' },
    { name: 'Facilities', desc: 'Storage, lighting, tools', color: 'bg-teal-50', accent: 'text-teal-700' },
    { name: 'Safety & PPE', desc: 'Gloves, helmets, signage', color: 'bg-amber-50', accent: 'text-amber-700' },
    { name: 'Cleaning', desc: 'Detergents, wipes, bins', color: 'bg-emerald-50', accent: 'text-emerald-700' },
    { name: 'Catering', desc: 'Coffee, snacks, disposables', color: 'bg-rose-50', accent: 'text-rose-700' },
  ]

  return (
    <section id="categories" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Browse categories</h2>
            <p className="text-gray-600">Curated catalog of non-medical goods from vetted vendors</p>
          </div>
          <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className={`rounded-xl border border-gray-200 ${cat.color} p-5 hover:shadow-md transition-shadow`}> 
              <h3 className={`font-semibold ${cat.accent}`}>{cat.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{cat.desc}</p>
              <button className="mt-4 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">Explore →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
