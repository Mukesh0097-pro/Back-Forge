import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { HomePage } from './pages/HomePage'
import { TemplatesPage } from './pages/TemplatesPage'
import { TemplateDetailPage } from './pages/TemplateDetailPage'
import { PricingPage } from './pages/PricingPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

import { DocsPage } from './pages/DocsPage'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/template/:id" element={<TemplateDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
