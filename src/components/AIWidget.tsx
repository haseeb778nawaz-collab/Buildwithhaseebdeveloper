
import { useEffect, useRef, useState } from 'react'
import { Mic, Phone, PhoneOff, X, AudioLines } from 'lucide-react'
import Vapi from '@vapi-ai/web'

type CallStatus = 'idle' | 'connecting' | 'active' | 'speaking' | 'error'

const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY
const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID

export function AIWidget() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<CallStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const vapiRef = useRef<Vapi | null>(null)

  useEffect(() => {
    if (!publicKey) return

    const vapi = new Vapi(publicKey)
    vapiRef.current = vapi

    vapi.on('call-start', () => {
      setStatus('active')
      setErrorMessage('')
    })

    vapi.on('call-end', () => setStatus('idle'))

    vapi.on('speech-start', () => setStatus('speaking'))
    vapi.on('speech-end', () => setStatus('active'))

    vapi.on('error', () => {
      setStatus('error')
      setErrorMessage('Connection failed. Please try again.')
    })

    return () => {
      vapi.stop()
      vapi.removeAllListeners()
      vapiRef.current = null
    }
  }, [])

  const startCall = async () => {
    if (!publicKey || !assistantId || !vapiRef.current) {
      setErrorMessage('Voice assistant setup is not complete yet.')
      setStatus('error')
      return
    }

    try {
      setErrorMessage('')
      setStatus('connecting')
      await vapiRef.current.start(assistantId)
    } catch {
      setStatus('error')
      setErrorMessage(
        'Could not start the call. Check your microphone permission.'
      )
    }
  }

  const endCall = () => {
    vapiRef.current?.stop()
    setStatus('idle')
  }

  const statusText = {
    idle: 'Ready to talk',
    connecting: 'Connecting...',
    active: 'Listening to you',
    speaking: 'AI is speaking',
    error: 'Needs attention',
  }[status]

  return (
    <div className="ai-widget">
      {open && (
        <div className="ai-panel">
          <div className="ai-panel-head">
            <div className="ai-avatar">
              <AudioLines size={22} />
            </div>

            <div>
              <strong>BuildWithHaseeb AI</strong>
              <span>
                <i className="ai-online-dot" /> AI Receptionist · 24/7
              </span>
            </div>

            <button
              className="ai-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <div className="ai-panel-body">
            <div className="ai-orb">
              <div className={`ai-orb-core ${status}`}>
                <AudioLines size={34} />
              </div>
              <span className="ai-orb-ring ring-one" />
              <span className="ai-orb-ring ring-two" />
            </div>

            <h3>Let’s talk business.</h3>

            <p>
              Have a project in mind? Talk to our AI assistant and explore
              how we can help your business grow.
            </p>

            <div className={`ai-status ${status}`}>
              <span className="ai-status-dot" />
              {statusText}
            </div>

            {status === 'error' && (
              <p className="ai-error">{errorMessage}</p>
            )}

            {(status === 'active' ||
              status === 'speaking' ||
              status === 'connecting') && (
              <div className={`ai-wave ${status}`} aria-label={statusText}>
                {Array.from({ length: 25 }, (_, i) => (
                  <i
                    key={i}
                    style={{ animationDelay: `${i * 0.045}s` }}
                  />
                ))}
              </div>
            )}

            {status === 'idle' || status === 'error' ? (
              <button className="ai-call-button" onClick={startCall}>
                <Phone size={18} /> Start a voice call
              </button>
            ) : (
              <button className="ai-end-button" onClick={endCall}>
                <PhoneOff size={18} /> End conversation
              </button>
            )}

            <span className="ai-privacy">
              Your conversation is handled securely.
            </span>
          </div>
        </div>
      )}

      <button
        className={`ai-float-button ${open ? 'is-open' : ''} ${
          status === 'active' || status === 'speaking' ? 'is-live' : ''
        }`}
        onClick={() => setOpen(v => !v)}
        aria-label={
          open ? 'Close AI voice assistant' : 'Talk to our AI assistant'
        }
      >
        {open ? <X size={24} /> : <Mic size={24} />}
        {!open && <span className="ai-float-pulse" />}
      </button>

      <span className="ai-float-label">Talk to AI</span>
    </div>
  )
}
