import React from "react";
import TeamCard from "@/components/MeetTheTeam/TeamCard";

function MeetTheTeam() {
  const teamMembers = [
    {
      bgColor: "bg-[#A5E0E7]",
      imageSrc: "/images/nigel-thurlow.jpg",
      name: "Nigel Thurlow",
      role: "Advisor",
      description: `Nigel Thurlow is an expert in organizational design, author, and renowned speaker who serves 
      as a consultant to industry in business agility — and as an expert in the application of cross-disciplinary 
      methods and approaches to accelerate business change.`,
      socialLinks: [
        { icon: "/icons/twitter.svg", alt: "twitter", url: "https://x.com/NigelThurlow/" },
        { icon: "/icons/likdin.svg", alt: "linkedin", url: "https://www.linkedin.com/in/nigelthurlow/" },
        { icon: "/icons/share.svg", alt: "share", url: "https://nigelthurlow.com/" },
      ],
    },
    {
      bgColor: "bg-[#E5DFD9]",
      imageSrc: "/images/sam-adesoga.png",
      name: "Samuel Adesoga",
      role: "Founder & Managing Consultant",
      description: `Sam is an Enterprise Delivery Coach and Agile Practitioner, a Professional Scrum Trainer 
        with Scrum.org. In the last 20 years, Sam has coached individuals, teams and Organisations 
        to deliver value using Agile Frameworks and Practices; enabling them to develop the mindset required 
        to thrive in Volatile, Uncertain, Complex and Ambiguous (VUCA) business environment.`,
      socialLinks: [
        { icon: "/icons/twitter.svg", alt: "twitter", url: "https://x.com/sadesoga/" },
        { icon: "/icons/likdin.svg", alt: "linkedin", url: "https://www.linkedin.com/in/samueladesoga/" },
        { icon: "/icons/share.svg", alt: "share", url: "https://samadesoga.me/" },
      ],
    },
    {
      bgColor: "bg-[#A5E0C6]",
      imageSrc: "/images/temitope-awere.png",
      name: "Temitope Awere",
      role: "Partner Consultant",
      description: `Temitope is a Partner Coach and Trainer at ValueHut Consulting; 
        Temi is an experienced Lean-Agile Practitioner, Accredited Kanban Trainer, ICAgile Instructor 
        Agile Coach, Professional Scrum Master, Agile Project Manager, SAFe Program consultant and Kanban 
        Management Professional with over 10 years’ experience empowering and coaching development teams 
        and organizations in the adoption agile principles and improving the flow of customer value through 
        scalable, maintainable software solutions.`,
      socialLinks: [
        { icon: "/icons/twitter.svg", alt: "twitter", url: "https://twitter.com" },
        { icon: "/icons/likdin.svg", alt: "linkedin", url: "https://www.linkedin.com/in/temitope-awere-554194118/" },
        { icon: "/icons/share.svg", alt: "share", url: "https://www.agilematrix.org/" },
      ],
    },
  ];

  return (
    <div>
      <h1 className="flex justify-center items-center font-medium font-primary text-[47px] leading-[65px] sm:text-[60px] sm:leading-[84px] py-8">
        Meet the team
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </section>
    </div>
  );
}

export default MeetTheTeam;
