import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ChevronRight, Mail, Compass, BrainCircuit, Users, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Background gradients for subtle visual interest */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/50 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-6xl">
          <div className="font-heading font-extrabold text-2xl tracking-tighter text-foreground flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-sm">SP</div>
            Shailesh Pathak
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-semibold text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">About</a>
            <a href="#how-i-help" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">How I Help</a>
            <a href="#contact" className="hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">Contact</a>
          </nav>
          <Button className="rounded-full px-7 h-11 text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
            Contact Me
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-32 lg:pt-40 lg:pb-48 px-6">
          {/* subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-[1.4fr,1fr] gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-8 animate-in slide-in-from-bottom-8 duration-700 fade-in fill-mode-both">
                <div className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors bg-background/50 backdrop-blur-sm text-primary w-fit shadow-sm">
                  <Compass className="w-3.5 h-3.5 mr-2" />
                  Career Clarity Coach
                </div>
                
                <h1 className="text-[2.75rem] md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] text-foreground tracking-tight">
                  <span className="block text-2xl md:text-3xl font-bold text-foreground/80 mb-4 tracking-normal">For Parents & Class 10 Students Who Are Confused About Class 11 Stream Selection</span>
                  Get Absolute Clarity on the Right Stream for Class 11 Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Stress, Guesswork, or Family Arguments</span>
                </h1>
                
                <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                  <p>
                    “I help parents and students of class 9th & 10th choose the right subject stream and future career, without confusion or stress, using scientific psychological tests and personalized guidance.”
                  </p>
                  <div className="pl-6 border-l-4 border-primary/30 py-2">
                    <p className="text-foreground/80 italic font-normal text-base md:text-lg">
                      “In just 3 days, you will confidently choose the right Class 11 stream without the stress, confusion, and family pressure that usually comes with this decision.”
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-6">
                  <Button size="lg" className="w-full sm:w-auto sm:self-start rounded-xl h-16 px-10 text-lg font-bold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 group bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white border-none">
                    Book My Free Stream Clarity Call Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                  <p className="text-sm font-semibold text-muted-foreground/80 sm:pl-4">Normally Rs. 2000 - <span className="text-orange-500 font-bold">Today It's Free</span></p>
                </div>
              </div>
              
              {/* Hero Image Placeholder */}
              <div className="relative w-full max-w-sm mx-auto lg:max-w-[400px] lg:ml-auto animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
                {/* Decorative elements behind the image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] transform rotate-3 scale-105 blur-xl -z-10" />
                <div className="absolute -inset-1 bg-gradient-to-br from-border/50 to-background rounded-[2.5rem] -z-10" />
                
                <div className="relative aspect-[3/4] rounded-[2.5rem] bg-secondary/40 backdrop-blur-sm border border-border/50 flex flex-col items-center justify-center p-10 text-center overflow-hidden group shadow-2xl shadow-primary/5">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="h-20 w-20 rounded-2xl bg-background shadow-md border border-border/40 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Users className="w-8 h-8 text-primary/60" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Hero Image Area</h3>
                  <p className="text-muted-foreground font-medium mb-6">Professional headshot will be placed here</p>
                  
                  <div className="w-full max-w-[240px] h-2 bg-border/40 rounded-full overflow-hidden">
                    <div className="h-full bg-primary/20 w-1/3 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border/50 flex items-center gap-4 animate-bounce hover:animate-none delay-500">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Clarity Delivered</p>
                    <p className="text-xs font-medium text-muted-foreground">in just 3 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Decorative subtle background shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-foreground">
                Does This Sound Like You?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Problem 1 */}
              <Card className="bg-background/60 backdrop-blur-xl border-border/40 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="mb-6 h-12 w-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl shadow-sm border border-orange-200">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-orange-500 mb-4 leading-snug">
                    "We are confused between Science, Commerce, and Humanities."
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-auto">
                    Marks are creating pressure, relatives are giving opinions, and online advice is overwhelming. You want clarity, but every option feels risky.
                  </p>
                </CardContent>
              </Card>

              {/* Problem 2 */}
              <Card className="bg-background/60 backdrop-blur-xl border-border/40 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group translate-y-0 md:translate-y-8">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="mb-6 h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl shadow-sm border border-green-200">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-4 leading-snug">
                    "I don't want my child to regret this decision later."
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-auto">
                    You're worried that one wrong choice now could lead to loss of confidence, stress, or academic struggles down the line.
                  </p>
                </CardContent>
              </Card>

              {/* Problem 3 */}
              <Card className="bg-background/60 backdrop-blur-xl border-border/40 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="mb-6 h-12 w-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl shadow-sm border border-orange-200">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-orange-500 mb-4 leading-snug">
                    "Parents and students are not on the same page."
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-auto">
                    Conversations turn into arguments. Everyone wants what's best, but reaching an agreement seems impossible without an unbiased expert.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-secondary/30 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col items-center text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About Your Coach - Shailesh Pathak</h2>
              <p className="text-xl text-primary font-semibold mb-6">Career Clarity & Stream Selection Coach</p>
              <div className="h-1.5 w-24 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/3 rounded-full" />
              </div>
            </div>

            <div className="max-w-5xl mx-auto relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Card className="relative border-border/40 shadow-2xl bg-background/80 backdrop-blur-xl overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:shadow-primary/5">
                <CardContent className="p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
                  
                  <div className="flex flex-col text-left space-y-6 order-2 md:order-1">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I help parents and Class 9-10 students make clear, confident stream decisions using structured guidance and psychological insight not guesswork.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      With years of experience working closely with students, I've developed a proven framework to identify their true strengths and align them with the right academic paths.
                    </p>
                    
                    <div className="pt-6 border-t border-border/50">
                       <h4 className="text-lg font-semibold mb-4 text-foreground/80">Professional Background</h4>
                       <ul className="space-y-3">
                         {[
                           "Entrepreneur",
                           "Former Chairman, CII Himachal Pradesh",
                           "Former Chairman, IGBC Chandigarh",
                           "Board Member, Shoolini University"
                         ].map((role, i) => (
                           <li key={i} className="flex items-start gap-3">
                             <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                             <span className="font-medium text-foreground/90">{role}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-2xl bg-muted/30 border-2 border-dashed border-primary/20 flex flex-col items-center justify-center p-8 text-center order-1 md:order-2 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="h-20 w-20 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg">
                        <Users className="w-8 h-8 text-primary/60" />
                      </div>
                      <p className="text-foreground font-bold text-lg mb-2">Coach Profile Image</p>
                      <p className="text-sm text-muted-foreground font-medium max-w-[200px]">Reserved area for Shailesh Pathak's photo</p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How I Help Section */}
        <section id="how-i-help" className="py-32 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr,1.2fr] gap-20 items-center">
              
              <div className="order-2 lg:order-1">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Process</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">How I Help?</h2>
                <div className="space-y-6 text-lg text-muted-foreground/90 font-medium">
                  <p className="leading-relaxed">
                    I help Class 9 & 10 students choose the right Class 11 stream using <strong className="text-foreground font-bold border-b-2 border-primary/20 pb-0.5">scientific psychological assessments</strong>, <strong className="text-foreground font-bold border-b-2 border-primary/20 pb-0.5">strength-based mapping</strong>, and <strong className="text-foreground font-bold border-b-2 border-primary/20 pb-0.5">personalised guidance</strong>.
                  </p>
                  <p className="leading-relaxed">
                    I created the <strong className="text-foreground font-bold">Right Stream Decision Blueprint</strong> so families never have to rely on guesswork, pressure, or random opinions again.
                  </p>
                  <p className="leading-relaxed">
                    My approach is practical, structured, and designed to bring <strong className="text-foreground font-bold">clarity, peace, and confidence</strong> to both parents and students.
                  </p>
                </div>
              </div>
              
              <div className="grid gap-6 order-1 lg:order-2">
                {[
                  {
                    num: "1",
                    title: "Scientific Psychological Assessments",
                    desc: "Data-driven insights to uncover natural aptitudes and true potential.",
                    icon: <BrainCircuit className="w-6 h-6 text-primary" />
                  },
                  {
                    num: "2",
                    title: "Strength-Based Mapping",
                    desc: "Aligning personal strengths with the right academic and career paths.",
                    icon: <BookOpen className="w-6 h-6 text-primary" />
                  },
                  {
                    num: "3",
                    title: "Personalised Guidance",
                    desc: "One-on-one support tailored to your unique family situation and goals.",
                    icon: <Users className="w-6 h-6 text-primary" />
                  }
                ].map((item, i) => (
                  <Card key={i} className={`shadow-sm hover:shadow-xl transition-all duration-500 border-border/40 bg-background/50 backdrop-blur-sm group overflow-hidden ${i === 1 ? 'lg:translate-x-8' : ''}`}>
                    <CardContent className="p-6 md:p-8 flex gap-6 items-start relative z-10">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-secondary/20 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                What Client Say <span className="border-b-4 border-primary">About Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Testimonial 1 */}
              <Card className="bg-background/80 backdrop-blur-xl border-border/40 shadow-xl shadow-primary/5 hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group">
                <CardContent className="p-8 lg:p-10 flex flex-col h-full relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground/90 leading-relaxed text-lg font-medium mb-8 italic">
                    "Before this call, we were completely stuck. My son was good in studies, but unsure about Science. I was scared of closing doors for him. After the call, everything became clear. We finally understood his strengths and took a decision with confidence - without pressure."
                  </p>
                  <div className="mt-auto pt-6 border-t border-border/50">
                    <p className="font-bold text-foreground text-lg">Anita Sharma</p>
                    <p className="text-primary font-medium text-sm">Parent of Class 10 Student</p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-background/80 backdrop-blur-xl border-border/40 shadow-xl shadow-primary/5 hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden group">
                <CardContent className="p-8 lg:p-10 flex flex-col h-full relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground/90 leading-relaxed text-lg font-medium mb-8 italic">
                    "Our son never argued, but he had completely withdrawn from the discussion. Whenever we mentioned stream selection, he would say 'anything is fine.' During the session, Mr. Shailesh Asked questions that helped him open up. For the first time, we heard what he actually wanted. The atmosphere at home changed immediately. the decision was not forced. It became a shared choice."
                  </p>
                  <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-foreground text-lg">Happy Parent</p>
                      <p className="text-primary font-medium text-sm">Class 10 Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="relative rounded-[3rem] overflow-hidden bg-foreground text-background py-20 px-8 text-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-20" />
              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Ready to Find Your True Path?</h2>
                <p className="text-lg md:text-xl text-background/80 font-medium">
                  Stop guessing and start planning your future with confidence.
                </p>
                <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/20">
                  Book Your Consultation Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-secondary/40 border-t border-border/40 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="font-heading font-extrabold text-2xl tracking-tighter flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center text-sm">SP</div>
              Shailesh Pathak
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            </div>
          </div>
          <div className="text-center text-sm font-medium text-muted-foreground/60 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>Copyright © 2025 shaileshpathak.in</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
