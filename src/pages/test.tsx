import { useState } from "react";
import Head from "next/head";

export default function Test() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "Что такое HTML?",
      options: [
        "Язык программирования",
        "Язык разметки для создания веб-страниц",
        "Система управления базами данных",
        "Графический редактор",
      ],
      correctAnswer: "Язык разметки для создания веб-страниц",
    },
    {
      id: 2,
      question: "Какой тег используется для заголовка первого уровня?",
      options: ["<p>", "<h1>", "<div>", "<span>"],
      correctAnswer: "<h1>",
    },
    {
      id: 3,
      question: "Что делает тег <br>?",
      options: [
        "Создаёт таблицу",
        "Добавляет разрыв строки",
        "Вставляет изображение",
        "Определяет параграф",
      ],
      correctAnswer: "Добавляет разрыв строки",
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
        <meta name="description" content="Пройдите тест по основам HTML" />
      </Head>
      <section className="mt-8 bg-white w-[90%] mx-auto py-10 rounded-[32px]">
        <h2 className="text-4xl text-center mb-6 mon">Тест по HTML</h2>
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