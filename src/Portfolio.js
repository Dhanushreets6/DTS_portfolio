import React from "react";
import './index.css';
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* Hero Section */}
      <div className="relative h-[90vh] md:h-screen overflow-hidden">
        <img
          src="/background.jpg"
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700/50 to-purple-500/30 z-10"></div>

        {/* Animated Centered Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-10 left-0 md:left-1/4 transform -translate-x-1/2 text-3xl md:text-6xl font-extrabold text-white bg-purple-800 bg-opacity-60 px-8 py-4 rounded-xl shadow-lg z-20 text-center"
        >
          DHANUSHREE T S GOWDA
        </motion.h1>

         {/* Animated Centered Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-40 md:top-44 left-0 transform -translate-x-1/2 text-4xl md:text-8xl font-extrabold text-white bg-purple-800 bg-opacity-60 px-6 py-4 rounded-xl shadow-lg z-20 text-center"
        >
          DTS
        </motion.h1>

        {/* Animated Info Block */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-80 right-6 text-1xl md:text-2xl text-right text-white font-medium drop-shadow-md z-20 space-y-1  ml-auto"
>
  <p>Age: 22</p>
  <p>Height: 5'5"</p>
  <p>Education: Engineer (CS)</p>
  <p>Occupation: Aspiring and<br/> Respected Actress</p>
</motion.div>
      </div>

      
      

    {/* Gallery Section */}
<motion.section
  className="w-full px-4 py-6 grid gap-6 grid-cols-1 md:grid-cols-2"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.15 }}
>
  {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18].map((num) => (
    <motion.div
      key={num}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="relative w-full min-w-0 rounded-2xl overflow-hidden shadow-xl border border-purple-200 hover:border-fuchsia-400 hover:shadow-2xl"
    >
      {/* Blurred background */}
      <img
        src={`/image${num}.jpg`}
        alt={`Background ${num}`}
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent z-10" />

      {/* Foreground image */}
      <img
        src={`/image${num}.jpg`}
        alt={`Portfolio ${num}`}
        className="relative z-20 w-full object-cover aspect-[3/4] rounded-2xl"
      />
    </motion.div>
  ))}

  {/* Quote block at the end */}
  <motion.div
    className="col-span-1 md:col-span-2 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white rounded-xl shadow-2xl text-center py-8 px-6 text-1xl md:text-3xl font-semibold italic tracking-wide"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    ""Acting is my passion — I aspire to become a respected and inspiring heroine.""
  </motion.div>
</motion.section>


<section className="py-10 px-4 space-y-8">
  <h2 className="text-1xl md:text-3xl font-bold text-center text-purple-800">My Introduction</h2>
  <div className="grid grid-cols-1 ">
    <video controls className="w-1/2 mx-auto rounded-lg shadow-md">
      <source src="/DTS_intro.mp4" type="video/mp4" />
    </video>
  </div>
</section>

<section className="py-10 px-4 space-y-8">
  <h2 className="text-1xl md:text-3xl font-bold text-center text-purple-800">My Performances</h2>
  <div className="grid grid-cols-1 ">
     <video controls className="w-full rounded-lg shadow-md">
      <source src="/DTS_acting1.mp4" type="video/mp4" />
    </video>
  </div>

  <div className="grid grid-cols-1 ">
    <video controls className="w-1/2 mx-auto rounded-lg shadow-md">
      <source src="/DTS_2024video.mp4" type="video/mp4" />
    </video>
  </div>
</section>
  


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <motion.h3
          className="text-base md:text-xl font-bold mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Contact Me
        </motion.h3>
        <motion.div 
        className="text-base md:text-xl mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <p>Name: Dhanushree T S Gowda</p>
          <p>Instagram : dhanushreets_gowda06</p>
          <p>Email: dhanushreets6@gmail.com</p>
          <p>Youtube: Not yet publiched</p>
        </motion.div>
        <div className="flex justify-center gap-6 mt-4">
          <motion.a
            href="https://www.instagram.com/dhanushreets_gowda06"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@dtsmythsandtalks"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
          </motion.a>
        </div>
        <p className="mt-4 text-sm text-gray-400">&copy; 2025 Dhanushree T S Gowda. All rights reserved.</p>
      </footer>
    </div>
  );
}
