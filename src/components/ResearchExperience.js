import React, { useEffect, useRef, useState } from "react";

const ResearchExperience = () => {
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

  return (
    <div
      id="RESEARCHDIV"
      className={`ml-12 mr-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
    >
      <div
        ref={refTitle}
        className={`contentContainer ${titleVisible ? "show" : ""} pt-[5.538rem] relative`}
      >
        <div className="inline-block absolute top-[6.7rem] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
          03.
        </div>{" "}
        <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
          Research Experience
          <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen4:hidden"></div>
        </div>
        <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[#303c55] workScreen4:hidden workScreen6:left-[305px] workScreen7:w-[22rem]"></div>
      </div>

      <div className="relative py-4">
        <div className="contentContainer show">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[#ccd6f6] text-[20px] font-calibri font-semibold">
              <span>Research Collaborator – NLP / Computational Linguistics</span>
            </h3>
            <span className="text-[#8892b0] text-[14px] font-calibri hidden md:block">
              Remote
            </span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-[#64ffda] text-[16px] font-calibri">
              Syntactic Morality Analyzer
            </h4>
            <span className="text-[#8892b0] text-[14px] font-calibri block md:hidden">
              Remote
            </span>
          </div>
          <div className="text-[#8892b0] text-[14px] font-calibri mb-2">
            <b>Advisors:</b>{" "}
            <a
              href="https://scholar.google.nl/citations?user=d_j5Pg4AAAAJ&hl=nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] hover:underline"
            >
              Prof. R. Weber
            </a>
            ,{" "}
            <a
              href="https://scholar.google.com/citations?user=UNL2osUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] hover:underline"
            >
              M. Malik
            </a>
          </div>
          <div className="text-[#8892b0] text-[14px] font-calibri mb-4">
            Apr 2026 – Present
          </div>
          <ul className="list-none space-y-2">
            <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
              <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
              Collaborating with Prof. René Weber and Musa Malik (UCSB) to extend their 2025 <b className="text-[#ccd6f6]">eMACD method</b> with context-aware dependency parsing for moral content analysis
            </li>
            <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
              <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
              Improved macro F1 by <b className="text-[#ccd6f6]">33%</b> over keyword baseline (0.335 to 0.446) using spaCy and logistic regression on the Moral Foundations Reddit Corpus (MFRC)
            </li>
            <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
              <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
              Achieved largest gains in relational foundations <b className="text-[#ccd6f6]">(Equality +77%, Care +35%)</b> by extracting 33-dimensional dependency-role features that distinguish moral agents (subjects) from moral patients (objects)
            </li>
            <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
              <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
              Drafting a manuscript based on these findings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResearchExperience;