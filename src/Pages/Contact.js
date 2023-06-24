import Header from "../Components/Header";

import photoCV from "../images/photoCV2.PNG";

const Contact = () => {
  return (
    <div className="pagesContainerPetite">
      <Header />
      <div className="pageContactContainer">
        <div className="contactImgContainer">
          <img src={photoCV} alt="Léa Castanet" className="contactImg" />
        </div>
        <div className="contactDescriptionContainer">
          <p className="contactTitle">Contact Me</p>
          <p className="contactText">
            You can contact me at the places mentioned in my resume. I will try
            to get back to you as fast as I can.
          </p>
          <a
            href="https://drive.google.com/file/d/1RJdjoFXrfIMq0ZqrnemYj3OGyT_OVoio/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            See my resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
