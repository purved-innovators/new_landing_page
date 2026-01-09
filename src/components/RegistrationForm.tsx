import React, {
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import {
  Upload,
  CheckCircle,
  AlertCircle,
  Loader2,
  Trash2,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { submitForm } from "../api/Api";

interface FormData {
  fullName: string;
  email: string;
  contactCountryCode: string;
  contactNo: string;
  whatsappCountryCode: string;
  whatsappNo: string;
  countryOfResidence: string;
  currentCompanyName: string;
  professionalRole: string;
  languagesSpoken: string;
  yearsOfExperience: string;
  referralEmployeeName: string;
  signatureDataUrl: string | null;
  assetFile: File | null;
  agreeToTerms: boolean;
  confirmAccuracy: boolean;
}

const COUNTRY_CODES = [
  { code: "+971", label: "UAE" },
  { code: "+91", label: "India" },
  { code: "+1", label: "USA" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Australia" },
];

export default function RegistrationForm() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    contactCountryCode: "+971", // default to UAE
    contactNo: "",
    whatsappCountryCode: "+971",
    whatsappNo: "",
    countryOfResidence: "",
    currentCompanyName: "",
    professionalRole: "",
    languagesSpoken: "",
    yearsOfExperience: "",
    referralEmployeeName: "",
    signatureDataUrl: null,
    assetFile: null,
    agreeToTerms: false,
    confirmAccuracy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Toast/snackbar state (bottom-right)
  const [toast, setToast] = useState<
    { type: "success" | "error"; message: string } | null
  >(null);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = (type: "success" | "error", message: string, ms = 4000) => {
    // clear any existing timer
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
    setToast({ type, message });
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, ms);
  };

  // Canvas refs & drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const drawing = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const hasStrokes = useRef(false);

  // Set up canvas size and context, and handle window resize
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.resetTransform?.();
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";
    ctxRef.current = ctx;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setFormData((prev) => ({ ...prev, signatureDataUrl: null }));
    hasStrokes.current = false;
  };

  useEffect(() => {
    // initial setup
    resizeCanvas();
    const onResize = () => {
      resizeCanvas();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCanvasRelativePos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  };

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    drawing.current = true;
    lastPos.current = getCanvasRelativePos(e);
    hasStrokes.current = hasStrokes.current || false;
    try {
      (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current || !ctxRef.current || !lastPos.current) return;
    const { x, y } = getCanvasRelativePos(e);
    const ctx = ctxRef.current;
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastPos.current = { x, y };
    hasStrokes.current = true;
  };

  const endDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    drawing.current = false;
    lastPos.current = null;
    try {
      (e.target as HTMLCanvasElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    if (hasStrokes.current) {
      saveSignature();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    ctx.resetTransform?.();
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    setFormData((prev) => ({ ...prev, signatureDataUrl: null }));
    hasStrokes.current = false;
  };

  const saveSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!hasStrokes.current) return;
    const dataUrl = canvas.toDataURL("image/png");
    setFormData((prev) => ({ ...prev, signatureDataUrl: dataUrl }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAssetChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, assetFile: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, assetFile: null }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        contactCountryCode: formData.contactCountryCode,
        contactNo: formData.contactNo,
        whatsappCountryCode: formData.whatsappCountryCode,
        whatsappNo: formData.whatsappNo,
        countryOfResidence: formData.countryOfResidence,
        currentCompanyName: formData.currentCompanyName,
        professionalRole: formData.professionalRole,
        languagesSpoken: formData.languagesSpoken,
        yearsOfExperience: formData.yearsOfExperience,
        referralEmployeeName: formData.referralEmployeeName,
        signatureDataUrl: formData.signatureDataUrl,
        attachment: formData.assetFile,
        agreed: formData.agreeToTerms,
        confirmedAccuracy: formData.confirmAccuracy,
        submittedAt: new Date().toISOString(),
      };


      // Expect submitForm to return something like { ok: boolean, message?: string }
      const res: any = await submitForm(payload);

      if (res && res.ok) {
        setSubmitStatus("success");
        showToast("success", res.message || "Registration submitted successfully.");
        // Reset form if desired:
        setFormData({
          fullName: "",
          email: "",
          contactCountryCode: "+971",
          contactNo: "",
          whatsappCountryCode: "+971",
          whatsappNo: "",
          countryOfResidence: "",
          currentCompanyName: "",
          professionalRole: "",
          languagesSpoken: "",
          yearsOfExperience: "",
          referralEmployeeName: "",
          signatureDataUrl: null,
          assetFile: null,
          agreeToTerms: false,
          confirmAccuracy: false,
        });
        clearCanvas();
      } else {
        setSubmitStatus("error");
        
        const message = (res && res.error) || "Submission failed. Please try again.";
        setErrorMessage(message);
        showToast("error", message);
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setErrorMessage("An error occurred. Please try again.");
      showToast("error", "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="registration-form"
      className="py-20 sm:py-28 bg-gradient-to-br from-black via-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-2 border-[#C0C0C0]/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10 sm:mb-12">
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
              Limited seats available for the first global batch. Applications
              reviewed within 48 hours.
            </p>
          </div>

          {/* NOTE: top-of-form success/error banners removed per request.
              Feedback is shown via bottom-right snackbar (toast). */}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                />
              </div>

              {/* Contact: country code select + number */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  Contact No <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-3 items-center">
                  <select
                    name="contactCountryCode"
                    value={formData.contactCountryCode}
                    onChange={handleInputChange}
                    className="w-[82px] px-2 py-2 bg-slate-900/40 border-2 border-slate-700 rounded-xl text-white"
                    aria-label="Contact country code"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code} {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleInputChange}
                    required
                    placeholder="50 123 4567"
                    className="flex-1 max-w-[250px] px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Contact number with selected country code.
                </p>
              </div>

              {/* WhatsApp: country code select + number */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  WhatsApp No
                </label>
                <div className="flex gap-3 items-center">
                  <input
                    name="whatsappNo"
                    value={formData.whatsappNo}
                    onChange={handleInputChange}
                    placeholder="50 123 4567"
                    className="flex-1 px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                  />
                </div>
              </div>

              {/* Country of Residence */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  Country of Residence <span className="text-red-400">*</span>
                </label>
                <input
                  name="countryOfResidence"
                  value={formData.countryOfResidence}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your country"
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                />
              </div>

              {/* Current company */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  Current Company Name <span className="text-red-400">*</span>
                </label>
                <input
                  name="currentCompanyName"
                  value={formData.currentCompanyName}
                  onChange={handleInputChange}
                  required
                  placeholder="Company name"
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                />
              </div>

              {/* Professional role */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  Professional Role <span className="text-red-400">*</span>
                </label>
                <input
                  name="professionalRole"
                  value={formData.professionalRole}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Real Estate Agent, Broker"
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                />
              </div>

              {/* Languages */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  Languages Spoken <span className="text-red-400">*</span>
                </label>
                <input
                  name="languagesSpoken"
                  value={formData.languagesSpoken}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., English, Arabic, Hindi"
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  Years of Experience <span className="text-red-400">*</span>
                </label>
                <input
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 5 years"
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                />
              </div>

              {/* Referral */}
              <div>
                <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                  Referral Employee Name
                </label>
                <input
                  name="referralEmployeeName"
                  value={formData.referralEmployeeName}
                  onChange={handleInputChange}
                  placeholder="Optional"
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-xl text-white"
                />
              </div>
            </div>

            {/* Signature canvas */}
            <div>
              <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                Signature (draw here) <span className="text-red-400">*</span>
              </label>
              <div className="bg-slate-300 border-2 border-dashed border-slate-700 rounded-2xl p-4">
                <div className="w-full h-40 bg-transparent rounded-md overflow-hidden">
                  <canvas
                    ref={canvasRef}
                    onPointerDown={startDrawing}
                    onPointerMove={draw}
                    onPointerUp={endDrawing}
                    onPointerLeave={endDrawing}
                    style={{
                      width: "100%",
                      height: "100%",
                      touchAction: "none",
                      background: "transparent",
                    }}
                  />
                </div>

                <div className="mt-3 flex gap-3 items-center">
                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="px-4 py-2 bg-red-600 text-white rounded-xl flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" /> Clear
                  </button>

                  {formData.signatureDataUrl && (
                    <div className="ml-auto text-sm text-slate-700">
                      Signature saved ✓
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Draw your signature above. It will be saved automatically when
                you finish drawing. Click "Clear" to remove the signature.
              </p>
            </div>

            {/* Optional asset input */}
            <div>
              <label className="block text-sm font-bold text-[#e3e3e3] mb-2">
                Additional Asset (Image or PDF) — optional
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="asset"
                  accept="image/*,.pdf"
                  onChange={handleAssetChange}
                  className="hidden"
                />
                <label
                  htmlFor="asset"
                  className="flex items-center gap-4 px-4 py-4 border-2 border-dashed border-[#C0C0C0]/30 rounded-2xl cursor-pointer bg-gradient-to-br from-slate-900/50 to-black/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-lg flex items-center justify-center">
                    <Upload className="w-5 h-5 text-slate-900" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-slate-200">
                      {formData.assetFile
                        ? formData.assetFile.name
                        : "Click to upload an image or PDF"}
                    </div>
                    <div className="text-xs text-slate-400">
                      {formData.assetFile
                        ? `${Math.round(formData.assetFile.size / 1024)} KB`
                        : "Optional"}
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 px-8 text-lg font-bold text-black bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl flex items-center justify-center space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Secure My Spot Now</span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Toast / Snackbar (bottom-right) */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            style={{ position: "fixed", right: 24, bottom: 24, zIndex: 60 }}
          >
            <div
              className={`max-w-sm w-full rounded-2xl p-4 shadow-xl flex items-start gap-3 ${
                toast.type === "success"
                  ? "bg-gradient-to-r from-green-900/80 to-emerald-900/80 border-2 border-green-500 text-green-50"
                  : "bg-gradient-to-r from-red-900/80 to-rose-900/80 border-2 border-red-500 text-red-50"
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {toast.type === "success" ? (
                  <CheckCircle className="w-6 h-6 text-green-200" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-200" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-semibold">
                  {toast.type === "success" ? "Success" : "Error"}
                </div>
                <div className="text-sm mt-1">{toast.message}</div>
              </div>
              <button
                onClick={() => {
                  if (toastTimerRef.current) {
                    window.clearTimeout(toastTimerRef.current);
                    toastTimerRef.current = null;
                  }
                  setToast(null);
                }}
                className="ml-3 text-xs opacity-80"
                aria-label="close toast"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
