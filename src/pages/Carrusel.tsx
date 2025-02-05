import { Carousel } from "@material-tailwind/react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image';

interface CarouselProps {
    loop: boolean;
    handlePrev: () => void; // Tipo explícito para handlePrev como una función que no devuelve nada (void)
    firstIndex: boolean;
    handleNext: () => void;
    lastIndex: boolean;
    setActiveIndex: (index: number) => void; // Tipo explícito para setActiveIndex como una función que toma un número y no devuelve nada (void)
    activeIndex: number;
    length: number;
}

export function Carrusel() {
    const theme = {
        carousel: {
            defaultProps: {
                prevArrow: ({ loop, handlePrev, firstIndex }: CarouselProps) => {
                    return (
                        <button
                            onClick={handlePrev}
                            disabled={!loop && firstIndex}
                            className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
                        >
                            <FaChevronLeft strokeWidth={3} className="-ml-1 h-7 w-7" />
                        </button>
                    );
                },
                nextArrow: ({ loop, handleNext, lastIndex }: CarouselProps) => (
                    <button
                        onClick={handleNext}
                        disabled={!loop && lastIndex}
                        className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
                    >
                        <FaChevronRight strokeWidth={3} className="ml-1 h-7 w-7" />
                    </button>
                ),
                navigation: ({ setActiveIndex, activeIndex, length }: CarouselProps) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${activeIndex === i ? "bg-white" : "bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                ),
                autoplay: false,
                autoplayDelay: 5000,
                transition: {
                    type: "tween",
                    duration: 0.5,
                },
                loop: false,
                className: "",
            },
            styles: {
                base: {
                    carousel: {
                        position: "relative",
                        width: "w-full",
                        height: "h-full",
                        overflowX: "overflow-x-hidden",
                        display: "flex",
                    },

                    slide: {
                        width: "w-full",
                        height: "h-full",
                        display: "inline-block",
                        flex: "flex-none",
                    },
                },
            },
        },
    };

    return (
        <Carousel className="rounded-xl w-1/3 ml-auto md:ml-12">
            <Image
                src={'/images/catering3.jpg'}
                alt="image 1"
                width={400}
                height={500}
                className="carrusel w-full h-full object-cover"
            />
            <Image
                src={'/images/cateringpaella.jpg'}
                alt="image 2"
                width={400}
                height={500}
                className="carrusel w-full h-full object-cover"
            />
            <Image
                src={'/images/catering6.jpg'}
                alt="image 3"
                width={400}
                height={500}
                className="carrusel w-full h-auto object-cover"
            />

        </Carousel>
    );
}
export default Carrusel