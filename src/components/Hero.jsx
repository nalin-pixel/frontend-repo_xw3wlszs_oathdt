export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              Streamlined procurement for non‑medical goods
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Source, compare, and purchase office supplies, facilities equipment, IT accessories and more — all from vetted vendors.
            </p>
            <div className="mt-8 bg-white/80 backdrop-blur border border-gray-200 rounded-xl p-2 shadow-sm w-full max-w-xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search products, e.g. ergonomic chairs"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onSearch?.(e.target.value)
                  }}
                  className="flex-1 px-4 py-3 rounded-lg outline-none text-gray-900 placeholder:text-gray-400"
                />
                <button
                  onClick={() => {
                    const el = document.querySelector('#search-input')
                    if (el) onSearch?.(el.value)
                  }}
                  className="px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
                >
                  Search
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500 px-2">Popular: laptops, paper, warehouse racks, safety gear</p>
            </div>
          </div>
          <div className="relative h-80 sm:h-96 lg:h-[28rem]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-200 via-indigo-200 to-cyan-200" />
            <div className="absolute inset-3 rounded-2xl bg-white shadow-2xl border border-gray-200 p-6 grid grid-cols-2 gap-4">
              {[
                { title: 'Office', color: 'bg-blue-50', items: ['Chairs','Desks','Printers'] },
                { title: 'IT', color: 'bg-indigo-50', items: ['Monitors','Keyboards','Cables'] },
                { title: 'Facilities', color: 'bg-teal-50', items: ['Lighting','Racks','Carts'] },
                { title: 'Safety', color: 'bg-amber-50', items: ['Gloves','Helmets','Vests'] },
              ].map((cat) => (
                <div key={cat.title} className={`rounded-xl p-4 border border-gray-200 ${cat.color}`}>
                  <h3 className="font-semibold text-gray-800">{cat.title}</h3>
                  <ul className="mt-2 text-sm text-gray-600 space-y-1">
                    {cat.items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
