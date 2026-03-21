// ============================================================
// Contacts Page - IEI 1946
// Map, contact info, and contact form
// ============================================================

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JOURNAL } from "@/lib/data";
import { MapPin, Phone, Mail, Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    organization: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.privacy) {
      toast.error("Please accept the Privacy Policy to continue.");
      return;
    }
    // In production, this would send to OJS backend or email service
    toast.success("Your message has been sent. We will get back to you soon.");
    setForm({ name: "", surname: "", organization: "", email: "", subject: "", message: "", privacy: false });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="bg-[#1a3c5e] py-12 lg:py-16">
        <div className="container">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white">Contacts</h1>
          <p className="text-white/70 mt-2 text-sm">{JOURNAL.fullName}</p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container py-10 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Map + Contact Info */}
            <div>
              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border mb-6 h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.5!2d8.9295!3d44.4116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d343f0e0e0e0e1%3A0x1234567890abcdef!2sVia%20Garibaldi%2C%204%2C%2016124%20Genova%20GE%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IEI Location"
                />
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg border border-border p-6">
                <h2 className="font-serif text-xl font-bold text-[#1a3c5e] mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#00b4a0] shrink-0 mt-0.5" />
                    <div className="text-sm text-foreground/80">
                      <p className="font-semibold text-[#1a3c5e]">{JOURNAL.institute}</p>
                      <p>{JOURNAL.publisher}</p>
                      <p>{JOURNAL.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#00b4a0] shrink-0" />
                    <div className="text-sm text-foreground/80">
                      <p>Tel: {JOURNAL.phone}</p>
                      <p>Fax: {JOURNAL.fax}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#00b4a0] shrink-0" />
                    <a href={`mailto:${JOURNAL.email}`} className="text-sm text-[#00b4a0] hover:underline font-medium">
                      {JOURNAL.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink size={18} className="text-[#00b4a0] shrink-0" />
                    <a href={`https://${JOURNAL.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[#00b4a0] hover:underline">
                      {JOURNAL.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="bg-white rounded-lg border border-border p-6">
                <h2 className="font-serif text-xl font-bold text-[#1a3c5e] mb-4">Information Request</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">Surname *</label>
                      <input
                        type="text"
                        required
                        value={form.surname}
                        onChange={(e) => setForm({ ...form, surname: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Organization / Institution</label>
                    <input
                      type="text"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-[#00b4a0]/30 resize-y"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={form.privacy}
                      onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                      className="mt-1"
                    />
                    <label htmlFor="privacy" className="text-xs text-muted-foreground">
                      I have read and accept the{" "}
                      <a href="/privacy" className="text-[#00b4a0] hover:underline">Privacy Policy</a> *
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#00b4a0] text-white text-sm font-bold rounded-md hover:bg-[#00a090] transition-colors"
                  >
                    <Send size={14} /> SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
