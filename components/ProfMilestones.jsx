import React from 'react';

const ProfMilestones = () => {
  return (
    <section className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          
          {/* Left Section - Milestones */}
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {/* Lead Developer (NoOffice.no) */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 bg-black inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Lead Developer (NoOffice.no)</h2>
                <ul className="list-disc ml-4 text-gray-400">
                  <p className='text-white -ml-4'>2021- Present</p>
                  <li>Developed AssistIT and ISOEnsure apps</li>
                  <li>Built proprietary LLM app CI/CD pipelines</li>
                  <li>Recognized for creating no-code agentic framework</li>
                </ul>
              </div>
            </div>

            {/* Full Stack Developer (Admit Digital) */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 bg-black inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Full Stack Developer (Admit Digital)</h2>
                <ul className="list-disc ml-4 text-gray-400">
                  <p className='text-white -ml-4'>2020-2021</p>
                  <li>Rebuilt Admit.no to improve UX and SEO</li>
                  <li>Integrated a headless CMS</li>
                  <li>Validated ML pipeline with 1,000 uses in a week</li>
                </ul>
              </div>
            </div>

            {/* Product Developer (Kaala.ai) */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 bg-black inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Product Developer (Kaala.ai)</h2>
                <ul className="list-disc ml-4 text-gray-400">
                  <p className='text-white -ml-4'>20'May-20'Dec</p>
                  <li>Developed mobile apps using native and no-code tools</li>
                  <li>Specialized in GSAP motion graphics and Tailwind</li>
                  <li>Rapid prototyping for product design</li>
                </ul>
              </div>
            </div>

            {/* MSc & System Engineering (NTNU) */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 bg-black inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">MSc + Teaching Assistant- Systems Engineering (NTNU)</h2>
                <ul className="list-disc ml-4 text-gray-400">
                  <p className='text-white -ml-4'>2018-2020</p>
                  <li>Moved to Norway</li>
                  <li>Specialized in deep reinforcement learning</li>
                  <li>Contributed to research on marine power control</li>
                  <li>Higher Calculus & TA of Systems Engineering</li>
                </ul>
              </div>
            </div>

            {/* Product Dev at GPI Textiles */}
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 bg-black inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">Product Developer (GPI Textiles)</h2>
                <ul className="list-disc ml-4 text-gray-400">
                  <p className='text-white -ml-4'>2016-2017</p>
                  <li>Graphics and WEB design</li>
                  <li>Packaging Design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:w-3/5 md:w-1/2 w-full mt-4 md:pl-10 md:py-6 h-fit border p-8 rounded-lg shadow-md">
            <h2 className="text-white text-lg font-medium title-font mb-5">Contact Me</h2>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-gray-500 focus:ring-2 focus:ring-gray-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Send</button>
            <div className="mt-4 text-gray-400">
              <p>Email: <a href="mailto:swapnil@nooffice.no" className="text-gray-500">swapnil@nooffice.no</a></p>
              <p>Phone: <a href="tel:+40565790" className="text-gray-500">40565790</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProfMilestones;
