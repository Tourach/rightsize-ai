import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldAlert, BarChart3, Fingerprint, Activity, Server, Database, CheckCircle2, Linkedin, ExternalLink } from "lucide-react";
import DashboardDemo from "@/components/dashboard-demo";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <OpportunitySection />
        <SolutionSection />
        <DemoSection />
        <HowItWorksSection />
        <CompetitiveSection />
        <PricingSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">RightSize AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#platform" className="hover:text-foreground transition-colors">Platform</a>
          <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <Link href="/team" className="hover:text-foreground transition-colors">Team</Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-40 pb-24 px-6 relative overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-mono text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            In Development · Launching 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
            The AI Value Intelligence Platform for Regulated Enterprises.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Consolidate cost, risk, and ROI across your entire AI portfolio. Precision governance built for CFOs, CIOs, and CROs.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 pt-10 border-t border-border/50 flex flex-col items-center"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Governing every model your enterprise touches</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 md:gap-x-14 opacity-50 hover:opacity-80 transition-all duration-500 max-w-3xl">
            <span className="text-sm font-bold tracking-wider font-mono">OpenAI</span>
            <span className="text-sm font-bold tracking-wider font-mono">Anthropic</span>
            <span className="text-sm font-bold tracking-wider font-mono">Azure AI</span>
            <span className="text-sm font-bold tracking-wider font-mono">GCP Vertex</span>
            <span className="text-sm font-bold tracking-wider font-mono">AWS Bedrock</span>
            <span className="text-sm font-bold tracking-wider font-mono text-primary/80">Custom Suppliers</span>
            <span className="text-sm font-bold tracking-wider font-mono text-primary/80">Self-Hosted Models</span>
            <span className="text-sm font-bold tracking-wider font-mono text-primary/80">Shadow AI Tools</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-24 bg-card/50 border-y border-border/50" id="platform">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Enterprise AI is out of control.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">The gap between pilot hype and measurable enterprise value is widening.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-background border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <BarChart3 className="w-24 h-24 text-destructive" />
            </div>
            <div className="text-destructive font-mono mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-current rounded-full" /> For the CFO
            </div>
            <h3 className="text-5xl font-bold font-display mb-2">30%</h3>
            <p className="text-lg font-medium mb-4 text-foreground/90">Wasted AI Spend</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              With average monthly enterprise AI spend growing 36% YoY, up to a third is wasted on redundant models, idle instances, and over-provisioned resources. Only 29% of executives can confidently measure ROI.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-background border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Server className="w-24 h-24 text-primary" />
            </div>
            <div className="text-primary font-mono mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-current rounded-full" /> For the CIO/CTO
            </div>
            <h3 className="text-5xl font-bold font-display mb-2">95%</h3>
            <p className="text-lg font-medium mb-4 text-foreground/90">Pilots Miss P&L Impact</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Shadow AI fragmentation means engineering teams spin up independent infrastructure. "The AI Tax" means 37% of time ostensibly saved is lost to rework and correction.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-background border border-border/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldAlert className="w-24 h-24 text-chart-3" />
            </div>
            <div className="text-chart-3 font-mono mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-current rounded-full" /> For the CRO
            </div>
            <h3 className="text-5xl font-bold font-display mb-2">3%</h3>
            <p className="text-lg font-medium mb-4 text-foreground/90">EU AI Act Penalties</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Of global turnover — the EU AI Act penalty ceiling, taking effect August 2026. Enterprise risk is invisible. Customer data flows through unauthorized endpoints without clear sovereignty guarantees.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OpportunitySection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">A $4.5B Addressable Opportunity.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The market is shifting from "exploration" to "operational efficiency." RightSize AI targets a $15B Total AI spend market, focusing on the $1.5B SAM of enterprise governance. Our year 3 target is $10M ARR.
            </p>
            <div className="space-y-6">
              <div className="p-4 border-l-2 border-primary bg-primary/5">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-primary font-mono text-xs">01.</span> Regulatory Catalyst
                </h4>
                <p className="text-sm text-muted-foreground">EU AI Act (Aug 2026) and CSRD mandates force enterprise-wide reporting and compliance infrastructure.</p>
              </div>
              <div className="p-4 border-l-2 border-chart-2 bg-chart-2/5">
                <h4 className="font-semibold mb-1 flex items-center gap-2">
                  <span className="text-chart-2 font-mono text-xs">02.</span> Margin Pressure
                </h4>
                <p className="text-sm text-muted-foreground">Board mandates to convert GenAI spend from "innovation budgets" into hard P&L improvements.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-white/25 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[inset_0_0_60px_rgba(255,255,255,0.04)]">
                <div className="text-center absolute top-10">
                  <p className="text-3xl font-display font-bold">$15B</p>
                  <p className="text-xs font-mono text-muted-foreground uppercase">TAM</p>
                </div>
                
                <div className="w-[70%] h-[70%] rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 backdrop-blur-md">
                  <div className="text-center absolute top-1/4">
                    <p className="text-2xl font-display font-bold text-primary">$1.5B</p>
                    <p className="text-xs font-mono text-primary/70 uppercase">SAM</p>
                  </div>
                  
                  <div className="w-[60%] h-[60%] rounded-full border border-primary flex items-center justify-center bg-primary/20 backdrop-blur-xl shadow-[0_0_50px_rgba(0,210,255,0.2)]">
                    <div className="text-center">
                      <p className="text-xl font-display font-bold text-white">$10M</p>
                      <p className="text-[10px] font-mono text-white/80 uppercase">Target ARR (Y3)</p>
                    </div>
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

function SolutionSection() {
  return (
    <section className="py-24 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 text-center max-w-3xl mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Four Dimensions of Intelligence.</h2>
        <p className="text-lg text-muted-foreground">
          RightSize AI consolidates disparate enterprise data into a single pane of glass, correlating technical consumption with financial output.
        </p>
      </div>

      <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Cost Intelligence", desc: "Granular attribution by team, model, and prompt. Find wasted compute instantly.", icon: Database, color: "text-primary" },
          { title: "Value Intelligence", desc: "Correlate AI activity with business outcomes. Identify the 'model quality gap'.", icon: Activity, color: "text-chart-2" },
          { title: "Risk Intelligence", desc: "Real-time EU AI Act & data sovereignty flagging before deployment.", icon: ShieldAlert, color: "text-chart-3" },
          { title: "Sustainability", desc: "Carbon footprint tracking for CSRD compliance and green IT reporting.", icon: Fingerprint, color: "text-chart-4" }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
            <item.icon className={`w-10 h-10 mb-4 ${item.color}`} />
            <h4 className="text-xl font-display font-bold mb-2">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="demo">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">The Terminal for Enterprise AI.</h2>
          <p className="text-lg text-muted-foreground">See everything. Predict anything. Control the sprawl.</p>
        </div>
        
        <div className="max-w-6xl mx-auto rounded-xl border border-border/80 bg-background/50 backdrop-blur-2xl shadow-2xl shadow-primary/10 overflow-hidden">
          {/* Browser Chrome */}
          <div className="h-12 border-b border-border/50 flex items-center px-4 gap-4 bg-muted/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-chart-3/80" />
              <div className="w-3 h-3 rounded-full bg-chart-2/80" />
            </div>
            <div className="flex-1 max-w-md mx-auto h-7 bg-background/50 rounded-md border border-border/50 flex items-center justify-center text-xs font-mono text-muted-foreground">
              trium.gehinger.com/dashboard/executive
            </div>
          </div>
          
          <div className="p-0">
            <DashboardDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Deploy in days. Value in hours.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-background border border-border">
            <div className="text-6xl font-display font-black text-muted/50 absolute top-4 right-4">1</div>
            <h3 className="text-xl font-bold mb-2 mt-4 relative z-10">Tier 1: Observability</h3>
            <p className="text-muted-foreground text-sm mb-4">30-day deployment via log integration. No infrastructure changes required.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Multi-model cost aggregation</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Shadow AI detection</li>
            </ul>
          </div>

          <div className="relative p-8 rounded-2xl bg-background border border-primary/50 shadow-[0_0_30px_rgba(0,210,255,0.1)]">
            <div className="text-6xl font-display font-black text-primary/10 absolute top-4 right-4">2</div>
            <h3 className="text-xl font-bold mb-2 mt-4 relative z-10 text-primary">Tier 2: Governance</h3>
            <p className="text-muted-foreground text-sm mb-4">Real-time API gateway integration for active policy enforcement.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Hard spend limits & routing</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Data sovereignty blocking</li>
            </ul>
          </div>

          <div className="relative p-8 rounded-2xl bg-background border border-border">
            <div className="text-6xl font-display font-black text-muted/50 absolute top-4 right-4">3</div>
            <h3 className="text-xl font-bold mb-2 mt-4 relative z-10">Tier 3: Acceleration</h3>
            <p className="text-muted-foreground text-sm mb-4">Full orchestration platform and what-if scenario simulator.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Dynamic model swapping</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ROI predictive modeling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompetitiveSection() {
  const competitors = [
    { name: "RightSize AI", cost: true, value: true, risk: true, compare: true, highlight: true },
    { name: "CloudZero / Apptio", cost: true, value: false, risk: false, compare: false },
    { name: "Larridin / specialized SaaS", cost: true, value: true, risk: false, compare: false },
    { name: "LiteLLM / PortKey", cost: true, value: false, risk: false, compare: true },
    { name: "Native Cloud (AWS/Azure)", cost: true, value: false, risk: false, compare: false },
    { name: "Big Consulting", cost: false, value: true, risk: true, compare: false }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">The only holistic platform.</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-border font-mono text-xs uppercase text-muted-foreground w-[40%]">Solution</th>
                <th className="p-4 border-b border-border font-mono text-xs uppercase text-muted-foreground text-center">Cost</th>
                <th className="p-4 border-b border-border font-mono text-xs uppercase text-muted-foreground text-center">Value</th>
                <th className="p-4 border-b border-border font-mono text-xs uppercase text-muted-foreground text-center">Risk</th>
                <th className="p-4 border-b border-border font-mono text-xs uppercase text-muted-foreground text-center">Compare</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp, i) => (
                <tr key={i} className={`border-b border-border/50 ${comp.highlight ? 'bg-primary/5' : ''}`}>
                  <td className={`p-4 font-medium ${comp.highlight ? 'text-primary font-bold' : ''}`}>{comp.name}</td>
                  <td className="p-4 text-center">{comp.cost && <CheckCircle2 className={`w-5 h-5 mx-auto ${comp.highlight ? 'text-primary' : 'text-muted-foreground'}`} />}</td>
                  <td className="p-4 text-center">{comp.value && <CheckCircle2 className={`w-5 h-5 mx-auto ${comp.highlight ? 'text-primary' : 'text-muted-foreground'}`} />}</td>
                  <td className="p-4 text-center">{comp.risk && <CheckCircle2 className={`w-5 h-5 mx-auto ${comp.highlight ? 'text-primary' : 'text-muted-foreground'}`} />}</td>
                  <td className="p-4 text-center">{comp.compare && <CheckCircle2 className={`w-5 h-5 mx-auto ${comp.highlight ? 'text-primary' : 'text-muted-foreground'}`} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-24 bg-card border-y border-border/50" id="pricing">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Priced for Enterprise Value.</h2>
          <p className="text-lg text-muted-foreground">Indicative pricing for launch. Final tiers confirmed at GA.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-background border border-border">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-sm text-muted-foreground mb-6">Up to 5 AI use cases</p>
            <div className="mb-6">
              <span className="text-4xl font-display font-bold">$50K</span>
              <span className="text-muted-foreground">/yr</span>
            </div>
            <Button className="w-full mb-6 font-mono text-xs uppercase" variant="outline">Express Interest</Button>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Cost Intelligence</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Basic Risk Reporting</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-background border-2 border-primary relative shadow-[0_0_40px_rgba(0,210,255,0.1)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-mono font-bold rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2">Growth</h3>
            <p className="text-sm text-muted-foreground mb-6">Up to 15 AI use cases</p>
            <div className="mb-6">
              <span className="text-4xl font-display font-bold">$90K</span>
              <span className="text-muted-foreground">/yr</span>
            </div>
            <Button className="w-full mb-6 font-mono text-xs uppercase">Request Briefing</Button>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Starter features</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Value Intelligence</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Active Governance API</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-background border border-border">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-sm text-muted-foreground mb-6">Unlimited use cases</p>
            <div className="mb-6">
              <span className="text-4xl font-display font-bold">$150K+</span>
              <span className="text-muted-foreground">/yr</span>
            </div>
            <Button className="w-full mb-6 font-mono text-xs uppercase" variant="outline">Request Briefing</Button>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Growth features</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> EU AI Act Exports</li>
              <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> On-prem deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const TEAM_PREVIEW = [
  { name: "Guillaume Ehinger", initials: "GE", role: "Product & Technology", company: "Google", gradient: "from-blue-500 to-cyan-400", linkedin: "https://www.linkedin.com/in/gehinger/", photo: "/guillaume.jpeg" as string | null },
  { name: "Etay Zwick", initials: "EZ", role: "Market Strategy", company: "Attuned Futures", gradient: "from-violet-500 to-purple-400", linkedin: "https://www.linkedin.com/in/etay-zwick/", photo: "/etay.jpeg" as string | null },
  { name: "Alex Paterson", initials: "AP", role: "Monetization & Sales", company: "Cisco Systems", gradient: "from-emerald-500 to-teal-400", linkedin: "https://www.linkedin.com/in/alex-paterson-8a300921/", photo: "/alex.jpeg" as string | null },
  { name: "David Mindham", initials: "DM", role: "Operations & Ecosystem", company: "EDP Renewables", gradient: "from-orange-500 to-amber-400", linkedin: "https://www.linkedin.com/in/david-mindham-95168341/", photo: "/david.jpeg" as string | null },
  { name: "Ravikumaran Govender", initials: "RG", role: "Financials & Funding", company: "Momentum Group", gradient: "from-rose-500 to-pink-400", linkedin: "https://www.linkedin.com/in/ravikumarangovender/", photo: "/ravikumaran.jpeg" as string | null },
];

function TeamSection() {
  return (
    <section className="py-32 px-6" id="team">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4">TRIUM Global EMBA · NYU Stern / LSE / HEC Paris · Capstone 2026</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Built by operators.</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">We didn't find this problem in a research paper. Every one of us lived it.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {TEAM_PREVIEW.map((member) => (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-300 flex items-center gap-4"
              data-testid={`link-team-${member.initials.toLowerCase()}`}
            >
              <div className={`w-14 h-14 rounded-xl shrink-0 overflow-hidden ring-1 ring-border/30 group-hover:ring-primary/30 transition-all duration-300`}>
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                    <span className="text-lg font-bold text-white/90 select-none">{member.initials}</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight truncate">{member.name}</p>
                <p className="text-xs font-mono text-primary uppercase tracking-wide mt-0.5">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                  <Linkedin className="w-3 h-3" />
                  {member.company}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Link href="/team" className="inline-flex">
            <Button variant="outline" className="border-border/50 font-mono text-xs uppercase gap-2 hover:border-primary/50">
              Meet the full team <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">RightSize AI</span>
          </div>
          <div className="text-sm font-mono text-muted-foreground text-center md:text-right">
            <p>TRIUM Global EMBA</p>
            <p>NYU Stern · LSE · HEC Paris</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RightSize AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Prospectus</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
