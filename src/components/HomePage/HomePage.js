import React, { Component } from "react";
import './HomePage.css';
import Particles from 'react-particles-js';
import Parameters from '../../configs/particles-parameters'
import Reasons from './Reasons/Reasons'
import Divider from './Divider/Divider'
import Coaching from "./Coaching/Coaching"
import Contact from './Contact/Contact'
import ContactFixed from './ContactFixed/ContactFixed'
import scrollToComponent from 'react-scroll-to-component';
import { Route, Link } from "react-router-dom";

export default class HomePage extends Component {

  state = {
    height: 0,
    prestationToggled: false,
    modalToggled: false,
    prestationName: '',
    modalContent: null,
    arrowDisplayed: false
  }

  updateDimensions = () => {
    if(document.getElementsByClassName('box-item')[0].offsetWidth){
      let height = document.getElementsByClassName('box-item')[0].offsetWidth
      this.setState({ height })
    }
  }

  componentDidMount() {
    let height = document.getElementsByClassName('box-item')[0].offsetWidth
    this.setState({ height })
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener('scroll', this.getAmountOfScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.hideBar);
    window.removeEventListener('resize', this.getAmountOfScroll);
  }

  togglePrestations = () => {
    let prestationToggled = this.state.prestationToggled
    this.setState({
      prestationToggled : !prestationToggled
    })
  }

  displayPrestationModal = (title) => {

    let modalContent = null

    switch (title) {
      case 'Zones Ciblées':
        modalContent =
        <div>
          <p>Qui n'a jamais rêver d’une zone précise qui serais parfaite? </p>
          <p>Chaque personne est différentes et chaque objectif est personnel. Que vous souhaitiez perdre de la taille, galber les fessiers, dessinez vos cuisses ou autre...</p>
          <p>qu'importe votre objectifs nos coachs s'adapte à toutes vos demandes afin de les satisfaire, tout en conservant le bon maintien général et la bonne harmonie de votre corps pour vous offrir un résultat optimum! </p>
          <u>Au programme: </u>
          <ul>
            <li>Renforcement musculaire </li>
            <li>Tonicité</li>
            <li>Galbes élégants pour un corps plus harmonieux</li>
          </ul>
          <u>Déroulement de la séance</u>
          <p>Votre rendez-vous avec un coach sportifs diplômé, que vous soyez seul ou en groupe il s'adapte à la morphologie de chacun ainsi qu'à votre (vos) niveau de pratique. Renforcement des muscles de la zone ciblé et renforcement des chaînes posturale (dans le but de prévenir tout déséquilibre ou blessures potentielle). </p>
          <p>Durant les séances les coachs utilisent différents équipements en fonction du lieu et des possibilités. Ils disposent de leurs propres matériels pour vous accompagner: TRX, élastique, ballon, sac de sable, ... </p>
        </div>
        break;
      case 'Ventre Plat':
        modalContent =
          <div>
            <p>Ce cours est destiner au personne qui souhaite remodeler leur silhouette et obtenir un ventre plat. Éliminer la masse grasse indésirable stocker sur la sangle abdominale dont vous n'arrivez pas a vous libérer! </p>
            <u>L'objectifs de ce cours:</u>
            <ul>
              <li>Tonifier la sangle abdominale</li>
              <li>Brûler les graisses indésirables</li>
              <li>Se re-dessiner et obtenir un ventre plat</li>
            </ul>
            <u>Déroulement de la séance</u>
            <p>Suivi par des coach sportifs diplômer, qui prendrons en compte votre niveau, vos difficultés, problème de santé éventuels, laisser vous guider pour atteindre vos objectifs dans les meilleurs conditions.</p>
            <p>Nos coachs utilise différents équipement au cours des séance de coaching tel que des élastiques, des ballon, et tout autre équipement juger nécessaire a votre bonne pratique. Durant vos séance ils vous prodiguerons également des conseil nutritionnels adapté pour maximiser vos résultats. </p>
          </div>
          break;
        case 'Cours Collectifs':
          modalContent =
            <div>
              <p>Votre souhait est de vous renforcer et d'être en groupe? Ce cours est le vôtre ! ! ! </p>
              <p>Les cours collectifs vous proposent de nombreuses disciplines en cours traditionnel: abdos fessiers, Body Pump™, Body Sculpt, CX WorX™... ou freestyle : zumba, pilate, djembel,.... et chacune vise à renforcer la ou les partie(s) du corps ciblée(s), améliorer l'endurance musculaire et le systeme cardio vasculaire.</p>
              <u>L'objectifs de ce cours:</u>
              <ul>
                <li>Améliorer la condition physique </li>
                <li>Augmenter la force musculaire</li>
                <li>Etre en meilleure santé</li>
                <li>Dessiner sa silhouette pour obtenir un physique plus harmonieux </li>
                <li>Réduire les problème lié a la posture </li>
                <li>Améliorer les capacité cardio-vasculaire et respiratoire</li>
              </ul>
              <u>Déroulement de la séance</u>
              <p>Suivi par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé et tout autres donnée nécessaire au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Les coachs prépare les séances en amont pour vous optimiser votre pratique. </p>
            </div>
            break;
          case 'TRX':
            modalContent =
              <div>
                <p>Les entrainement en suspension TRX on tout d'abord été développer par l'armée Americaine NAVY SEALS pour permettre au soldat de faire du fonctionnal training sur les terrain de mission.</p>
                <p>Le TRX Suspension Trainer est l’unique équipement d’entraînement qui utilise la gravité et le poids du corps pour effectuer des centaines d’exercices. Vous gardez le contrôle sur la difficulté du challenge pour chaque exercice, car vous pouvez tout simplement ajuster la position de votre corps pour augmenter ou réduire la résistance.</p>
                <u>L'objectifs de ce cours:</u>
                <ul>
                  <li>Offre un entrainement rapide qui sollicite tout le corps</li>
                  <li>Aide à bâtir une puissante ceinture abdominale</li>
                  <li>Augmente l’endurance musculaire</li>
                  <li>Développe la mobilité, l'agilité et la souplesse</li>
                  <li>Développe la force</li>
                  <li>Convient à tous, quel que soit le niveau de fitness (des athlètes professionnels aux personnes âgées)</li>
                  <li>Peut être installé n’importe où (club de gym, maison, hôtel ou en extérieur)</li>
                </ul>
                <u>Déroulement de la séance</u>
                <p>Suivi par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé et tout autres donnée nécessaire au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Les coachs se déplace avec leurs propres matériels, il ne vous reste qu'a vous laisser guidé et donner le meilleur de vous même. </p>
              </div>
              break;
            case 'Zumba':
              modalContent =
                <div>
                  <p>En recherche d'un cours Dancé ? Vous êtes au bon endroit ! </p>
                  <p>Sur une playlist latino-pop, vous enchaînez des mouvements issus de la danse moderne, des danses latines et du fitness : tonique et fun ! </p>
                  <p>Ce cours de fitness s'adress à tous et permet une dépense énergétique assurée tout en passant un excellent moment ! Il intégres différent style de dance et rythme permettant des pics de cardio intense et mettant a contribution tous les muscles.</p>
                  <u>L'objectifs de ce cours:</u>
                  <ul>
                    <li>Tonification de l'ensemble du corps</li>
                    <li>Amélioration du souffle et du système cardiaque</li>
                    <li>Perte de poids</li>
                    <li>Amélioration de la coordination, de la souplesse, et de la mémoire</li>
                    <li>Pour se défouler</li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Chaque chorégraphie est décomposée par votre professeur pour que, quel que soit votre niveau, vous puissiez suivre et vous amuser. L ambiance est explosive, festive et conviviale, si bien que même les plus farouches finissent par se lancer ! Vous serrez encadré par des professionnel qualifié et diplôme qui mettrons tout en oeuvre afin que vous passiez un excellent moment.</p>
                </div>
                break;
            case 'Stretching':
              modalContent =
                <div>
                  <p>Le stretching permet de délier les articulations et d'étirer à tour de rôle les différents muscles du corps. Une activité  idéale pour les personnes nouées, fatiguées et stressés. Le stretching peut se pratiquer seul ou en complément d'un autre sport. Un muscle bien étiré se contracte mieux. </p>
                  <u>L'objectifs de ce cours:</u>
                  <ul>
                    <li>Développer la souplesse corporelle</li>
                    <li>Préparer le corps a l'exercice</li>
                    <li>Favoriser la récupération suite a un effort physique</li>
                    <li>Réduit la fatigue musculaire</li>
                    <li>Réduit le stress</li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Chaque chorégraphie est décomposée par votre professeur pour que, quel que soit votre niveau, vous puissiez suivre et vous amuser. L ambiance est explosive, festive et conviviale, si bien que même les plus farouches finissent par se lancer ! Vous serrez encadré par des professionnel qualifié et diplôme qui mettrons tout en oeuvre afin que vous passiez un excellent moment.</p>
                </div>
                break;
            case 'Cross Training':
              modalContent =
                <div>
                  <p>Le Cross Training plus connus sous le nom de "Crossfit" ( marque déposé)  est une méthode de conditionnement physique, de type entraînement croisé. Il combine principalement la force athlétique, l'haltérophilie, la gymnastique et les sports d'endurance. Il permet en outre la prise de masse, la perte de poids, gain de force, coordination et bien d'autre facteur selon le type de séances pratiqué.</p>
                  <u>L'objectifs de ce cours:</u>
                  <ul>
                    <li>Gain de muscle </li>
                    <li>Élimination des masse adipeuse indésirable</li>
                    <li>Augmentation des capacité Cardio-vasculaire et respiratoire</li>
                    <li>Amelioration de la souplesse, coordination, ...</li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Suivi par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé et tout autres donnée nécessaire au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Les séance sont préparer en amont des rendez-vous pour vous proposer des entrainement adapté et efficaces vous permettant d'obtenir des très bon résultats dans les meilleurs conditions.</p>
                </div>
                break;
            case 'Postural':
              modalContent =
                <div>
                  <p>Le travail postural consiste d'une manière générale a améliorer la façon de se tenir! Plusieurs facteur lié au stress, à la position assise au travail, au port de charges diverses qui joue sur la posture d'une manière générale et conduit souvent à des douleurs récurrente, des blessures à différents niveau de gravités, ou même des pathologie partiellement paralysante et irréversible. </p>
                  <p>Ce cours comme le cours de Prophylaxie permet de prévenir les blessures et douleurs eventuelle au travers de différentes technique de travail et de renforcement musculaire et postural. </p>
                  <u>L'objectifs de ce cours:</u>
                  <ul>
                    <li>Améliorer la posture </li>
                    <li>Meilleur connaissance de son corps</li>
                    <li>Réduction des blessure liée a une mauvaise posture</li>
                    <li>Sentiment de bien être au quotidien </li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Encadrer par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé et tout autres donnée nécessaire au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Ils prépare en amont les séances a réalisé a vos coté pour vous apporter tout les bienfait de la posturologie.</p>
                </div>
                break;
            case 'Fit Boxing':
              modalContent =
                <div>
                  <p>Envie d'un cours pour vous défouler et évacuer les tension du quotidien? Ce cours est le vôtre ! </p>
                  <p>Le Fit Boxing, c'est l'alliance parfaite entre le fitness et la boxe. Sur une musique rythmée, vous apprenez à enchaîner coups droits, uppercuts et crochets, mais aussi coups de pieds, de genoux, et de coudes, tout en y associant des mouvements d'aérobic classiques au cours de chorégraphies warrior.</p>
                  <u>L'objectifs de ce cours:</u>
                  <ul>
                    <li>Amélioration des capacités pulmonaires et cardiaques</li>
                    <li>Amélioration de l'endurance et de la coordination</li>
                    <li>Perte de poids</li>
                    <li>Tonification de l'ensemble de la silhouette</li>
                    <li>Pour se défouler</li>
                    <li>Evacuer le stress</li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Suivi par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé et tout autres donnée nécessaire au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Les séances sont préparer en amont des rendez-vous, vous vous dépenserez sur des rythmes enflammer et vous sentirez l’âme d'un conquérant que rien ne peut arrêter!</p>
                </div>
                break;
            case 'Femme Enceinte':
              modalContent =
                <div>
                  <p>Vous êtes enceinte et vous souhaitez reprendre ou continuer une activité sportive plus adaptées? Notre équipe de coachs réalise pour vous des programme sur mesure en fonctionne de votre niveau de grossesse autour de la respiration, de la détente et du renforcement musculaire et de la posture. L exercice physique durant la grossesse permet la réduction des douleurs et permet de vous préparer a l accouchement dans les meilleurs conditions grâce au technique de respiration.</p>
                  <p>Il vous est conseiller d'etre suivi tout au long de votre grossesse et également a la suite de votre accouchement afin de permettre a votre corps une bonne adaptation du changement et post accouchement de bien récupéré et vous rééduquer ( Périnée ) .</p>
                  <u>Les bienfait pré-accouchement:</u>
                  <ul>
                    <li>Gestion du poids</li>
                    <li>Réduction des douleurs (lombaires) </li>
                    <li>Réduction du stress</li>
                    <li>Diminution de la sensation de jambes lourde</li>
                  </ul>
                  <u>Les bienfait post-accouchement:</u>
                  <ul>
                    <li>Se re-muscler et se re-tonifier</li>
                    <li>Retrouver la ligne</li>
                    <li>Retrouver de la souplesse </li>
                    <li>Augmenter la rééducation du Périnée </li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Suivi par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé, le développement de votre grossesse et tout autres donnée nécessaire au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Ils vous prodigues des conseils en nutrition pour votre santé.</p>
                </div>
                break;
            case 'Prise de Masse':
              modalContent =
                <div>
                  <p>Vous rêvez de plus gros bras, d'un corps plus musclé et athlétique? Ce cours est fait pour vous. </p>
                  <p>La prise de masse musculaire est l'augmentation de la force et du volume des muscles dans un but esthétique. Ce gain se fait grace a des exercices physique adapté et une alimentation adéquate permettant une bonne récupération et reconstruction des muscle travailler pour en augmenter leurs diamètre.</p>
                  <u>Objectifs de la séance:</u>
                  <ul>
                    <li>Gain de force </li>
                    <li>Gain de volume musculaire</li>
                    <li>Obtenir un physique plus galbé et esthétique</li>
                    <li>Renforcer les articulations</li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Suivi par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé et tout autres donnée nécessaire au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Il vous prodiguerons des conseils en diètetique afin de gagner de la masse musculaire et de qualité, et réaliserons des programme sportifs adapté pour une bonne croissance des performances.</p>
                </div>
                break;
            case 'Nutrition':
              modalContent =
                <div>
                  <p>Le rôle de la diététique dans le sport est primordial lorsqu’il s’agit de remise en forme ou tout autre type de sport.  La raison étant que ceci va de pair avec l’entrainement afin de vous faire atteindre vos objectifs. </p>
                  <p>Prenons l’exemple d’une perte de poids : le meilleur coach du monde ne pourra parvenir à vous faire perdre du poids que si vous manger plus de calories que vous n’en dépensez.</p>
                  <p>Encadrer par notre expert en nutrition, il vous conseillera et vous guidera pour vous permettre d’atteindre vos objectifs dans les meilleures conditions. A la suite d’un premier bilan par téléphone avec notre expert, bénéficier de ses services pour établir un plan alimentaire complet adapté a votre besoin, ainsi que des recette simple et efficace à réaliser pour que votre alimentation soit la plus saine et la plus agréable pour vous.</p>
                  <p>Un suivi régulier est réaliser afin de connaitre votre progression et vous permettre d’évoluer vers vos objectifs de façon permanente. </p>
                  <u>L’intérêt de la diététique :</u>
                  <u>
                    <li><u><b>La santé</b></u></br><p>Un ré équilibrage alimentaire joue un rôle préventif sur les maladies de notre temps et permet une réduction du risque de ces maladie en termes de gravitée. </p></li>
                    <li><u><b>Le sport</b></u></br><p>Participe a la récupération et à la progression des capacités physique, ainsi qu’au changement d’état de votre corps sur la tonification, perte de poids et tout autre domaine. </p></li>
                    <li><u><b>Bien être et performance</b></u></br><p>Le but d’une prise en charge diététique n’est pas basé sur la privation alimentaire il est ici d’instaurer de bonnes habitudes et adopter un style de vie sain tout en sachant se faire plaisir.</p></li>
                  </u>
                </div>
                break;
            case 'Boot Camp':
              modalContent =
                <div>
                  <p>Les BOOT CAMP est basé sur l'entrainement a haute intensité et le conditionnement physique et mentale. </p>
                  <p>Au sein de divers parc d’île de France vous participez en groupe à des entraînements constituer de divers circuits axé sur le renforcement musculaire, le cardio et la bonne humeur. En profitant d'un cadre naturel, vous découvrirez les joie que vous réserve dame nature. Tout en brûlant un maximum de calories, vous développerez votre esprit d’équipe, votre mental et votre bien être.</p>
                  <u>Objectifs de la séance:</u>
                  <ul>
                    <li>Se dépasser</li>
                    <li>Repousser les limite du mentale</li>
                    <li>Cohésion de groupe</li>
                    <li>Renforcer Musculaire</li>
                    <li>Évacuation du stress</li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Encadrer et motiver par nos coachs, vous enchaînerez divers exercices les uns après les autres en groupe chacun a votre tour, le principe étant de chercher a dépasser ses propre limite et les coachs ne manquerons pas de vous pousser dans vos retranchement afin d'atteindre l'objectifs principale "aller jusqu'au bout de vous même" . Dans un cadre verdoyant les coachs prépare des circuit d'entrainement plus difficiles les uns que les autre en s'adaptant au pathologie de chacun ainsi qu'a votre niveau de pratique pour vous permettre de passer un agréable moment sportif.</p>
                </div>
                break;
            case 'Réathlétisation':
              modalContent =
                <div>
                  <p>La réathlétisation est une pratique peu connue mais pourtant de plus en plus sollicitée. Elle consiste à la reprise d'une activité physique après un événement traumatisant comme une blessure, une grossesse ou un choc émotionnel ou à l'initiation à la pratique sportive aux personnes "sédentaires".</p>
                  <u>Objectifs de la séance:</u>
                  <ul>
                    <li>Réduction des douleurs</li>
                    <li>Limité la perte des capacité motrices</li>
                    <li>Limité la perte de force</li>
                    <li>Gain de force</li>
                    <li>Meilleurs activation des facteur musculaire</li>
                    <li>Meilleurs mobilité articulaire</li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Encadré par une équipe de coachs professionnel diplômé d'état, vous serrez encadré dans le lieu de votre choix avec des mouvement adapté a votre pathologie pour obtenir la meilleurs récupération de vos facultés dans les meilleurs condition et en toute sécurité!</p>
                </div>
                break;
          case 'Running':
            modalContent =
              <div>
                <p>Amateur de course à pieds, vous aimez foulez le bitume et les sentiers inconnus? Le Running est une pratique faite pour vous. C'est un cours de course à pied, accompagnée d'objectifs propres à ceux de la discipline. </p>
                <p>Encadrer par nos coachs experts en la matière vous les suivrez sur des parcours préparer du plus faciles au plus difficiles selon votre niveau au travers de la capitale et ses environs.</p>
                <u>Objectifs de la séance:</u>
                <ul>
                  <li>Développer les capacités cardio-vasculaires </li>
                  <li>Développer les capacités cardio-respiratoires</li>
                  <li>Améliorer la condition physique</li>
                </ul>
                <u>Déroulement de la séance</u>
                <p>Nos coachs sont des professionnels certifié et diplômé d'état dont le seul objectif est votre bien-être au travers du sport. Conscient que le niveau de pratique est propre à chacun, nos coachs s’adaptent à vous et votre souhait, votre état de santé et vos difficultés afin de vous proposer le parcours le plus adapté à vous pour vous permettre durant votre moment sportif d’apprécié en vous surpassant. </p>
                <p>Les circuits sont évaluer à l'avance par nos coachs afin de vous encadrer en sécurité et dans les meilleures conditions.  </p>
              </div>
              break;
            case 'Préparation Mariage':
              modalContent =
                <div>
                  <p>Votre Mariage est un jours important dans votre vie et un événement très stressant. C est également un jours particulier pour lequel vous souhaitez être au meilleur de votre forme physique. Afin de vous permettre de profiter au mieux de cette événement nous avons conçu cette formule afin de vous permettre d'atteindre vos objectifs a deux main dans la main en vue de votre grand jours! </p>
                  <u>Objectifs de la séance:</u>
                  <ul>
                    <li>Augmentation de la cohésion de couple ( pour oublier les dispute lié au préparatifs) </li>
                    <li>Réduction et évacuation du stress </li>
                    <li>Augmentation du moral</li>
                    <li>Amélioration de la condition physique</li>
                    <li>Amélioration de la silhouette</li>
                    <li>Tonification Musculaire </li>
                    <li>Perte des petits kilos superlux</li>
                    <li>Maintien de la silhouette ( pour la tenue de mariage )</li>
                    <li>Se défouler </li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Les séance débute par un échauffement fonctionnel générale afin de permettre le bon déroulement de votre séance. Vous être encadrer par des coach sportifs diplômer, qui prendrons en compte votre niveau, vos difficultés, problème de santé éventuels, laisser vous guider pour atteindre vos objectifs dans les meilleurs conditions. Afin de vous permettre au mieux de vous détendre et relâcher la pressions du mariage la séance se terminera par un moment de stretching pour relâcher et apaisé les tensions que provoque l'entrainement ainsi que le quotidien.</p>
                  <p>Nos coachs utilise différents équipement au cours des séance de coaching tel que des élastiques, des ballon, et tout autre équipement juger nécessaire a votre bonne pratique et ils vous prodiguerons également des conseil nutritionnels adapté pour maximiser vos résultats.</p>
                </div>
                break;
            case 'Perte de Poids':
              modalContent =
                <div>
                  <p>Votre souhait : perdre quelque kilos! Comment une grande majorité de personne vous avez obtenue rapidement quelque résultats en début de régime et de reprise du sport et maintenant plus rien. Nous avons la solution a votre problématique!  Au travers de séances de coaching adapté et de conseil en nutrition vous obtiendrez rapidement des résultats.</p>
                  <u>Objectifs de la séance:</u>
                  <ul>
                    <li>Rééquilibrer votre alimentation </li>
                    <li>Perdre du poids efficacement et pour longtemps</li>
                    <li>Raffermir votre corps </li>
                    <li>Améliorer votre santé générale et votre silhouette</li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Suivi par des coach sportifs diplômer, qui prendrons en compte votre niveau, vos difficultés, problème de santé éventuels, laisser vous guider pour atteindre vos objectifs dans les meilleurs conditions.</p>
                  <p>Nos coachs utilise différents équipement au cours des séance de coaching tel que des élastiques, des ballon, et tout autre équipement juger nécessaire a votre bonne pratique et ils vous prodiguerons également des conseil nutritionnels adapté pour maximiser vos résultats. </p>
                </div>
                break;
            case 'Pilates':
              modalContent =
                <div>
                  <p>La Méthode Pilates est une méthode douce (placement précis, respiration profonde, mouvement lent) qui vise à renforcer (impact musculaire) les chaînes profondes du corps. Elle a pour objectif la réalisation de mouvements efficients et fonctionnels en minimisant l’activité des muscles inutiles pour l’action souhaitée, contribuant ainsi à l’amélioration de la performance. De plus, son travail basé sur l’allongement des membres, est responsable d’un recrutement en premier des muscles lents dits posturaux (stabilisant les membres, protégeant ainsi les articulations), puis des muscles rapides dits superficiels (permettant le mouvement). Ce schéma de travail engendre donc une optimisation de l’effort et une protection des articulations. Les muscles posturaux, profonds sont des muscles antigravitaires. L’auto grandissement, ou l’allongement consiste en une lutte contre la gravité. C’est donc logiquement que, en luttant contre la gravité il y a recrutement des muscles profonds.</p>
                  <u>Cette méthode favorise sur un plan général :</u>
                  <ul>
                    <li>une meilleure maîtrise mentale,</li>
                    <li>une colonne vertébrale plus soutenue,</li>
                    <li>une vie sexuelle tonique,</li>
                    <li>une allure embellie (perte de poids, silhouette plus élancée, étirement corporel général, meilleure posture…).</li>
                  </ul>
                  <u>Sur le plan physiologique :</u>
                  <ul>
                    <li>une amélioration de la souplesse,</li>
                    <li>De l'amplitude articulaire,</li>
                    <li>de la force,</li>
                    <li>de l’endurance</li>
                    <li>et de la puissance musculaire.</li>
                  </ul>
                  <u>Sur le plan psychologique :</u>
                  <ul>
                    <li>Amélioration de l’humeur,</li>
                    <li>de la motivation</li>
                    <li>et de l’attention.</li>
                  </ul>
                  <u>Et enfin sur le plan moteur :</u>
                  <ul>
                    <li>Meilleur contrôle du centre,</li>
                    <li>de la posture statique et dynamique</li>
                    <li>et de la coordination intra et inter membre.</li>
                  </ul>
                  <u>Déroulement de la séance</u>
                  <p>Seul ou en groupe vous travailler avec votre coachs sur vos point faible afin de rétablir un équilibre avec vos points fort et permettre un travail en osmose avec votre corps et le reste du groupe. Vous apprenez a maitrisez les grand point du pilate : La respiration, La concentration, Le contrôle, La fluidité, Le centrage, L’ordre et La relaxation.</p>
                  <p>Au cours des séances différents équipement peuvent être utilisé tel que : ballon, élastique, cercle ou boudin en mousse.</p>
                </div>
                break;
            case 'Yoga':
              modalContent =
                <div>
                  <p>Le YOGA est une discipline visant, par la méditation, l'ascèse morale et les exercices corporels, à réaliser l'unification de l'être humain dans ses aspects physique, psychique et spirituel.</p>
                  <p>Elle permet le renforcement musculaire, la tonicité, la souplesse, en travaillant sur la respiration.</p>
                  <p>Les effets sur la santé du yoga ont été étudiés scientifiquement.</p>
                  <u>Objectifs de la séance:</u>
                  <ul>
                    <li>Relaxation</li>
                    <li>Réduction du stress</li>
                    <li>Meilleur adéquation physique et psychique</li>
                    <li>Développement personnel </li>
                  </ul>
                </div>
                break;
            case 'Renforcement Musculaire':
              modalContent =
                <div>
                  <p>Vous souhaitez sculpter votre silhouette et rendre votre corps tonique ?</p>
                  <p>C'est ici que ca se passe! </p>
                  <p>Avec ou sans matériel, les activités de renforcement musculaire cherchent à exercer en force ou en explosivité une tension sur l'ensemble de la musculature ou un groupe musculaire spécifique.</p>
                  <p>Un travail complet pour un physique plus harmonieux et dessiner ! </p>
                  <u>Objectifs de la séance:</u>
                  <ul>
                    <li>Améliorer la condition physique </li>
                    <li>Augmenter la force musculaire </li>
                    <li>Etre en meilleurs santé</li>
                    <li>Dessiner sa silhouette pour obtenir un physique plus harmonieux </li>
                    <li>Réduire les problème lié a la posture </li>
                    <li>Améliorer les capacité cardio-vasculaire et respiratoire</li>
                  </ul>
                  <u>Déroulement des séances :</u>
                  <p>Suivi par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé et tout autres donnée nécessaire au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Les coachs prépare les séances en amont pour vous optimiser votre pratique. </p>
                </div>
                break;
            case 'Senior':
              modalContent =
                <div>
                  <p>Etre un Senior ne veut pas dire NE PLUS FAIRE DE SPORT. Bien au contraire comme tout un chacun les senior on besoin d'une activité physique adapté et nous mettons un point d'honneur à ce qu'il beneficie d'un service optimum. </p>
                  <u>Objectifs et bienfait :</u>
                  <ul>
                    <li>Augmentation de la mobilité articulaire</li>
                    <li>Réductions des maladies cardio-vasculaire et douleur diverse liée à l'arthrose</li>
                    <li>Augmentation du morale</li>
                    <li>Augmentation du tonus musculaire</li>
                    <li>Augmentation et maintien de l'activité social </li>
                  </ul>
                  <u>Déroulement des séances :</u>
                  <p>Échauffement adapté, introduction des différente technique utilisé lors de la séance, correction et aide au bon placement pour les différents exercices à réalisé, et en fin de séance un retour au calme pour permettre un retour a la normale du rythme cardiaque. Vous êtes encadrer par des coach sportifs diplômer, qui prendrons en compte votre niveau, vos difficultés, problème de santé éventuels, laisser vous guider pour atteindre vos objectifs dans les meilleurs conditions.</p>
                  <p>Nos coachs utilise différents équipement au cours des séance de coaching tel que des élastiques, des ballon, et tout autre équipement juger nécessaire a votre bonne pratique. Durant vos séance ils vous prodiguerons également des conseil nutritionnels adapté pour maximiser vos résultats. </p>
                </div>
                break;
            case 'Préparation Physique':
              modalContent =
                <div>
                  <p>Pratiquer un sport nécessite un fort engagement physique et les mieux préparés auront les meilleures performances possibles. C est pourquoi on vous propose ce cours de préparation physique, elle peut avoir divers aspect selon le sport que vous préparer.</p>
                  <u>On distinguera ces deux type de préparation physique: </u>
                  <ul>
                    <b><u><li>Augmentation de la mobilité articulaire</li></u></b>
                    <p>elle peut être commune à plusieurs sports. L'objectif est d'augmenter les différentes capacités du corps : endurance, force, gainage, renforcement. Cette étape intervient généralement durant la pré-saison.</p>
                    <b><u><li>•	La préparation physique spécifique (PPS): </li></u></b>
                    <p>elle fait suite à la préparation physique générale et démarre à l'approche du début de saison ou d'une compétition sportive. Son objectif d'affiner son entraînement pour produire les meilleures performances possibles. La préparation générale est alors fortement diminuée voire supprimée en fonction des besoins spécifiques de l'athlète et du stade de préparation auquel il se trouve.</p>
                  </ul>
                  <u>L'objectifs de la préparation physique générale :</u>
                  <ul>
                    <li>Renforcement musculaire</li>
                    <li>Endurance</li>
                    <li>Amélioration des capacité cardio-vasculaire</li>
                    <li>Travail de Force</li>
                  </ul>
                  <u>L'objectifs de la préparation physique Spécifique : </u>
                  <ul>
                    <li>Renforcement Musculaire</li>
                    <li>Endurance</li>
                    <li>Travail de force spécifique</li>
                    <li>Travail de mobilité fonctionnel</li>
                    <li>Amélioration des capacités physiques dédiées</li>
                  </ul>
                  <u>Déroulement des séances :</u>
                  <p>Encadré par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé et ainsi que votre sport et veillerons au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Les séances préparation physique sont préparer en amont des rendez-vous et conditionné de manière a augmenté vos capacité fonctionnel pour votre sport. Les entrainement seront calé en fonction des jours de compétition de manière que votre récupération et vos capacités physique soit a leur meilleurs niveau lors de ces compétitions.</p>
                </div>
                break;
            case 'Prévention des blessures':
              modalContent =
                <div>
                  <p>La prophylaxie désigne l'ensemble des moyens visant à lutter contre l'apparition, la propagation et/ou l'aggravation d'une ou plusieurs blessures. Dans le cas du sport, cela consiste a renforcer les articulations, tendons, et tout autre parties du corps afin de prévenir d’éventuelles blessures légère à grave.</p>
                  <u>Objectifs et bienfait :</u>
                  <ul>
                    <li>Renforcer les articulation </li>
                    <li>Renforcer les tendons</li>
                    <li>Réduire et prévenir les blessures</li>
                    <li>Améliorer la santé</li>
                  </ul>
                  <u>Déroulement des séances :</u>
                  <p>Suivi par une équipe de coachs professionnel diplômer d'état, ils prendrons en compte votre niveau de pratiques, vous problème de santé et tout autres donnée nécessaire au bon déroulement de vos séances dans les meilleurs condition et en tout sécurité. Les coachs équipé de leurs matériels, prépare une séance en amont mettant en oeuvre des mouvement permettant de renforcer les zone sensibles et et plus sujette au blessure. </p>
                </div>
                break;
            case 'Carte Cadeau':
              modalContent =
                <div>
                  <p>Qui n'a jamais été en manque d'inspiration lors d'un anniversaire ou un pot de départ? </p>
                  <p>Trouver le cadeau idéal à offrir a l'un de vos proche ou un collègue de travail. </p>
                  <p>Chez Ifit Trainer nous avons pensez a vous! Offrez une carte cadeau à la personne de votre choix. Vous choisissez le nombre de séance que vous souhaitez offrir, le lieux ( domicile, extérieur, club, ... ) et même le type d'activité susceptible de convenir au mieux a la personne à qui vous souhaitez offrir cette carte.</p>
                  <p>Personnalisé là intégralement! Choisissez votre formule et accompagner la carte d'un petit message personnalisé.</p>
                  <p>Ne reste plus qu'a entrer en contact avec nous pour démarrer son activité!</p>
                  <u>Formules disponibles</u>
                  <ul>
                    <li>5 séances</li>
                    <li>10 séances</li>
                    <li>20 séances</li>
                    <li>40 séances</li>
                    <li>100 séances</li>
                  </ul>
                </div>
                break;
    }

    this.setState({
      modalToggled : true,
      prestationName : title,
      modalContent: modalContent
    })
    document.body.style.overflow = "hidden";
  }

  displayCoachingModal = (title) => {

  }

  getAmountOfScroll = () => {
    if(document.getElementById("headerDiv")) {
      let refDivHeight = document.getElementById("headerDiv").clientHeight;
      if(this.state.arrowDisplayed === false)
      {
        if(refDivHeight/2 <= window.scrollY) {
          this.setState({arrowDisplayed: true})
        }
      }
      else{
        if(refDivHeight/2 > window.scrollY) {
          this.setState({arrowDisplayed: false})
        }
      }
    }
  }

  render() {
    let { height, prestationToggled, modalToggled, prestationName, modalContent, arrowDisplayed} = this.state
    return (
        <div style={{overflow: 'hidden'}}>
          { modalToggled ? (
              <div className="prestaModal" onClick={(e) => {
                  if(e.target.className === 'prestaModal' || e.target.className === 'prestaContent') {
                    this.setState({
                      modalToggled: false,
                      prestationName: '',
                      modalContent: null
                    })
                    document.body.style.overflow = "auto";
                  }
                }}
              >
                <div className="prestaContent">
                  <div id="modal">
                    <h2 style={{marginTop: 0}}>{prestationName}</h2>
                    <div id="modalContent">
                      <div style={{overflow: 'scroll'}}>
                        {modalContent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          }
          <ContactFixed />
          {
              arrowDisplayed === true ?
              (<span onClick={() => this.refs.headerDiv.scrollIntoView()} style={{position: 'fixed', bottom: 20, right: 20, fontSize: '2em'}} id="toTop">
                <i class="fas fa-arrow-up"></i>
              </span>) : null
          }
          <header id="headerDiv" ref="headerDiv">
            <Particles className="particles" params={Parameters} />
            <div id="header-content-wrapper">
              <div id="logo-container">
                <img src="ifitlogo.png" alt="ifit logo" />
                <h1>Agence de Coaching du Particulier à l'Entreprise</h1>
              </div>
              <nav className="container-fluid" id="home-page-header">
                <ul className="row">
                  <li className="col-sm">Accueil</li>
                  <li className="col-sm" onClick={() => this.refs.coaching.scrollIntoView()}>Coaching</li>
                  <li className="col-sm" onClick={() => this.refs.prestations.scrollIntoView()}>Prestations</li>
                  <li className="col-sm" onClick={() => this.refs.contact.scrollIntoView()}>RDV</li>
                  <li className="col-sm">
                    <Link to="/tarifs" style={{color: 'inherit'}}>
                      Tarifs
                    </Link>
                  </li>
                  <li className="col-sm">
                    <Link to="/blog" style={{color: 'inherit'}}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <section className="container center-section">
            <h2>Qui sommes nous?</h2>
            <p>
              Ifit Trainer est une agence spécialisée dans le coaching sportif. Du particulier à l'entreprise, du domicile au club de sport, nos coachs experts dans leur domaine vous accompagnent tout au long de vos séances.
              Tous nos coachs sont diplômés d’état et triés sur le volet parmi les meilleurs afin de vous offrir une qualité de service irréprochable.
              Votre bien-être est notre priorité, nous mettons à votre service toute notre expérience pour vous guider lors de vos moments sportifs !
            </p>
            <button onClick={() => this.refs.contact.scrollIntoView()}>Séance d'essai</button>
          </section>
          <Divider />
          <Reasons />
          <section className="container center-section" style={{ marginTop: '30px' }}>
            <Divider />
            <h2 style={{ marginTop: '30px' }}>Pourquoi IFit trainer?</h2>
            <div className="box-wrapper">
              <div className="box-item" id="box-item-1" style={{ height: height }}>
                <span id="box-item-text-1">
                  <h5>Un service de qualité a moindre coût!</h5>
                  <p>Notre société est agréer Service à la Personne pour vous permettre de bénéficier de nos services et les déduire de vos impôts ! </p>
                </span>
                <img src="sap.jpg" className="img-fluid" />
              </div>
              <div className="box-item" id="box-item-2" style={{ height: height }}>
                <span id="box-item-text-1">
                  <h5>Les meilleurs Coachs du Marché !</h5>
                  <p>Nous sélectionnons nos coachs parmi les meilleurs afin de vous offrir un service qualité irréprochable. Chaque coach a ses particularités et est formé pour vous apporter le meilleur au travers de leurs spécialités !</p>
                </span>
                <img src="reason-image-1.png" className="img-fluid" />
              </div>
              <div className="box-item" id="box-item-3" style={{ height: height }}>
                <span id="box-item-text-1">
                  <h5>A chacun son cours !</h5>
                  Nous voulons vous satisfaire toujours plus! Pour se faire nous vous proposons une grande diversité de cours avec nos coachs. Du coaching personnalisé au cours en plein air en petit groupe ou même du renforcement et de la détente, chacun trouvera le cours de son choix. Bénéficier de plusieurs activités dans une même formule c'est possible !
                </span>
                <img src="why-ifit-image-3.jpg" className="img-fluid" />
              </div>
            </div>
          </section>
          <section className="prestations" ref="prestations">
            <div className="container">
              <h2>Nos Prestations</h2>
              <div className="presta-container">
                <div className="presta-row">
                  <div onClick={() => this.displayPrestationModal("Zones Ciblées")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-1.jpeg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Zones Ciblées
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Ventre Plat")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-2.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Ventre Plat
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Cours Collectifs")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-3.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Cours Collectifs
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("TRX")} className="presta-item">
                    <div className="presta-background">
                      <img src="trx.png" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      TRX
                    </div>
                  </div>
                </div>
                <div className="presta-row">
                  <div onClick={() => this.displayPrestationModal("Zumba")} className="presta-item">
                    <div className="presta-background">
                        <img src="presta-5.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Zumba
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Stretching")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-6.jpeg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Stretching
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Cross Training")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-7.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Cross Training
                    </div>
                  </div>
                  <div  onClick={() => this.displayPrestationModal("Postural")} className="presta-item">
                    <div className="presta-background">
                      <img src="postural.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Postural
                    </div>
                  </div>
                </div>
              </div>
              <div id="hidden-prestations" className={prestationToggled ? 'slide-down' : 'slide-up'}>
                <div className="presta-row">
                  <div onClick={() => this.displayPrestationModal("Fit Boxing")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-9.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Fit Boxing
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Femme Enceinte")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-10.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Femme Enceinte
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Prise de Masse")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-11.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Prise de Masse
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Nutrition")} className="presta-item">
                    <div className="presta-background">
                      <img src="nutrition.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Nutrition
                    </div>
                  </div>
                </div>
                <div className="presta-row">
                  <div onClick={() => this.displayPrestationModal("Boot Camp")} className="presta-item">
                    <div className="presta-background">
                      <img src="bootcamp.png" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Boot Camp
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Réathlétisation")} className="presta-item">
                    <div className="presta-background">
                      <img src="rehabilitation.png" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Réathlétisation
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Préparation Mariage")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-15.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Préparation Mariage
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Perte de Poids")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-16.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Perte de Poids
                    </div>
                  </div>
                </div>
                <div className="presta-row">
                  <div onClick={() => this.displayPrestationModal("Pilates")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-17.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Pilates
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Yoga")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-18.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Yoga
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Renforcement Musculaire")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-19.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Renforcement Musculaire
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Senior")} className="presta-item">
                    <div className="presta-background">
                      <img src="senior.png" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Senior
                    </div>
                  </div>
                </div>
                <div className="presta-row">
                  <div onClick={() => this.displayPrestationModal("Running")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-21.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Running
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Préparation Physique")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-22.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Préparation Physique
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Prévention des blessures")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-23.jpg" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Prévention des blessures
                    </div>
                  </div>
                  <div onClick={() => this.displayPrestationModal("Carte Cadeau")} className="presta-item">
                    <div className="presta-background">
                      <img src="presta-24.png" className="img-fluid"/>
                    </div>
                    <div className="presta-text">
                      Carte Cadeau
                    </div>
                  </div>
                </div>
              </div>
              <div id="button-container">
                <button >Séance d'essai</button>
                <span onClick={this.togglePrestations} className="btn btn-default more">
                  <i className={prestationToggled ? 'fas fa-minus' : 'fas fa-plus'}></i>
                </span>
              </div>
            </div>
          </section>
          <section className="coaching" ref="coaching">
            <Coaching />
          </section>
          <section style={{ marginTop: '30px' }} ref="contact">
            <Contact />
          </section>
        </div>
    )
  }
}
