const plans = [
  {
    name: "Ücretsiz Plan",
    price: "₺0",
    tagline: "Başlangıç için",
    features: ["Temel bileşenler", "Event Listelenmesi", "Toplu Bildirimler"],
    cta: "Ücretsiz Başlat",
    popular: true,
  },
  {
    name: "Pro",
    price: "₺1490/ay",
    tagline: "Büyüyen etkinlikler için",
    features: [
      "Tüm Başlangıç özellikleri",
      "Öncelikli destek",
      "Öne çıkan etkinlikler",
      "Gold Sponsorlu Etkinlikler",
    ],
    cta: "Pro’ya Geç",
    popular: false,
  },
  {
    name: "Kurumsal",
    price: "Bize Ulaşın",
    tagline: "Özel gereksinimler",
    features: ["SSO / Güvenlik", "Özel SLA", "Danışmanlık"],
    cta: "Teklif Al",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="mt-10 grid md:grid-cols-3 gap-6">
      {plans.map((p, i) => (
        <div key={i} className={`card text-center ${p.popular ? 'ring-2 ring-indigo-600' : ''}`}>
          {p.popular && <div className="badge mb-3">En Popüler</div>}
          <h3 className="text-xl font-bold">{p.name}</h3>
          <p className="mt-1 text-slate-600">{p.tagline}</p>
          <div className="mt-6 text-4xl font-extrabold">{p.price}</div>
          <ul className="mt-6 text-sm text-slate-600 space-y-2">
            {p.features.map((f, idx) => <li key={idx} className="flex items-center gap-2 justify-center">✅ {f}</li>)}
          </ul>
          <a href="#iletisim" className={`btn mt-8 ${p.popular ? 'btn-primary' : 'btn-ghost'}`}>{p.cta}</a>
        </div>
      ))}
    </div>
  )
}