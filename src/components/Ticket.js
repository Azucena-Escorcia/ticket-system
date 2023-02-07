import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdNotificationsNone, MdOutlineLogout } from 'react-icons/md';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { IoTicketOutline } from 'react-icons/io5';
import { BsMoon } from 'react-icons/bs';
import { useState } from 'react';

import { Link } from 'react-router-dom';

const Ticket = () => {
    const menus = [
        { name: "Tickets", link: "/", icon: IoTicketOutline},
        { name: "Users", link: "/", icon: AiOutlineUser},
        { name: "Notification", link: "/", icon: MdNotificationsNone},
        { name: "Dashboard", link: "/", icon: AiOutlineDashboard},
        { name: "Settings", link: "/", icon: AiOutlineSetting, margin: true},
        { name: "Theme", link: "/", icon: BsMoon},
        { name: "Logout", link: "/", icon: MdOutlineLogout}

    ];

    const [open, setOpen] = useState(true);

    return (
        <section className="flex gap-6 bg-[#111111]">
            <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-60': 'w-16'} duration-500 text-gray-100 px-4`}>
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={()=>setOpen(!open)}/>         
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i)=>(
                        <Link to={menu?.link} key={i} className={`${menu?.margin && "mt-5"} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2 style={{ transitionDelay: `${i + 3}00ms`}}
                            className={`whitespace-pre duartion-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>

                            <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <div className="m-3 text-xl text-white font-semibold">
                    Ticket System
                </div>
                <div class="max-w-3xl mx-auto px-8 sm:px-0">
                <div class="sm:w-7/12 sm:mx-auto">
                    <div 
                    role="tablist"
                    aria-label="tabs"
                    class="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-md bg-[#323232] overflow-hidden shadow-2xl shadow-900/20 transition"
                    >
                    <div class="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-md bg-white shadow-md"></div>
                    <button
                        role="tab"
                        aria-selected="true"
                        aria-controls="panel-1"
                        id="tab-1"
                        tabindex="0"
                        class="relative block h-10 px-6 tab rounded-md"
                    >
                        <span class="text-white">My Tickets</span>
                    </button>
                    <button
                        role="tab"
                        aria-selected="false"
                        aria-controls="panel-2"
                        id="tab-2"
                        tabindex="-1"
                        class="relative block h-10 px-6 tab rounded-md"
                    >
                        <span class="text-white">New Tickets</span>
                    </button>
                    <button
                        role="tab"
                        aria-selected="false"
                        aria-controls="panel-3"
                        id="tab-3"
                        tabindex="-1"
                        class="relative block h-10 px-6 tab rounded-md"
                    >
                        <span class="text-white">Search Tickets</span>
                    </button>
                    </div>
                    <div class="mt-6 relative rounded-3xl bg-purple-50">
                    <div
                        role="tabpanel"
                        id="panel-1"
                        class="tab-panel p-6 transition duration-300"
                    >
                        <h2 class="text-xl font-semibold text-gray-800">First tab panel</h2>
                        <p class="mt-4 text-gray-600">Pentiente</p>
                    </div>
                    <div
                        role="tabpanel"
                        id="panel-2"
                        class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
                    >
                        <h2 class="text-xl font-semibold text-gray-800">Second tab panel</h2>
                        <p class="mt-4 text-gray-600">Pentiente</p>
                    </div>
                    <div
                        role="tabpanel"
                        id="panel-3"
                        class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
                    >
                        <h2 class="text-xl font-semibold text-gray-800">Third tab panel</h2>
                        <p class="mt-4 text-gray-600">Pentiente</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
    
};

export default Ticket;