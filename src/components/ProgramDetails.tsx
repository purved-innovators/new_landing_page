import { Building2, Calculator, Brain, Clock } from 'lucide-react';

const highlights = [
  {
    icon: Building2,
    text: "Access to Dubai's $100+ billion real estate market",
  },
  {
    icon: Calculator,
    text: 'Master payment plans: 30/70 and 60/40 models',
  },
  {
    icon: Brain,
    text: 'Learn the psychology of selling to international investors',
  },
  {
    icon: Clock,
    text: 'Build a sustainable 24/7 income stream',
  },
];

export default function ProgramDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Global Associates Referral Program Stands Apart
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Global Associates Referral Program gives you access to exclusive events and VIP networking opportunities that set you apart from the competition. Over 8 intensive weeks, you'll gain insider knowledge of Dubai's $100+ billion real estate market, learning directly from industry leaders who have facilitated thousands of successful transactions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">What Makes Us Different:</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Our program goes beyond basic referral arrangements. You'll understand payment plans like 30/70 and 60/40 models, master ROI calculations for different property types, and learn the psychology of selling to international investors around the world.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Learn how to become a referral real estate agent specializing in Dubai properties while building a sustainable income stream that works 24/7. Understanding what is a referral in real estate is the first step to maximizing your earning potential in this booming market.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-6 bg-gradient-to-r from-amber-50 to-transparent border border-amber-100 rounded-xl hover:border-amber-300 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <p className="text-slate-800 font-semibold pt-3 text-lg">
                    {highlight.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
