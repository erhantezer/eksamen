"use client";
import React, { useState } from "react";

export default function ElisabethQuizNO() {
  const questions = [
    {
      id: 1,
      q: "Hvem har skrevet novellen «Elisabeth», og i hvilken sammenheng er den kjent for norske lesere?",
      choices: [
        "A) Gro Dahle – fra samlingen «Amerika»",
        "B) Kjell Askildsen – blant annet i novellesamlingen «Hundene i Tessaloniki» og i utvalg som «Askildsens beste»",
        "C) Dag Solstad – fra romanen «Shyness»",
        "D) Per Petterson – fra samlingen «Aske i munnen, sand i skoa»",
      ],
      answer: 1,
      explain:
        "Forfatteren er Kjell Askildsen. Novellen «Elisabeth» er trykt i norske Askildsen-utvalg, blant annet i samlingen «Hundene i Tessaloniki» og senere i «Askildsens beste».",
    },
    {
      id: 2,
      q: "Hva kjennetegner Kjell Askildsens måte å skrive på, slik den kommer fram i «Elisabeth»?",
      choices: [
        "A) Lang frampekende episke partier og rike naturbeskrivelser",
        "B) Humoristisk, muntlig fortellerstil med mange digresjoner",
        "C) Kort, nøkternt språk, mye undertekst og stillhet mellom replikkene",
        "D) Rimet og rytmisk språk med mange poetiske bilder",
      ],
      answer: 2,
      explain:
        "Askildsen er kjent for et knapt, presist språk med mye som ikke sies direkte. I «Elisabeth» ligger konfliktene i pauser, blikk og små detaljer.",
    },
    {
      id: 3,
      q: "Når og hvor kan vi omtrent tenke oss at handlingen i «Elisabeth» foregår, og hvorfor er det relevant?",
      choices: [
        "A) I middelalderen på en norsk gård – viktig for å forstå æreskultur",
        "B) I en moderne norsk småby på 1900-tallet – viktig for å forstå hverdagslig, gjenkjennelig familieliv og småborgerlige rammer",
        "C) I en fremtidsdystopi – viktig for å forstå teknologikritikken",
        "D) I en storby i Sør-Amerika – viktig for å forstå politisk uro",
      ],
      answer: 1,
      explain:
        "Miljøet er en nokså vanlig norsk småby / forstad i moderne tid: hage, veranda, togstasjon. Det gjør teksten gjenkjennelig og understreker at sterke konflikter kan ligge i helt vanlige familier.",
    },
    {
      id: 4,
      q: "Hva er motivet (den ytre handlingen) i novellen?",
      choices: [
        "A) En familie på ferie som blir rammet av en naturkatastrofe",
        "B) En mann som besøker broren og svigerinnen, opplever underliggende spenninger og reiser tidligere enn planlagt",
        "C) En kvinne som rømmer fra ekteskapet sitt til en annen by",
        "D) En sønn som kommer hjem for å ordne et dødsbo etter foreldrene",
      ],
      answer: 1,
      explain:
        "Motivet er enkelt: Frank besøker broren Daniel og Elisabeth for en uke, møter også moren, merker spenninger, misunnelse og begjær – og blir til slutt bedt om å reise.",
    },
    {
      id: 5,
      q: "Hva er det mest treffende hovedtemaet i «Elisabeth»?",
      choices: [
        "A) Krig og flukt",
        "B) Økonomisk ulikhet og klassekamp",
        "C) Nærhet og avstand i familieforhold – sjalusi, begjær og mistillit",
        "D) Møtet mellom by og land",
      ],
      answer: 2,
      explain:
        "Novellen handler om spente relasjoner: brødresjalusi, begjær mot svigerinne og mistillit i ekteskapet. Temaet er nærhet/avstand og hvor vanskelig det er å nå inn til hverandre.",
    },
    {
      id: 6,
      q: "Hvilket alternativ beskriver BEST et viktig undertema i novellen?",
      choices: [
        "A) Religiøs tro og skyldfølelse mellom mor og sønn",
        "B) Arbeidsliv og fagforeningskamp",
        "C) Naturvern og klima",
        "D) Kriminalitet og rettssystemet",
      ],
      answer: 0,
      explain:
        "Møtet med moren viser et sterkt undertema om religion, skyld og skuffelse: hun har bedt for at Frank skal komme tilbake til Jesus, mens han avviser dette.",
    },
    {
      id: 7,
      q: "Hvordan kommer temaet om avstand og mislykket kommunikasjon tydeligst til uttrykk?",
      choices: [
        "A) Gjennom lange, ærlige samtaler der alle sier hva de føler",
        "B) Gjennom stillhet, unnvikende blikk, korte kommentarer og små misforståelser",
        "C) Gjennom brev mellom personene",
        "D) Gjennom at fortelleren forklarer alt direkte for leseren",
      ],
      answer: 1,
      explain:
        "Personene snakker lite direkte om konflikt. Avstanden vises i stillhet rundt middagsbordet, blikk som unngås, halvkvedede replikker og enkle høflighetsfraser.",
    },
    {
      id: 8,
      q: "Kan vi si at novellen har et mulig budskap, og i så fall hvilket passer best?",
      choices: [
        "A) At sterk tro alltid løser familieproblemer",
        "B) At begjær og mistillit kan ødelegge nære relasjoner når ingen snakker ærlig",
        "C) At man aldri burde besøke familien sin",
        "D) At ekteskap alltid er trygt og stabilt",
      ],
      answer: 1,
      explain:
        "Et mulig budskap er at undertrykte følelser, sjalusi og mistillit tærer på relasjoner når ingen tør å sette ord på det – alt skjer under overflaten.",
    },
    {
      id: 9,
      q: "Hvordan er komposisjonen i «Elisabeth» bygget opp?",
      choices: [
        "A) Strengt kronologisk, med et konsentrert tidsrom og noen få små tilbakeblikk",
        "B) Full av tidsbrudd, hopp fram og tilbake over mange år",
        "C) Sirkelkomposisjon der teksten slutter med samme scene som den begynner",
        "D) Som en dagbok med datoer og lange refleksjoner",
      ],
      answer: 0,
      explain:
        "Novellen følger i hovedsak én helg/uke kronologisk. Tilbakeblikkene er korte (barndomsminner, reiser), og spenningen bygges stille opp mot slutten.",
    },
    {
      id: 10,
      q: "Hvordan vil du beskrive åpningsavsnittet i novellen?",
      choices: [
        "A) In medias res – vi kastes rett inn i en rolig søndagsmorgen uten forklaring, og detaljer fyller inn bakgrunnen etter hvert",
        "B) Lang bakgrunn om slektstavler og familiehistorie",
        "C) Et tilbakeblikk til Franks barndom",
        "D) En dramatisk scene med bråk og rop",
      ],
      answer: 0,
      explain:
        "Vi kommer rett inn i en konkret situasjon: Frank på solseng i hagen med boka. Hvem han er og hvorfor han er der, skjønner vi gradvis.",
    },
    {
      id: 11,
      q: "Hva kan regnes som vendepunktet i novellen?",
      choices: [
        "A) Da moren sier at hun har bedt for ham",
        "B) Da Frank ser Daniel komme ut av toget og skjønner at noe er skjult for ham",
        "C) Da stormen bryter løs",
        "D) Da Frank spiser sukkererter i kjøkkenhagen",
      ],
      answer: 1,
      explain:
        "Å se Daniel komme av toget, selv om Daniel senere sier at han var et annet sted, blir et sterkt tegn på løgn og mulig utroskap – leseren forstår at noe foregår bak ryggen på både Frank og Elisabeth.",
    },
    {
      id: 12,
      q: "Hva slags avslutning har novellen «Elisabeth»?",
      choices: [
        "A) Helt lukket – alle konflikter blir forklart og løst",
        "B) Åpen – vi får ingen klar forklaring på hva som egentlig har skjedd med Elisabeth og forholdet mellom brødrene",
        "C) Komisk – alt ender i forsoning og latter",
        "D) Tragisk med en tydelig dødsscene",
      ],
      answer: 1,
      explain:
        "Slutten er åpen. Frank forlater huset, og vi får bare hans tanke om lappen han kunne skrevet. Leseren må selv tolke hva som egentlig har skjedd.",
    },
    {
      id: 13,
      q: "Hva er den viktigste effekten av komposisjonen i novellen?",
      choices: [
        "A) Den skaper høy tempo og action",
        "B) Den gjør teksten forvirrende og uoversiktlig",
        "C) Den langsomme, stramme oppbyggingen gjør den tause konflikten mer ubehagelig og intens",
        "D) Den legger vekt på humor og ironi hele veien",
      ],
      answer: 2,
      explain:
        "At alt skjer i et lite tidsrom og at små episoder legges etter hverandre, gjør at den uuttalte konflikten stadig bygges opp – uten at den noen gang eksploderer åpent.",
    },
    {
      id: 14,
      q: "Hvordan blir historien fortalt – hvilken fortellemåte dominerer?",
      choices: [
        "A) Førstepersonforteller (jeg) med innblikk i egne tanker og observasjoner",
        "B) Allvitende tredjeperson med innblikk i alles tanker",
        "C) Refererende referatstil uten tanker og følelser",
        "D) Brevroman med flere brevskribenter",
      ],
      answer: 0,
      explain:
        "Frank forteller i jeg-form. Vi får tilgang til tankene hans, men ikke direkte til Daniel og Elisabeths. Det skaper usikkerhet og tolkningsrom.",
    },
    {
      id: 15,
      q: "Hvilke virkemidler er spesielt viktige i novellen?",
      choices: [
        "A) Mange sammenlikninger og naturmetaforer, men nesten ingen symboler",
        "B) Symbolsk bruk av vær og hage (stormen, regnet, kjøkkenhagen), samt allusjoner til religion og litteratur («Esch eller anarki», Golgata, Getsemane)",
        "C) Rim og rytme som i et dikt",
        "D) Overdreven bruk av ironi og parodi",
      ],
      answer: 1,
      explain:
        "Stormen, regnet, hagen og de grønne plantene speiler stemninger og relasjoner. Referansene til Bibelen og romanen «Esch eller anarki» peker mot skyld, begjær og uorden i menneskelige forhold.",
    },
    {
      id: 16,
      q: "Hvordan vil du beskrive språk og stil i «Elisabeth»?",
      choices: [
        "A) Lang, høytidelig og gammeldags",
        "B) Kort, nøkternt og konkret, med mye brukt undertekst",
        "C) Muntlig slangpreget dialekt",
        "D) Poetisk med store mengder metaforer og adjektiver",
      ],
      answer: 1,
      explain:
        "Språket er typisk Askildsen: enkelt, presist og lavmælt. Nettopp derfor blir små nyanser og pauser viktige for tolkningen.",
    },
    {
      id: 17,
      q: "Hvordan er hovedpersonen Frank indirekte beskrevet gjennom novellen?",
      choices: [
        "A) Som trygg og harmonisk, helt uten indre konflikt",
        "B) Som observerende, usikker, preget av begjær, misunnelse og en slags skyldfølelse",
        "C) Som aggressiv og voldelig gjennom hele teksten",
        "D) Som komisk og uansvarlig",
      ],
      answer: 1,
      explain:
        "Frank ser og analyserer mye, men handler lite. Han begjærer Elisabeth, misunner Daniel og har et anstrengt forhold til moren – han bærer på indre uro.",
    },
    {
      id: 18,
      q: "Hvordan framstår forholdet mellom Frank og Daniel?",
      choices: [
        "A) Som nært og tillitsfullt brorskap",
        "B) Som distansert og konfliktfylt, preget av misunnelse og gamle sår",
        "C) Som formelt, men uten noen form for spenning",
        "D) Som rent profesjonelt kollegaforhold",
      ],
      answer: 1,
      explain:
        "De deler barndom, men ikke trygghet. Minner fortelles ulikt, og Daniel virker både nedlatende og mistenksom, mens Frank føler konkurranse og avstand.",
    },
    {
      id: 19,
      q: "Hvordan er Elisabeth som figur fremstilt i teksten?",
      choices: [
        "A) Tydelig, dominerende og talefør gjennom hele novellen",
        "B) Passiv og helt uinteressant for de andre",
        "C) Stillferdig, litt tilbaketrukket, fanget mellom to brødre og et ekteskap i ubalanse",
        "D) Som en ren komisk figur",
      ],
      answer: 2,
      explain:
        "Elisabeth snakker lite, unngår blikk, virker urolig og sårbar. Vi ser henne både gjennom Franks begjær og Daniels kontroll – hun blir et stille sentrum for konflikten.",
    },
    {
      id: 20,
      q: "Hvordan virker miljøet (hus, hage, veranda, togstasjon) inn på tema og handling?",
      choices: [
        "A) Det skaper et nøytralt bakteppe uten betydning",
        "B) Det viser et trangt, småborgerlig miljø der konflikter skjules bak høflighet og rutiner",
        "C) Det viser et dramatisk krigslandskap",
        "D) Det understreker bare naturglede og harmoni",
      ],
      answer: 1,
      explain:
        "Det rolige, hverdagslige småbymiljøet står i kontrast til den sterke uroen innvendig. Bagateller som hage, kaffe og middagsbord blir arenaer for maktspill og stilltiende konflikter.",
    },
    {
      id: 21,
      q: "Hva slags atmosfære preger miljøet og stemningen i novellen?",
      choices: [
        "A) Lys og sorgfri idyll",
        "B) Actionfylt og dramatisk",
        "C) Lavmælt, trykkende og urolig – med underliggende konflikt og ubehag",
        "D) Humoristisk og satirisk",
      ],
      answer: 2,
      explain:
        "Alt virker tilsynelatende rolig, men under ligger en tung, ubehagelig spenning: taushet ved bordet, uforløst seksualitet, mistenksomhet og skuffelse.",
    },
    {
      id: 22,
      q: "Når ble «Hundene i Tessaloniki» med novellen «Elisabeth» første gang utgitt som novellesamling?",
      choices: [
        "A) 1953",
        "B) 1983",
        "C) 1996",
        "D) 2005",
      ],
      answer: 2,
      explain:
        "Novellen «Elisabeth» er blant tekstene i novellesamlingen «Hundene i Tessaloniki», som kom ut i 1996.",
    },
    {
      id: 23,
      q: "Hvilke temaer går ofte igjen i Kjell Askildsens forfatterskap, og som vi også finner i «Elisabeth»?",
      choices: [
        "A) Eventyrmotiv, magi og heltemot",
        "B) Ensomhet, taushet, samlivskonflikter og kommunikasjonssvikt",
        "C) Krigsskildringer og politisk satire",
        "D) Naturlyrikk og økokritikk",
      ],
      answer: 1,
      explain:
        "Askildsen skriver ofte om ensomhet, anstrengte parforhold, konflikter i familier og mennesker som ikke klarer å snakke sammen – alt dette kjenner vi igjen i «Elisabeth».",
    },
    {
      id: 24,
      q: "Hvorfor er tiden novellen er skrevet i (slutten av 1900-tallet) relevant for hvordan vi oppfatter innholdet?",
      choices: [
        "A) Fordi det er en historisk roman om krig",
        "B) Fordi velferdssamfunnet og den «vanlige» middelklassehverdagen gjør kontrasten til den indre uroen ekstra tydelig",
        "C) Fordi den forklarer alle personenes handlinger politisk",
        "D) Fordi det er viktig å forstå datidens teknologi",
      ],
      answer: 1,
      explain:
        "Novellen viser et tilsynelatende stabilt, moderne hverdagsliv – nettopp derfor virker den følelsesmessige kulden og uroen ekstra sterk: problemene er ikke økonomiske, men relasjonelle.",
    },
    {
      id: 25,
      q: "Hvordan kommer hovedtemaet om nærhet/avstand konkret til uttrykk i novellen?",
      choices: [
        "A) Gjennom lange kjærlighetserklæringer mellom Daniel og Elisabeth",
        "B) Gjennom scener med stillhet, misforståelser, usagte anklager og Frank som iakttar mer enn han handler",
        "C) Gjennom at alle gråter åpent ved middagsbordet",
        "D) Kun gjennom ytre dramatikk og vold",
      ],
      answer: 1,
      explain:
        "Temaet vises bl.a. i det anspente besøket hos moren, den tause middagen, scenene i hagen og Franks observasjoner av Daniel og Elisabeth – ingen sier direkte hva de føler.",
    },
    {
      id: 26,
      q: "Finnes det både frampek og tilbakeblikk i novellen, og hvordan brukes de?",
      choices: [
        "A) Nei, teksten er helt uten tidsbrudd",
        "B) Bare lange historiske tilbakeblikk",
        "C) Ja, korte tilbakeblikk til barndommen og små frampek, som når vi ser Daniel på jernbanestasjonen, antyder konflikten som skal vokse",
        "D) Bare framtidsvisjoner om hvordan livet deres blir om 20 år",
      ],
      answer: 2,
      explain:
        "Fortiden kommer inn i korte minner (barndom, morens forventninger), mens scenen på stasjonen og stormen fungerer som frampek mot det uunngåelige bruddet.",
    },
    {
      id: 27,
      q: "Hva preger fortellemåten mest – hva består teksten hovedsakelig av?",
      choices: [
        "A) Action og ytre hendelser i rask rekkefølge",
        "B) Lange naturbeskrivelser uten dialog",
        "C) Rolig ytre handling med mye dialog og tankereferat fra jeg-fortelleren",
        "D) Bare indre monolog uten ytre handling",
      ],
      answer: 2,
      explain:
        "Det skjer egentlig lite ytre dramatisk, men vi får mange dialoger og Franks tanker om det som skjer – det er fortellerens blikk som gjør små hendelser ladet.",
    },
    {
      id: 28,
      q: "Hvilket alternativ peker på viktige symboler og språklige bilder i novellen?",
      choices: [
        "A) Toget, stormen, regnet, hagen og den låste verandadøren",
        "B) Drager, riddere og slott",
        "C) Biljardkuler og fotballbaner",
        "D) Flyplasser og motorveier",
      ],
      answer: 0,
      explain:
        "Toget antyder bevegelse og avstand, stormen og regnet speiler konfliktene, hagen og grønnsakene peker mot sårbarhet og pleie, mens den låste verandadøren og nøkkelen signaliserer utestengelse.",
    },
    {
      id: 29,
      q: "Hvordan er personene hovedsakelig beskrevet?",
      choices: [
        "A) Direkte – forfatteren sier hele tiden rett ut hvilke egenskaper de har",
        "B) Indirekte – gjennom handlinger, replikker, pauser, blikk og små detaljer i miljøet",
        "C) Metaforisk – som dyr og planter",
        "D) Kun gjennom andre bipersoners kommentarer",
      ],
      answer: 1,
      explain:
        "Askildsen sier sjelden rett ut hvordan personene «er». Vi må tolke dem gjennom hva de gjør, hvordan de ser på hverandre, hva de ikke sier.",
    },
    {
      id: 30,
      q: "Har hovedpersonene indre konflikter, og i så fall hvem tydeligst?",
      choices: [
        "A) Ingen har indre konflikt, alle er fornøyde",
        "B) Bare Daniel, som elsker moren sin",
        "C) Ja, særlig Frank, som slites mellom begjær, misunnelse, skyld og ønsket om å være et «ordentlig» menneske",
        "D) Bare Elisabeth, alle andre er entydige",
      ],
      answer: 2,
      explain:
        "Frank er tydelig i indre konflikt: forholdet til moren, følelsene for Elisabeth, forholdet til Daniel og følelsen av å være «altfor kald inni seg».",
    },
    {
      id: 31,
      q: "Hvordan vil du kort beskrive atmosfæren i miljøet, knyttet til vær og omgivelser?",
      choices: [
        "A) Lyst, fritt og ubekymret – naturidyll uten brudd",
        "B) Klaustrofobisk og urolig, der stille rom, regn, torden og en liten hage forsterker følelsen av innestengt konflikt",
        "C) Kaldt, men komisk og parodisk",
        "D) Helt nøytral, uten effekt på leseren",
      ],
      answer: 1,
      explain:
        "Det tilsynelatende vanlige huset og hagen blir sammen med uværet et trangt rom der spenningene konsentreres. Leseren merker at noe «koker» under den rolige overflaten.",
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (qi, ci) => {
    if (showResult) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = ci;
      return next;
    });
  };

  const correctCount = answers.reduce(
    (acc, val, idx) => (val === questions[idx].answer ? acc + 1 : acc),
    0
  );

  const allAnswered = answers.every((v) => v !== null);

  const handleShowResult = () => {
    if (!allAnswered) {
      alert("Svar på alle spørsmål før du ser resultatet!");
      return;
    }
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setShowResult(false);
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Inter, system-ui, Arial, sans-serif",
        color: "#111",
        lineHeight: 1.65,
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(22px,3.2vw,30px)",
          marginBottom: 8,
        }}
      >
        🧠 «Elisabeth» – novelleanalyse-quiz
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: 20 }}>
        Spørsmål om tema, komposisjon, forteller, personer og miljø i Kjell
        Askildsens novelle «Elisabeth».
      </p>

      <div
        style={{
          background: "#fafafa",
          border: "1px solid #eee",
          borderRadius: 12,
          padding: "16px",
        }}
      >
        {questions.map((item, qi) => (
          <div
            key={item.id}
            style={{
              borderBottom:
                qi !== questions.length - 1 ? "1px solid #eee" : "none",
              paddingBottom: 16,
              marginBottom: 16,
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              {qi + 1}. {item.q}
            </div>

            <div style={{ display: "grid", gap: 8 }}>
              {item.choices.map((c, ci) => {
                const selected = answers[qi] === ci;
                const isCorrect = showResult && ci === item.answer;
                const isWrong = showResult && selected && ci !== item.answer;

                return (
                  <button
                    key={ci}
                    onClick={() => handleSelect(qi, ci)}
                    style={{
                      textAlign: "left",
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: "1px solid #ddd",
                      background: isCorrect
                        ? "#e8f7ed"
                        : isWrong
                        ? "#fde8e8"
                        : selected
                        ? "#f2f2f2"
                        : "white",
                      cursor: showResult ? "default" : "pointer",
                      transition: "background 0.15s ease",
                    }}
                    aria-pressed={selected}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: "#333",
                  background: "#f6f6f6",
                  border: "1px solid #eee",
                  borderRadius: 8,
                  padding: "10px 12px",
                }}
              >
                <strong>Fasit:</strong> {item.explain}
              </div>
            )}
          </div>
        ))}

        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          {!showResult ? (
            <button
              onClick={handleShowResult}
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid #333",
                background: "#111",
                color: "white",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Vis resultat
            </button>
          ) : (
            <>
              <div
                style={{
                  alignSelf: "center",
                  fontWeight: 700,
                  color: "#0a7c3b",
                  marginRight: "auto",
                }}
              >
                Poengsum: {correctCount} / {questions.length}
              </div>
              <button
                onClick={handleReset}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  background: "white",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Start på nytt
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
