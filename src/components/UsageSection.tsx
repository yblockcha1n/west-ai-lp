import React from 'react';
import { MessageSquare, Settings, RefreshCw } from 'lucide-react';

const usageSteps = [
  {
    icon: <MessageSquare className="w-12 h-12" />,
    title: '対話を開始',
    description: '/chat send コマンドを使用してWestAIとの会話を始めます。自然な日本語で質問や会話ができます。'
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: '設定のカスタマイズ',
    description: '/chat settings で応答の表示方法や会話スタイルをカスタマイズできます。'
  },
  {
    icon: <RefreshCw className="w-12 h-12" />,
    title: '会話のリセット',
    description: '新しい話題で会話を始めたい場合は、/chat reset で履歴をクリアできます。'
  }
];

export function UsageSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black" id="usage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fadeIn">使い方</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {usageSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-950 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}