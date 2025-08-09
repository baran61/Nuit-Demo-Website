export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between py-3">
        <div className="flex-1 flex justify-start">
          <a href="#hero" className="flex items-center gap-2" aria-label="Anasayfa">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="font-extrabold tracking-tight text-xl">Nuit </span>
          </a>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="items-center gap-6 text-sm flex">
            <a href="#ozellikler" className="hover:text-indigo-700">Özellikler</a>
            <a href="#fiyatlandirma" className="hover:text-indigo-700">Paketler</a>
            <a href="#sss" className="hover:text-indigo-700">SSS</a>
            <a href="#iletisim" className="hover:text-indigo-700">İletişim</a>
          </nav>
        </div>
        <div className="flex-1 flex justify-end">
          <a href="#fiyatlandirma" className="btn btn-primary text-sm">Ücretsiz Deneyin</a>
        </div>
      </div>
    </header>
  )
}