import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserProfile } from "./teamMember.data";

const TeamMemberCard = ({ user }: { user: UserProfile }) => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                {/* Terminal title bar */}
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-gray-400 text-sm font-mono">user@profile:~</div>
                </div>

                {/* Terminal content */}
                <div className="p-4 font-mono text-sm justify-start text-left flex flex-col">
                    <div className="flex gap-2">
                        <div className="text-green-400">$ </div>
                        <div className="text-yellow-400">ls -l</div>
                    </div>
                    <div>
                        <span className="text-white">-rw-r--r-- 1 user group 5120 May 15 14:30 profile.jpg</span>
                    </div>
                    <div className="flex pt-4 gap-2">
                        <div className="text-green-400">$ </div>
                        <div className="text-yellow-400">cat profile.jpg && whoami</div>
                    </div>
                    <div className="flex gap-4">
                        <img src={user.imageUrl} alt={user.name} className="w-24 h-24 rounded-full border-2 border-green-500" />
                        <span>{user.name}</span>
                    </div>

                    <div className="flex pt-4 gap-2">
                        <div className="text-green-400">$ </div>
                        <div className="text-yellow-400">echo $BIO</div>
                    </div>
                    <div>
                        <span className="text-white">{user.role}</span>
                    </div>

                    {user.links && (
                        <>
                            <div className="flex pt-4 gap-2">
                                <div className="text-green-400">$ </div>
                                <div className="text-yellow-400">cat user_info.txt</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                {user.github && (
                                    <span className="text-white">
                                        GitHub:{" "}
                                        <Link to={user.github}>
                                            <FaGithub />
                                        </Link>
                                    </span>
                                )}
                                {user.linkedin && (
                                    <span className="text-white flex gap-2 items-center">
                                        LinkedIn:{" "}
                                        <a href={user.linkedin}>
                                            <FaLinkedin />
                                        </a>
                                    </span>
                                )}
                                {user.instagram && (
                                    <span className="text-white">
                                        Instagram:{" "}
                                        <Link to={user.instagram}>
                                            <FaInstagram />
                                        </Link>
                                    </span>
                                )}
                            </div>
                        </>
                    )}
                    <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-blink"></span>
                </div>

                {/* Social Links */}
                <div className="bg-gray-800 px-4 py-3 flex justify-end space-x-4">
                    {user.github && (
                        <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaGithub className="w-5 h-5" />
                        </a>
                    )}
                    {user.linkedin && (
                        <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                    )}
                    {user.instagram && (
                        <a href={user.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaInstagram className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;
