import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Engr. Muhammad Uzair Khan",
    designation: "Candidate Vice Chairman KP",
    image: "/images/team/team-01.png",
    facebookLink: "https://www.facebook.com/uzair1919?mibextid=ZbWKwL",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Engr. Javed Afridi",
    designation: "Candidate Civil Engineering",
    image: "/images/team/team-02.png",
    facebookLink: "https://www.facebook.com/profile.php?id=61553180356679&mibextid=ZbWKwL",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Engr. Nooraz Gul",
    designation: "Candidate Civil Engineering",
    image: "/images/team/team-03.png",
    facebookLink: "https://www.facebook.com/nooraz.gul.1?mibextid=ZbWKwL",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Engr. Aurang Zaib Afridi",
    designation: "Candidate Electronics Engineering",
    image: "/images/team/team-04.png",
    facebookLink: "https://www.facebook.com/profile.php?id=100028429355906&mibextid=ZbWKwL",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 5,
    name: "Engr. Khurram Shehzad",
    designation: "Candidate Electrical Engineering",
    image: "/images/team/team-05.png",
    facebookLink: "https://www.facebook.com/ksdurani?mibextid=LQQJ4d",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 6,
    name: "Engr. Dr. Taj Ali Khan",
    designation: "Candidate Mechatronics Engineering",
    image: "/images/team/team-06.png",
    facebookLink: "https://www.facebook.com/taj.a.khan.3",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 7,
    name: "Engr. Dr. Laiq Hasan",
    designation: "Candidate Electrical Engineering",
    image: "/images/team/team-07.png",
    facebookLink: "https://www.facebook.com/LaiqHasan?mibextid=ZbWKwL",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Get to know the dedicated engineers driving our mission forward. 
            Our team is committed to excellence, innovation, and making a positive impact in pakistan engineering council."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
