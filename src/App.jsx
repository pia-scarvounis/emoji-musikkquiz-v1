import { useState, useRef } from "react";
import "./App.css";
import musicImage from "./assets/music.png";
import confetti from "canvas-confetti";

const quizOne = [
  { id: 1, emojis: "👧🏼🟥" },
  { id: 2, emojis: "♿️🪨🪨" },
  { id: 3, emojis: "🌶️👯‍♀️" },
  { id: 4, emojis: "🪲🪲" },
  { id: 5, emojis: "🫏🙍🏾‍♂️" },
  { id: 6, emojis: "🔫🔫🌹🌹" },
  { id: 7, emojis: "🐝🔛©️" },
  { id: 8, emojis: "📬🎨☝🏼" },
  { id: 9, emojis: "🧂🫑" },
  { id: 10, emojis: "👮🏽‍♂️👮🏽‍♂️" },
  { id: 11, emojis: "🚬🍄" },
  { id: 12, emojis: "👸" },
  { id: 13, emojis: "🫵✌️" },
  { id: 14, emojis: "🚧👉" },
  { id: 15, emojis: "🧑‍🍼👶🏼" },
  { id: 16, emojis: "⚫️👁️🫛" },
  { id: 17, emojis: "🔗🅿️" },
  { id: 18, emojis: "🐱🪆🪆" },
  { id: 19, emojis: "🥶▶️" },
  { id: 20, emojis: "🤴🤴🦁" },
  { id: 21, emojis: "👉🏼👌🏼🔫🔫" },
  { id: 22, emojis: "🍯👧🏼👦🏽" },
  { id: 23, emojis: "😴💭🏠" },
  { id: 24, emojis: "☯️👯‍♂️" },
  { id: 25, emojis: "🙍🏾‍♂️🙍🏾‍♂️➡️🧔🧔" },
  { id: 26, emojis: "✉️🏤" },
  { id: 27, emojis: "🦂🦂" },
  { id: 28, emojis: "🤓" },
  { id: 29, emojis: "❄️🐒🐒" },
  { id: 30, emojis: "🇳🇴🚔📞" },
  { id: 31, emojis: "🪀" },
  { id: 32, emojis: "🐝🪡" },
  { id: 33, emojis: "👩🏼‍⚕️🇦🇱" },
  { id: 34, emojis: "🚬🏇" },
  { id: 35, emojis: "🐫" },
  { id: 36, emojis: "👀🗣️🫓🚽" },
     { id: 37, emojis: "🍆👄🐝" },
     { id: 38, emojis: "🌋🐜ℹ️" },
{ id: 39, emojis: "🧃🧊☀️🐝🧎‍♀️‍➡️" },
{ id: 40, emojis: "🍆😇🅾️" },
];

const quizTwo = [
  { id: 1, emojis: "😘" },
  { id: 2, emojis: "🤴" },
  { id: 3, emojis: "🧊" },
  { id: 4, emojis: "🏇🦆" },
  { id: 5, emojis: "🦭" },
  { id: 6, emojis: "Ⓜ️🤕🍷🏳️‍🌈" },
  { id: 7, emojis: "⚪️🕘🏠🕑1️⃣" },
  { id: 8, emojis: "🔙🛣️👦🏼👦🏼" },
  { id: 9, emojis: "🟤🅾️🪐👉🔴" },
  { id: 10, emojis: "➕🔌🤭" },
  { id: 11, emojis: "🔴🥵🌶️" },
  { id: 12, emojis: "🔊🪁" },
  { id: 13, emojis: "🕒🚪🚪⤵️" },
  { id: 14, emojis: "©️©️🤠🤠" },
  { id: 15, emojis: "🚰🇪🇸🇮🇹" },
  { id: 16, emojis: "🍫🍩🍡👶🏼👶🏼" },
  { id: 17, emojis: "🌇🚮" },
  { id: 18, emojis: "6️⃣⚫️" },
  { id: 19, emojis: "😢🕓😱" },
  { id: 20, emojis: "🌎🌬️🔥" },
  { id: 21, emojis: "🖐️🖐️❌" },
  { id: 22, emojis: "⚛️🐱" },
  { id: 23, emojis: "🦷🫜🪾" },
  { id: 24, emojis: "🫃🍨" },
  { id: 25, emojis: "✌️✌️" },
  { id: 26, emojis: "🚣‍♂️🗑️🤰🏽" },
  { id: 27, emojis: "🫖🩹❤️‍🩹" },
  { id: 28, emojis: "⛴️⛴️🪵🧑‍💻" },
  { id: 29, emojis: "🟥🦴" },
  { id: 30, emojis: "🥩🍞" },
  { id: 31, emojis: "🧻👦🏽👦🏼" },
  { id: 32, emojis: "🔫👀✌️🍷🏠" },
  { id: 33, emojis: "👨🏻‍💼👩🏼‍⚕️👷👮🏽‍♂️🔑" },
  { id: 34, emojis: "🫖🔌👀" },
  { id: 35, emojis: "🦁🔌🤑" },
  { id: 36, emojis: "🚽🙂‍↕️🐈" },
   { id: 37, emojis: "🪜🔥🧯" },
   { id: 38, emojis: "Ⓜ️👉Ⓜ️" },
{ id: 39, emojis: "🦁🌉🌉" },
{ id: 40, emojis: "🔵" },
];

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedQuiz, setSelectedQuiz] = useState("quizOne");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [statuses, setStatuses] = useState({});

  const questions = selectedQuiz === "quizOne" ? quizOne : quizTwo;
  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const touchStartX = useRef(null);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextQuestion();
      else previousQuestion();
    }
    touchStartX.current = null;
  }

  function startQuiz(quizName) {
    setSelectedQuiz(quizName);
    setCurrentQuestion(0);
    setStatuses({});
    setScreen("quiz");
  }

  function setStatus(status) {
    setStatuses({
      ...statuses,
      [currentQuestion]: status,
    });
  }
  function celebrate() {
  confetti({
    particleCount: 90,
    spread: 70,
    origin: { y: 0.65 },
  });
}

function nextQuestion() {
  if (isLastQuestion) {
    celebrate();
    setScreen("done");
  } else {
    setCurrentQuestion(currentQuestion + 1);
  }
}

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }


  if (screen === "quiz") {
    return (
      <main className="relative flex h-dvh flex-col bg-white px-5 py-6 text-[#171717]">
        <section className="mx-auto flex w-full max-w-sm flex-1 flex-col text-center">

          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-black tracking-[-0.3px] text-black/35">
              {selectedQuiz === "quizOne" ? "Quiz 1" : "Quiz 2"} · {question.id} av {questions.length}
            </p>
            <button
              onClick={() => { celebrate(); setScreen("done"); }}
              className="text-sm font-black tracking-[-0.3px] text-black/35"
            >
              Avslutt
            </button>
          </div>

          <div className="mt-3 flex w-full gap-[3px]">
            {questions.map((item, index) => {
              const status = statuses[index];
              const isActive = index === currentQuestion;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentQuestion(index)}
                  aria-label={`Gå til oppgave ${item.id}`}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-200 ${
                    status === "answered"
                      ? "bg-[#3c9f64]"
                      : status === "stuck"
                      ? "bg-[#d94a2f]"
                      : isActive
                      ? "bg-black/25"
                      : "bg-black/10"
                  }`}
                />
              );
            })}
          </div>

          <div
            key={currentQuestion}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="question-card relative mt-5 flex flex-1 w-full flex-col items-center justify-center rounded-[42px] bg-gradient-to-b from-[#fffdf9] to-[#fff7eb] shadow-[0_8px_40px_rgba(217,74,47,0.07),0_2px_12px_rgba(0,0,0,0.06)]"
          >
            {currentQuestion > 0 && (
              <span className="swipe-hint absolute left-5 text-[22px] font-black text-black/15 select-none">‹</span>
            )}
            {!isLastQuestion && (
              <span className="swipe-hint absolute right-5 text-[22px] font-black text-black/15 select-none">›</span>
            )}

            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.28em] text-black/25">
              Oppgave {question.id}
            </p>
            <p className="break-words px-8 text-[72px] leading-tight">
              {question.emojis}
            </p>
          </div>

          <div className="mt-4 grid w-full grid-cols-2 gap-3">
            <button
              onClick={() => setStatus("answered")}
              className={`rounded-full px-5 py-3.5 font-black transition active:scale-[0.98] ${
                statuses[currentQuestion] === "answered"
                  ? "bg-[#3c9f64] text-white shadow-[0_4px_12px_rgba(60,159,100,0.3)]"
                  : "bg-[#eaf7ef] text-[#2d7a4e]"
              }`}
            >
              ✅ Besvart
            </button>
            <button
              onClick={() => setStatus("stuck")}
              className={`rounded-full px-5 py-3.5 font-black transition active:scale-[0.98] ${
                statuses[currentQuestion] === "stuck"
                  ? "bg-[#d94a2f] text-white shadow-[0_4px_12px_rgba(217,74,47,0.3)]"
                  : "bg-[#fff3e0] text-[#c26a1a]"
              }`}
            >
              😵‍💫 Står fast
            </button>
          </div>

          <div className="mt-3 flex w-full gap-3">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="w-full rounded-full bg-[#f4f4f4] px-5 py-3.5 font-black text-black/60 transition active:scale-[0.98] disabled:opacity-35"
            >
              ← Forrige
            </button>
            <button
              onClick={nextQuestion}
              className="w-full rounded-full bg-[#d94a2f] px-5 py-3.5 font-black text-white shadow-[0_4px_14px_rgba(217,74,47,0.28)] transition active:scale-[0.98]"
            >
              {isLastQuestion ? "Ferdig →" : "Neste →"}
            </button>
          </div>

        </section>
      </main>
    );
  }

     if (screen === "done") {
    const answeredCount = Object.values(statuses).filter(
      (status) => status === "answered"
    ).length;

    const stuckCount = Object.values(statuses).filter(
      (status) => status === "stuck"
    ).length;

    const notAnsweredCount = questions.length - answeredCount;

    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 py-6 text-[#171717]">
        <section className="mx-auto flex w-full max-w-sm flex-col items-center text-center">
          <h1 className="text-[54px] font-black leading-[0.9] tracking-[-2px]">
            Ferdig 🎉
          </h1>

          <p className="mt-6 max-w-[300px] text-lg leading-7 text-black/55">
            Tid for fasit med quizmaster.
          </p>

          <div className="mt-8 grid w-full grid-cols-3 gap-3">
            <div className="rounded-[24px] bg-[#e7f7df] p-4">
              <p className="text-2xl font-black">{answeredCount}</p>
              <p className="mt-1 text-sm font-bold text-black/45">Besvart</p>
            </div>

            <div className="rounded-[24px] bg-[#fff0d6] p-4">
              <p className="text-2xl font-black">{stuckCount}</p>
              <p className="mt-1 text-sm font-bold text-black/45">Står fast</p>
            </div>

            <div className="rounded-[24px] bg-[#f4f4f4] p-4">
              <p className="text-2xl font-black">{notAnsweredCount}</p>
              <p className="mt-1 text-sm font-bold text-black/45">
                Ikke besvart
              </p>
            </div>
          </div>

          <button
            onClick={() => setScreen("quiz")}
            className="mt-10 w-full rounded-full bg-[#d94a2f] px-8 py-4 text-lg font-black text-white"
          >
            Se gjennom igjen
          </button>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setStatuses({});
              setScreen("home");
            }}
            className="mt-3 w-full rounded-full bg-[#f4f4f4] px-8 py-4 text-lg font-black text-black/60"
          >
            Til forsiden
          </button>
        </section>
      </main>
    );
  }

 return (
  <main className="relative flex h-dvh flex-col items-center overflow-hidden bg-white px-5 py-3 text-[#171717]">
    <div className="pointer-events-none absolute left-0 top-0 h-44 w-full bg-gradient-to-b from-[#fff0e5] to-transparent" />
    <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-[#fff4e4] to-transparent" />

    <div className="pointer-events-none absolute left-4 top-8 text-3xl text-[#e86b45] opacity-25">
      𝄞
    </div>
    <div className="pointer-events-none absolute right-7 top-12 text-2xl text-[#e86b45] opacity-20">
      ♪
    </div>
    <div className="pointer-events-none absolute right-4 top-24 text-4xl text-[#e8a56d] opacity-10">
      ◉
    </div>
    <div className="pointer-events-none absolute left-5 bottom-20 text-2xl text-[#e8a56d] opacity-20">
      🎧
    </div>
    <div className="pointer-events-none absolute right-7 bottom-16 text-2xl text-[#e86b45] opacity-20">
      🎤
    </div>

    <section className="relative mx-auto flex w-full max-w-sm flex-1 flex-col items-center text-center">
      <h1 className="text-[58px] font-black leading-[0.82] tracking-[-3px]">
        Emoji
        <span className="block text-[#d94a2f]">musikkquiz</span>
      </h1>

      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.38em] text-black/30">
        — Vol. 1 —
      </p>

      <p className="mt-3 max-w-[295px] text-[15px] leading-6 text-black/55">
        Gjett artistene og bandene basert på emojis ❤️
      </p>

      <img
        src={musicImage}
        alt="Emoji Musikkquiz"
        className="float-image mt-2 w-full max-w-[175px]"
      />

      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.38em] text-black/30">2 quizer · 80 oppgaver</p>

      <div className="mt-3 flex w-full flex-col items-center">
        <p className="relative text-[17px] font-black italic tracking-[-0.4px]">
          All you need is...
          <span className="absolute -bottom-1 left-1/2 h-[2px] w-28 -translate-x-1/2 rounded-full bg-[#d94a2f]" />
        </p>

        <div className="mt-4 grid w-full grid-cols-5 gap-2">
          <div className="rounded-[18px] bg-white px-2 py-2 text-[12px] font-semibold shadow-sm ring-1 ring-black/5">
            <div className="text-xl">❤️</div>
            Love
          </div>

          <div className="rounded-[18px] bg-white px-2 py-2 text-[12px] font-semibold shadow-sm ring-1 ring-black/5">
            <div className="text-xl">🧠</div>
            Brains
          </div>

          <div className="rounded-[18px] bg-white px-2 py-2 text-[12px] font-semibold shadow-sm ring-1 ring-black/5">
            <div className="text-xl">📝</div>
            Papir
          </div>

          <div className="rounded-[18px] bg-white px-2 py-2 text-[12px] font-semibold shadow-sm ring-1 ring-black/5">
            <div className="text-xl">✏️</div>
            Penn
          </div>

          <div className="rounded-[18px] bg-white px-2 py-2 text-[12px] font-semibold shadow-sm ring-1 ring-black/5">
            <div className="text-xl">👥</div>
            Et lag
          </div>
        </div>
      </div>

      <div className="mt-4 grid w-full grid-cols-2 gap-3">
        <button
          onClick={() => startQuiz("quizOne")}
          className="rounded-full bg-[#d94a2f] px-5 py-4 text-[18px] font-black text-white shadow-[0_10px_25px_rgba(217,74,47,0.22)] transition active:scale-[0.98]"
        >
          Quiz 1 🎵
        </button>

        <button
          onClick={() => startQuiz("quizTwo")}
          className="rounded-full bg-[#171717] px-5 py-4 text-[18px] font-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.16)] transition active:scale-[0.98]"
        >
          Quiz 2 ♪
        </button>
      </div>

      <div className="mt-auto flex w-full flex-col items-center pt-4">
        <p className="text-[12px] leading-5 text-black/40">
          ✨ Ingen googling • Ingen AI • Ingen krangling ✨
        </p>

        <div className="mt-4 flex w-full items-center justify-center gap-3">
          <div className="h-px flex-1 bg-black/10" />
          <span className="heart-pop text-sm">🎵</span>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <p className="mt-2 text-[12px] font-medium text-black/35">
          Made with <span className="heart-pop">❤️</span> by Pia Scarvounis
        </p>
      </div>
    </section>
  </main>
);
}

export default App;