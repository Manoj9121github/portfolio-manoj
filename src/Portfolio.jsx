    import React from "react";

    export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-gray-800 px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12">
    <h1 className="text-5xl font-extrabold text-teal-700 mb-2">
        Manoj Gollamandala
    </h1>
    <p className="text-xl font-medium text-sky-700 mb-4">
        Frontend Developer | Customer Success | Tech Enthusiast
    </p>

    {/* Contact & Social Links */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-700">
        {/* Mobile */}
        <p href="tel:+91XXXXXXXXXX" className="hover:text-teal-700 transition">
        📞 +91 9121966949 
        </p>

        {/* GitHub */}
        <a
        href="https://github.com/Manoj9121github"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-700 transition underline transition"
        >
        🐙 GitHub
        </a>

        {/* LinkedIn */}
        <a
        href="https://www.linkedin.com/in/manoj-gollamandala-b37853264/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-teal-700 transition underline transition"
        >
        💼 LinkedIn
        </a>
    </div>
    </header>


        {/* About / Summary */}
        <section className="max-w-5xl mx-auto mb-16 text-center bg-white/70 rounded-xl shadow p-8">
            <p className="text-gray-700 leading-relaxed text-lg">
            Passionate <strong>Frontend Developer</strong> with hands-on experience
            in building responsive, user-centric web applications using React.js,
            Next.js, and modern frontend technologies. Interested in leveraging
            my experience in <strong>customer success</strong> and <strong>tech
            support</strong> to create seamless user experiences and provide
            value-driven solutions. Enthusiastic about merging technology and
            client support for maximum impact.
            </p>
        </section>

        {/* Technical Skills */}
        <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
            Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
                // Frontend first
                "React.js",
                "Next.js",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Tailwind CSS",
                "Bootstrap",
                // Backend
                "Express.js",
                "PostgreSQL",
                "RESTful APIs",
                "Git & Agile/Scrum",
                "Fetch/Axios",
                // Support
                "Onboarding & SaaS Support",
                "Documentation",
                "Relationship Management",
                "Excel / Teams / Zoom",
            ].map((tech) => (
                <div
                key={tech}
                className="bg-gradient-to-br from-white to-sky-50 border border-emerald-100 rounded-xl p-4 text-center hover:shadow-lg transition"
                >
                {tech}
                </div>
            ))}
            </div>
        </section>

        {/* Projects */}
        <section className="max-w-5xl mx-auto mb-16">
    <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
        Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Tech / Frontend Projects */}
  <div className="bg-gradient-to-br from-white to-emerald-50 shadow rounded-xl p-6 hover:shadow-lg transition">
    <h3 className="text-xl font-bold text-teal-700">Supabase – E-Commerce Project</h3>
    <p className="text-gray-600 mt-2">
      Full-stack e-commerce web application powered by Supabase with authentication, product data, and order management.
    </p>
    <a
      href="https://supa-base-project-a7a4.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2 rounded-full transition"
    >
      View Project
    </a>
  </div>

  {/* Healthcare App */}
  <div className="bg-gradient-to-br from-white to-emerald-50 shadow rounded-xl p-6 hover:shadow-lg transition">
    <h3 className="text-xl font-bold text-teal-700">Healthcare App</h3>
    <p className="text-gray-600 mt-2">
      A modern healthcare management web application for patient records, appointments, and data.
      <br />
      <span className="font-semibold">Login Details:</span> <br />
      Username: b@gmail.com <br />
      Password: 123456789m
    </p>
    <a
      href="https://health-care-m-beige.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-full transition"
    >
      View Project
    </a>
  </div>

  {/* Support / Customer-oriented Project */}
  <div className="bg-gradient-to-br from-white to-sky-50 shadow rounded-xl p-6 hover:shadow-lg transition">
    <h3 className="text-xl font-bold text-teal-700">Sowjanya Enterprises</h3>
    <p className="text-gray-600 mt-2">
      Business website showcasing enterprise services and products, demonstrating a client-focused approach.
    </p>
    <a
      href="https://sowjanya-enterprises.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-full transition"
    >
      View Project
    </a>
  </div>
</div>

    </section>


        {/* Soft Skills */}
        <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
            Soft Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
            {[
                "Customer Centric Mindset",
                "Product Knowledge",
                "Data Analysis",
                "Time Management",
                "Adaptability",
                "Client Satisfaction",
                "Goal-Oriented",
                "Leadership & Team Management",
                "Continuous Learning",
            ].map((skill) => (
                <span
                key={skill}
                className="bg-gradient-to-r from-sky-100 to-emerald-100 text-emerald-900 shadow rounded-full px-4 py-2 text-sm hover:shadow-md transition"
                >
                {skill}
                </span>
            ))}
            </div>
        </section>

        {/* Work Experience */}
        <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center text-emerald-700">
            Work Experience
            </h2>

            <div className="space-y-6">
            {/* Frontend First */}
            <div className="bg-white shadow-md border-l-4 border-emerald-400 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-teal-700">
                Frontend Developer – HextaSphere Technologies
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                Visakhapatnam, India | Feb 2025 – July 2025
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Built responsive and mobile-friendly UIs using React.js, Next.js, and ShadCN.</li>
                <li>Developed reusable UI components and integrated REST APIs for dynamic content rendering.</li>
                <li>Collaborated with backend team (Express.js & PostgreSQL) for full-stack feature implementation.</li>
                <li>Participated in Agile sprints, standups, and code reviews.</li>
                <li>Integrated form validation and error handling to improve user experience and reliability.</li>
                </ul>
            </div>

            {/* Support / Customer Roles */}
            <div className="bg-white shadow-md border-l-4 border-sky-400 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-teal-700">
                SWO | AM – Central Bank of India
                </h3>
                <p className="text-gray-600 text-sm mb-3">Sep 2018 – Sep 2022</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Provided Commercial Banking services to customers, ensuring high satisfaction.</li>
                <li>Coordinated with cross-functional teams to improve processes, communication, and compliance.</li>
                <li>Maintained accurate reports, tracked performance, and supported data-driven decisions.</li>
                <li>Played a key role in optimizing workflows and automating repetitive processes.</li>
                </ul>
            </div>
            </div>
        </section>

        {/* Education */}
        <section className="max-w-5xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-semibold mb-6 text-emerald-700">Education</h2>
            <p className="text-gray-700">
            B.Tech – Mechanical Engineering | GMRIT (Sep 2016)
            </p>
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500 text-sm">
            © {new Date().getFullYear()} Manoj Gollamandala
        </footer>
        </div>
    );
    }
