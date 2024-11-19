import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Links = () => {

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.5,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0
        }
    };

    return (
        <motion.div className="links" variants={variants}>
            <motion.div
            className="flex border-b w-[340px] border-zinc-400 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
                <span className="text-zinc-400 text-xs"> NAVIGATION</span>

            </motion.div>
            {/* Membungkus Link dengan motion.div */}
            <motion.div variants={itemVariants} whileHover={{ scale:1.1, x:10 }} whileTap={{ scale:0.9 }}>
                <Link to="/">Home</Link> {/* Link menuju halaman Home */}
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale:1.1, x:10 }} whileTap={{ scale:0.9 }}>
                <Link to="/about">About </Link> {/* Link menuju halaman ListProjects */}
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale:1.1, x:10 }} whileTap={{ scale:0.9 }}>
                <Link to="/work">Work</Link>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale:1.1, x:10 }} whileTap={{ scale:0.9 }}>
                <Link to="/career">Career</Link>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale:1.1, x:10 }} whileTap={{ scale:0.9 }}>
                <Link to="/contact">Contact</Link>
            </motion.div>
            <motion.div
            className="flex bottom-0 left-0 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
                <span className="text-zinc-400 text-xs mt-8"> SOCIALS</span>
            </motion.div>
            <motion.div
            className="flex bottom-0 left-0 gap-4 links2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            >
                <motion.div whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }}  >
                    <motion.a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://www.linkedin.com/in/gathanafrr/' >Linkedin</motion.a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }} >
                    <motion.a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://github.com/gathanandhika' >Github</motion.a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }} >
                    <motion.a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://www.instagram.com/gathanandd' >Instagram</motion.a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }} >
                    <motion.a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://medium.com/@gathanafrr' >Medium</motion.a>
                </motion.div>
            </motion.div>

        </motion.div>
    );
}

export default Links;
