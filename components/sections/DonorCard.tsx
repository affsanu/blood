"use client";
import { motion } from "framer-motion";

import BloodCard from "../BloodCard";
import TitleProps from "../TitleProps";

const Users = [
    { group: "A+", type: "Positive", user: 300, desc: "Deploy your new project in one-click." },
    { group: "A-", type: "Negative", user: 65, desc: "Deploy your new project in one-click." },
    { group: "B+", type: "Positive", user: 750, desc: "Deploy your new project in one-click." },
    { group: "B-", type: "Negative", user: 13, desc: "Deploy your new project in one-click." },
    { group: "AB+", type: "Positive", user: 444, desc: "Deploy your new project in one-click." },
    { group: "AB-", type: "Negative", user: 265, desc: "Deploy your new project in one-click." },
    { group: "O+", type: "Positive", user: 115, desc: "Deploy your new project in one-click." },
    { group: "O-", type: "Negative", user: 77, desc: "Deploy your new project in one-click." },
]

const DonorCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.1 }}
            className="container"
            >
            <TitleProps title="List of blood group" />
            <div className="grid grid-cols-2 lg:grid-cols-8 gap-4">
                {Users.map((blood) => (
                    <BloodCard key={blood.group} group={blood.group} type={blood.type} user={blood.user} desc={blood.desc} />
                ))}
            </div>
        </motion.div>
    )
}

export default DonorCard;