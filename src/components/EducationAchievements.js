import React, { useEffect, useRef, useState } from "react";

const EducationAchievements = () => {
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
      id="EDUCATIONDIV"
      className={`ml-12 mr-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
    >
      <div
        ref={refTitle}
        className={`contentContainer ${titleVisible ? "show" : ""} pt-[5.538rem] relative`}
      >
        <div className="inline-block absolute top-[6.7rem] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
          02.
        </div>{" "}
        <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
          Education & Achievements
          <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen4:hidden"></div>
        </div>
        <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[#303c55] workScreen4:hidden workScreen6:left-[305px] workScreen7:w-[22rem]"></div>
      </div>

      <div className="relative py-4">
        <div className="contentContainer show">
          {/* Education */}
          <div className="mb-10">
            <h3 className="text-[#64ffda] text-[18px] font-calibri font-semibold mb-4">
              Education
            </h3>
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-[#ccd6f6] text-[18px] font-calibri font-semibold">
                University of Agriculture, Faisalabad
              </h4>
              <span className="text-[#8892b0] text-[14px] font-calibri">
                Faisalabad, PK
              </span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-[#a8b2d1] text-[15px] font-calibri">
                Bachelor of Science in Software Engineering &nbsp;|&nbsp; CGPA 3.52 / 4.0
              </span>
              <span className="text-[#8892b0] text-[14px] font-calibri">
                Sept 2020 – Oct 2024
              </span>
            </div>
            <ul className="list-none space-y-2">
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                Class standing: <b className="text-[#ccd6f6]">Top 3%</b> of 150+ students
              </li>
            </ul>
          </div>

          {/* Achievements & Awards */}
          <div className="mb-10">
            <h3 className="text-[#64ffda] text-[18px] font-calibri font-semibold mb-4">
              Achievements & Awards
            </h3>
            <ul className="list-none space-y-3">
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                Completed <a href="https://certificates.cs50.io/566e3a4c-1473-42e6-9dd7-98bcb3d552f6.pdf?size=letter" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Harvard University's CS50x</a> Puzzle Day with a perfect 9/9 score, ranking among the <b className="text-[#ccd6f6]">top teams worldwide</b>
              </li>
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                Selected as a <a href="https://digitalcredential.stanford.edu/check/252735118E37E7B5496F921A1143518F9F373B543A45B633A9C03AA0B6752357ZUdicW5vcDdKK0l0bzVDNGZYOHkwb01zY1FUZ0pjZ0VPc3hwY0liaTBtcmhCSFN0" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Section Leader (Teacher)</a> in <b className="text-[#ccd6f6]">Stanford University's</b> Code in Place Program among <b className="text-[#ccd6f6]">20,000+ applicants</b>, serving alongside 900 Section Leaders
              </li>
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                Selected for the <b className="text-[#ccd6f6]">first batch of interns</b> at <a href="https://www.linkedin.com/posts/abdullah-sultan-923883254_flyrankai-machinelearning-artificialintelligence-share-7476164788205633536-D3ar/" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">FlyRank AI</a> (Illinois Chicago, Remote) in the Machine Learning Engineering track (AI/ML)
              </li>
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                Participated in international hackathons hosted by <a href="https://lablab.ai/u/@Abdullah9862873/ai-hackathons/openclaw-surge-hackathon/certificate" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Lablab.ai</a> and <a href="https://devpost.com/ag9862873" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Devpost</a>, contributing innovative ideas to AI/ML-focused challenges
              </li>
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                Ranked in the <b className="text-[#ccd6f6]">top 6.5%</b> of LeetCoders | Solved <a href="https://leetcode.com/u/Abdullah9862873/" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">180+ LeetCode Problems</a>
              </li>
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                Achieved <b className="text-[#ccd6f6]">7.0 Bands</b> in <a href="https://drive.google.com/file/d/1FzsPy6j_X1gBv7hswPQ4ozDynG2OMUeb/view" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">IELTS</a> (CEFR C1) (L: 7.5, R: 7.5, W: 6.5, S: 6.5)
              </li>
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                Completed all 50 stars of <a href="https://github.com/Abdullah-9862873/Advent_of_Code" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Advent of Code 2024</a> | Demonstrated consistent problem-solving across 25 days
              </li>
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                Recipient of the <b className="text-[#ccd6f6]">Benevolent Fund Scholarship</b>, covering approximately <b className="text-[#ccd6f6]">40% of tuition fees</b> throughout the undergraduate degree
              </li>
            </ul>
          </div>

          {/* Academic Certifications */}
          <div className="mb-6">
            <h3 className="text-[#64ffda] text-[18px] font-calibri font-semibold mb-4">
              Academic Certifications
            </h3>
            <ul className="list-none space-y-3">
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                <a href="https://www.coursera.org/account/accomplishments/specialization/PVKPUG4LWEMB" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">IBM AI Engineering Specialization</a> &nbsp;|&nbsp; IBM &nbsp;|&nbsp; Apr 2026
              </li>
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                <a href="https://www.linkedin.com/in/abdullah-sultan-923883254/details/certifications/" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">Big Data and Data Science with Hadoop Eco Cloud System</a> &nbsp;|&nbsp; Arfa Karim Foundation, Pakistan &nbsp;|&nbsp; Sept 2021
              </li>
            </ul>
          </div>

          {/* Seminar */}
          <div className="mb-6">
            <h3 className="text-[#64ffda] text-[18px] font-calibri font-semibold mb-4">
              Seminar
            </h3>
            <ul className="list-none space-y-3">
              <li className="relative pl-6 text-[#a8b2d1] text-[15px] font-calibri leading-relaxed">
                <span className="absolute left-0 top-0 text-[#64ffda]">&#9654;</span>
                <b className="text-[#ccd6f6]">Invited Speaker</b> &nbsp;|&nbsp; Superior University, Lahore, Pakistan &nbsp;|&nbsp; Feb 2026
                <br />
                Panel with <a href="https://pk.linkedin.com/company/deepvision.ai" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">DeepVision AI</a> leadership team — Presented on production automation workflows built with n8n, covering how internal automations can be packaged and sold as standalone systems globally.
                <br />
                <a href="https://www.facebook.com/SuperiorOEC/posts/pfbid0KHw7A5AYhQVUHAta97qDeE8HWV4r8foXb6Mgs85znjMY439g6qjMiNNMdEURqqhYl" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:underline">View on Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAchievements;