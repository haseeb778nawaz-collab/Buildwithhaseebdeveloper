
import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  Mail,
  MapPin,
  Send
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  categories,
  contact,
  projects,
  services,
  technologies
} from '../data/site'

function PageHero({
  label,
  title,
  desc
}: {
  label: string
  title: string
  desc: string
}) {
  const lines = title.split('|')

  return (
    <section className="page-hero section-wrap">
      <div className="eyebrow">{label}</div>
      <h1>
        {lines.map((x, i) => (
          <span
            className={i === lines.length - 1 ? 'accent-line' : ''}
            key={i}
          >
            {x}
          </span>
        ))}
      </h1>
      <p>{desc}</p>
    </section>
  )
}

export function About() {
  return (
    <>
      <PageHero
        label="THE STUDIO / ABOUT"
        title="INDEPENDENT|BY DESIGN.|CURIOUS|BY NATURE."
        desc="A developer-led digital studio built around clear thinking, thoughtful execution, and useful technology."
      />

      <section className="section about-body">
        <div className="section-label">A NOTE FROM HASEEB</div>

        <div>
          <h2>
            BUILD WITH INTENTION.
            <br />
            <em>KEEP IT HUMAN.</em>
          </h2>

          <p className="lead">
            I'm Haseeb Nawaz, a full-stack developer based in Islamabad,
            Pakistan.
          </p>

          <p>
            With around one year of hands-on development experience, I work
            across independent projects, practical experiments, and ongoing
            learning. I enjoy bringing ideas to life through thoughtful
            interfaces, dependable backend systems, and integrations that
            solve real problems.
          </p>

          <p>
            BuildWithHaseeb is my independent digital studio: a place to
            combine design sensibility with a developer's mindset and a
            business-first approach.
          </p>

          <p>
            My work also includes Android application development, with a
            focus on practical functionality, intuitive mobile experiences,
            and applications designed around real user needs.
          </p>

          <h3>How I work</h3>

          <ul className="check-list">
            {[
              'Understand the problem before choosing the tools.',
              'Keep scope, trade-offs, and timelines transparent.',
              'Build for real use, not just a polished screenshot.',
              'Test carefully and communicate throughout.',
              'Choose practical technologies based on project requirements.'
            ].map(x => (
              <li key={x}>
                <Check size={16} />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section values-grid">
        <div>
          <span>01 / CLARITY</span>
          <h3>
            Good questions
            <br />
            come first.
          </h3>
        </div>

        <div>
          <span>02 / CRAFT</span>
          <h3>
            Details make
            <br />
            the experience.
          </h3>
        </div>

        <div>
          <span>03 / PRACTICALITY</span>
          <h3>
            Useful beats
            <br />
            unnecessary.
          </h3>
        </div>
      </section>
    </>
  )
}

export function Services() {
  return (
    <>
      <PageHero
        label="CAPABILITIES / SERVICES"
        title="DIGITAL WORK|THAT WORKS|FOR YOU."
        desc="From modern websites and full-stack applications to Android apps, AI-powered automation, and integrated business systems, each solution is shaped around a real business need."
      />

      <section className="section services-page-list">
        {services.map(s => (
          <article className="service-detail" key={s.n}>
            <span>{s.n}</span>

            <div>
              <h2>{s.title}</h2>
              <p className="lead">{s.desc}</p>
              <p>{s.detail}</p>

              <div className="tag-row">
                {s.tags.map(t => (
                  <b key={t}>{t}</b>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              aria-label={`Discuss ${s.title}`}
            >
              <ArrowUpRight />
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}

export function Work() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter),
    [filter]
  )

  return (
    <>
      <PageHero
        label="SELECTED WORK / PROJECT EXPLORATIONS"
        title="BUILT WITH|PURPOSE.|MADE TO|MOVE."
        desc="A selection of digital projects and working demonstrations. Each project is presented with clear context so visitors can understand what they are viewing."
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
                  <span>
                    {p.kind} · {p.category}
                  </span>
                </div>

                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
          Portfolio concepts are exploratory projects and are not presented
          as paid client engagements. Working demonstrations are labelled
          clearly, and only supplied live demo URLs are linked.
        </p>
      </section>
    </>
  )
}

export function Technology() {
  return (
    <>
      <PageHero
        label="TECHNOLOGY / THE TOOLKIT"
        title="TOOLS ARE|A MEANS.|THE SOLUTION|IS THE POINT."
        desc="A practical toolkit across frontend, backend, databases, and integrations. The right stack depends on the product and its requirements."
      />

      <section className="section tech-page">
        {Object.entries(technologies).map(([group, items], i) => (
          <div className="tech-detail" key={group}>
            <span>0{i + 1} / {group.toUpperCase()}</span>

            <div>
              <h2>{group}</h2>

              <div className="tech-cloud">
                {items.map(t => (
                  <b key={t}>{t}</b>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    details: ''
  })

  const [error, setError] = useState('')

  const update = (key: string, value: string) => {
    setForm(v => ({ ...v, [key]: value }))
    setError('')
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.service ||
      !form.details.trim()
    ) {
      setError(
        'Please complete your name, email, service, and project details.'
      )
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    const body = `Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Website: ${form.website}
Service: ${form.service}
Budget: ${form.budget}

Project details:
${form.details}`

    window.location.href =
      `mailto:${contact.email}?subject=${encodeURIComponent(
        'Project enquiry — ' + form.name
      )}&body=${encodeURIComponent(body)}`

    setError(
      'Your email app should open with the enquiry prepared. The website has not submitted or stored this form.'
    )
  }

  return (
    <>
      <PageHero
        label="CONTACT / START A CONVERSATION"
        title="LET'S TALK ABOUT|WHAT YOU'RE|BUILDING."
        desc="Have a project in mind? Share a little context and let's explore the possibilities."
      />

      <section className="section contact-layout">
        <div className="contact-aside">
          <div className="section-label">DIRECT CONTACT</div>

          <a
            className="contact-line"
            href={`mailto:${contact.email}`}
          >
            <Mail />
            {contact.email}
            <ArrowUpRight />
          </a>

          <div className="contact-line">
            <MapPin />
            Islamabad, Pakistan · Remote worldwide
          </div>

          <div className="social-links">
            <a href={contact.facebook} target="_blank" rel="noreferrer">
              Facebook ↗
            </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={contact.fiverr} target="_blank" rel="noreferrer">
              Fiverr ↗
            </a>
          </div>

          <div className="calendar-card">
            <span>READY WHEN YOU ARE</span>
            <h3>Prefer a conversation?</h3>
            <p>Choose a time through the actual Calendly page.</p>

            <a
              className="button button-acid"
              href={contact.calendly}
              target="_blank"
              rel="noreferrer"
            >
              Book a discovery call <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-heading">
            <span>PROJECT ENQUIRY / 01</span>
            <h2>
              Tell me what
              <br />
              <em>you're imagining.</em>
            </h2>
          </div>

          <div className="form-grid">
            <label>
              Full name *
              <input
                value={form.name}
                onChange={e => update('name', e.target.value)}
                required
                placeholder="Your name"
              />
            </label>

            <label>
              Business email *
              <input
                type="email"
                value={form.email}
                onChange={e => update('email', e.target.value)}
                required
                placeholder="you@company.com"
              />
            </label>

            <label>
              Company name
              <input
                value={form.company}
                onChange={e => update('company', e.target.value)}
                placeholder="Company (optional)"
              />
            </label>

            <label>
              Website URL
              <input
                value={form.website}
                onChange={e => update('website', e.target.value)}
                placeholder="https://"
              />
            </label>

            <label className="full">
              Service required *
              <select
                value={form.service}
                onChange={e => update('service', e.target.value)}
                required
              >
                <option value="">Choose a service</option>

                {[
                  'Website Design & Development',
                  'Full-Stack / SaaS Development',
                  'Android App Development',
                  'AI Lead Conversion System',
                  'CRM & Workflow Automation',
                  'AI Chatbot / Voice Agent',
                  'E-commerce Development',
                  'API Integration',
                  'Guest Posting / SEO Outreach',
                  'Other'
                ].map(x => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </label>

            <label className="full">
              Estimated budget
              <input
                value={form.budget}
                onChange={e => update('budget', e.target.value)}
                placeholder="Optional"
              />
            </label>

            <label className="full">
              Project details *
              <textarea
                value={form.details}
                onChange={e => update('details', e.target.value)}
                required
                rows={5}
                placeholder="What are you looking to build?"
              />
            </label>
          </div>

          {error && (
            <p className="form-message" role="status">
              {error}
            </p>
          )}

          <button className="button button-acid" type="submit">
            Prepare email enquiry <Send size={16} />
          </button>

          <p className="fine-print">
            No server-side form submission is configured. This form validates
            your details and prepares an email in your email application.
            The website does not claim to submit or store the enquiry.
          </p>
        </form>
      </section>
    </>
  )
}

export function Legal({
  type
}: {
  type: 'privacy' | 'terms'
}) {
  return (
    <>
      <PageHero
        label={`INFORMATION / ${type.toUpperCase()}`}
        title={
          type === 'privacy'
            ? 'PRIVACY|POLICY.'
            : 'TERMS &|CONDITIONS.'
        }
        desc="Important information about using the BuildWithHaseeb website and contacting the studio."
      />

      <section className="section legal-copy">
        {type === 'privacy' ? (
          <>
            <h2>Privacy overview</h2>
            <p>
              BuildWithHaseeb provides information about digital services,
              projects, and ways to contact the studio. Website hosting
              infrastructure and integrated third-party services may process
              technical or interaction information.
            </p>

            <h3>Information you choose to provide</h3>
            <p>
              If you contact the studio, you may provide your name, email
              address, company, website, and project requirements. This
              information is handled through the communication service you
              use to send your enquiry.
            </p>

            <h3>Contact form</h3>
            <p>
              The website contact form prepares an email using your device's
              email application. It does not itself submit the enquiry to a
              website database or server-side contact form.
            </p>

            <h3>Technical information</h3>
            <p>
              Hosting providers may process technical information such as
              IP addresses, browser details, and server request logs for
              security, reliability, and operational purposes.
            </p>

            <h3>Third-party services and widgets</h3>
            <p>
              The website may include external links, integrations, and
              interactive features. Third-party providers may process
              information under their own privacy policies and terms.
            </p>

            <h3>External links</h3>
            <p>
              Links to Calendly, GitHub, LinkedIn, Instagram, Facebook,
              Fiverr, and other platforms lead to external websites.
              BuildWithHaseeb does not control their independent privacy
              practices.
            </p>

            <h3>Android applications</h3>
            <p>
              Privacy practices for individual Android applications depend
              on their actual features, permissions, data collection, and
              third-party SDKs. Each published application should have an
              appropriate privacy policy accurately describing its own
              data practices.
            </p>

            <h3>Contact</h3>
            <p>
              For privacy-related questions, contact{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </>
        ) : (
          <>
            <h2>Website information</h2>
            <p>
              This website provides general information about
              BuildWithHaseeb, its services, and portfolio. Project
              descriptions and demonstrations are provided for
              informational purposes and should not automatically be
              interpreted as verified paid client engagements.
            </p>

            <h3>Services and project agreements</h3>
            <p>
              Any development engagement requires a separate agreement
              defining project scope, deliverables, fees, timelines,
              responsibilities, revisions, and acceptance criteria.
            </p>

            <h3>Portfolio and demonstrations</h3>
            <p>
              Some portfolio items may be concepts, experiments, or working
              demonstrations. Their purpose is to illustrate ideas and
              development capabilities. External demo availability and
              functionality may change.
            </p>

            <h3>Intellectual property</h3>
            <p>
              Website branding, original content, and materials may not be
              copied, redistributed, or commercially reused without
              permission. Ownership and licensing of commissioned work
              should be defined in the relevant client agreement.
            </p>

            <h3>Third-party services</h3>
            <p>
              Projects may use external platforms, APIs, hosting providers,
              software, or integrations. Their availability, pricing, and
              terms are controlled by their respective providers.
            </p>

            <h3>No guaranteed outcomes</h3>
            <p>
              We aim to build useful and reliable digital solutions.
              However, no specific business results, revenue, search
              rankings, app downloads, or Google Play approval are
              guaranteed.
            </p>

            <h3>Contact</h3>
            <p>
              For questions about these terms, contact{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </>
        )}
      </section>
    </>
  )
}
