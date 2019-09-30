import "devicon";
import React, { Fragment } from "react";
import BadgeList from "./BadgeList";
import BlockList from "./BlockList";
import Education from "./Education";
import Project from "./Project";
import WorkExperience from "./WorkExperience";

const Profile = () => (
  <main>
    <div className="jumbo">
      <section className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col">
            <div className="row align-items-center ">
              <div className="col">
                <img
                  className="avatar circle lg"
                  src="assets/avatar.jpg"
                  alt="Avatar"
                />
              </div>
              <div className="col">
                <h1 className="my-1">Markus Hauge</h1>
                <h3 className="my-1 font-weight-normal">Full stack utvikler</h3>
                <a className="text-faded" href="https://github.com/fshauge">
                  <h4 className="my-1 font-weight-normal">
                    <i className="devicon-github-plain" /> fshauge
                  </h4>
                </a>
              </div>
            </div>
          </div>
          <div className="col text-align-end hide">
            <p className="my-1">Høyboveien 12A</p>
            <p className="my-1">markus.hauge@hotmail.com</p>
            <p className="my-1">98881120</p>
          </div>
        </div>
      </section>
    </div>
    <section className="container">
      <BlockList
        title="Arbeidserfaring"
        items={[
          <WorkExperience
            // image="https://www.poption.com/favicon.ico"
            company="Poption"
            position="Full stack utvikler - deltid"
            description={
              <Fragment>
                Fortsetter utvikling av sommerprosjektet samt nye deler i
                systemet. Jobber nå tettere sammen med hele Poption-teamet.
              </Fragment>
            }
            badges={
              <div className="mt-2">
                <span className="badge pill">
                  <i
                    className="devicon-typescript-plain colored"
                    title="TypeScript"
                  />
                  <span className="font-weight-normal">TypeScript</span>
                </span>{" "}
                <span className="badge pill">
                  <i className="devicon-react-original colored" title="React" />
                  <span className="font-weight-normal">React</span>
                </span>{" "}
                <span className="badge pill">
                  <i className="devicon-rails-plain colored" title="Rails" />
                  <span className="font-weight-normal">Rails</span>
                </span>{" "}
                <span className="badge pill">
                  <span className="font-weight-normal">GraphQL</span>
                </span>
              </div>
            }
            duration={{ start: "Aug 2019", end: "nå" }}
          />,
          <WorkExperience
            // image="https://www.poption.com/favicon.ico"
            company="Poption"
            position="Full stack utvikler - intern"
            description={
              <Fragment>
                Utviklet et dashboard i Poption for kunder. Jeg var med i hele
                designprosessen: intervju, design, prototyping og utvikling.
                Introduserte React og GraphQL i tech-stacken. Jobbet i team med
                en annen student.
              </Fragment>
            }
            badges={
              <div className="mt-2">
                <span className="badge pill">
                  <i
                    className="devicon-typescript-plain colored"
                    title="TypeScript"
                  />
                  <span className="font-weight-normal">TypeScript</span>
                </span>{" "}
                <span className="badge pill">
                  <i className="devicon-react-original colored" title="React" />
                  <span className="font-weight-normal">React</span>
                </span>{" "}
                <span className="badge pill">
                  <i className="devicon-rails-plain colored" title="Rails" />
                  <span className="font-weight-normal">Rails</span>
                </span>{" "}
                <span className="badge pill">
                  <span className="font-weight-normal">GraphQL</span>
                </span>
              </div>
            }
            duration={{ start: "Jul 2019", end: "Aug 2019" }}
          />,
          <WorkExperience
            company="Quick Systems AS"
            position="App-utvikler"
            description={
              <Fragment>
                Utviklet en mobilapp som et supplement til Quick3 sin webløsning
                for timestempling og oppgavestyring. Brukte React Native og
                Redux for å utvikle appen. Jobbet i team med to andre studenter.
              </Fragment>
            }
            badges={
              <div className="mt-2">
                <span className="badge pill">
                  <i
                    className="devicon-javascript-plain colored"
                    title="JavaScript"
                  />
                  <span className="font-weight-normal">JavaScript</span>
                </span>{" "}
                <span className="badge pill">
                  <i className="devicon-react-original colored" title="React" />
                  <span className="font-weight-normal">React Native</span>
                </span>
              </div>
            }
            duration={{ start: "Jul 2018", end: "Aug 2018" }}
          />
        ]}
      />
    </section>
    <section className="container">
      <BlockList
        title="Utdanning"
        items={[
          <Education
            school="Universitetet i Oslo"
            studyProgram="Bachelor i Informatikk: programmering og systemarkitektur"
            duration={{ start: "Aug 2017", end: "Jun 2020" }}
          />
        ]}
      />
    </section>
    <section className="container">
      <BlockList
        title="Prosjekter"
        items={[
          <Project
            name="Holder"
            summary="Desktop app i React og Electron - forenkler bruken av mobilappen Hold"
            url="https://github.com/fshauge/holder"
            badges={
              <div className="mt-2">
                <span className="badge pill">
                  <i
                    className="devicon-javascript-plain colored"
                    title="JavaScript"
                  />
                  <span className="font-weight-normal">JavaScript</span>
                </span>{" "}
                <span className="badge pill">
                  <i className="devicon-react-original colored" title="React" />
                  <span className="font-weight-normal">React</span>
                </span>
              </div>
            }
            duration={{ start: "2018", end: "nå" }}
          />,
          <Project
            name="Rose"
            summary="Deklarativt UI bibliotek for Kotlin - inspirert av React og SwiftUI"
            url="https://github.com/fshauge/rose"
            badges={
              <div className="mt-2">
                <span className="badge pill">
                  <span className="font-weight-normal">Kotlin</span>
                </span>
              </div>
            }
            duration={{ start: "2019", end: "nå" }}
          />,
          <Project
            name="Shopping list"
            summary="Enkel handleliste for å eksperimentere med og lære om SwiftUI"
            url="https://github.com/fshauge/swiftui-shopping-list"
            badges={
              <div className="mt-2">
                <span className="badge pill">
                  <i className="devicon-swift-plain colored" title="Swift" />
                  <span className="font-weight-normal">Swift</span>
                </span>
              </div>
            }
            duration={{ start: "2019" }}
          />
        ]}
      />
    </section>
    <section className="container">
      <BlockList
        title="Ferdigheter"
        items={[
          <div className="card">
            <BadgeList
              title="Rammeverk"
              items={[
                { icon: "devicon-react-original colored", name: "React" },
                { icon: "devicon-express-original", name: "Express" },
                { icon: "devicon-rails-plain colored", name: "Rails" },
                { name: "GraphQL" }
              ]}
            />
          </div>,
          <div className="card">
            <BadgeList
              title="Programmeringsspråk"
              items={[
                {
                  icon: "devicon-javascript-plain colored",
                  name: "JavaScript"
                },
                {
                  icon: "devicon-typescript-plain colored",
                  name: "TypeScript"
                },
                { icon: "devicon-html5-plain colored", name: "HTML" },
                { icon: "devicon-css3-plain colored", name: "CSS" },
                { icon: "devicon-java-plain", name: "Java" },
                { icon: "devicon-python-plain colored", name: "Python" },
                { icon: "devicon-ruby-plain colored", name: "Ruby" },
                { icon: "devicon-csharp-plain", name: "C#" },
                { name: "Kotlin" }
              ]}
            />
          </div>,
          <div className="card">
            <BadgeList
              title="Verktøy"
              items={[
                { icon: "devicon-github-plain", name: "GitHub" },
                { icon: "devicon-git-plain colored", name: "Git" },
                { icon: "devicon-heroku-plain colored", name: "Heroku" },
                { icon: "devicon-webpack-plain colored", name: "Webpack" },
                { icon: "devicon-babel-plain colored", name: "Babel" }
              ]}
            />
          </div>
        ]}
      />
    </section>
  </main>
);

export default Profile;
