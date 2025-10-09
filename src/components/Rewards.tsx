import { CheckCircle2, Trophy, Plane, Award, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    text: 'Same commission slabs as Dubai-based agents',
  },
  {
    icon: Users,
    text: 'Personal mentorship from our CEO',
  },
  {
    icon: Award,
    text: 'VIP access to property launches and networking events',
  },
  {
    icon: Plane,
    text: 'Sponsored international roadshow invitations',
  },
  {
    icon: Trophy,
    text: 'Recognition awards for top performers',
  },
  {
    icon: CheckCircle2,
    text: 'Ongoing market updates and support',
  },
];

export default function Rewards() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Earn More Than Any UAE Affiliate Program
          </h2>
          <p className="text-xl text-slate-600 font-semibold mb-6">
            Unlock Dubai-Level Commissions Without Relocating
          </p>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Unlike traditional UAE Affiliate Program models, we provide comprehensive training and ongoing support that transforms you into a certified Dubai property specialist. Our commission structure matches what our in-house Dubai agents earn, giving you access to one of the world's most lucrative real estate markets.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-amber-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Your Exclusive Benefits Include:
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-amber-50/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-slate-700 font-medium pt-2">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-700 font-medium">
              Certificate of completion and official associate status
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
