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
        (fra samlingen «Talent for lykke», Kolon forlag, 2011)
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
      <>
  <p
    style={{
      fontWeight: "bold",
      fontSize: "1.05em",
      marginBottom: 10,
    }}
  >
    Novelleanalyse – Ari Behn: «Isflak»
  </p>

  <h3
    style={{
      color: "#1d4ed8",
      marginTop: 12,
      marginBottom: 4,
    }}
  >
    📘 Kort informasjon om novellen
  </h3>
  <p>
    <strong>Forfatter og utgivelse:</strong> Novellen «Isflak» er skrevet av Ari
    Behn og utgitt i <em>Talent for lykke</em> (2011, Kolon Forlag).
  </p>
  <p>
    <strong>Om forfatteren:</strong> Ari Behn (1972–2019) var en norsk forfatter
    og kunstner kjent for sin særegne stil – eksistensielle temaer, mørk humor
    og melankolsk refleksjon. Eksempel: Også i denne novellen er tonen mørk, men
    med glimt av ironi, f.eks. når fortelleren sier: «Han ble tatt hånd om av
    skolepsykologen og sendt på spesialskole.» – sagt uten sympati, men tørt og
    distansert.
  </p>
  <p>
    <strong>Tiden teksten ble skrevet:</strong> Tidlig 2000-tall – fokus på
    maskulinitet, identitet, nederlag. Eksempel: Fortelleren sammenligner seg
    med Ludvig, som «driver det stort» i Argentina, mens han selv sitter
    arbeidsløs og skilt.
  </p>

  <h3
    style={{
      color: "#16a34a",
      marginTop: 16,
      marginBottom: 4,
    }}
  >
    💭 Tema og motiv
  </h3>
  <p>
    <strong>Motiv:</strong> Barndomsminner fra Tennevoll (reven, ørnen,
    isflaket) som speiler den voksne fortellerens liv: tap, feighet og anger.
    Eksempel: Hele fortiden fremstilles som dramatisk og vill, mens nåtiden er
    tom: «Nå er jeg skilt og arbeidsløs.»
  </p>

  <p>
    <strong>Tema:</strong>
  </p>
  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
    <li>
      <strong>Barndommens erfaringer som former voksenlivet:</strong> 
      Opplevelsen på isflaket blir et livsmetafor som følger ham: 
      «Jeg har ikke forsøkt å seile på isflak igjen.»
    </li>
    <li>
      <strong>Frykt, feighet og skyld:</strong> Fortelleren hopper i det
      iskalde vannet, men han vet han gjorde det i panikk: «Skrekkslagen så jeg
      oss drive utover.»
    </li>
    <li>
      <strong>Livets valg – å tørre å «hoppe» eller bli stående:</strong> 
      Eksempel: «Jeg er nødt til å hoppe, tenkte jeg.» – livet reduseres til et
      hopp, et valg.
    </li>
    <li>
      <strong>Ensomhet og nederlag:</strong> I voksen alder: «I stedet for å se
      muligheter, gjør jeg det motsatte.»
    </li>
  </ul>

  <p>
    <strong>Hvordan temaet uttrykkes:</strong> Kontrasten mellom barndommens
    ekstreme situasjoner og den voksnes passive stillstand. Eksempel: Ludvig
    kastet seg ut i fare som barn – og han lykkes siden; fortelleren reddet seg
    kun fysisk, men psykisk ble han stående.
  </p>
  <p>
    <strong>Budskap:</strong> Fortellingen antyder at frykten ofte stopper
    mennesket. De største mulighetene kommer når vi tør. Eksempel: Siste linje:
    «Ikke faen om jeg hopper av neste gang.» – en blanding av trass og
    selvbedrag.
  </p>

  <h3
    style={{
      color: "#7c3aed",
      marginTop: 16,
      marginBottom: 4,
    }}
  >
    🧱 Komposisjon
  </h3>
  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
    <li>
      <strong>Struktur:</strong> Nåtid + tilbakeblikk. Det meste i barndommens
      Tennevoll, innrammet av en voksen manns refleksjon. Eksempel: Teksten
      åpner i nåtid med en negativ livssituasjon og slutter i samme nåtid med
      et ironisk selvoppholdende løfte.
    </li>
    <li>
      <strong>Åpning:</strong> «Det var et villmarksliv i Tennevoll.» – stedet,
      farene og tonen etableres umiddelbart. Eksempel: Ørner, rev med skum rundt
      kjeften – en intens, dramatisk naturkontekst.
    </li>
    <li>
      <strong>Høydepunkt/vendepunkt:</strong> Scenen hvor guttene driver utover
      fjorden på isflaket. Eksempel: «Flaket var stort nok til å bære oss, men
      det sprakk opp i kanten.» – dramatikk og livsfare. Fortellerens hopp er
      vendepunktet – både fysisk og symbolsk.
    </li>
    <li>
      <strong>Slutt:</strong> Åpen og ironisk: «Ikke faen om jeg hopper av neste
      gang.» Eksempel: Leser forstår at dette sannsynligvis aldri vil skje –
      tonen avslører selvbedrag.
    </li>
    <li>
      <strong>Funksjon:</strong> Sirkelkomposisjon – fortiden (isflaket) speiler
      nåtiden (livets muligheter). Eksempel: Han sier selv: «Det var dette
      Ludvig prøvde å lære meg…»
    </li>
  </ul>

  <h3
    style={{
      color: "#db2777",
      marginTop: 16,
      marginBottom: 4,
    }}
  >
    ✍️ Fortellemåte og språklige virkemidler
  </h3>
  <p>
    <strong>Forteller/synsvinkel:</strong> Førsteperson – subjektiv, sårbar,
    reflektert tone gir nærhet og troverdighet. Eksempel: Fortelleren innrømmer
    sin egen frykt: «Jeg kunne ikke svømme.»
  </p>
  <p>
    <strong>Virkemidler:</strong>
  </p>
  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
    <li>
      <strong>Symboler:</strong> Isflak = muligheter/risiko/frihet; reven =
      fare/uforutsigbarhet; villmark = livets kaos. Eksempel: «Det blir sagt at
      isflak kan drive langt til havs…»
    </li>
    <li>
      <strong>Kontraster:</strong> Barndommens mot og livsenergi settes opp mot
      den voksnes feighet og stillstand. Eksempel: Som barn flykter han fra
      reven og overlever isflaket; som voksen: «Nå er jeg skilt og arbeidsløs.»
    </li>
    <li>
      <strong>Metaforer:</strong> Isflaket fungerer som en gjennomgående
      livsmetafor – et bilde på valgene man tør (eller ikke tør) å ta. Eksempel:
      «Isflak kan drive langt til havs…» → livets muligheter.
    </li>
    <li>
      <strong>Gjentakelse (repetisjon):</strong> Gjentakende tanker om frykt og
      muligheter viser fastlåstheten hans. Eksempel: «I stedet for å se
      muligheter, gjør jeg det motsatte.»
    </li>
    <li>
      <strong>Sammenligninger:</strong> Enkle, konkrete sammenligninger gir
      teksten energi og muntlig rytme. Eksempel: «Beina hennes gikk som
      trommestikker.»
    </li>
    <li>
      <strong>Tone og stil:</strong> Nøktern, maskulin, med mørk humor og et
      snev av bitter selvironi. Eksempel: «Han ble tatt hånd om av
      skolepsykologen…» – sagt tørt og lakonisk.
    </li>
  </ul>

  <h3
    style={{
      color: "#0f766e",
      marginTop: 16,
      marginBottom: 4,
    }}
  >
    👥 Personer og miljø
  </h3>
  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
    <li>
      <strong>Jeg-fortelleren:</strong> Resignert voksen, redd som barn, bærer
      skam og anger. Eksempel: «I stedet for å se muligheter, gjør jeg det
      motsatte.»
    </li>
    <li>
      <strong>Ludvig:</strong> Modig, impulsiv, nesten vill. Kontrastfigur.
      Eksempel: Tre år gammel slår han etter ørn med blankebitt.
    </li>
    <li>
      <strong>Mari:</strong> Søster. Symbol på sårbarhet. Eksempel: Hun løper
      med «armene som sto stivt ut til sidene».
    </li>
    <li>
      <strong>Miljø:</strong> Tennevoll – nordnorsk villmark, rå natur, dyr,
      fare. Eksempel: Ørnereder flere hundre meter over havet – dramatikk og
      vill natur. Miljøet speiler menneskets indre uro: kaos, fare, ustabilitet.
    </li>
  </ul>

  <h3
    style={{
      color: "#ea580c",
      marginTop: 16,
      marginBottom: 4,
    }}
  >
    💡 Tolkning og refleksjon
  </h3>
  <p>
    «Isflak» er en eksistensielt ladet tekst om frykt, muligheter og valg.
    Fortelleren reddet livet som barn – men mistet motet for resten av livet.
    Eksempel: «Jeg har ikke forsøkt å seile på isflak igjen.»
  </p>
  <p>
    Hvert minne er en påminnelse om tapt mulighet og feighet. Ludvig blir et
    symbol på livet han kunne hatt.
  </p>
  <p>
    Siste setning er dobbel: Den høres tøff ut – men den avslører desperasjon og
    tomhet.
  </p>
</>


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
