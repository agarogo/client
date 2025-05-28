import { useState } from "react";
import Head from "next/head";

export default function Test() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: "1) I'm _____ dinner for my mum tonight.",
      options: [
        "am making",
        "making",
        "make",
      ],
      correctAnswer: "making",
    },
    {
      id: 2,
      question: "2) Raushan _____ her office at 8 o'clock this evening.",
      options: [
        "leaves",
        "did leave",
        "left",
      ],
      correctAnswer: "left",
    },
    {
      id: 3,
      question: "3) How much _____ your trousers?",
      options: [
        "were",
        "was",
        "is",
      ],
      correctAnswer: "were",
    },
    {
      id: 4,
      question: "4) Symbat _____ swimming tomorrow.",
      options: [
        "is going",
        "isn't to go",
        "going isn't",
      ],
      correctAnswer: "is going",
    },
    {
      id: 5,
      question: "5) Madina _____ anything at the shops.",
      options: [
        "didn't bought",
        "bought",
        "didn't buy",
      ],
      correctAnswer: "didn't buy",
    },
    {
      id: 6,
      question: "6) _____ you late for work today?",
      options: [
        "Is",
        "Were",
        "Was",
      ],
      correctAnswer: "Were",
    },
    {
      id: 7,
      question: "7) Zhanel _____ me an email yesterday.",
      options: [
        "didn't sent",
        "didn't send",
        "wasn't send",
      ],
      correctAnswer: "didn't send",
    },
    {
      id: 8,
      question: "8) When _____ you visit the new school?",
      options: [
        "did",
        "had",
        "went",
      ],
      correctAnswer: "did",
    },
    {
      id: 9,
      question: "9) Where _____ ?",
      options: [
        "did stop the bus",
        "did the bus stop",
        "did stopped the bus",
      ],
      correctAnswer: "did the bus stop",
    },
    {
      id: 10,
      question: "10) Kairat and Serik _____ their new jeans tonight.",
      options: [
        "are wearing",
        "are wear",
        "aren't wear",
      ],
      correctAnswer: "are wearing",
    },
    {
      id: 11,
      question: "11) I _____ a really good time at the party.",
      options: [
        "have",
        "was have",
        "had",
      ],
      correctAnswer: "had",
    },
    {
      id: 12,
      question: "12) Adina _____ tennis on Wednesday.",
      options: [
        "is play",
        "is playing",
        "are playing",
      ],
      correctAnswer: "is playing",
    },
    {
      id: 13,
      question: "13) _____ speak Kazakh?",
      options: [
        "Can he",
        "He can",
        "Is he",
      ],
      correctAnswer: "Can he",
    },
    {
      id: 14,
      question: "14) What _____ tonight?",
      options: [
        "do they do",
        "are they doing",
        "they are doing",
      ],
      correctAnswer: "are they doing",
    },
    {
      id: 15,
      question: "15) Berik _____ to the station to meet his friends.",
      options: [
        "went",
        "did go",
        "did went",
      ],
      correctAnswer: "went",
    },
    {
      id: 16,
      question: "16) _____ Nazym buy a phone yesterday?",
      options: [
        "Was",
        "Did",
        "Can",
      ],
      correctAnswer: "Did",
    },
    {
      id: 17,
      question: "17) What _____ to the computer?",
      options: [
        "happened",
        "did happen",
        "is happen",
      ],
      correctAnswer: "happened",
    },
    {
      id: 18,
      question: "18) We _____ the food at that new restaurant last night.",
      options: [
        "didn't liked",
        "didn't like",
        "wasn't like",
      ],
      correctAnswer: "didn't like",
    },
    {
      id: 19,
      question: "19) Sultan's _____ at a hotel near the beach.",
      options: [
        "staying",
        "stay",
        "to stay",
      ],
      correctAnswer: "staying",
    },
    {
      id: 20,
      question: "20) What time _____ in Astana?",
      options: [
        "we arriving",
        "we are arriving",
        "are we arriving",
      ],
      correctAnswer: "are we arriving",
    },
    {
      id: 21,
      question: "21) Where _____ Anuar from? He's from Almaty.",
      options: [
        "are",
        "is",
        "do",
      ],
      correctAnswer: "is",
    },
    {
      id: 22,
      question: "22) I want _____ rice with my chicken, please. No problem!",
      options: [
        "some",
        "any",
        "a",
      ],
      correctAnswer: "some",
    },
    {
      id: 23,
      question: "23)  ______ Nurlan on holiday last week?",
      options: [
        "Were",
        "Is",
        "Was",
      ],
      correctAnswer: "Was",
    },
    {
      id: 24,
      question: "24) Do you like my new jeans? I bought _____ this morning.",
      options: [
        "it",
        "them",
        "they",
      ],
      correctAnswer: "them",
    },
    {
      id: 25,
      question: "25)  _____ Madina and Serik speak Russian?",
      options: [
        "Does",
        "Do",
        "Are",
      ],
      correctAnswer: "Do",
    },
    {
      id: 26,
      question: "26) This is my husband's sister. _____ name's Saule.",
      options: [
        "Her",
        "His",
        "She's",
      ],
      correctAnswer: "Her",
    },
    {
      id: 27,
      question: "27)  _____ any people in the shop now.",
      options: [
        "There's",
        "There aren't ",
        "There are",
      ],
      correctAnswer: "There aren't ",
    },
    {
      id: 28,
      question: "28) I'm sorry, but you _____ park here.",
      options: [
        "can't",
        "are",
        "can",
      ],
      correctAnswer: "can't",
    },
    {
      id: 29,
      question: "29) Did you see Altynshash this morning? Yes, I sat next to _____ on the bus.",
      options: [
        "she",
        "me",
        "her",
      ],
      correctAnswer: "her",
    },
    {
      id: 30,
      question: "30) Adil and Marat _____ at work yesterday.",
      options: [
        "weren't",
        "aren't",
        "wasn't",
      ],
      correctAnswer: "weren't",
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
