import { GraduationCap, Users, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: GraduationCap,
    title: 'Learn',
    description: 'Complete our exclusive 8-week training program led personally by Sania Khan, CEO of Best Town Realty. Master Dubai\'s real estate laws, understand top developers in Dubai, and learn proven investment strategies that attract international buyers.',
  },
  {
    icon: Users,
    title: 'Refer',
    description: 'Use your newfound expertise to identify and refer qualified clients interested in Dubai properties. Whether you\'re a friends real estate broker or an independent agent, our program welcomes all professionals ready to expand their reach.',
  },
  {
    icon: DollarSign,
    title: 'Earn',
    description: 'Receive the same commission structure as our Dubai-based agents, plus exclusive perks like VIP event invitations, sponsored trips, and recognition awards. Our streamlined process ensures you get paid quickly and transparently.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How Global Associates Referral Program Works
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The Global Associates Referral Program connects international real estate professionals with Dubai's thriving property market through a simple three-step process:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent -ml-6"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
