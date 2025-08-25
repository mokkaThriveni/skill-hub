import { Link } from "react-router-dom";
import Carousel from "../components/ImageCarousel";

export default function Landing() {
  const images = [
    "/images/ai.png",
    "/images/graphicdesigning.png",
    "/images/javafullstack.png",
    "/images/javafullstack.png",
    "/images/webdesign.png",
    "/images/spokenenglish.png",
  ];

  const features = [
    {
      title: "Wide Range of Courses",
      desc: "Explore programs designed for beginners to professionals.",
      points: ["200+ courses available", "New topics added every month"],
    },
    {
      title: "Learn from Experts",
      desc: "Get guidance directly from experienced mentors.",
      points: ["Industry-focused curriculum", "Practical, real-world examples"],
    },
    {
      title: "Flexible Learning Paths",
      desc: "Study at your convenience with self-paced modules.",
      points: ["Accessible anytime, anywhere", "Works on all devices"],
    },
    {
      title: "Recognized Certifications",
      desc: "Earn certificates that showcase your expertise.",
      points: ["Boost your career opportunities", "Shareable on LinkedIn"],
    },
  ];

  return (
    <section className="container mx-auto py-12 px-4">
      
      <div className="w-full mb-12">
        <Carousel images={images} />
      </div>

      
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Learn. Grow. Transform Your Career.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          SkillHub helps you master trending skills in technology, design, and
          business. Gain hands-on experience through projects, expert sessions,
          and practical exercises tailored to your goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link
            to="/courses"
            className="px-6 py-3 rounded-xl bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
          >
            Explore Courses
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 rounded-xl border border-pink-600 text-pink-600 font-semibold hover:bg-pink-50 dark:hover:bg-pink-900 transition"
          >
            Join Now
          </Link>
        </div>
      </div>

      
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="card p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-xl">{f.title}</h3>
            <p className="mt-2 text-slate-500">{f.desc}</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {f.points.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-pink-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
