import { RevealOnScroll } from "../RevealOnScroll"; // make sure import path is correct

export const About = () => {
  const frontendSkills = ["React", "HTML", "Typescript", "TailwindCss"];
  const backendSkills = ["Node.js", "Python", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-400 text-lg leading-relaxed text-center mb-8">
              I'm a passionate frontend developer with a deep interest in creating
              smooth, user-friendly, and engaging digital experiences. My focus lies
              in crafting responsive interfaces using modern web technologies. With
              a strong eye for detail and a love for clean design, I aim to deliver
              seamless interactions that delight users.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Work Experience Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Education */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>BCA</strong> - Pokhara University (2021–present)
                  </li>
                  <li>
                    <strong>+2</strong> - NEB (2019–2020)
                  </li>
                  <li>
                    <strong>SEE</strong> - NEB (2018–2019)
                  </li>
                </ul>
              </div>

              {/* Work Experience */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-white/5">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Frontend Developer</strong> at English Hub (Jan 2021 – Apr 2021)
                    <br />
                    Worked as a frontend developer in React.
                  </li>
                  <li>
                    <strong>Graphics Designer</strong> at Himalayan Plant and Deco Hub (Jan 2022 – May 2022)
                    <br />
                    Created branding materials, social media graphics, and promotional content to enhance the company’s visual identity and online presence.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
