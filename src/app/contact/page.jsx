import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import { Clock, Globe, Mail, MapPin, PhoneCall } from "lucide-react";

const infoCards = [
  {
    icon: MapPin,
    label: "GLOBAL HEADQUARTERS",
    value:
      "No.1 Wanchuan Avenue, Binhai New Industrial Estate, Pingyang County, Wenzhou City, Zhejiang, China 325800",
  },
  { icon: PhoneCall, label: "HQ PHONE", value: "0086-0577-63708880" },
  {
    icon: PhoneCall,
    label: "SALES HOTLINE / WHATSAPP",
    value: "+86 150 5893 3503",
  },
  { icon: Mail, label: "EMAIL", value: "inquiry@oyang-group.com" },
  {
    icon: Clock,
    label: "BUSINESS HOURS",
    value: "Mon–Sat · 09:00–18:00 (GMT+8)",
  },
];

const indiaOffices = [
  {
    title: "OYANG India Branch",
    subtitle: "Delhi Office · General Inquiries",
    address: "611, PP Trade Centre, Netaji Subhash Place, Pitampura, Delhi – 110034, India",
    phone: "+91-9999579975",
  },
  {
    title: "India – Flexible Pouch Partner",
    subtitle: "Kamtronics Technology Pvt. Ltd.",
    address: "New Delhi – 110015 & Ahmedabad, India",
    phone: "+91-9810275379",
  },
];

const regionalContacts = [
  { flag: "🇺🇸", region: "North America", whatsapp: "+86 134 5480 1744" },
  { flag: "🇧🇷", region: "Latin America", whatsapp: "+86 150 5897 6313" },
  { flag: "🇪🇺", region: "Europe", whatsapp: "+86 198 5770 1962" },
  { flag: "🇦🇪", region: "Middle East", whatsapp: "+86 152 5862 6225" },
  { flag: "🇮🇩", region: "Southeast Asia", whatsapp: "+86 138 5773 0279" },
  { flag: "🇮🇳", region: "South Asia", whatsapp: "+86 137 5882 8971" },
  { flag: "🇿🇦", region: "Africa", whatsapp: "+86 178 5775 0200" },
  { flag: "🇷🇺", region: "Russia & CIS", whatsapp: "+86 152 5779 1882" },
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

        {/* India Offices */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            India Offices
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {indiaOffices.map((o) => (
              <div
                key={o.title}
                className="bg-white rounded-2xl shadow-sm p-5 transition-all duration-300 hover:shadow-[0px_6px_8px] hover:shadow-primary/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{o.title}</p>
                    <p className="text-xs text-gray-500">{o.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-2">{o.address}</p>
                <a
                  href={`tel:${o.phone}`}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {o.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Contacts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Find Your Regional Expert
          </h2>
          <p className="text-gray-500 mb-6">
            8 dedicated regional teams ready to support you in your local
            language and time zone.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {regionalContacts.map((r) => (
              <a
                key={r.region}
                href={`https://api.whatsapp.com/send?phone=${r.whatsapp.replace(/[\s+]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-sm p-4 flex flex-col items-center text-center gap-2 transition-all duration-300 hover:shadow-[0px_6px_8px] hover:shadow-primary/30"
              >
                <span className="text-3xl">{r.flag}</span>
                <p className="font-semibold text-gray-900 text-sm">
                  {r.region}
                </p>
                <p className="text-xs text-gray-500">{r.whatsapp}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Map below */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-sm h-[280px] sm:h-[340px] lg:h-[380px]">
          <iframe
            title="Ounuo Machinery Location"
            src="https://www.google.com/maps?q=27.69181,120.65025&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default page;