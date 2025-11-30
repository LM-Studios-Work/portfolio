"use client";

import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    title: "Essential Business Website",
    price: "R2,499",
    description: "A clean, modern 3-page website designed to make your business look credible and accessible.",
    features: [
      "3 professionally designed pages (Home, Services, Contact)",
      "Mobile-responsive, modern layout",
      "Contact form with email notifications",
      "Click-to-call & WhatsApp buttons",
      "Social media integration",
      "Basic SEO optimization",
    ],
    delivery: "5–7 working days",
    popular: false,
  },
  {
    title: "Professional Growth Website",
    price: "R4,999",
    description: "Perfect for businesses ready to grow, build trust, and showcase their work professionally.",
    features: [
      "Up to 6 pages (Home, About, Services, Gallery, Testimonials, Contact)",
      "Professionally written content",
      "High-quality gallery/portfolio",
      "Client testimonials section",
      "Google Maps integration",
      "Advanced contact forms",
      "Local SEO optimization",
    ],
    delivery: "7–12 working days",
    popular: true,
  },
  {
    title: "Personal Portfolio",
    price: "R1,999",
    description: "A stunning, modern portfolio to showcase your work, skills, and personality.",
    features: [
        "Single-page scrolling design",
        "Animated introductions & effects",
        "Project gallery with descriptions",
        "Resume/CV download link",
        "Contact form & social links",
    ],
    delivery: "4–6 working days",
    popular: false,
  },
  {
    title: "Event Management Website",
    price: "R3,499",
    description: "A dedicated website for your special event, like a wedding, conference, or party.",
    features: [
        "Event details & schedule",
        "Photo and video gallery",
        "RSVP form with guest management",
        "Gift registry links",
        "Password-protected access",
    ],
    delivery: "6–8 working days",
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 px-6 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Packages</h2>
          <p className="text-lg text-muted-foreground">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`border rounded-lg p-8 transition bg-background/80 backdrop-blur-sm flex flex-col ${
                pkg.popular ? "border-accent/30 relative" : "border-border hover:border-accent/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 right-6 bg-background px-3 py-1">
                  <span className="text-sm font-semibold text-accent">Most Popular</span>
                </div>
              )}
              <div className="flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-accent">{pkg.price}</span>
                    <span className="text-muted-foreground">once-off</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8">{pkg.description}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <div className="text-sm text-muted-foreground mb-6">
                  ⏱️ Delivery in {pkg.delivery}
                </div>
                <a href="#quote" className="w-full">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Choose Plan
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
