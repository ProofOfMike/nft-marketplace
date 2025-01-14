'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IconStarFilled } from '@tabler/icons-react';
import {
  sidebarData,
  settingData,
  popularData,
  otherSportsData,
} from '@/public/data/navData';
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const path = usePathname();
  return (
    <>
      {sidebarData.map((popularSingle) => {
        const isActive = path === popularSingle.href || (popularSingle.childPaths && popularSingle.childPaths.includes(path));
        return (
          <li
            className={`d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5 ${isActive && 'n11-bg'
              }`}
            key={popularSingle.id}
          >
            <Link
              href={popularSingle.href}
              className="d-flex align-items-center gap-2"
            >
              <Image
                width={16}
                height={16}
                src={isActive ? popularSingle.activeImage : popularSingle.image}
                alt="icon"
              />
              {popularSingle.linkText}
            </Link>
          </li>
        );
      })}
      {/* <hr className="py-0 my-0" />
      {/* <h5 className="mb-4 mb-md-6 mt-4 mt-md-6">Popular</h5> */}
      {/* <ul className="aside_namelist d-flex flex-column gap-2 mt-md-5">
        {sidebarData.map((popularSingle) => (
          <li
            className={`d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5  ${
              path == popularSingle.href && "n11-bg"
            }`}
            key={popularSingle.id}
          >
            <Link
              href={popularSingle.href}
              className="d-flex align-items-center gap-2"
            >
              {path == popularSingle.href && (
                <Image
                  width={16}
                  height={16}
                  src={popularSingle.activeImage}
                  alt="icon"
                />
              )}
              {path != popularSingle.href && (
                <Image
                  width={16}
                  height={16}
                  src={popularSingle.image}
                  alt="icon"
                />
              )}

              {popularSingle.linkText}
            </Link>
            {path == popularSingle.href && (
              <button type="button" className="g1-color">
                <IconStarFilled
                  width={16}
                  height={16}
                  className="ti ti-star navinStyleClass navinstyle"
                />
              </button>
            )}
          </li>
        ))}
      </ul> */}
      <hr className="py-0 my-5" />
      <h5 className="mb-4 mb-md-6">Settings</h5>
      <ul className="aside_namelist d-flex flex-column gap-2 mb-15">
        {settingData.map((otherSingle) => (
          <li
            className={`d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5  ${path == otherSingle.href && 'n11-bg'
              }`}
            key={otherSingle.id}
          >
            <Link
              href={otherSingle.href}
              className="d-flex align-items-center gap-2"
            >
              {otherSingle.linkText}
            </Link>
            {/* {path == otherSingle.href && (
              <button type="button" className="g1-color">
                <IconStarFilled
                  width={16}
                  height={16}
                  className="ti ti-star navinStyleClass navinstyle"
                />
              </button>
            )} */}
          </li>
        ))}
      </ul>
    </>
  );
}
