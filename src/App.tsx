import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Demo from './pages/Demo'
import { About, Services, Work, Technology, Contact, Legal } from './pages/Pages'

function ScrollToTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'})},[pathname]);return null}
export default function App(){return <><ScrollToTop/><Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/ai-lead-conversion-system" element={<Demo/>}/><Route path="/technology" element={<Technology/>}/><Route path="/work" element={<Work/>}/><Route path="/contact" element={<Contact/>}/><Route path="/privacy" element={<Legal type="privacy"/>}/><Route path="/terms" element={<Legal type="terms"/>}/><Route path="*" element={<Home/>}/></Route></Routes></>}
