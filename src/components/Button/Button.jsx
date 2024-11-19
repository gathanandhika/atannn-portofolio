import { useState } from "react";
import "./button.css";
import { motion } from "framer-motion";

const Button = ({ children, onClick, isActive }) => {
  const [isHover, setIsHover] = useState(false);

  // Menentukan warna berdasarkan status hover atau aktif
  const titleColor = isHover || isActive ? "#ffffff" : "#000000";

  return (

    <div>
      <div
        className={`buttonContainer border px-9 py-5 ${isActive ? "active" : ""}`} // Menambahkan kelas 'active' jika tombol aktif
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        <motion.div
          animate={{
            scale: isHover ? 100 : 0,
            backgroundColor: isHover ? "#455ce9" : "#455ce9",
          }}
          transition={{
            ease: "easeIn",
            duration: 0.2,
          }}
          className="circle"
        ></motion.div>

        <motion.div
          animate={{
            y: isHover ? 2 : 0,
            color: titleColor, // Menggunakan titleColor untuk menentukan warna teks
          }}
          className="title"
        >
          <p>{children}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Button;
