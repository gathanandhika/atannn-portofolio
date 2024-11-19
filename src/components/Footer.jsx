import ContactContent from "./ContactFooter/ContactContent"
import ContactHero from "./ContactFooter/ContactHero"

const Footer = () => {
  return (
    <div 
    data-scroll-section
    className="bg-zinc-900 min-h-screen">
        <ContactHero/>
        <ContactContent/>
    </div>
  )
}

export default Footer
