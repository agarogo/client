import { useState } from "react";
import Head from "next/head";

export default function Test() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "I'm _____ dinner for my mum tonight.",
      options: [
        "am making",
        "making",
        "make",
      ],
      correctAnswer: "making",
    },
    {
      id: 2,
      question: "Raushan _____ her office at 8 o'clock this evening.",
      options: [
        "leaves",
        "did leave",
        "left",
      ],
      correctAnswer: "left",
    },
    {
      id: 3,
      question: "How much _____ your trousers?",
      options: [
        "were",
        "was",
        "is",
      ],
      correctAnswer: "were",
    },
    {
      id: 4,
      question: "Symbat _____ swimming tomorrow.",
      options: [
        "is going",
        "isn't to go",
        "going isn't",
      ],
      correctAnswer: "is going",
    },
    {
      id: 5,
      question: "Madina _____ anything at the shops.",
      options: [
        "didn't bought",
        "bought",
        "didn't buy",
      ],
      correctAnswer: "didn't buy",
    },
    {
      id: 6,
      question: "_____ you late for work today?",
      options: [
        "Is",
        "Were",
        "Was",
      ],
      correctAnswer: "Were",
    },
    {
      id: 7,
      question: "Zhanel _____ me an email yesterday.",
      options: [
        "didn't sent",
        "didn't send",
        "wasn't send",
      ],
      correctAnswer: "didn't send",
    },
    {
      id: 8,
      question: "When _____ you visit the new school?",
      options: [
        "did",
        "had",
        "went",
      ],
      correctAnswer: "did",
    },
    {
      id: 9,
      question: "Where _____ ?",
      options: [
        "did stop the bus",
        "did the bus stop",
        "did stopped the bus",
      ],
      correctAnswer: "did the bus stop",
    },
    {
      id: 10,
      question: "Kairat and Serik _____ their new jeans tonight.",
      options: [
        "are wearing",
        "are wear",
        "aren't wear",
      ],
      correctAnswer: "are wearing",
    },
  ];

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore((correctCount / questions.length) * 100);
  };

  return (
    <>
      <Head>
        <title>Тест по HTML</title>
        <meta name="description" content="Пройдите тест по Английскому языку" />
      </Head>
      <section className="mt-8 bg-white w-[90%] mx-auto py-10 rounded-[32px]">
        <h2 className="text-4xl text-center mb-6 mon">Тест по Английскому языку</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {questions.map((q) => (
            <div key={q.id} className="bg-[#86F37D] text-[#0A1044] p-4 rounded-[20px]">
              <p className="mb-4">{q.question}</p>
              {q.options.map((option) => (
                <div key={option} className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`${q.id}-${option}`}
                    name={`question-${q.id}`}
                    value={option}
                    checked={answers[q.id] === option}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor={`${q.id}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="bg-[#5C47FD] text-white px-4 py-2 rounded-[12px] hover:bg-blue-700 mt-4"
          >
            Проверить ответы
          </button>
          {score !== null && (
            <div className="mt-4 text-center">
              <p className="text-xl">Ваш результат: {score}%</p>
              <p className="text-gray-600">
                {score === 100 ? "Отлично!" : score >= 50 ? "Хорошо, но можно лучше!" : "Попробуйте ещё раз!"}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
