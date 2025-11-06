export default function FeaturedVendors() {
  const vendors = [
    { name: 'OfficePro', rating: 4.8, tags: ['Office', 'IT'], color: 'bg-blue-50' },
    { name: 'FacilityHub', rating: 4.7, tags: ['Facilities', 'Safety'], color: 'bg-indigo-50' },
    { name: 'Clean&Co', rating: 4.6, tags: ['Cleaning', 'Catering'], color: 'bg-emerald-50' },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured vendors</h2>
            <p className="text-gray-600">Trusted suppliers with fast lead times and great ratings</p>
          </div>
          <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">Become a vendor</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vendors.map((v) => (
            <div key={v.name} className={`rounded-xl border border-gray-200 ${v.color} p-6 hover:shadow-md transition-shadow`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{v.name}</h3>
                <div className="text-sm font-medium text-amber-600">★ {v.rating.toFixed(1)}</div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {v.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white border border-gray-200 text-gray-700">{t}</span>
                ))}
              </div>
              <button className="mt-4 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">View catalog →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
