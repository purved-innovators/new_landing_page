import { useState, ChangeEvent, FormEvent } from 'react';
import { Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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
    <section id="registration-form" className="py-20 bg-gradient-to-br from-slate-50 to-amber-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-amber-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Best Town Realty - Global Associates
            </h2>
            <h3 className="text-2xl font-semibold text-slate-700 mb-3">
              Referral Program Registration
            </h3>
            <p className="text-slate-600">
              Limited seats available for the first global batch. Applications reviewed within 48 hours.
            </p>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-green-800 font-semibold">Registration Submitted Successfully!</p>
                <p className="text-green-700 text-sm mt-1">We'll review your application and get back to you within 48 hours.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-800 font-semibold">Submission Error</p>
                <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="contactNo" className="block text-sm font-semibold text-slate-700 mb-2">
                  Contact No (with Country Code) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="+971 50 123 4567"
                />
              </div>

              <div>
                <label htmlFor="whatsappNo" className="block text-sm font-semibold text-slate-700 mb-2">
                  WhatsApp No <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsappNo"
                  name="whatsappNo"
                  value={formData.whatsappNo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="+971 50 123 4567"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-2">
                  Country of Residence <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Enter your country"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Current Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="professionalRole" className="block text-sm font-semibold text-slate-700 mb-2">
                  Professional Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="professionalRole"
                  name="professionalRole"
                  value={formData.professionalRole}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="e.g., Real Estate Agent, Broker"
                />
              </div>

              <div>
                <label htmlFor="languagesSpoken" className="block text-sm font-semibold text-slate-700 mb-2">
                  Languages Spoken <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="languagesSpoken"
                  name="languagesSpoken"
                  value={formData.languagesSpoken}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="e.g., English, Arabic, Hindi"
                />
              </div>

              <div>
                <label htmlFor="yearsExperience" className="block text-sm font-semibold text-slate-700 mb-2">
                  Years of Experience <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="yearsExperience"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="e.g., 5 years"
                />
              </div>

              <div>
                <label htmlFor="referralEmployeeName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Referral Employee Name
                </label>
                <input
                  type="text"
                  id="referralEmployeeName"
                  name="referralEmployeeName"
                  value={formData.referralEmployeeName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div>
              <label htmlFor="signature" className="block text-sm font-semibold text-slate-700 mb-2">
                Signature Upload <span className="text-red-500">*</span>
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
                  className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-amber-500 transition-colors bg-slate-50 hover:bg-amber-50/50"
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-600">
                      {formData.signature ? (
                        <span className="text-amber-600 font-semibold">{formData.signature.name}</span>
                      ) : (
                        <>Click to upload signature (Image or PDF)</>
                      )}
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4">Agreement & Consent</h4>

              <div className="space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="confirmAccuracy"
                    checked={formData.confirmAccuracy}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
                  />
                  <span className="text-slate-700 group-hover:text-slate-900">
                    I confirm that all information provided is accurate
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
                  />
                  <span className="text-slate-700 group-hover:text-slate-900">
                    I agree to the terms & conditions of the Global Associates Referral Program
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg hover:from-amber-600 hover:to-amber-700 focus:ring-4 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Secure My Spot Now</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
