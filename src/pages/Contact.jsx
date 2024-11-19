import ContactMe from "../components/ContactPage/ContactMe"
import Navbar from "../components/Navbar"
import { useResetScroll } from "../hooks/useResetScroll";

const Contact = () => {
  useResetScroll();
  return (
    <div className="bg-zinc-900">
      <Navbar/>
      <div className="mt-[-50px] px-28">
      <ContactMe/>
      </div>
    </div>
  )
}

export default Contact
