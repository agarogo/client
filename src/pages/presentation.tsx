import { useState } from "react";

export default function Presentation() {
    const slides = [
        {
            custom: (
                <section className="res w-full h-full flex flex-col justify-center items-center text-white px-4 sm:px-8 text-center rounded-[32px]">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 mon drop-shadow-lg">Ленский мост</h1>
                    <p className="text-lg sm:text-xl drop-shadow-md">
                        Выполнила: Слепцова Валентина, ПИ Т-24
                    </p>
                </section>
            )
        },
        {
            title: "Почему Ленский мост так важен?",
            content:
                "Ленский мост, который планируют построить в Якутии, представляет собой важнейший элемент, способный изменить транспортную доступность и экономическую динамику всего региона. Якутия сталкивается с множеством проблем, связанных с транспортной инфраструктурой. Более 400 тысяч жителей испытывают трудности с передвижением. Это ограничивает возможности для бизнеса, торговли и уровень жизни населения.",
        },
        {
            title: "Актуальность",
            content:
                "Строительство Ленского моста стоимостью 131,4 млрд рублей финансируется из регионального и федерального бюджета. Это стратегически важный проект для интеграции Якутии в транспортную систему России.",
        },
        {
            title: "Ленский мост – ворота в будущее",
            content:
                "· Ключевой элемент инфраструктуры региона\n· Интеграция с транспортной системой страны\n· Развитие промышленности и туризма\n· Повышение инвестиционной привлекательности",
        },
        {
            title: "Пример параметров Ленского моста",
            content:
                "· Длина — 4,6 км\n· Высота центрального пилона — 276 м\n· Количество полос — 2\n· Подмостовой габарит — 17 х 280 м",
        },
        {
            title: "Начало строительства",
            content:
                "Основные работы перенесены на 2025 год из-за ожидания федерального финансирования.",
        },
        {
            title: "Ход строительства (февраль 2025)",
            content:
                "· Доставлена спецтехника\n· Разгружено 1144 т металлоконструкций\n· Выполнено 53 сваи\n· Строительство четвёртой опоры",
        },
        {
            title: "Выводы",
            content:
                "Ленский мост изменит жизнь Якутии, обеспечив доступность, экономический рост и туризм.",
        },
        {
            title: "Спасибо за внимание",
            content: "",
        },
    ];

    const [current, setCurrent] = useState(0);

    const Left = () => {
        if (current > 0) setCurrent(current - 1);
    };

    const Right = () => {
        if (current < slides.length - 1) setCurrent(current + 1);
    };

    return (
        <section className="h-[80vh] max-w-[90vw] mx-auto my-5 bg-white rounded-[32px] relative overflow-hidden flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">
            <div className="max-w-screen-md w-full overflow-y-auto h-full py-6 sm:py-10 text-center">
                {slides[current].custom ? (
                    slides[current].custom
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-4xl mon mb-4">{slides[current].title}</h2>
                        <p className="whitespace-pre-line text-base sm:text-lg text-[#0A1044]">{slides[current].content}</p>
                    </div>
                )}
            </div>

            <div className="absolute inset-0 flex">
                <div
                    onClick={Left}
                    className="w-1/2 h-full cursor-pointer transition-all duration-300 hover:w-[55%] bg-transparent"
                />
                <div
                    onClick={Right}
                    className="w-1/2 h-full cursor-pointer transition-all duration-300 hover:w-[55%] bg-transparent"
                />
            </div>

            <div className="absolute bottom-4 text-center text-sm text-gray-500 w-full">
                Слайд {current + 1} из {slides.length}
            </div>
        </section>
    );
}
