"use client";

import { motion } from "framer-motion";

const BenifitTitle = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.2 }}
            className="w-full flex flex-col justify-center items-center">
            <span className=' text-rose-500 ethnocentric'>Why Priyo Blood?</span>
            <p className='text-xs'>Be a Hero, Donate Priyo Blood</p>
        </motion.div>
    )
}

export default BenifitTitle