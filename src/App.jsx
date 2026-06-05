import { useState, useRef } from "react";
import "./App.css";
import musicImage from "./assets/music.png";
import confetti from "canvas-confetti";

const categories = [
  {
    id: "blandet1",
    name: "Godt & Blandet Vol. 1",
    emoji: "🎲",
    colorFrom: "#166534",
    colorTo: "#16a34a",
    questions: [
      { id: 1, emojis: "🌶️👯‍♀️" },
      { id: 2, emojis: "🪲🪲" },
      { id: 3, emojis: "♿️🪨🪨" },
      { id: 4, emojis: "🐝🔛©️" },
      { id: 5, emojis: "🤴🤴🦁" },
      { id: 6, emojis: "🔴🥵🌶️" },
      { id: 7, emojis: "📬🎨☝🏼" },
      { id: 8, emojis: "🔫🔫🌹🌹" },
      { id: 9, emojis: "👧🏼👉🟥" },
      { id: 10, emojis: "🔗🅿️" },
      { id: 11, emojis: "🥶▶️" },
      { id: 12, emojis: "⚫️👁️🫛" },
      { id: 13, emojis: "🫵✌️" },
      { id: 14, emojis: "🌎🌬️🔥" },
      { id: 15, emojis: "🐫" },
      { id: 16, emojis: "😘" },
      { id: 17, emojis: "👸" },
      { id: 18, emojis: "🤴" },
      { id: 19, emojis: "Ⓜ️👉Ⓜ️" },
      { id: 20, emojis: "🦭" },
      { id: 21, emojis: "🦂🦂" },
      { id: 22, emojis: "🔙🛣️👦🏼👦🏼" },
      { id: 23, emojis: "🏍️🔨" },
      { id: 24, emojis: "❄️🐒" },
      { id: 25, emojis: "📻🙇‍♀️" },
    ],
  },
  {
    id: "blandet2",
    name: "Godt & Blandet Vol. 2",
    emoji: "🎲",
    colorFrom: "#155e75",
    colorTo: "#0891b2",
    questions: [
      { id: 1, emojis: "🍯👧🏼👦🏽" },
      { id: 2, emojis: "🔊🪁" },
      { id: 3, emojis: "🚽🙂‍↕️🐈" },
      { id: 4, emojis: "🚬🍄" },
      { id: 5, emojis: "🕒🚪🚪⤵️" },
      { id: 6, emojis: "©️©️🤠🤠" },
      { id: 7, emojis: "🐱🪆🪆" },
      { id: 8, emojis: "☯️👯‍♂️" },
      { id: 9, emojis: "🧂🫑" },
      { id: 10, emojis: "🚰🇪🇸🇮🇹" },
      { id: 11, emojis: "✉️🏤" },
      { id: 12, emojis: "⚛️🐱" },
      { id: 13, emojis: "🫃🍨" },
      { id: 14, emojis: "🚣‍♂️🗑️🤰🏽" },
      { id: 15, emojis: "🫖🩹❤️‍🩹" },
      { id: 16, emojis: "🟥🦴" },
      { id: 17, emojis: "🚬🏇" },
      { id: 18, emojis: "🥩🍞" },
      { id: 19, emojis: "🧻👦🏽👦🏼" },
      { id: 20, emojis: "👩🏼‍⚕️🇦🇱" },
      { id: 21, emojis: "🔫👀✌️🍷🏠" },
      { id: 22, emojis: "🧊" },
      { id: 23, emojis: "Ⓜ️🤕🍷🏳️‍🌈" },
      { id: 24, emojis: "🟤🅾️🪐👉🔴" },
      { id: 25, emojis: "➕🔌🤭" },
    ],
  },
  {
    id: "english",
    name: "English Only",
    emoji: "🇬🇧",
    colorFrom: "#9f1239",
    colorTo: "#e11d48",
    questions: [
      { id: 1, emojis: "🌶️👯‍♀️" },
      { id: 2, emojis: "🪲🪲" },
      { id: 3, emojis: "♿️🪨🪨" },
      { id: 4, emojis: "👸" },
      { id: 5, emojis: "🤴" },
      { id: 6, emojis: "🥶▶️" },
      { id: 7, emojis: "🔙🛣️👦🏼👦🏼" },
      { id: 8, emojis: "🚧👉" },
      { id: 9, emojis: "❄️🐒" },
      { id: 10, emojis: "⚫️👁️🫛" },
      { id: 11, emojis: "⛴️⛴️🪵🧑‍💻" },
      { id: 12, emojis: "📻🙇‍♀️" },
      { id: 13, emojis: "🔫🔫🌹🌹" },
      { id: 14, emojis: "👌🏼👈🏻🔫🔫" },
      { id: 15, emojis: "🙍🏾‍♂️🙍🏾‍♂️➡️🧔🧔" },
      { id: 16, emojis: "🌎🌬️🔥" },
      { id: 17, emojis: "😢🕓😱" },
      { id: 18, emojis: "🤔💭🐲🐲" },
      { id: 19, emojis: "🏖️👦🏼👦🏼" },
      { id: 20, emojis: "🤴🤴🦁" },
      { id: 21, emojis: "🫵✌️" },
      { id: 22, emojis: "🔫👀✌️🍷🏠" },
      { id: 23, emojis: "🟤🅾️🪐👉🔴" },
      { id: 24, emojis: "🌋🐜ℹ️" },
      { id: 25, emojis: "🏍️🔨" },
      { id: 26, emojis: "🥩🍞" },
      { id: 27, emojis: "🫖🩹❤️‍🩹" },
      { id: 28, emojis: "🫃🍨" },
      { id: 29, emojis: "🔗🌳" },
      { id: 30, emojis: "🎵👼" },
    ],
  },
  {
    id: "scandinavia",
    name: "Scandinavia",
    emoji: "🇳🇴",
    colorFrom: "#1d4ed8",
    colorTo: "#3b82f6",
    questions: [
      { id: 1, emojis: "🍯👧🏼👦🏽" },
      { id: 2, emojis: "🔊🪁" },
      { id: 3, emojis: "🚬🍄" },
      { id: 4, emojis: "🫏🙍🏾‍♂️" },
      { id: 5, emojis: "©️©️🤠🤠" },
      { id: 6, emojis: "✉️🏤" },
      { id: 7, emojis: "👧🏼👉🟥" },
      { id: 8, emojis: "🐫" },
      { id: 9, emojis: "🚬🏇" },
      { id: 10, emojis: "🖐️🖐️❌" },
      { id: 11, emojis: "😴💭🏠" },
      { id: 12, emojis: "🚰🇪🇸🇮🇹" },
      { id: 13, emojis: "👩🏼‍⚕️🇦🇱" },
      { id: 14, emojis: "👀🗣️🫓🚽" },
      { id: 15, emojis: "🪜🔥🧯" },
      { id: 16, emojis: "🧻👦🏽👦🏼" },
      { id: 17, emojis: "🍆👄🐝" },
    ],
  },
  {
    id: "rnb",
    name: "R&B / Soul / Hip-Hop",
    emoji: "🎤",
    colorFrom: "#6d28d9",
    colorTo: "#8b5cf6",
    questions: [
      { id: 1, emojis: "🐝🔛©️" },
      { id: 2, emojis: "🚽🙂‍↕️🐈" },
      { id: 3, emojis: "🧑‍🍼👶🏼" },
      { id: 4, emojis: "🙍🏾‍♂️🙍🏾‍♂️➡️🧔🧔" },
      { id: 5, emojis: "6️⃣⚫️" },
      { id: 6, emojis: "🦷🫜🪾" },
      { id: 7, emojis: "🫃🍨" },
      { id: 8, emojis: "🫖🩹❤️‍🩹" },
      { id: 9, emojis: "🚣‍♂️🗑️🤰🏽" },
      { id: 10, emojis: "👨🏻‍💼👩🏼‍⚕️👷👮🏽‍♂️🔑" },
      { id: 11, emojis: "🧊" },
      { id: 12, emojis: "🫖🔌👀" },
      { id: 13, emojis: "Ⓜ️👉Ⓜ️" },
      { id: 14, emojis: "🌋🐜ℹ️" },
      { id: 15, emojis: "🍆😇🅾️" },
      { id: 16, emojis: "🦁🌉🌉" },
      { id: 17, emojis: "Ⓜ️🤕🍷🏳️‍🌈" },
      { id: 18, emojis: "⚪️🕘🏠🕑1️⃣" },
      { id: 19, emojis: "🟤🅾️🪐👉🔴" },
      { id: 20, emojis: "🏇🦆" },
      { id: 21, emojis: "🇳🇴🚔📞" },
      { id: 22, emojis: "⚫️👁️🫛" },
      { id: 23, emojis: "🤓" },
      { id: 24, emojis: "🧂🫑" },
      { id: 25, emojis: "🌇🚮" },
      { id: 26, emojis: "☯️👯‍♂️" },
      { id: 27, emojis: "🔫👀✌️🍷🏠" },
    ],
  },
  {
    id: "rock",
    name: "Rock / Alternative",
    emoji: "🎸",
    colorFrom: "#1e293b",
    colorTo: "#334155",
    questions: [
      { id: 1, emojis: "👌🏼👈🏻🔫🔫" },
      { id: 2, emojis: "♿️🪨🪨" },
      { id: 3, emojis: "🪲🪲" },
      { id: 4, emojis: "🤴🤴🦁" },
      { id: 5, emojis: "🔫🔫🌹🌹" },
      { id: 6, emojis: "🔗🅿️" },
      { id: 7, emojis: "🕒🚪🚪⤵️" },
      { id: 8, emojis: "🫵✌️" },
      { id: 9, emojis: "😢🕓😱" },
      { id: 10, emojis: "📻🙇‍♀️" },
      { id: 11, emojis: "🔴🥵🌶️" },
      { id: 12, emojis: "🥶▶️" },
      { id: 13, emojis: "❄️🐒" },
      { id: 14, emojis: "👮🏽‍♂️👮🏽‍♂️" },
      { id: 15, emojis: "🐝🪡" },
      { id: 16, emojis: "🦂🦂" },
      { id: 17, emojis: "⛴️⛴️🪵🧑‍💻" },
      { id: 18, emojis: "🤔💭🐲🐲" },
    ],
  },
  {
    id: "pop",
    name: "Pop",
    emoji: "🎵",
    colorFrom: "#be185d",
    colorTo: "#ec4899",
    questions: [
      { id: 1, emojis: "🌶️👯‍♀️" },
      { id: 2, emojis: "🐱🪆🪆" },
      { id: 3, emojis: "⚛️🐱" },
      { id: 4, emojis: "🍫🍩🍡👶🏼👶🏼" },
      { id: 5, emojis: "🚧👉" },
      { id: 6, emojis: "🔙🛣️👦🏼👦🏼" },
      { id: 7, emojis: "🪀" },
      { id: 8, emojis: "🔵" },
      { id: 9, emojis: "🤴" },
      { id: 10, emojis: "👸" },
      { id: 11, emojis: "🦭" },
      { id: 12, emojis: "➕🔌🤭" },
      { id: 13, emojis: "📬🎨☝🏼" },
      { id: 14, emojis: "🦁🔌🤑" },
      { id: 15, emojis: "🏍️🔨" },
      { id: 16, emojis: "😘" },
      { id: 17, emojis: "🧃🧊☀️🐝🧎‍♀️‍➡️" },
      { id: 18, emojis: "🏖️👦🏼👦🏼" },
    ],
  },
  {
    id: "classics",
    name: "Classics / Legends",
    emoji: "👑",
    colorFrom: "#92400e",
    colorTo: "#d97706",
    questions: [
      { id: 1, emojis: "🪲🪲" },
      { id: 2, emojis: "♿️🪨🪨" },
      { id: 3, emojis: "👸" },
      { id: 4, emojis: "🤴" },
      { id: 5, emojis: "⛴️⛴️🪵🧑‍💻" },
      { id: 6, emojis: "✌️✌️" },
      { id: 7, emojis: "🐝🪡" },
      { id: 8, emojis: "👮🏽‍♂️👮🏽‍♂️" },
      { id: 9, emojis: "🥩🍞" },
      { id: 10, emojis: "🟥🦴" },
      { id: 11, emojis: "🌎🌬️🔥" },
      { id: 12, emojis: "Ⓜ️🤕🍷🏳️‍🌈" },
      { id: 13, emojis: "⚪️🕘🏠🕑1️⃣" },
      { id: 14, emojis: "🦁🔌🤑" },
      { id: 15, emojis: "🦂🦂" },
      { id: 16, emojis: "😘" },
      { id: 17, emojis: "🏖️👦🏼👦🏼" },
    ],
  },
];

const activeCategories = categories.filter((c) => !c.comingSoon);
const totalQuestions = activeCategories.reduce((sum, c) => sum + c.questions.length, 0);

function App() {
  const [screen, setScreen] = useState("home");
  const [teamName, setTeamName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});   // { [questionIdx]: string }
  const [statuses, setStatuses] = useState({});  // { [questionIdx]: "stuck" }
  const [points, setPoints] = useState({});      // { [questionIdx]: boolean }
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);

  const touchStartX = useRef(null);

  const questions = selectedCategory?.questions ?? [];
  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const totalPoints = Object.values(points).filter(Boolean).length;

  const isEnglish = selectedCategory?.id === "english";
  const ui = isEnglish ? {
    quit: "Done",
    question: "Question",
    placeholder: "Write your answer…",
    stuck: "😵‍💫 Stuck",
    stuckPast: "😵‍💫 Got stuck",
    prev: "← Previous",
    next: "Next →",
    done: "Done →",
    finished: "Done 🎉",
    tapCorrect: "Tap ✓ for correct answers",
    points: "points",
    backToQuestions: "← Back to questions",
    newCategory: "Choose new category",
    leaveTitle: "Are you sure?",
    leaveBody: "Your answers will be lost.",
    leaveYes: "Yes, leave",
    leaveNo: "Stay",
  } : {
    quit: "Ferdig",
    question: "Oppgave",
    placeholder: "Skriv svaret ditt…",
    stuck: "😵‍💫 Står fast",
    stuckPast: "😵‍💫 Sto fast",
    prev: "← Forrige",
    next: "Neste →",
    done: "Ferdig →",
    finished: "Ferdig 🎉",
    tapCorrect: "Trykk ✓ for riktige svar",
    points: "poeng",
    backToQuestions: "← Tilbake til spørsmålene",
    newCategory: "Velg ny kategori",
    leaveTitle: "Er du sikker?",
    leaveBody: "Svarene dine forsvinner.",
    leaveYes: "Ja, forlat",
    leaveNo: "Bli",
  };

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

  function startCategory(category) {
    setSelectedCategory(category);
    setCurrentQuestion(0);
    setAnswers({});
    setStatuses({});
    setPoints({});
    setScreen("quiz");
  }

  function setAnswer(value) {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: value }));
    // typing clears "stuck"
    if (value.trim() && statuses[currentQuestion] === "stuck") {
      setStatuses((prev) => ({ ...prev, [currentQuestion]: undefined }));
    }
  }

  function toggleStuck() {
    setStatuses((prev) => ({
      ...prev,
      [currentQuestion]:
        prev[currentQuestion] === "stuck" ? undefined : "stuck",
    }));
  }

  function togglePoint(questionIdx) {
    setPoints((prev) => ({ ...prev, [questionIdx]: !prev[questionIdx] }));
  }

  function celebrate() {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.65 } });
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
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  function backToCategories() {
    setCurrentQuestion(0);
    setAnswers({});
    setStatuses({});
    setPoints({});
    setScreen("categories");
  }

  function backToHome() {
    setCurrentQuestion(0);
    setAnswers({});
    setStatuses({});
    setPoints({});
    setSelectedCategory(null);
    setShowLeaveConfirm(false);
    setScreen("home");
  }

  // ─── HOME ──────────────────────────────────────────────────────────────────
  if (screen === "home") {
    return (
      <main className="relative flex h-dvh flex-col items-center overflow-hidden bg-white px-5 py-6 text-[#171717]">
        <div className="pointer-events-none absolute left-0 top-0 h-44 w-full bg-gradient-to-b from-[#fff0e5] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-full bg-gradient-to-t from-[#fff4e4] to-transparent" />
        <div className="pointer-events-none absolute left-4 top-8 text-3xl text-[#e86b45] opacity-25">𝄞</div>
        <div className="pointer-events-none absolute right-7 top-12 text-2xl text-[#e86b45] opacity-20">♪</div>
        <div className="pointer-events-none absolute right-4 top-24 text-4xl text-[#e8a56d] opacity-10">◉</div>
        <div className="pointer-events-none absolute left-5 bottom-20 text-2xl text-[#e8a56d] opacity-20">🎧</div>
        <div className="pointer-events-none absolute right-7 bottom-16 text-2xl text-[#e86b45] opacity-20">🎤</div>

        <section className="relative mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-[58px] font-black leading-[0.82] tracking-[-3px]">
            Emoji
            <span className="block text-[#d94a2f]">musikkquiz</span>
          </h1>

          <p className="mt-3 max-w-[280px] text-[15px] leading-6 text-black/55">
            Gjett artistene og bandene basert på emojis ❤️
          </p>

          <img
            src={musicImage}
            alt="Emoji Musikkquiz"
            className="float-image mt-4 w-full max-w-[185px]"
          />

          <p className="mt-4 text-[11px] font-black uppercase tracking-[0.3em] text-black/30">
            {activeCategories.length} kategorier
          </p>

          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Hva heter laget ditt?"
            className="mt-5 w-full rounded-2xl bg-[#f4f4f4] px-5 py-3.5 text-center text-[16px] font-bold text-black outline-none placeholder:font-medium placeholder:text-black/30 focus:ring-2 focus:ring-[#d94a2f]/30"
          />

          <button
            onClick={() => teamName.trim() && setScreen("categories")}
            disabled={!teamName.trim()}
            className="mt-3 w-full rounded-full bg-[#d94a2f] px-8 py-4 text-[20px] font-black text-white shadow-[0_10px_25px_rgba(217,74,47,0.28)] transition active:scale-[0.98] disabled:opacity-40"
          >
            Start →
          </button>
        </section>

        <div className="relative flex w-full max-w-sm flex-col items-center pb-1">
          <div className="flex w-full items-center justify-center gap-3">
            <div className="h-px flex-1 bg-black/10" />
            <span className="heart-pop text-sm">🎵</span>
            <div className="h-px flex-1 bg-black/10" />
          </div>
          <p className="mt-2 text-[12px] font-medium text-black/35">
            Made with <span className="heart-pop">❤️</span> by Pia Scarvounis
          </p>
        </div>
      </main>
    );
  }

  // ─── CATEGORIES ────────────────────────────────────────────────────────────
  if (screen === "categories") {
    return (
      <main className="min-h-dvh bg-white px-5 py-6 text-[#171717]">
        <section className="mx-auto flex w-full max-w-sm flex-col">
          <div className="mb-5 flex items-center justify-between">
            <button
              onClick={() => setScreen("home")}
              className="text-sm font-black tracking-[-0.3px] text-black/40 transition active:opacity-60"
            >
              ← Forside
            </button>
            <span className="rounded-full bg-[#f4f4f4] px-3 py-1.5 text-[12px] font-black text-black/50">
              {teamName}
            </span>
          </div>

          <h2 className="text-[36px] font-black leading-[1] tracking-[-1.5px]">
            Velg
            <span className="text-[#d94a2f]"> kategori</span>
          </h2>
          <p className="mt-1 text-[14px] text-black/40">Trykk for å starte</p>

          <div className="mt-5 flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => !cat.comingSoon && startCategory(cat)}
                disabled={cat.comingSoon}
                className="flex w-full items-center gap-4 rounded-[24px] p-5 text-left transition active:scale-[0.98] disabled:cursor-default disabled:opacity-55"
                style={{
                  background: `linear-gradient(135deg, ${cat.colorFrom}, ${cat.colorTo})`,
                }}
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[18px] bg-white/20 text-[30px]">
                  {cat.emoji}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[17px] font-black leading-tight text-white">{cat.name}</p>
                  <p className="mt-0.5 text-[13px] font-semibold text-white/65">
                    {cat.comingSoon ? "Kommer snart 🔒" : `${cat.questions.length} oppgaver`}
                  </p>
                </div>
                {!cat.comingSoon && (
                  <span className="text-[22px] font-black text-white/40">›</span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center pb-4">
            <div className="flex w-full items-center justify-center gap-3">
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

  // ─── QUIZ ──────────────────────────────────────────────────────────────────
  if (screen === "quiz") {
    return (
      <main className="relative flex h-dvh flex-col bg-white px-5 py-6 text-[#171717]">

        {showLeaveConfirm && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
            <div className="w-full max-w-sm rounded-[28px] bg-white p-7 shadow-xl">
              <p className="text-[22px] font-black tracking-[-0.5px]">{ui.leaveTitle}</p>
              <p className="mt-1.5 text-[15px] text-black/50">{ui.leaveBody}</p>
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={backToHome}
                  className="w-full rounded-full bg-[#d94a2f] px-8 py-4 font-black text-white shadow-[0_4px_14px_rgba(217,74,47,0.28)] transition active:scale-[0.98]"
                >
                  {ui.leaveYes}
                </button>
                <button
                  onClick={() => setShowLeaveConfirm(false)}
                  className="w-full rounded-full bg-[#f4f4f4] px-8 py-4 font-black text-black/60 transition active:scale-[0.98]"
                >
                  {ui.leaveNo}
                </button>
              </div>
            </div>
          </div>
        )}

        <section className="mx-auto flex w-full max-w-sm flex-1 flex-col">

          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setShowLeaveConfirm(true)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-black/8 text-[13px] font-black text-black/40 transition active:scale-90"
              >
                ✕
              </button>
              <p className="max-w-[180px] truncate text-sm font-black tracking-[-0.3px] text-black/35">
                {selectedCategory.emoji} {selectedCategory.name} · {question.id}/{questions.length}
              </p>
            </div>
            <button
              onClick={() => { celebrate(); setScreen("done"); }}
              className="text-sm font-black tracking-[-0.3px] text-black/35"
            >
              {ui.quit}
            </button>
          </div>

          <div className="mt-3 flex w-full gap-[3px]">
            {questions.map((item, index) => {
              const isStuck = statuses[index] === "stuck";
              const hasAnswer = (answers[index] ?? "").trim() !== "";
              const isActive = index === currentQuestion;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentQuestion(index)}
                  aria-label={`Gå til oppgave ${item.id}`}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-200 ${
                    isStuck
                      ? "bg-[#d94a2f]"
                      : hasAnswer
                      ? "bg-[#3c9f64]"
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
            className="question-card relative mt-5 flex w-full flex-1 flex-col items-center justify-center rounded-[42px] bg-gradient-to-b from-[#fffdf9] to-[#fff7eb] shadow-[0_8px_40px_rgba(217,74,47,0.07),0_2px_12px_rgba(0,0,0,0.06)]"
          >
            {currentQuestion > 0 && (
              <span className="swipe-hint absolute left-5 select-none text-[22px] font-black text-black/15">‹</span>
            )}
            {!isLastQuestion && (
              <span className="swipe-hint absolute right-5 select-none text-[22px] font-black text-black/15">›</span>
            )}
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.28em] text-black/25">
              {ui.question} {question.id}
            </p>
            <p className="break-words px-8 text-[72px] leading-tight">{question.emojis}</p>
          </div>

          <input
            type="text"
            value={answers[currentQuestion] ?? ""}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder={ui.placeholder}
            className="mt-4 w-full rounded-2xl bg-[#f4f4f4] px-5 py-3.5 text-[16px] font-medium text-black/80 outline-none placeholder:text-black/30 focus:ring-2 focus:ring-[#d94a2f]/30"
          />

          <div className="mt-3 flex w-full gap-3">
            <button
              onClick={toggleStuck}
              className={`w-full rounded-full px-5 py-3.5 font-black transition active:scale-[0.98] ${
                statuses[currentQuestion] === "stuck"
                  ? "bg-[#d94a2f] text-white shadow-[0_4px_12px_rgba(217,74,47,0.3)]"
                  : "bg-[#fff3e0] text-[#c26a1a]"
              }`}
            >
              {ui.stuck}
            </button>
          </div>

          <div className="mt-3 flex w-full gap-3">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="w-full rounded-full bg-[#f4f4f4] px-5 py-3.5 font-black text-black/60 transition active:scale-[0.98] disabled:opacity-35"
            >
              {ui.prev}
            </button>
            <button
              onClick={nextQuestion}
              className="w-full rounded-full bg-[#d94a2f] px-5 py-3.5 font-black text-white shadow-[0_4px_14px_rgba(217,74,47,0.28)] transition active:scale-[0.98]"
            >
              {isLastQuestion ? ui.done : ui.next}
            </button>
          </div>

        </section>
      </main>
    );
  }

  // ─── DONE ──────────────────────────────────────────────────────────────────
  if (screen === "done") {
    return (
      <main className="min-h-dvh bg-white px-5 py-6 text-[#171717]">
        <section className="mx-auto flex w-full max-w-sm flex-col">

          <h1 className="text-[48px] font-black leading-[0.9] tracking-[-2px]">{ui.finished}</h1>

          {selectedCategory && (
            <p className="mt-2 text-[13px] font-black uppercase tracking-[0.2em] text-black/35">
              {selectedCategory.emoji} {selectedCategory.name}
            </p>
          )}

          {/* Score */}
          <div className="mt-5 flex items-center justify-between rounded-[24px] bg-[#f4f4f4] px-6 py-5">
            <div>
              <p className="text-[13px] font-black uppercase tracking-[0.15em] text-black/40">
                {teamName}
              </p>
              <p className="mt-1 text-[13px] font-semibold text-black/40">
                {ui.tapCorrect}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[52px] font-black leading-none text-[#d94a2f]">{totalPoints}</p>
              <p className="text-[13px] font-bold text-black/35">{ui.points}</p>
            </div>
          </div>

          {/* Question list */}
          <div className="mt-4 flex flex-col gap-2.5">
            {questions.map((q, qIdx) => {
              const ans = answers[qIdx] ?? "";
              const isStuck = statuses[qIdx] === "stuck";
              const correct = points[qIdx];
              return (
                <div
                  key={q.id}
                  className="flex items-center gap-4 rounded-[20px] bg-[#f8f8f8] px-4 py-3.5"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                      {q.id}
                    </p>
                    <p className="mt-0.5 text-[26px] leading-none">{q.emojis}</p>
                    <p className={`mt-1.5 truncate text-[14px] font-medium ${
                      isStuck
                        ? "text-[#d94a2f]"
                        : ans
                        ? "text-black/75"
                        : "italic text-black/25"
                    }`}>
                      {isStuck ? ui.stuckPast : ans || "—"}
                    </p>
                  </div>
                  <button
                    onClick={() => togglePoint(qIdx)}
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-[18px] font-black transition active:scale-95 ${
                      correct
                        ? "bg-[#3c9f64] text-white shadow-[0_2px_8px_rgba(60,159,100,0.3)]"
                        : "bg-black/8 text-black/20"
                    }`}
                  >
                    ✓
                  </button>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => setScreen("quiz")}
            className="mt-6 w-full rounded-full bg-[#d94a2f] px-8 py-4 text-lg font-black text-white shadow-[0_10px_25px_rgba(217,74,47,0.22)] transition active:scale-[0.98]"
          >
            {ui.backToQuestions}
          </button>

          <button
            onClick={backToCategories}
            className="mt-3 w-full rounded-full bg-[#f4f4f4] px-8 py-4 text-lg font-black text-black/60 transition active:scale-[0.98]"
          >
            {ui.newCategory}
          </button>

          <div className="mt-8 flex flex-col items-center pb-4">
            <div className="flex w-full items-center justify-center gap-3">
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
}

export default App;
