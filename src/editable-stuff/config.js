// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mathias",
  middleName: "",
  lastName: "Vogel",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/matvogel",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/matvogel/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: 375,
  message:
    "I am a Machine Learning Engineer with a background in machine learning and signal processing, having completed my Master’s at ETH Zurich. My largest interests in the area of machine learning are in computer vision applications and multimodal models.",
  resume: require('../editable-stuff/CV.pdf'),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "matvogel",
  reposLength: 4,
  specificRepos: ["P2P-Bridge", "SLID-on-Microcontrollers"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "PyTorch", value: 90},
    { name: "SQL", value: 60 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Problem Solving", value: 75 },
    { name: "Flexibility", value: 85 },
    { name: "Time Management", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Machine Learning opportunities (engineering or research)! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mathias.vogel@hotmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Machine Learning Engineering Intern',// Here Add Company Name
      companylogo: require('../assets/img/ethonai_logo.jpg'),
      date: 'Jul 2024 – Present',
    },
    {
      role: 'Data Scientist',
      companylogo: require('../assets/img/bosws.jpg'),
      date: 'Mar 2023 – Jul 2024',
    },
    {
      role: 'Master Thesis Student',
      companylogo: require('../assets/img/google.jpg'),
      date: 'Oct 2023 – Apr 2024',
    },
    {
      role: 'Research Assistant',
      companylogo: require('../assets/img/eth_logo.png'),
      date: 'Jun 2023 – Sep 2023',
    },
    {
      role: 'Semester Thesis Student',
      companylogo: require('../assets/img/disney.jpg'),
      date: 'Feb 2023 – Jun 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
