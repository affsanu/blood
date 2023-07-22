"use client"
import { motion } from "framer-motion";

import TitleProps from "../TitleProps";
import ProfileCard from "../ProfileCard";
import { useEffect, useState } from "react";
import axios from "axios";

interface DonorProfileProps {
    userId: string;
    name: string;
    blood: string;
    id: string;
    phone: string;
    address: string;
    birth: string;
    district: string;
}

const DonorProfile: React.FC = () => {
    const [users, setusers] = useState<DonorProfileProps[]>([]);

    useEffect(() => {
        // Fetch card data from the server using Axios
        axios.get<DonorProfileProps[]>('/api/profile').then((response) => {
            setusers(response.data);
        });
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.1 }}
            className="container mb-4 py-4"
        >
            <TitleProps title="Donor Profiles" />
            <div className="grid md:grid-cols-3  lg:grid-cols-5 gap-4">
                {users.map((user) => (
                    <ProfileCard
                        key={user.id}
                        name={user.name}
                        id={user.id}
                        userId={user.userId}
                        blood={user.blood}
                        phone={user.phone}
                        address={user.address}
                        birth={user.birth}
                        district={user.district}
                    />
                )
                )}
            </div>
        </motion.div>
    )
}

export default DonorProfile;