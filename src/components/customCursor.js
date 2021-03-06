import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalStateContext } from "../context/globalContext";
import { IconEye } from "./icons";

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: rgba(249, 144, 144, 1);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: 0.2s ease-out;
  transition-delay: 100ms;
  transition-property: width, height, border;
  pointer-events: none;
  cursor: none;
  z-index: 9999;
  display: block;

  span {
    display: none;
  }

  &.pointer {
    background: transparent !important;
    width: 32px;
    height: 32px;
    border: 3px solid var(--pink);
  }

  &.viewCase {
    width: 80px;
    height: 80px;
    background: rgba(249, 144, 144, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: block;
      font-size: 16px;
      font-weight: 500;
      color: white;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomCursor = () => {
  const { cursorType } = useGlobalStateContext();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const onMouseMove = (event) => {
    // const url = typeof window !== "undefined" ? window.location.pathname : "";
    // if (url === "/") {
    // setMousePosition({ x: event.clientX, y: event.clientY });
    // } else {
    // setMousePosition({ x: event.pageX, y: event.pageY });
    // }

    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <Cursor
      className={`${!!cursorType ? "hovered" : ""} ${cursorType}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    >
      <span>
        <IconEye />
      </span>
    </Cursor>
  );
};

export default CustomCursor;
