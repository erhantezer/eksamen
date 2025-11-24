"use client";
import React from "react";

export default function NovellePakkeSide() {
  const handlePrint = () => window.print();

  return (
    <div className="novelle-root">
      {/* Üst araç çubuğu */}
      <div className="toolbar">
        <div className="toolbar-left">
          <span className="toolbar-label">Gå til:</span>
          <a href="#elisabeth" className="section-link section-link--blue">
            Askildsen – «Elisabeth»
          </a>
          <a href="#en-to-tre" className="section-link section-link--purple">
            Dahle – «En og To og Tre»
          </a>
          <a href="#isflak" className="section-link section-link--amber">
            Behn – «Isflak»
          </a>
        </div>

        <button onClick={handlePrint} className="print-button">
          🖨️ Skriv ut / PDF
        </button>
      </div>

      {/* 1) ELISABETH */}
      <section id="elisabeth" className="novelle-section elisabeth-section">
   

        <h3 className="block-heading block-heading--green">
          🔍 Novelleanalyse – Kjell Askildsen: «Elisabeth»
        </h3>
        <p className="analysis-text">
          {`Novellen «Elisabeth» er skrevet av Kjell Askildsen og står i samlingen Hundene i Tessaloniki (1996). Askildsen er kjent for sin minimalistiske skrivestil med korte dialoger, få beskrivelser og mye undertekst. I tekstene hans er det ofte taus spenning, konflikter som aldri sies direkte, og personer som strever med skyld, begjær og ensomhet. «Elisabeth» er et typisk eksempel på dette: en tilsynelatende enkel familiesituasjon rommer sterke følelser, maktkamp og dyp fremmedgjøring.

Tema og motiv
På overflaten handler novellen om Frank som besøker broren Daniel og svigerinnen Elisabeth. Men motivet er egentlig begjær, mistanke og taus konflikt. Fra første stund ser vi at Frank er seksuelt fascinert av Elisabeth. Han leser en erotisk og voldelig scene i boka Esch eller anarkiet, og denne scenen vekker fantasier som han kobler direkte til Elisabeth. Mellom linjene bygges det opp en ubehagelig seksuell spenning.
Et viktig tema er seksuell spenning og begjær, men også skyld og skam. Frank begjærer Elisabeth, samtidig som han fordømmer broren og moren. Det ligger også en sterk opplevelse av fremmedgjøring – Frank føler seg fremmed både i barndomshjemmet, i forholdet til moren og i møtet med Daniel og Elisabeth. Et annet tema er taushet og kommunikasjonssvikt: personene snakker sammen, men de sier aldri det som virkelig betyr noe. Det er blikk, pauser og antydninger som bærer handlingen, ikke det som sies høyt.
Budskapet kan tolkes som at undertrykt begjær, uærlighet og mangel på åpenhet skaper avstand og ødeleggelse i nære relasjoner. Menneskene i novellen lever side om side, men de forstår ikke hverandre og våger ikke å være ærlige.

Komposisjon og oppbygning
Novellen er fortalt kronologisk over kort tid, fra en søndag formiddag til neste morgen. Handlingen er i seg selv enkel: et besøk, en tur til mor, noen turer til jernbanerestauranten, en middag, et uvær og til slutt en avreise. Likevel bygges det opp en sterk indre spenning.
Åpningen er rolig og hverdagslig: Frank sitter i hagen og leser. Men allerede her kommer en urovekkende undertone gjennom den voldelige seksuelle scenen i romanen han leser og måten han ser på Elisabeth. Et viktig vendepunkt er togscenen, der Frank ser Daniel komme ut av toget, selv om Daniel ifølge Elisabeth skulle være hos moren. Daniel skyller hendene etter å ha vært hos naboen, og Frank får en intuitiv følelse av at han har sett noe han ikke skulle se. Dette antyder mulig utroskap, men ingenting sies direkte.
Uværet senere i teksten fungerer også som et slags vendepunkt: Regnskyllet og tordenværet speiler den indre stormen i personene. Mot slutten strammes den tause konflikten så mye at Frank reiser fra middagsbordet og til slutt bestemmer seg for å dra. Slutten er åpen, kald og resignert. Beskjedene på lappene («Synd at du måtte reise. Det synes Elisabeth også.» / «Så synd med Elisabeth. Håper det ikke er noe alvorlig.») viser hvor indirekte og feigt personene kommuniserer.

Forteller og virkemidler
Novellen fortelles i førsteperson av Frank. Det betyr at vi bare får tilgang til hans tanker, følelser og tolkninger. Han er en subjektiv og delvis upålitelig forteller. Leseren må hele tiden vurdere: er det han ser og tror, virkelig sant, eller er det farget av sjalusi, begjær og fordommer?
Askildsen bruker mange virkemidler:
• Underdrivelse og stillhet: De viktigste konfliktene blir aldri sagt direkte. For eksempel sier Daniel bare at Elisabeth «ikke er helt seg selv for tiden», og Frank svarer knapt.
• Symboler:
  – Hagen og kjøkkenhagen kan symbolisere fristelse, nærhet til kroppen og det konkrete livet (sukkererter, epletrær, osv.).
  – Uværet speiler kaoset i relasjonene.
  – Boken Esch eller anarkiet fungerer som speil for Franks begjær og voldsfantasier.
  – Jernbanen og toget symboliserer flukt og bevegelse bort – både fysisk og psykisk.
• Kontraster: Det rolige, nesten kjedelige hverdagsmiljøet står i kontrast til den intense indre spenningen hos Frank.
Språket er nøkternt og presist, med korte setninger og lite unødvendig pynt. Det gir en mørk, trykkende tone, som er typisk for Askildsen.

Personer og forhold
Frank fremstår som distansert og kritisk, men samtidig full av begjær og uro. Han begjærer Elisabeth, forakter morens religiøsitet og misliker broren, men han er selv ikke mer moden eller moralsk enn de andre. Han handler nesten ikke, han observerer og dømmer.
Daniel virker utadvendt og litt selvsikker, men også overflatisk. Han skjuler noe – både i forhold til naboen og i forholdet til Elisabeth. Han ler av henne, forteller en barndomshistorie på en måte som får henne til å skamme seg, og avviser å snakke om det som er “galt”.
Elisabeth er kanskje den mest gåtefulle figuren. Hun virker nervøs, sjenert og sårbar. Hun unngår blikk, svarer ivrig på spørsmål som om det er en redning, og ser ut til å være fanget mellom to menn: Daniel og Frank. Hun er både et objekt for Franks begjær og et menneske med sitt eget indre liv som vi aldri får helt innsyn i. Når Daniel sier at hun ikke er “helt seg selv for tiden”, antydes det at hun sliter med noe alvorlig, men heller ikke dette blir forklart.
Miljøet er et norsk småbyhjem, og Askildsen bruker rommene (stue, kjøkken, hage, soverom) og naturen til å understreke følelsene. Jernbanerestauranten blir stedet der Frank forsøker å dempe uroen med alkohol og hvor han igjen havner i konflikt – denne gangen med en fremmed mann.

Tolkning og avslutning
«Elisabeth» er en novelle om mennesker som ikke klarer å møte hverandre ærlig. Begjær, skam, sjalusi og gammel skyld ligger under overflaten, men blir aldri snakket om direkte. Alle holder masken, og kommunikasjonen skjer gjennom små stikk, blikk og taushet. Leseren blir stående igjen i usikkerhet: Har Daniel vært utro? Hvem har “sviktet” hvem? Hva er egentlig galt med Elisabeth? Ingenting sies klart, og det er typisk for Askildsen – vi må selv fylle hullene.
Slik viser novellen hvordan relasjoner kan brytes ned, ikke av store dramatiske hendelser, men av det som ikke blir sagt. Undertrykte følelser og manglende ærlighet gjør at avstanden mellom menneskene bare vokser. Til slutt velger Frank å reise, men uten å ha konfrontert noe som helst. Han rømmer fra ubehaget, akkurat som de andre gjør på sin måte.`}
        </p>
      </section>

      {/* 2) GRO DAHLE */}
      <section id="en-to-tre" className="novelle-section dahle-section">
        

        

        <h3 className="block-heading block-heading--green">
          🔍 Novelleanalyse – Gro Dahle: «En og To og Tre»
        </h3>
        <p className="analysis-text">
          {`Novellen «En og To og Tre» er skrevet av Gro Dahle og står i samlingen Hvem som helst, hvor som helst (2009). Dahle er kjent for sitt poetiske og psykologiske språk med sterke bilder, indre monolog og fokus på følelser som skam, begjær og utenforskap. I tekstene hennes finnes det ofte et indre trykk, et emosjonelt kaos som ikke blir sagt direkte, og personer som strever med å bli sett, inkludert og bekreftet. «En og To og Tre» er et typisk eksempel på dette: en tilsynelatende enkel sosial situasjon rommer intens sjalusi, maktkamp og dyp sårbarhet.

Tema og motiv
På overflaten handler novellen om en kvinne som befinner seg på en sosial sammenkomst og blir umiddelbart fascinert av en mann i rommet. Men motivet er egentlig begjær, konkurranse og desperat søken etter oppmerksomhet. Allerede i åpningen ser vi at hun blir fullstendig oppslukt av ham, og alt i rommet blir scenografi rundt dem to. Mellom linjene bygges det opp en sterk følelse av sjalusi mot kvinnen i den røde kjolen.
Et viktig tema er derfor utenforskap og usynlighet, men også begjær, skam og sosial angst. Hovedpersonen forsøker hele tiden å tolke kroppsspråk og blikk, og hun føler seg truet av den andre kvinnen. Et annet tema er kommunikasjonssvikt og selvbedrag: hun tror hun sender signaler som blir forstått, men det er hun selv som konstruerer betydningen.
Budskapet kan tolkes som at behovet for bekreftelse og synlighet kan gjøre mennesker blinde og sårbare. Mangel på trygghet og selvfølelse kan føre til ydmykelse og sosial isolasjon.

Komposisjon og oppbygning
Novellen er skrevet i presens og følger et sammenhengende øyeblikk. Handlingen er ytre sett enkel: et selskap, en samtale, en sofa, et ubehagelig øyeblikk og en avvisning. Likevel bygges det opp en sterk indre spenning.
Åpningen er direkte og intens: «Du ser ham med én gang.» Leseren kastes rett inn i hovedpersonens blikk og begjær. Den urovekkende undertonen skapes gjennom hennes konstante overvåking av ham og rivaliseringen med kvinnen i den røde kjolen.
Et viktig vendepunkt er sofaepisoden, der hun velter et glass i fanget på rivalen. Etter dette blir maktbalansen enda tydeligere. Et annet vendepunkt kommer når hun prøver å bryte inn i samtalen med kunnskap om geitost og bananer, men blir ignorert. Dette antyder et sosialt sammenbrudd.
Slutten er åpen og resignert. Hovedpersonen går ut i hagen i mørket, og grinden «svarer» henne med de samme ordene hun har hørt hele kvelden: «Det gjør ingenting.» Dette viser en indirekte, poetisk fremstilling av hennes nederlag og selvopplevde ubetydelighet.

Forteller og virkemidler
Novellen fortelles i andreperson, noe som gjør leseren til hovedpersonen og forsterker følelsen av skam, uro og desperasjon. Vi får tilgang til hennes tanker, fantasier og kroppslige reaksjoner. Fortelleren er subjektiv og upålitelig – mye av virkeligheten tolkes gjennom hennes psyke.
Dahle bruker mange virkemidler:
• Underdrivelse og gjentakelse: «Unnskyld – det gjør ingenting» gjentas som et ekko av hennes mislykkethet.
• Symboler:
  – Den røde kjolen symboliserer seksualitet, makt og rivalisering.
  – Håret som vokser symboliserer livsvilje og håp.
  – Grinden symboliserer grensen mellom sosialt fellesskap og ensomhet.
• Kontraster: Den rolige, ytre sosiale settingen står i kontrast til det indre kaoset hos hovedpersonen.
• Sanselig språk: detaljer om lepper, øyne, bevegelser, mat og lukt skaper nærhet og intensitet.
Språket er poetisk, rytmisk og sterkt billedlig, med hyppige metaforer og assosiasjoner, noe som er typisk for Dahles stil.

Personer og forhold
Hovedpersonen fremstår som usikker, sjalu og sterkt preget av behovet for bekreftelse. Hun søker mannens oppmerksomhet gjennom blikk, kroppsspråk og små inngrep i samtaler. Samtidig føler hun seg truet av kvinnen i den røde kjolen, som virker mer selvsikker og attraktiv.
Mannen fremstår som et objekt for hennes begjær – han er lite utviklet som karakter, men blir sentrum i hennes fantasi og angst.
Kvinnen i den røde kjolen representerer trygghet, skjønnhet og sosial makt. Hennes smil og naturlige kontakt med mannen forsterker hovedpersonens utenforskap.
Miljøet er et typisk sosialt arrangement, men beskrives gjennom hovedpersonens subjektive perspektiv, som gjør at det føles klaustrofobisk og intenst.

Tolkning og avslutning
«En og To og Tre» er en novelle om mennesker som ikke klarer å finne en trygg plass i sosiale situasjoner. Begjær, sjalusi og skam ligger under overflaten, men blir aldri sakt direkte. Hovedpersonen forsøker å tvinge seg inn i en situasjon hun ikke er en del av, og ender i ydmykelse og ensomhet.
Slik viser novellen hvordan sosiale relasjoner kan brytes ned av indre usikkerhet og desperasjon, ikke av store ytre hendelser. Manglende selvfølelse gjør at hovedpersonen blir oversett og avvist. Til slutt står hun alene i mørket, men klamrer seg til tanken om håp: «Så lenge håret mitt vokser, er det håp.» Dette uttrykker både en svak form for trøst og et dypt emosjonelt nederlag.`}
        </p>
      </section>

      {/* 3) ARI BEHN – ISFLAK */}
      <section id="isflak" className="novelle-section isflak-section">
        <h1 className="novelle-title isflak-title">
          Ari Behn – <em>«Isflak»</em>
        </h1>

        


        <h3 className="block-heading block-heading--green">
          🔍 Novelleanalyse – Ari Behn: «Isflak»
        </h3>
        <p className="analysis-text">
          {`Novellen «Isflak» er skrevet av Ari Behn og står i samlingen Talent for lykke (2011). Behn er kjent for sin direkte og samtidig melankolske skrivestil, ofte preget av refleksjoner rundt livsvalg, nederlag og menneskelig sårbarhet. I tekstene hans finnes det ofte en understrøm av eksistensiell uro, humor og smerte. «Isflak» er et typisk eksempel på dette: en tilsynelatende enkel barndomshistorie rommer dype tanker om frykt, feighet og livets ubrukte muligheter.

Tema og motiv
På overflaten handler novellen om fortellerens barndom i Tennevoll og hans forhold til vennen Ludvig, med dramatiske episoder som ørneangrep, rabiessmittet rev og en farlig tur på et isflak. Men motivet er egentlig frykt, selvbilde og livsvalg. Isflaket blir en symbolsk scene der fortellerens karakter – og fremtid – formes. Mellom linjene bygges det opp et bilde av en mann som aldri turte å ta sjanser.
Et viktig tema er derfor barndommens erfaringer som former voksenlivet, men også feighet, anger og tapte muligheter. Fortelleren setter sin egen passivitet opp mot Ludvigs handlekraft og mot. Et annet tema er fremmedgjøring fra seg selv: fortelleren forstår som voksen at han alltid velger trygghet fremfor risiko.
Budskapet kan tolkes som at frykt og mangel på mot kan hindre mennesker i å gripe muligheter som kunne ha endret livet deres. «Isflaket» viser hvordan små øyeblikk kan få store konsekvenser.

Komposisjon og oppbygning
Novellen er bygget rundt en rammefortelling: nåtiden, der fortelleren beskriver sitt mislykkede voksenliv, og tilbakeblikk som viser barndommens hendelser. Handlingen er enkel: dramatiske naturmøter, en farlig isflakepisode og en senere refleksjon. Likevel bygges det opp en sterk indre spenning.
Åpningen etablerer miljøet og tonen raskt: «Det var et villmarksliv i Tennevoll.» Den farlige, ville naturen fungerer som bakteppe for både ytre og indre konflikter. Et viktig vendepunkt er isflakscenen, der guttene driver utover fjorden. Fortelleren hopper i panikk, mens Ludvig blir stående på flaket. Denne forskjellen blir et livslangt symbol.
Mot slutten ser vi fortelleren som voksen, skilt og arbeidsløs, og han bruker isflaket som metafor for alle sjansene han aldri tok. Slutten er åpen og resignert, men med et ironisk preg: «Ikke faen om jeg hopper av neste gang.» Dette uttrykker både desperat håp og selvbedrag.

Forteller og virkemidler
Novellen fortelles i førsteperson. Det gir leseren innsikt i både barndomsopplevelsene og den voksne mannens selvkritiske refleksjon. Han er en subjektiv og sårbar forteller, preget av anger, selvironi og lav selvfølelse. Leseren må hele tiden spørre: er hans tolkning av livet presis, eller er den farget av nederlag?
Behn bruker flere virkemidler:
• Underdrivelse og stillhet: Fortelleren sier lite direkte om følelsene sine, men de ligger mellom linjene.
• Symboler:
  – Isflaket symboliserer muligheter, frihet og risiko – alt han ikke valgte.
  – Reven symboliserer fare og det ukontrollerbare.
  – Villmarken symboliserer livets uforutsigbarhet.
• Kontraster: Ludvig er modig og impulsiv, mens fortelleren er redd og passiv. Naturens brutalitet står i kontrast til fortellerens vegring.
• Metaforisk språk: Isflaket som livets ferge – en tydelig symbolsk struktur.
Språket er nøktert, enkelt og direkte, men med et mørkt humoristisk og melankolsk grunnlag som er typisk for Behn.

Personer og forhold
Fortelleren fremstår som sårbar og preget av frykt – både som barn og som voksen. Han innrømmer sin egen feighet, men forsøker samtidig å forstå den. Barndomsopplevelsene blir stående som bevis på at han alltid har tatt det trygge valget.
Ludvig er en kontrastfigur: modig, uredd, impulsiv. Som voksen «lykkes» han og blir fiskeoppdretter i Argentina. Han representerer mulighetene fortelleren aldri tok. Han er både en inspirasjon og en smertefull påminnelse.
Mari, søsteren, fremstår som sårbar og uskyldig; hennes farefulle situasjoner understreker den ville naturen guttene vokser opp i.
Miljøet er Tennevoll – en nordnorsk villmark med dyr, kulde og uforutsigbare naturkrefter. Dette miljøet speiler fortellerens indre uro og livets risiko.

Tolkning og avslutning
«Isflak» er en novelle om et menneske som ser tilbake på livet sitt med en følelse av tap og feighet. Barndommens dramatiske øyeblikk leses som symboler for beslutningene han aldri tok. Undertrykt frykt og mangel på mot har skapt avstanden mellom ham og det livet han kunne ha levd.
Novellen viser hvordan relasjoner, valg og selvbilde kan formes av tidlige erfaringer. Fortelleren angrer på alt han ikke våget – og i avslutningen forsøker han å overbevise seg selv om at han vil handle annerledes. Men tonen er ironisk; leseren forstår at det kanskje er et selvbedrag.
Slik viser novellen hvordan mennesker kan bli fanget i sine egne begrensninger. Isflaket driver videre, men han tør fortsatt ikke stå på det.`}
        </p>
      </section>

      {/* Normal (ekran) stilleri */}
      <style jsx>{`
        .novelle-root {
          margin: 0 auto;
          padding: clamp(16px, 4vw, 40px);
          max-width: 960px;
          font-family: Georgia, "Times New Roman", Times, ui-serif, serif;
          line-height: 1.7;
          color: #0f172a;
          background: radial-gradient(circle at top left, #eff6ff, #f9fafb 55%);
        }

        .toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.04);
          backdrop-filter: blur(8px);
        }

        .toolbar-left {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        .toolbar-label {
          font-size: 0.8rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .section-link {
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 0.85rem;
          text-decoration: none;
          border: 1px solid transparent;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.18s ease;
          white-space: nowrap;
        }

        .section-link--blue {
          background: #eff6ff;
          color: #1d4ed8;
          border-color: #bfdbfe;
        }

        .section-link--purple {
          background: #f5f3ff;
          color: #6d28d9;
          border-color: #ddd6fe;
        }

        .section-link--amber {
          background: #fffbeb;
          color: #b45309;
          border-color: #fed7aa;
        }

        .section-link:hover {
          transform: translateY(-1px);
          box-shadow: 0 5px 10px rgba(15, 23, 42, 0.08);
          background: #ffffff;
        }

        .print-button {
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid #d1d5db;
          background: linear-gradient(to right, #f9fafb, #f3f4f6);
          cursor: pointer;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.18s ease;
        }

        .print-button:hover {
          border-color: #9ca3af;
          box-shadow: 0 6px 14px rgba(15, 23, 42, 0.1);
          transform: translateY(-1px);
        }

        .novelle-section {
          margin-bottom: 40px;
          padding: 18px 16px 22px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e5e7eb;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
        }

        .novelle-title {
          text-align: center;
          font-size: clamp(20px, 3.2vw, 30px);
          margin-bottom: 4px;
          letter-spacing: 0.01em;
        }

        .elisabeth-title {
          color: #1d4ed8;
        }

        .dahle-title {
          color: #9333ea;
        }

        .isflak-title {
          color: #b45309;
        }

        .novelle-subtitle {
          text-align: center;
          font-size: 0.9rem;
          color: #6b7280;
          margin-bottom: 12px;
        }

        .block-heading {
          margin-top: 10px;
          margin-bottom: 6px;
          font-size: 1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          border-radius: 999px;
          background: #eef2ff;
          color: #1e293b;
        }

        .block-heading--blue {
          background: rgba(59, 130, 246, 0.08);
          color: #1d4ed8;
        }

        .block-heading--green {
          background: rgba(22, 163, 74, 0.08);
          color: #15803d;
        }

        .story-box {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: clamp(12px, 3vw, 22px);
          margin-top: 6px;
          margin-bottom: 16px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
        }

        .story-text,
        .analysis-text {
          font-size: clamp(14px, 2.1vw, 18px);
          text-align: justify;
          hyphens: auto;
          overflow-wrap: anywhere;
          word-break: normal;
          white-space: pre-wrap;
          color: #111827;
        }

        .analysis-text {
          margin-top: 4px;
        }

        /* Bölümler arası hafif renk ton farkı */
        .elisabeth-section {
          background: linear-gradient(to bottom, #eff6ff, #ffffff);
        }

        .dahle-section {
          background: linear-gradient(to bottom, #f5f3ff, #ffffff);
        }

        .isflak-section {
          background: linear-gradient(to bottom, #fffbeb, #ffffff);
        }

        /* Mobil uyum */
        @media (max-width: 640px) {
          .novelle-root {
            padding: 12px;
          }

          .toolbar {
            border-radius: 16px;
            align-items: flex-start;
          }

          .toolbar-left {
            width: 100%;
          }

          .print-button {
            width: 100%;
            justify-content: center;
          }

          .novelle-section {
            padding: 14px 10px 18px;
            border-radius: 14px;
          }

          .story-box {
            padding: 10px;
            border-radius: 10px;
          }

          .story-text,
          .analysis-text {
            font-size: 14px;
            line-height: 1.55;
          }
        }
      `}</style>

      {/* Yazdırma / PDF için global stiller */}
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
          #__next,
          body > div:first-child {
            padding: 0 !important;
            background: #ffffff !important;
          }
          h1 {
            font-size: 20px !important;
            margin-bottom: 6px !important;
          }
          h3 {
            font-size: 14px !important;
            margin: 6px 0 !important;
          }
          section p {
            font-size: 12px !important;
            line-height: 1.55 !important;
          }
          button {
            display: none !important;
          }
          .toolbar {
            border: none !important;
            box-shadow: none !important;
          }
          a[href^="#"] {
            text-decoration: none !important;
          }
        }
      `}</style>
    </div>
  );
}
