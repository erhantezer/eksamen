"use client";
import React, { useState } from "react";

/**
 * Quiz basert på utdraget fra Gro Dahle – «En og to og tre»
 * – Flervalg (A–D), norsk språk
 * – Riktige svar lagres separat i ANSWER_KEY (0-basert indeks)
 * – Viser fasit og poengsum etter innsending
 */

/* 1) S P Ø R S M Å L  (uten fasit i objektene) */
const QUESTIONS = [
  {
    id: 1,
    q: "Hvordan er hovedpersonen («du») primært karakterisert i utdraget?",
    choices: [
      "A) Direkte, med tydelige adjektiv",
      "B) Indirekte – gjennom blikk, kroppsspråk og indre tanker",
      "C) Kun via dialog fra andre",
      "D) Gjennom en allvitende forteller som beskriver alt",
    ],
    explain:
      "Teksten viser «du» gjennom observerende blikk, kroppsspråk, skam/ønsker og indre strategier – en indirekte karakterisering.",
  },
  {
    id: 2,
    q: "Hvilken forteller- og tidsbruk dominerer i utdraget?",
    choices: [
      "A) Førsteperson preteritum",
      "B) Tredjeperson preteritum",
      "C) Andreperson presens",
      "D) Førsteperson presens",
    ],
    explain:
      "Teksten bruker konsevent «du» (andreperson) og nåtid (presens), som skaper nærhet og intensitet.",
  },
  {
    id: 3,
    q: "Hva slags relasjonell dynamikk preger «du», mannen og kvinnen i rød kjole?",
    choices: [
      "A) Harmonisk og likestilt samtale",
      "B) Tilfeldig og irrelevant småprat",
      "C) Maktspill og konkurranse om oppmerksomhet",
      "D) Klart definert kjærlighetsforhold",
    ],
    explain:
      "Utdraget viser et stille maktspill: «du» prøver å bli sett, mens den røde kjolen og mannen etablerer en egen boble.",
  },
  {
    id: 4,
    q: "Hva er hovedpersonens mest sentrale indre konflikt?",
    choices: [
      "A) Moral vs. lovbrudd",
      "B) Ønske om å bli sett vs. frykt for avvisning/ydmykelse",
      "C) Plikt vs. lyst til å reise",
      "D) Tradisjon vs. modernitet",
    ],
    explain:
      "Hun vil tre inn og bli sett, men frykter å bli oversett og latterliggjort – konflikten driver hele scenen.",
  },
  {
    id: 5,
    q: "Hvilket språklig grep brukes ofte for å skape rytme og trykk i teksten?",
    choices: [
      "A) Rim og fast takt",
      "B) Langstrakte perioder uten tegnsetting",
      "C) Repetisjon av uttrykk og strukturer",
      "D) Bare nominalstil uten verb",
    ],
    explain:
      "Gro Dahle bruker gjentakelser («Unnskyld – Det gjør ingenting», opplistinger, detaljrytme) som stilistisk motor.",
  },
  {
    id: 6,
    q: "Hva symboliserer «den røde kjolen» mest sannsynlig i denne konteksten?",
    choices: [
      "A) Sosial usynlighet",
      "B) Fare og vold",
      "C) Begjær, synlighet og konkurransefortrinn",
      "D) Barndommens uskyld",
    ],
    explain:
      "Rødt peker mot begjær og synlighet; hun får oppmerksomhet og makt i rommet.",
  },
  {
    id: 7,
    q: "Hva uttrykker metaforen «En glasskuppel. Du må knuse den.»?",
    choices: [
      "A) Et fysisk hinder som må fjernes",
      "B) Et sosialt og intimt rom mellom de to som «du» vil bryte",
      "C) Et årstidsbilde om sommerhete",
      "D) Et minne fra barndommen",
    ],
    explain:
      "«Glasskuppelen» er den intime samtaleboblen mellom de to; «du» vil inn i den.",
  },
  {
    id: 8,
    q: "Hvilken atmosfære preger miljøet i scenen totalt sett?",
    choices: [
      "A) Kjølig og nøytral",
      "B) Klaustrofobisk og intens under en tilsynelatende hyggelig overflate",
      "C) Åpent og lett, uten friksjon",
      "D) Dramatisk voldelig",
    ],
    explain:
      "Overflaten er sommerlig og jovial, men under ligger skam, sjalusi og sosial angst – tett og klaustrofobisk.",
  },
  {
    id: 9,
    q: "Hva slags funksjon har den gjentatte replikken «Unnskyld – Det gjør ingenting»?",
    choices: [
      "A) Den er en ren komisk effekt",
      "B) Den markerer tidshopp",
      "C) Den etablerer rytme og viser avstand/avvisning i høflig form",
      "D) Den introduserer et nytt tema",
    ],
    explain:
      "Repetisjonen skaper puls og viser hvordan «du» høflig skyves ut av fellesskapet hver gang.",
  },
  {
    id: 10,
    q: "Hvordan kan sluttbildene med hagen og grinden leses tematisk?",
    choices: [
      "A) Som en enkel naturbeskrivelse uten funksjon",
      "B) Som en lovnad om snarlig forsoning",
      "C) Som poetiske symboler på grensesnittet mellom håp og resignasjon",
      "D) Som en direkte kritikk av bymiljø",
    ],
    explain:
      "Hage/mørke/«grinden» antyder overgang og avstand; håret som vokser gir et lite, kroppslig håp midt i nederlaget.",
  },
];

/* 2) F A S I T  –  riktig alternativ for hver spørsmål-id (0=A, 1=B, 2=C, 3=D) */
const ANSWER_KEY = Object.freeze({
  1: 1,  // B: Indirekte karakterisering
  2: 2,  // C: Andreperson presens
  3: 2,  // C: Maktspill/konkurranse
  4: 1,  // B: Bli sett vs. frykt for avvisning
  5: 2,  // C: Repetisjon
  6: 2,  // C: Rødt = begjær/synlighet/makt
  7: 1,  // B: Intim-boble som «du» vil bryte
  8: 1,  // B: Klaustrofobisk under hyggelig overflate
  9: 2,  // C: Rytme + høflig avvisning/avstand
 10: 2,  // C: Symboler på grense, håp/resignasjon
});

/* (valgfritt) valider at fasit peker på gyldige indeksverdier */
function validateAnswerKey(questions, key) {
  for (const q of questions) {
    const idx = key[q.id];
    if (typeof idx !== "number" || idx < 0 || idx >= q.choices.length) {
      console.warn(`ANSWER_KEY-feil: ugyldig indeks for id=${q.id} → ${idx}`);
    }
  }
}

export default function EnOgToOgTreQuiz_FromExcerpt() {
  validateAnswerKey(QUESTIONS, ANSWER_KEY);

  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (qi, ci) => {
    if (showResult) return; // lås etter innsending
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

  const reset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
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
      <h1 style={{ textAlign: "center", fontSize: "clamp(22px,3.2vw,30px)", marginBottom: 8 }}>
        «En og to og tre» – Quiz (fra utdrag)
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: 20 }}>
        Personskildring • Fortellersyn • Miljø • Symboler • Tema
      </p>

      <div
        style={{
          background: "#fafafa",
          border: "1px solid #eee",
          borderRadius: 12,
          padding: 16,
        }}
      >
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
                        transition: "background .15s ease",
                      }}
                      aria-pressed={chosen}
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
              onClick={() => {
                if (!allAnswered) {
                  alert("Svar på alle spørsmål før du ser resultatet!");
                  return;
                }
                setShowResult(true);
              }}
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
                Poengsum: {score} / {QUESTIONS.length}
              </div>
              <button
                onClick={reset}
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
