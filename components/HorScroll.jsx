// components/HorizontalScroller.js
import React, { useRef } from 'react';

const HorizontalScroller = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll amount here
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll amount here
        behavior: 'smooth',
      });
    }
  };

  const items = [
    {
      title: 'NoOffice',
      description: 'UX and UI Design of a remote work platform for managing projects and teams efficiently.',
      skills: ['GenAI', 'CMS', 'SEO', 'UI/UX'],
      imageLink: 'https://i.ibb.co/wwHPN9Y/image-1-3.png',
      link: 'https://nooffice.no',
    },
    {
      title: 'ISOEnsure',
      description: 'LLM powered Local Desktop Application for ensuring ISO compliance in organizations.',
      skills: ['PyQt6', 'Python', 'OpenAI API', 'LLM', 'RAG', 'AiAgents'],
      imageLink: 'https://i.ibb.co/8YxR8tg/image-2.png',
    },
    {
      title: 'AssistIT',
      description: 'An LLM Powered Web Application for automating IT support tasks and ticketing systems.',
      skills: ['Next.js', 'Flask', 'OpenAI API', 'LocalLLM', 'Multimodal RAG'],
      imageLink: 'https://i.ibb.co/Chv5RWX/Picture1.png',
    },
    {
      title: 'Admit.no',
      description: 'A website for digital consulting agency with a focus on UX and SEO optimization.',
      skills: ['NextJS', 'SEO', 'Google Analytics'],
      imageLink: 'https://i.ibb.co/Nj9gv2D/image-3.png',
      link: 'https://admit.no',
    },
  ];

  return (
    <div className="w-full h-full bg-black py-10 relative">
      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide space-x-4 px-4 py-4 snap-x snap-mandatory md:ml-6 touch-pan-x"
      >
        {/* First Component: A normal text element */}
        <div className="md:w-[500px] w-3/4 flex-shrink-0 text-left bg-transparent snap-start">
          <p className="text-gray-300 pt-4 md:text-4xl text-2xl font-extralight ml-4 z-100">
            I strive to bring creative ideas to life with the help of modern technologies. While a
            good design is essential, the functionality of the app is equally important. I have
            experience in building apps for both Web and Mobile platforms. I focus on creating a
            seamless user experience with a clean and intuitive interface.
          </p>
          <p className="text-gray-400 pt-4 md:text-xl text-xl font-bold ml-4 mt-4 z-100">
            {'Scroll -> to see projects'}
          </p>
        </div>

        {/* Cards in the horizontal scroll */}
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[250px] cursor-pointer md:min-w-[300px] lg:min-w-[350px] w-4/5 md:w-1/2 lg:w-1/3 h-[500px] bg-[#0e1111] border border-gray-500 border-opacity-50 rounded-lg shadow-md p-4 flex-shrink-0 text-left snap-start bg-opacity-50 hover:border-gray-400 hover:bg-opacity-100 transition-all duration-300"
          >
            {/* Top half with image */}
            <div className="h-[40%]">
              <img
                src={item.imageLink}
                alt={item.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Bottom half with content */}
            <div className="h-[60%] pt-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-200">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap mt-4 gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-sm text-gray-300 border border-gray-500 rounded-full px-3 py-1 hover:text-white hover:border-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom Scroll Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="bg-gray-700 text-white p-3  shadow-md hover:bg-gray-600 focus:outline-none"
        >
        {"<"}
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="bg-gray-700 text-white p-3  shadow-md hover:bg-gray-600 focus:outline-none"
        >
        {">"}
        </button>
      </div>
    </div>
  );
};

export default HorizontalScroller;
