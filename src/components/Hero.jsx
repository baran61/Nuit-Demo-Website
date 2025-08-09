export default function Hero() {
  return (
    <section id="hero" className="section pt-24 md:pt-32">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center gap-20 ">
          <div className="relative pt-8">
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-md ml-auto">
              Yeni <span className="text-indigo-600">Event</span> uygulaman,
              <br className="hidden md:block" /> dakikalar içinde elinde.
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-md ml-auto">
              Kullanıcı dostu arayüzü ve güçlü özellikleri ile etkinliklerinizi kolayca yönetin. Etkinlik planlaması hiç bu kadar eğlenceli olmamıştı!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md ml-auto">
              <a href="#fiyatlandirma" className="btn btn-primary">Hemen Başla</a>
              <a href="#ozellikler" className="btn btn-ghost">Paketlere Göz At</a>
            </div>

          <ul className="mt-6 grid grid-cols-2 gap-5 text-sm text-slate-600 max-w-md ml-auto">
              <li className="flex items-center gap-2"><span aria-hidden="true">✅</span>Kullanışlı</li>
              <li className="flex items-center gap-2"><span aria-hidden="true">✅</span>Erişilebilir</li>
              <li className="flex items-center gap-2"><span aria-hidden="true">✅</span>Kullanıcı Odaklı</li>
              <li className="flex items-center gap-2"><span aria-hidden="true">✅</span>Eğlenceli</li>
            </ul>
          </div>

          <div className="relative">
            {/* Demo Görsel alanı */}
            <div className="card p-0 overflow-hidden">
              <img
              src="/detay.jpg"
              alt= "Demo Görsel"
              className="h-64 md:h-80 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-slate-600 text-md text-center"> Etkinliklere yeni bir bakış açısı yarat !</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="badge">%98 Memnuniyet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}