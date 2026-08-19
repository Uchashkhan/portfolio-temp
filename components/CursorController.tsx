"use client";

import { useEffect, useRef } from "react";

export function CursorController() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!cursor || !finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    const position = { x: -40, y: -40 };
    const target = { x: -40, y: -40 };
    let frame = 0;

    const render = () => {
      position.x += (target.x - position.x) * 0.18;
      position.y += (target.y - position.y) * 0.18;
      cursor.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(render);
    };

    const handleMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      cursor.classList.add("is-visible");

      const element = event.target as Element | null;
      const isInteractive = Boolean(
        element?.closest("a, button, .project-visual"),
      );
      cursor.classList.toggle("is-active", isInteractive);
    };

    const hide = () => {
      cursor.classList.remove("is-visible", "is-active");
    };

    root.classList.add("custom-cursor-ready");
    document.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("custom-cursor-ready");
      document.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <span ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor-dot" />
    </span>
  );
}
