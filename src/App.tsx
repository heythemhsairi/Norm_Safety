import { PresentationProvider } from './context/PresentationContext'
import Layout from './components/layout/Layout'
import CoverSection from './sections/CoverSection'
import EssenceSection from './sections/EssenceSection'
import PositioningSection from './sections/PositioningSection'
import AudienceSection from './sections/AudienceSection'
import IdentitySection from './sections/IdentitySection'
import TypographySection from './sections/TypographySection'
import LogoSection from './sections/LogoSection'
import ClearSpaceSection from './sections/ClearSpaceSection'
import SymbolSection from './sections/SymbolSection'
import MockupsSection from './sections/MockupsSection'
import DeliverablesSection from './sections/DeliverablesSection'
import NextStepsSection from './sections/NextStepsSection'
import FooterSection from './sections/FooterSection'

export default function App() {
  return (
    <PresentationProvider>
      <Layout>
        <CoverSection />
        <EssenceSection />
        <PositioningSection />
        <AudienceSection />
        <IdentitySection />
        <TypographySection />
        <LogoSection />
        <ClearSpaceSection />
        <SymbolSection />
        <MockupsSection />
        <DeliverablesSection />
        <NextStepsSection />
        <FooterSection />
      </Layout>
    </PresentationProvider>
  )
}
