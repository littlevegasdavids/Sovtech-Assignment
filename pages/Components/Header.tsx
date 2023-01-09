export default function Header() {
    return (
      <div className="grid grid-cols-1 text-center gap-3 mb-10">
          <p className="font-bold text-6xl text-center">Reno Davids</p>
          <p className="text-3xl italic">Software Engineer / Full-Stack Engineer</p>
          <div className="grid grid-cols-2 gap-4 mx-auto">
            <a href="https://www.linkedin.com/in/littlevegasdavids/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width={50}/>
            </a>
            <a href="https://github.com/littlevegasdavids/" target="_blank">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={50} className="bg-white"/>
            </a>
          </div>
      </div>
    )
}