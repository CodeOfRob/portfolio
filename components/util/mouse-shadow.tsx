"use client";

import { useEffect } from "react";

import "./mouse-shadow.css";

export default function MouseShadow() {
  useEffect(() => {
    const mouseShadow = document.querySelector(".mouse-shadow") as HTMLElement;
    document.addEventListener("mousemove", (e) => {
      mouseShadow.style.left = e.clientX + "px";
      mouseShadow.style.top = e.clientY + "px";
    });
  });
  return (
    <div className="fixed top-0 w-screen h-screen -z-10">
      <span className="fixed mouse-shadow" />
    </div>
  );
}
