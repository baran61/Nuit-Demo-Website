import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Dekoratif arka plan gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-indigo-100 via-white to-white"></div>

      <Navbar />
      <main>
        <Hero />
        <section id="ozellikler" className="section flex items-center justify-center min-h-screen">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Güçlü özellikler, <span className="text-indigo-600">sade</span> kullanım
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-center">Performansı yüksek, tasarımı temiz ve bakımı kolay bir arayüz.</p>
            <Features />
          </div>
        </section>

        <section id="fiyatlandirma" className="section bg-slate-50/60 flex items-center justify-center min-h-screen">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Basit ve şeffaf fiyatlandırma</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-center">İhtiyacına göre ölçeklenebilir paketler.</p>
            <Pricing />
          </div>
        </section>

        <section id="sss" className="section flex items-center justify-center min-h-screen">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Sık Sorulan Sorular</h2>
            <FAQ />
          </div>
        </section>

        <section id="iletisim" className="section bg-slate-50/60 flex items-center justify-center min-h-screen">
          <div className="container text-center">
            <div className="card text-center">
              <span className="badge mb-3">İletişim</span>
              <h3 className="text-2xl md:text-3xl font-bold">Birlikte güzel şeyler yapalım</h3>
              <p className="mt-2 text-slate-600">Demo, teklif veya geri bildirim için bize yaz.</p>
              <a href="mailto:hello@example.com" className="btn btn-primary mt-6" aria-label="E-posta gönder">
                E-posta Gönder
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}