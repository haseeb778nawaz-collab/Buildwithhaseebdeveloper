import { ArrowDown, ArrowUpRight, MoveUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services, projects, technologies, contact } from '../data/site'

export function Hero() {
 return <section className="hero section-wrap">
   <div className="hero-copy">
    <div className="eyebrow"><span className="status-dot"/> BUILDWITHHASEEB <span className="eyebrow-divider">/</span> DIGITAL SOLUTIONS STUDIO</div>
    <motion.h1 initial="hidden" animate="show" variants={{hidden:{},show:{transition:{staggerChildren:.075}}}}>{['WE BUILD','DIGITAL','EXPERIENCES','THAT MOVE','BUSINESSES','FORWARD.'].map((line,i)=><motion.span key={line} variants={{hidden:{y:48,opacity:0},show:{y:0,opacity:1,transition:{duration:.7,ease:[.22,1,.36,1]}}}} className={i===2||i===5?'accent-line':''}>{line}</motion.span>)}</motion.h1>
    <div className="hero-bottom"><p>From AI-powered lead systems to stunning websites, we help ambitious businesses work smarter and grow globally.</p><div className="hero-actions"><Link className="button button-acid" to="/work">Explore our work <ArrowUpRight size={17}/></Link><Link className="text-link" to="/contact">Let's talk <MoveUpRight size={16}/></Link></div></div>
   </div>
   <div className="hero-art" aria-label="Abstract digital interface composition">
    <div className="orb orb-one"/><div className="orb orb-two"/>
    <div className="art-grid"/>
    <div className="floating-panel panel-main"><div className="panel-head"><span className="panel-dot"/> BUSINESS GROWTH OVERVIEW <span className="panel-live">LIVE PREVIEW</span></div><div className="panel-title">Your business. Smarter.<br/>Automate. Convert. Grow.</div><div className="panel-chart"><div className="chart-bars">{[35,58,43,78,55,90,67,100,74,88,62,96].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div><div className="panel-foot"><span>WORKFLOW ACTIVITY</span><strong>+ <b>CONNECTED</b></strong></div></div>
    <div className="floating-panel panel-mini"><Sparkles size={15}/><span>New lead received</span><strong>01 / 04</strong></div>
    <div className="art-coordinate">33° 41' N<br/>73° 03' E</div>
    <div className="art-index">BWH — DIGITAL STUDIO / 2026</div>
   </div>
   <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></div>
 </section>
}

export function Marquee() { return <div className="marquee"><div className="marquee-track">{Array.from({length:2}).map((_,i)=><span key={i}>BUILD <b>✳</b> AUTOMATE <b>✳</b> INTEGRATE <b>✳</b> CONVERT <b>✳</b> INNOVATE <b>✳</b> CREATE <b>✳</b></span>)}</div></div> }

export function Intro() { return <section className="section section-intro"><div className="section-label">01 / THE APPROACH</div><div className="intro-content"><h2>MORE THAN<br/>A WEBSITE.<br/><em>A BETTER WAY<br/>TO BUILD.</em></h2><div className="intro-aside"><span className="asterisk">✳</span><p className="lead">Technology should do more than look impressive. It should solve real problems, simplify processes, and create useful experiences.</p><p>At BuildWithHaseeb, we bring together thoughtful design, dependable development, and practical automation to build digital solutions around real business needs.</p><Link className="text-link" to="/about">Meet the studio <ArrowUpRight size={16}/></Link></div></div></section> }

export function ServicesPreview() { return <section className="section section-services"><div className="section-heading"><div><div className="section-label">02 / CAPABILITIES</div><h2>WHAT WE BRING<br/><em>TO THE TABLE.</em></h2></div><p>From strategy to automation, everything your business needs to grow — under one roof.</p></div><div className="service-list">{services.map(s=><Link to="/services" className="service-row" key={s.n}><span className="service-num">{s.n}</span><div><h3>{s.title}</h3><p>{s.desc}</p></div><ArrowUpRight className="service-arrow"/></Link>)}</div></section> }

export function FeaturedSystem() { return <section className="section feature-system"><div className="feature-copy"><div className="eyebrow">FEATURED SOLUTION / AI BUSINESS AUTOMATION</div><h2>TURN EVERY<br/>ENQUIRY INTO<br/><em>GROWTH.</em></h2><p>A website enquiry should be the beginning of a conversation, not the end of a form submission.</p><Link className="button button-acid" to="/ai-lead-conversion-system">Explore the interactive demo <ArrowUpRight size={17}/></Link></div><div className="crm-visual"><div className="crm-top"><span>PRIMEFLOW / LEAD DESK</span><span className="crm-status">DEMO ENVIRONMENT</span></div><div className="crm-stats"><div><small>NEW ENQUIRIES</small><strong>024</strong><span>Illustrative data</span></div><div><small>QUALIFIED</small><strong>018</strong><span>Sample pipeline</span></div></div><div className="crm-lead"><div className="avatar">JC</div><div><strong>John Carter</strong><small>Kitchen sink leak · Austin, TX</small></div><span className="lead-pill">NEW LEAD</span></div><div className="crm-flow"><span>ENQUIRY</span><i/><span>AI REVIEW</span><i/><span>FOLLOW-UP</span></div><div className="crm-message"><span>ASSISTANT PREVIEW</span><p>“Thanks for reaching out. I can help get the right details to the team.”</p></div></div></section> }

export function WorkPreview() { return <section className="section"><div className="section-heading"><div><div className="section-label">03 / SELECTED WORK</div><h2>BUILT WITH PURPOSE.<br/><em>DESIGNED TO BE USED.</em></h2></div><Link className="text-link" to="/work">View all projects <ArrowUpRight size={16}/></Link></div><div className="project-grid">{projects.slice(0,4).map((p,i)=><Link to="/work" className={`project-tile tile-${i+1}`} key={p.title}><div className="project-art">
  {p.image ? (
    <img
      src={p.image}
      alt={p.title}
      className="project-thumbnail"
    />
  ) : (
    <div className="project-art-inner">
      <span>{p.category.toUpperCase()}</span>
      <strong>{p.title}</strong>
      <div className="project-abstract">{p.title}</div>
    </div>
  )}
</div><div className="project-meta"><div><h3>{p.title}</h3><span>{p.kind} · {p.category}</span></div><ArrowUpRight/></div></Link>)}</div><p className="fine-print">Selected demonstrations. Project type is identified on each listing.</p></section> }

export function Process() { const steps=[['01','Discover','Understand the business, audience, requirements, and goals.'],['02','Plan','Define scope, technical approach, functionality, and direction.'],['03','Design & build','Create the experience, implement functionality, and refine the details.'],['04','Test & deliver','Test responsiveness, performance, and essential workflows.'],['05','Improve','Support future enhancements where agreed.']]; return <section className="section process-section"><div className="section-label">04 / THE METHOD</div><div className="section-heading"><h2>A CLEAR PROCESS.<br/><em>A BETTER BUILD.</em></h2><p>Good work comes from clear thinking, close collaboration, and careful delivery.</p></div><div className="process-grid">{steps.map(s=><div className="process-step" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div></section> }

export function TechStrip() { return <section className="section tech-section"><div className="section-heading"><div><div className="section-label">05 / THE TOOLKIT</div><h2>THE RIGHT TOOLS.<br/><em>FOR THE RIGHT JOB.</em></h2></div><Link to="/technology" className="text-link">Explore technology <ArrowUpRight size={16}/></Link></div><div className="tech-groups">{Object.entries(technologies).map(([group,items])=><div className="tech-group" key={group}><span>{group}</span><div>{items.map(x=><b key={x}>{x}</b>)}</div></div>)}</div></section> }

export function Founder() { return <section className="section founder-section"><div className="founder-copy"><div className="section-label">06 / THE FOUNDER</div><div className="founder-location"><span className="status-dot"/> ISLAMABAD, PAKISTAN <i>·</i> WORKING WORLDWIDE</div><h2>A DEVELOPER'S MINDSET.<br/><em>A BUSINESS-FIRST APPROACH.</em></h2><p className="lead">I'm Haseeb Nawaz, a full-stack developer based in Islamabad, Pakistan.</p><p>I build websites, web applications, and digital products across modern JavaScript technologies and Python frameworks. My approach is straightforward: understand the problem, build the right solution, and communicate clearly throughout.</p><Link to="/about" className="text-link">More about Haseeb <ArrowUpRight size={16}/></Link></div><div className="founder-portrait"><img className="founder-photo" src="projects/images/haseeb-founder.jpg" alt="Haseeb Nawaz, founder of BuildWithHaseeb"/><div className="founder-photo-shade"/><span>HN / FOUNDER & DEVELOPER</span></div></section> }

export function FinalCTA() { return <section className="final-cta"><div className="eyebrow">HAVE A PROJECT IN MIND?</div><h2>HAVE AN IDEA?<br/><em>LET'S MAKE IT REAL.</em></h2><p>Tell us what you're building. We'll start with a clear conversation about the problem and the possibilities.</p><div className="hero-actions"><Link className="button button-acid" to="/contact">Start a project <ArrowUpRight size={17}/></Link><a className="text-link" href={contact.calendly} target="_blank" rel="noreferrer">Book a discovery call <ArrowUpRight size={16}/></a></div></section> }
