import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) errs.name = 'Name is required.';
    if (!data.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!data.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    // Live-clear errors once the user fixes the field
    if (touched[name]) {
      const fieldErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || undefined }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const subject = encodeURIComponent(`Contact from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `${formData.message.trim()}\n\n---\nReply-to: ${formData.email.trim()}\nName: ${formData.name.trim()}`
    );
    window.location.href = `mailto:aces@ditpune.edu.in?subject=${subject}&body=${body}`;
  };

  const inputBase =
    'w-full bg-white border rounded-[6px] px-4 py-3 text-sm font-sans text-[#1a1a1a] placeholder:text-[#6b6d71]/60 outline-none transition-all duration-200';
  const inputNormal = 'border-[#d4d3d0] focus:border-[#b22b2f] focus:ring-2 focus:ring-[#b22b2f]/15';
  const inputError = 'border-[#b22b2f] ring-2 ring-[#b22b2f]/15';

  return (
    <section
      id="contact-us"
      className="w-full bg-white pt-16 pb-20 font-sans border-t border-muted/30"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-10">
        {/* Section Header — matches Members embedded style */}
        <div className="reveal-heading">
          <div className="flex items-center gap-2 text-primary font-display text-2xl sm:text-3xl font-black uppercase tracking-[0.06em] border-l-[3px] border-secondary pl-3">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
            <span>Get In Touch</span>
          </div>
          <p className="text-body text-sm sm:text-base font-medium pl-3 mt-1">
            Have a question or want to collaborate? Drop us a message.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-xl space-y-5 reveal"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1.5"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputBase} ${errors.name && touched.name ? inputError : inputNormal}`}
            />
            {errors.name && touched.name && (
              <p className="mt-1 text-xs font-medium text-[#b22b2f]">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1.5"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputBase} ${errors.email && touched.email ? inputError : inputNormal}`}
            />
            {errors.email && touched.email && (
              <p className="mt-1 text-xs font-medium text-[#b22b2f]">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-1.5"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Write your message here…"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${inputBase} resize-y min-h-[120px] ${errors.message && touched.message ? inputError : inputNormal}`}
            />
            {errors.message && touched.message && (
              <p className="mt-1 text-xs font-medium text-[#b22b2f]">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-[#b22b2f] hover:bg-[#911f22] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-[6px] shadow-brand-glow hover:shadow-[0_8px_24px_rgba(178,43,47,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
