const navItems = document.querySelector('.nav-items');
const Toggle = document.querySelector('.toggle');
const closeToggle = document.querySelector('.closeToggle');
const popup = document.querySelector('.popupWindow');
const navbar = document.querySelector('.navbar');

// Define show function
function show() {
  navItems.style.display = 'flex';
  navItems.style.top = '0';
}
// Define a close function
function close() {
  navItems.style.top = '-100%';
}

// Calling show and close function
Toggle.addEventListener('click', show);
closeToggle.addEventListener('click', close);
popup.addEventListener('click', show ? close() : show());

document.onclick = function (event) {
  if (!event.target.matches('.toggle') && !event.target.matches('.nav-items')) {
    close();
  }
};

// Define a static popup array

const Projects = [
  {
    id: 1,
    name: 'Event',
    img: './asset/eventwebsite.png',
    companyName: 'MSTANLEY',
    type: 'Front End Dev',
    date: 2022,
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techUse: ['html', 'css', 'javaScript'],
    projectDemo: 'https://eventwebsite.netlify.app',
    projectSource: 'https://github.com/stanleySimeon/eventWebsite',
  },
  {
    id: 2,
    name: 'Bookstore',
    img: './asset/bookstore.png',
    companyName: 'MSTANLEY',
    type: 'Front End Dev',
    date: 2022,
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techUse: ['ReactJS', 'Redux', 'CSS'],
    projectDemo: 'https://bstore.netlify.app/',
    projectSource: 'https://github.com/stanleySimeon/bookstore ',
  },
  {
    id: 3,
    name: 'Calculator',
    img: './asset/mathmagician.png',
    companyName: 'MSTANLEY',
    type: 'Front End Dev',
    date: 2022,
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techUse: ['ReactJS', 'CSS', 'javaScript'],
    projectDemo: 'https://kalkilanm.herokuapp.com/',
    projectSource: 'https://github.com/stanleySimeon/maths-magician ',
  },
];

const projectContainer = document.getElementById('works-container');
projectContainer.innerHTML = '';

Projects.forEach((project) => {
  let techs = '';
  project.techUse.forEach((tech) => { techs += `<li>${tech}</li>`; });
  projectContainer.innerHTML += `
  <div class="cardContainer">
                <div class="imgDescription">
                    <img class="preview" src="${project.img}" alt="${project.name}" />
                </div>
                <div class="contentDescription">
                    <h4 class="title">${project.name}</h4>
                    <ul class="cardDescription" id="cardDescription1">
                        <li class="element perso">PERSONAL</li>
                        <li class="element">
                            <img class="bullet" src="./asset/bullet.png" alt="bullet" />
                        </li>
                        <li class="element">${project.type}</li>
                        <li class="element">
                            <img class="bullet" src="./asset/bullet.png" alt="bullet" />
                        </li>
                        <li class="element">${project.date}</li>
                    </ul>
                    <p class="textDescription">
                        ${project.description}
                    </p>
                    <ul class="techs">
                        ${techs}
                    </ul>
                    <button class="showPopupBtn" id="${project.id}" type="button">See Project</button>
                </div>
            </div>
  `;
  const btn = document.querySelectorAll('.showPopupBtn');
  btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navbar.style.display = 'none';
    });
  });
});

Projects.forEach((project) => {
  let techs = '';
  project.techUse.forEach((tech) => { techs += `<li>${tech}</li>`; });

  document.getElementById(project.id).addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';

    document.getElementById('popupWindow').innerHTML = `
            <div class="windowPopup">
                <div class="pop-header">
                    <h2 class="h-4">${project.name}</h2>
                    <span class="closePopup"><i class="fa fa-times"></i></span>
                </div>
                <ul class="pop-description-element">
                        <li class="element" id="company">PERSONAL</li>
                        <li class="element">
                            <img class="bullet" src="./asset/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="workType">${project.type}</li>
                        <li class="element">
                            <img class="bullet" src="./asset/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="date">${project.date}</li>
                </ul>
                
                <div class="previewContainer"><img class="preview" src="${project.img}" /></div>
                <div class="pop-element">
                    <p class="description-text">
                        ${project.description}
                    </p>
                    <div class="pop-bottom-items">
                        <ul class="techs">
                            ${techs}
                        </ul>
                        <div class="bottom-bar"></div>
                        <div class="navigation-links">
                            <a href="${project.projectDemo}" target="_blank" class="btn btnSource">See Live <i class="fa fa-link"></i></a>
                            <a href="${project.projectSource}" target="_blank" class=" btn btnDemo">See Source <i class="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
    `;
    document.querySelector('.closePopup').addEventListener('click', (e) => {
      e.preventDefault();
      popup.style.display = 'none';
      navbar.style.display = 'flex';
    });
  });
});

document.addEventListener('click', (e) => {
  const slideUp = document.querySelector('.arrow__Down');
  const slideDown = document.querySelector('.arrow__Right__00');
  const Slider = document.querySelector('.Slider');
  if (e.target === slideUp) {
    document.getElementById('languagesItems').style.display = 'none';
    slideUp.style.display = 'none';
    slideDown.style.display = 'block';
    Slider.style.marginTop = '10px';
    Slider.style.borderBottom = '1px solid #d1d1d1';
    Slider.style.marginBottom = '10px';
  } else if (e.target === slideDown) {
    document.getElementById('languagesItems').style.display = 'block';
    slideDown.style.display = 'none';
    slideUp.style.display = 'flex';
    Slider.style.borderBottom = 'none';
  }
});

const formValidation = document.querySelector('#formContainer');
const emailInputValidation = document.querySelector('#email');
const entryTextMessage = document.querySelector('#inputMessage');

formValidation.addEventListener('submit', (event) => {
  const strEmailInput = emailInputValidation.value;
  if (/[A-Z]/.test(strEmailInput)) {
    entryTextMessage.innerHTML = '*Your email address is not correct, email must be contain only lowercase character; ';
    entryTextMessage.style.fontSize = '1.3rem';
    entryTextMessage.style.fontStyle = 'italic';
    entryTextMessage.style.color = 'white';
    event.preventDefault();
  }
});
