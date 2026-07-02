import React, { Suspense, lazy } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import TrustTicker from './components/sections/TrustTicker'
import Services from './components/sections/Services'
import Platforms from './components/sections/Platforms'

// Lazy loaded components (Below the fold)
const Process = lazy(() => import('./components/sections/Process'))
const Why = lazy(() => import('./components/sections/Why'))
const Team = lazy(() => import('./components/sections/Team'))
const TrustpilotReviews = lazy(() => import('./components/sections/TrustpilotReviews'))
const ROICalculator = lazy(() => import('./components/sections/ROICalculator'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const CTA = lazy(() => import('./components/sections/CTA'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/layout/Footer'))
const QualifyModal = lazy(() => import('./components/QualifyModal'))

const LoadingFallback = () => (
  <div style={{ padding: '40px', textAlign: 'center', color: '#a0a0a0', minHeight: '20vh' }}>
    Loading...
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <main>
        <Hero />
        <TrustTicker />
        <Services />
        <Platforms />
        
        <Suspense fallback={<LoadingFallback />}>
          <Process />
          <Why />
          <Team />
          <TrustpilotReviews />
          <ROICalculator />
          <FAQ />
          <CTA />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <QualifyModal />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
