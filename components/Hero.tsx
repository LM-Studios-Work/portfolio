import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/20 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4" />
          <span>Web Design & Development for Growth</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Turn Your Vision Into <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent">
            Digital Reality
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          We craft stunning, high-performance websites that help your business stand out, build trust, and convert visitors into customers.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <a href="#packages" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all hover:scale-105">
              View Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#about" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-border bg-background/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent/5 transition-all hover:scale-105">
              Learn More
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
