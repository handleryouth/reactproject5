import { v4 as uuidv4 } from 'uuid';

const job = [
  {
    id:uuidv4(),
    company: "Photosnap",
    role: "Senior Frontend Developer",
    timeposted: "1d ago",
    hoursofwork: "Full Time",
    region: "USA only",
    Image: "/images/photosnap.svg",
    keytag: ["Frontend", "Senior", "HTML", "CSS", "Javascript"],
    condition: "NEW!",
    featured: "FEATURED"
  },
  {
    id:uuidv4(),
    company: "Manage",
    role: "Fullstack Developer",
    timeposted: "1d ago",
    hoursofwork: "Part Time",
    region: "Remote",
    Image: "/images/manage.svg",
    keytag: ["Fullstack", "Midweight", "Python", "React"],
    condition: "NEW!",
    featured: "FEATURED"
  },
  {
    id:uuidv4(),
    company: "Account",
    role: "Junior Frontend Developer",
    timeposted: "2d ago",
    hoursofwork: "Part Time",
    region: "USA only",
    Image: "/images/account.svg",
    keytag: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
    condition: "NEW!",
  },
  {
    id:uuidv4(),
    company: "MyHome",
    role: "Junior Frontend Developer",
    timeposted: "5d ago",
    hoursofwork: "Contract",
    region: "USA only",
    Image: "/images/myhome.svg",
    keytag: ["Frontend", "Junior", "CSS", "JavaScript"]
  },
  {
    id:uuidv4(),
    company: "Loop Studios",
    role: "Software Engineer",
    timeposted: "1w ago",
    hoursofwork: "Full Time",
    region: "Worldwide",
    Image: "/images/loop-studios.svg",
    keytag:["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"]
  },
  {
    id:uuidv4(),
    company: "FaceIt",
    role : "Junior Backend Developer",
    timeposted : "2w ago",
    hoursofwork: "Full Time",
    region: "USA only",
    Image: "/images/faceit.svg",
    keytag:["Backend", "Junior", "Ruby", "RoR"]
  },
  {
    id:uuidv4(),
    company: "Shortly",
    role : "Junior Developer",
    timeposted : "2w ago",
    hoursofwork: "Full Time",
    region: "USA only",
    Image: "/images/shortly.svg",
    keytag: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"]
  },
  {
    id:uuidv4(),
    company: "Insure",
    role : "Junior Frontend Developer",
    timeposted : "2w ago",
    hoursofwork: "Full Time",
    region: "USA only",
    Image: "/images/insure.svg",
    keytag: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"]
  },
  {
    id:uuidv4(),
    company: "Eyecam Co.",
    role : "Full Stack Engineer",
    timeposted : "3w ago",
    hoursofwork: "Full Time",
    region: "Worldwide",
    Image: "/images/eyecam-co.svg",
    keytag: ["Fullstack", "Midweight", "JavaScript", "Django", "Python"]
  },
  {
    id:uuidv4(),
    company: "The Air Filter Company",
    role : "Front-end Dev",
    timeposted : "1mo ago",
    hoursofwork: "Part Time",
    region: "Worldwide",
    Image: "/images/the-air-filter-company.svg",
    keytag: ["Frontend", "Junior", "React", "Sass", "JavaScript"]
  }
];

export default job;