import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 animate-fadeIn">
          <nav className="flex flex-col p-4 space-y-4">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">機能</a>
            <a href="#commands" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">コマンド</a>
            <a href="#usage" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">使い方</a>
            <a href="https://github.com/yblockcha1n/Web3StudentTalk" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">GitHub</a>
          </nav>
        </div>
      )}
    </div>
  );
}