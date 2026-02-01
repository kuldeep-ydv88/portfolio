export default function Services() {
    const services = [
        {
            name: 'Backend Development',
            icon: '/portfolio/assets/web-icon.png',
            description: 'Building scalable backend systems with Java, Spring Boot, Hibernate, and REST APIs for enterprise applications.',
            link: '#',
        },
        {
            name: 'Angular Development',
            icon: '/portfolio/assets/mobile-icon.png',
            description: 'Creating modern, responsive web applications with Angular, Angular Material, and TypeScript for seamless user experiences.',
            link: '#',
        },
        {
            name: 'Full Stack Solutions',
            icon: '/portfolio/assets/ui-icon.png',
            description: 'End-to-end development of multi-tenant platforms integrating backend APIs with modern frontend frameworks.',
            link: '#',
        },
        {
            name: 'API Development',
            icon: '/portfolio/assets/graphics-icon.png',
            description: 'Designing and implementing RESTful APIs, microservices architecture, and real-time communication with WebSocket.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Skilled Java Developer with Angular expertise from Vancouver, Canada, specializing in building scalable web applications using Java, Spring Boot, and Angular with experience in multi-tenant platforms.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="/portfolio/assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}