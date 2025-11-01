"use client";
import React, { useState } from "react";

/**
 * Quiz: «Isflak» av ukjent forfatter
 * Basert på spørsmål om personbeskrivelse, konflikt, miljø og tema
 * Språk: Norsk (B2–C1)
 */

/* 1) SPØRSMÅL (uten fasit i objektene) */
const QUESTIONS = [
  {
    id: 1,
    q: "Hvordan er hovedpersonene (jeg-fortelleren og Ludvig) beskrevet?",
    choices: [
      "A) Direkte med adjektiver som modig, smart og ærlig",
      "B) Indirekte, gjennom handlinger og kontraster mellom dem",
      "C) Bare gjennom dialoger og beskrivelser av dyr",
      "D) Gjennom en tredjepersons allvitende forteller",
    ],
    explain:
      "Fortelleren viser oss hvem Ludvig og jeg er gjennom handlinger – ikke ved å si det rett ut. Ludvig er impulsiv og risikovillig, fortelleren mer forsiktig.",
  },
  {
    id: 2,
    q: "Forandrer hovedpersonene seg i løpet av fortellingen?",
    choices: [
      "A) Nei, de forblir helt like fra start til slutt",
      "B) Ja, fortelleren utvikler frykt og selvinnsikt mens Ludvig forsvinner ut av livet hans",
      "C) Ludvig blir modigere og sterkere, mens jeg-fortelleren dør",
      "D) Begge blir like eventyrlystne mot slutten",
    ],
    explain:
      "Fortelleren forandres – han mister motet, mens Ludvig går videre og lykkes. Kontrasten viser psykisk bevegelse.",
  },
  {
    id: 3,
    q: "Er forholdet mellom personene konfliktfylt?",
    choices: [
      "A) Ja, men mest som en stille maktkamp mellom mot og frykt",
      "B) Nei, de er bestevenner uten spenning",
      "C) Ja, voldelig og aggressivt",
      "D) Nei, men de kommuniserer ikke fordi de bor langt unna hverandre",
    ],
    explain:
      "Det er ingen åpen konflikt, men en indre spenning: Ludvig drar ham ut i farlige situasjoner; fortelleren vil ikke, men følger likevel etter.",
  },
  {
    id: 4,
    q: "Har hovedpersonene indre konflikter?",
    choices: [
      "A) Nei, de er helt trygge i seg selv",
      "B) Ja, fortelleren sliter med frykt og passivitet – han angrer senere",
      "C) Bare Ludvig har indre konflikter",
      "D) Bare foreldrene er usikre",
    ],
    explain:
      "Fortelleren har en klar indre konflikt: han tør ikke ta risiko, angrer på tapt mot og ser senere at Ludvig hadde forstått mer.",
  },
  {
    id: 5,
    q: "Hvilke egenskaper har Ludvig i fortellingen?",
    choices: [
      "A) Han er redd og forsiktig",
      "B) Han er vill, uredd og full av initiativ",
      "C) Han er sjenert og tilbakeholden",
      "D) Han er likegyldig og passiv",
    ],
    explain:
      "Ludvig er modig, handler raskt og søker utfordringer – både mot ørn, rev og på isflaket. Han representerer livsvilje.",
  },
  {
    id: 6,
    q: "Hvordan har miljøet (Tennevoll, naturen, vinteren) sammenheng med temaet?",
    choices: [
      "A) Det er tilfeldig valgt, uten betydning",
      "B) Det speiler kamp mellom menneske og natur, og mellom frykt og livsvilje",
      "C) Det viser bare et vakkert vinterlandskap",
      "D) Det understreker at alt foregår i byen",
    ],
    explain:
      "Det ville landskapet symboliserer det uforutsigbare i livet – isflaket, reven og ørna viser naturens og skjebnens krefter.",
  },
  {
    id: 7,
    q: "Hva slags atmosfære/stemning preger miljøet i novellen?",
    choices: [
      "A) Lett og humoristisk",
      "B) Farefull og kald, men også livsbejaende",
      "C) Romantisk og drømmende",
      "D) Ensformig og kjedelig",
    ],
    explain:
      "Stemningen er både dramatisk og symbolsk – kulde, is og natur speiler livets farer og valg mellom stagnasjon og mot.",
  },
  {
    id: 8,
    q: "Hva handler novellen dypest sett om?",
    choices: [
      "A) Barndomsminner fra Nord-Norge",
      "B) Frykten for å miste kontroll og motet til å gripe muligheter",
      "C) En konkret ulykke på isen",
      "D) Forholdet mellom dyr og mennesker",
    ],
    explain:
      "Fortellingen bruker barndomsepisoder som symboler på livets valg – isflaket blir et bilde på risiko og frihet.",
  },
  {
    id: 9,
    q: "Hva forteller slutten («ikke faen om jeg hopper av neste gang»)?",
    choices: [
      "A) Han har lært å være forsiktig",
      "B) Han angrer på sin frykt og lover å ta sjansen neste gang",
      "C) Han håper å møte Ludvig igjen",
      "D) Han gir opp livet helt",
    ],
    explain:
      "Avslutningen viser selverkjennelse og vilje til endring – en slags forsoning med sitt yngre jeg og Ludvig.",
  },
  {
    id: 10,
    q: "Hvilken fortellerposisjon brukes i novellen?",
    choices: [
      "A) Jeg-forteller i tilbakeblikk",
      "B) Allvitende tredjeperson",
      "C) Andreperson presens",
      "D) Objektiv reporter",
    ],
    explain:
      "Historien fortelles av et jeg i tilbakeblikk – vi ser fortidens hendelser gjennom hans voksne refleksjon.",
  },
];

/* 2) FASIT (0-basert indeks for riktig svar) */
const ANSWER_KEY = Object.freeze({
  1: 1,  // B
  2: 1,  // B
  3: 0,  // A
  4: 1,  // B
  5: 1,  // B
  6: 1,  // B
  7: 1,  // B
  8: 1,  // B
  9: 1,  // B
 10: 0,  // A
});

export default function IsflakQuiz() {
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (qi, ci) => {
    if (showResult) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = ci;
      return next;
    });
  };

  const isCorrect = (qi) => {
    const q = QUESTIONS[qi];
    const user = answers[qi];
    const correct = ANSWER_KEY[q.id];
    return user === correct;
  };

  const score = answers.reduce((acc, _, qi) => acc + (isCorrect(qi) ? 1 : 0), 0);
  const allAnswered = answers.every((v) => v !== null);

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 24,
        fontFamily: "Inter, system-ui, Arial",
        color: "#111",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "clamp(22px,3.2vw,30px)" }}>
        Quiz – «Isflak»
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: 20 }}>
        Personskildring • Konflikt • Miljø • Stemning • Tema
      </p>

      <div style={{ background: "#fafafa", borderRadius: 12, padding: 16 }}>
        {QUESTIONS.map((item, qi) => {
          const selected = answers[qi];
          const correctIndex = ANSWER_KEY[item.id];

          return (
            <div
              key={item.id}
              style={{
                borderBottom: qi !== QUESTIONS.length - 1 ? "1px solid #eee" : "none",
                paddingBottom: 16,
                marginBottom: 16,
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 8 }}>
                {qi + 1}. {item.q}
              </div>

              <div style={{ display: "grid", gap: 8 }}>
                {item.choices.map((c, ci) => {
                  const chosen = selected === ci;
                  const makeGreen = showResult && ci === correctIndex;
                  const makeRed = showResult && chosen && ci !== correctIndex;

                  return (
                    <button
                      key={ci}
                      onClick={() => handleSelect(qi, ci)}
                      style={{
                        textAlign: "left",
                        padding: "10px 12px",
                        borderRadius: 8,
                        border: "1px solid #ddd",
                        background: makeGreen
                          ? "#e8f7ed"
                          : makeRed
                          ? "#fde8e8"
                          : chosen
                          ? "#f2f2f2"
                          : "#fff",
                        cursor: showResult ? "default" : "pointer",
                      }}
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
          );
        })}

        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          {!showResult ? (
            <button
              disabled={!allAnswered}
              onClick={() => setShowResult(true)}
              style={{
                opacity: allAnswered ? 1 : 0.6,
                padding: "10px 14px",
                borderRadius: 8,
                border: "1px solid #333",
                background: "#111",
                color: "white",
                cursor: allAnswered ? "pointer" : "not-allowed",
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
                Poengsum: {score} / {QUESTIONS.length}
              </div>
              <button
                onClick={() => {
                  setAnswers(Array(QUESTIONS.length).fill(null));
                  setShowResult(false);
                }}
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
