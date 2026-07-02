import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', color: '#fff', background: '#121212', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <h2 style={{ color: '#d4af37', marginBottom: '16px' }}>Something went wrong.</h2>
            <p style={{ color: '#a0a0a0', marginBottom: '24px' }}>We apologize for the inconvenience. Please try refreshing the page.</p>
            <button onClick={() => window.location.reload()} style={{ padding: '12px 24px', background: '#d4af37', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Refresh Page</button>
          </div>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
