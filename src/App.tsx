import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { UsageSection } from './components/UsageSection';
import { CommandSection } from './components/CommandSection';
import { FeatureCard } from './components/FeatureCard';
import { MessageSquare, Brain, Settings, RotateCcw, Users, Shield, Zap, Code } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: '自然言語での対話機能',
    description: 'スムーズで自然な会話体験を提供します'
  },
  {
    icon: Brain,
    title: '会話文脈の保持と管理',
    description: '文脈を理解した継続的な対話が可能です'
  },
  {
    icon: Settings,
    title: 'メッセージ表示設定',
    description: '表示設定をカスタマイズ可能です'
  },
  {
    icon: RotateCcw,
    title: '会話履歴のリセット',
    description: '新しい会話を簡単に開始できます'
  },
  {
    icon: Users,
    title: 'コミュニティ対応',
    description: 'Web3コミュニティに特化した応答が可能です'
  },
  {
    icon: Shield,
    title: 'セキュリティ重視',
    description: '安全な会話環境を提供します'
  },
  {
    icon: Zap,
    title: '高速レスポンス',
    description: '素早い応答でスムーズな会話を実現'
  },
  {
    icon: Code,
    title: 'カスタマイズ可能',
    description: '柔軟な設定オプションを提供'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Header />
      
      <main className="space-y-20">
        <HeroSection />

        <section className="py-20 bg-gray-50 dark:bg-black" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fadeIn">主要機能</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <UsageSection />
        <CommandSection />
      </main>

      <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Developed by{' '}
            <a
              href="https://x.com/yblockchain_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              yblockchain_
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;