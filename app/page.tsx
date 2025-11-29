import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCarousel from '@/components/ProjectCarousel'; // Import the new component
import { QuoteForm } from '@/components/QuoteForm';

export default function Home() {
  return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">LM Studios</div>
            <div className="hidden md:flex gap-8">
              <a href="#packages" className="hover:text-accent transition">Services</a>
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
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
              Professional Web Design for <span className="text-accent">Growing Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              Clean, modern, and affordable websites that help small businesses build credibility and reach customers online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                View Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:border-accent/50">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-20 px-6 border-t border-border bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Packages</h2>
              <p className="text-lg text-muted-foreground">Choose the perfect plan for your business</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Essential Package */}
              <div className="border border-border rounded-lg p-8 hover:border-accent/50 transition">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Essential Business Website</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-accent">R2,499</span>
                    <span className="text-muted-foreground">once-off</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8">
                  A clean, modern 3-page website designed to make your business look credible and accessible.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>3 professionally designed pages (Home, Services, Contact)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Mobile-responsive, modern layout</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Contact form with email notifications</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Click-to-call & WhatsApp buttons</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Social media integration</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Basic SEO optimization</span>
                  </li>
                </ul>
                <div className="text-sm text-muted-foreground mb-6">
                  ⏱️ Delivery in 5–7 working days
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Choose Plan
                </Button>
              </div>

              {/* Professional Package */}
              <div className="border border-accent/30 rounded-lg p-8 relative">
                <div className="absolute -top-3 right-6 bg-background px-3 py-1">
                  <span className="text-sm font-semibold text-accent">Most Popular</span>
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Professional Growth Website</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-accent">R4,999</span>
                    <span className="text-muted-foreground">once-off</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8">
                  Perfect for businesses ready to grow, build trust, and showcase their work professionally.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Up to 6 pages (Home, About, Services, Gallery, Testimonials, Contact)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Professionally written content</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>High-quality gallery/portfolio</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Client testimonials section</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Google Maps integration</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Advanced contact forms</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Local SEO optimization</span>
                  </li>
                </ul>
                <div className="text-sm text-muted-foreground mb-6">
                  ⏱️ Delivery in 7–12 working days
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </section>

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

        {/* Our Work Section (NEW) */}
        <section id="work" className="py-20 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
              <p className="text-lg text-muted-foreground">A look at some of the projects we're proud of.</p>
            </div>
            <ProjectCarousel />
          </div>
        </section>

        <QuoteForm />

        {/* Footer */}
        <footer className="border-t border-border py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4">LM Studios</h3>
                <p className="text-sm text-muted-foreground">Professional web design for small businesses that want to grow online.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">Essential Website</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Growth Website</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">About</a></li>
                  <li><a href="#quote" className="hover:text-foreground transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
                  <li><a href="#" className="hover:text-foreground transition">Terms</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 LM Studios. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  );
}
