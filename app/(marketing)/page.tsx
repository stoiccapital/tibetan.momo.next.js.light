import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import PainSection from './components/PainSection'
import ValueProps from './components/ValueProps'
import FeatureSection from './components/FeatureSection'
import DeepDive from './components/DeepDive'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#050509]">
      <Navbar />
      <main className="space-y-24 md:space-y-32 lg:space-y-40 pt-16">
        <Hero />
        <LogoStrip />
        <PainSection />
        <ValueProps />
        <FeatureSection
          variant="right"
          eyebrow="Unsere Spezialität"
          title="Hausgemachte Momos nach Familienrezept"
          description="Ob klassisch gedämpft oder knusprig frittiert – unsere Momos werden frisch zubereitet und mit tibetischen Gewürzen verfeinert. Wähle zwischen Rind, vegetarisch oder gemischt – immer mit hausgemachter Sauce."
          bullets={[
            'Rind-Momos mit Schweizer Fleisch',
            'Vegetarische Momos mit Spinat, Kartoffeln & Weisskohl',
            'Frittierte Momos & Shabhalep für extra Crunch',
          ]}
        />
        <FeatureSection
          variant="left"
          eyebrow="Für besondere Anlässe"
          title="Party, Firmen-Events oder Geburtstag – wir kochen für euch"
          description="Ob kleine Runde oder grosses Team – wir liefern frisch zubereitete Momos und tibetische Spezialitäten für deinen Anlass. Gemeinsam planen wir Menge, Auswahl und Zeitpunkt."
          bullets={[
            'Party Service für private Feiern',
            'Firmen-Events & Teamlunch',
            'Geburtstage & tibetisches Buffet',
          ]}
        />
        <DeepDive />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

