"use client";
import React from "react";

export default function ElisabethFullFit() {
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
      {/* Üst araç çubuğu */}
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 16,
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

      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(20px, 3.2vw, 30px)",
          marginBottom: 8,
        }}
      >
        Kjell Askildsen – <em>«Elisabeth»</em>
      </h1>

      {/* ——— Metin kutusu: sayfaya sığması için tipografi ve kırılımlar ——— */}
      <section
        style={{
          background: "#fafafa",
          border: "1px solid #eee",
          borderRadius: 10,
          padding: "clamp(12px, 3vw, 22px)",
          marginTop: 10,
          marginBottom: 28,
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
          }}
        >
{`Elisabeth

Det var tidlig søndag formiddag. Jeg hadde hentet en fluktstol på verandaen og båret den ned i hjørnet av hagen, helt nede ved flaggstangen, og der satt jeg og leste Esch eller anarkiet. Min bror og svigerinne var ennå ikke stått opp. Jeg skottet av og til opp mot huset, mot soveværelsesvinduet deres, men rullegardinet var nede. Jeg kom til scenen der Esch forfører mor Hentjen, der hun motvillig slipper taket i forhenget slik at han får presset henne inn i den mørke alkoven og bort til ektesengen hennes, og jeg kjente hvordan den voldtektliknende scenen pirret lysten i meg. Og da Elisabeth, min svigerinne, i det samme kom til syne i det åpne soveværelsevinduet, lot jeg som jeg ikke så henne.

En stund senere ropte hun meg inn til frokost. Det var bare oss to. Hun sa at Daniel hadde vondt i hodet. Hun satt rett overfor meg, og jeg hadde enda større glede av å se på henne nå enn kvelden før, noe som kanskje til dels skyldtes at pirringen ikke helt hadde sluppet taket i meg. Hun satt for det meste og så ned i asjetten, og de få gangene jeg møtte blikket hennes, trakk hun fort øynene til seg. Mest for å holde på avstand en altfor påtrengende taushet, stilte jeg henne et og annet spørsmål av den typen det er rimelig å stille en svigerinne man har kjent i mindre enn et døgn, og hun svarte med en påfallende iver, som om hvert nytt spørsmål var en redningsplanke. Men hun unngikk fortsatt å møte blikket mitt, og denne bortvendtheten hennes ga øynene mine fritt spillerom. Og det jeg så, fikk meg til å fantasere fram bilder som hadde klare referanser til mor Hentjens motstrebende underkastelse i den mørke alkoven.

Etter frokost gikk jeg tvers gjennom byen for å hilse på mor. "Gutten min," sa hun og strøk meg over kinnet. Hun var blitt så gammel, det var nesten ikke noe igjen av henne. Jeg gikk foran henne inn på kjøkkenet. Jeg satte meg ved bordet. Nei, men Frank da, sa hun, vi må da vel sette oss inn i stuen. Kan vi ikke sitte her, sa jeg. Hun satte over kaffekjelen og takket for kortene og særlig det fra Jerusalem. Tenk at du har vært i Jerusalem, sa hun. Var du på Golgata? Nei, sa jeg, akkurat der var jeg ikke. Å, sa hun, det var synd. Far og jeg snakket så ofte om det, at det stedet vi helst av alt ville reise til, var Jerusalem, og da var det særlig to steder vi ville se, Golgata og Getsemane. Jeg svarte ikke, men jeg smilte til henne. Hun satte to kopper på bordet og spurte om jeg ville ha et stykke formkake. Jeg sa at jeg nettopp hadde spist frokost. Hun kastet et blikk på klokken på hyllen ved siden av vinduet, så spurte hun hva jeg syntes om Elisabeth. Jeg sa at jeg syntes hun var meget sympatisk. Synes du? sa hun. Ja ja, jeg håper du har rett. Hva mener du med det? sa jeg. Å, jeg vet ikke, sa hun, jeg tror ikke hun er så bra for Daniel. Ingen er bra nok for Daniel, sa jeg. Ja ja, sa hun, så snakker vi ikke mer om det.

Vi snakket ikke mer om det eller noe annet på en stund. Jeg hadde ikke sett henne på to år; tiden og avstanden hadde fått meg til å fortrenge min motvilje mot henne; nå våknet den igjen. Du har ikke forandret deg, sa hun. Nei, svarte jeg, gjort er gjort.

Jeg ble sittende nesten en time; jeg unngikk så godt jeg kunne temaer som tydeliggjorde avstanden mellom oss, og besøket kunne ha ebbet ut i en forsonlig stemning hvis hun ikke hadde funnet det påkrevd å fortelle meg hvor mange bønner hun hadde bedt om at jeg måtte finne tilbake til Jesus. Jeg hørte på henne en stund, så sa jeg: Slutt med det der, mor. Det kan jeg ikke, sa hun og fikk tårer i øynene. Jeg reiste meg. Da er det bedre jeg går, sa jeg. Så hard du er, sa hun. Jeg? sa jeg. Hun fulgte meg ut. Du får ha takk for at du kom, sa hun. Ha det godt, mor, sa jeg. Du må hilse Daniel, sa hun. Ikke Elisabeth? sa jeg. Jo jo, henne også. Gud velsigne deg, gutten min.

Jeg gikk rett til jernbanerestauranten og drakk to halvlitere. Jeg ble roligere. Det kom et tog sørfra. Det ble stående i et par minutter, og like før det satte seg i bevegelse igjen, kom Daniel ut fra en av vognene. Med en intuitiv følelse av å ha sett noe det ikke var meningen jeg skulle se, snudde jeg fort hodet en annen vei. Da jeg ikke lenger kunne høre toget, så jeg ut på perrongen igjen. Den var tom. Jeg ble sittende litt til, så drakk jeg ut og gikk.

Da jeg kom tilbake til min brors hus, var ikke Daniel kommet hjem. Jeg sa til Elisabeth at jeg skulle hilse fra mor. Traff du ikke Daniel? spurte hun. Nei, sa jeg. Han gikk for å treffe deg, sa hun. Hos mor? sa jeg. Ja, sa hun.

Jeg hentet Esch eller anarkiet i stuen og gikk ut i hagen, ned til fluktstolen. Den stod i solen, og jeg flyttet den inn i skyggen av epletreet. Elisabeth kom ut på verandaen og spurte om jeg ville ha en kopp kaffe, og litt senere kom hun med den. Hun var liten og slank, og der hun kom mot meg over gresset, tenkte jeg at det ville være lett å løfte henne. Tusen takk, Elisabeth, sa jeg. Hun smilte og gikk igjen med en gang, og jeg ble sittende og tenke på avstanden mellom en dristig tanke og en konkret handling.

En halvtimes tid senere kom Daniel. Han hadde skiftet til shorts og en fargerik skjorte som han ikke hadde knappet og som viste fram det hårete brystet hans som jeg en gang for lenge siden hadde misunt ham. Han la seg på ryggen i gresset og lukket øynene mot solen. Vi småpratet litt om nesten ingen ting. En gang åpnet en kvinne et vindu i nabohuset, og like etterpå kom hun ut i hagen og satte seg slik at jeg kunne se henne. Daniel snakket om en kollega som han påstod jeg hadde kjent og som nylig hadde dødd av kreft i tykktarmen. Kvinnen i nabohagen gikk inn i huset igjen. Jeg kjedet meg. Jeg sa at jeg måtte på toalettet. Jeg tok med meg den tomme kaffekoppen. Elisabeth var hverken i stuen eller på kjøkkenet. Jeg gikk opp trappen til rommet mitt. Gjennom vinduet så jeg at Daniel hadde reist seg og stod og tittet i Esch eller anarkiet. Den er nok ikke noe for deg, tenkte jeg. Kvinnen kom ut av nabohuset; jeg kunne se at hun åpnet munnen, og Daniel gikk bort til gjerdet. Jeg slengte meg på sengen og tenkte at jeg ikke skulle ha kommet, at jeg burde ha husket hvor lite jeg hadde til felles med Daniel.Jeg ble bare liggende noen få minutter, så gikk jeg ned trappen og ut i hagen. Daniel var ikke der. Jeg satte meg i fluktstolen. Jeg tok opp boken og begynte å lese. Etter en stund bladde jeg tilbake for å lese om igjen scenen mellom Esch og mor Hentjen, men akkurat da kom Daniel ut verandadøren i nabohuset. Han hoppet over gjerdet. Han så opprømt ut. «Jeg måtte bare hjelpe naboen med å flytte et skap,» sa han, så gikk han bort til springen ved kjellerlemmen og skylte hendene. «Vil du ha en øl?» ropte han. «Ja takk,» ropte jeg. Jeg la boken i gresset. Han kom med to halvflasker pils. «Har Elisabeth forlatt oss?» spurte jeg. «Hun kommer straks tilbake,» svarte han. Han la seg i gresset og sa at jeg ikke burde sitte i skyggen. Jeg svarte ikke. «Å, det er et godt liv,» sa han. Jeg svarte ikke. «Synes du ikke?» sa han. «Jo jo,» sa jeg. Elisabeth kom gående langs vestsiden av huset. Jeg reiste meg. «Sett deg her,» sa jeg, «så henter jeg en stol til.» Hun sa at hun kunne da hente en stol selv. Jeg gikk opp til verandaen og kom tilbake med en klappstol. Hun hadde ikke satt seg. «Takk,» sa hun. «Min bror er en gentleman,» sa Daniel. «Ja,» sa hun. Hun satte seg slik at hun kunne se både Daniel og meg. «Jeg vil bare gjøre inntrykk på henne,» sa jeg. «Hører du, Elisabeth?» sa Daniel. «Ja,» sa hun.

«Som guttunge,» sa Daniel, «kom du stadig hjem til mor med en bukett markblomster, husker du det?» Jeg husket det. «Nei,» sa jeg, «det husker jeg ikke.» «Husker du ikke det? Mor sa bestandig: det er mors gutt, det, og av og til fikk du en skive loff med masse sukker på. Husker du ikke at en gang snappet jeg den ut av hånden på deg og tråkket den ned i grusen nedenfor trappen?» «Nei,» sa jeg, «det husker jeg ikke. Jeg husker ingen ting fra jeg var liten.» «Du må ha vært minst sju, åtte år,» sa han. «Jeg husker heller nesten ingen ting fra jeg var liten,» sa Elisabeth. Daniel lo. «Hva ler du av?» sa Elisabeth. «Ikke noe,» sa han. Elisabeth bøyde hodet og så ned i fanget, jeg kunne ikke se øynene hennes. Så gjorde hun et brått kast med hodet og reiste seg. «Nei, jeg får gå og ...» sa hun. Hun gikk. Jeg lukket øynene. Daniel sa ikke noe. Jeg tenkte på at han hadde forandret noe i historien om brødskiven: Han hadde spist halvparten av den, og det var jeg som hadde slått den ut av hånden hans slik at den havnet i grusen.

Jeg åpnet øynene og så på ham, og jeg følte et svakt ubehag ved å se på det hårete brystet hans. Han lå og smelte med de tynne leppene, så sa han: «Hva synes du om henne?» «Jeg liker henne,» sa jeg. Han satte seg opp og tok en slurk av flasken, så lente han seg bakover og så opp i himmelen, men han sa ikke noe. Jeg reiste meg og gikk bortover gressplenen, mot den lille kjøkkenhagen hvor det vokste salat og gressløk og en rad med sukkererter. Jeg tenkte: Åssen skal jeg holde ut en hel uke. Jeg knep løs en ertebelg, og Daniel ropte: «Det er Elisabeth som leker selvforsyning.» Jeg spiste ertebelgen og gikk tilbake til Daniel og sa: «Jeg har alltid ønsket meg en kjøkkenhage med sukkererter og reddiker og neper.» «Da,» sa han, «er Elisabeth akkurat noe for deg.» «Vil du ikke ha henne lenger?» sa jeg. Han så på meg. «Hva mener du med det?» sa han. «Det var en spøk,» sa jeg. Han fortsatte å se på meg en stund, så la han seg ned og lukket øynene. Jeg sa at jeg hadde et brev jeg måtte skrive, og jeg tok med meg boken og gikk fra ham.

Jeg møtte Elisabeth i trappen opp til annen etasje. «Så fin grønnsakhage du har,» sa jeg. «Å, den,» sa hun. «Jeg smakte på sukkerertene,» sa jeg. Hun stod et trinn over meg og vi så rett på hverandre, og på ny tenkte jeg: Hun er lett å løfte. «Du må bare spise av dem,» sa hun. «Takk,» sa jeg. Jeg tok blikket til meg, og hun fortsatte nedover trappen. Jeg skulle ha holdt det litt til, tenkte jeg. Jeg gikk opp på rommet mitt og la meg på sengen.

Jeg våknet av et tordenskrall. Himmelen var mørk, og jeg frøs. Jeg stod opp og lukket vinduet. Et lyn flerret skylaget, og like etter kom det et voldsomt regnskyll. Det var fint å se på.

Jeg gikk ned i stuen. Daniel stod ved verandadøren. Uværet hadde gjort meg forsonlig stemt, og jeg gikk bort til ham og sa: «Er det ikke storartet?» «Storartet?» sa han. «Epletrærne blir jo nærmest ribbet for kart, og se på sukkerertene.» Jeg så på dem; noen av stenglene var slått til jorden. «Ja, det er jo synd,» sa jeg, «men de kan bindes opp igjen.» «Det tror jeg ikke,» sa han. «Jo da,» sa jeg, «jeg skal gjøre det.» Etter en stund trakk uværet vekk, og blader og gress blinket i solen. Jeg spurte Daniel etter hyssing. «Det må du spørre Elisabeth om,» sa han. Hun var på kjøkkenet. Det så ut som om hun hadde grått. Hun ga meg en rull med hyssing og en saks. Jeg gikk ut. Det lå bare fire, fem kart under hvert av de tre epletrærne. Jeg bandt opp ertestenglene, det var fort gjort, så gikk jeg opp og satte meg på verandaen. Jeg hadde ikke lyst til å gå inn.

Under middagen var spenningen mellom Daniel og Elisabeth så sterk at alle mine forsøk på å få i gang en samtale falt døde til jorden. Til slutt satt vi helt tause. Et eller annet uimotståelig vokste og vokste inni meg, og før jeg hadde spist ferdig, la jeg fra meg bestikket, reiste meg og sa: «Takk for maten.» Jeg merket at Daniel så opp, men jeg ville ikke møte blikket hans. Jeg gikk opp på rommet mitt og hentet jakken, så gikk jeg ut.

Jeg gikk gjennom byen til jernbanerestauranten. Jeg satt med en øl og kjente uroen hamre inni meg. Det kom en mann med et ølglass i hånden bort til bordet og spurte om han kunne slå seg ned. Jeg avviste ham nokså bryskt, men han satte seg. Jeg reiste meg og fant et annet bord. Han satt tre bord unna og stirret på meg. Jeg lot som jeg ikke så det. Jeg drakk ut og hentet en ny halvliter. Jeg satte meg på den andre siden av bordet, med ryggen mot ham. Jeg tenkte på Daniel, at han hadde kommet ut av toget, at han hadde skylt hendene etter å ha vært inne hos naboen, og at han hadde ledd av Elisabeth. Jeg tenkte på Elisabeth også. Så kom min plageånd og satte seg rett overfor meg. «Jeg er ikke så lett å bli kvitt,» sa han. «Forsvinn,» sa jeg. «Å pytt,» sa han. «Forsvinn!» sa jeg. «Pytt, pytt, pytt, pytt,» sa han. Jeg reiste meg. Jeg grep glasset og slengte innholdet i ansiktet på ham. Så gikk jeg.

Jeg gikk fort, men jeg snudde meg ikke før jeg nådde døren. Han kom ikke etter meg, han satt og tørket ansiktet i duken.

Jeg kom hjem idet solen holdt på å gå ned. Jeg låste meg inn. Alt var stille. Jeg gikk inn i stuen. Daniel satt der. «Jaså,» sa han, «du kommer tilbake.» Jeg svarte ikke. «Hvor har du vært?» sa han. «Gått en tur,» sa jeg. Jeg satte meg. «Du bare gikk,» sa han. Jeg svarte ikke. Han sa ikke mer; han satt og så ut av vinduet. «Er Elisabeth gått ut?» sa jeg. «Hun har lagt seg,» sa han. Han fortsatte å se ut av vinduet, så sa han: «Det er kanskje best du reiser igjen.» «Jeg har tenkt det,» sa jeg. «Ikke for min skyld altså,» sa han. «Ikke det?» sa jeg. Han streifet meg med blikket, men svarte ikke.

Jeg reiste meg. Jeg gikk bort til bordet ved verandadøren og hentet Esch eller anarkiet. «Det er Elisabeth,» sa han, «hun er ikke helt seg selv for tiden.» «Å?» sa jeg. «Jeg har ikke lyst til å snakke om det,» sa han. Jeg gikk mot døren. «Jeg reiser i morgen,» sa jeg. Han sa navnet mitt idet jeg lukket døren etter meg, men jeg lot som jeg ikke hørte det.

Jeg gikk opp trappen og inn på rommet mitt. Det var begynt å mørkne, men jeg tente ikke lys. Jeg satte meg ved vinduet. Gresshoppene filte, ellers var alt stille. Jeg var ikke trett, jeg var altfor kald inni meg. Etter en lang stund hørte jeg skritt i trappen, og det gikk i en dør. Så ble det stille igjen.

Jeg kledde av meg i mørke fordi jeg hadde et fantasibilde av Elisabeth inni meg som jeg var redd ikke ville tåle lys. Og kanskje jeg tok bildet med meg inn i søvnen, for en gang i løpet av natten våknet jeg av en drøm om en kvinne som lå bundet fast til buken på et stort dyr.

Om morgenen regnet det, et stille, tett regn. Jeg hørte lyder fra første etasje, og jeg ville ikke stå opp, jeg ville vente til Daniel og Elisabeth var gått på jobb. Mens jeg lå og ventet, sovnet jeg.

Jeg våknet igjen ved ni-tiden, og tyve minutter senere gikk jeg ned trappen og inn i stuen. Det regnet ikke lenger, og jeg ville gå ut i hagen, men nøkkelen til verandadøren var borte. Jeg gikk ut på kjøkkenet. Det var dekket på frokost til meg, og ved siden av asjetten lå et ark papir. Der stod det: Synd at du måtte reise. Det synes Elisabeth også. Håper det ikke er noe alvorlig. Vær snill og legg nøkkelen under et av stolsetene på verandaen. Daniel.

Jeg leste det to ganger. Så forstod jeg. Jeg la arket fra meg nøyaktig der det hadde ligget, så gikk jeg opp i annen etasje og inn på Elisabeths og Daniels soveværelse. Jeg hadde ikke vært der før. Sengen var oppredd. Jeg så ikke etter noe spesielt. Det hang ingen løse plagg over stolryggene, og det lå ingenting på nattbordene som fortalte hvem som sov hvor. Jeg åpnet døren inn til et kott hvor det hang kjoler og dresser. Jeg så ikke etter noe spesielt. Jeg gikk ut av soveværelset og inn på rommet mitt. Jeg begynte å pakke kofferten. Det var fort gjort. Jeg bar den ned i entreen. Det var nesten to timer til toget skulle gå. Jeg satte meg inn i stuen. Jeg hadde en sta tanke i hodet som ikke hadde veket plass siden jeg leste beskjeden hans. Jeg rev et ark ut av notisboken og skrev: Så synd med Elisabeth. Håper det ikke er noe alvorlig. Hils henne. Jeg legger nøkkelen i postkassen. Frank.`}
        </p>
      </section>

      {/* ——— ANALİZ ——— */}
      <>
  <p
    style={{
      fontWeight: "bold",
      fontSize: "1.05em",
      marginBottom: 10,
    }}
  >
    Novelleanalyse – Kjell Askildsen: «Elisabeth»
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
    <strong>Forfatter og utgivelse:</strong> Novellen «Elisabeth» er skrevet av
    Kjell Askildsen og utgitt i samlingen <em>Hundene i Tessaloniki</em> (1996,
    Forlaget Oktober).
  </p>
  <p>
    <strong>Om forfatteren:</strong> Kjell Askildsen (1929–2021) – minimalistisk
    stil, korte dialoger, taus spenning og undertrykte følelser; tema: familie,
    seksualitet, ensomhet, skyld. Eksempel: Novellens nesten hele spenning
    ligger i hva som ikke blir sagt: Frank sier aldri direkte at han begjærer
    Elisabeth, men hele tiden kommer det fram gjennom blikkene hans og tankene
    hans.
  </p>
  <p>
    <strong>Tid/kontekst:</strong> 1990-tallet; psykologisk isolasjon, små
    øyeblikk som avdekker store konflikter. Eksempel: Vanlige hverdagslige
    situasjoner (frokost, hage, veranda, kaffe) blir fylt med skjult konflikt.
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
    <strong>Motiv:</strong> Frank besøker bror Daniel og svigerinne Elisabeth;
    begjær, mistanke og taus konflikt bygger seg opp. Eksempel: Frank sitter i
    hagen og fantaserer om Elisabeth mens han leser scenen mellom Esch og mor
    Hentjen; samtidig lurer han på hva Daniel gjør hos naboen.
  </p>
  <p>
    <strong>Tema:</strong>
  </p>
  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
    <li>
      <strong>Seksuell spenning og begjær:</strong> Frank blir opphisset av
      boken og kobler det til Elisabeth når hun dukker opp i vinduet.
    </li>
    <li>
      <strong>Skyld og skam:</strong> Frank føler skam etter hvert som
      fantasiene om Elisabeth blir sterkere, men klarer ikke stoppe dem.
    </li>
    <li>
      <strong>Fremmedgjøring:</strong> Forholdet mellom Frank og moren er
      kjølig — «Slutt med det der, mor.»
    </li>
    <li>
      <strong>Makt/kontroll:</strong> Daniel virker trygg og dominerende; han
      observerer Frank, kommenterer, tester ham.
    </li>
    <li>
      <strong>Taushet og kommunikasjonssvikt:</strong> Under middagen sitter de
      helt tause selv om Frank prøver å snakke.
    </li>
  </ul>
  <p>
    <strong>Uttrykk:</strong> Det usagte (blikk/pauser/antydning) bærer
    handlingen – ubehagelig og kompleks. Eksempel: Daniel ser ut av vinduet og
    sier «Det er kanskje best du reiser igjen» — uten forklaring.
  </p>
  <p>
    <strong>Budskap:</strong> Undertrykt begjær og uærlighet skaper avstand og
    ødeleggelse; mennesker lever side om side uten å forstå hverandre.
    Eksempel: Hele besøket ender uten et eneste klart oppgjør; bare lapper
    igjen.
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
      <strong>Struktur:</strong> Kronologisk, realistisk; små tilbakeblikk
      (moren). Eksempel: Frank tenker tilbake på barndommen når Daniel nevner
      sukkerbrød-skiven.
    </li>
    <li>
      <strong>Spenning bygges av det usagte:</strong> Eksempel: Togscenen —
      Frank ser Daniel komme ut av toget, men later som han ikke så ham.
    </li>
    <li>
      <strong>Åpning:</strong> Hverdagslig ro → urovekkende undertone.
      Eksempel: En stille søndag morgen blir plutselig ladet når Elisabeth
      viser seg i vinduet.
    </li>
    <li>
      <strong>Høydepunkt/vendepunkt:</strong> Togscenen og «hendene skylles» →
      antydet utroskap. Eksempel: Daniel kommer fra naboens hus med «opprømt»
      uttrykk og går rett for å vaske hendene.
    </li>
    <li>
      <strong>Slutt:</strong> Åpen, kald, resignert – lappene. Eksempel: Frank
      skriver sin egen lapp som et stumt svar på Daniel sin.
    </li>
    <li>
      <strong>Funksjon:</strong> Gradvist trykk uten store hendelser; leseren
      må lese mellom linjene. Eksempel: Ingen direkte konfrontasjon, men alt
      antydes – både begjær og svik.
    </li>
  </ul>

  <h3
    style={{
      color: "#db2777",
      marginTop: 16,
      marginBottom: 4,
    }}
  >
    ✍️ Fortellemåte og virkemidler
  </h3>
  <p>
    <strong>Forteller:</strong> Førsteperson, subjektiv og upålitelig – alt via
    Franks blikk. Eksempel: Frank tolker Elisabeths blikk-avverging som
    sjenanse og ikke som ubehag, selv om det kan være motsatt.
  </p>
  <p>
    <strong>Virkemidler:</strong>
  </p>
  <ul style={{ paddingLeft: "1.2rem", marginTop: 0 }}>
    <li>
      <strong>Symboler:</strong> Hage/epletre → fristelse (Frank tenker på
      Elisabeth mens han sitter i skyggen av epletreet). Bok → parallell til
      hans egne fantasier. Uvær → følelsesmessig kaos (tordenværet bryter ut når
      den skjulte spenningen er sterkest). Lapp → taus kommunikasjon.
    </li>
    <li>
      <strong>Kontraster:</strong> Indre lidenskap vs. ytre ro. Eksempel: Frank
      sitter rolig med kaffe mens tankene hans er seksuelt urolige og kaotiske.
    </li>
    <li>
      <strong>Underdrivelse og stillhet:</strong> Eksempel: Daniel sier bare
      «Hun er ikke helt seg selv for tiden» — men alt tyder på et større
      problem.
    </li>
    <li>
    <strong>Metaforer:</strong> Begjær og konflikt uttrykkes indirekte gjennom
    kropp og rom, som «avstanden mellom en dristig tanke og en konkret
    handling». Eksempel: «Jeg var altfor kald inni meg» – følelsesmessig
    tomhet som kulde.
  </li>

  <li>
    <strong>Gjentakelse (repetisjon):</strong> Korte, gjentatte fraser skaper
    knapphet og undertrykt spenning. Eksempel: «Jeg svarte ikke.» gjentas flere
    ganger og viser den emosjonelle avstanden.
  </li>

  <li>
    <strong>Sammenligninger:</strong> Askildsen bruker få, men presise
    sammenligninger som avslører forholdet mellom personene. Eksempel:
    Elisabeths raske og ivrige svar ved frokostbordet beskrives som om hvert
    spørsmål er «som en redningsplanke» – hun klamrer seg til samtalen for å
    unngå stillheten. Et annet eksempel er at Frank opplever hennes bortvendte
    blikk som at han får «fritt spillerom», som om han får tilgang til et rom.
  </li>

  <li>
    <strong>Besjeling (personifikasjon):</strong> Natur og omgivelser får
    menneskelige trekk og understreker den usagte spenningen. Eksempel:
    «Blader og gress blinket i solen» – naturen speiler en midlertidig lettelse
    etter uværet.
  </li>
  </ul>
  <p>
    <strong>Stil:</strong> Nøktern, presis prosa; korte setninger; mørk,
    trykkende tone. Eksempel: «Jeg svarte ikke.» gjentas mange ganger.
  </p>

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
      <strong>Frank:</strong> Distansert, begjærer, men handler ikke; forakter,
      men er like svak. Eksempel: Han vil «løfte» Elisabeth og tenker på hennes
      kropp, men gjør aldri noe direkte.
    </li>
    <li>
      <strong>Daniel:</strong> Karismatisk, skjuler; maskulinitet vs.
      hemmeligheter. Eksempel: Åpne skjorte, hårete bryst, dominerende
      holdning, men mystisk fravær (hos naboen).
    </li>
    <li>
      <strong>Elisabeth:</strong> Tyst, tvetydig; både offer og fristelse.
      Eksempel: Hun unngår blikkontakt, virker ukomfortabel, men smiler sjenert
      når hun kommer med kaffe.
    </li>
    <li>
      <strong>Miljø:</strong> Norsk småbyhjem; rom/natur = symbolsk (hage =
      fristelse, kjøkken = rutine, plikt, jernbane = flukt). Eksempel: Frank
      går flere ganger til jernbanerestauranten for å flykte fra uroen.
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
    Askildsen skriver om det som ikke blir sagt: relasjonell isolasjon,
    selvbedrag og moralens tomrom. Eksempel: Ingen sier høyt hva som skjer
    mellom Daniel og naboen eller hva Frank føler for Elisabeth.
  </p>
  <p>
    Hvem bedrar hvem forblir uklart; vi etterlates i samme uvisshet som
    karakterene. Eksempel: Elisabeth gråter på kjøkkenet — men hvorfor, får vi
    aldri vite.
  </p>
</>

      

      {/* Global ve print stilleri */}
      <style jsx global>{`
        /* Daha düzgün heceleme için yaygın diller */
        html {
          hanging-punctuation: first allow-end;
        }
        p,
        li {
          orphans: 2;
          widows: 2;
        }
        /* Yazdırma / PDF */
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          /* Kenar boşluklarını sıkıştır, yazı boyutunu ufalt */
          #__next,
          body > div:first-child {
            padding: 0 !important;
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
          section p,
          section li {
            font-size: 12px !important;
            line-height: 1.55 !important;
          }
          /* Yazdırma sırasında butonu gizle */
          button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
