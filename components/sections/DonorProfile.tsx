"use client"
import { motion } from "framer-motion";

import TitleProps from "../TitleProps";
import ProfileCard from "../ProfileCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";

interface DonorProfileProps {
    userId: string;
    name: string;
    blood: string;
    id: string;
    phone: string;
    address: string;
    birth: string;
    district: string;
    showProfileModal: boolean; 
    profileModalHandler: () => void;
}

const DonorProfile: React.FC = () => {
    const [users, setusers] = useState<DonorProfileProps[]>([]);
    const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

    const profileModalHandler = () => {
        setShowProfileModal(!showProfileModal);
    }

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
                        showProfileModal={showProfileModal}
                        profileModalHandler={profileModalHandler}
                    />
                )
                )}
            </div>
            <div className="flex justify-center mt-6">
                <Button >Show More</Button>
            </div>
        </motion.div>
    )
}

export default DonorProfile;