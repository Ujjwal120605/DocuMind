import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// Error component to show when Clerk key is missing
const MissingKeyError = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    color: 'white',
    padding: '2rem',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }}>
    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ef4444' }}>⚠️ Missing Clerk API Key</h1>
    <div style={{
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '2rem',
      borderRadius: '1rem',
      maxWidth: '600px',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
        The <code style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '0.25rem' }}>REACT_APP_CLERK_PUBLISHABLE_KEY</code> environment variable is missing.
      </p>
      <ol style={{ textAlign: 'left', lineHeight: '2', marginBottom: '1.5rem' }}>
        <li>Create a <code style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '0.25rem' }}>.env</code> file in the <code style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '0.25rem' }}>frontend</code> directory</li>
        <li>Add your Clerk publishable key:
          <pre style={{
            background: 'rgba(0,0,0,0.5)',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginTop: '0.5rem',
            overflow: 'auto',
            fontSize: '0.9rem'
          }}>
{`REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
REACT_APP_GEMINI_API_KEY=your_gemini_key_here`}
          </pre>
        </li>
        <li>Get your Clerk key from: <a href="https://dashboard.clerk.com" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline' }}>https://dashboard.clerk.com</a></li>
        <li>Restart the development server after creating the file</li>
      </ol>
      <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '1rem' }}>
        See <code style={{ background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '0.25rem' }}>frontend/SETUP.md</code> for detailed instructions.
      </p>
    </div>
  </div>
);

if (!PUBLISHABLE_KEY) {
  console.error("❌ Missing REACT_APP_CLERK_PUBLISHABLE_KEY in .env file");
  console.error("📝 Please create a .env file in the frontend directory with your Clerk publishable key");
  
  root.render(
    <React.StrictMode>
      <MissingKeyError />
    </React.StrictMode>
  );
} else {
  root.render(
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
    </React.StrictMode>
  );
}