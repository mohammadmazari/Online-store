"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import menuItems from "@data/CategoryMenu";

export default function CategoryList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSubIndex, setHoveredSubIndex] = useState(null);

  return (
    <nav className="hidden md:block p-4">
      <ul className="flex justify-start py-3 gap-7 text-md">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setHoveredSubIndex(null);
            }}
          >
            <Link
              href={item.link}
              className="hover:text-blue-400 p-2 flex items-center gap-2 text-sm lg:text-md"
            >
              <Image src={item.src} alt={item.title} width={22} height={20} />
              {item.title}
            </Link>

            {item.submenu && hoveredIndex === index && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 border border-gray-200 bg-white w-48 p-2 shadow-md z-40"
              >
                {item.submenu.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="relative p-2 hover:bg-gray-200 rounded-md text-sm"
                    onMouseEnter={() => setHoveredSubIndex(subIndex)}
                    onMouseLeave={() => setHoveredSubIndex(null)}
                  >
                    <Link
                      href={sub.link}
                      className="block border-s-2 ps-2 border-blue-300"
                    >
                      {sub.title}
                    </Link>

                    {/* زیرمنوی سطح دوم */}
                    {sub.subMenu && hoveredSubIndex === subIndex && (
                      <motion.ul
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute top-0 right-[100%] border border-gray-200 bg-white w-48 p-2 shadow-md z-50"
                      >
                        {sub.subMenu.map((nested, nestedIndex) => (
                          <li
                            key={nestedIndex}
                            className="p-2 hover:bg-gray-200 rounded-md text-sm"
                          >
                            <Link
                              href={nested.link}
                              className="block border-s-2 ps-2 border-blue-200"
                            >
                              {nested.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
