import { Button } from '@/components/ui/button';
import ProjectsView from '@/components/ProjectCarousel'; // Renamed to ProjectsView
import { QuoteForm } from '@/components/QuoteForm';
import AboutUs from '@/components/AboutUs';
import { ParticleBackground } from '@/components/ParticleBackground';
import Packages from '@/components/Packages';
import { Hero } from '@/components/Hero';

export default function Home() {
  return (
      <div className="relative min-h-screen text-foreground">
        <ParticleBackground />
        <main className="relative z-10">
          {/* Navigation */}
          <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="text-2xl font-bold tracking-tight">LM Studios</div>
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

          <Hero />

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
                    <li><a href="#about" className="hover:text-foreground transition">About</a></li>
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
        </main>
      </div>
  );
}
