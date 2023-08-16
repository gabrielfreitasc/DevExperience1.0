import { ArrowDown } from "../components/ArrowDown";
import { DiLinux, DiJsBadge, DiMysql } from 'react-icons/di'
import { ReactOriginalIcon, LinuxOriginalIcon, JavascriptOriginalIcon, NextjsOriginalIcon, TypescriptOriginalIcon, NodejsOriginalIcon, DockerOriginalIcon, TailwindcssOriginalWordmarkIcon, MysqlOriginalIcon } from 'react-devicons'
import { BiLogoTypescript, BiLogoReact, BiLogoDocker, BiLogoTailwindCss, BiLogoNodejs } from 'react-icons/bi'
import { motion, useAnimate } from "framer-motion";
import avatar from '../../public/static/image/avatar.png'

import { fadeInAnimationVariants } from '../utils/fadeInAnimationVariants'
import { useTranslation } from 'react-i18next';
import { SiNextdotjs } from "react-icons/si";
import { useEffect } from 'react';

const iconsCarousel = [
  {"id": "1", "name":<LinuxOriginalIcon size={40} />},
  {"id": "2", "name":<JavascriptOriginalIcon size={40} />},
  {"id": "3", "name":<NextjsOriginalIcon size={40} />},
  {"id": "4", "name":<TypescriptOriginalIcon size={40} />},
  {"id": "5", "name":<ReactOriginalIcon size={40} />},
  {"id": "6", "name":<NodejsOriginalIcon size={40}/>},
  {"id": "7", "name":<DockerOriginalIcon size={55} />},
  {"id": "8", "name":<BiLogoTailwindCss size={50} color="#30bdff"/>},
  {"id": "9", "name":<MysqlOriginalIcon size={40} />}
]


export function About() {
  const { t } = useTranslation("global");
  const [scope, animate] = useAnimate();

  return (
    <motion.div
      id="about"
      className="w-full h-full overflow-hidden bg-gradient-to-tl from-violet-950 via-black to-default font-suprecot background-animate"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h1 className="text-7xl uppercase font-burtons  flex justify-center items-center gap-2 xs:text-5xl">{t("ABOUT_PAGE.title1")} <h1 className="text-violet-600">{t("ABOUT_PAGE.title2")}</h1></h1>

      <div className="border-4 border-violet-900 rounded-full w-32 h-32 mx-auto overflow-hidden mt-10 outline outline-offset-8 outline-2 outline-white xs:w-24 xs:h-24">
        <img src={avatar}></img>
      </div>

      <div className="flex flex-col justify-center items-center my-8">
        <h2 className="text-3xl mb-8 xs:mb-0">Gabriel Freitas</h2>
        <motion.p
          className="text-base text-center max-w-lg font-sans mb-2 xs:text-xs xs:p-4 xs:mb-24"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          {t("ABOUT_PAGE.description")}
        </motion.p>
        <motion.span
          className="gap-2 text-base font-bold font-sans flex items-center justify-center p-2 rounded-lg w-[50%] overflow-hidden h-full xs:-translate-y-2 xs:w-full xs:h-[130px]"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          >
          {/* <h3>SKILLS:</h3> */}
        <motion.li
          className="flex gap-10 items-center xs:gap-20"
          animate={{x: [-1000, 850]}}
          transition={{duration: 15, ease: "linear", repeat: Infinity}}
        >
          {iconsCarousel.map(icon => {
            const { id, name } = icon;
            return(
              <div key={id} className="group bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-md h-20 w-20 flex justify-center items-center shadow-default hover:shadow-light hover:shadow-zinc-300 ease-in-out duration-300 xs:scale-150 xs:hover:shadow-default">
                <div className="grayscale group-hover:grayscale-0 ease-in-out duration-300">{name}</div>
              </div>
            );
          })}
        </motion.li>

        </motion.span>
      </div>
      <div className="xs:hidden">
        <ArrowDown data="experience"/>
      </div>
    </motion.div>
  );
}
