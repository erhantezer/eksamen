"use client";
import React from "react";

export default function IsflakTennevollFull() {
  const handlePrint = () => window.print();

  return (
    <div
    style={{
      margin: "0 auto",
      padding: "clamp(16px, 4vw, 40px)",
      maxWidth: "900px",
      fontFamily:
        "Georgia, 'Times New Roman', Times, ui-serif, serif",
      lineHeight: 1.7,
      color: "#111",
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <button
          onClick={handlePrint}
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            border: "1px solid #ddd",
            background: "#f9f9f9",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          🖨️ Skriv ut / PDF
        </button>
      </div>

      <h1 style={{ textAlign: "center", fontSize: 28, marginBottom: 10 }}>
        Ari Behn – <em>«Isflak»</em>
      </h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
        (fra samlingen «Talent for lykke», Kolon forlag, 2004)
      </p>

      {/* --- NOVELLE: FULL TEXT (TAM METİN) --- */}
      <section
        style={{
          background: "#f9f9f9",
          padding: 20,
          borderRadius: 10,
          marginBottom: 30,
          whiteSpace: "pre-wrap",
        }}
      >
        <p
          style={{
            fontSize: "clamp(14px, 2.1vw, 18px)",
            textAlign: "justify",
            hyphens: "auto",
            overflowWrap: "anywhere",
            wordBreak: "normal",
            whiteSpace: "pre-wrap",
          }}>
          {`Det var et villmarksliv i Tennevoll. Ørnene fløy lavt, reven pilte gjennom bygda med bikkja til naboen i hælene. Faren min hadde vært med på å berge et lam ut av et ørnerede flere hundre meter over havet. Nyheten gikk Norge rundt. Det var likevel Ludvig folk snakket om i Tennevoll. Han var knapt tre år gammel da han ble angrepet av ørn. Før faren hans rakk å reagere, hadde den vesle gutten plukket opp en blankebitt og slått etter rovfuglen. Slikk reddet han seg unna. En dag vi skulle kappe juletrær, Ludvig og jeg, fulgte Mari etter. Plutselig datt hun ned i et revehi. Hun huket seg fast med armene og vi fikk henne opp. Det snerret bak oss. Der stå reven, med skum om kjeften. Vi løp det beste vi kunne. Reven fulgte etter. Armene til søstera mi sto stivt ut til sidene og beina hennes gikk som trommestikker. Like etter kastet Ludvig fra seg juletreet. Reven stanset opp, ble stående noen sekunder og snuse på grana, før den gjenopptok forfølgelsen. Ludvig ba meg om å kaste treet mitt. Det samme gjentok seg og vi vant tid. Mari var et stykke bak oss, men vi kom oss alle ned fra skogen og passerte hønsehuset til naboen. Da reven nådde fram, forsvant den inn i hønsegården og vi var reddet. Daget etter fant naboen hiet og skjøt plageånden. Reven hadde rabiessmitte og måtte ha vandret helt fra Finnland. Da jeg var sju, lurte Ludvig meg utpå et av isflakene som drev ut fjorden. Ingen av oss hadde flytevester. Flaket var stort nok til å bære oss, men det språk opp i kanten da Ludvig sparket ifra. Skrekkslagen så jeg oss drive utover. Jeg kunne ikke svømme. Noen unger stå inne på stranda og ropte. Jeg er nødt til å hoppe, tenkte jeg. Det var det eneste som stå i hodet på meg. Jeg hoppet rett uti det grønne, iskalde vannet. Sjøen sto meg til halsen, kulden var lammende. Jeg greide så vidt å puste og karet meg hikstende inn på land. Ludvig så jeg ikke noe mer til. Han ble tatt hånd om av skolepsykologen og sendt på spesialskole. Senere har jeg fått høre at han ble fiskeoppdretter i Argentina, driver det stort. Jeg har ikke forsøkt å seile på isflak igjen. Nå er jeg skilt og arbeidsløs. Istedenfor å se muligheter, gjør jeg det motsatte. Det blir sagt at isflak kan drive langt til havs og over store, åpne havområder og at de når inn til fremmede kyster hvor det finnes godt arbeid og vidunderlige kvinnfolk. Det var dette Ludvig prøvde å lære meg, noe annet kan det umulig ha vært. Ikke faen om jeg hopper av neste gang.`}
          </p>
      </section>

      {/* --- ANALİZ: TAMAMINI EKLENMİŞ HALİ --- */}
      <h2 style={{ fontSize: 22, marginTop: 30 }}>
        Novelleanalyse – Ari Behn: «Isflak»
      </h2>

      <h3 style={{ marginTop: 15 }}>📘 Kort informasjon om novellen</h3>
      <ol>
        <li style={{ marginBottom: 8 }}>
          <strong>Forfatter og utgivelse:</strong> Novellen «Isflak» er skrevet
          av Ari Behn og utgitt i novellesamlingen <em>Talent for lykke</em>{" "}
          (2004, Kolon Forlag).
        </li>
        <li style={{ marginBottom: 8 }}>
          <strong>Om forfatteren:</strong> Ari Behn (1972–2019) var en norsk
          forfatter og kunstner kjent for sin særegne stil – ofte preget av
          eksistensielle temaer, mørk humor og melankolsk refleksjon over liv,
          tap og menneskelig svakhet.
        </li>
        <li>
          <strong>Tiden teksten ble skrevet:</strong> Tidlig 2000-tall, en periode
          da norsk litteratur ofte undersøkte maskulinitet, ensomhet og indre
          konflikt. Korte, intense historier belyser større menneskelige spørsmål.
        </li>
      </ol>

      <h3 style={{ marginTop: 25 }}>💭 Tema og motiv</h3>
      <ol>
        <li style={{ marginBottom: 10 }}>
          <strong>Motiv:</strong> Barndomsminner fra Tennevoll (reven, ørnen,
          isflaket) som speiler den voksne fortellerens liv: tap, feighet og anger.
        </li>
        <li style={{ marginBottom: 10 }}>
          <strong>Tema:</strong>
          <ul style={{ marginTop: 6 }}>
            <li>Barndommens erfaringer som former voksenlivet</li>
            <li>Frykt, feighet og skyld</li>
            <li>Livets valg – å tørre å «hoppe» eller bli stående</li>
            <li>Ensomhet og nederlag</li>
          </ul>
        </li>
        <li>
          <strong>Hvordan kommer temaet til uttrykk?</strong> Kontrasten mellom
          barndommens eventyr og den voksne mannens stillstand. Isflaket blir
          et vedvarende symbol på valgene vi tar – eller ikke tar.
        </li>
      </ol>
      <p style={{ marginTop: 8 }}>
        <strong>Budskap:</strong> Fortellingen antyder at frykten ofte stopper
        mennesket. Fortelleren angrer på at han ikke «hoppet av» – ikke tok
        sjanser. Livets isflak driver videre; våger du ikke, blir du stående.
      </p>

      <h3 style={{ marginTop: 25 }}>🧱 Komposisjon</h3>
      <ol>
        <li>
          <strong>Struktur:</strong> Nåtid + tilbakeblikk. Mesteparten i
          barndommens Tennevoll, rammet inn av voksen refleksjon.
        </li>
        <li>
          <strong>Åpning:</strong> «Det var et villmarksliv i Tennevoll.» –
          sted, stemning og fare etableres umiddelbart.
        </li>
        <li>
          <strong>Høydepunkt/Vendepunkt:</strong> Guttene på isflaket som driver
          ut fjorden; fortelleren hopper, Ludvig blir – et symbolsk livsvalg.
        </li>
        <li>
          <strong>Slutt:</strong> Åpen og ironisk: «Ikke faen om jeg hopper av
          neste gang.» En blanding av selvbedrag og desperat håp.
        </li>
        <li>
          <strong>Funksjon:</strong> Sirkelkomposisjon – fortid og nåtid bindes
          sammen av isflak-symbolet.
        </li>
      </ol>

      <h3 style={{ marginTop: 25 }}>✍️ Fortellemåte og språklige virkemidler</h3>
      <ol>
        <li>
          <strong>Forteller/synsvinkel:</strong> Førsteperson – subjektiv,
          sårbar, reflektert tone gir nærhet og troverdighet.
        </li>
        <li>
          <strong>Virkemidler:</strong>
          <ul style={{ marginTop: 6 }}>
            <li>
              <strong>Symboler:</strong> Isflak = muligheter/risiko/frihet;
              reven = fare/uforutsigbarhet; villmark = ukontrollerbare krefter.
            </li>
            <li>
              <strong>Kontraster:</strong> Barnets mot vs. den voksnes feighet;
              naturens villhet vs. mannens stillstand.
            </li>
            <li>
              <strong>Ironi:</strong> Sluttreplikkens tøffe tone avslører
              egentlig avmakt.
            </li>
            <li>
              <strong>Rytme/bilder:</strong> Muntlig, men poetisk; korte,
              energiske setninger gir intensitet.
            </li>
          </ul>
        </li>
        <li>
          <strong>Tone og stil:</strong> Nøktern, maskulin, tidvis mørk humor;
          melankoli under overflaten.
        </li>
      </ol>

      <h3 style={{ marginTop: 25 }}>👥 Personer og miljø</h3>
      <ol>
        <li>
          <strong>Personer:</strong>
          <ul style={{ marginTop: 6 }}>
            <li>
              <strong>Jeg-fortelleren:</strong> Som barn redd; som voksen
              resignert og skyldtung.
            </li>
            <li>
              <strong>Ludvig:</strong> Modig/impulsiv barndomsvenn – senere
              «lykkes» han, kontrastfigur.
            </li>
            <li>
              <strong>Mari:</strong> Søster – sårbarhet/uskyld.
            </li>
          </ul>
        </li>
        <li>
          <strong>Miljø:</strong> Tennevoll – nordnorsk villmark, dyr og fare.
          Naturen speiler menneskets indre uro.
        </li>
      </ol>

      <h3 style={{ marginTop: 25 }}>💡 Tolkning og refleksjon</h3>
      <p>
        «Isflak» kan leses som et eksistensielt selvoppgjør: Fortelleren reddet
        seg fysisk som barn, men mistet motet. Voksentilværelsen blir en serie
        «ikke-hopp» – tapte muligheter.
      </p>
      <p>
        Siste linje rommer både selvbedrag og håp. Løftet om å «hoppe neste
        gang» klinger hult – men nettopp i den hule klangen finnes et svakt
        ønske om forandring.
      </p>

      {/* Global print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          /* Hide buttons on print */
          button {
            display: none !important;
          }
          h1 {
            font-size: 20px !important;
            margin-bottom: 6px !important;
          }
          h2 {
            font-size: 16px !important;
            margin: 8px 0 !important;
          }
          h3 {
            font-size: 14px !important;
            margin: 6px 0 !important;
          }
          section,
          p,
          li {
            font-size: 12px !important;
            line-height: 1.55 !important;
          }
        }
      `}</style>
    </div>
  );
}
