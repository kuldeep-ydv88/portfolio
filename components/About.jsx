export default function About() {
    const tools = [
        { name: 'vscode', icon: '/portfolio/assets/vscode.png', },
        { name: 'git', icon: '/portfolio/assets/Github.png', },
        { name: 'mongodb', icon: '/portfolio/assets/mongodb.png', },
        { name: 'firebase', icon: '/portfolio/assets/firebase.png', },
        { name: 'figma', icon: '/portfolio/assets/IntelliJ IDEA.png', },
        { name: 'postman', icon: '/portfolio/assets/Postman.png', },
        { name: 'MySQL', icon: '/portfolio/assets/mysql.png', },
        {name: 'githubactions', icon: '/portfolio/assets/githubactions.png', },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: '/portfolio/assets/code-icon.png',
            icon2: '/portfolio/assets/code-icon-dark.png',
            description: 'Java, JavaScript, TypeScript, JSP, HTML, CSS',
        },
        {
            name: 'Education',
            icon1: '/portfolio/assets/edu-icon.png',
            icon2: '/portfolio/assets/edu-icon-dark.png',
            description: 'B.Tech in CSE, GLA University (2019-2023)',
        },
        {
            name: 'Projects',
            icon1: '/portfolio/assets/project-icon.png',
            icon2: '/portfolio/assets/project-icon-dark.png',
            description: 'Healthcare, Real Estate & E-Commerce platforms',
        },
    ];
    return (
        <div id="about" className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-base sm:text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-10 sm:gap-20 my-10 sm:my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='/portfolio/assets/7040859.jpg' alt="" className="w-48 sm:w-64 md:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center dark:bg-darkTheme">
                        <img src="/portfolio/assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="/portfolio/assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-6 sm:mb-10 max-w-2xl font-Ovo text-sm sm:text-base">I am a skilled Full Stack Developer with expertise in Java, Spring Boot, and Angular. Currently working as a Junior Developer & Project Coordinator at Great River Financial Services Inc, Vancouver, Canada. I have experience building multi-tenant platforms including healthcare systems, real estate management, and e-commerce applications with a focus on clean code, scalable architecture, and Agile methodologies.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-6 sm:w-7 mt-2 sm:mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-6 sm:w-7 mt-2 sm:mt-3 hidden dark:block" />
                                <h3 className="my-3 sm:my-4 font-semibold text-sm sm:text-base text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-4 sm:my-6 text-sm sm:text-base text-gray-700 font-Ovo dark:text-white/80">Tools I use</h4>

                    <ul className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-wrap">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-10 sm:w-12 md:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-4 sm:w-5 md:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}