import { useState, useEffect } from "react";
import Links from "./links/Links";
import "./sidebar.css";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [showBg, setShowBg] = useState(false);  // state untuk memonitor visibilitas background
    const [showToggle, setShowToggle] = useState(false);  // state untuk toggle button

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",  // Efek clipPath untuk membuka sidebar
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(40px at 420px 65px)",  // Efek clipPath saat sidebar tertutup
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    // Menggunakan useEffect untuk mendengarkan event scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Ketika scroll lebih dari 100px
                setShowBg(true); // Menampilkan .bg
                setShowToggle(true); // Menampilkan tombol toggle
            } else {
                setShowBg(false); // Menyembunyikan .bg
                setShowToggle(false); // Menyembunyikan tombol toggle
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Membersihkan event listener ketika komponen di-unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // [] memastikan efek hanya berjalan sekali setelah komponen dimount

    // Menonaktifkan scroll pada body saat sidebar terbuka
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; // Nonaktifkan scroll
        } else {
            document.body.style.overflow = "auto"; // Aktifkan scroll kembali
        }

        return () => {
            document.body.style.overflow = "auto"; // Pastikan overflow kembali normal saat komponen unmount
        };
    }, [open]);

    return (
        <motion.div animate={open ? "open" : "closed"} className="sidebar">
            {/* Overlay untuk mencegah interaksi dengan halaman saat sidebar terbuka */}
            {open && <div className="overlay" onClick={() => setOpen(false)} />}

            {/* Menampilkan .bg dengan animasi spring */}
            <motion.div 
                className="bg" 
                variants={variants} 
                style={{
                    opacity: showBg ? 1 : 0,
                    scale: showBg ? 1 : 0.95,  // Menggunakan scale untuk efek pop-up
                    transition: "opacity 0.3s ease, transform 0.3s ease-in-out"  // Transisi untuk opacity dan transform
                }}
                initial={{ opacity: 0, scale: 0.95 }}  // Inisialisasi opacity dan scale pada start
                animate={{ opacity: showBg ? 1 : 0, scale: showBg ? 1 : 0.95 }}  // Animasi saat muncul
                exit={{ opacity: 0, scale: 0.95 }}  // Animasi saat menghilang
            >
                <Links />
            </motion.div>
            {/* Menyembunyikan toggle button jika showToggle false */}
            {showToggle && <ToggleButton setOpen={setOpen} />}
        </motion.div>
    );
};

export default Sidebar;
