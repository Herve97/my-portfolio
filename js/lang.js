let lang = localStorage.getItem("lang") || "anglais";
let index = parseInt(localStorage.getItem("langIndex")) || 0;

const iam = document.querySelector(".iam"),
  homenav = document.querySelector(".home-nav"),
  aboutNav = document.querySelector(".about-nav"),
  skillsNav = document.querySelector(".skills-nav"),
  projectsNav = document.querySelector(".projects-nav"),
  contactNav = document.querySelector(".contact-nav"),
  aboutCity = document.querySelector(".about-city"),
  degree = document.querySelector(".degree"),
  bachelor = document.querySelector(".bachelor"),
  available = document.querySelector(".available"),
  aboutText = document.querySelector(".about-text"),
  aboutTitle = document.querySelector(".about-title"),
  skillsTitle = document.querySelector(".skills-title"),
  ProjectsTitle = document.querySelector(".projects-title"),
  projectsDesc = document.querySelector(".projects-desc"),
  bulkDesc = document.querySelector(".bulk-desc"),
  smartDesc = document.querySelector(".smart-desc"),
  liliaDesc = document.querySelector(".lilia-desc"),
  emergenceDesc = document.querySelector(".emergence-desc"),
  proxiDesc = document.querySelector(".proxi-desc"),
  gnioosDesc = document.querySelector(".gnioos-desc"),
  locationTitle = document.querySelector(".location-title"),
  langs = document.querySelector(".langs"),
  link = document.querySelectorAll(".linked");
// select = document.querySelectorAll("select"),

console.log("linked: ", link);

const data = {
  français: {
    iam: "Je suis un",
    homeNav: "Accueil",
    aboutNav: "A propos de moi",
    skillsNav: "Compétences",
    projectsNav: "Projets",
    contactNav: "Contact",
    aboutCity: "Ville:",
    degree: "Diplôme:",
    bachelor: "Licence",
    available: "Disponible",
    aboutText:
      "Je suis développeur web fullstack avec 3 ans d'expérience en Node.js, 1,5 an en Angular et 2 ans avec WordPress. Je suis un professionnel qualifié et expérimenté capable de développer des applications web complètes, de la conception à la production. Mes compétences et connaissances font de moi un candidat idéal pour des postes de développeur web fullstack dans des entreprises de toutes tailles. En plus de mes compétences techniques, je possède également des connaissances de base en réseaux informatiques. Je suis capable de comprendre et de résoudre des problèmes liés à la communication entre les différents composants d'une application web. Je suis capable de concevoir, développer et maintenir des applications web complexes, utilisant une variété de technologies et d'outils. Je suis un atout précieux pour toute entreprise qui souhaite développer des applications web de qualité. Je suis capable de travailler de manière autonome ou en équipe et de m'adapter à des projets de différentes tailles et complexités.",
    aboutTitle: "A propos de moi",
    skillsTitle: "Compétences",
    ProjectsTitle: "Projets Récents",
    projectsDesc:
      "Voici la liste des projets récents sur lesquels j'ai travaillé. Le reste, vous pouvez le voir sur mon profil <a href='https://www.linkedin.com/in/herve-bakongo/' target='_blank'> LinkedIn </a> ou mes référentiels <a href='https://github.com/Herve97' target='_blank'>Github</a>",
    bulkDesc:
      "Ce projet consiste à envoyer des SMS en masse en utilisant sa propre liste de contacts tout en filtrant ceux qui peuvent ou non recevoir un SMS spécifique et en réalisant des campagnes de marketing SMS en utilisant la grande base de données Emergence SARL. LE projet Backend a été créé avec NodeJs (ExpressJs) et une base de données MySQL.",
    smartDesc:
      "Ce projet consiste à alerter les assureurs du passage d'un assuré dans leurs différents centres partenaires et le système prévient le prestataire par SMS s'il doit ou non recevoir l'assuré devant lui. Nous avons créé le RESTAPI du projet dans Nodejs (ExpressJs), une base de données MySQL, mise en cache avec Redis et Pusher en temps réel.",
    liliaDesc:
      "Un site Web d'une page créé sous Wordpress pour la <a href='https://lilia-communication.com/' target='_blank'> communication lilia-communication </a>. Nous avons utilisé Elementor pour construire ce site, tout en modifiant le template acheté afin de l'adapter aux besoins du client.",
    emergenceDesc:
      "Un site vitrine réalisé sous Wordpress pour <a href='https://emergence-rdc.com/' target='_blank'>Emergence Sarl </a>. Nous avons utilisé Elementor pour construire ce site, tout en modifiant le template acheté afin de l'adapter aux besoins du client. Afin de permettre à l'entreprise de démontrer ses services pour gagner en visibilité au niveau international.",
    proxiDesc:
      "Un site Web pour un centre d'examens médicaux créé sous Wordpress pour <a href='https://proxilab.org/' target='_blank'> Proxilab </a>. Nous avons utilisé Elementor pour construire ce site, tout en modifiant le template acheté afin de l'adapter aux besoins du client. Afin de permettre à Proxilab de démontrer ses prestations médicales.",
    gnioosDesc:
      "Une application backend créée avec Nestjs utilisant le monorepo pour les 4 modules sélectionnés selon l'architecture monolithique. Dans cette application, nous avons utilisé Mongo Atlas comme serveur de base de données, Prisma comme ODM et Docker.",
    locationTitle: "Adresse:",
  },
  anglais: {
    iam: "I'm",
    homeNav: "Home",
    aboutNav: "About me",
    skillsNav: "Skills",
    projectsNav: "Projects",
    contactNav: "Contact",
    aboutCity: "City:",
    degree: "Degree:",
    bachelor: "Bachelor",
    available: "Available",
    aboutText:
      "I am fullstack web developer with 3 years of experience in Node.js, 1.5 year in Angular and 2 years with WordPress. I am  qualified and experienced professional capable of developing complete web applications, from design to production. My skills and knowledge make me an ideal candidate for fullstack web developer positions in companies of all sizes. In addition to my technical skills, I also have basic knowledge of computer networking.I am able to understand and resolve problems related to communication between the different components of a web application.I am capable of designing, developing, and maintaining complex web applications, using a variety of technologies and tools.I am a valuable asset for any company that wants to develop quality web applications. I am able to work independently or in a team and adapt to projects of different sizes and complexities.",
    aboutTitle: "About me",
    skillsTitle: "Skills",
    ProjectsTitle: "Recents Projects",
    projectsDesc:
      "Here is the list of the recents projects I worked on. The rest you can see on my <a href='https://www.linkedin.com/in/herve-bakongo/' target='_blank'> LinkedIn </a> profile or my <a href='https://github.com/Herve97' target='_blank'>Github</a> repositories.",
    bulkDesc:
      "This project involves sending SMS Bulk using its own contact list while filter which may or may not receive a specific SMS and make SMS marketing campaigns using large Emergence SARL database. THE Backend project was created with NodeJs (ExpressJs) and a MySQL database.",
    smartDesc:
      "This project consists of alerting insurers of the passage of an insured person in their various partner centers and the system notifies the service provider by SMS whether or not he should receive the insured person in front of him. We created the project's RESTAPI in Nodejs (ExpressJs), a MySQL database, cached with Redis and Pusher for realtime.",
    liliaDesc:
      "A one page website created using Wordpress for <a href='https://lilia-communication.com/' target='_blank'> lilia-communication communication </a>. We used Elementor to build this site, while modifying the template purchased in order to adapt it to the client's needs.",
    emergenceDesc:
      "A showcase website created using Wordpress for <a href='https://emergence-rdc.com/' target='_blank'>Emergence Sarl </a>. We used Elementor to build this site, while modifying the template purchased in order to adapt it to the client's needs. In order to allow the company to demonstrate its services to gain visibility at the international level.",
    proxiDesc:
      "A website for a medical testing center created using Wordpress for <a href='https://proxilab.org/' target='_blank'> Proxilab </a>. We used Elementor to build this site, while modifying the template purchased in order to adapt it to the client's needs. In order to allow Proxilab to demonstrate its medical services.",
    gnioosDesc:
      "A backend application created with Nestjs using the monorepo for the 4 modules selected according to the monolithic architecture. In this application we used Mongo Atlas as database server, Prisma as ODM and Docker",
    locationTitle: "Address:",
  },
};

if (lang === "anglais") {
  langs.querySelector(".active").classList.remove("active");
  link[0].classList.add("active");
  changeLang(
    "anglais",
    iam,
    homenav,
    aboutNav,
    skillsNav,
    projectsNav,
    contactNav,
    aboutCity,
    degree,
    bachelor,
    available,
    aboutText,
    aboutTitle,
    skillsTitle,
    ProjectsTitle,
    projectsDesc,
    bulkDesc,
    smartDesc,
    liliaDesc,
    emergenceDesc,
    proxiDesc,
    gnioosDesc,
    locationTitle
  );
} else {
  langs.querySelector(".active").classList.remove("active");
  link[index].classList.add("active");
  changeLang(
    lang,
    iam,
    homenav,
    aboutNav,
    skillsNav,
    projectsNav,
    contactNav,
    aboutCity,
    degree,
    bachelor,
    available,
    aboutText,
    aboutTitle,
    skillsTitle,
    ProjectsTitle,
    projectsDesc,
    bulkDesc,
    smartDesc,
    liliaDesc,
    emergenceDesc,
    proxiDesc,
    gnioosDesc,
    locationTitle
  );
}

link.forEach((el, i) => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    const attr = el.dataset.lang;
    lang = attr;
    index = i;
    if (lang !== "anglais")
      changeLang(
        lang,
        iam,
        homenav,
        aboutNav,
        skillsNav,
        projectsNav,
        contactNav,
        aboutCity,
        degree,
        bachelor,
        available,
        aboutText,
        aboutTitle,
        skillsTitle,
        ProjectsTitle,
        projectsDesc,
        bulkDesc,
        smartDesc,
        liliaDesc,
        emergenceDesc,
        proxiDesc,
        gnioosDesc,
        locationTitle
      );
    else
      changeLang(
        "anglais",
        iam,
        homenav,
        aboutNav,
        skillsNav,
        projectsNav,
        contactNav,
        aboutCity,
        degree,
        bachelor,
        available,
        aboutText,
        aboutTitle,
        skillsTitle,
        ProjectsTitle,
        projectsDesc,
        bulkDesc,
        smartDesc,
        liliaDesc,
        emergenceDesc,
        proxiDesc,
        gnioosDesc,
        locationTitle
      );
    localStorage.setItem("lang", attr);
    localStorage.setItem("langIndex", i);
  });
});

function changeLang(
  lang,
  iam,
  homenav,
  aboutNav,
  skillsNav,
  projectsNav,
  contactNav,
  aboutCity,
  degree,
  bachelor,
  available,
  aboutText,
  aboutTitle,
  skillsTitle,
  ProjectsTitle,
  projectsDesc,
  bulkDesc,
  smartDesc,
  liliaDesc,
  emergenceDesc,
  proxiDesc,
  gnioosDesc,
  locationTitle
) {
  iam.textContent = data[lang].iam;
  homenav.textContent = data[lang].homeNav;
  aboutNav.textContent = data[lang].aboutNav;
  skillsNav.textContent = data[lang].skillsNav;

  projectsNav.textContent = data[lang].projectsNav;
  contactNav.textContent = data[lang].contactNav;
  aboutCity.textContent = data[lang].aboutCity;
  degree.textContent = data[lang].degree;

  bachelor.textContent = data[lang].bachelor;
  available.textContent = data[lang].available;
  aboutText.textContent = data[lang].aboutText;
  aboutTitle.textContent = data[lang].aboutTitle;

  skillsTitle.textContent = data[lang].skillsTitle;
  ProjectsTitle.textContent = data[lang].ProjectsTitle;
  projectsDesc.innerHTML = data[lang].projectsDesc;
  bulkDesc.innerHTML = data[lang].bulkDesc;

  smartDesc.innerHTML = data[lang].smartDesc;
  liliaDesc.innerHTML = data[lang].liliaDesc;
  emergenceDesc.innerHTML = data[lang].emergenceDesc;
  proxiDesc.innerHTML = data[lang].proxiDesc;

  gnioosDesc.textContent = data[lang].gnioosDesc;
  locationTitle.textContent = data[lang].locationTitle;
}
