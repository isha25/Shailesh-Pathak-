import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ChevronRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="font-heading font-bold text-xl tracking-tight text-foreground">
            Shailesh Pathak
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#how-i-help" className="hover:text-foreground transition-colors">How I Help</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <Button className="rounded-full px-6 shadow-sm hover:shadow-md transition-all">
            Contact Me
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-20 items-center">
              <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-8 duration-700 fade-in fill-mode-both">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary w-fit">
                  Career Clarity Coach
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.15] text-foreground tracking-tight">
                  “I help parents and students of class 9th & 10th gain complete clarity in choosing the right Class 11 subject stream and future career, without confusion or stress, by using scientific psychological tests and personalized personality-based guidance.”
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                  “In just 3 days, you will confidently choose the right Class 11 stream without the stress, confusion, and family pressure that usually comes with this decision.”
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-sm hover:shadow-md transition-all group">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              
              {/* Hero Image Placeholder */}
              <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-3xl bg-muted/50 border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-1000 delay-300 fill-mode-both">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-medium">Img</span>
                </div>
                <p className="text-muted-foreground font-medium">Hero Image Placeholder</p>
                <p className="text-sm text-muted-foreground/70 mt-2 max-w-[200px]">Reserved space for professional headshot</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Meet Your Coach</h2>
              <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full" />
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 md:p-12 text-center">
                  <h3 className="text-2xl font-bold mb-2">SHAILESH PATHAK</h3>
                  <p className="text-primary font-medium text-lg mb-8">Psychometric Stream Selection Expert & Career Clarity Coach</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 text-left">
                    {[
                      "Entrepreneur",
                      "Former Chairman, CII Himachal Pradesh",
                      "Former Chairman, IGBC Chandigarh",
                      "Board Member, Shoolini University"
                    ].map((role, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-medium text-sm md:text-base">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How I Help Section */}
        <section id="how-i-help" className="py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">How I Help?</h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p className="leading-relaxed">
                    I help Class 9 & 10 students choose the right Class 11 stream using <strong className="text-foreground">scientific psychological assessments</strong>, <strong className="text-foreground">strength-based mapping</strong>, and <strong className="text-foreground">personalised guidance</strong>.
                  </p>
                  <p className="leading-relaxed">
                    I created the <strong className="text-foreground">Right Stream Decision Blueprint</strong> so families never have to rely on guesswork, pressure, or random opinions again.
                  </p>
                  <p className="leading-relaxed">
                    My approach is practical, structured, and designed to bring <strong className="text-foreground">clarity, peace, and confidence</strong> to both parents and students.
                  </p>
                </div>
              </div>
              
              <div className="grid gap-6">
                <Card className="shadow-sm hover:shadow-md transition-shadow border-primary/10">
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Scientific Psychological Assessments</h4>
                      <p className="text-muted-foreground text-sm">Data-driven insights to uncover natural aptitudes and true potential.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm hover:shadow-md transition-shadow border-primary/10 translate-x-0 md:translate-x-6">
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Strength-Based Mapping</h4>
                      <p className="text-muted-foreground text-sm">Aligning personal strengths with the right academic and career paths.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm hover:shadow-md transition-shadow border-primary/10">
                  <CardContent className="p-6 flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Personalised Guidance</h4>
                      <p className="text-muted-foreground text-sm">One-on-one support tailored to your unique family situation and goals.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-secondary/50 border-t py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="font-heading font-bold text-xl">Shailesh Pathak</div>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/50">
            Copyright © 2025 shaileshpathak.in | All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
