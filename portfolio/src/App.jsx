import { motion } from "framer-motion";

export default function App() {

  const projects = [
  {
    name: "Placement Portal",
    image: "/images/placement.png",
    desc: "A full-stack platform to manage student placements with authentication, dashboards, and database-driven workflow.",
    tech: "React • Flask • MySQL",
    impact: "Reduced manual process by 40% and improved placement workflow efficiency",
    demo: "https://eloquent-cajeta-b831d0.netlify.app/",
    github: "https://github.com/mayankpawarsaecomp-cell/Placement-Portal"
  },
  
  {
  name: "Dental Clinic Management System",
  image: "/images/clinic.png",
  desc: "A full-stack system to manage patient records, appointments, and clinic workflow efficiently.",
  tech: "Flask • MySQL • HTML • CSS • JavaScript",
  impact: "Improved clinic workflow and structured patient data",
  demo: "#",
  github: "https://github.com/mayankpawarsaecomp-cell/Dental-clinic-2/tree/main/client_project%202/client_project"
},
  {
      name: "Attendance Tracker",
      desc: "QR-based attendance automation system.",
      tech: "JavaScript • QR System",
      impact: "Reduced errors by 45%",
  }
  
];

  const skills = [
    "Java","C++","JavaScript","Python",
    "React JS","HTML","CSS",
    "Flask","MySQL","MongoDB (Basics)",
    "OOP","DSA"
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div style={bg}>

      {/* NAVBAR */}
      <nav style={nav}>
        <h2 style={{color:"#38bdf8"}}>Mayank Pawar</h2>
        <a href="/Mayank_Pawar_Resume.pdf" download style={resumeBtn}>
          Download Resume
        </a>
      </nav>

      {/* HERO */}
      <section style={hero}>
        <motion.h1 {...fadeUp}>
          Full Stack Developer & Data Science Enthusiast
        </motion.h1>

        <motion.p {...fadeUp} style={subtext}>
          Building scalable applications and solving real-world problems using modern technologies and data.
        </motion.p>

        <div style={{marginTop:"20px"}}>
          <a href="#projects" style={btn}>View Projects</a>
        </div>
      </section>

      {/* ABOUT */}
      <section style={section}>
        <motion.h2 {...fadeUp} style={heading}>About Me</motion.h2>
        <motion.p {...fadeUp} style={subtext}>
          Computer Engineering student passionate about Full Stack Development and Data Science.
          I focus on building impactful applications and improving system performance.
        </motion.p>
      </section>

      {/* EDUCATION */}
      <section style={section}>
        <motion.h2 {...fadeUp} style={heading}>Education</motion.h2>

        <motion.div {...fadeUp} style={card}>
          <p><b>B.E Computer Engineering</b> – SPPU</p>
          <p>CGPA: 7.92</p>
          <p><b>B.S Data Science</b> – IIT Madras (Pursuing)</p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section style={section}>
        <motion.h2 {...fadeUp} style={heading}>Skills</motion.h2>

        <div style={grid}>
          {skills.map((s,i)=>(
            <motion.div key={i} whileHover={{scale:1.1}} {...fadeUp} style={card}>
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={section}>
        <motion.h2 {...fadeUp} style={heading}>Projects</motion.h2>

        <div style={grid}>
          {projects.map((p,i)=>(
            <motion.div key={i} whileHover={{y:-8}} {...fadeUp} style={card}>
              <h3>{p.name}</h3>
              <p style={subtext}>{p.desc}</p>
              <p style={tech}>{p.tech}</p>
              <p style={{color:"#22c55e"}}>{p.impact}</p>

              <div style={{marginTop:"10px"}}>
                <a href={p.demo} target="_blank" style={link}>Live Demo</a> |
                <a href={p.github} target="_blank" style={{...link,marginLeft:"10px"}}>GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={section}>
        <motion.h2 {...fadeUp} style={heading}>Experience</motion.h2>

        <motion.div {...fadeUp} style={card}>
          <h3>Full Stack Intern — GAOTek Inc.</h3>
          <ul style={subtext}>
            <li>Improved load time by 20%</li>
            <li>Built REST APIs</li>
            <li>Optimized SQL queries by 25%</li>
            <li>Content uploading & product review</li>
            <li>Platoon Leader</li>
          </ul>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section style={section}>
        <motion.h2 {...fadeUp} style={heading}>Contact</motion.h2>

        <p>Email: mayankpawar.sae.comp.com</p>
        <p>GitHub: https://github.com/mayankpawarsaecomp-cell</p>
        <p>LinkedIn: https://www.linkedin.com/in/mayank-pawar-2aa75528a?utm_source=share_via&utm_content=profile&utm_medium=member_android</p>
      </section>

    </div>
  );
}

/* STYLES */

const bg = {
  background:"#020617",
  color:"#e2e8f0",
  minHeight:"100vh",
  fontFamily:"sans-serif"
};

const nav = {
  display:"flex",
  justifyContent:"space-between",
  padding:"20px 50px"
};

const hero = {
  textAlign:"center",
  padding:"100px 20px"
};

const section = {
  padding:"50px"
};

const heading = {
  color:"#38bdf8",
  marginBottom:"15px"
};

const grid = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
  gap:"20px"
};

const card = {
  background:"#1e293b",
  padding:"20px",
  borderRadius:"10px"
};

const subtext = { color:"#94a3b8" };
const tech = { color:"#38bdf8" };
const link = { color:"#38bdf8" };

const btn = {
  padding:"10px 20px",
  background:"#38bdf8",
  borderRadius:"5px"
};

const resumeBtn = {
  color:"#38bdf8"
};