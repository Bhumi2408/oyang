import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import { Clock, Globe, Mail, MapPin, PhoneCall } from "lucide-react";

const infoCards = [
  {
    icon: MapPin,
    label: "HEADQUARTERS",
    value: "Binhai New Industrial Estate, Pingyang County, Wenzhou City, China",
  },
  { icon: PhoneCall, label: "SALES HOTLINE / WHATSAPP", value: "+86 150 5897 6313" },
  { icon: Mail, label: "EMAIL", value: "inquiry@oyang-group.com" },
  {
    icon: Clock,
    label: "BUSINESS HOURS",
    value: "Mon–Sat · 09:00–18:00 (GMT+8)",
  },
  {
    icon: Globe,
    label: "EXPORT MARKETS",
    value: "USA, EU, MENA, Africa, LATAM, Southeast Asia",
  },
];

export const metadata = {
  title: "Contact Us | Ounuo Machinery — Get a Custom Quote",
  description:
    "Get in touch with Ounuo Machinery's engineering team for a custom quote on paper bag, nonwoven, pouch and rotogravure printing machinery. We respond within 24 hours.",
  alternates: { canonical: "https://ounuo-machinery.com/contact" },
};

const page = () => {
  return (
    <>
      <ContactHero />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-[380px_1fr] gap-8">
          {/* Left info cards */}
          <div className="space-y-4">
            {infoCards.map((c) => (
              <div
                key={c.label}
                className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-[0px_6px_8px] hover:shadow-primary/30"
              >
                <div className="w-11 h-11 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-gray-500">
                    {c.label}
                  </p>
                  <p className="font-semibold text-gray-900">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-gray-500 mt-1 mb-6">
              Fill the form — our engineers will get back to you within 24
              hours.
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Map below */}
        <div className="mt-8 rounded-2xl overflow-hidden shadow-sm h-[380px]">
          <iframe
            title="Ounuo Machinery Location"
            src="https://www.google.com/maps?q=Binhai+New+Industrial+Estate,+Pingyang+County,+Wenzhou,+Zhejiang,+China&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default page;