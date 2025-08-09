export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="container py-8 text-sm text-slate-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Nuit. Tüm hakları saklıdır.</p>
        <nav className="flex gap-4">
          <a href="#ozellikler" className="hover:text-indigo-700">Özellikler</a>
          <a href="#fiyatlandirma" className="hover:text-indigo-700">Fiyatlar</a>
          <a href="#iletisim" className="hover:text-indigo-700">İletişim</a>
        </nav>
      </div>
    </footer>
  )
}