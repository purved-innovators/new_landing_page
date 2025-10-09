import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Who can join the Global Associates Referral Program?',
    answer: 'Real estate agents, brokers, independent consultants, and professionals worldwide who want to expand into Dubai property investments. No prior Dubai market experience required.',
  },
  {
    question: 'How much does the training program cost?',
    answer: 'The 8-week training program is provided at no cost to accepted associates. We invest in your success because we believe in long-term partnerships.',
  },
  {
    question: 'Do I need to relocate to Dubai?',
    answer: 'No. The entire program is designed for remote participation. All training sessions are conducted via Zoom, and you can operate from your current location.',
  },
  {
    question: 'What ongoing support do I receive?',
    answer: 'Continuous market updates, access to new property launches, marketing materials, and direct support from our Dubai team whenever needed.',
  },
  {
    question: 'How is this different from other referral programs?',
    answer: 'Unlike basic referral arrangements, you receive comprehensive training, direct CEO mentorship, the same commission rates as local agents, and exclusive access to VIP events and networking opportunities.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden transition-all hover:border-amber-500/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
