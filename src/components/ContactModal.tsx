import React, { useState } from 'react';
import { X, MapPin, Phone, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefillService = ''
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-ivory border border-stone-border w-full max-w-xl p-6 sm:p-10 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-charcoal-50 hover:text-charcoal p-2 focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-stone-light text-sage border border-stone-border rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-charcoal mb-2">
              Message Received
            </h3>
            <p className="font-sans text-sm text-charcoal-100 max-w-md mx-auto mb-6">
              Thank you, {name}. The OVERLOOK studio concierge will contact you shortly via email or phone.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-charcoal text-ivory font-sans text-xs uppercase tracking-widest font-semibold hover:bg-sage transition-colors"
            >
              Back to Studio
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="font-sans text-xs uppercase tracking-widest-xl text-sage font-semibold block mb-2">
                Studio Concierge
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
                Get in Touch
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal-50 mt-2">
                Have questions about our services or visiting our King West studio? Drop us a note or call directly.
              </p>
            </div>

            {/* Quick Contact Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-stone-light border border-stone-border mb-8 text-xs font-sans text-charcoal-100">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sage flex-shrink-0" />
                <a href="tel:+14165550184" className="hover:text-charcoal font-semibold">
                  +1 (416) 555-0184
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sage flex-shrink-0" />
                <span>248 King St W, Toronto</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-charcoal font-semibold mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Marcus Vance"
                  className="w-full bg-stone-light border border-stone-border px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-charcoal transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-charcoal font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-stone-light border border-stone-border px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs uppercase tracking-wider text-charcoal font-semibold mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (416) 000-0000"
                    className="w-full bg-stone-light border border-stone-border px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs uppercase tracking-wider text-charcoal font-semibold mb-1">
                  How can we help?
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    prefillService
                      ? `I'm interested in inquiring about the ${prefillService}...`
                      : 'Ask about our team, haircut consultations, or studio visits...'
                  }
                  className="w-full bg-stone-light border border-stone-border px-4 py-3 text-charcoal font-sans text-sm focus:outline-none focus:border-charcoal transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-charcoal text-ivory py-4 font-sans text-xs uppercase tracking-widest font-semibold hover:bg-sage transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
