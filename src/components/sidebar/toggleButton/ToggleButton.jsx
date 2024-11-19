import { motion } from "framer-motion";

// Modifikasi ToggleButton.jsx
const ToggleButton = ({ setOpen }) => {
  return (
    <button 
      className="toggle-button"
      onClick={() => setOpen(prev => !prev)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="1"
          stroke="#fff"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 1 6.5 L 25 6.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <motion.path
          strokeWidth="1"
          stroke="#fff"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 1 18.5 L 25 18.5" },
            open: { d: "M 3 2.5 L 17 16.5" }
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
