'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants/constants';
import { SideNavItem } from '@/types';
import { imagePaths } from '@/constants/images';


const SideNavBar = () => {
  const [open, setOpen] = useState(true);

  return (
    // <div className={`${open ? 'w-72' : 'w-20'} h-screen bg-orange-500 relative`}>

    <div className={`${open ? 'w-60' : 'w-14'} duration-300 bg-white h-screen  border-r border-zinc-200 relative`}>
      <img className={`${open ? '' : 'rotate-180'} absolute cursor-pointer -right-3 top-9 w-5  rounded-[100px] bg-[#151C37] p-[6px]`} src='/back.png' alt="Image" onClick={()=> setOpen(!open)}/>
      <Link
          href="/"
          className="flex flex-row gap-x-4 items-center border-b border-zinc-200 h-12 w-full"
        >
          <img className='h-10 w-16' src={imagePaths.LOGO_93} alt="Logo"/>
        </Link>
      <div className="flex flex-col space-y-6 w-full">
       

        <div className={`${open ? 'px-6' : ''} flex flex-col space-y-2  `}>
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} open={open} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;

const MenuItem = ({ item, open }: { item: SideNavItem, open: boolean  }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? 'bg-zinc-100' : ''
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              <img className='ml-2' src={item.icon} alt="Image" width="24" height="24" />
              <span className={`${open ? 'block' : 'hidden'} font-semibold text-xs text-black flex`}>{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <img className={`${open ? 'block' : 'hidden'}`} src='chevron-down.png' alt="Image" width="24" height="24" />
            </div>
          </button>


          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'p-2 rounded-[5px] text-white bg-[#151C374D]' : 'text-[#8A8D9B]'
                    }`}
                  >
                    <span className='font-medium text-xs flex'>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
            <img className='ml-2' src={item.icon} alt="Image" width="24" height="24" />
          <span className={`${open ? 'block' : 'hidden'} font-semibold text-xs text-black flex`}>{item.title}</span>
        </Link>
      )}
    </div>
  );
};