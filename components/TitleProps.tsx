"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
    title: string;
}

const TitleProps = ({ title }: SectionTitleProps) => {
    return (
        <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1 }}
            className='font-titleFont text-2xl font-semibold flex items-center'>
            {title}
            <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6'></span>
        </motion.h2>
    )
}

export default TitleProps