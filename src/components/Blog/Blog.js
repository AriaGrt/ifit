import React from 'react'
import './Blog.css'
import { Link } from "react-router-dom";

const Blog = () => (
  <div id="whole-wrapper">
    <span id="back-arrow-wrapper">
      <Link to="/" style={{color: 'inherit'}}>
        <i class="fas fa-arrow-left"></i>
      </Link>
    </span>
    <h1>IFIT Trainer Blog</h1>
    <div className="blog-item">
      <div className="header">
        9 Raisons qui bloquent votre perte de poids
      </div>
      <div className="content">
        <p className="author">
          Par ivan beaufils 04 mars, 2018
        </p>
        <p>
          Vous avez une activité physique régulière, et pourtant vous n'arrivez plus à progresser. Votre poids stagne et cela joue sur votre motivation, votre moral et votre entourage. C‘EST TERMINE! Apprenez à comprendre pourquoi votre poids stagne, et faites évoluer les choses.
        </p>
        <div style={{textAlign: 'center'}}><img className="blog-image" src="reason-image-3.png"/></div>
        <div style={{padding: 20}}>
          <b><p style={{marginTop: 10}}>1. Vous mangez trop </p></b>
          <p>On commence par une évidence, mais quand on regarde plus attentivement les habitudes alimentaires des personnes qui veulent maigrir, on se rend compte que ce n’est pas aussi évident que ça en a l’air.</p>
          <p>Vous pensez manger peu, mais parfois vous mangez trop. La quantité d'aliments que vous mangez n'est pas la cause de manque de résultat, mais c'est la qualité de ce que vous mangez qui l'est.</p>
          <p>Concrètement, il s’agit de <b>consommer moins de calories que votre métabolisme de base.</b></p>
          <p>Parfois, on pense qu’on est déficitaire en calories alors que ce n’est pas le cas.</p>
          <p>Pour en avoir le cœur net, utilisez les applications de suivi et inscrivez votre consommation chaque jour.</p>
          <b><p style={{marginTop: 10}}>2. Vous ne mangez pas assez</p></b>
          <p>Eh bien oui, pour faciliter la perte de poids il faut manger ! </p>
          <p>Peut-être suivez-vous un régime depuis trop longtemps.</p>
          <p>Le problème dans ces cas-là, c’est que votre corps finit par <b>se mettre en mode survie.</b></p>
          <p>Quand les ressources énergétiques diminuent de jour en jour, la sonnette d’alarme finit par retentir.</p>
          <p>Pour votre corps, il pourrait s’agir d’une famine.
            Et en prévision de cette famine, il adopte des mesures appropriées.
          </p>
          <p>Il va alors très peu utiliser les graisses comme source d’énergie.
              Et va chercher à conserver ces réserves.
              Et à les recharger s’il en a l’occasion.
              Afin de lui envoyer le message inverse et permettre à votre métabolisme de se relancer correctement, il est conseillé de faire ce que l'on appelle un cheat meal, ce qui consiste à surcharger votre organisme sur un temps donné afin de le choquer et provoquer la combustion des graisses à nouveau.
          </p>
          <b><p style={{marginTop: 10}}>3. Vous faite trop de cardio</p></b>
          <p>En effet, faire du cardio est bon pour la perte de poids, mais à juste mesure. Un surplus de cardio va avoir pour effet de vous ouvrir plus l'appétit, vous allez avoir plus faim et donc manger plus.</p>
          <p>Il est recommandé de ne pas dépasser 60 minutes de cardio par séance dans le cadre d'une perte de poids. Bien évidemment d'autres facteurs rentrent en compte comme votre récupération. Si vous faites chaque jour du cardio, votre corps ne récupère pas et se fatigue un peu plus chaque jour ce qui va l’empêcher d'utiliser correctement ses réserves de graisse.</p>
          <b><p style={{marginTop: 10}}>4. Vous ne consommez pas assez de glucides</p></b>
          <p>La consommation ponctuelle de glucides vous permet de provoquer un pic d’insuline, ce qui a pour effet de provoquer un pic d’hormones brûleuses de graisses.</p>
          <p>En éliminant complètement les glucides de votre alimentation, vous vous privez de ces hormones et vous amenez votre corps à vouloir conserver davantage de graisses.</p>
          <b><p style={{marginTop: 10}}>5. Vous n'avez pas de poids à perdre !</p></b>
          <b><p>La perte de poids est devenue un effet de mode, mais avez-vous réellement du poids à perdre ? </p></b>
          <p>Pour en être certain, calculez votre IMC. S’il est inférieur à 20 alors cessez de vouloir perdre du poids, vous faites simplement souffrir votre corps. </p>
          <p>Peut-être est-il temps de penser non pas à perdre du poids mais à construire de la masse musculaire à des endroits ciblés afin de galber votre silhouette.</p>
          <b><p style={{marginTop: 10}}>6. Vous ne buvez pas assez d'eau</p></b>
          <p>Nous le savons tous, le corps est fait à 65% d'eau. Si vous n'en consommez pas suffisamment chaque jour, votre corps est déficitaire et cela se répercute sur votre perte de poids. </p>
          <p>L'eau permet également de réduire la sensation de faim, et conduit donc à manger moins.</p>
          <p>Mais pensez également à vos organes, quand vous êtes déshydraté vos reins fonctionnent moins bien et votre foie également cela aura donc un effet négatif sur la combustion des graisses.</p>
          <b><p style={{marginTop: 10}}>7. Votre consommation de protéines est trop basse !</p></b>
          <p>Les protéines sont essentielles au maintien de votre masse musculaire.
            Une consommation suffisante en protéines empêche donc un éventuel ralentissement de votre métabolisme.
          </p>
          <p>Consommer suffisamment de protéines vous assure de perdre essentiellement de la graisse (plutôt que de perdre de la graisse ET des muscles).</p>
          <p>Votre organisme dépense plus d’énergie pour digérer les protéines qu’il n’en dépense pour digérer les glucides ou les lipides.
          Une alimentation riche en protéines vous fait donc brûler plus de calories.
          </p>
          <p>La quantité de protéines que vous devez consommer quotidiennement varie suivant votre poids et votre activité  physique.
            Mais généralement, pour une femme 40-80 grammes de protéines est un minimum.
          </p>
          <b><p style={{marginTop: 10}}>8. Votre consommation de Lipides est trop basse ! </p></b>
          <p>Oubliez tout ce qu’on vous a raconté sur les graisses, ce n’est pas parce que vous consommez des matières grasses que vous allez gagner de la graisse, ça ne fonctionne pas comme ça.</p>
          <p>Les lipides font partie du fondement de l'alimentation saine il ne faut donc pas les négliger.</p>
          <p><b>Les bonnes graisses sont essentielles pour la santé, et pour maigrir.</b></p>
          <b><p style={{marginTop: 10}}>9. Vous ne dormez pas suffisamment.</p></b>
          <p>Le sommeil est un facteur essentiel à votre perte de poids, si votre corps n'est pas reposé, il ne dispose pas de l’énergie suffisante pour détériorer les graisses stockées.</p>
          <p>VOUS AVEZ MAINTENANT TOUTES LES CLÉS EN MAINS POUR RÉUSSIR VOTRE PERTE DE POIDS EFFICACEMENT. POUR LE RESTE VOUS POUVEZ ME CONTACTER SUR MA PAGE FACEBOOK.</p>
          <u>https://www.facebook.com/ifitrainer</u>
        </div>
      </div>
    </div>
    <div className="blog-item">
      <div className="header">
        Alimentation et Bien être
      </div>
      <div className="content">
        <p className="author">
          Par ivan beaufils 03 mars, 2018
        </p>
        <p>
          Dans le cadre du bien-être, l'alimentation joue un rôle primordial !
          Beaucoup pensent et à tort que le bien être passe par un régime draconien, or le bien être se constitue et se construit au travers d'une alimentation saine et variée. La première étape est de commencer par faire un rééquilibrage alimentaire.
        </p>
        <div style={{textAlign: 'center'}}><img className="blog-image" src="presta-16.jpg"/></div>
        <p style={{marginTop: 20}}>Le rééquilibrage alimentaire est la clé de vos objectifs de perte de poids, prise de masse, bien être intérieur, ou tout autre objectif. Chaque objectif demandera des ressources différentes sur le plan alimentaire afin de se dérouler dans les meilleures conditions possibles.</p>
        <p>Le point principal à ne jamais négliger dans le cadre d'une perte de poids est l'alimentation. Contrairement au préjugé, manger peu ne fait pas perdre du poids mais met le corps en stase dans l'attente d'une suralimentation qui aura pour conséquence immédiate une prise de poids sous forme de graisse. En effet, si vous privez votre corps de nourriture durant un régime, lorsque vous ferez un écart ce dernier assimilera les sucres dans l'organisme et les transformera en graisse qu'il va stocker pour faire face à la prochaine phase de "famine". </p>
        <p>Dans une phase de perte de poids, le but recherché est l'utilisation et la destruction des graisses stockées dans l'organisme, sans affamer son corps. Pour utiliser au mieux les réserves stockées sous forme de graisse dans le corps, l'alimentation et le rééquilibrage joue un rôle primordial. </p>
        <p>En prenant en compte les caractéristiques de chacun, il faut apporter à l'organisme les taux de protéines, de glucides, de lipides et de fibres nécessaires pour que l’organisme utilise les graisses à bon escient comme énergie, sans créer de carence.
        Le rééquilibrage passe donc par établir un plan adapté à chacun en plusieurs repas journaliers en commençant par un petit déjeuner, puis le repas du midi, une collation dans l’après-midi et enfin le souper du soir.
        </p>
        <p><b>Le petit déjeuner</b>, se compose d'une source de glucides (flocons d'avoine, pain complet, ...) + une source de protéines (lait, œuf, viande blanche, …) + un fruit. C'est durant ce repas que l'on fera un stock d'énergie pour tenir une grande partie de la journée.</p>
        <p><b>Le repas de midi</b>, se constitue principalement d'une viande (steak, poulet, dinde, …) ou poisson (colin, merlu, thon, saumon, …), de féculents en petite quantité (riz, pâtes, …), et de légumes. </p>
        <p><b>La collation</b>, se constitue d'un fruit, une source de glucides (flocons d'avoine, pain complet, …), de protéines (lait, œuf, viande, ...), et une source de lipides (noix, amandes, …).</p>
        <p><b>Le dîner</b>, se constitue d'une source de protéines (poissons maigres, viande blanche, soja, …)' de légumes, et accompagné ou non d'une source de glucides. </p>
        <p>Bien évidement on ne négligera pas une bonne hydratation journalière, boire 2 à 3 litres d'eau par jour afin de satisfaire les besoins journaliers du corps en fonction de votre activité.</p>
        <p>Eviter le grignotage qui n'apportera aucune sensation de satiété à votre corps, et donnera plutôt une impression de faim crée par votre cerveau dû à la libération d'hormones. </p>
        <p>Vous avez maintenant toutes les cartes en main pour atteindre plus aisément vos objectifs alors à vous de jouer !!</p>
      </div>
    </div>
  </div>
)

export default Blog
