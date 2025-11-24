"use client";
import React, { useState } from "react";

export default function IsflakQuizNO() {
  const questions = [
    // --- KORT INFORMASJON OM NOVELLEN / FORFATTER ---
    {
      id: 1,
      q: "Hvem har skrevet novellen «Isflak», og hvor er den hentet fra?",
      choices: [
        "A) Ari Behn – fra novellesamlingen «Talent for lykke» (2011)",
        "B) Jon Fosse – fra «Morgon og kveld»",
        "C) Gro Dahle – fra «Hvem som helst, hvor som helst»",
        "D) Kjell Askildsen – fra «Thomas F's siste nedtegnelser»",
      ],
      answer: 0,
      explain:
        "«Isflak» er skrevet av Ari Behn og står i novellesamlingen «Talent for lykke» (Kolon forlag, 2011).",
    },
    {
      id: 2,
      q: "Hva er typisk for Ari Behns måte å skrive på, som også merkes i «Isflak»?",
      choices: [
        "A) Tørr, juridisk sakprosa",
        "B) Poetisk og litt melodramatisk tone, sterke bilder og fokus på identitet og utenforskap",
        "C) Strengt historisk stil med fotnoter",
        "D) Ren humorprosa uten alvor",
      ],
      answer: 1,
      explain:
        "Behn skriver ofte med følelsesladet, poetisk språk og undersøker sårbarhet, maskulinitet, tap og outsider-posisjoner.",
    },
    {
      id: 3,
      q: "Hva kan tiden novellen ble skrevet i (tidlig 2000-tall) bety for hvordan vi leser den?",
      choices: [
        "A) Ingenting, den kunne like gjerne vært middelaldertekst",
        "B) Den speiler en moderne individualistisk tid der personlig suksess/mislykkethet står sterkt",
        "C) Den er egentlig en realistisk tekst om 1800-tallet",
        "D) Den handler om digital teknologi",
      ],
      answer: 1,
      explain:
        "Fortelleren måler seg mot «Ludvig som klarte seg» og sitter igjen arbeidsløs og skilt – typisk moderne fokus på selvrealisering og å være «vellykket».",
    },

    // --- TEMA, MOTIV, BUDSKAP ---
    {
      id: 4,
      q: "Hva er motivet (den ytre handlingen) i «Isflak»?",
      choices: [
        "A) En voksen mann som går seg vill i fjellet",
        "B) En forteller som ser tilbake på barndomsopplevelser med Ludvig og innser hva han ikke lærte",
        "C) En familie på bilferie",
        "D) En bybrann i Tennevoll",
      ],
      answer: 1,
      explain:
        "Fortelleren minnes episoder fra barndommen – ørn, rev, isflak – og tolker dem i lys av sitt eget mislykkede voksenliv.",
    },
    {
      id: 5,
      q: "Hvordan kan vi formulere hovedtemaet kort?",
      choices: [
        "A) Krig og nasjonalisme",
        "B) Mot, risiko og frykt for å gripe muligheter i livet",
        "C) Økonomisk politikk",
        "D) Kjæledyr og naturvern",
      ],
      answer: 1,
      explain:
        "Novellen dreier seg om å våge/ikke våge – om å hoppe, gripe sjansen, se muligheter versus å være redd og trekke seg unna.",
    },
    {
      id: 6,
      q: "Hvilket undertema gir spesielt dybde til teksten?",
      choices: [
        "A) Religion og frelse",
        "B) Maskulinitet, konkurranse og følelsen av å være den «tapende» mannen",
        "C) Skolepolitikk",
        "D) Klimaendringer",
      ],
      answer: 1,
      explain:
        "Fortelleren sammenlikner seg med Ludvig, som blir tøff helt fra barndommen og senere «driver det stort» i Argentina, mens han selv feiler.",
    },
    {
      id: 7,
      q: "Hvordan kommer temaet om muligheter vs. feighet tydeligst til uttrykk?",
      choices: [
        "A) I scenen med reven og juletrærne",
        "B) I scenen med ørnen",
        "C) I scenen på isflaket, og i slutten når han sier «Ikke faen om jeg hopper av neste gang»",
        "D) I naboens hønsehus",
      ],
      answer: 2,
      explain:
        "Isflaket og hans egen reaksjon (hoppe i vannet og berge seg, men ikke bli med ut) blir et livssymbol som han tolker senere: han hopper av muligheten.",
    },
    {
      id: 8,
      q: "Kan vi lese et budskap ut av novellen?",
      choices: [
        "A) At man aldri skal ta risiko",
        "B) At livet handler om å våge å bli med isflaket – å gripe sjanser, ellers sitter man fast i bitterhet",
        "C) At naturen er farlig og må kontrolleres",
        "D) At barn alltid vet best",
      ],
      answer: 1,
      explain:
        "Fortelleren angrer på at han ikke «ble med» – han ser nå at han alltid har gjort det motsatte av å se muligheter.",
    },

    // --- KOMPOSISJON ---
    {
      id: 9,
      q: "Hvordan er komposisjonen i «Isflak» bygd opp?",
      choices: [
        "A) Helt kronologisk fra barndom til voksenliv uten sprang",
        "B) En nåtidssituasjon der fortelleren ser tilbake på flere minner (ørnen, reven, isflaket) før vi vender tilbake til nåtid",
        "C) Dagboknotater over mange år",
        "D) Bare en eneste scene på isflaket",
      ],
      answer: 1,
      explain:
        "Novellen starter med barndomsminner og avslutter i nåtid: skilt, arbeidsløs, tenkende på isflak og muligheter.",
    },
    {
      id: 10,
      q: "Hvordan vil du beskrive åpningsavsnittet?",
      choices: [
        "A) In medias res – rett inn i en konkret situasjon uten informasjon",
        "B) En rolig, beskrivende åpning som etablerer Tennevoll som villmark og farlig natur",
        "C) En dialog åpningsscene",
        "D) En stillestående filosofisk monolog",
      ],
      answer: 1,
      explain:
        "«Det var et villmarksliv i Tennevoll» etablerer sted og stemning, med ørn, rev og dramatikk rundt dyr.",
    },
    {
      id: 11,
      q: "Finnes det et tydelig høydepunkt/vendepunkt i novellen?",
      choices: [
        "A) Når reven angriper juletrærne",
        "B) Når fortelleren hopper fra isflaket i panikk og dermed ikke blir med videre",
        "C) Når ørnen berget lammet",
        "D) Når naboen skyter reven",
      ],
      answer: 1,
      explain:
        "Scenen med isflaket er både fysisk og symbolsk klimaks – det er øyeblikket som senere farger hvordan han tolker hele livet sitt.",
    },
    {
      id: 12,
      q: "Hvordan er avslutningen på novellen?",
      choices: [
        "A) Lukket og lykkelig: fortelleren får jobb og ny partner",
        "B) Åpen og selvironisk: han lover seg selv at han «ikke hopper av neste gang» – men vi vet ikke om det faktisk skjer",
        "C) Tragisk med dødsfall",
        "D) Komisk og lett",
      ],
      answer: 1,
      explain:
        "Slutten er åpen og litt bitter-håpefull. Han sier at han ikke vil hoppe av neste gang – men det er bare en tanke, ingen handling ennå.",
    },
    {
      id: 13,
      q: "Hva gjør komposisjonen (minner + nåtid) med virkningen av teksten?",
      choices: [
        "A) Den gjør teksten forvirrende",
        "B) Den viser hvordan barndomsopplevelser brukes til å forstå og forklare et mislykket voksenliv",
        "C) Den gjør novellen til ren action",
        "D) Den har ingen virkning",
      ],
      answer: 1,
      explain:
        "Fortelleren tolker seg selv gjennom fortid: isflaket blir en metafor han bruker for å forklare hvorfor livet hans er som det er.",
    },

    // --- FORTELLEMÅTE OG VIRKEMIDLER ---
    {
      id: 14,
      q: "Hvilken fortellerstemmen brukes i «Isflak»?",
      choices: [
        "A) Førsteperson «jeg» som deltar i historien",
        "B) Andreperson «du»",
        "C) Tredjeperson allvitende",
        "D) Tredjeperson refererende",
      ],
      answer: 0,
      explain:
        "Vi har en jeg-forteller som selv var barn i historien, og som nå som voksen ser tilbake.",
    },
    {
      id: 15,
      q: "Hva preger fortellemåten mest?",
      choices: [
        "A) Lange, tørre faktaavsnitt",
        "B) Handlingsreferat uten følelser",
        "C) En blanding av konkrete, dramatiske episoder og refleksjon over hva de betyr",
        "D) Bare dialog",
      ],
      answer: 2,
      explain:
        "Teksten forteller små dramatiske episoder (ørn, rev, isflak) og legger på en tolkende voksenstemme som gir dem mening.",
    },
    {
      id: 16,
      q: "Hvilket språklig bilde er mest sentralt i novellen?",
      choices: [
        "A) Rev og hønsehus",
        "B) Ørn og lam",
        "C) Isflaket som metafor for livsmuligheter som bærer deg ut til «fremmede kyster»",
        "D) Hønsehuset som metafor for trygghet",
      ],
      answer: 2,
      explain:
        "Isflaket er det store bildet: det kan drive langt av gårde til nye steder, akkurat som livsmuligheter.",
    },
    {
      id: 17,
      q: "Hva slags virkning har beskrivelsen av Tennevoll som «villmarksliv» med ørn, rev og farer?",
      choices: [
        "A) Den gjør teksten komisk",
        "B) Den skaper en dramatisk, eventyraktig ramme rundt barndommen – naturen blir en prøvearena for mot",
        "C) Den fungerer bare som turistreklame",
        "D) Den viser at naturen er helt ufarlig",
      ],
      answer: 1,
      explain:
        "Villmarken er farlig og uforutsigbar. Det gir en fysisk ramme rundt temaet mot/risiko.",
    },
    {
      id: 18,
      q: "Hva slags effekt har den korte, litt tørre kommentaren: «Nå er jeg skilt og arbeidsløs»?",
      choices: [
        "A) Ingen – den er bare informasjon",
        "B) Den gir et brått, nøkternt innslag av voksenlivets nederlag som kontrast til barndommens dramatikk",
        "C) Den er morsom",
        "D) Den handler bare om økonomi",
      ],
      answer: 1,
      explain:
        "Setningen er enkel og brutal, og gjør tydelig at fortelleren ikke har «klart seg» slik Ludvig visstnok har.",
    },

    // --- PERSONER OG MILJØ ---
    {
      id: 19,
      q: "Hvordan er jeg-fortelleren indirekte beskrevet gjennom novellen?",
      choices: [
        "A) Som helt fryktløs og impulsiv",
        "B) Som forsiktig, redd, selvkritisk og litt bitter i voksen alder",
        "C) Som helt likegyldig til alt",
        "D) Som aggressiv og voldelig",
      ],
      answer: 1,
      explain:
        "Han hopper i vannet i panikk, blir igjen på land, og som voksen fokuserer han på det han ikke har fått til.",
    },
    {
      id: 20,
      q: "Hvordan framstår Ludvig i fortellerens øyne?",
      choices: [
        "A) Som svak og redd",
        "B) Som en slags barndomshelt – modig, handlekraftig og senere «vellykket» i Argentina",
        "C) Som helt ubetydelig",
        "D) Kun som et offer",
      ],
      answer: 1,
      explain:
        "Ludvig slår etter ørn, redder Mari fra reven, lar isflaket drive videre og blir til slutt fiskeoppdretter i Argentina – han blir et ideal og et speil for fortellerens egen feighet.",
    },
    {
      id: 21,
      q: "Hva kjennetegner forholdet mellom jeg-fortelleren og Ludvig i teksten?",
      choices: [
        "A) De er like sterke og lykkes begge",
        "B) Det er et forhold preget av beundring, konkurranse og senere mindreverdighetsfølelse",
        "C) De er fiender fra starten",
        "D) De har ingen kontakt",
      ],
      answer: 1,
      explain:
        "Fortelleren ser opp til Ludvig, men føler seg samtidig underlegen. Det følger ham helt inn i voksenlivet.",
    },
    {
      id: 22,
      q: "Hvordan har miljøet (Tennevoll, villmark, fjord og isflak) sammenheng med hovedtemaet?",
      choices: [
        "A) Det har ingen sammenheng, er bare pynt",
        "B) Naturen fungerer som en konkret arena for risiko og prøvelser – et bilde på livets farer og muligheter",
        "C) Det er bare bakgrunn for dyreliv",
        "D) Det er primært en kritikk av rovdyrpolitikk",
      ],
      answer: 1,
      explain:
        "Miljøet er aktivt: det setter guttene i situasjoner der de må handle, og speiler livets «isflak» og farer.",
    },
    {
      id: 23,
      q: "Hva slags atmosfære/stemning preger novellen?",
      choices: [
        "A) Bare sorg og mørke",
        "B) Bare komedie",
        "C) Blanding av eventyraktig spenning i barndommen og vemodig, ironisk ettertanke i voksenlivet",
        "D) Fullstendig nøytral stemning",
      ],
      answer: 2,
      explain:
        "Barndomsepisodene er nesten som action-scener, mens voksenstemmen er mer sår og selvkritisk.",
    },

    // --- EKSTRA / DYBDESPØRSMÅL FOR Å NÅ 30 ---
    {
      id: 24,
      q: "Hva forteller episoden med reven og juletrærne om Ludvig?",
      choices: [
        "A) At han er svak og passiv",
        "B) At han er rask til å finne løsninger under press (kaste treet, lure reven inn i hønsegården indirekte)",
        "C) At han ikke bryr seg om Mari",
        "D) At han er redd for dyr",
      ],
      answer: 1,
      explain:
        "Ludvig handler taktisk: han bruker trærne til å forsinke reven og gir dem tid til å komme seg i sikkerhet.",
    },
    {
      id: 25,
      q: "Hva gjør det med leserens oppfatning når vi får vite at reven hadde rabiessmitte og «måtte ha vandret helt fra Finland»?",
      choices: [
        "A) Ingenting",
        "B) Det gjør situasjonen mer dramatisk og nesten mytisk – faren kommer langveisfra",
        "C) Det er bare geografitime",
        "D) Det er humor",
      ],
      answer: 1,
      explain:
        "Detaljen forsterker dramatikken og bidrar til eventyrfølelsen: farlige ting kan komme langveisfra inn i den lille bygda.",
    },
    {
      id: 26,
      q: "Hva slags funksjon har opplysningen om at Ludvig ble sendt til spesialskole og senere ble stor fiskeoppdretter i Argentina?",
      choices: [
        "A) Ingen funksjon",
        "B) Den viser at bare «normale» folk lykkes",
        "C) Den viser at han, som ble problematisk barn, likevel klarte seg, og forsterker kontrasten til jeg-fortelleren",
        "D) Den er bare komisk",
      ],
      answer: 2,
      explain:
        "Fortelleren peker på at Ludvig, til tross for «problemer», nå er vellykket – mens han selv ikke er det.",
    },
    {
      id: 27,
      q: "Hvordan påvirker førstesetningen i siste avsnitt: «Nå er jeg skilt og arbeidsløs.» leserens tolkning av teksten?",
      choices: [
        "A) Den gjør teksten optimistisk",
        "B) Den setter et alvorlig og brutalt lys på hele fortellingen – barndomsscenene blir en slags forklaring på nederlaget",
        "C) Den viser at han er fornøyd",
        "D) Den betyr ingenting",
      ],
      answer: 1,
      explain:
        "Denne setningen snur tonen og gjør det klart at novellen også handler om livsfiasko og selvbilde, ikke bare om barndomseventyr.",
    },
    {
      id: 28,
      q: "Hva betyr det at han sier: «Istedenfor å se muligheter, gjør jeg det motsatte»?",
      choices: [
        "A) At han alltid gjør det riktige",
        "B) At han selv innser sin egen pessimistiske og feige holdning til livet",
        "C) At han er veldig optimistisk",
        "D) At han er glad for å være hjemme",
      ],
      answer: 1,
      explain:
        "Han innrømmer at han aktivt fokuserer på hindringer, ikke sjanser – det er en selvkritisk erkjennelse.",
    },
    {
      id: 29,
      q: "Hva slags effekt har den siste setningen: «Ikke faen om jeg hopper av neste gang»?",
      choices: [
        "A) Den er ren komikk",
        "B) Den gir en blanding av trassig håp og selvironi – han sier det, men vi vet ikke om han faktisk vil handle annerledes",
        "C) Den viser at han er ferdig med å tenke",
        "D) Den ender historien helt pessimistisk",
      ],
      answer: 1,
      explain:
        "Setningen er grov og energisk, og kan leses både som et ekte løfte og som noe han sier for å trøste seg selv.",
    },
    {
      id: 30,
      q: "Hva er den viktigste symbolfunksjonen til isflaket i novellen?",
      choices: [
        "A) Bare et farlig sted å leke",
        "B) Et bilde på livets muligheter som kan føre deg langt, hvis du våger å bli med",
        "C) Et bilde på hjem og trygghet",
        "D) Et symbol for barndomstraumer som bør glemmes",
      ],
      answer: 1,
      explain:
        "Isflaket blir tolket som et «skip» som kunne ført ham til «fremmede kyster» med «godt arbeid og vidunderlige kvinnfolk». Det er den store muligheten han ikke tok.",
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
        🧠 Ari Behn – «Isflak» – novelleanalyse-quiz
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: 20 }}>
        30 spørsmål om forfatter, tema, motiv, komposisjon, forteller, virkemidler,
        personer og miljø.
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
                        ? "#996"
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
