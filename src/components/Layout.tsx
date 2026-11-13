import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { contact } from '../data/site'
import { AIWidget } from './AIWidget'
import { WhatsAppWidget } from './WhatsAppWidget'

const nav = [['About', '/about'], ['Services', '/services'], ['Work', '/work'], ['Technology', '/technology'], ['Contact', '/contact']]
export function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  return <div className="site-shell">
    <header className="header">
      <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="BuildWithHaseeb home"><img src="projects/images/mylogo.png" alt="My Logo" className="site-logo" /><span>BuildWithHaseeb<span className="brand-light"> DIGITAL SOLUTIONS STUDIO</span></span></Link>
      <nav className="desktop-nav">{nav.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}</nav>
      <a className="header-cta" href={contact.calendly} target="_blank" rel="noreferrer">Let’s Talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    </header>
    <AnimatePresence>
      {open && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{nav.map(([label, path], i) => <motion.div key={path} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .04 }}><Link to={path} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18} /></Link></motion.div>)}<a href={contact.calendly} target="_blank" rel="noreferrer">Let’s Talk ↗</a></motion.nav>}
    </AnimatePresence>
    <main key={location.pathname}><Outlet /></main>
    <footer className="footer">
      <div className="footer-top"><div><div className="eyebrow">INDEPENDENT DIGITAL STUDIO · ISLAMABAD / WORLDWIDE</div><h2>Have an idea?<br /><em>Let's make it real.</em></h2></div><Link className="round-link" to="/contact"><ArrowUpRight size={28} /></Link></div>
      <div className="footer-bottom"><Link className="brand" to="/"><img src="projects/images/mylogo.png" alt="My Logo" className="site-logo" /><span>BuildWithHaseeb<span className="brand-light"> DIGITAL SOLUTIONS STUDIO</span></span></Link><span>© {new Date().getFullYear()} BuildWithHaseeb</span><div className="footer-links">
  <Link to="/privacy">Privacy</Link>
  <Link to="/terms">Terms</Link>
  <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
  <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
  <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
  <a href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a>
  <a href={`mailto:${contact.email}`}>Email ↗</a>
</div></div>
    </footer>
    <AIWidget />
    <WhatsAppWidget />
  </div>
}
