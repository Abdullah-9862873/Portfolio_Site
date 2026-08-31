import React, { useEffect, useRef, useState } from "react";

const References = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const refTitle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refTitle.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setTitleVisible(true);
      }, 200);
    }
  });

  const references = [
    {
      name: "Zafar Shahid, Ph.D.",
      role: "Technical Lead / Staff Engineer @ Meta",
      email: "zafar.shahid@acm.org",
      phone: "+1 (512) 239-8008",
      location: "Santa Clara, CA 95054",
    },
    {
      name: "Musa Malik",
      role: "Incoming Assistant Professor at University of Oklahoma",
      email: "musamalik@ucsb.edu",
      profiles: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=UNL2osUAAAAJ&hl=en" },
        { label: "LinkedIn Recommendation", url: "https://www.linkedin.com/in/abdullah-sultan-923883254/details/recommendations/" },
      ],
    },
    {
      name: "Dr. Hassan Tariq",
      role: "Assistant Professor, University of Agriculture, Faisalabad",
      email: "hassan@uaf.edu.pk",
      phone: "+92419200161 - Ext. 3378",
      profiles: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=x6AzVjEAAAAJ&hl=en" },
      ],
    },
    {
      name: "Ms. Wajeeha Azmat",
      role: "Lecturer, University of Agriculture, Faisalabad",
      email: "Wajeeha.azmat@uaf.edu.pk",
      phone: "+92419200829 - Ext. 3376",
    },
  ];

  return (
    <div
      id="REFERENCESDIV"
      className={`ml-12 mr-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
    >
      <div
        ref={refTitle}
        className={`contentContainer ${titleVisible ? "show" : ""} pt-[5.538rem] relative`}
      >
        <div className="inline-block absolute top-[6.7rem] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
          07.
        </div>{" "}
        <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
          References
          <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen4:hidden"></div>
        </div>
        <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[#303c55] workScreen4:hidden workScreen6:left-[305px] workScreen7:w-[22rem]"></div>
      </div>

      <div className="relative py-4">
        <div className="contentContainer show">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {references.map((ref, index) => (
              <div
                key={index}
                className="bg-[#112240] p-6 rounded-lg border border-[#233554] hover:border-[#64ffda] transition-colors duration-300"
              >
                <h4 className="bg-transparent text-[#ccd6f6] text-[17px] font-calibri font-semibold mb-1">
                  {ref.name}
                </h4>
                <p className="bg-transparent text-[#64ffda] text-[14px] font-calibri mb-3">
                  {ref.role}
                </p>
                <ul className="bg-transparent list-none space-y-1.5">
                  <li className="bg-transparent text-[#a8b2d1] text-[14px] font-calibri">
                    <span className="bg-transparent text-[#8892b0]">Email:</span>{" "}
                    <a href={`mailto:${ref.email}`} className="bg-transparent text-[#64ffda] viewArchive">
                      {ref.email}
                    </a>
                  </li>
                  {ref.phone && (
                    <li className="bg-transparent text-[#a8b2d1] text-[14px] font-calibri">
                      <span className="bg-transparent text-[#8892b0]">Phone:</span> {ref.phone}
                    </li>
                  )}
                  {ref.location && (
                    <li className="bg-transparent text-[#a8b2d1] text-[14px] font-calibri">
                      <span className="bg-transparent text-[#8892b0]">Location:</span> {ref.location}
                    </li>
                  )}
                  {ref.profiles && (
                    <li className="bg-transparent text-[#a8b2d1] text-[14px] font-calibri">
                      <span className="bg-transparent text-[#8892b0]">Profiles:</span>{" "}
                      {ref.profiles.map((profile, i) => (
                        <span key={i} className="bg-transparent">
                          <a
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent text-[#64ffda] viewArchive"
                          >
                            {profile.label}
                          </a>
                          {i < ref.profiles.length - 1 && " | "}
                        </span>
                      ))}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;