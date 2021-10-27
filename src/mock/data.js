import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ramazan Üstüntaş | Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Ramazan Üstüntaş',
  subtitle: "I'm a developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne:
    'Let me tell you about myself. I was born in 1997 in Istanbul. I love solving and controlling a problem in every moment of my life. Because it gives me new information. It is always my biggest passion to learn new things and improve myself.',
  paragraphTwo:
    "I have a Bachelor's degree in computer engineering. All my academic and career life, I have been working on writing and developing algorithms, producing solutions for needs, system management to predict problems that may arise on the platform and security, etc. I worked on the issues. But my passion is always to learn something and keep myself up to date.",
  paragraphThree: 'See for more information about me.',
  resume: 'https://www.linkedin.com/in/ramazan-ustuntas/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Full-Stack Web Development | ReactJS, NodeJS, PostgreSQL',
    info: 'My face detection project that I developed as a full stack (more APIs to be added in the future).',
    info2: 'Front-end via React and Back-end via NodeJs, ExpressJs and PostgreSql.',
    url: 'https://github.com/RamazanUstuntas/gandalfs-face-detection',
    repo: 'https://github.com/RamazanUstuntas/gandalfs-face-detection', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Resource: Sentiment Analysis via Turkish Morphological Structure.',
    info: 'The effect of Turkish morphological structure on sentiment analysis was investigated and a two-stage analyzer was developed.',
    info2: 'Tested on Twitter data.',
    url: 'https://github.com/RamazanUstuntas/turkish-morphology-analyzer',
    repo: 'https://github.com/RamazanUstuntas/turkish-morphology-analyzer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Developing Image Processing Techniques',
    info: 'Image processing methods I have developed during my academic life.',
    info2: 'I continue to develop it because it is my hobby.',
    url: 'https://github.com/RamazanUstuntas/Image_Processing-w-Py',
    repo: 'https://github.com/RamazanUstuntas/Image_Processing-w-Py', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ustuntasramazan@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/ramaznustuntas/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ramazan-ustuntas/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/RamazanUstuntas',
    },
  ],
};

// Github start/fork buttons
/* export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
}; */
