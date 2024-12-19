import React from "react";
import TeamCard from "@/components/MeetTheTeam/TeamCard";

function MeetTheTeam() {
  const teamMembers = [
    {
      bgColor: "bg-[#E5DFD9]",
      imageSrc: "/images/Coach-02.png",
      name: "Samuel Adesoga",
      role: "Principal Coach",
      description: `Sam is our Principal Coach and Lead Trainer at ValueHut Consulting; 
        He is an agnostic Enterprise Agile Coach and Practitioner, a Professional Scrum Trainer 
        with Scrum.org. In the last 20 years, Sam has supported individuals, teams and Organisations 
        to deliver value using Agile Frameworks and Practices; ultimately developing the mindset required 
        to thrive in Volatile, Uncertain, Complex and Ambiguous (VUCA) business environment.`,
      socialLinks: [
        { icon: "/icons/twitter.svg", alt: "twitter" },
        { icon: "/icons/likdin.svg", alt: "linkedin" },
        { icon: "/icons/share.svg", alt: "share" },
      ],
    },
    {
      bgColor: "bg-[#A5E0E7]",
      imageSrc: "/images/Coach-01.png",
      name: "Temitope Adesoga",
      role: "Partner Coach",
      description: `Temitope is a Partner Coach and Trainer at ValueHut Consulting; 
        Temi is an experienced Lean-Agile Practitioner, Accredited Kanban Trainer, ICAgile Instructor 
        Agile Coach, Professional Scrum Master, Agile Project Manager, SAFe Program consultant and Kanban 
        Management Professional with over 10 years’ experience empowering and coaching development teams 
        and organizations in the adoption agile principles and improving the flow of customer value through 
        scalable, maintainable software solutions.`,
      socialLinks: [
        { icon: "/icons/twitter.svg", alt: "twitter" },
        { icon: "/icons/likdin.svg", alt: "linkedin" },
        { icon: "/icons/share.svg", alt: "share" },
      ],
    },
    {
      bgColor: "bg-[#A5E0C6]",
      imageSrc: "/images/Coach-01.png",
      name: "Temitope Adesoga",
      role: "Partner Coach",
      description: `Temitope is a Partner Coach and Trainer at ValueHut Consulting; 
        Temi is an experienced Lean-Agile Practitioner, Accredited Kanban Trainer, ICAgile Instructor 
        Agile Coach, Professional Scrum Master, Agile Project Manager, SAFe Program consultant and Kanban 
        Management Professional with over 10 years’ experience empowering and coaching development teams 
        and organizations in the adoption agile principles and improving the flow of customer value through 
        scalable, maintainable software solutions.`,
      socialLinks: [
        { icon: "/icons/twitter.svg", alt: "twitter" },
        { icon: "/icons/likdin.svg", alt: "linkedin" },
        { icon: "/icons/share.svg", alt: "share" },
      ],
    },
    {
      bgColor: "bg-[#A5c6d0]",
      imageSrc: "/images/Coach-01.png",
      name: "Temitope Dada",
      role: "Partner Coach",
      description: `Temitope is a Partner Coach and Trainer at ValueHut Consulting; 
        Temi is an experienced Lean-Agile Practitioner, Accredited Kanban Trainer, ICAgile Instructor 
        Agile Coach, Professional Scrum Master, Agile Project Manager, SAFe Program consultant and Kanban 
        Management Professional with over 10 years’ experience empowering and coaching development teams 
        and organizations`,
      socialLinks: [
        { icon: "/icons/twitter.svg", alt: "twitter" },
        { icon: "/icons/likdin.svg", alt: "linkedin" },
        { icon: "/icons/share.svg", alt: "share" },
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
