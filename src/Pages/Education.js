import Header from "../Components/Header";

import logoReacteur from "../images/LeReacteur.png";
import invader from "../images/spaceInvaders2.svg";

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
                  <img src={invader} alt="invader" className="puce" />
                  <p className="trainingText">
                    I've learn how to use HTML/CSS, JavaScript, React, React
                    Native, Node.Js, MongoDB.
                  </p>
                </div>
                <div className="trainingTextContainer">
                  <img src={invader} alt="invader" className="puce" />
                  <p className="trainingText">
                    I've learn how to create API servers (Express, CRUD) and
                    host them with Northflank
                  </p>
                </div>
                <div className="trainingTextContainer">
                  <img src={invader} alt="invader" className="puce" />
                  <p className="trainingText">
                    I've code every single day by completing various exercices
                    for backend, frontEnd, mobile app development, ...
                  </p>
                </div>
                <div className="trainingTextContainer">
                  <img src={invader} alt="invader" className="puce" />
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
    </div>
  );
};

export default Education;
