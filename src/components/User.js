import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdNotificationsNone, MdOutlineLogout } from 'react-icons/md';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineSetting, AiOutlineSearch } from 'react-icons/ai';
import { IoTicketOutline } from 'react-icons/io5';
import { BsMoon } from 'react-icons/bs';
import { useState } from 'react';

import { Link } from 'react-router-dom';

const User = () => {
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
                    <div className='w-1/3 grid grid-cols-2 h-10'>
                    <div className='bg-[#0e0e0e] hover:bg-gray-800 text-white rounded-l flex items-center justify-center border-zinc-800 border'>List Users</div>
                    <div className='bg-[#0e0e0e] hover:bg-gray-800 text-white rounded-r flex items-center justify-center border-zinc-800 border'>List Disable</div>
                    </div>
                    
                    <div class="bg-[#0e0e0e] rounded-lg h-96 border-zinc-800 border mt-4">
                        <div className='m-6'>
                            <div className='text-white pt-2'>List Users</div>
                            <div className='mt-2 text-white'>This is the list of user that are registered in this platform. You can search for someone in particular, disable it or delete it.</div>
                            <div className='w-48 h-9 rounded border border-zinc-800 border float-right'>
                                <a className='text-zinc-800 items-center ml-2'>Search users</a>
                                <AiOutlineSearch className="float-right mt-2 mr-2" size='20px' color='gray'/>
                            </div>
                        </div>
                        <div className='flex flex-col m-6 border-zinc-800 border rounded text-white mt-12'>
                            <table className="table-fixed divide-y divide-zinc-800">
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Tickets</th>
                                    <th>Sign up date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center hover:bg-gray-800'>
                                        <td className='p-2'>Azucena Escorcia</td>
                                        <td className='p-2'>azucena.escorcia@boxelstudio.com</td>
                                        <td className='p-2'>0</td>
                                        <td className='p-2'>Today at 10:40</td>
                                    </tr>
                                    <tr className='text-center hover:bg-gray-800'>
                                        <td className='p-2'>Luis Lozada</td>
                                        <td className='p-2'>luis.lozada@boxelstudio.com</td>
                                        <td className='p-2'>1</td>
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

export default User;