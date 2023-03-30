import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/components/about.scss';



const About = () => {
  return (
    <>
      <Header />
      <div className="banner d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(./images/baniere-3.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      <div className="about">
        <div className="emmanuel">
          <img src="./images/emmanuel.jpg" alt="Logo" />
        </div>
        <div className="text-about">
          <p><b>Salut je me présente Emmanuel,</b></p>
          <p><b>Je suis présentement étudiant à la formation AEC en développement web qui se termine au printemps 2023.
            J'ai décidé de me lancer dans ce domaine après un parcours, atypique. Mais depuis l'âge de 16 ans ans,
            j'ai tojjours eu un intérêt pour tout ce qui touche à l'informatique. J'ai aussi suivi une formation en
            tant qu'opérateur informatique en 2007.</b></p>
          <br></br>
          <p><b>Plusieurs personnes me connaissent comme étant un grand fan de science-fiction et surtout de la saga Star Wars,
            mais ce n'est pas seulement pour cette raison que j'ai planché sur Futura Film.
            En fait, j'ai toujours été convaincu qu'il y a encore un future pour le cinéma, même avec l'arrivée des Netflix,
            Disney Plus et compagnie. Je crois plutôt qu'il va seulement évoluer pour devenir de plus en plus comme un
            spectacle à part entière, mais aussi une expérience sensorielle et unique à vivre.
            C'est aussi pour cette raison que ce site a un visuel futuriste. Non pas juste pour faire la promotion des films
            de sciences-fiction, mais plutôt de démontrer que le cinéma sera toujours existant dans un future plus ou moins
            proche, mais avec de nouvelles technologies et de nouveaux concepts afin que les spectateurs puissent toujours
            en bénéficier.</b></p>
          <br></br>
        </div>

        <div className="cinoche">
          <img src="./images/film1.jpg" alt="film1" />
          <img src="./images/film2.jpg" alt="film2" />
          <img src="./images/film3.jpg" alt="film3" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;