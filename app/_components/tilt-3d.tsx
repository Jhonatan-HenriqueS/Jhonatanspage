"use client";

import {
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  projectId: string;
};

export function Tilt3D({
  children,
  className,
  maxTilt = 15,
  perspective = 1200,
  projectId,
}: Tilt3DProps) {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const surface = surfaceRef.current;

    if (!surface) return;

    gsap.set(surface, {
      force3D: true,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transformOrigin: "center center",
    });

    return () => {
      gsap.killTweensOf(surface);
      gsap.set(surface, { clearProps: "transform" });
    };
  }, []);

  useEffect(() => {
    const surface = surfaceRef.current;

    if (!surface || !reduceMotion) return;

    gsap.killTweensOf(surface);
    gsap.set(surface, { clearProps: "transform" });
  }, [reduceMotion]);

  const handleMouseEnter = () => {
    const surface = surfaceRef.current;

    if (!surface || reduceMotion) return;

    gsap.to(surface, {
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
      scale: 0.985,
    });
  };

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const surface = surfaceRef.current;

    if (!surface || reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    const distanceFromCenter = Math.min(
      1,
      Math.hypot(normalizedX, normalizedY) / Math.SQRT2,
    );

    gsap.to(surface, {
      duration: 0.35,
      ease: "power2.out",
      force3D: true,
      overwrite: "auto",
      rotateX: -normalizedY * maxTilt,
      rotateY: normalizedX * maxTilt,
      scale: gsap.utils.interpolate(0.985, 0.955, distanceFromCenter),
    });
  };

  const handleMouseLeave = () => {
    const surface = surfaceRef.current;

    if (!surface) return;

    gsap.killTweensOf(surface);
    gsap.to(surface, {
      duration: reduceMotion ? 0 : 0.6,
      ease: "elastic.out(1, 0.5)",
      force3D: true,
      onComplete: () => {
        gsap.set(surface, { clearProps: "transform" });
      },
      overwrite: true,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
  };

  const handlePointerEnter = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const section = event.currentTarget.closest<HTMLElement>(
      ".systems-section",
    );

    if (section) section.dataset.activeProject = projectId;
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const section = event.currentTarget.closest<HTMLElement>(
      ".systems-section",
    );

    if (section?.dataset.activeProject === projectId) {
      delete section.dataset.activeProject;
    }
  };

  return (
    <motion.div
      className={className}
      data-tilt-project={projectId}
      initial={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: `${perspective}px` }}
    >
      <div
        ref={surfaceRef}
        style={{
          height: "100%",
          transformStyle: "preserve-3d",
          willChange: "transform",
          width: "100%",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
