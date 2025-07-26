import member1 from "../assets/member1.jpeg";
import member2 from "../assets/member2.webp";
import member3 from "../assets/member3.webp";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: { src: string };
  profileUrl?: string;
}

export const team: TeamMember[] = [
  {
    id: "dat-nguyen",
    name: "Dat Nguyen",
    role: "Engineer, CEO & Co-founder",
    image: member1,
    profileUrl: "https://www.linkedin.com/in/dat-nguyen-cse/",
  },
  {
    id: "le-duc-thang",
    name: "Le Duc Thang",
    role: "Engineer",
    image: member2,
    profileUrl: "https://www.ifateam.dev/",
  },
  {
    id: "huyhunhngc",
    name: "huyhunhngc",
    role: "Engineer",
    image: member3,
    profileUrl: "https://huyhunhngc.tech/",
  },
];