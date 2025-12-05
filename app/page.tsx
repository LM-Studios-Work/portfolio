import { CheckCircle2, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectsView from '@/components/ProjectCarousel'; // Renamed to ProjectsView
import { QuoteForm } from '@/components/QuoteForm';
import AboutUs from '@/components/AboutUs';
import { ParticleBackground } from '@/components/ParticleBackground';
import Packages from '@/components/Packages';
import Image from 'next/image';

export default function Home() {
  return (
      <div className="relative min-h-screen text-foreground">
        <ParticleBackground />
        <main className="relative z-10">
          {/* Navigation */}
          <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="LM Studios Logo" width={40} height={40} />
                <div className="text-2xl font-bold tracking-tight">LM Studios</div>
              </div>
              <div className="hidden md:flex gap-8">
                <a href="#packages" className="hover:text-accent transition">Services</a>
                <a href="#about" className="hover:text-accent transition">About</a>
                <a href="#work" className="hover:text-accent transition">Our Work</a>
                <a href="#quote" className="hover:text-accent transition">Contact</a>
              </div>
              <a href="#quote">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
              </a>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative py-24 px-6 overflow-hidden">
            <div className="relative max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
                Professional Web Design for <span className="text-accent">Growing Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
                Clean, modern, and affordable websites that help growing businesses build credibility and reach customers online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#packages">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    View Packages <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#about">
                  <Button size="lg" variant="outline" className="border-border hover:border-accent/50">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <Packages />

          {/* Why Choose Us */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Why Choose LM Studios?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">01</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Clean & Modern Design</h3>
                  <p className="text-muted-foreground">Professional designs that make your business stand out and build customer trust.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">02</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
                  <p className="text-muted-foreground">Quality web design at prices that work for small businesses and startups.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">03</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">Get your website live quickly with our streamlined 5-12 day delivery timeline.</p>
                </div>
              </div>
            </div>
          </section>

          <AboutUs />

          <ProjectsView />

          <QuoteForm />

          {/* Footer */}
          <footer className="border-t border-border bg-background/50">
            <div className="max-w-7xl mx-auto py-12 px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Branding & Contact */}
                <div className="md:col-span-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Image src="/logo.png" alt="LM Studios Logo" width={30} height={30} />
                    <h3 className="font-bold text-xl">LM Studios</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Professional web design for growing businesses.</p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#about" className="hover:text-accent transition">About Us</a></li>
                    <li><a href="#work" className="hover:text-accent transition">Our Work</a></li>
                    <li><a href="#quote" className="hover:text-accent transition">Contact</a></li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold mb-4">Services</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#packages" className="hover:text-accent transition">Essential Website</a></li>
                    <li><a href="#packages" className="hover:text-accent transition">Growth Website</a></li>
                  </ul>
                </div>

                {/* Socials */}
                <div>
                  <h4 className="font-semibold mb-4">Message Us</h4>
                  {/*<div className="flex gap-4">*/}
                  {/*  <a href="#" className="text-muted-foreground hover:text-accent transition"><Facebook size={20}/></a>*/}
                  {/*  <a href="#" className="text-muted-foreground hover:text-accent transition"><Instagram*/}
                  {/*      size={20}/></a>*/}
                  {/*  <a href="#" className="text-muted-foreground hover:text-accent transition"><Twitter size={20}/></a>*/}
                  {/*</div>*/}
                  <div className="space-y-2 text-sm">
                    <a href="mailto:lm.studios.web@gmail.com"
                       className="flex items-center gap-2 hover:text-accent transition">
                      Email: lm.studios.web@gmail.com
                    </a>
                    <a href="https://wa.me/27655827602" target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 hover:text-accent transition">
                      WhatsApp: +27 65 582 7602
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} LM Studios. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
  );
}
