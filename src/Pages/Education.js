import Header from "../Components/Header";

import logoReacteur from "../images/LeReacteur.png";
import star from "../images/star.svg";
import Sagemcom from "../images/Sagemcom.png";

import Fade from "react-reveal/Fade";

const Education = () => {
  return (
    <div className="pagesContainer">
      <Header />
      <div className="educationTopContainer">
        <p className="educationTopTitle">School Background</p>
        <p className="educationTopText">
          After 6 years of study to complete a master’s degree in physical
          education (5 years licence + master, and a year spent abroad in
          Québec), and one year working as a PE teacher in Parisian schools, I
          decided to pursue my passion for technology and undertake a
          professional retraining in the digital field to become a Web
          Developer. I completed an intense bootcamp with Le Reacteur, created
          my first MVP in a team, built on my knowledge with continuous
          self-learning. Those experiences allow me today to seek a position as
          Fullstack Developer.
        </p>
        <p className="educationIntershipText">
          I’m currently doing an internship at Sagemcom for 6 month (March the
          first to September the first) and I’m looking for my first permanent
          fullstack developer job.
        </p>
      </div>

      <div className="educationBottomContainer">
        <p className="educationBottomTitle">Web Devoloper Training</p>
        <div className="educationContainer">
          <Fade left>
            <div className="educationImgContainer">
              <a
                href="https://www.lereacteur.io/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logoReacteur}
                  alt="Le Reacteur"
                  className="educationImg"
                />
              </a>
            </div>
          </Fade>
          <Fade right>
            <div className="trainingContainer">
              <div className="trainingTopContainer">
                <div className="trainingTitleContainer">
                  <p className="trainingTitle">LE REACTEUR</p>
                  <p className="trainingSubTitle">
                    Intense Web and Mobile Developer Bootcamp
                  </p>
                </div>
                <div className="trainingDateContainer">
                  <p className="trainingSubTitle">Oct 2022 – Dec 2022</p>
                </div>
              </div>
              <div className="trainingBottomContainer">
                <div className="trainingTextContainer">
                  <img src={star} alt="invader" className="puce" />
                  <p className="trainingText">
                    I've learn how to use HTML/CSS, JavaScript, React, React
                    Native, Node.Js, MongoDB.
                  </p>
                </div>
                <div className="trainingTextContainer">
                  <img src={star} alt="invader" className="puce" />
                  <p className="trainingText">
                    I've learn how to create API servers (Express, CRUD) and
                    host them with Northflank
                  </p>
                </div>
                <div className="trainingTextContainer">
                  <img src={star} alt="invader" className="puce" />
                  <p className="trainingText">
                    I've code every single day by completing various exercices
                    for backend, frontEnd, mobile app development, ...
                  </p>
                </div>
                <div className="trainingTextContainer">
                  <img src={star} alt="invader" className="puce" />
                  <p className="trainingTextLast">
                    I've the chance to creat in team my first MVP, MOTTO, from
                    backend to frontEnd.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="educationBottomContainerIntership">
        <p className="educationBottomTitle">Internship</p>
        <div className="educationContainerIntership">
          <Fade left>
            <div className="trainingContainer">
              <div className="trainingTopContainer">
                <div className="trainingTitleContainer">
                  <p className="trainingTitle">Sagemcom</p>
                  <p className="trainingSubTitle">
                    Developer front-end (UX/UI)
                  </p>
                </div>
                <div className="trainingDateContainer">
                  <p className="trainingSubTitle">Mars 2023 – Sept 2023</p>
                </div>
              </div>
              <div className="trainingBottomContainer">
                <div className="trainingTextContainer">
                  <img src={star} alt="invader" className="puce" />
                  <p className="trainingText">
                    Rethink and re-design the CMS’s (Cloud Monitoring System)
                    interface.
                  </p>
                </div>
                <div className="trainingTextContainer">
                  <img src={star} alt="invader" className="puce" />
                  <p className="trainingText">
                    Create a Figma blueprint of the new interface.
                  </p>
                </div>
                <div className="trainingTextContainer">
                  <img src={star} alt="invader" className="puce" />
                  <p className="trainingText">
                    Re-model and modernise graphs with Apache ECharts to improve
                    readability.
                  </p>
                </div>
                <div className="trainingTextContainer">
                  <img src={star} alt="invader" className="puce" />
                  <p className="trainingTextLast">
                    Created a proof of concept for a mobile app CMS interface
                    using React Native.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="educationImgContainer">
              <a
                href="https://www.sagemcom.com/fr"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Sagemcom} alt="Sagemcom" className="Sagemcom" />
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Education;
