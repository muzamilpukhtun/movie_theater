import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Movies from './components/Movies';
export default function Home() {
  return (
    // <main className="min-h-screen bg-gray-800 text-gray-100">
    //   <Navbar />
      
    //   {/* Hero Section */}
    //   <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    //     <div className="max-w-7xl mx-auto">
    //       <div className="text-center">
    //         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
    //           Hi, I'm <span className="text-blue-400">Developer</span>
    //         </h1>
    //         <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
    //           Full Stack Developer | Problem Solver | Tech Enthusiast
    //         </p>
    //         <div className="flex justify-center space-x-4">
    //           <a
    //             href="#projects"
    //             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
    //           >
    //             View My Work
    //           </a>
    //           <a
    //             href="#contact"
    //             className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition duration-300"
    //           >
    //             Contact Me
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* About Section */}
    //   <section id="about" className="py-20 bg-gray-900">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
    //       <div className="grid md:grid-cols-2 gap-12 items-center">
    //         <div>
    //           <p className="text-gray-300 mb-4">
    //             I'm a passionate developer with expertise in building modern web applications.
    //             My journey in software development has been driven by a love for problem-solving
    //             and creating elegant solutions.
    //           </p>
    //           <p className="text-gray-300">
    //             With experience in both frontend and backend development, I bring a comprehensive
    //             approach to building scalable and user-friendly applications.
    //           </p>
    //         </div>
    //         <div className="grid grid-cols-2 gap-4">
    //           <div className="bg-gray-800 p-6 rounded-lg">
    //             <h3 className="text-xl font-semibold mb-2">Frontend</h3>
    //             <p className="text-gray-300">React, Next.js, TypeScript</p>
    //           </div>
    //           <div className="bg-gray-800 p-6 rounded-lg">
    //             <h3 className="text-xl font-semibold mb-2">Backend</h3>
    //             <p className="text-gray-300">Node.js, Python, SQL</p>
    //           </div>
    //           <div className="bg-gray-800 p-6 rounded-lg">
    //             <h3 className="text-xl font-semibold mb-2">DevOps</h3>
    //             <p className="text-gray-300">Docker, AWS, CI/CD</p>
    //           </div>
    //           <div className="bg-gray-800 p-6 rounded-lg">
    //             <h3 className="text-xl font-semibold mb-2">Tools</h3>
    //             <p className="text-gray-300">Git, VS Code, Figma</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Projects Section */}
    //   <section id="projects" className="py-20">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
    //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {/* Project Cards */}
    //         <div className="bg-gray-900 rounded-lg overflow-hidden">
    //           <div className="h-48 bg-gray-700"></div>
    //           <div className="p-6">
    //             <h3 className="text-xl font-semibold mb-2">Project One</h3>
    //             <p className="text-gray-300 mb-4">
    //               A modern web application built with React and Node.js
    //             </p>
    //             <div className="flex space-x-2">
    //               <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
    //                 React
    //               </span>
    //               <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
    //                 Node.js
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="bg-gray-900 rounded-lg overflow-hidden">
    //           <div className="h-48 bg-gray-700"></div>
    //           <div className="p-6">
    //             <h3 className="text-xl font-semibold mb-2">Project Two</h3>
    //             <p className="text-gray-300 mb-4">
    //               An e-commerce platform with real-time features
    //             </p>
    //             <div className="flex space-x-2">
    //               <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
    //                 Next.js
    //               </span>
    //               <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
    //                 MongoDB
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="bg-gray-900 rounded-lg overflow-hidden">
    //           <div className="h-48 bg-gray-700"></div>
    //           <div className="p-6">
    //             <h3 className="text-xl font-semibold mb-2">Project Three</h3>
    //             <p className="text-gray-300 mb-4">
    //               A mobile-responsive dashboard with analytics
    //             </p>
    //             <div className="flex space-x-2">
    //               <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
    //                 TypeScript
    //               </span>
    //               <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
    //                 Tailwind
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Contact Section */}
    //   <section id="contact" className="py-20 bg-gray-900">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
    //       <div className="max-w-2xl mx-auto">
    //         <form className="space-y-6">
    //           <div>
    //             <label htmlFor="name" className="block text-sm font-medium text-gray-300">
    //               Name
    //             </label>
    //             <input
    //               type="text"
    //               id="name"
    //               className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="email" className="block text-sm font-medium text-gray-300">
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="message" className="block text-sm font-medium text-gray-300">
    //               Message
    //             </label>
    //             <textarea
    //               id="message"
    //               rows={4}
    //               className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
    //             ></textarea>
    //           </div>
    //           <div>
    //             <button
    //               type="submit"
    //               className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
    //             >
    //               Send Message
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </section>

    //   <Footer />
    // </main>
    <>
    <Movies/>
    </>
  );
} 