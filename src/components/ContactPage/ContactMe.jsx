import { motion } from "framer-motion";
import "./contactme.css";
import nnathContact from "../../assets/nnathContact.png";
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ButtonFooter from "../ButtonFooter/ButtonFooter";

// Import React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Styles for the toast

const ContactMe = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ede2a7b4-e839-4482-b32c-b7c8982f70d9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            // Show success toast if form submission is successful
            toast.success("Email sent successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    backgroundColor: "#455ce9",
                    color:"white",
                    borderRadius: '0px'
                },
                progressClassName: "custom-progress-bar",
                icon:false,
                closeButton:false,
            });

            event.target.reset();

            console.log("Success", res);

            
        } else {
            // Show error toast if there is a failure
            toast.error("Oops! Something went wrong. Please try again.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    backgroundColor: "#a50000",
                    color:"white",
                    borderRadius: '0px'
                },
                progressClassName: "custom-progress-bar",
                icon:false,
                closeButton:false,
            });
        }
    };

    return (
        <div 
        data-scroll-section
        className="pb-4 text-zinc-950">
            <div className="flex flex-wrap bg-zinc-900">
                <div className="w-full lg:w-2/3 lg:p-8 ">
                    <div className="flex items-center justify-center">
                        <form className="w-full lg:mr-20" onSubmit={onSubmit}>
                            <div className="relative z-0 w-full mb-12 group">
                                <motion.p className="text-white lg:text-8xl text-4xl lg:py-12 py-8">
                                    Hello there, let's work together.
                                </motion.p>
                            </div>

                            {/* Input fields */}
                            <div className="relative z-0 w-full mb-12 group">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="custom-placeholder block py-12 px-0 w-full lg:text-2xl bg-transparent border-0 border-b appearance-none text-white border-zinc-700 focus:border-zinc-700 focus:outline-none focus:ring-0 focus:border-zinc-700 peer"
                                    placeholder="Peter Parker*"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="peer-focus:font-medium absolute lg:text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-zinc-500 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    What's your name?
                                </label>
                            </div>

                            {/* More input fields... */}
                            <div className="relative z-0 w-full mb-12 group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="custom-placeholder block py-12 px-0 w-full lg:text-2xl bg-transparent border-0 border-b appearance-none text-white border-zinc-700 focus:border-zinc-700 focus:outline-none focus:ring-0 focus:border-zinc-700 peer"
                                    placeholder="parker@parker.com*"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="peer-focus:font-medium absolute lg:text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-zinc-500 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    What's your email?
                                </label>
                            </div>

                            {/* Service field */}
                            <div className="relative z-0 w-full mb-12 group">
                                <input
                                    type="text"
                                    name="service"
                                    id="service"
                                    className="custom-placeholder block py-12 px-0 w-full lg:text-2xl bg-transparent border-0 border-b appearance-none text-white border-zinc-700 focus:border-zinc-700 focus:outline-none focus:ring-0 focus:border-zinc-700 peer"
                                    placeholder="Web Development, UI/UX Design, Graphic Design ..."
                                    required
                                />
                                <label
                                    htmlFor="service"
                                    className="peer-focus:font-medium absolute lg:text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-zinc-500 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    What services are you looking for?
                                </label>
                            </div>

                            {/* Message field */}
                            <div className="relative z-0 w-full mb-12 group">
                                <textarea
                                    name="message"
                                    id="message"
                                    className="custom-placeholder custom-text-area block py-12 px-0 w-full lg:text-2xl bg-transparent border-b border-zinc-700 appearance-none text-white focus:outline-none focus:ring-0 peer"
                                    placeholder="Hello Gathan, can you help me with ..."
                                    required
                                />
                                <label
                                    htmlFor="message"
                                    className="peer-focus:font-medium absolute lg:text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-zinc-500 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Your message
                                </label>
                            </div>

                            {/* Submit button */}
                            <div className="relative z-0 w-full mb-12 mt-[-50px] group flex justify-end">
                                <button
                                    type="submit"
                                    className="custom-btn-submit relative mb-12 lg:px-8 py-12 text-lg font-semibold"
                                >
                                    <ButtonFooter>Submit</ButtonFooter>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 text-zinc-950">
                    <div className="flex lg:justify-center lg:justify-start lg:pb-20 lg:pt-12 ">
                        <motion.div 
                            animate={{ opacity:1, x: 0 }}
                            initial={{ opacity:0, x:100 }}
                            transition={{ duration: 1, type: "spring", stiffness: 120}}
                            className=""
                        >
                            <img src={nnathContact} alt="Profil" className="pt-4 w-[120px]"/>
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap items-start justify-start mb-2">
                <div
                className="text-white"
                >
                    <div className="pb-4 pt-12 lg:pt-0">
                        <motion.div 
                        animate={{ opacity:1, x: 0 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 120}}
                        className="link-footer text-zinc-600 text-xs mb-2 font-semibold">
                        <motion.p
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CONTACT
                        </motion.p>
                        </motion.div>
                        <motion.div
                        animate={{ opacity:1, x:1 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration:1, type:"spring", stiffness: 120 }}
                        whileTap={{ scale: 0.9 }} whileHover={{ x:4 }} className="link-footer text-white lg:text-lg mb-2">
                        <motion.a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=gathanafrr@gmail.com&su=SUBJECT&body=Hello Gathan, can you help me with ..."
                        >
                            gathanafrr@gmail.com
                        </motion.a>
                        </motion.div>
                        <motion.div
                        animate={{ opacity:1, x:1 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration:1, type:"spring", stiffness: 120 }}
                        whileTap={{ scale: 0.9 }} whileHover={{ x:4 }} className="link-footer text-white lg:text-lg mb-5">
                        <motion.a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://wa.me/6282216934391?text=Hello there, can you help me with ..."
                        >
                            +62 8221 6934 391
                        </motion.a>
                        </motion.div>
                    </div>
                    <div className="pb-4">
                        <motion.div 
                        animate={{ opacity:1, x: 0 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 120}}
                        className="link-footer text-zinc-600 text-xs mb-2 font-semibold">
                        <motion.p
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            DETAILS
                        </motion.p>
                        </motion.div>
                        <motion.div
                        animate={{ opacity:1, x:1 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration:1, type:"spring", stiffness: 120 }}
                        className="link-footer text-white lg:text-lg mb-2">
                        <motion.p
                        >
                            Gathan Andhika Febriansyah
                        </motion.p>
                        </motion.div>
                        <motion.div
                        animate={{ opacity:1, x:1 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration:1, type:"spring", stiffness: 120 }}
                        className="link-footer text-white lg:text-lg mb-5">
                        <motion.p
                        >
                            Location: West Java
                        </motion.p>
                        </motion.div>
                    </div>
                    <div className="pb-4 mb-12">
                        <motion.div 
                        animate={{ opacity:1, x: 0 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 120}}
                        className="link-footer text-zinc-600 text-xs mb-2 font-semibold">
                        <motion.p
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SOCIALS
                        </motion.p>
                        </motion.div>
                        <motion.div
                        animate={{ opacity:1, x:1 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration:1, type:"spring", stiffness: 120 }}
                        whileTap={{ scale: 0.9 }} whileHover={{ x:4 }} className="link-footer text-white lg:text-lg mb-2">
                        <motion.a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/gathanafrr/"
                        >
                            Linkedin
                        </motion.a>
                        </motion.div>
                        <motion.div
                        animate={{ opacity:1, x:1 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration:1, type:"spring", stiffness: 120 }}
                        whileTap={{ scale: 0.9 }} whileHover={{ x:4 }} className="link-footer text-white lg:text-lg mb-2">
                        <motion.a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/gathanandhika"
                        >
                           Github
                        </motion.a>
                        </motion.div>
                        <motion.div
                        animate={{ opacity:1, x:1 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration:1, type:"spring", stiffness: 120 }}
                        whileTap={{ scale: 0.9 }} whileHover={{ x:4 }} className="link-footer text-white lg:text-lg mb-2">
                        <motion.a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/gathanandd"
                        >
                            Instagram
                        </motion.a>
                        </motion.div>
                        <motion.div
                        animate={{ opacity:1, x:1 }}
                        initial={{ opacity:0, x:100 }}
                        transition={{ duration:1, type:"spring", stiffness: 120 }}
                        whileTap={{ scale: 0.9 }} whileHover={{ x:4 }} className="link-footer text-white lg:text-lg mb-5">
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
                    <div className="flex flex-wrap items-start justify-start mb-2">
                        <div className="text-white">
                            {/* Add content... */}
                        </div>
                    </div>
                </div>
            </div>

            {/* ToastContainer for displaying notifications */}
            <ToastContainer />
        </div>
    );
};

export default ContactMe;
