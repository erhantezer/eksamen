"use client";
import React, { useState } from "react";

export default function EnOgToOgTreQuizNO() {
  const questions = [
    // --- KORT INFORMASJON OM NOVELLEN ---
    {
      id: 1,
      q: "Hvem har skrevet novellen «En og to og tre», og hvor er den kjent fra?",
      choices: [
        "A) Gro Dahle – en moderne norsk forfatter med flere novellesamlinger",
        "B) Kjell Askildsen – norsk minimalist",
        "C) Ingvild Rishøi – norsk kortprosa-forfatter",
        "D) Jon Fosse – nobelprisvinner i litteratur",
      ],
      answer: 0,
      explain:
        "«En og to og tre» er skrevet av Gro Dahle, en sentral, moderne norsk forfatter.",
    },
    {
      id: 2,
      q: "Hva er typisk for Gro Dahles forfatterskap, som vi også ser i «En og to og tre»?",
      choices: [
        "A) Historiske romaner om konger og krig",
        "B) Poetisk, sanselig språk og fokus på psykologiske temaer og utenforskap",
        "C) Realistisk krim med mange politietterforskninger",
        "D) Reiseskildringer fra hele verden",
      ],
      answer: 1,
      explain:
        "Dahle er kjent for poetisk språk, sterke bilder og temaer som sjalusi, skam, psykisk sårbarhet og utenforskap – alt dette finnes i novellen.",
    },
    {
      id: 3,
      q: "Hva sier tiden novellen er skrevet i (moderne samtid) om hvordan vi leser teksten?",
      choices: [
        "A) Ingenting – den kunne like gjerne skjedd i vikingtida",
        "B) Mye – moderne festkultur, kjønnsroller og kroppsspråk er lett å kjenne igjen for dagens lesere",
        "C) Den er egentlig en historisk tekst",
        "D) Den handler først og fremst om teknologiutvikling",
      ],
      answer: 1,
      explain:
        "Situasjonen – en fest, blikk, kroppsspråk, sjalusi – er veldig gjenkjennelig i dag. Det gjør at vi lett kan speile oss i hovedpersonens skam og begjær.",
    },

    // --- TEMA, MOTIV, BUDSKAP ---
    {
      id: 4,
      q: "Hva er motivet (den ytre handlingen) i «En og to og tre»?",
      choices: [
        "A) Et ektepar som skiller seg etter mange år",
        "B) En person på fest som blir opptatt av en mann, konkurrerer med en annen kvinne og ender med å gå alene hjem",
        "C) En familie som drar på ferie til syden",
        "D) En reise til en storby",
      ],
      answer: 1,
      explain:
        "Motivet er en festkveld der «du» jakter på en manns oppmerksomhet, konkurrerer med kvinnen i rød kjole, feiler og går alene hjem i nederlag.",
    },
    {
      id: 5,
      q: "Hvordan kan vi formulere hovedtemaet i novellen med få ord?",
      choices: [
        "A) Krig og flukt",
        "B) Kjærlighet, sjalusi og makt – kampen om å bli sett",
        "C) Arbeidsliv og økonomi",
        "D) Barndomsminner",
      ],
      answer: 1,
      explain:
        "Teksten handler om begjær, sjalusi og hvem som har makt i sosiale situasjoner – den som blir sett, eller den som blir usynlig.",
    },
    {
      id: 6,
      q: "Finnes det flere viktige temaer enn bare kjærlighetssorg?",
      choices: [
        "A) Nei, den handler bare om romantikk",
        "B) Ja, utenforskap, selvbilde, skam og sosial rang er også sentrale temaer",
        "C) Bare politikk",
        "D) Bare naturvern",
      ],
      answer: 1,
      explain:
        "Fortelleren opplever seg som «rusk og skrap». Det handler om identitet, selvforakt og å stå nederst i det usynlige hierarkiet i et rom.",
    },
    {
      id: 7,
      q: "Hvordan kommer temaet makt/maktløshet konkret til uttrykk i teksten?",
      choices: [
        "A) Gjennom politietterforskning",
        "B) Gjennom stillingsannonser og lønn",
        "C) Gjennom hvem som får blikk og kroppskontakt, og hvem som blir oversett – særlig i scenen med glasskuppelen",
        "D) Bare i naturbeskrivelser",
      ],
      answer: 2,
      explain:
        "Maktkampen vises i at han vender seg mot den røde kjolen, mens «du» presses ut. Glasskuppelen rundt dem symboliserer en lukket sone hun ikke slipper inn i.",
    },
    {
      id: 8,
      q: "Hva kan være et mulig budskap i novellen?",
      choices: [
        "A) At man aldri skal gå på fest",
        "B) At den som ikke blir sett, kan oppleve seg nesten utslettet, og at sosiale spill er brutale",
        "C) At kjærlighet alltid seirer",
        "D) At det er farlig å spise geitost",
      ],
      answer: 1,
      explain:
        "Novellen viser hvor vondt det er å stå utenfor og hvor mye vi legger av egen verdi i andres blikk og bekreftelse.",
    },

    // --- KOMPOSISJON ---
    {
      id: 9,
      q: "Hvordan vil du beskrive komposisjonen i «En og to og tre»?",
      choices: [
        "A) Strengt kronologisk gjennom én kveld og hjemturen etterpå",
        "B) Full av lange tilbakeblikk til barndommen",
        "C) En sirkelkomposisjon som slutter med samme scene som den begynner",
        "D) En dagbok over flere år",
      ],
      answer: 0,
      explain:
        "Vi følger én festkveld og veien hjem, i rekkefølge. Det gir en tett, intens bevegelse gjennom følelsene hennes.",
    },
    {
      id: 10,
      q: "Hva kjennetegner åpningsavsnittet?",
      choices: [
        "A) In medias res – vi kastes rett inn i øyeblikket da hun ser ham",
        "B) En lang redegjørelse for barndommen hennes",
        "C) En naturbeskrivelse uten personer",
        "D) En forklaring av hele bakhistorien mellom personene",
      ],
      answer: 0,
      explain:
        "«Du ser ham med én gang.» Leseren blir umiddelbart trukket inn i blikket og forelskelses-øyeblikket.",
    },
    {
      id: 11,
      q: "Finnes det et tydelig høydepunkt/vendepunkt i novellen?",
      choices: [
        "A) Når hun går hjem og hører duggen",
        "B) Når hun går inn i samtalen om geitost og bananer, blir oversett og mister all rest av verdighet",
        "C) Når de snakker om traktorer",
        "D) Når han sier «den hvite pepperosten er den beste»",
      ],
      answer: 1,
      explain:
        "Klimakset er når hun fysisk bryter inn i boblen deres (glasskuppelen), men møtes av enighet og ignorering. Da mister hun det siste grepet hun hadde.",
    },
    {
      id: 12,
      q: "Hvordan er avslutningen på novellen?",
      choices: [
        "A) Helt lukket og harmonisk – de blir kjærester",
        "B) Åpen og melankolsk – hun går alene, tenker på håret som vokser og hvisker «Unnskyld» til grinda",
        "C) Humoristisk og komisk",
        "D) Tragisk med død",
      ],
      answer: 1,
      explain:
        "Slutten gir ingen løsning, men et poetisk bilde: hun er alene i mørket, men håret vokser – et lite tegn på liv og håp.",
    },
    {
      id: 13,
      q: "Hva betyr komposisjonen for hvordan vi opplever teksten?",
      choices: [
        "A) Den gjør teksten forvirrende",
        "B) Den gjør alt flatt og kjedelig",
        "C) Den samler hele den følelsesmessige reisen (håp → kamp → nederlag) i én intens kveld",
        "D) Den gjør teksten til en ren naturfortelling",
      ],
      answer: 2,
      explain:
        "At alt skjer i løpet av én kveld gjør kontrasten mellom forventning i starten og knust selvbilde på slutten ekstra sterk.",
    },

    // --- FORTELLEMÅTE OG VIRKEMIDLER ---
    {
      id: 14,
      q: "Hvilken fortellerform brukes i novellen?",
      choices: [
        "A) Førsteperson «jeg»",
        "B) Andreperson «du» med personal synsvinkel",
        "C) Tredjeperson allvitende",
        "D) Tredjeperson refererende",
      ],
      answer: 1,
      explain:
        "Teksten bruker «du»-form, men vi ser verden gjennom én persons blikk og følelser – en slags personal synsvinkel i andreperson.",
    },
    {
      id: 15,
      q: "Hva preger fortellemåten mest?",
      choices: [
        "A) Bare ytre handling uten tanker",
        "B) Mye tankereferat, sanseinntrykk og poetiske bilder i tillegg til dialog",
        "C) Bare dialog",
        "D) Lange historiske faktaavsnitt",
      ],
      answer: 1,
      explain:
        "Vi er inne i hodet hennes – alt er filtrert gjennom hennes følelser, blikk og fantasier. Det gir en intens og subjektiv opplevelse.",
    },
    {
      id: 16,
      q: "Hvilke språklige bilder/symboler er spesielt viktige i teksten?",
      choices: [
        "A) Biler og motorveier",
        "B) Glasskuppelen, at hun former seg til en vase, hagen som en «fuktig mørk munn» og maur som henter lik",
        "C) Slott og drager",
        "D) Flyplasser og fly",
      ],
      answer: 1,
      explain:
        "Glasskuppelen symboliserer forholdet mellom de to andre. Vasen viser hvordan hun gjør seg til et objekt. Hagen og maurene gir en kroppslig, urolig stemning.",
    },
    {
      id: 17,
      q: "Hva slags virkning har gjentakelsen av replikken «Unnskyld – Det gjør ingenting»?",
      choices: [
        "A) Bare komisk effekt",
        "B) Den skaper rytme og viser hvordan hun stadig tråkker over grenser, men likevel blir bagatellisert og ikke tatt på alvor",
        "C) Ingen virkning",
        "D) Det er bare høflighet",
      ],
      answer: 1,
      explain:
        "Replikkene går igjen ved flere fysiske sammenstøt. De viser både hennes klossethet og hvordan hun blir holdt i en høflig, men distansert posisjon.",
    },
    {
      id: 18,
      q: "Hva slags språklig virkemiddel brukes når hagen «sluker seg selv i mørket» og grinda svarer «Det gjør ikke noe»?",
      choices: [
        "A) Metafor og besjeling",
        "B) Ironi og rim",
        "C) Allitterasjon og onomatopoetikon",
        "D) Overdrivelse og parodi",
      ],
      answer: 0,
      explain:
        "Hagen og grinda får menneskelige egenskaper. Besjeling/metaforer gjør følelsene hennes synlige i omgivelsene.",
    },
    {
      id: 19,
      q: "Hvordan vil du beskrive språket og stiltonen i novellen?",
      choices: [
        "A) Tørt og juridisk",
        "B) Poetisk, rytmisk og sanselig, med mange bilder og gjentakelser",
        "C) Slangpreget og grovt hele veien",
        "D) Helt nøytral sakprosa",
      ],
      answer: 1,
      explain:
        "Teksten har tydelig rytme og mange sterke bilder. Det gjør den mer fysisk og følelsesnær enn en «vanlig» realistisk prosa.",
    },

    // --- PERSONER OG MILJØ ---
    {
      id: 20,
      q: "Hvordan er hovedpersonen («du») hovedsakelig beskrevet?",
      choices: [
        "A) Direkte med mange adjektiver som «sjalu» og «usikker»",
        "B) Indirekte gjennom handlinger, blikk, indre tanker og strategier",
        "C) Bare gjennom hva andre sier om henne",
        "D) Ikke beskrevet i det hele tatt",
      ],
      answer: 1,
      explain:
        "Vi må lese henne gjennom hvordan hun observerer, planlegger, presser seg på og til slutt bryter sammen. Forfatteren sier sjelden direkte hva hun «er».",
    },
    {
      id: 21,
      q: "Forandrer hovedpersonen seg underveis i novellen?",
      choices: [
        "A) Nei, hun er helt lik hele veien",
        "B) Ja, hun går fra kontrollert og håpefull til desperat og til slutt helt nedbrutt",
        "C) Hun blir mer og mer sint og voldelig",
        "D) Hun blir mer og mer likegyldig",
      ],
      answer: 1,
      explain:
        "I starten har hun tro på blikk og signaler. Etter hvert blir hun mer desperat i framstøtene sine og ender i skam og selvforakt.",
    },
    {
      id: 22,
      q: "Hvordan kan forholdet mellom «du» og kvinnen i rød kjole beskrives?",
      choices: [
        "A) Som et varmt vennskap",
        "B) Som et nøytralt bekjentskap uten følelser",
        "C) Som en ordløs konkurranse om mannen – konfliktfylt selv om de nesten ikke snakker sammen",
        "D) Som mor og datter",
      ],
      answer: 2,
      explain:
        "De to kvinnene blir motpoler: den synlige (rød kjole) og den usette. Konkurransen er sterk, men aldri uttalt.",
    },
    {
      id: 23,
      q: "Hvordan henger miljøet (festen, hagen, sommerkvelden) sammen med hovedtemaet?",
      choices: [
        "A) Det har ingen betydning, er bare bakgrunn",
        "B) Festen er et sosialt rom der status og makt avgjøres – perfekt ramme for sjalusi og kampen om å bli sett",
        "C) Det er egentlig en naturnovelle",
        "D) Det handler mest om politikk",
      ],
      answer: 1,
      explain:
        "Festen fungerer som en scene med statister og hovedroller. Hvem som får oppmerksomhet der, blir avgjørende for selvbildet til «du».",
    },
    {
      id: 24,
      q: "Hva slags atmosfære/stemning skaper miljøet og språket sammen?",
      choices: [
        "A) Lys, helt sorgfri idyll",
        "B) Skrekk og blod",
        "C) Tett, sensuell og litt klaustrofobisk – blanding av sommerkveld og tung sjalusi",
        "D) Tørr og nøktern saklighet",
      ],
      answer: 2,
      explain:
        "Vi får jordbær, syriner og varm vind, men også maurlik, mørk hage og tung skam. Stemningen er både vakker og smertefull.",
    },

    // --- EKSTRA FOR Å NÅ 30 SPØRSMÅL (DYBDE I ANALYSEN) ---
    {
      id: 25,
      q: "Kan vi snakke om frampek i novellen, og i så fall hvor?",
      choices: [
        "A) Nei, det finnes ingen hint om hva som skal skje",
        "B) Ja, uttrykk som «Det er snakk om sekunder» og tanken om å «knuse glasskuppelen» gir signal om at noe kommer til å briste",
        "C) Bare i slutten",
        "D) Bare i begynnelsen når hun ser ham",
      ],
      answer: 1,
      explain:
        "Fortellerens intense språk og metaforer peker fram mot det uunngåelige nederlaget: hun MÅ prøve – og dermed MÅ hun også falle.",
    },
    {
      id: 26,
      q: "Finnes det egentlig tilbakeblikk i novellen?",
      choices: [
        "A) Mange lange tilbakeblikk til barndom og tidligere forhold",
        "B) Bare korte tankeutkast om framtidige hverdager, ikke egentlige fortidsminner",
        "C) En full livshistorie",
        "D) Ingen refleksjoner i det hele tatt",
      ],
      answer: 1,
      explain:
        "Hun tenker framover på hverdagen «som bærer uniform», men teksten er nesten helt nåtids-fokusert – det forsterker intensiteten i øyeblikket.",
    },
    {
      id: 27,
      q: "Hva slags effekt har bruken av «du»-form på leseren?",
      choices: [
        "A) Den skaper distanse til hovedpersonen",
        "B) Den inviterer leseren inn i hovedpersonens rolle og gjør skammen og sårheten mer direkte",
        "C) Den gjør teksten mer saklig",
        "D) Den brukes bare for humor",
      ],
      answer: 1,
      explain:
        "«Du» gjør at vi lett kan kjenne på følelsen: det er som om teksten sier at dette kunne vært deg.",
    },
    {
      id: 28,
      q: "Hvordan er mannen som hovedpersonen er opptatt av, fremstilt?",
      choices: [
        "A) Veldig psykologisk utdypet med lang bakgrunn",
        "B) Mest gjennom kropp, bevegelser og stemme – han blir et objekt for hennes blikk",
        "C) Bare som en skriftlig karakter som aldri vises",
        "D) Som en tydelig ond skurk",
      ],
      answer: 1,
      explain:
        "Vi ser ham som hun ser ham: jakke, lepper, tunge, øyne, hender. Han blir en projeksjon for hennes begjær, ikke en fullt utviklet psykologisk karakter.",
    },
    {
      id: 29,
      q: "Hva symboliserer bildet «Fortapt som en halv sitronskive som har falt under bordet»?",
      choices: [
        "A) At hun liker sitron",
        "B) At hun føler seg brukt, kastet, ubetydelig – som søppel ingen ser",
        "C) At hun vil rydde etter festen",
        "D) At hun er sur",
      ],
      answer: 1,
      explain:
        "Sitronskiven er noe som har hatt en funksjon, men som nå ligger klemt under bordet. Bildet uttrykker sterkt selvforakt og usynlighet.",
    },
    {
      id: 30,
      q: "Hva kan håret som «fortsetter å vokse» i slutten av novellen symbolisere?",
      choices: [
        "A) Ingenting, det er bare en fysisk observasjon",
        "B) At livet går videre, og at det finnes en mulighet for vekst og håp selv om hun føler seg knust nå",
        "C) At hun burde klippe seg",
        "D) At hun er syk",
      ],
      answer: 1,
      explain:
        "Håret vokser selv om hun føler seg fortapt. Det er et kroppslig bilde på at hun fortsatt er levende – en liten rest av håp midt i mørket.",
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
        🧠 Gro Dahle – «En og to og tre» – novelleanalyse-quiz
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: 20 }}>
        Spørsmålene dekker: forfatter, tid, tema/motiv, komposisjon, forteller,
        virkemidler, personer og miljø.
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
                        ? "##996"
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
