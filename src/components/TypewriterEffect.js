import React, { useEffect, useRef } from "react";

const TYPE_SPEED = 50;
const DELETE_SPEED = 15;
const PAUSE_AFTER_TYPE = 3000;
const MIN_START_DELAY = 1000;
const MAX_START_DELAY = 5000;

const TypewriterEffect = ({ tools, isRightAligned }) => {
  const rootRef = useRef(null);
  const spanRef = useRef(null);
  const timersRef = useRef([]);
  const fullText = tools.join(", ");

  useEffect(() => {
    const span = spanRef.current;
    if (!span) return;

    let charIdx = 0;
    let cancelled = false;

    const clearAll = () => {
      timersRef.current.forEach((id) => {
        clearTimeout(id);
        clearInterval(id);
      });
      timersRef.current = [];
    };

    const addTimeout = (fn, ms) => {
      const id = setTimeout(() => {
        timersRef.current = timersRef.current.filter((t) => t !== id);
        if (!cancelled) fn();
      }, ms);
      timersRef.current.push(id);
      return id;
    };

    const addInterval = (fn, ms) => {
      const id = setInterval(() => {
        if (!cancelled) fn();
      }, ms);
      timersRef.current.push(id);
      return id;
    };

    const typeChar = () => {
      if (charIdx < fullText.length) {
        charIdx++;
        span.textContent = fullText.substring(0, charIdx);
        addTimeout(typeChar, TYPE_SPEED);
      } else {
        addTimeout(startDelete, PAUSE_AFTER_TYPE);
      }
    };

    const startDelete = () => {
      let text = fullText;
      addInterval(() => {
        if (text.length > 0) {
          text = text.slice(0, -1);
          span.textContent = text;
        } else {
          clearAll();
          charIdx = 0;
          addTimeout(typeChar, TYPE_SPEED);
        }
      }, DELETE_SPEED);
    };

    const delay = Math.floor(Math.random() * (MAX_START_DELAY - MIN_START_DELAY + 1)) + MIN_START_DELAY;

    addTimeout(() => {
      span.textContent = "";
      typeChar();
    }, delay);

    return () => {
      cancelled = true;
      clearAll();
    };
  }, [fullText]);

  const justifyClass = isRightAligned ? "justify-end" : "justify-start";
  const textAlignment = isRightAligned ? "text-right" : "text-left";

  return (
    <div
      ref={rootRef}
      className={`flex ${justifyClass} mt-2 h-[80px] items-center pointer-events-none overflow-hidden`}
    >
      <span
        ref={spanRef}
        className={`text-[12px] text-[#ccd6f6] font-customMono ${textAlignment} tracking-wide`}
      ></span>
      <span className="tech-typing-cursor"></span>
    </div>
  );
};

export default TypewriterEffect;
