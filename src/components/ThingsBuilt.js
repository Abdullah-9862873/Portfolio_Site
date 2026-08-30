import React, { useState, useEffect, useRef } from "react";
import "../Css_applied/thingsBuiltStyles.css";
import TypewriterEffect from "./TypewriterEffect";
import CrossfadeImage from "./CrossfadeImage";
import panaImage1 from "../images/panapdf/Screenshot 2026-02-22 010725.png";
import panaImage2 from "../images/panapdf/Screenshot 2026-02-22 010739.png";
import panaImage3 from "../images/panapdf/Screenshot 2026-02-22 010754.png"; 
import panaImage4 from "../images/panapdf/Screenshot 2026-02-22 010824.png";
import voicebiteImage1 from "../images/voicebite images/Screenshot 2026-02-22 005720.png";
import voicebiteImage2 from "../images/voicebite images/Screenshot 2026-02-22 005744.png";
import voicebiteImage3 from "../images/voicebite images/Screenshot 2026-02-22 005853.png";
import makingReposSpeakableImage1 from "../images/Making Repos Speakable/image1.png";
import makingReposSpeakableImage2 from "../images/Making Repos Speakable/image2.png";
import makingReposSpeakableImage3 from "../images/Making Repos Speakable/image3.png";
import safetyBoundaryImage1 from "../images/SafetyBoundary/1.jpg";
import safetyBoundaryImage2 from "../images/SafetyBoundary/2.jpg";
import openclawImage1 from "../images/Openclaw Guardian/1.png";
import openclawImage2 from "../images/Openclaw Guardian/2.png";
import openclawImage3 from "../images/Openclaw Guardian/3.png";

const ThingsBuilt = ({ workBtnClickedActive }) => {
  const panaImages = [panaImage1, panaImage2, panaImage3, panaImage4];
  const voicebiteImages = [voicebiteImage1, voicebiteImage2, voicebiteImage3];
  const makingReposSpeakableImages = [makingReposSpeakableImage1, makingReposSpeakableImage2, makingReposSpeakableImage3];
  const safetyBoundaryImages = [safetyBoundaryImage1, safetyBoundaryImage2];
  const openclawImages = [openclawImage1, openclawImage2, openclawImage3];

  // Hover On Icons
  const [firstThingGithubHover, setFirstThingGithubHover] = useState(false);
  const [voicebiteThingGithubHover, setVoicebiteThingGithubHover] = useState(false);
  const [makingReposSpeakableThingGithubHover, setMakingReposSpeakableThingGithubHover] = useState(false);
  const [makingReposSpeakableThingLinkHover, setMakingReposSpeakableThingLinkHover] = useState(false);
  const [safetyBoundaryThingGithubHover, setSafetyBoundaryThingGithubHover] = useState(false);
  const [openclawThingGithubHover, setOpenclawThingGithubHover] = useState(false);
  // Title Appear when Displayed
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleOne(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refOne.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleOne) {
      setTimeout(() => {
        setTitleVisible(true);
      }, 200);
    }
  });

  // First Thing Appear when Displayed
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [firstThingVisible, setFirstThingVisible] = useState(false);
  const refFirstThing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleTwo(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refFirstThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleTwo) {
      setTimeout(() => {
        setFirstThingVisible(true);
      }, 200);
    }
  });

  // Seventh Thing Appear when Displayed (Voicebite - Desktop)
  const [isVisibleEight, setIsVisibleEight] = useState(false);
  const [voicebiteThingVisible, setVoicebiteThingVisible] = useState(false);
  const refVoicebiteThing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleEight(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refVoicebiteThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleEight) {
      setTimeout(() => {
        setVoicebiteThingVisible(true);
      }, 200);
    }
  });

  // New Project Appear when Displayed (Making Repos Speakable)
  const [isVisibleNine, setIsVisibleNine] = useState(false);
  const [makingReposSpeakableThingVisible, setMakingReposSpeakableThingVisible] = useState(false);
  const refMakingReposSpeakableThing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleNine(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refMakingReposSpeakableThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleNine) {
      setTimeout(() => {
        setMakingReposSpeakableThingVisible(true);
      }, 200);
    }
  });

  // SafetyBoundary Project Appear when Displayed
  const [isVisibleTen, setIsVisibleTen] = useState(false);
  const [safetyBoundaryThingVisible, setSafetyBoundaryThingVisible] = useState(false);
  const refSafetyBoundaryThing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleTen(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refSafetyBoundaryThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleTen) {
      setTimeout(() => {
        setSafetyBoundaryThingVisible(true);
      }, 200);
    }
  });

  // OpenClaw Guardian Project Appear when Displayed
  const [isVisibleOpenclaw, setIsVisibleOpenclaw] = useState(false);
  const [openclawThingVisible, setOpenclawThingVisible] = useState(false);
  const refOpenclawThing = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleOpenclaw(true);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(refOpenclawThing.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisibleOpenclaw) {
      setTimeout(() => {
        setOpenclawThingVisible(true);
      }, 200);
    }
  });

  // For small Screen
  function isElementInViewportWithOffset(el, offset = 0) {
    let rect = el.getBoundingClientRect();
    let windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Check if the top of the element is inside the viewport with the specified offset
    let topInView = rect.top + offset >= 0 && rect.top + offset <= windowHeight;

    return topInView;
  }

  // First Thing
  window.addEventListener("scroll", function () {
    let element = document.getElementById("firstThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  // Third Thing
  window.addEventListener("scroll", function () {
    let element = document.getElementById("thirdThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  // Voicebite Mobile
  window.addEventListener("scroll", function () {
    let element = document.getElementById("voicebiteThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  // Making Repos Speakable Mobile
  window.addEventListener("scroll", function () {
    let element = document.getElementById("makingReposSpeakableThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  // SafetyBoundary Mobile
  window.addEventListener("scroll", function () {
    let element = document.getElementById("safetyBoundaryThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  // OpenClaw Guardian Mobile
  window.addEventListener("scroll", function () {
    let element = document.getElementById("openclawThing");
    if (element && isElementInViewportWithOffset(element)) {
      element.classList.add("show");
    }
  });

  // Handling when click on Work happens on the Navbar
  const [workNavClick, setWorkNavClick] = useState(false);
  useEffect(() => {
    setWorkNavClick(workBtnClickedActive);
  }, [workBtnClickedActive]);

  useEffect(() => {
    if (workNavClick) {
      var el = document.querySelector("#WORKDIV");
      var start = window.pageYOffset;
      var end = el.offsetTop;
      var duration = 1000;
      var easing = function (t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      var startTime = null;

      function animate(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var progress = easing(timeElapsed / duration);
        window.scroll(0, start + (end - start) * progress);
        if (timeElapsed < duration) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    }
  }, [workNavClick]);

  return (
    <div
      id="WORKDIV"
      className={` ml-12 mr-12 myScreen6:ml-[6.338rem] myScreen6:mr-[6.338rem] myScreen7:ml-[9.07rem] myScreen7:mr-[9.07rem]`}
    >
      <div
        ref={refOne}
        className={`contentContainer ${
          titleVisible ? "show" : ""
        } pt-[5.538rem] relative`}
      >
        <div className="inline-block absolute top-[6.7rem] text-[#64ffda] font-customMono text-headerDescriptionFontSize font-normal antialiased workScreen2:top-[6.5rem] workScreen3:top-[6.3rem]">
          05.
        </div>{" "}
        <div className="aboutMe inline-block mt-[2px] mb-10 ml-12 text-[#ccd6f6] text-[32px] font-calibri font-semibold antialiased relative z-[1] workScreen5:w-[12.7rem]">
          Some Things I've Built
          <div className="z-[1] w-[20px] inline-block h-[50px] absolute bottom-0 workScreen4:hidden"></div>
        </div>
        <div className="border-[1px] block box-content mb-[5px] ml-[2%] relative bottom-[60px] w-[48%] left-[47%] border-[#303c55] workScreen4:hidden workScreen6:left-[305px] workScreen7:w-[22rem]"></div>
      </div>
      {/* Things */}
      {/* Things when the Screen < 768 */}
      <div className={" block md:hidden"}>
        {/* SafetyBoundary Project - Mobile */}
        <div
          id="safetyBoundaryThing"
          className={`contentContainer show relative py-4 mb-8`}
        >
          <CrossfadeImage
            images={safetyBoundaryImages}
            interval={3000}
            className="h-[200px] w-full overflow-hidden rounded"
            alt="SafetyBoundary"
          />
          <div className="px-4 pt-4">
            <div className="text-[12px] text-[#64ffda] font-customMono">
              Featured Project
            </div>
            <div className="text-[22px] text-[#e6f1ff] font-calibri font-semibold">
              SafetyBoundary Detection
            </div>
            <div className="text-[15px] text-[#a8b2d1] font-calibri leading-[1.3] py-3">
              An experimental vision study inspired by Fail2Progress, learning from subtle and obvious safety failures using ResNet18 on COCO dataset
            </div>
            <TypewriterEffect
              tools={["PyTorch", "YOLOv8", "ResNet18", "scikit-learn", "NumPy", "OpenCV", "Albumentations", "Matplotlib", "Seaborn", "SciPy", "FastAPI", "Streamlit", "ReportLab"]}
              isRightAligned={false}
            />
            <div className="flex gap-4 mt-2">
              <a
                target="_blank"
                className="text-[#ccd6f6] w-[20px] h-[20px]"
                href="https://github.com/Abdullah-9862873/Professor_Tucker_Research"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* OpenClaw Guardian Project - Mobile */}
        <div
          id="openclawThing"
          className={`contentContainer show relative py-4 mb-8`}
        >
          <CrossfadeImage
            images={openclawImages}
            interval={3000}
            className="h-[200px] w-full overflow-hidden rounded"
            alt="OpenClaw Guardian"
          />
          <div className="px-4 pt-4">
            <div className="text-[12px] text-[#64ffda] font-customMono">
              Featured Project
            </div>
            <div className="text-[22px] text-[#e6f1ff] font-calibri font-semibold">
              OpenClaw Guardian
            </div>
            <div className="text-[15px] text-[#a8b2d1] font-calibri leading-[1.3] py-3">
              Autonomous AI agent that monitors GitHub repos for outdated npm dependencies, upgrades them, and creates pull requests
            </div>
            <TypewriterEffect
              tools={["Python", "GitHub API", "Flask", "PyYAML", "Requests", "Node.js", "npm"]}
              isRightAligned={false}
            />
            <div className="flex gap-4 mt-2">
              <a
                target="_blank"
                className="text-[#ccd6f6] w-[20px] h-[20px]"
                href="https://github.com/Abdullah-9862873/Github_Dependency_Checker"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="px-4 pt-4">
            <div className="text-[12px] text-[#64ffda] font-customMono">
              Featured Project
            </div>
            <div className="text-[22px] text-[#e6f1ff] font-calibri font-semibold">
              Making Repos Speakable
            </div>
            <div className="text-[15px] text-[#a8b2d1] font-calibri leading-[1.3] py-3">
              Give life to your repositories. Ask anything about any codebase.
            </div>
            <TypewriterEffect
              tools={["Groq", "Pinecone", "Sentence Transformers", "FastAPI", "Next.js", "TypeScript", "CSS"]}
              isRightAligned={false}
            />
            <div className="flex gap-4 mt-2">
              <a
                target="_blank"
                className="text-[#ccd6f6] w-[20px] h-[20px]"
                href="https://github.com/Abdullah-9862873/Making-Repos-Speakable"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                target="_blank"
                className="text-[#ccd6f6] w-[20px] h-[20px]"
                href="https://making-repos-speakable.vercel.app/"
                aria-label="External Link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* First Thing */}
        <div
          id="firstThing"
          className={`contentContainer show relative py-4 mb-8`}
        >
          <CrossfadeImage
            images={panaImages}
            interval={3000}
            className="h-[200px] w-full overflow-hidden rounded"
            alt="PanaPDF"
          />
          <div className="px-4 pt-4">
            <div className="text-[12px] text-[#64ffda] font-customMono">
              Featured Project
            </div>
            <div className="text-[22px] text-[#e6f1ff] font-calibri font-semibold">
              PanaPDF
            </div>
            <div className="text-[15px] text-[#a8b2d1] font-calibri leading-[1.3] py-3">
              A production ready application having many pdf alteration tools embedded
            </div>
            <TypewriterEffect
              tools={["Next.js", "Node.js", "TypeScript", "React", "PyPDF"]}
              isRightAligned={false}
            />
            <div className="flex gap-4 mt-2">
              <a
                target="_blank"
                className="text-[#ccd6f6] w-[20px] h-[20px]"
                href="https://www.panapdf.com/"
                aria-label="External Link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Voicebite Project - Mobile */}
        <div
          id="voicebiteThing"
          className={`contentContainer show relative py-4 mb-8 mt-8`}
        >
          <CrossfadeImage
            images={voicebiteImages}
            interval={3000}
            className="h-[200px] w-full overflow-hidden rounded"
            alt="VoiceBite"
          />
          <div className="px-4 pt-4">
            <div className="text-[12px] text-[#64ffda] font-customMono">
              Featured Project
            </div>
            <div className="text-[22px] text-[#e6f1ff] font-calibri font-semibold">
              VoiceBite
            </div>
            <div className="text-[15px] text-[#a8b2d1] font-calibri leading-[1.3] py-3">
              AI based application to order and navigate food items using voice
            </div>
            <TypewriterEffect
              tools={["OpenAI GPT APIs", "Speech Recognition", "FastAPI", "Python", "Next.js", "React", "TypeScript"]}
              isRightAligned={false}
            />
            <div className="flex gap-4 mt-2">
              <a
                target="_blank"
                href="https://github.com/Abdullah-9862873/voicebite"
                aria-label="GitHub Link"
                className="text-[#ccd6f6] w-[20px] h-[20px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
      {/* Things when the Screen >= 768 */}
      <div className={" hidden md:block"}>
        {/* SafetyBoundary Project - Desktop */}
        <div
          ref={refSafetyBoundaryThing}
          className={`contentContainer ${
            safetyBoundaryThingVisible ? "show" : ""
          } featured__StyledProject2 ml-[5%] mr-[5%]`}
        >
          <div className="project-content2 text-left text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased">
            <p>Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-left relative z-0 md:opacity-[1]">
              SafetyBoundary Detection
            </h3>
            <div className="description2 text-[18px] bg-[#172a45] shadow-none text-[#a8b2d1] font-calibri leading-[1.3] py-[10px] text-left relative z-20 rounded mb-[3%] mt-[7%] tbScreen40:px-[20px] tbScreen40:py-[20px]">
              <p className="text-[#a8b2d1] bg-[#172a45]">
                An experimental vision study inspired by Fail2Progress, learning from subtle and obvious safety failures using ResNet18 on COCO dataset. Overall accuracy improved from 46.67% to 77.78% (+31.11%) through class-weighted fine-tuning.
              </p>
            </div>
            <div className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-left max-w-[300px] whitespace-normal overflow-hidden h-[80px]">
              <TypewriterEffect
                tools={["PyTorch", "YOLOv8", "ResNet18", "scikit-learn", "NumPy", "OpenCV", "Albumentations", "Matplotlib", "Seaborn", "SciPy", "FastAPI", "Streamlit", "ReportLab"]}
                isRightAligned={false}
              />
            </div>
            <div className="tbScreen27:pr-[41px]">
              <a
                onMouseOver={() => setSafetyBoundaryThingGithubHover(true)}
                onMouseOut={() => setSafetyBoundaryThingGithubHover(false)}
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[14px] antialiased transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                href="https://github.com/Abdullah-9862873/Professor_Tucker_Research"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={safetyBoundaryThingGithubHover ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="project-image2"
          >
            <a href="https://github.com/Abdullah-9862873/Professor_Tucker_Research">
              <CrossfadeImage
                images={safetyBoundaryImages}
                interval={3000}
                className="w-full h-full"
                alt="SafetyBoundary"
              />
            </a>
          </div>
        </div>

        {/* OpenClaw Guardian Project - Desktop */}
        <div
          ref={refOpenclawThing}
          className={`contentContainer ${
            openclawThingVisible ? "show" : ""
          } featured__StyledProject ml-[5%] mr-[5%]`}
        >
          <div
            className="project-image"
          >
            <a href="https://github.com/Abdullah-9862873/Github_Dependency_Checker">
              <CrossfadeImage
                images={openclawImages}
                interval={3000}
                className="w-full h-full"
                alt="OpenClaw Guardian"
              />
            </a>
          </div>
          <div className="project-content text-right text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased ">
            <p className="tbScreen27:pr-[41px]">Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-right relative z-0 md:opacity-[1] mb-[7%] tbScreen27:pr-[41px] tbScreen26:mb-[0] tbScreen29:mb-[7%] tbScreen27:mb-[1%]">
              OpenClaw Guardian
            </h3>
            <div className="text-[18px] bg-[#172a45] text-[#a8b2d1] font-calibri leading-[1.3] text-right relative z-20 shadow-OtherProjectsBoxShadow rounded py-[20px] pl-[3%] pr-[8%] mb-[3%] tbScreen26:pl-[0] tbScreen26:pr-[0] tbScreen26:py-[25px] tbScreen26:mb-[0] tbScreen27:mb-[3%] tbScreen27:px-[10px] tbScreen27:py-[40px] tbScreen29:py-[20px] tbScreen29:inline-block tbScreen29:items-end tbScreen29:w-[80%]">
              <p className="bg-[#172a45]">
                Autonomous AI agent that monitors GitHub repos for outdated npm dependencies, upgrades them, and creates pull requests
              </p>
            </div>
            <div className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-right tbScreen27:pr-[41px] max-w-[300px] ml-auto whitespace-normal overflow-hidden h-[80px]">
              <TypewriterEffect
                tools={["Python", "GitHub API", "Flask", "PyYAML", "Requests", "Node.js", "npm"]}
                isRightAligned={true}
              />
            </div>
            <div className="tbScreen27:pr-[41px]">
              <a
                onMouseOver={() => setOpenclawThingGithubHover(true)}
                onMouseOut={() => setOpenclawThingGithubHover(false)}
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[14px] antialiased transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                href="https://github.com/Abdullah-9862873/Github_Dependency_Checker"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={openclawThingGithubHover ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Making Repos Speakable Project - Desktop */}
        <div
          ref={refMakingReposSpeakableThing}
          className={`contentContainer ${
            makingReposSpeakableThingVisible ? "show" : ""
          } featured__StyledProject2 ml-[5%] mr-[5%]`}
        >
          <div className="project-content2 text-left text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased">
            <p>Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-left relative z-0 md:opacity-[1]">
              Making Repos Speakable
            </h3>
            <div className="description2 text-[18px] bg-[#172a45] shadow-none text-[#a8b2d1] font-calibri leading-[1.3] py-[10px] text-left relative z-20 rounded mb-[3%] mt-[7%] tbScreen40:px-[20px] tbScreen40:py-[20px]">
              <p className="text-[#a8b2d1] bg-[#172a45]">
                Give life to your repositories. Ask anything about any codebase.
              </p>
            </div>
            <div className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-left max-w-[300px] whitespace-normal overflow-hidden h-[80px]">
              <TypewriterEffect
                tools={["Groq", "Pinecone", "Sentence Transformers", "FastAPI", "Next.js", "TypeScript", "CSS"]}
                isRightAligned={false}
              />
            </div>
            <div className="tbScreen27:pr-[41px]">
              <a
                onMouseOver={() => setMakingReposSpeakableThingGithubHover(true)}
                onMouseOut={() => setMakingReposSpeakableThingGithubHover(false)}
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[14px] antialiased transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                href="https://github.com/Abdullah-9862873/Making-Repos-Speakable"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={makingReposSpeakableThingGithubHover ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                onMouseOver={() => setMakingReposSpeakableThingLinkHover(true)}
                onMouseOut={() => setMakingReposSpeakableThingLinkHover(false)}
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[14px] ml-[10px] antialiased transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                href="https://making-repos-speakable.vercel.app/"
                aria-label="External Link"
              >
                <svg
                  className="svgGithubIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={makingReposSpeakableThingLinkHover ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="project-image2"
          >
            <a href="https://making-repos-speakable.vercel.app/">
              <CrossfadeImage
                images={makingReposSpeakableImages}
                interval={3000}
                className="w-full h-full"
                alt="Making Repos Speakable"
              />
            </a>
          </div>
        </div>

        {/* First Thing */}

        <div
          ref={refFirstThing}
          className={`contentContainer ${
            firstThingVisible ? "show" : ""
          } featured__StyledProject ml-[5%] mr-[5%]`}
        >
          <div className="project-content text-right text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased ">
            <p className="tbScreen27:pr-[41px]">Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-right relative z-0 md:opacity-[1] mb-[7%] tbScreen27:pr-[41px] tbScreen26:mb-[0] tbScreen29:mb-[7%] tbScreen27:mb-[1%]">
              PanaPDF
            </h3>
            <div className="text-[18px] bg-[#172a45] text-[#a8b2d1] font-calibri leading-[1.3] text-right relative z-20 shadow-OtherProjectsBoxShadow rounded py-[20px] pl-[3%] pr-[8%] mb-[3%] tbScreen26:pl-[0] tbScreen26:pr-[0] tbScreen26:py-[25px] tbScreen26:mb-[0] tbScreen27:mb-[3%] tbScreen27:px-[10px] tbScreen27:py-[40px] tbScreen29:py-[20px] tbScreen29:inline-block tbScreen29:items-end tbScreen29:w-[80%]">
              <p className="bg-[#172a45]">
                A production ready application having many pdf alteration tools embedded
              </p>
            </div>
            <div className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-right tbScreen27:pr-[41px] max-w-[300px] ml-auto whitespace-normal overflow-hidden h-[80px]">
              <TypewriterEffect
                tools={["Next.js", "Node.js", "TypeScript", "React", "PyPDF"]}
                isRightAligned={true}
              />
            </div>
            <div className="tbScreen27:pr-[41px]">
              <a
                onMouseOver={() => setFirstThingGithubHover(true)}
                onMouseOut={() => setFirstThingGithubHover(false)}
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[14px] antialiased transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                href="https://www.panapdf.com/"
                aria-label="External Link"
              >
                <svg
                  className="svgGithubIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={firstThingGithubHover ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="project-image"
          >
            <a href="https://www.panapdf.com/">
              <CrossfadeImage
                images={panaImages}
                interval={3000}
                className="w-full h-full"
                alt="PanaPDF"
              />
            </a>
          </div>
        </div>

        {/* Voicebite Project - Desktop */}
        <div
          ref={refVoicebiteThing}
          className={`contentContainer ${
            voicebiteThingVisible ? "show" : ""
          } featured__StyledProject2 ml-[5%] mr-[5%]`}
        >
          <div className="project-content2 text-left text-[13px] text-[#64ffda] font-customMono bg-transparent antialiased ">
            <p className="tbScreen27:pl-[41px]">Featured Project</p>
            <h3 className="bg-transparent text-[24px] text-[#e6f1ff] font-calibri font-semibold text-left relative z-0 md:opacity-[1] mb-[7%] tbScreen27:pl-[41px] tbScreen26:mb-[0] tbScreen29:mb-[7%] tbScreen27:mb-[1%]">
              VoiceBite
            </h3>
            <div className="text-[18px] bg-[#172a45] text-[#a8b2d1] font-calibri leading-[1.3] text-left relative z-20 shadow-OtherProjectsBoxShadow rounded py-[20px] pr-[3%] pl-[8%] mb-[3%] tbScreen26:pr-[0] tbScreen26:pl-[0] tbScreen26:py-[25px] tbScreen26:mb-[0] tbScreen27:mb-[3%] tbScreen27:px-[10px] tbScreen27:py-[40px] tbScreen29:py-[20px] tbScreen29:inline-block tbScreen29:items-start tbScreen29:w-[80%]">
              <p className="bg-[#172a45]">
                AI based application to order and navigate food items using voice
              </p>
            </div>
            <div className="bg-transparent text-[13px] text-[#a8b2d1] font-customMono text-left tbScreen27:pl-[41px] max-w-[300px] mr-auto whitespace-normal overflow-hidden h-[80px]">
              <TypewriterEffect
                tools={["OpenAI GPT APIs", "Speech Recognition", "FastAPI", "Python", "Next.js", "React", "TypeScript"]}
                isRightAligned={false}
              />
            </div>
            <div className="tbScreen27:pl-[41px]">
              <a
                onMouseOver={() => setVoicebiteThingGithubHover(true)}
                onMouseOut={() => setVoicebiteThingGithubHover(false)}
                target="_blank"
                className="inline-block text-[#ccd6f6] w-[20px] h-[20px] cursor-pointer mt-[14px] antialiased transition-whereIWorkedTransitionProperty ease-whereIWorkedTransitionTiming duration-whereIWorkedTransitionDuration"
                href="https://github.com/Abdullah-9862873/voicebite"
                aria-label="GitHub Link"
              >
                <svg
                  className="svgGithubIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={voicebiteThingGithubHover ? "#64ffda" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="project-image2"
          >
            <a href="https://github.com/Abdullah-9862873/voicebite">
              <CrossfadeImage
                images={voicebiteImages}
                interval={3000}
                className="w-full h-full"
                alt="VoiceBite"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThingsBuilt;
