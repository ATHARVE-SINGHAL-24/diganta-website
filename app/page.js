'use client';

import React, { useState, useRef } from 'react';

export default function DigantaPage() {
  // Navigation & UI States
  const [dnaInput, setDnaInput] = useState('');
  const [dnaStatus, setDnaStatus] = useState('');
  const [answers, setAnswers] = useState({ r1: '', r2: '', r3: '' });
  const [puzzleStatus, setPuzzleStatus] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  // References for Smooth Scrolling
  const missionRef = useRef(null);
  const dnaRef = useRef(null);
  const puzzleRef = useRef(null);
  const novaRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Logic Handlers
  const handleVerifyDNA = (e) => {
    e.preventDefault();
    if (dnaInput.trim().length > 4) {
      setDnaStatus('VERIFIED');
      setTimeout(() => scrollToSection(puzzleRef), 800);
    } else {
      setDnaStatus('INVALID SEQUENCE');
    }
  };

  const handlePuzzleSubmit = (e) => {
    e.preventDefault();
    if (answers.r1 && answers.r2 && answers.r3) {
      setPuzzleStatus('ACCESS GRANTED');
      setUnlocked(true);
      setTimeout(() => scrollToSection(novaRef), 800);
    } else {
      setPuzzleStatus('COMPLETE ALL ENIGMAS');
    }
  };

  // Premium Custom Inline Layout Styling System
  const layout = {
    container: {
      backgroundColor: '#03050d',
      color: '#f3f4f6',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      scrollBehavior: 'smooth'
    },
    section: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(0, 229, 255, 0.05)'
    },
    // Premium Glassmorphism Architecture
    glassCard: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(0, 229, 255, 0.15)',
      borderRadius: '24px',
      padding: '48px 40px',
      maxWidth: '540px',
      width: '100%',
      textAlign: 'center',
      boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    },
    input: {
      width: '100%',
      padding: '16px',
      backgroundColor: 'rgba(3, 5, 13, 0.7)',
      border: '1px solid rgba(0, 229, 255, 0.25)',
      borderRadius: '12px',
      color: '#ffffff',
      fontSize: '1rem',
      fontWeight: '400',
      marginBottom: '20px',
      outline: 'none',
      textAlign: 'center',
      letterSpacing: '0.15em',
      transition: 'all 0.3s ease'
    },
    button: {
      background: 'rgba(0, 229, 255, 0.03)',
      border: '1px solid #00E5FF',
      color: '#ffffff',
      padding: '18px 44px',
      borderRadius: '100px',
      fontSize: '0.9rem',
      fontWeight: '600',
      letterSpacing: '0.25em',
      cursor: 'pointer',
      boxShadow: '0 0 30px rgba(0, 229, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }
  };

  return (
    <div style={layout.container}>
      
      {/* 1. HERO SECTION */}
      <section style={layout.section}>
        {/* Decorative Grid Background Accent */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, #00E5FF 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div style={{ position: 'absolute', top: '25%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 75%)', pointerEvents: 'none', filter: 'blur(40px)' }} />

        <h1 style={{ fontSize: '7rem', fontWeight: '900', letterSpacing: '0.4em', margin: '0 0 16px 0', paddingLeft: '0.4em', background: 'linear-gradient(180deg, #ffffff 30%, #6b7280 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
          DIGANTA
        </h1>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '400', letterSpacing: '0.5em', paddingLeft: '0.5em', color: '#00E5FF', textTransform: 'uppercase', marginBottom: '64px', opacity: 0.9, textShadow: '0 0 20px rgba(0,229,255,0.3)' }}>
          The Titan Civilization
        </h2>

        {/* NOVA CARD */}
        <div className="animate-float" style={{
          width: '360px',
          height: '210px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
          border: '1px solid rgba(0, 229, 255, 0.25)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1), 0 0 40px rgba(0, 229, 255, 0.05)',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginBottom: '64px',
          textAlign: 'left',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(45deg, transparent 45%, rgba(0,229,255,0.1) 50%, transparent 55%)', backgroundSize: '200% 200%' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '0.25em', background: 'linear-gradient(to right, #ffffff, #8892b0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NOVA</span>
            <span style={{ color: '#00E5FF', fontSize: '1.5rem', textShadow: '0 0 10px #00E5FF' }}>✦</span>
          </div>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: '500', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
              Legendary Universe Card
            </span>
          </div>
        </div>

        <p style={{ color: '#9ca3af', maxWidth: '400px', textAlign: 'center', lineHeight: '1.8', marginBottom: '40px', fontSize: '1.05rem', fontWeight: '300', letterSpacing: '0.02em' }}>
          Only the worthy shall possess the legendary NOVA Card.
        </p>

        <button 
          onClick={() => scrollToSection(missionRef)}
          style={layout.button}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 229, 255, 0.4)'; e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.1)'; e.currentTarget.style.borderColor = '#00E5FF'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          START MISSION
        </button>
      </section>

      {/* 2. MISSION GATEWAY SECTION */}
      <section ref={missionRef} style={{ ...layout.section, backgroundColor: '#050814' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '0.2em', marginBottom: '16px', background: 'linear-gradient(180deg, #ffffff 50%, #9ca3af 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MISSION SECTORS</h2>
        <p style={{ color: '#9ca3af', marginBottom: '72px', letterSpacing: '0.05em', fontWeight: '300' }}>Complete validation cycles to authorize identity synchronization.</p>
        
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1000px', width: '100%' }}>
          
          <div style={{ ...layout.glassCard, flex: '1', minWidth: '300px' }} className="glass-panel">
            <div style={{ color: '#00E5FF', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.25em', marginBottom: '16px' }}>SECTOR 01</div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px', letterSpacing: '0.02em' }}>DNA Verification</h3>
            <button 
              onClick={() => scrollToSection(dnaRef)} 
              style={{ ...layout.button, padding: '14px 32px', fontSize: '0.8rem' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              ACCESS PORTAL
            </button>
          </div>

          <div style={{ ...layout.glassCard, flex: '1', minWidth: '300px' }} className="glass-panel">
            <div style={{ color: '#00E5FF', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.25em', marginBottom: '16px' }}>SECTOR 02</div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px', letterSpacing: '0.02em' }}>Puzzle Challenge</h3>
            <button 
              onClick={() => scrollToSection(puzzleRef)} 
              style={{ ...layout.button, padding: '14px 32px', fontSize: '0.8rem' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              ACCESS PORTAL
            </button>
          </div>
          
        </div>
      </section>

      {/* 3. DNA VERIFICATION */}
      <section ref={dnaRef} style={layout.section}>
        <div style={layout.glassCard} className="glass-panel">
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '12px', letterSpacing: '0.05em' }}>DNA Sequence Lock</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', fontWeight: '300', marginBottom: '40px' }}>Inject your encrypted ancestral identification signature below.</p>
          
          <form onSubmit={handleVerifyDNA}>
            <input 
              type="text" 
              placeholder="ENTER GENETIC MATRIX SEQUENCE..."
              value={dnaInput}
              onChange={(e) => setDnaInput(e.target.value)}
              style={layout.input}
              onFocus={(e) => { e.target.style.borderColor = '#00E5FF'; e.target.style.boxShadow = '0 0 15px rgba(0,229,255,0.2)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(0, 229, 255, 0.25)'; e.target.style.boxShadow = 'none'; }}
            />
            <button 
              type="submit" 
              style={{ ...layout.button, width: '100%', borderRadius: '12px' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 229, 255, 0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.1)'; }}
            >
              INITIALIZE SYNC
            </button>
          </form>

          {dnaStatus && (
            <div style={{ 
              marginTop: '28px', 
              color: dnaStatus === 'VERIFIED' ? '#00E5FF' : '#ff4e4e',
              fontWeight: '600',
              letterSpacing: '0.2em',
              fontSize: '0.85rem',
              textShadow: dnaStatus === 'VERIFIED' ? '0 0 15px rgba(0,229,255,0.4)' : 'none'
            }}>
              SYSTEM // {dnaStatus}
            </div>
          )}
        </div>
      </section>

      {/* 4. PUZZLE CHALLENGE */}
      <section ref={puzzleRef} style={{ ...layout.section, backgroundColor: '#050814' }}>
        <div style={{ ...layout.glassCard, maxWidth: '720px', padding: '56px 48px' }} className="glass-panel">
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '12px', letterSpacing: '0.05em' }}>Titan Enigma Array</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', fontWeight: '300', marginBottom: '48px' }}>Resolve logic barriers to pass the security perimeter matrix.</p>
          
          <form onSubmit={handlePuzzleSubmit} style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', color: '#00E5FF', fontSize: '0.9rem', fontWeight: '500', marginBottom: '12px', letterSpacing: '0.05em', lineHeight: '1.5' }}>
                ENIGMA 01 // I have no weight, but you can see me. Put me in a bucket, and I make it lighter.
              </label>
              <input 
                type="text"
                value={answers.r1}
                onChange={(e) => setAnswers({ ...answers, r1: e.target.value })}
                style={{ ...layout.input, textAlign: 'left', paddingLeft: '20px' }}
                placeholder="Decode solution..."
                onFocus={(e) => { e.target.style.borderColor = '#00E5FF'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(0, 229, 255, 0.25)'; }}
              />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', color: '#00E5FF', fontSize: '0.9rem', fontWeight: '500', marginBottom: '12px', letterSpacing: '0.05em', lineHeight: '1.5' }}>
                ENIGMA 02 // The more of them you take, the more you leave behind.
              </label>
              <input 
                type="text"
                value={answers.r2}
                onChange={(e) => setAnswers({ ...answers, r2: e.target.value })}
                style={{ ...layout.input, textAlign: 'left', paddingLeft: '20px' }}
                placeholder="Decode solution..."
                onFocus={(e) => { e.target.style.borderColor = '#00E5FF'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(0, 229, 255, 0.25)'; }}
              />
            </div>

            <div style={{ marginBottom: '40px' }}>
              <label style={{ display: 'block', color: '#00E5FF', fontSize: '0.9rem', fontWeight: '500', marginBottom: '12px', letterSpacing: '0.05em', lineHeight: '1.5' }}>
                ENIGMA 03 // Keyboards have me but open no locks, space but no room, enter but no escape.
              </label>
              <input 
                type="text"
                value={answers.r3}
                onChange={(e) => setAnswers({ ...answers, r3: e.target.value })}
                style={{ ...layout.input, textAlign: 'left', paddingLeft: '20px' }}
                placeholder="Decode solution..."
                onFocus={(e) => { e.target.style.borderColor = '#00E5FF'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(0, 229, 255, 0.25)'; }}
              />
            </div>

            <button 
              type="submit" 
              style={{ ...layout.button, width: '100%', borderRadius: '12px' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 229, 255, 0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.1)'; }}
            >
              SUBMIT ARCHIVE UNLOCK
            </button>
          </form>

          {puzzleStatus && (
            <div style={{ 
              marginTop: '28px', 
              color: puzzleStatus === 'ACCESS GRANTED' ? '#00E5FF' : '#ff4e4e',
              fontWeight: '600',
              letterSpacing: '0.2em',
              fontSize: '0.85rem',
              textAlign: 'center',
              textShadow: puzzleStatus === 'ACCESS GRANTED' ? '0 0 15px rgba(0,229,255,0.4)' : 'none'
            }}>
              DECRYPTOR // {puzzleStatus}
            </div>
          )}
        </div>
      </section>

      {/* 5. NOVA CARD UNLOCKED VIEW */}
      <section ref={novaRef} style={layout.section}>
        {unlocked ? (
          <div style={{ ...layout.glassCard, borderColor: '#00E5FF', boxOpacity: 1, boxShadow: '0 30px 70px rgba(0, 229, 255, 0.15), inset 0 1px 0 rgba(255,255,255,0.2)', padding: '80px 40px' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '24px', filter: 'drop-shadow(0 0 20px rgba(0,229,255,0.6))' }}>✨</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '0.05em', marginBottom: '16px', color: '#ffffff' }}>
              Identity Validated
            </h2>
            <p style={{ color: '#00E5FF', fontSize: '1.25rem', fontWeight: '400', letterSpacing: '0.05em', marginBottom: '48px' }}>
              You unlocked the NOVA Card.
            </p>
            <div className="animate-glow" style={{
              width: '300px',
              height: '175px',
              margin: '0 auto',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(0, 114, 255, 0.15) 100%)',
              border: '2px solid #00E5FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.35rem',
              fontWeight: '700',
              letterSpacing: '0.3em',
              color: '#ffffff',
              textShadow: '0 0 10px #ffffff'
            }}>
              NOVA ACTIVE
            </div>
          </div>
        ) : (
          <div style={{ color: '#6b7280', letterSpacing: '0.25em', fontSize: '0.8rem', fontWeight: '500', border: '1px dashed rgba(0, 229, 255, 0.15)', padding: '40px 60px', borderRadius: '16px', background: 'rgba(255,255,255,0.01)' }}>
            SECURE VAULT CORRIDOR // STATUS: ENCRYPTED
          </div>
        )}
      </section>

    </div>
  );
}