import React, { useState } from "react";
import { FadeIn } from "../ui/FadeIn";
import { ContactButton } from "../ui/Buttons";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage as requested
    const existingData = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    localStorage.setItem("contactSubmissions", JSON.stringify([...existingData, formData]));
    setIsSaved(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSaved(false), 5000);
  };

  return (
    <section 
      id="contact"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
        <h2 
          className="hero-heading font-black uppercase tracking-tight leading-none"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Contact
        </h2>
      </FadeIn>

      <div className="max-w-[700px] mx-auto">
        <FadeIn delay={0.2} y={30}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm ml-4">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#1A1A1A] border-2 border-[#D7E2EA]/20 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#D7E2EA] transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm ml-4">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#1A1A1A] border-2 border-[#D7E2EA]/20 rounded-full px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#D7E2EA] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm ml-4">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-[#1A1A1A] border-2 border-[#D7E2EA]/20 rounded-[30px] px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#D7E2EA] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="flex flex-col items-center mt-4 gap-4">
              <ContactButton type="submit" />
              {isSaved && (
                <p className="text-green-400 font-medium text-sm mt-2 transition-opacity">
                  Data saved successfully!
                </p>
              )}
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
