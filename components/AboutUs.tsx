"use client";

import { Users, Code2, Paintbrush } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-6 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground">The team behind LM Studios</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">A Dedicated Duo</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are a two-person team passionate about helping small businesses thrive online.
              By keeping our team small, we ensure that you get direct access to the people actually building your website—no account managers, no middlemen, just personal, dedicated service.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We combine our skills in design and development to create websites that are not only visually stunning but also technically robust.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Paintbrush className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Creative Design</h4>
                  <p className="text-sm text-muted-foreground">Tailored for you</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Solid Code</h4>
                  <p className="text-sm text-muted-foreground">Fast & Secure</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Abstract representation of a team of 2 */}
            <div className="aspect-video rounded-xl bg-gradient-to-br from-accent/20 to-background border border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                <div className="flex gap-8 z-10">
                   <div className="text-center">
                        <div className="w-24 h-24 bg-background border-2 border-accent rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-accent/20">
                            <Users className="h-10 w-10 text-accent" />
                        </div>
                        <div className="bg-background/80 backdrop-blur px-4 py-2 rounded-lg border border-border">
                             <p className="font-bold">Personal Touch</p>
                        </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
