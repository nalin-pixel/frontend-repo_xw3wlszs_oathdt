export default function HowItWorks() {
  const steps = [
    { title: 'Create a request', desc: 'Describe what you need and your budget.' },
    { title: 'Compare quotes', desc: 'Receive multiple offers from verified vendors.' },
    { title: 'Approve & order', desc: 'Select the best option and place an order.' },
    { title: 'Track delivery', desc: 'Monitor fulfillment and keep records centralized.' },
  ]

  return (
    <section id="how" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl bg-white border border-gray-200 p-5">
              <div className="h-8 w-8 rounded-md bg-blue-600 text-white flex items-center justify-center font-semibold">{i + 1}</div>
              <h3 className="mt-3 font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
