import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava, FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaAws, FaNetworkWired, FaCode,
  FaBrain, FaEye, FaComments, FaRobot, FaChartLine, FaMicrochip, FaRoute, FaCamera,
  FaDatabase, FaProjectDiagram, FaCubes, FaServer, FaClipboardCheck, FaSyncAlt, FaJira,
} from 'react-icons/fa';
import {
  SiPython, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiMui,
  SiExpress, SiFastapi, SiSpringboot, SiFlask, SiMongodb, SiMysql, SiPostgresql, SiSqlite, SiPostman,
  SiPytorch, SiTensorflow, SiLangchain, SiOpencv,
} from 'react-icons/si';
import { skillCategories } from '../data/portfolio';

const iconMap = {
  java: { Icon: FaJava, color: '#f89820' },
  python: { Icon: SiPython, color: '#3776AB' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  typescript: { Icon: SiTypescript, color: '#3178C6' },
  html5: { Icon: FaHtml5, color: '#E34F26' },
  react: { Icon: FaReact, color: '#61DAFB' },
  nextjs: { Icon: SiNextdotjs, color: '#FFFFFF' },
  tailwind: { Icon: SiTailwindcss, color: '#38BDF8' },
  mui: { Icon: SiMui, color: '#007FFF' },
  nodejs: { Icon: FaNodeJs, color: '#3C873A' },
  express: { Icon: SiExpress, color: '#FFFFFF' },
  fastapi: { Icon: SiFastapi, color: '#009688' },
  flask: { Icon: SiFlask, color: '#FFFFFF' },
  api: { Icon: FaNetworkWired, color: '#ff2a2a' },
  spring: { Icon: SiSpringboot, color: '#6DB33F' },
  mongodb: { Icon: SiMongodb, color: '#47A248' },
  mysql: { Icon: SiMysql, color: '#4479A1' },
  postgresql: { Icon: SiPostgresql, color: '#4169E1' },
  sqlite: { Icon: SiSqlite, color: '#003B57' },
  machinelearning: { Icon: FaBrain, color: '#FF6B6B' },
  deeplearning: { Icon: FaMicrochip, color: '#9B59B6' },
  computervision: { Icon: FaEye, color: '#3498DB' },
  nlp: { Icon: FaComments, color: '#2ECC71' },
  explainableai: { Icon: FaChartLine, color: '#F1C40F' },
  agenticai: { Icon: FaRobot, color: '#E74C3C' },
  pytorch: { Icon: SiPytorch, color: '#EE4C2C' },
  tensorflow: { Icon: SiTensorflow, color: '#FF6F00' },
  langchain: { Icon: SiLangchain, color: '#1C3C3C' },
  openrouter: { Icon: FaRoute, color: '#ff2a2a' },
  mediapipe: { Icon: FaCamera, color: '#00A3E0' },
  opencv: { Icon: SiOpencv, color: '#5C3EE8' },
  git: { Icon: FaGitAlt, color: '#F05032' },
  github: { Icon: FaGithub, color: '#FFFFFF' },
  docker: { Icon: FaDocker, color: '#2496ED' },
  vscode: { Icon: FaCode, color: '#007ACC' },
  postman: { Icon: SiPostman, color: '#FF6C37' },
  aws: { Icon: FaAws, color: '#FF9900' },
  sql: { Icon: FaDatabase, color: '#4479A1' },
  jira: { Icon: FaJira, color: '#0052CC' },
  dsa: { Icon: FaProjectDiagram, color: '#ff2a2a' },
  oop: { Icon: FaCubes, color: '#8E44AD' },
  dbms: { Icon: FaDatabase, color: '#ff2a2a' },
  os: { Icon: FaServer, color: '#34495E' },
  sdlc: { Icon: FaClipboardCheck, color: '#16A085' },
  agile: { Icon: FaSyncAlt, color: '#F39C12' },
};

const SkillChip = ({ name, icon, index }) => {
  const entry = iconMap[icon] || { Icon: FaNetworkWired, color: '#ff2a2a' };
  const { Icon, color } = entry;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.04 }}
      className="group relative flex flex-col items-center justify-center gap-3 w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-2xl bg-[#111111] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-[#ff2a2a]/60 hover:shadow-[0_15px_40px_rgba(255,42,42,0.25)] transition-all duration-300"
    >
      <Icon size={36} color={color} className="drop-shadow-md" />
      <span className="text-white/90 text-[11px] sm:text-xs font-bold text-center px-2 leading-tight">{name}</span>
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#ff2a2a]/0 to-[#ff2a2a]/0 group-hover:from-[#ff2a2a]/10 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] w-full py-28 px-6 md:px-12 relative overflow-hidden">
      {/* Ambient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff2a2a]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/70 font-bold mb-6 bg-white/5 backdrop-blur-md">
            What I Work With
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Skills &amp; <span className="text-[#ff2a2a]">Technologies</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mt-5 font-medium">
            A toolkit built for shipping production-grade, full-stack products end to end.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-5">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-5">
                {category.skills.map((skill, i) => (
                  <SkillChip key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
