import { useState, ChangeEvent, FormEvent } from 'react';
import { Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FormData {
  fullName: string;
  email: string;
  contactNo: string;
  whatsappNo: string;
  country: string;
  companyName: string;
  professionalRole: string;
  languagesSpoken: string;
  yearsExperience: string;
  referralEmployeeName: string;
  signature: File | null;
  agreeToTerms: boolean;
  confirmAccuracy: boolean;
}

export default function RegistrationForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    contactNo: '',
    whatsappNo: '',
    country: '',
    companyName: '',
    professionalRole: '',
    languagesSpoken: '',
    yearsExperience: '',
    referralEmployeeName: '',
    signature: null,
    agreeToTerms: false,
    confirmAccuracy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      if (files && files[0]) {
        setFormData(prev => ({ ...prev, signature: files[0] }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.agreeToTerms || !formData.confirmAccuracy) {
      setErrorMessage('Please confirm both agreement checkboxes');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        contactNo: '',
        whatsappNo: '',
        country: '',
        companyName: '',
        professionalRole: '',
        languagesSpoken: '',
        yearsExperience: '',
        referralEmployeeName: '',
        signature: null,
        agreeToTerms: false,
        confirmAccuracy: false,
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="registration-form" className="py-20 sm:py-28 bg-gradient-to-br from-black via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMDAsMjAwLDIwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C0C0C0] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-2 border-[#C0C0C0]/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd]"></div>

          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Best Town Realty - </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd]">
                Global Associates
              </span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#e3e3e3] mb-3">
              Referral Program Registration
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Limited seats available for the first global batch. Applications reviewed within 48 hours.
            </p>
          </motion.div>

          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                className="mb-8 p-6 bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-2 border-green-500 rounded-2xl flex items-start space-x-4 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-200 font-bold text-lg">Registration Submitted Successfully!</p>
                  <p className="text-green-300 text-sm mt-1">We'll review your application and get back to you within 48 hours.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="mb-8 p-6 bg-gradient-to-r from-red-900/50 to-rose-900/50 border-2 border-red-500 rounded-2xl flex items-start space-x-4 shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-200 font-bold text-lg">Submission Error</p>
                  <p className="text-red-300 text-sm mt-1">{errorMessage}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name', required: true },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com', required: true },
                { id: 'contactNo', label: 'Contact No (with Country Code)', type: 'tel', placeholder: '+971 50 123 4567', required: true },
                { id: 'whatsappNo', label: 'WhatsApp No', type: 'tel', placeholder: '+971 50 123 4567', required: true },
                { id: 'country', label: 'Country of Residence', type: 'text', placeholder: 'Enter your country', required: true },
                { id: 'companyName', label: 'Current Company Name', type: 'text', placeholder: 'Company name', required: true },
                { id: 'professionalRole', label: 'Professional Role', type: 'text', placeholder: 'e.g., Real Estate Agent, Broker', required: true },
                { id: 'languagesSpoken', label: 'Languages Spoken', type: 'text', placeholder: 'e.g., English, Arabic, Hindi', required: true },
                { id: 'yearsExperience', label: 'Years of Experience', type: 'text', placeholder: 'e.g., 5 years', required: true },
                { id: 'referralEmployeeName', label: 'Referral Employee Name', type: 'text', placeholder: 'Optional', required: false },
              ].map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-bold text-[#e3e3e3] mb-2">
                    {field.label} {field.required && <span className="text-red-400">*</span>}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof FormData] as string}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl focus:ring-2 focus:ring-[#C0C0C0] focus:border-[#C0C0C0] transition-all text-white placeholder-slate-500 backdrop-blur-sm"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <label htmlFor="signature" className="block text-sm font-bold text-[#e3e3e3] mb-2">
                Signature Upload <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="signature"
                  name="signature"
                  onChange={handleChange}
                  required
                  accept="image/*,.pdf"
                  className="hidden"
                />
                <label
                  htmlFor="signature"
                  className="flex items-center justify-center w-full px-6 py-8 border-2 border-dashed border-[#C0C0C0]/40 rounded-2xl cursor-pointer hover:border-[#C0C0C0] transition-all bg-gradient-to-br from-slate-900/50 to-black/50 hover:shadow-lg group backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-slate-900" />
                    </div>
                    <p className="text-base font-semibold text-slate-300">
                      {formData.signature ? (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd]">{formData.signature.name}</span>
                      ) : (
                        <>Click to upload signature (Image or PDF)</>
                      )}
                    </p>
                  </div>
                </label>
              </div>
            </motion.div>

            <motion.div
              className="border-t-2 border-[#C0C0C0]/20 pt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Agreement & Consent</h4>

              <div className="space-y-4">
                <label className="flex items-start space-x-4 cursor-pointer group p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                  <input
                    type="checkbox"
                    name="confirmAccuracy"
                    checked={formData.confirmAccuracy}
                    onChange={handleChange}
                    required
                    className="mt-1 w-6 h-6 text-[#C0C0C0] border-2 border-slate-600 rounded focus:ring-[#C0C0C0] bg-slate-900"
                  />
                  <span className="text-slate-300 group-hover:text-white font-medium">
                    I confirm that all information provided is accurate
                  </span>
                </label>

                <label className="flex items-start space-x-4 cursor-pointer group p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-6 h-6 text-[#C0C0C0] border-2 border-slate-600 rounded focus:ring-[#C0C0C0] bg-slate-900"
                  />
                  <span className="text-slate-300 group-hover:text-white font-medium">
                    I agree to the terms & conditions of the Global Associates Referral Program
                  </span>
                </label>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 px-8 text-lg font-bold text-black bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-xl hover:from-[#cbcccd] hover:via-[#C0C0C0] hover:to-[#e3e3e3] focus:ring-4 focus:ring-[#C0C0C0]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl hover:shadow-2xl hover:shadow-[#C0C0C0]/30 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center space-x-3 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#cbcccd] via-[#C0C0C0] to-[#e3e3e3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin relative z-10" />
                  <span className="relative z-10">Submitting...</span>
                </>
              ) : (
                <span className="relative z-10">Secure My Spot Now</span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
