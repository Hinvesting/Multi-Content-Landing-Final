'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setEmail('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.us1.make.com/43i0zrryriegg6grhe995mveumvpwi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Thank you! Your free Multi-Content Generator will be sent to your email shortly.');
        closeModal();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#2C3E50] text-white">
      {/* Header Logo */}
      <header className="pt-8 pb-4">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={180}
            className="mx-auto"
            priority
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[var(--font-montserrat)] leading-tight">
            Stop Staring at a Blank Page. Start Generating Daily Content in 5 Minutes.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#bdc3c7] font-[var(--font-open-sans)] leading-relaxed">
            Get our free Multi-Content Generator that uses AI to brainstorm, write, and organize a week of social media content for you. 100% Free.
          </p>
          <button
            onClick={openModal}
            className="bg-[#F1C40F] text-[#2C3E50] px-8 py-4 text-xl font-semibold rounded-lg hover:bg-[#f39c12] transition-colors duration-300 font-[var(--font-montserrat)]"
          >
            Get the Free Tool Now
          </button>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <video
            className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F1C40F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2C3E50]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-montserrat)]">Endless Ideas</h3>
              <p className="text-[#bdc3c7] font-[var(--font-open-sans)]">Generate unique angles and topics for your niche on demand.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F1C40F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2C3E50]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-montserrat)]">Automated Writing</h3>
              <p className="text-[#bdc3c7] font-[var(--font-open-sans)]">Create engaging social media copy, hashtags, and titles in seconds.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F1C40F] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#2C3E50]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-[var(--font-montserrat)]">Effortless Organization</h3>
              <p className="text-[#bdc3c7] font-[var(--font-open-sans)]">Keep all your content perfectly organized inside a simple Google Sheet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Image
            src="/sam-stacks-creator.png"
            alt="Sam Stacks Creator"
            width={800}
            height={400}
            className="mx-auto rounded-lg"
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-[var(--font-montserrat)]">
            Your Audience is Waiting.
          </h2>
          <button
            onClick={openModal}
            className="bg-[#F1C40F] text-[#2C3E50] px-8 py-4 text-xl font-semibold rounded-lg hover:bg-[#f39c12] transition-colors duration-300 font-[var(--font-montserrat)]"
          >
            Download Your Free Generator
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#34495e]">
        <div className="container mx-auto text-center">
          <p className="text-[#bdc3c7] mb-4 font-[var(--font-open-sans)]">
            © 2025 New Money Millionaires L.L.C. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-[#bdc3c7] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#bdc3c7] hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 font-[var(--font-montserrat)] text-center">
              Get Your Free Multi-Content Generator
            </h2>
            <p className="text-[#bdc3c7] mb-6 text-center font-[var(--font-open-sans)]">
              Enter your email address and we&apos;ll send you the free tool immediately.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full p-3 mb-4 rounded-lg bg-[#2C3E50] border border-[#bdc3c7] text-white placeholder-[#bdc3c7] focus:outline-none focus:border-[#F1C40F]"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F1C40F] text-[#2C3E50] py-3 rounded-lg font-semibold hover:bg-[#f39c12] transition-colors duration-300 disabled:opacity-50 font-[var(--font-montserrat)]"
              >
                {isSubmitting ? 'Sending...' : 'Get My Free Tool'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

