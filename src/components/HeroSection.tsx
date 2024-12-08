import React from 'react';
import { Bot, Github } from 'lucide-react';
import { XIcon } from './icons/XIcon';

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-black -z-10" />
      <div className="max-w-4xl mx-auto text-center relative">
        <Bot className="w-20 h-20 mx-auto mb-8 text-blue-600 dark:text-blue-400 animate-bounce" />
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeIn">
          WestAI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fadeIn animation-delay-200">
          Cohere社が提供するLLMモデルを活用した学生トーク特化型AI
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fadeIn animation-delay-400">
          <a
            href="https://x.com/Web3studenttalk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            <XIcon className="w-5 h-5 mr-2" />
            コミュニティを見る
          </a>
          <a
            href="https://github.com/yblockcha1n/Web3StudentTalk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 dark:bg-black text-white hover:bg-gray-700 dark:hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}