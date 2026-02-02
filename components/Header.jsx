export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 px-4 sm:px-0">
      
      <img
        src="/portfolio/assets/profile-img.png"
        alt="Kuldeep Yadav profile photo"
        className="rounded-full w-24 sm:w-32"
      />

      <h3 className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl mb-2 font-Ovo">
        Hi, I&apos;m Kuldeep Yadav
        <img
          src="/portfolio/assets/hand-icon.png"
          alt="waving hand"
          className="w-5 sm:w-6 mb-1"
        />
      </h3>

      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[66px] font-Ovo leading-tight">
        Full Stack Developer & Project Coordinator
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo text-sm sm:text-base text-gray-700 dark:text-gray-300 px-2">
        Skilled Java Developer with Angular expertise, experienced in building scalable web applications using <strong>Java, Spring Boot, and Angular</strong>. Strong in backend API development and integration with modern frontends at <strong>Great River Financial Services Inc, Vancouver, Canada</strong>.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 px-2">
        
        <a
          href="#contact"
          className="px-6 sm:px-10 py-2.5 text-sm sm:text-base rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 hover:opacity-90 transition"
        >
          Contact Me
          <img
            src="/portfolio/assets/right-arrow-white.png"
            alt="arrow icon"
            className="w-4"
          />
        </a>

        <a
  href="/portfolio/resume/Kuldeep-Yadav-Resume.pdf"
  download
  className="px-6 sm:px-10 py-2.5 text-sm sm:text-base rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-white/10 flex items-center gap-2"
>
  Download Resume
  <img
    src="/portfolio/assets/download-icon.png"
    alt="download resume"
    className="w-4 dark:invert"
  />
</a>

      </div>
    </div>
  );
}