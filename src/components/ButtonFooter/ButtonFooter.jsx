import { useState } from "react";
import "./buttonfooter.css";
import { motion } from "framer-motion";

const ButtonFooter = ({ children, onClick, isActive }) => {
  const [isHover, setIsHover] = useState(false);

  // Menentukan warna berdasarkan status hover atau aktif
  const titleColor = isHover || isActive ? "#ffffff" : "#ffffff";

  return (
    <div>
      <div
        className={`buttonContainer1 border border-zinc-600 px-9 py-5 ${isActive ? "active" : ""}`} // Menambahkan kelas 'active' jika tombol aktif
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <motion.div
          animate={{
            scale: isHover ? 150 : 0,
            backgroundColor: isHover ? "#455ce9" : "#455ce9",
          }}
          transition={{
            ease: "easeIn",
            duration: 0.25,
          }}
          className="circle1"
        ></motion.div>

        <motion.div
          animate={{
            y: isHover ? 2 : 0,
            color: titleColor, // Menggunakan titleColor untuk menentukan warna teks
          }}
          className="title1"
        >
          <p>{children}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ButtonFooter;
