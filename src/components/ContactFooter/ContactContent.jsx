import { motion } from "framer-motion";
import { CONTACT } from "../../constants";
import imageLogo from "../../assets/nnathLogo.png";
import { PiCopyrightBold } from "react-icons/pi"; // Pastikan import PiCopyrightBold jika belum ada
import ButtonFooter from "../ButtonFooter/ButtonFooter";
import CustomLink from "../CustomLink";
import ContactHero from "./ContactHero";


const ContactContent = () => {
  // Menentukan waktu lokal dalam format 12-jam dengan AM/PM
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0'); // Menjamin menit 2 digit

  const ampm = hours >= 12 ? 'PM' : 'AM'; // Menentukan AM/PM
  hours = hours % 12; // Konversi ke 12-jam
  hours = hours ? hours : 12; // Jika jam adalah 0, ganti dengan 12
  const timeString = `${hours}:${minutes} ${ampm}`; // Format waktu menjadi "hh:mm AM/PM"

  return (
    <div className="pb-4 lg:mb-35 relative">
      <div className="w-full lg:px-28">
      <div className="flex flex-col items-center border-b border-zinc-600 ">
      <motion.h1 
      whileInView={{ opacity:1, y: 0 }}
      initial={{ opacity:0, y:-100 }}
      transition={{ duration: 0.5, type:"spring", stiffness:120}}
      className="text-4xl lg:text-8xl text-white mb-12 pt-28"> 
      Let's work together
      </motion.h1>
      </div>
      </div>


    {/* Tambahkan relative di sini untuk memberi konteks posisi absolute pada footer */}
      <div className="flex flex-wrap justify-between items-center lg:mb-36">
        {/* Kolom untuk Teks */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 lg:pl-32 py-12 lg:py-16">
          <div className="flex items-start mb-6 text-white">
            {/* Teks Deskripsi */}
            <motion.p
              className="text-base lg:text-3xl max-w-lg flex gap-2"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            >
              <span>
                <img src={imageLogo} alt="Logo" className="border border-neutral-400 rounded bg-neutral-100 py-2 w-[50px]" />
              </span>
              Made with Love, Indonesia
            </motion.p>
          </div>

          {/* Local Time */}
          <div className="flex items-start justify-start">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className="text-start text-4xl mb-4"
            >
              <span className="text-zinc-500 lg:text-5xl">
                Local Time
              </span>
              <span className="text-white"> &mdash; </span>
              <span className="font-semibold text-white lg:text-5xl">
                {timeString}
              </span>
            </motion.h1>
          </div>
        </div>

        {/* Kolom untuk Tombol CustomLink */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 lg:px-32 lg:py-16">
          <motion.div
            className="lg:flex w-full gap-4 lg:justify-end pb-2 lg:pb-6"
          >
            <CustomLink to="/contact"
            className="w-96">
              <ButtonFooter>Get in touch</ButtonFooter>
            </CustomLink>
            <motion.a 
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gathanafrr@gmail.com&su=SUBJECT&body=Hello Gathan, can you help me with ..."
            className="w-96">
              <ButtonFooter>{CONTACT.email}</ButtonFooter>
            </motion.a>
          </motion.div>
          <motion.div
            className="lg:flex w-full gap-4 lg:justify-end"
          >
            <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/6282216934391?text=Hello there, can you help me with ..."
            className="w-96">
              <ButtonFooter>{CONTACT.phoneNo} </ButtonFooter>
            </motion.a>
            <motion.a             
            className="w-96">
              <ButtonFooter>Location: West Java</ButtonFooter>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer Section - Damn Text and Social CustomLinks */}
      <div className="lg:absolute bottom-0 left-0 w-full mb-12">
        {/* Damn Text (left, bottom) */}
        <div className="flex text-base px-6 lg:px-32 pt-12">
          <div className="flex flex-shrink-0 items-center text-base text-zinc-400">
            2024 Gathanandd
            <PiCopyrightBold />
            Edition
          </div>
        </div>

        {/* Social CustomLinks (right, bottom) */}
        <div className="absolute lg:bottom-0 lg:right-0 text-base px-6 flex gap-4 justify-center items-center lg:pr-32">
          <div
            className="flex gap-4 text-white"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="link-footer text-white">
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.CustomLinkedin.com/in/gathanafrr/"
              >
                Linkedin
              </motion.a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="link-footer text-white">
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/gathanandhika"
              >
                Github
              </motion.a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="link-footer text-white">
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/gathanandd"
              >
                Instagram
              </motion.a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="link-footer text-white">
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@gathanafrr"
              >
                Medium
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
