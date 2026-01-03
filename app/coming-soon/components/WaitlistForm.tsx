import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useRef, useState } from "react";

// Reusable Waitlist Form Component
const WaitlistForm = ({ id, variant = 'default' }: { id: string, variant?: 'default' | 'footer' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div id={id} className={`relative w-full transition-all duration-500 ${variant === 'footer' ? 'max-w-md mx-auto' : 'max-w-xl mx-auto'}`}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form 
            key="form"
            onSubmit={handleSubmit}
            className={`flex flex-col md:flex-row gap-3 p-2.5 bg-white rounded-[2rem] md:rounded-full shadow-2xl border border-black/5 focus-within:ring-4 focus-within:ring-amber-100 transition-all`}
          >
            <input 
              ref={inputRef}
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 bg-transparent px-8 py-4 md:py-5 outline-none text-lg placeholder:text-gray-300"
              required
            />
            <button 
              disabled={isSubmitting}
              className="bg-[#2D2A26] text-white px-10 py-4 md:py-5 rounded-[1.5rem] md:rounded-full font-bold flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-95 disabled:opacity-50 group min-w-[180px]"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>
                  Join Waitlist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 bg-white rounded-[2.5rem] shadow-2xl border border-green-100 flex flex-col items-center gap-4 text-center"
          >
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">You're on the list!</h3>
              <p className="text-gray-400 mt-1">We've sent a confirmation to your inbox. 🧈</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WaitlistForm;