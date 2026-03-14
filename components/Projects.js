export default function Projects() {

  const projects = [
    {
      title: "Fraud Detection System",
      tech: "Python, XGBoost, Streamlit",
      link: "https://github.com/mandal6359"
    },
    {
      title: "Car Price Prediction",
      tech: "Python, Scikit-Learn",
      link: "https://github.com/mandal6359"
    },
    {
      title: "T20 World Cup Dashboard",
      tech: "Power BI, Python",
      link: "https://github.com/mandal6359"
    }
  ];

  return (
    <section className="bg-black text-white py-20">

      <h2 className="text-center text-4xl text-cyan-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        {projects.map((p, i) => (
          <div key={i} className="border border-cyan-400 p-6 rounded-xl hover:scale-105 transition">

            <h3 className="text-xl font-bold">{p.title}</h3>

            <p className="text-gray-400 mt-2">{p.tech}</p>

            {/* BUTTON YOU ASKED ABOUT */}
            <a href={p.link} target="_blank">
              <button className="mt-4 bg-cyan-400 text-black px-4 py-2 rounded">
                View Project
              </button>
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}