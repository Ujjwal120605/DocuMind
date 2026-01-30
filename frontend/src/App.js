import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import GradientBlinds from './GradientBlinds';
import Navbar from './Navbar';
import About from './About';
import DocumentAnalyzer from './DocumentAnalyzer'; // Import the DocumentAnalyzer component

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isHovered, setIsHovered] = useState(false);


  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      position: 'relative',
      overflow: currentPage === 'about' || currentPage === 'analyzer' ? 'auto' : 'hidden',
      margin: 0,
      padding: 0,
      background: '#000'
    }}>
      {/* Show Navbar only on home and about pages */}
      {currentPage !== 'analyzer' && (
        <Navbar 
          onNavigate={setCurrentPage} 
          currentPage={currentPage}
        />
      )}

      {/* Home Page */}
      {currentPage === 'home' && (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
          <GradientBlinds
            gradientColors={['#FF9FFC', '#5227FF']}
            angle={0}
            noise={0.3}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
            mixBlendMode="lighten"
          />

          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            textAlign: 'center',
            pointerEvents: 'none'
          }}>
            <h1 style={{
              color: 'white',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: '1000',
              marginBottom: '2rem',
              textShadow: '0 6px 50px rgba(0,0,0,0.6)',
              letterSpacing: '1.5px',
              pointerEvents: 'auto',
              lineHeight: '1.1',
            }}>
              DocuMind
            </h1>

            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              marginBottom: '2.5rem',
              fontWeight: '300',
              pointerEvents: 'auto'
            }}>
              Extract insights from your documents with advanced ML algorithms
            </p>

            <SignedOut>
              <SignInButton mode="modal">
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    padding: '15px 45px',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#fff',
                    background: isHovered
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isHovered
                      ? '0 10px 30px rgba(102, 126, 234, 0.5)'
                      : '0 4px 15px rgba(0,0,0,0.2)',
                    pointerEvents: 'auto'
                  }}
                >
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <button
                onClick={() => setCurrentPage('analyzer')}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  padding: '15px 45px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#fff',
                  background: isHovered
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isHovered
                    ? '0 10px 30px rgba(102, 126, 234, 0.5)'
                    : '0 4px 15px rgba(0,0,0,0.2)',
                  pointerEvents: 'auto'
                }}
              >
                Go to Analyzer
              </button>
            </SignedIn>
          </div>
        </div>
      )}

      {/* About Page */}
      {currentPage === 'about' && <About onNavigate={setCurrentPage} />}

      {/* Document Analyzer Page */}
      <SignedIn>
        {currentPage === 'analyzer' && (
          <DocumentAnalyzer onBack={handleBackToHome} />
        )}
      </SignedIn>
      <SignedOut>
        {currentPage === 'analyzer' && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            color: 'white',
            fontSize: '1.5rem'
          }}>
            Please sign in to access the analyzer
          </div>
        )}
      </SignedOut>
    </div>
  );
}

export default App;