import React from "react";
import { motion } from "framer-motion";
import TeamMemberCard from "./TeamMember";
import { teamMembers } from "./teamMember.data";


export default function TeamPage() {
    return (
        <div className="min-h-screen bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <TeamMemberCard key={member.name} user={member} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
