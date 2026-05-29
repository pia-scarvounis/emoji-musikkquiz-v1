import { useState } from "react";
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
  { id: 21, emojis: "👈🏻👌🏼🔫🔫" },
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
];

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedQuiz, setSelectedQuiz] = useState("quizOne");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [statuses, setStatuses] = useState({});

  const questions = selectedQuiz === "quizOne" ? quizOne : quizTwo;
  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

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

  function getDotColor(index) {
    if (statuses[index] === "answered") return "bg-[#3c9f64]";
    if (statuses[index] === "stuck") return "bg-[#d94a2f]";
    return "bg-[#ebe1d2]";
  }

  if (screen === "quiz") {
    return (
      <main className="min-h-screen bg-white px-5 py-6 text-[#171717]">
        <section className="mx-auto flex w-full max-w-sm flex-col items-center text-center">
          <div className="flex w-full items-center justify-between px-1">
            <p className="text-sm font-black tracking-[-0.3px] text-black/35">
              {selectedQuiz === "quizOne" ? "Quiz 1" : "Quiz 2"} · {question.id} av{" "}
              {questions.length}
            </p>

     <button
  onClick={() => {
    celebrate();
    setScreen("done");
  }}
  className="text-sm font-black tracking-[-0.3px] text-black/35"
>
  Avslutt
</button>
          </div>

          <div className="mt-5 grid w-full grid-cols-12 gap-2 rounded-[28px] bg-[#fffaf3] px-4 py-4">
            {questions.map((item, index) => {
              const isActive = index === currentQuestion;

              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentQuestion(index)}
                  className={`mx-auto h-3.5 w-3.5 rounded-full transition ${getDotColor(
                    index
                  )} ${
                    isActive
                      ? "ring-2 ring-black ring-offset-2 ring-offset-[#fffaf3]"
                      : ""
                  }`}
                  aria-label={`Gå til oppgave ${item.id}`}
                />
              );
            })}
          </div>

          <div className="mt-8 flex min-h-[230px] w-full flex-col items-center justify-center rounded-[42px] border border-[#f2e6d6] bg-[#fffaf3] px-6">
            <p className="mb-6 text-sm font-black uppercase tracking-[0.18em] text-black/35">
              Oppgave {question.id}
            </p>

            <p className="break-words text-[70px] leading-tight">
              {question.emojis}
            </p>
          </div>

          <div className="mt-7 grid w-full grid-cols-2 gap-3">
            <button
              onClick={() => setStatus("answered")}
              className={`rounded-full px-5 py-4 font-black transition active:scale-[0.98] ${
                statuses[currentQuestion] === "answered"
                  ? "bg-[#3c9f64] text-white"
                  : "bg-[#e7f7df] text-[#225f39]"
              }`}
            >
              ✅ Besvart
            </button>

            <button
              onClick={() => setStatus("stuck")}
              className={`rounded-full px-5 py-4 font-black transition active:scale-[0.98] ${
                statuses[currentQuestion] === "stuck"
                  ? "bg-[#d94a2f] text-white"
                  : "bg-[#fff0d6] text-[#8a4b14]"
              }`}
            >
              😵‍💫 Står fast
            </button>
          </div>

          <div className="mt-7 flex w-full gap-3">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="w-full rounded-full bg-[#f4f4f4] px-5 py-4 font-black text-black/60 transition active:scale-[0.98] disabled:opacity-35"
            >
              ← Forrige
            </button>

            <button
              onClick={nextQuestion}
              className="w-full rounded-full bg-[#d94a2f] px-5 py-4 font-black text-white transition active:scale-[0.98]"
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
            className="mt-10 w-full rounded-full bg-[#d94a2f] px-8 py-4 text-lg font-black text-white transition active:scale-[0.98]"
          >
            Se gjennom igjen
          </button>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setStatuses({});
              setScreen("home");
            }}
            className="mt-3 w-full rounded-full bg-[#f4f4f4] px-8 py-4 text-lg font-black text-black/60 transition active:scale-[0.98]"
          >
            Til forsiden
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-4 text-[#171717]">
      <section className="mx-auto flex w-full max-w-sm flex-col items-center text-center">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#efe4d3] bg-[#fffaf3] text-2xl">
          🎵
        </div>

        <h1 className="text-[48px] font-black leading-[0.88] tracking-[-1.6px]">
          Emoji
          <span className="block text-[#d24b32]">musikkquiz</span>
        </h1>

        <p className="mt-3 max-w-[280px] text-[16px] leading-6 text-black/55">
          Gjett artistene og bandene basert på emojis
        </p>

        <div className="mt-3 flex gap-2">
          <div className="rounded-full bg-[#fff7eb] px-3 py-1.5 text-[13px] font-bold text-black/55">
            2 quizer
          </div>

          <div className="rounded-full bg-[#fff7eb] px-3 py-1.5 text-[13px] font-bold text-black/55">
            74 oppgaver
          </div>
        </div>

        <img
          src={musicImage}
          alt="Emoji Musikkquiz"
          className="float-image mt-4 w-full max-w-[205px]"
        />

        <div className="mt-4 flex w-full flex-col items-center">
          <p className="text-[16px] font-bold tracking-[-0.3px]">
            All you need is...
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <div className="rounded-full bg-[#fff7eb] px-4 py-2 text-[14px] font-medium">
              ❤️ Love
            </div>
            <div className="rounded-full bg-[#fff7eb] px-4 py-2 text-[14px] font-medium">
  🧠 Brains
</div>

            <div className="rounded-full bg-[#fff7eb] px-4 py-2 text-[14px] font-medium">
              📝 Papir
            </div>

            <div className="rounded-full bg-[#fff7eb] px-4 py-2 text-[14px] font-medium">
              ✏️ Penn
            </div>

            <div className="rounded-full bg-[#fff7eb] px-4 py-2 text-[14px] font-medium">
              👥 Et lag
            </div>
          </div>
        </div>

       <div className="mt-5 mb-6 grid w-full grid-cols-2 gap-3">
          <button
            onClick={() => startQuiz("quizOne")}
            className="rounded-[26px] bg-[#d94a2f] px-5 py-4 text-[17px] font-black text-white transition active:scale-[0.98]"
          >
            Spill Quiz 1
          </button>

          <button
            onClick={() => startQuiz("quizTwo")}
            className="rounded-[26px] bg-[#171717] px-5 py-4 text-[17px] font-black text-white transition active:scale-[0.98]"
          >
            Spill Quiz 2
          </button>
        </div>

        <p className="mt-7 text-[13px] leading-5 text-black/40">
          ✨  Ingen googling • Ingen AI • Ingen krangling ✨
        </p>

        <p className="mt-2 text-[12px] font-medium text-black/30">
          Made with ❤️ by Pia Scarvounis
        </p>
      </section>
    </main>
  );
}

export default App;