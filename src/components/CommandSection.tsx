import React from 'react';

const commands = [
  {
    command: '/chat send',
    description: 'WestAIとの対話を開始',
  },
  {
    command: '/chat reset',
    description: '会話履歴の初期化',
  },
  {
    command: '/chat settings',
    description: 'メッセージ表示設定の変更',
  },
];

export function CommandSection() {
  return (
    <section className="py-12" id="commands">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">コマンド一覧</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">コマンド</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-200">説明</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {commands.map((cmd) => (
                <tr key={cmd.command} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-200">{cmd.command}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{cmd.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}