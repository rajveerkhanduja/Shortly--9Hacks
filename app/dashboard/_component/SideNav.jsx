"use client";
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function SideNav() {
    const menuOptions = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: PanelsTopLeft,
        },
        {
            id: 2, // Updated IDs to be unique
            name: 'Create New',
            path: '/dashboard/create-new',
            icon: FileVideo,
        },
        {
            id: 3,
            name: 'Upgrade',
            path: '/upgrade',
            icon: ShieldPlus,
        },
        {
            id: 4,
            name: 'Account',
            path: '/account',
            icon: CircleUser,
        },
    ];

    const path = usePathname();

    return (
        <div className="w-64 h-screen shadow-md p-5 bg-white">
            <div className="grid gap-3">
                {menuOptions.map((item) => (
                    <Link href={item.path} key={item.id}>
                        <div
                            className={`flex items-center gap-3 p-3 rounded-md cursor-pointer
                                ${path === item.path ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}
                            `}
                            aria-current={path === item.path ? 'page' : undefined}
                        >
                            <item.icon className="text-xl" />
                            <h2>{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
