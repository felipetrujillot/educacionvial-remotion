import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  // REMOVED Spring from import
  spring, // ADDED spring function
} from "remotion";

interface IntroProps {
  text: string;
}

export const Intro: React.FC<IntroProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig(); // Added fps needed for spring timing

  // Scale in effect using spring function
  const scale = spring({
    frame: frame,
    fps: fps, // Pass fps to the spring function
    config: {
      damping: 200,
      stiffness: 50,
    },
  });

  // Fade out effect towards the end
  const opacity = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <p
        style={{
          fontSize: 100,
          color: "#386fb3",
          textAlign: "center",
          lineHeight: 1.4,
          fontWeight: "bold",
          margin: 0,
        }}
      >
        {text}
      </p>
    </AbsoluteFill>
  );
};
