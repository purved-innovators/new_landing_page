import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ceo@besttownrealty.ae',
    link: 'mailto:ceo@bestownrealty.ae',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+971 58 552 3700',
    link: 'tel:+971585523700',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Office No 1305, The Regal Tower, Business Bay, Dubai',
    link: null,
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'Best Town Realty - Global Associates',
    link: 'https://www.bestownrealty.ae/',
  },
];

export default function Contact() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Information</h2>
          <p className="text-slate-300 text-lg">
            Have questions? Our team is here to help you get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-amber-400 mb-2 uppercase tracking-wider">
                    {item.label}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block transform hover:-translate-y-1 transition-transform"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        <div className="mt-12 pt-12 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Best Town Realty. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
