const faqs = [
  { q: 'Kurulum ne kadar sürer?', a: 'Dakikalar içinde başlayabilirsiniz. Vite ile anında geliştirme ortamı hazır.' },
  { q: 'Mobil uyumlu mu?', a: 'Evet, mobil-önce yaklaşımla tasarlandı.' },
  { q: 'Ücretlendirme nasıl?', a: 'Ücretsiz planda başlayın, ihtiyacınıza göre Pro veya Kurumsal’a geçin.' },
]

export default function FAQ() {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-6">
      {faqs.map((f, i) => (
        <details key={i} className="card">
          <summary className="cursor-pointer list-none">
            <span className="font-semibold">{f.q}</span>
          </summary>
          <p className="mt-3 text-slate-600">{f.a}</p>
        </details>
      ))}
    </div>
  )
}