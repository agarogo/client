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
                "Ленский мост, который планируют построить в Якутии, представляет собой важнейший элемент,\n способный изменить транспортную доступность и экономическую динамику всего региона.\n Якутия, с её уникальными природными условиями и удалённостью от центральных районов России,\n сталкивается с множеством проблем, связанных с транспортной инфраструктурой.\n\nВ настоящее время более 400 тысяч жителей региона испытывают трудности с передвижением, особенно в летний период,\n когда временные переправы становятся единственным способом пересечения реки Лена. Эти проблемы не только затрудняют повседневную жизнь местных жителей,\n но и ограничивают возможности для бизнеса и торговли, что в свою очередь сказывается на общем уровне жизни населения.",
        },
        {
            title: "Актуальность",
            content:
                "Aктуальность работы обусловлена тем, что строительство Ленского моста, стоимость которого составляет 131,4 млрд рублей,\n обещает кардинально изменить ситуацию. Проект финансируется из различных источников,\n включая 30% внебюджетных средств, 26 млрд рублей из регионального бюджета и 65 млрд рублей из федерального бюджета. \nЭто многоуровневое финансирование подчеркивает важность проекта для всей страны и его значимость для развития Якутии.\n В условиях, когда инфраструктурные проекты становятся ключевыми для экономического роста,\n Ленский мост может стать символом нового этапа в развитии региона.",
        },
        {
            title: "Ленский мост – ворота в будущее",
            content:
                "· Мост станет ключевым элементом транспортной инфраструктуры Якутии и всего Дальнего Востока.\n· Интеграция региона в транспортную систему России.\n· Новые возможности для развития промышленности, сельского хозяйства и туризма.\n· Повышение инвестиционной привлекательности региона.",
        },
        {
            title: "Пример параметров Ленского моста",
            content:
                "· Длина — 4,6 км, из них 2,5 км в русловой части. \n· Ширина — 21 м. \n· Высота конструкции (высота центрального пилона над расчётным судоходным уровнем реки) — 276 м. \n· Подмостовой габарит — 17 х 280 м. \n· Количество полос движения — 2. \n· Длина основных русловых пролётов — 2 по 840 м. \n· Высота боковых пилонов — 194,5 м. \n · Длина левобережной эстакады — 0,14 км. \n· Длина основного моста — 2,49 км. \n· Длина правобережной эстакады — 1,98 км. \n · Мост должен пройти от села Старая Табага до села Хаптагай Мегино-Кангаласского улуса.",
        },
        {
            title: "Начало строительства планировалось 2024 году, но",
            content:
                "В Министерстве транспорта Якутии объяснили, что строительство моста зависит от федерального финансирования,\n которое пока в необходимом объёме не выделено. График производства работ по строительству второго этапа сформирован \n с учётом сроков предоставления федерального финансирования с 2025 года, поэтому основные работы по сооружению моста начнутся с 2025 года. ",
        },
        {
            title: "По информации на февраль 2025 года, для строительства Ленского моста уже выполнено несколько работ:",
            content:
                "· Доставлена тяжёлая спецтехника. Для правобережного подхода моста привезли вторую буровую машину и спецавтокран.  \n· Разгружено 1144 тонны металлоконструкций.  \n· На левом берегу со стороны Якутска продолжается устройство буронабивных свай для опор моста, сварка армирующих каркасов.  \n· Ведется работы по переносу русла реки Таммы для исключения подтоплений.  \nДля двух опор будущего моста уже готовы 53 буронабивных сваи.  \n· Рабочие приступили к обустройству четвёртой опоры. Для этого этапа изготовлены 54 арматурных каркаса, которые стыкуют друг с другом,\n чтобы затем погрузить глубоко под землю и залить бетоном.  \n· Ленский мост планируют построить до конца 2028 года. ",
        },
        {
            title: "Выводы",
            content: "Ленский мост это прямой путь к процветанию якутии который сильно изменит жизнь жителей республики и\n для жителей других городов которые давно хотели посетить столицу алмазов и родину вечной мерзлоты",
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
