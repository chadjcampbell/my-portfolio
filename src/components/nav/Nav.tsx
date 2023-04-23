import { motion } from "framer-motion";
import styles from "./nav.module.css";
import { AiOutlineHome, AiOutlineDesktop, AiOutlineMail } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { useEffect, useState } from "react";

export type NavItem = {
  name: string;
  component: any;
  href: string;
  active: boolean;
};

const navArray: NavItem[] = [
  { name: "Home", component: <AiOutlineHome />, href: "#hero", active: true },
  { name: "Skills", component: <VscTools />, href: "#skills", active: false },
  {
    name: "Projects",
    component: <AiOutlineDesktop />,
    href: "#projects",
    active: false,
  },
  {
    name: "Contact",
    component: <AiOutlineMail />,
    href: "#contact",
    active: false,
  },
];

export const Nav = () => {
  const [activeNav, setActiveNav] = useState<NavItem[]>(navArray);

  const setActive = (name: string) => {
    const newNav = activeNav.map((navItem: NavItem) => {
      if (navItem.name === name) {
        return { ...navItem, active: true };
      } else {
        return { ...navItem, active: false };
      }
    });
    setActiveNav(newNav);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveNav((prev) => {
            return prev.map((navItem) => {
              if (navItem.href === `#${id}`) {
                return { ...navItem, active: true };
              } else {
                return { ...navItem, active: false };
              }
            });
          });
        }
      });
    }, options);

    const elements = document.querySelectorAll("[id]");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 4.5 }}
      className={styles.navbar}
    >
      {activeNav.map((navItem) => (
        <a
          onClick={() => setActive(navItem.name)}
          className={navItem.active ? styles.active : ""}
          key={navItem.name}
          href={navItem.href}
        >
          {navItem.component}
          <p>{navItem.name}</p>
        </a>
      ))}
    </motion.nav>
  );
};
