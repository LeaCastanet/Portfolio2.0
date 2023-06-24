import Header from "../Components/Header";

import logoGithub from "../images/logoGithub.svg";
import logoLinkedin from "../images/linkedin-icon.svg";
import logoMail from "../images/mail.svg";
import invader from "../images/spaceInvaders.svg";

import logoHTML from "../images/logoTools/html-1.svg";
import logoCSS from "../images/logoTools/css-3.svg";
import logoJS from "../images/logoTools/javascript-1.svg";
import logoNodeJs from "../images/logoTools/nodejs-icon.svg";
import logoMongoDb from "../images/logoTools/mongodb-icon-1.svg";
import logoForestAdmin from "../images/logoTools/forest.svg";
import logoReact from "../images/logoTools/react-2.svg";
import logoExpo from "../images/logoTools/expo-go-app.svg";
import logoNetlify from "../images/logoTools/netlify.svg";
import logoNorthFlank from "../images/logoTools/northFlank.png";

import imgRetroWave1 from "../images/imgRetroWaveRetouché3.png";
import imgRetroWave2 from "../images/imgRetroWaveRetouché2.png";

import Fade from "react-reveal/Fade";
import { useState, createRef, useEffect } from "react";

const headerRef = createRef();

const Home = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const headerHeight = headerRef.current.clientHeight;
    const range = 200;
    const offset = headerHeight / 1.5;

    const didScrollPage = (e) => {
      let calc = 1 + (window.scrollY - offset + range) / range;

      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }

      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  return (
    <div className="homeContainer">
      <Header />
      <div className="presentationHomeContainer">
        <div className="leftPresentationContainer">
          <div className="presentationText">
            <p className="presentationTitle">HEY THERE !</p>
            <p>I'm Lea, Fullstack developer</p>
            <p>Welcome to my portfolio</p>
          </div>
          <div className="imgLinkContainer">
            <a
              href="https://github.com/LeaCastanet"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoGithub} alt="gitHub" className="imgLink" />
            </a>
            <a
              href="https://www.linkedin.com/in/l%C3%A9a-castanet-458945253/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logoLinkedin} alt="Linkedin" className="imgLink" />
            </a>
            <a href="mailto:lea.castanet@hotmail.com">
              <img src={logoMail} alt="mail" className="imgLink" />
            </a>
          </div>
        </div>
        <div className="rightPresentationContainer">
          <img src={invader} alt="invader" className="invader" />
        </div>
      </div>
      <div className="homeDown" ref={headerRef} style={{ opacity: opacity }}>
        <div className="mySkills">
          <p>My skills</p>
        </div>
        <div className="fullStackContainer">
          <Fade left>
            <div className="FSimgContainer">
              <img
                src={imgRetroWave2}
                alt="RetroWave computer"
                className="FSimg"
              />
            </div>
          </Fade>
          <Fade right cascade>
            <div className="FSdescriptionContainer">
              <p className="titleSkills">Full Stack Development</p>
              <div className="logoSkillsContainer">
                <img src={logoJS} alt="JS" className="logoTools" />
                <img src={logoHTML} alt="HTML" className="logoTools" />
                <img src={logoCSS} alt="CSS" className="logoTools" />
                <img src={logoNodeJs} alt="NodeJs" className="logoTools" />
                <img src={logoMongoDb} alt="MongoDb" className="logoTools" />
                <img
                  src={logoForestAdmin}
                  alt="forestAdmin"
                  className="logoTools"
                />
                <img src={logoReact} alt="React" className="logoTools" />
                <img src={logoExpo} alt="Expo" className="logoTools" />
              </div>
              <p className="textSkills">
                Develop websites and apps from backend (Node.js, Express, Forest
                Admin and MongoDB) to frontEnd (React, React Native, CSS, HTML).
              </p>
              <p className="textSkills">
                Build responsive websites from computer screen to phone screen
                using React.
              </p>
              <p className="textSkills">
                Work in team, with daily tasks, to build MVP
              </p>
              <p className="textSkillsLast">
                Use diferents tools as PostMan, Expo, Android Studio, Simulator.
              </p>
            </div>
          </Fade>
        </div>
        <div className="cloudContainer">
          <Fade right>
            <div className="cloudImgContainer">
              <img
                src={imgRetroWave1}
                alt="RetroWave data center"
                className="cloudImg"
              />
            </div>
          </Fade>
          <Fade left cascade>
            <div className="cloudDescriptionContainer">
              <p className="titleSkills">Cloud Infra-Architecture</p>
              <div className="logoSkillsContainer">
                <img
                  src={logoNorthFlank}
                  alt="NorthFlank"
                  className="logoTools"
                />
                <img src={logoNetlify} alt="Netlify" className="logoTools" />
                <img src={logoMongoDb} alt="MongoDb" className="logoTools" />
              </div>
              <p className="textSkills">Host backend with Northflank.</p>
              <p className="textSkills">Host frontend with Netlify</p>
              <p className="textSkillsLast">Host data base with MongoDB</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
