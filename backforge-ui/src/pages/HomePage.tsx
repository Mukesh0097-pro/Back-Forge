import { HeroSection } from '../components/hero/HeroSection.tsx'
import { FeaturesSection } from '../sections/FeaturesSection.tsx'
import { TemplatesShowcase } from '../sections/TemplatesShowcase.tsx'
import { PricingSection } from '../components/pricing/PricingSection.tsx'
import { CTASection } from '../sections/CTASection.tsx'

export function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <TemplatesShowcase />
            <PricingSection />
            <CTASection />
        </>
    )
}
