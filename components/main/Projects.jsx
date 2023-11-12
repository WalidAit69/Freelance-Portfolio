"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "ROOMSY",
    img: "https://ucarecdn.com/5308eee3-eae5-4db9-aaa1-ca433abee310/",
    link:"https://roomsy-v2.vercel.app/",
    desc: "Roomsy is a streamlined web application dedicated to simplifying the booking process for accommodations. Whether you're looking for a hotel room, vacation rental, or any other lodging, Roomsy offers a user-friendly platform that allows users to search, compare, and book a wide range of options with ease.",
  },
  {
    id: 2,
    title: "AI CHAT",
    img: "https://ucarecdn.com/ab534461-ea7a-4f14-9196-f601dae525c1/",
    link:"https://ai-chat-app-six.vercel.app/",
    desc: "AI Chat is a web-based chat application powered by advanced artificial intelligence technology. It seamlessly translates messages in real-time, enabling users to communicate effortlessly in multiple languages.",
  },
  {
    id: 3,
    title: "BULLETIN",
    img: "https://ucarecdn.com/9955fc6b-c3c3-422f-b274-3f06f8d4387f/",
    link:"https://buletin-v2.vercel.app/",
    desc: "Buletin is a dynamic and user-friendly web application designed to serve as a versatile platform for blogging and delivering the latest news.It provides an intuitive interface for bloggers and journalists to create and publish content, including articles, opinion pieces, and news updates.",
  },
  {
    id: 4,
    title: "BETTER AI",
    img: "https://ucarecdn.com/acabfa0e-a21c-485c-9f73-4a4bca64195a/",
    link:"https://better-ai-five.vercel.app/",
    desc: "Better AI is a versatile web application powered by advanced artificial intelligence technology. It empowers users to effortlessly create images, videos, sounds, code, and engage in natural conversations, making it a dynamic and creative tool for a wide range of applications. Whether you need content generation, multimedia creation, or interactive chatbots, Better AI offers a powerful and user-friendly solution to enhance productivity and creativity"
  },
  {
    id: 5,
    title: "SOCIAL MEDIA",
    img: "https://ucarecdn.com/892af20c-5205-4e4d-b478-7b14ba7fc5d0/",
    link:"https://green-social-media.vercel.app/",
    desc: "social media app is a modern web application that creates a feature-rich and interactive platform for social networking."
  },
];



const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="projects">
      <div className="flex flex-col md:flex-row mt-10 md:mt-0 items-center justify-center w-full h-full overflow-hidden">
        <div className="max-w-7xl h-auto flex flex-col md:flex-row items-center justify-center gap-[50px]">
          <div className="flex-1 h-[50%] w-full max-h-full" ref={ref}>
            <img src={item.img} className="w-full h-full object-contain md:object-cover" alt="" />
          </div>
          <motion.div className="text-center items-center md:items-start md:text-start p-3 flex flex-1 flex-col gap-7 text-white transform-none z-50 mt-64 md:mt-0" style={{ y }}>
            <h2 className="text-4xl md:text-6xl font-bold">{item.title}</h2>
            <p className="text-gray-500 text-base md:text-xl">{item.desc}</p>
            <a href={item.link} target="_blank" className="bg-indigo-600 border-none rounded-lg p-3 w-52 cursor-pointer text-center hover:scale-105 hover:bg-transparent transition-all">See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky md:top-5 top-[calc(100% - 100px)] left-0 md:pt-[50px] pt-[calc(100vh - 100px)] text-center text-indigo-600 md:text-4xl font-bold text-2xl">
        <h1 className="md:text-6xl text-4xl font-bold">Featured Projects</h1>
        <motion.div style={{ scaleX }} className="h-1 bg-white"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
