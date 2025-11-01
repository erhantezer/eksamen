import Link from "next/link";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      {/* Hero */}
      <header className="px-4">
        <div className="mx-auto max-w-5xl pt-12 pb-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            📚 Eksamenstrening
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Les, analyser og øv med korte oppgaver og quiz – alt på ett sted.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 pb-10">
        {/* Lesetekster */}
        <section aria-labelledby="lesetekster-heading" className="mt-6">
          <div className="flex items-baseline justify-between">
            <h2
              id="lesetekster-heading"
              className="text-xl sm:text-2xl font-bold text-slate-800"
            >
              📖 Lesetekster
            </h2>
            <span className="text-xs sm:text-sm text-slate-500">
              3 tekster
            </span>
          </div>

          <ul className="mt-4 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
            {/* Elisabeth */}
            <li className="group">
              <Link
                href="/kjell"
                className="block rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 ring-1 ring-blue-100">
                      Novelle
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 ring-1 ring-slate-200">
                      1996
                    </span>
                  </div>
                  <p className="mt-2 text-base font-medium text-blue-700 group-hover:text-blue-800">
                    Kjell Askildsen (1996). «Elisabeth».
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    <em>Hundene i Tessaloniki</em>. Forlaget Oktober. (s. 21–34)
                  </p>
                </div>
              </Link>
            </li>

            {/* En og To og Tre */}
            <li className="group">
              <Link
                href="/gro"
                className="block rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 ring-1 ring-blue-100">
                      Novelle
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 ring-1 ring-slate-200">
                      2009
                    </span>
                  </div>
                  <p className="mt-2 text-base font-medium text-blue-700 group-hover:text-blue-800">
                    Gro Dahle (2009). «En og To og Tre».
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    <em>Hvem som helst, hvor som helst</em>. Cappelen Damm. (s. 43–47)
                  </p>
                </div>
              </Link>
            </li>

            {/* Isflak */}
            <li className="group sm:col-span-2">
              <Link
                href="/ari"
                className="block rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 ring-1 ring-blue-100">
                      Novelle
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 ring-1 ring-slate-200">
                      2004
                    </span>
                  </div>
                  <p className="mt-2 text-base font-medium text-blue-700 group-hover:text-blue-800">
                    Ari Behn (2004). «Isflak».
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    <em>Talent for lykke</em>. Kolon Forlag. (s. 63–64)
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </section>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Quiz */}
        <section aria-labelledby="quiz-heading">
          <h2
            id="quiz-heading"
            className="text-xl sm:text-2xl font-bold text-slate-800"
          >
            📝 Quiz
          </h2>

          <ul className="mt-4 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
            {/* Askildsen Quiz */}
            <li className="group">
              <Link
                href="/askil"
                className="block rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <div className="p-5">
                  <div className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                    Quiz
                  </div>
                  <p className="mt-2 text-base font-medium text-emerald-700 group-hover:text-emerald-800">
                    Quiz – Kjell Askildsen: «Elisabeth»
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Person, konflikt, miljø og tema
                  </p>
                </div>
              </Link>
            </li>

            {/* Dahle Quiz */}
            <li className="group">
              <Link
                href="/dahle"
                className="block rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <div className="p-5">
                  <div className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                    Quiz
                  </div>
                  <p className="mt-2 text-base font-medium text-emerald-700 group-hover:text-emerald-800">
                    Quiz – Gro Dahle: «En og To og Tre»
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Forteller, symboler og sosialt rom
                  </p>
                </div>
              </Link>
            </li>

            {/* Behn Quiz */}
            <li className="group sm:col-span-2">
              <Link
                href="/behn"
                className="block rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <div className="p-5">
                  <div className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                    Quiz
                  </div>
                  <p className="mt-2 text-base font-medium text-emerald-700 group-hover:text-emerald-800">
                    Quiz – Ari Behn: «Isflak»
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Symbolikk, miljø og eksistensielle valg
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <Footer />
    </main>
  );
}
