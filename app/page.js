import { contactUs } from "../data/contactUs";
import CourseLecture from "./_components/CourseLecture";
import { footer } from "../data/footer";
import { header } from "../data/header";
import { lectures } from "../data/lectures";
import { navBar } from "../data/navBar";
import { overviewData } from "../data/overviewData";
import Section from "./_components/Sectoin";
import { team } from "../data/team";
import Title from "./_components/Title";
import User from "./_components/Users/User";
import { whatInclude } from "../data/whatInclude";

export default function Home() {
  return (
    <div className="">
      {/* Header */}
      <header className="relative h-[50vh] overflow-hidden bg-black/50">
        <div>
          <img
            className="min-w-full min-h-full opacity-30 absolute top-0 left-0 -z-10"
            src={header.background}
            alt="hero background"
          />
        </div>
        <section className="flex flex-col justify-between h-full text-center py-10 text-sm md:text-lg font-semibold relative z-10">
          <p dangerouslySetInnerHTML={{ __html: header.quote }} />
          <p className="text-4xl md:text-5xl font-bold mt-4">
            <span className="text-red-light">{"{"}</span>{" "}
            <span dangerouslySetInnerHTML={{ __html: header.website }} />{" "}
            <span className="text-red-light">{"}"}</span>
          </p>
          <div className="text-lg md:text-3xl mt-4">
            <p
              dangerouslySetInnerHTML={{
                __html: header.institute,
              }}
            />
            <p dangerouslySetInnerHTML={{ __html: header.course }} />
          </div>
          <ul className="flex justify-center gap-1 m-6 bg-opacity-40 rounded-lg w-fit mx-auto">
            {whatInclude.map((item, index) => (
              <li key={index} className="text-center p-4">
                <p className="text-gray-400">{item.text}</p>
                <p className="text-gray-light font-bold">{item.value}</p>
              </li>
            ))}
          </ul>
        </section>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-dark-dark bg-opacity-50 backdrop-blur-md py-4 flex justify-center gap-3 md:gap-6 text-md font-semibold z-50 shadow-2xl max-w-[100vw]">
        {navBar.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`hover:text-red-light first:text-red-light transition-all`}
          >
            {item.text}
          </a>
        ))}
      </nav>

      {/* Overview Section */}
      <Section bg="bg-gradient-red-bottom-left" id={"Overview"}>
        <Title title="Overview" />
        <div className="p-4 md:p-8 bg-gray-dark bg-opacity-10 backdrop-blur-lg rounded-lg max-w-3xl mx-auto">
          <h1 className="text-center text-2xl font-extrabold mb-6">
            {overviewData.course}
          </h1>
          {overviewData.paragraphs.map((p) => (
            <p key={p} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <ul className="list-disc m-8 md:grid md:grid-cols-2 gap-4">
            {overviewData.points.map((p) => (
              <li key={p} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </ul>
        </div>
      </Section>

      {/* Course Content Section */}
      <Section bg="bg-gradient-red-top-left" id={"Content"}>
        <Title title={"Course Content"} />
        <div className="max-w-2xl mx-auto space-y-4 px-1">
          {lectures.map((l, index) => (
            <CourseLecture key={index} num={index + 1} {...l} />
          ))}
        </div>
      </Section>

      <Section bg="bg-gradient-blue-bottom-right" id={"Team"}>
        <Title title={"Educational Team"} />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mx-auto w-fit">
          {team.map((person) => (
            <User key={person.name} {...person} />
          ))}
        </div>
      </Section>
      <Section bg="bg-gradient-blue-top-right" id={"contact"}>
        <Title title="Contact Us" />
        <div className="p-4 md:p-8 bg-gray-dark bg-opacity-10 backdrop-blur-lg  rounded-lg max-w-3xl mx-auto">
          {contactUs.paragraphs.map((p) => (
            <p
              className="text-justify"
              key={p}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
          <img
            className="invert opacity-100 w-20 mx-auto mt-8"
            src="./fum-logo.png"
          />
        </div>
      </Section>
      {/* Footer */}
      <footer className="text-center p-6 mt-8">
        <p dangerouslySetInnerHTML={{ __html: footer.text }} />
      </footer>
    </div>
  );
}
