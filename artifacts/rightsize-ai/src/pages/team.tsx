import { motion } from "framer-motion";
import { Link } from "wouter";
import { Activity, ArrowLeft, ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const TEAM = [
  {
    name: "Guillaume Ehinger",
    initials: "GE",
    role: "Product & Technology",
    company: "Google",
    companyFull: "Google (AI Infrastructure)",
    linkedin: "https://www.linkedin.com/in/gehinger/",
    gradient: "from-blue-500 to-cyan-400",
    bio: "Ran AI systems where performance, cost, and security all matter simultaneously at planetary scale. At Google, Guillaume built and operated AI infrastructure that serves billions of users — giving him a rare, grounded understanding of what it costs when AI systems are mismanaged. He brings that discipline to RightSize AI's product and technical architecture.",
    expertise: ["AI Infrastructure", "Platform Engineering", "Cost Optimization", "Security"],
    photo: null,
  },
  {
    name: "Etay Zwick",
    initials: "EZ",
    role: "Market Strategy",
    company: "Attuned Futures",
    companyFull: "Attuned Futures (Enterprise Investment)",
    linkedin: "https://www.linkedin.com/in/etay-zwick/",
    gradient: "from-violet-500 to-purple-400",
    bio: "Connects frontier technology to real enterprise investment decisions. Etay has spent his career at the intersection of emerging technology and institutional capital, developing deep relationships with CFOs and investment committees who are now grappling with AI accountability. He leads RightSize AI's go-to-market strategy and buyer relationships.",
    expertise: ["Enterprise Strategy", "Investment Relations", "CFO Relationships", "Market Development"],
    photo: null,
  },
  {
    name: "Alex Paterson",
    initials: "AP",
    role: "Monetization & Sales",
    company: "Cisco Systems",
    companyFull: "Cisco Systems (Enterprise AI)",
    linkedin: "https://www.linkedin.com/in/alex-paterson-8a300921/",
    gradient: "from-emerald-500 to-teal-400",
    bio: "Turns complex AI and network systems into measurable, controllable operations for large enterprises. At Cisco, Alex drove the commercialization of AI capabilities across enterprise accounts — learning firsthand why most AI deployments fail to deliver ROI, and how to structure deals that align costs to outcomes. He leads revenue and sales architecture at RightSize AI.",
    expertise: ["Enterprise Sales", "AI Monetization", "Revenue Architecture", "Product-Led Growth"],
    photo: null,
  },
  {
    name: "David Mindham",
    initials: "DM",
    role: "Operations & Ecosystem",
    company: "EDP Renewables",
    companyFull: "EDP Renewables (Risk & Operations)",
    linkedin: "https://www.linkedin.com/in/david-mindham-95168341/",
    gradient: "from-orange-500 to-amber-400",
    bio: "Priced risk and operational constraints in systems where inefficiency is genuinely costly. At EDP Renewables, David operated in an environment where regulatory exposure and operational waste translate directly to financial liability — the exact conditions our target clients face. He brings operational rigor and risk pricing expertise to RightSize AI's platform design.",
    expertise: ["Risk Pricing", "Regulated Operations", "Compliance Systems", "Energy Sector"],
    photo: null,
  },
  {
    name: "Ravikumaran Govender",
    initials: "RG",
    role: "Financials & Funding",
    company: "Momentum Group",
    companyFull: "Momentum Group Ltd (Financial Institutions)",
    linkedin: "https://www.linkedin.com/in/ravikumarangovender/",
    gradient: "from-rose-500 to-pink-400",
    bio: "Builds governed, scalable AI systems inside complex financial institutions. At Momentum Group, Ravi navigated the unique challenge of deploying AI in a heavily regulated financial environment — where data sovereignty, audit trails, and board-level accountability are non-negotiable. He leads RightSize AI's financial strategy and capital approach.",
    expertise: ["Financial AI Governance", "Capital Strategy", "Regulated Finance", "AI Compliance"],
    photo: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TeamNav />
      <main>
        <TeamHero />
        <TeamGrid />
        <ClosingSection />
      </main>
      <TeamFooter />
    </div>
  );
}

function TeamNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">RightSize AI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/#platform" className="hover:text-foreground transition-colors">Platform</Link>
          <Link href="/#demo" className="hover:text-foreground transition-colors">Demo</Link>
          <Link href="/#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/team" className="text-foreground font-semibold border-b border-primary pb-0.5">Team</Link>
        </div>
        <Link href="/" className="inline-flex">
          <Button variant="outline" size="sm" className="gap-2 border-border/50 font-mono text-xs uppercase">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </Button>
        </Link>
      </div>
    </nav>
  );
}

function TeamHero() {
  return (
    <section className="pt-40 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
            TRIUM Global EMBA · NYU Stern / LSE / HEC Paris · Capstone 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
            We didn't find this problem<br />in a research paper.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every member of this team has encountered the problem RightSize AI is solving — not read about it, but lived it professionally in systems where the cost of getting AI wrong was material.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Avatar({ member }: { member: typeof TEAM[0] }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
      <span className="text-4xl font-bold text-white/90 font-display tracking-tight select-none">
        {member.initials}
      </span>
    </div>
  );
}

function TeamGrid() {
  return (
    <section className="pb-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {TEAM.map((member) => (
            <motion.div key={member.name} variants={cardVariants}>
              <div
                className="group rounded-2xl border border-border/50 bg-card/30 overflow-hidden hover:border-border transition-all duration-300 hover:bg-card/50"
                data-testid={`card-team-${member.initials.toLowerCase()}`}
              >
                <div className="flex gap-5 p-6 pb-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 ring-2 ring-border/30 group-hover:ring-primary/30 transition-all duration-300">
                    <Avatar member={member} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                    <p className="text-xs font-mono text-primary uppercase tracking-wider mt-0.5">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-1">{member.companyFull}</p>
                  </div>
                </div>

                <div className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>

                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1 border-t border-border/30">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`link-linkedin-${member.initials.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group/link"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>View on LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="py-20 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">The closing argument</p>
          <blockquote className="text-xl md:text-2xl text-foreground font-display leading-relaxed mb-8">
            "88% of organisations use AI. 95% of pilots fail to deliver measurable return. The EU AI Act compliance clock is now running. The question is not whether enterprises need RightSize AI — the question is how quickly we can get in front of them."
          </blockquote>
          <Link href="/#platform" className="inline-flex">
            <Button size="lg" className="font-mono text-xs uppercase h-12 px-8 gap-2">
              Explore the Platform <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TeamFooter() {
  return (
    <footer className="border-t border-border/50 bg-background py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
            <Activity className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="font-mono text-xs">RightSize AI · TRIUM Capstone 2026</span>
        </div>
        <p className="font-mono text-xs">NYU Stern · LSE · HEC Paris</p>
      </div>
    </footer>
  );
}
