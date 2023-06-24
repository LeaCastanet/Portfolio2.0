import Header from "../Components/Header";

import Marvel from "../images/imgProjects.js/MarvelAPI.png";
import Vinted from "../images/imgProjects.js/VintedReplica.png";
import Airbnb from "../images/imgProjects.js/AirbnbReplica.png";
import Motto from "../images/imgProjects.js/MVP-min.png";
import Snake from "../images/imgProjects.js/SnakeGame.png";
import SpaceInvaders from "../images/imgProjects.js/Space-Invaders.png";

import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="pagesContainer">
      <Header />
      <div className="projectPageContainer">
        <div className="projectTopContainer">
          <p className="projectTopTitle">Projects</p>
          <p className="projectTopText">
            Below, you can find projects completed during Le Reacteur bootcamp
            but also projects that I realise for myself.
          </p>
        </div>

        <div className="projectsContainer">
          <div className="projectContainer">
            <Fade left>
              <div className="projectImgContainer">
                <img
                  src={Marvel}
                  alt="Bannière Marvel"
                  className="projectImg"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="projectDescriptionContainer">
                <p className="projectTitle">Marvel API</p>
                <p className="projectText">
                  Fullstack responsive project using Marvel API (favorites,
                  cookies)
                </p>
                <a
                  href="https://lea-castanet-marvel.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  See it in live
                </a>
                <a
                  href="https://github.com/LeaCastanet/Marvel-FrontEnd.git"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  Repo front
                </a>
                <a
                  href="https://github.com/LeaCastanet/Marvel-BackEnd.git"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLinkLast"
                >
                  Repo back
                </a>
              </div>
            </Fade>
          </div>

          <div className="projectContainerInvers">
            <Fade right>
              <div className="projectImgContainer">
                <img
                  src={Vinted}
                  alt="Bannière Vinted"
                  className="projectImg"
                />
              </div>
            </Fade>
            <Fade left>
              <div className="projectDescriptionContainer">
                <p className="projectTitle">Vinted Replica</p>
                <p className="projectText">
                  This project is a vinted replica. You can creat an account,
                  logIn and logOut, publish an ad and see all of the items
                  available. And you can pay with Stripe.
                </p>
                <a
                  href="https://lea-castanet-replique-vinted.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  See it in live
                </a>
                <a
                  href="https://github.com/LeaCastanet/vinted-frontEnd.git"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  Repo front
                </a>
                <a
                  href="https://github.com/LeaCastanet/my-vinted.git"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLinkLast"
                >
                  Repo back
                </a>
              </div>
            </Fade>
          </div>

          <div className="projectContainer">
            <Fade left>
              <div className="projectImgContainer">
                <img
                  src={Airbnb}
                  alt="Bannière Airbnb"
                  className="projectImg"
                />
              </div>
            </Fade>
            <Fade right>
              <div className="projectDescriptionContainer">
                <p className="projectTitle">Airbnb Replica</p>
                <p className="projectText">
                  This project is my first React Native app. It's an Airbnb
                  replica. You can creat an account, logIn and logOut. You can
                  modify your profil. And you can see apartments/houses around
                  you thanks to the localisation service.
                </p>
                <a
                  href="https://github.com/LeaCastanet/airbnb.git"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLinkLast"
                >
                  Repo front
                </a>
              </div>
            </Fade>
          </div>

          <div className="projectContainerInvers">
            <Fade right>
              <div className="projectImgContainerMotto">
                <img src={Motto} alt="Logo Motto" className="projectImgMotto" />
              </div>
            </Fade>
            <Fade left>
              <div className="projectDescriptionContainer">
                <p className="projectTitle">MOTTO MVP</p>
                <p className="projectText">
                  Fullstack Mobile Application (IOS & ANDROID) for MVP using
                  React Native, Node.Js, CRUD, Forest Admin, MongoDb and Stripe.
                </p>
                <p className="projectText">
                  Motto is a vintage clothing sales application aiming at
                  creating a fashion dictionary. The motto community is going to
                  create the dictionary incrementally with their own ads for
                  items of vintage clothing. With this application you can sell
                  and buy clothing but you can also just post one of your most
                  wonderful item to share it with the community and help build
                  the dictionary. All of the items posted must be from before
                  2000 and are checked by the motto team before they appear on
                  the application.
                </p>
                <p className="projectText">
                  Frontend : signIn, signUp, see all the ads available, create,
                  modify and delete an ad, buy an item, wallet, purchase
                  history, modify your profile, fashion dictionary.
                </p>
                <p className="projectText">
                  Backend : CRUD, Authentification, backoffice with forestAdmin
                  (content administration), payment with stripe.
                </p>
                <p className="projectText">Repo : Private</p>
              </div>
            </Fade>
          </div>

          <div className="projectContainer">
            <Fade left>
              <div className="projectImgContainer">
                <img src={Snake} alt="Bannière Snake" className="projectImg" />
              </div>
            </Fade>
            <Fade right>
              <div className="projectDescriptionContainer">
                <p className="projectTitle">Snake Game</p>
                <p className="projectText">
                  Snake game only for computer. You can use the arrow keys to
                  move or WASD (QWERTY) / ZQSD (AZERTY).
                </p>
                <a
                  href="https://snake-game-lc.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  See it in live
                </a>
                <a
                  href="https://github.com/LeaCastanet/snake-game.git"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLinkLast"
                >
                  Repo front
                </a>
              </div>
            </Fade>
          </div>

          <div className="projectContainerLast">
            <Fade right>
              <div className="projectImgContainer">
                <img
                  src={SpaceInvaders}
                  alt="Bannière Space Invader"
                  className="projectImg"
                />
              </div>
            </Fade>
            <Fade left>
              <div className="projectDescriptionContainer">
                <p className="projectTitle">Space Invaders</p>
                <p className="projectText">
                  Space Invader game only for computer. You can use the arrow
                  keys to move or AD (QWERTY) / QD (AZERTY) and the spacebar to
                  shoot.
                </p>
                <a
                  href="https://space-invaders-lc.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLink"
                >
                  See it in live
                </a>
                <a
                  href="https://github.com/LeaCastanet/Space-Invaders.git"
                  target="_blank"
                  rel="noreferrer"
                  className="projectLinkLast"
                >
                  Repo front
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <div className="buttonGitHubContainer">
          <button className="buttonGitHub">
            <a
              href="https://github.com/LeaCastanet"
              target="_blank"
              rel="noreferrer"
              className="aButtonGitHub"
            >
              More projects (Github)
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
