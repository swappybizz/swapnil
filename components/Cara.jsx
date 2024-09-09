import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Fullstack ML/AI Development',
    description: 'Expert in designing and developing fullstack applications powered by machine learning and artificial intelligence.',
    mini_description: 'ML/AI Development',
    // image: 'https://picsum.photos/200/300.jpg',
    link: '#'
  },
  {
    title: 'Generative AI Solutions',
    description: 'Proficient in creating generative AI solutions using state-of-the-art models and techniques.',
    mini_description: 'Generative AI',
    // image: 'https://picsum.photos/seed/picsum/200/300',
    link: '#'
  },
  {
    title: 'OpenAI & LL Powered Applications',
    description: 'Skilled in leveraging OpenAI and large language models to build intelligent applications.',
    mini_description: 'OpenAI & LLM Models',
    // image: 'https://picsum.photos/200/300?grayscale',
    link: '#'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // Timer duration in seconds
  const slideDuration = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 100 / (slideDuration * 10)));
    }, 100);

    if (progress >= 100) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }

    return () => clearInterval(interval);
  }, [progress]);

  // Function to handle clicking on progress bar
  const handleProgressBarClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);  // Reset progress when manually switching slides
  };

  return (
    
    <div className="relative w-full h-[600px] bg-black">
      {/* Carousel Images */}
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* <img src={slide.image} alt={slide.title} className="w-full h-full object-cover grayscale" /> */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center px-10 text-white">
              <h1 className="text-6xl md:text-[6rem] font-semibold mb-4">{slide.title}</h1>
              <p className="text-lg mb-6 text-gray-300">{slide.description}</p>
              <a href={slide.link} className="px-6 py-3 w-36 border text-white  rounded-lg hover:bg-gray-100">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bars and Tiles */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 ">
        {slides.map((_, index) => (
          <div key={index} className="w-[200px] cursor-pointer" onClick={() => handleProgressBarClick(index)}>
            <div
              className={`h-2  overflow-hidden bg-gray-700  ${
                index === currentSlide ? 'bg-opacity-50' : 'bg-opacity-20'
              }`}
            >
              {index === currentSlide && (
                <div
                  className="bg-white transition-all ease-out h-1"
                  style={{ width: `${progress}%` }}
                ></div>
              )}
            </div>
            <p className="text-gray-400 text-center text-sm mt-1">
              {slides[index].mini_description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
