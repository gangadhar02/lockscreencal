'use client'

import { useState } from 'react'

const iPhoneModels = [
  { name: 'iPhone 16 Pro Max', width: 1320, height: 2868 },
  { name: 'iPhone 16 Pro', width: 1206, height: 2622 },
  { name: 'iPhone 16 Plus / 15 Plus', width: 1290, height: 2796 },
  { name: 'iPhone 16 / 15 / 15 Pro / 14 Pro', width: 1179, height: 2556 },
  { name: 'iPhone 14 Plus / 13 Pro Max / 12 Pro Max', width: 1284, height: 2778 },
  { name: 'iPhone 14 / 13 / 13 Pro / 12 / 12 Pro', width: 1170, height: 2532 },
  { name: 'iPhone SE (3rd gen)', width: 750, height: 1334 },
]

const macModels = [
  { name: 'MacBook Pro 16" (M1-M4)', width: 3456, height: 2234 },
  { name: 'MacBook Pro 14" (M1-M4)', width: 3024, height: 1964 },
  { name: 'MacBook Air 15" (M2-M4)', width: 2880, height: 1864 },
  { name: 'MacBook Air 13" (M2-M4)', width: 2560, height: 1664 },
  { name: 'MacBook Air 13" (M1)', width: 2560, height: 1600 },
]

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [showMacModal, setShowMacModal] = useState(false)
  const [goal, setGoal] = useState('')
  const [quote, setQuote] = useState('Obsession Beats Talent')
  const [startDate, setStartDate] = useState({ year: '', month: '', day: '' })
  const [deadline, setDeadline] = useState({ year: '', month: '', day: '' })
  const [selectedModel, setSelectedModel] = useState(iPhoneModels[3])
  const [selectedMacModel, setSelectedMacModel] = useState(macModels[1])
  const [generatedUrl, setGeneratedUrl] = useState('')

  // Mac-specific state
  const [macGoal, setMacGoal] = useState('')
  const [macQuote, setMacQuote] = useState('Obsession Beats Talent')
  const [macStartDate, setMacStartDate] = useState({ year: '', month: '', day: '' })
  const [macDeadline, setMacDeadline] = useState({ year: '', month: '', day: '' })
  const [generatedMacUrl, setGeneratedMacUrl] = useState('')

  const generateUrl = () => {
    if (!goal || !startDate.year || !startDate.month || !startDate.day ||
        !deadline.year || !deadline.month || !deadline.day) {
      return ''
    }
    const start = `${startDate.year}-${startDate.month.padStart(2, '0')}-${startDate.day.padStart(2, '0')}`
    const end = `${deadline.year}-${deadline.month.padStart(2, '0')}-${deadline.day.padStart(2, '0')}`
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    return `${baseUrl}/goal?goal=${encodeURIComponent(goal)}&start_date=${start}&goal_date=${end}&width=${selectedModel.width}&height=${selectedModel.height}&quote=${encodeURIComponent(quote)}`
  }

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const copyUrl = () => {
    const url = generateUrl()
    if (url) {
      navigator.clipboard.writeText(url)
      setGeneratedUrl(url)
    }
  }

  const generateMacUrl = () => {
    if (!macGoal || !macStartDate.year || !macStartDate.month || !macStartDate.day ||
        !macDeadline.year || !macDeadline.month || !macDeadline.day) {
      return ''
    }
    const start = `${macStartDate.year}-${macStartDate.month.padStart(2, '0')}-${macStartDate.day.padStart(2, '0')}`
    const end = `${macDeadline.year}-${macDeadline.month.padStart(2, '0')}-${macDeadline.day.padStart(2, '0')}`
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    return `${baseUrl}/goal?goal=${encodeURIComponent(macGoal)}&start_date=${start}&goal_date=${end}&width=${selectedMacModel.width}&height=${selectedMacModel.height}&quote=${encodeURIComponent(macQuote)}`
  }

  const copyMacUrl = () => {
    const url = generateMacUrl()
    if (url) {
      navigator.clipboard.writeText(url)
      setGeneratedMacUrl(url)
    }
  }

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        textAlign: 'center',
        borderBottom: '1px solid #1a1a1a',
      }}>
        <span style={{ fontSize: '0.9rem', color: '#888' }}>The Life Calendar</span>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 600,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
        }}>
          Minimalist wallpapers<br />for mindful living.
        </h1>
        <p style={{
          color: '#888',
          fontSize: '1.1rem',
          lineHeight: 1.6,
        }}>
          Visualize your life progress or year at a glance.<br />
          Updated automatically on your iPhone lock screen.
        </p>
      </section>

      {/* Calendar Cards */}
      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Goal Calendar Card */}
        <div style={{
          backgroundColor: '#141414',
          borderRadius: '16px',
          padding: '2rem',
          width: '320px',
          textAlign: 'center',
          border: '1px solid #2a2a2a',
        }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Goal Calendar</h3>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Count down to your deadline
          </p>

          {/* iPhone Mockup */}
          <div style={{
            backgroundColor: '#000',
            borderRadius: '24px',
            padding: '8px',
            margin: '0 auto 1.5rem',
            width: '140px',
            boxShadow: '0 0 0 2px #333',
          }}>
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '18px',
              padding: '1rem 0.5rem',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ color: '#f97316', fontSize: '8px', marginBottom: '4px', fontFamily: 'monospace' }}>
                OBSESSION BEATS TALENT
              </div>
              <div style={{ color: '#888', fontSize: '10px', marginBottom: '8px' }}>$1000</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', width: '100px', justifyContent: 'center' }}>
                {Array.from({ length: 90 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: i < 8 ? '#e5e5e5' : i === 8 ? '#f97316' : '#404040',
                    }}
                  />
                ))}
              </div>
              <div style={{ marginTop: '8px', fontSize: '7px' }}>
                <span style={{ color: '#f97316' }}>82 DAYS LEFT</span>
                <span style={{ color: '#666' }}> · 9%</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleOpenModal}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #333',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              margin: '0 auto',
              transition: 'border-color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#555'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = '#333'}
          >
            Install <span style={{ fontSize: '1.2rem' }}>›</span>
          </button>
        </div>

        {/* Mac Goal Calendar Card */}
        <div style={{
          backgroundColor: '#141414',
          borderRadius: '16px',
          padding: '2rem',
          width: '320px',
          textAlign: 'center',
          border: '1px solid #2a2a2a',
        }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Mac Calendar</h3>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Desktop wallpaper for your Mac
          </p>

          {/* Mac Mockup */}
          <div style={{
            backgroundColor: '#000',
            borderRadius: '8px',
            padding: '6px',
            margin: '0 auto 1.5rem',
            width: '200px',
            boxShadow: '0 0 0 2px #333',
          }}>
            <div style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '4px',
              padding: '0.75rem 0.5rem',
              minHeight: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{ color: '#f97316', fontSize: '6px', marginBottom: '3px', fontFamily: 'monospace' }}>
                OBSESSION BEATS TALENT
              </div>
              <div style={{ color: '#888', fontSize: '8px', marginBottom: '6px' }}>$1000</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px', width: '140px', justifyContent: 'center' }}>
                {Array.from({ length: 60 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: i < 8 ? '#e5e5e5' : i === 8 ? '#f97316' : '#404040',
                    }}
                  />
                ))}
              </div>
              <div style={{ marginTop: '6px', fontSize: '5px' }}>
                <span style={{ color: '#f97316' }}>52 DAYS LEFT</span>
                <span style={{ color: '#666' }}> · 13%</span>
              </div>
            </div>
            {/* Mac stand */}
            <div style={{
              width: '40px',
              height: '4px',
              backgroundColor: '#333',
              margin: '4px auto 0',
              borderRadius: '0 0 4px 4px',
            }} />
          </div>

          <button
            onClick={() => setShowMacModal(true)}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #333',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              margin: '0 auto',
              transition: 'border-color 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#555'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = '#333'}
          >
            Install <span style={{ fontSize: '1.2rem' }}>›</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        color: '#666',
        fontSize: '0.85rem',
      }}>
        Built with inspiration from{' '}
        <a href="https://thelifecalendar.com" target="_blank" rel="noopener" style={{ color: '#888' }}>
          thelifecalendar.com
        </a>
      </footer>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '16px',
              padding: '1.5rem',
              maxWidth: '480px',
              width: 'calc(100% - 2rem)',
              maxHeight: '90vh',
              overflowY: 'auto',
              overflowX: 'hidden',
              border: '1px solid #333',
              boxSizing: 'border-box',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Installation Steps</h2>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '2rem' }}>
              First, define your wallpaper settings. Then create an automation to run daily.
              Finally, add the shortcut actions to update your lock screen.
            </p>

            {/* Step 1 */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: '#333',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                }}>1</span>
                <span style={{ fontWeight: 500 }}>Define your Wallpaper</span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Goal</label>
                <input
                  type="text"
                  placeholder="e.g. New York City Marathon"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Quote <span style={{ color: '#666' }}>(optional)</span></label>
                <input
                  type="text"
                  placeholder="e.g. Obsession Beats Talent"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Start Date</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Year"
                    value={startDate.year}
                    onChange={(e) => setStartDate({ ...startDate, year: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Month"
                    value={startDate.month}
                    onChange={(e) => setStartDate({ ...startDate, month: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Day"
                    value={startDate.day}
                    onChange={(e) => setStartDate({ ...startDate, day: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Deadline</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Year"
                    value={deadline.year}
                    onChange={(e) => setDeadline({ ...deadline, year: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Month"
                    value={deadline.month}
                    onChange={(e) => setDeadline({ ...deadline, month: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Day"
                    value={deadline.day}
                    onChange={(e) => setDeadline({ ...deadline, day: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                {!goal && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>Goal title is required</p>}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>iPhone Model</label>
                <select
                  value={selectedModel.name}
                  onChange={(e) => setSelectedModel(iPhoneModels.find(m => m.name === e.target.value) || iPhoneModels[3])}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box',
                  }}
                >
                  {iPhoneModels.map((model) => (
                    <option key={model.name} value={model.name}>{model.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: '#333',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                }}>2</span>
                <span style={{ fontWeight: 500 }}>Create Automation</span>
              </div>
              <div style={{
                backgroundColor: '#0a0a0a',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#888',
                lineHeight: 1.6,
              }}>
                Open <strong style={{ color: '#fff' }}>Shortcuts</strong> app → Go to <strong style={{ color: '#fff' }}>Automation</strong> tab → New Automation → <strong style={{ color: '#fff' }}>Time of Day</strong> → <strong style={{ color: '#fff' }}>6:00 AM</strong> → Repeat: "<strong style={{ color: '#fff' }}>Daily</strong>" → Select "<strong style={{ color: '#fff' }}>Run Immediately</strong>" → "<strong style={{ color: '#fff' }}>Create New Shortcut</strong>"
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: '#333',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                }}>3</span>
                <span style={{ fontWeight: 500 }}>Create Shortcut</span>
              </div>

              <div style={{
                backgroundColor: '#0a0a0a',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}>
                <p style={{ color: '#666', fontSize: '0.75rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Add these actions:</p>

                <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                  3.1 "<strong style={{ color: '#fff' }}>Get Contents of URL</strong>" → paste the following URL there:
                </p>
                <div style={{
                  backgroundColor: '#1a1a1a',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: '#888',
                  wordBreak: 'break-all',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                }}>
                  <span>{generateUrl() || 'Complete step 1 first...'}</span>
                  {generateUrl() && (
                    <button
                      onClick={copyUrl}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#888',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        flexShrink: 0,
                      }}
                    >
                      📋
                    </button>
                  )}
                </div>

                <p style={{ fontSize: '0.85rem' }}>
                  3.2 "<strong style={{ color: '#fff' }}>Set Wallpaper Photo</strong>" → choose "Lock Screen"
                </p>
              </div>

              <div style={{
                backgroundColor: '#2a1a0a',
                border: '1px solid #f97316',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
              }}>
                <p style={{ color: '#f97316', marginBottom: '0.5rem' }}>
                  <strong>Important:</strong> In "Set Wallpaper Photo", tap the arrow (+) to show options → disable both "<strong>Crop to Subject</strong>" and "<strong>Show Preview</strong>".
                </p>
                <p style={{ color: '#888', fontSize: '0.8rem' }}>
                  This prevents iOS from cropping and asking for confirmation each time.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'transparent',
                border: '1px solid #333',
                color: '#888',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mac Modal */}
      {showMacModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem',
          }}
          onClick={() => setShowMacModal(false)}
        >
          <div
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '16px',
              padding: '1.5rem',
              maxWidth: '480px',
              width: 'calc(100% - 2rem)',
              maxHeight: '90vh',
              overflowY: 'auto',
              overflowX: 'hidden',
              border: '1px solid #333',
              boxSizing: 'border-box',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Mac Desktop Wallpaper</h2>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Configure your wallpaper, then download or set up auto-refresh with a cron job.
            </p>

            {/* Step 1 */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: '#333',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                }}>1</span>
                <span style={{ fontWeight: 500 }}>Define your Wallpaper</span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Goal</label>
                <input
                  type="text"
                  placeholder="e.g. Ship my startup"
                  value={macGoal}
                  onChange={(e) => setMacGoal(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Quote <span style={{ color: '#666' }}>(optional)</span></label>
                <input
                  type="text"
                  placeholder="e.g. Obsession Beats Talent"
                  value={macQuote}
                  onChange={(e) => setMacQuote(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Start Date</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Year"
                    value={macStartDate.year}
                    onChange={(e) => setMacStartDate({ ...macStartDate, year: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Month"
                    value={macStartDate.month}
                    onChange={(e) => setMacStartDate({ ...macStartDate, month: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Day"
                    value={macStartDate.day}
                    onChange={(e) => setMacStartDate({ ...macStartDate, day: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Deadline</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Year"
                    value={macDeadline.year}
                    onChange={(e) => setMacDeadline({ ...macDeadline, year: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Month"
                    value={macDeadline.month}
                    onChange={(e) => setMacDeadline({ ...macDeadline, month: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Day"
                    value={macDeadline.day}
                    onChange={(e) => setMacDeadline({ ...macDeadline, day: e.target.value })}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                {!macGoal && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>Goal title is required</p>}
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Mac Model</label>
                <select
                  value={selectedMacModel.name}
                  onChange={(e) => setSelectedMacModel(macModels.find(m => m.name === e.target.value) || macModels[1])}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box',
                  }}
                >
                  {macModels.map((model) => (
                    <option key={model.name} value={model.name}>{model.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: '#333',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                }}>2</span>
                <span style={{ fontWeight: 500 }}>Download or Auto-Update</span>
              </div>

              <div style={{
                backgroundColor: '#0a0a0a',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}>
                <p style={{ color: '#666', fontSize: '0.75rem', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Wallpaper URL:</p>
                <div style={{
                  backgroundColor: '#1a1a1a',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: '#888',
                  wordBreak: 'break-all',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                }}>
                  <span>{generateMacUrl() || 'Complete step 1 first...'}</span>
                  {generateMacUrl() && (
                    <button
                      onClick={copyMacUrl}
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#888',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        flexShrink: 0,
                      }}
                    >
                      📋
                    </button>
                  )}
                </div>

                {generateMacUrl() && (
                  <a
                    href={generateMacUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '0.75rem',
                      backgroundColor: '#f97316',
                      color: '#fff',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  >
                    Download Wallpaper
                  </a>
                )}
              </div>

              <div style={{
                backgroundColor: '#0a0a0a',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                color: '#888',
                lineHeight: 1.6,
              }}>
                <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 500 }}>Auto-update with cron (optional):</p>
                <p style={{ marginBottom: '0.75rem' }}>Add this to your crontab to refresh daily at 6 AM:</p>
                <code style={{
                  display: 'block',
                  backgroundColor: '#1a1a1a',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.7rem',
                  wordBreak: 'break-all',
                }}>
                  0 6 * * * curl -o ~/Pictures/life-calendar.png &quot;{generateMacUrl() || 'YOUR_URL_HERE'}&quot; && osascript -e &apos;tell application &quot;System Events&quot; to tell every desktop to set picture to &quot;&apos;$HOME&apos;/Pictures/life-calendar.png&quot;&apos;
                </code>
              </div>
            </div>

            <button
              onClick={() => setShowMacModal(false)}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'transparent',
                border: '1px solid #333',
                color: '#888',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
