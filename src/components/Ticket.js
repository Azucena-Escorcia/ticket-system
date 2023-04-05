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
        { name: "Tickets", link: "/ticket", icon: IoTicketOutline},
        { name: "Users", link: "/user", icon: AiOutlineUser},
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
            <div className='maincontainer w-full'>
                <div className="m-6 text-xl text-white font-semibold">
                    Ticket System
                </div>
                <div class="m-6">
                    <div className='w-1/3 grid grid-cols-3 h-10'>
                    <div className='bg-[#0e0e0e] hover:bg-gray-800 text-white rounded-l flex items-center justify-center border-zinc-800 border'>My Tickets</div>
                    <div className='bg-[#0e0e0e] hover:bg-gray-800 text-white flex items-center justify-center border-zinc-800 border'>New Tickets</div>
                    <div className='bg-[#0e0e0e] hover:bg-gray-800 text-white rounded-r flex items-center justify-center border-zinc-800 border'>Search Tickets</div>
                    </div>
                    
                    <div class="bg-[#0e0e0e] rounded-lg h-96 border-zinc-800 border mt-4">
                        <div className='m-6'>
                        <div className='text-white pt-2'>My Tickets</div>
                        <div className='mt-2 text-white'>Here you can view the tickets you are responsible for.</div>
                        <div className='mt-2 grid grid-cols-3 w-1/3 h-10 '>
                            <div className='hover:bg-gray-800 text-white rounded-l flex items-center justify-center border-zinc-800 border'>Issues</div>
                            <div className='hover:bg-gray-800 text-white flex items-center justify-center border-zinc-800 border'>Requests</div>
                            <div className='hover:bg-gray-800 text-white rounded-r flex items-center justify-center border-zinc-800 border'>Add Filter</div>
                        </div>
                        </div>
                        <div className='flex flex-col m-6 border-zinc-800 border rounded text-white'>
                            <table className="table-fixed divide-y divide-zinc-800">
                                <thead>
                                    <tr>
                                    <th>Number</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Author</th>
                                    <th>State</th>
                                    <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center hover:bg-gray-800'>
                                        <td className='p-2'>#316432</td>
                                        <td className='p-2'>Install Maya, Redshift y RV</td>
                                        <td className='p-2'>Issues: Software</td>
                                        <td className='p-2'>Azucena Escorcia</td>
                                        <td className='p-2'>In Progress</td>
                                        <td className='p-2'>Today at 10:40</td>
                                    </tr>
                                    <tr className='text-center hover:bg-gray-800'>
                                        <td className='p-2'>#355915</td>
                                        <td className='p-2'>Drive SmallProjects, BCY</td>
                                        <td className='p-2'>Requests: Network Drive</td>
                                        <td className='p-2'>Azucena Escorcia</td>
                                        <td className='p-2'>Complete</td>
                                        <td className='p-2'>Today at 12:40</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
    
};

export default Ticket;