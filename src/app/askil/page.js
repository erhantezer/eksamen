"use client";
import React, { useState } from "react";

export default function EnOgToOgTreQuizNO() {
  const questions = [
    {
      id: 1,
      q: "Hvordan er hovedpersonene beskrevet i novellen?",
      choices: [
        "A) Direkte med tydelige adjektiver",
        "B) Indirekte – gjennom handlinger, blikk og kroppsspråk",
        "C) Kun gjennom dialog mellom personene",
        "D) Gjennom fortellerens kommentarer om dem",
      ],
      answer: 1,
      explain:
        "Gro Dahle bruker indirekte karakterisering: vi ser hovedpersonen gjennom observasjoner, handlinger og følelser – ikke ved at forfatteren sier rett ut hvordan hun er.",
    },
    {
      id: 2,
      q: "Forandrer hovedpersonene seg underveis i fortellingen?",
      choices: [
        "A) Ja, hovedpersonen blir trygg og fornøyd til slutt",
        "B) Kvinnen i rød kjole angrer og beklager seg",
        "C) Mannen forlater selskapet og alt endrer seg",
        "D) Nei, hun endrer seg lite – men følelsene blir sterkere",
      ],
      answer: 3,
      explain:
        "Hovedpersonen går fra håp til skam, men det er ingen ytre forandring – bare en indre utvikling mot nederlag og erkjennelse.",
    },
    {
      id: 3,
      q: "Hvordan kan forholdet mellom personene beskrives?",
      choices: [
        "A) Harmonisk og varmt",
        "B) Tilfeldig og nøytralt",
        "C) Konfliktfylt – preget av makt og konkurranse",
        "D) Fullstendig vennskapelig",
      ],
      answer: 2,
      explain:
        "Forholdet mellom 'du' og kvinnen i rød kjole er konfliktfylt. De konkurrerer om mannens oppmerksomhet, selv om det aldri sies direkte.",
    },
    {
      id: 4,
      q: "Hvilken indre konflikt har hovedpersonen?",
      choices: [
        "A) Mellom lojalitet og svik",
        "B) Mellom kjærlighet og hat",
        "C) Mellom ønsket om å bli sett og frykten for å bli avvist",
        "D) Mellom familie og arbeid",
      ],
      answer: 2,
      explain:
        "Den viktigste indre konflikten er ønsket om å bli sett og elsket, men samtidig frykten for å bli ignorert og latterliggjort.",
    },
    {
      id: 5,
      q: "Hvilke egenskaper har hovedpersonen (‘du’)?",
      choices: [
        "A) Kald, overlegen og trygg",
        "B) Observerende, sjalu og usikker",
        "C) Sterk, direkte og modig",
        "D) Romantisk og avslappet",
      ],
      answer: 1,
      explain:
        "Hun er observant og analytisk, men også sjalu, usikker og desperat etter bekreftelse.",
    },
    {
      id: 6,
      q: "Hvordan henger miljøet sammen med handlingen og temaet?",
      choices: [
        "A) Det er et symbolsk rom for sosiale spill og maktbalanse",
        "B) Det har ingen betydning – bare bakgrunn",
        "C) Det foregår i naturen og viser motsetning menneske–dyr",
        "D) Det understreker bare vær og årstid",
      ],
      answer: 0,
      explain:
        "Selskapet fungerer som et sosialt rom der makt, status og synlighet blir testet. Miljøet speiler temaet: behovet for å bli sett.",
    },
    {
      id: 7,
      q: "Hva sier miljøet om hvordan personene er?",
      choices: [
        "A) Alle er like synlige og sterke",
        "B) Miljøet skaper et sosialt hierarki der noen dominerer andre",
        "C) Det gjør personene mer åpne og ærlige",
        "D) Det gjør ingen forskjell",
      ],
      answer: 1,
      explain:
        "Miljøet – et selskap med regler og forventninger – gjør at den røde kjolen får makt, mens 'du' blir usynlig. Sosiale koder bestemmer alt.",
    },
    {
      id: 8,
      q: "Hvilken stemning preger miljøet i novellen?",
      choices: [
        "A) Rolig og kjølig",
        "B) Full av kjærlighet og trygghet",
        "C) Skummel og dramatisk",
        "D) Klaustrofobisk og intens, men tilsynelatende hyggelig",
      ],
      answer: 3,
      explain:
        "Stemningen er tett og ubehagelig – varmt og sosialt på overflaten, men under ligger angst, sjalusi og skam.",
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
      <h1 style={{ textAlign: "center", fontSize: "clamp(22px,3.2vw,30px)", marginBottom: 8 }}>
        🧠 «En og to og tre» – Quiz
      </h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: 20 }}>
        Spørsmål om personer, miljø og tema i Gro Dahles novelle
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
              borderBottom: qi !== questions.length - 1 ? "1px solid #eee" : "none",
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
