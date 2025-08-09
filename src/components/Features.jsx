const features = [
  {
    title: "Kullanıcı Odaklı",
    desc: "Kullanıcı odaklı bir uygulama.",
    icon: "👨🏻‍💻",
  },
  {
    title: "Kolay Kullanım",
    desc: "Sade ve sezgisel arayüz.",
    icon: "⚡",
  },
  {
    title: "Tasarım Sistemi",
    desc: "Tutarlı tipografi, spacing ve renkler.",
    icon: "🎨",
  },
  {
    title: "Erişilebilirlik",
    desc: "Kontrast, odak ve semantik etiketler.",
    icon: "♿",
  },
  { title: "Responsive", desc: "Mobil-önce grid ve layout.", icon: "📱" },
  {
    title: "Performans",
    desc: "Hızlı yükleme ve etkileşim süreleri.",
    icon: "🚀",
  },
];

export default function Features() {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div key={idx} className="card flex flex-col items-center text-center">
            <div aria-hidden="true" className="text-2xl">{f.icon}</div>
            <h3 className="mt-3 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}