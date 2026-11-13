
import { useState } from 'react'
import { MessageCircle, X, ArrowUpRight } from 'lucide-react'

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER
const message = encodeURIComponent(
  "Hi! I’m interested in working with BuildWithHaseeb."
)

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  const chatUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`
    : `https://wa.me/?text=${message}`

  return (
    <div className="whatsapp-widget">
      {open && (
        <div className="whatsapp-panel">
          <div className="whatsapp-head">
            <div className="whatsapp-avatar">
              <MessageCircle size={22} />
            </div>

            <div>
              <strong>BuildWithHaseeb</strong>
              <span><i /> Typically replies quickly</span>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp panel"
            >
              <X size={18} />
            </button>
          </div>

          <div className="whatsapp-body">
            <span className="whatsapp-time">TODAY</span>

            <div className="whatsapp-message">
              Hey there! 👋
              <br />
              Welcome to BuildWithHaseeb.
              <br />
              <br />
              Have a project in mind? Let’s talk about it.
              <span>Just now</span>
            </div>

            <a
              href={chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta"
            >
              Start WhatsApp chat <ArrowUpRight size={17} />
            </a>

            <small>Opens WhatsApp in a new tab</small>
          </div>
        </div>
      )}

      <button
        className={`whatsapp-float-button ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close WhatsApp' : 'Chat on WhatsApp'}
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
      </button>

      <span className="whatsapp-float-label">Chat with us</span>
    </div>
  )
}
