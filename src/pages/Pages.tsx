import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, ChevronRight, ExternalLink, Mail, MapPin, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, contact, projects, services, technologies } from '../data/site'

function PageHero({label,title,desc}:{label:string,title:string,desc:string}) { return <section className="page-hero section-wrap"><div className="eyebrow">{label}</div><h1>{title.split('|').map((x,i)=><span className={i===title.split('|').length-1?'accent-line':''} key={i}>{x}</span>)}</h1><p>{desc}</p></section> }

export function About() { return <><PageHero label="THE STUDIO / ABOUT" title="INDEPENDENT|BY DESIGN.|CURIOUS|BY NATURE." desc="A developer-led digital studio built around clear thinking, thoughtful execution, and useful technology."/><section className="section about-body"><div className="section-label">A NOTE FROM HASEEB</div><div><h2>BUILD WITH INTENTION.<br/><em>KEEP IT HUMAN.</em></h2><p className="lead">I'm Haseeb Nawaz, a full-stack developer based in Islamabad, Pakistan.</p><p>With around one year of hands-on development experience, I work across independent projects, practical experiments, and ongoing learning. I enjoy bringing ideas to life through thoughtful interfaces, dependable backend systems, and integrations that solve real problems.</p><p>BuildWithHaseeb is my independent digital studio: a place to combine design sensibility with a developer's mindset and a business-first approach.</p><h3>How I work</h3><ul className="check-list">{['Understand the problem before choosing the tools.','Keep scope, trade-offs, and timelines transparent.','Build for real use, not just a polished screenshot.','Test carefully and communicate throughout.'].map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul></div></section><section className="section values-grid"><div><span>01 / CLARITY</span><h3>Good questions<br/>come first.</h3></div><div><span>02 / CRAFT</span><h3>Details make<br/>the experience.</h3></div><div><span>03 / PRACTICALITY</span><h3>Useful beats<br/>unnecessary.</h3></div></section></> }

export function Services() { return <><PageHero label="CAPABILITIES / SERVICES" title="DIGITAL WORK|THAT WORKS|FOR YOU." desc="From the first interaction to the systems behind it, each service is shaped around a real business need."/><section className="section services-page-list">{services.map(s=><article className="service-detail" key={s.n}><span>{s.n}</span><div><h2>{s.title}</h2><p className="lead">{s.desc}</p><p>{s.detail}</p><div className="tag-row">{s.tags.map(t=><b key={t}>{t}</b>)}</div></div><Link to="/contact" aria-label={`Discuss ${s.title}`}><ArrowUpRight/></Link></article>)}</section></> }


export function Work() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () => filter === 'All'
      ? projects
      : projects.filter(p => p.category === filter),
    [filter]
  )

  return (
    <>
      <PageHero
        label="SELECTED WORK / PROJECT EXPLORATIONS"
        title="BUILT WITH|PURPOSE.|MADE TO|MOVE."
        desc="A selection of product working demonstrations. Each project is clearly labelled so the context stays honest."
      />

      <section className="section work-page">
        <div className="filter-row">
          {categories.map(c => (
            <button
              className={filter === c ? 'active' : ''}
              key={c}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="project-grid work-grid">
          {filtered.map((p, i) => (
            <article className="project-card" key={p.title}>
              <div className="project-art">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="project-thumbnail"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-art-inner">
                    <span>{p.category.toUpperCase()}</span>
                    <strong>{p.title}</strong>
                    <div className="project-abstract">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                )}
              </div>

              <div className="project-meta">
                <div>
                  <h3>{p.title}</h3>
                  <span>{p.kind} · {p.category}</span>
                </div>

                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title} demo`}
                  >
                    <ExternalLink />
                  </a>
                ) : (
                  <span className="concept-label">EXPLORATION</span>
                )}
              </div>

              <p>{p.description}</p>

              <div className="tag-row">
                {p.tech.map(t => (
                  <b key={t}>{t}</b>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="fine-print">
          Some Live projects are portfolio explorations, and some are 
          of paid client engagements. Only supplied live URLs are linked.
        </p>
      </section>
    </>
  )
}


export function Technology() { return <><PageHero label="TECHNOLOGY / THE TOOLKIT" title="TOOLS ARE|A MEANS.|THE SOLUTION|IS THE POINT." desc="A practical toolkit across frontend, backend, databases, and integrations. The right stack depends on the product and its requirements."/><section className="section tech-page">{Object.entries(technologies).map(([group,items],i)=><div className="tech-detail" key={group}><span>0{i+1} / {group.toUpperCase()}</span><div><h2>{group}</h2><div className="tech-cloud">{items.map(t=><b key={t}>{t}</b>)}</div></div></div>)}</section></> }

export function Contact() {
 const [form,setForm]=useState({name:'',email:'',company:'',website:'',service:'',budget:'',details:''})
 const [error,setError]=useState('')
 const update=(key:string,value:string)=>setForm(v=>({...v,[key]:value}))
 const submit=(e:React.FormEvent)=>{e.preventDefault(); if(!form.name.trim()||!form.email.trim()||!form.service||!form.details.trim()){setError('Please complete your name, email, service, and project details.');return} if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){setError('Please enter a valid email address.');return} const body=`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nWebsite: ${form.website}\nService: ${form.service}\nBudget: ${form.budget}\n\nProject details:\n${form.details}`; window.location.href=`mailto:${contact.email}?subject=${encodeURIComponent('Project enquiry — '+form.name)}&body=${encodeURIComponent(body)}`;setError('Your email app should open with the enquiry prepared. The website has not submitted or stored this form.') }
 return <><PageHero label="CONTACT / START A CONVERSATION" title="LET'S TALK ABOUT|WHAT YOU'RE|BUILDING." desc="Have a project in mind? Share a little context and let's explore the possibilities."/><section className="section contact-layout"><div className="contact-aside"><div className="section-label">DIRECT CONTACT</div><a className="contact-line" href={`mailto:${contact.email}`}><Mail/>{contact.email}<ArrowUpRight/></a><div className="contact-line"><MapPin/> Islamabad, Pakistan · Remote worldwide</div><div className="social-links"><a href={contact.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
  <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
  <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
  <a href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
  <a href={contact.fiverr} target="_blank" rel="noreferrer">Fiverr ↗</a></div><div className="calendar-card"><span>READY WHEN YOU ARE</span><h3>Prefer a conversation?</h3><p>Choose a time through the actual Calendly page.</p><a className="button button-acid" href={contact.calendly} target="_blank" rel="noreferrer">Book a discovery call <ArrowUpRight size={16}/></a></div></div><form className="contact-form" onSubmit={submit}><div className="form-heading"><span>PROJECT ENQUIRY / 01</span><h2>Tell me what<br/><em>you're imagining.</em></h2></div><div className="form-grid"><label>Full name *<input value={form.name} onChange={e=>update('name',e.target.value)} required placeholder="Your name"/></label><label>Business email *<input type="email" value={form.email} onChange={e=>update('email',e.target.value)} required placeholder="you@company.com"/></label><label>Company name<input value={form.company} onChange={e=>update('company',e.target.value)} placeholder="Company (optional)"/></label><label>Website URL<input value={form.website} onChange={e=>update('website',e.target.value)} placeholder="https://"/></label><label className="full">Service required *<select value={form.service} onChange={e=>update('service',e.target.value)} required><option value="">Choose a service</option>{['Website Design & Development','Full-Stack / SaaS Development','AI Lead Conversion System','CRM & Workflow Automation','AI Chatbot / Voice Agent','E-commerce Development','API Integration','Guest Posting / SEO Outreach','Other'].map(x=><option key={x}>{x}</option>)}</select></label><label className="full">Estimated budget<input value={form.budget} onChange={e=>update('budget',e.target.value)} placeholder="Optional"/></label><label className="full">Project details *<textarea value={form.details} onChange={e=>update('details',e.target.value)} required rows={5} placeholder="What are you looking to build?"/></label></div>{error&&<p className="form-message" role="status">{error}</p>}<button className="button button-acid" type="submit">Prepare email enquiry <Send size={16}/></button><p className="fine-print">No backend is configured. This form validates your details and prepares an email in your mail app; it does not claim to submit or store anything.</p></form></section></>
}

export function Legal({type}:{type:'privacy'|'terms'}) { return <><PageHero label={`INFORMATION / ${type.toUpperCase()}`} title={type==='privacy'?'PRIVACY|POLICY.':'TERMS &|CONDITIONS.'} desc="A plain-language starter document. Have this reviewed for your jurisdiction and actual business practices before launch."/><section className="section legal-copy">{type==='privacy'?<><h2>Privacy overview</h2><p>This starter website does not include analytics, advertising trackers, a database, or a server-side contact form. The contact form prepares an email using your device's mail application.</p><h3>Information you choose to send</h3><p>If you contact the studio by email or an external service, the information you provide is handled through that service and the resulting conversation.</p><h3>External links</h3><p>This website links to third-party services such as Calendly, GitHub, LinkedIn, and Fiverr. Their privacy practices are governed by their own policies.</p><h3>Contact</h3><p>Questions can be sent to <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p></>:<><h2>Website information</h2><p>Website content is provided for general information about BuildWithHaseeb and its services. Project are identified as live and should not be interpreted as verified client engagements.</p><h3>Project scope</h3><p>Any development engagement requires a separate written agreement defining scope, deliverables, fees, timelines, responsibilities, and acceptance criteria.</p><h3>Third-party services</h3><p>External tools, APIs, hosting providers, and communication platforms may have separate terms and usage costs.</p><h3>Contact</h3><p>For questions, email <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p></>}</section></> }
