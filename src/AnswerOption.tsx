import React from "react";
import {
  useCurrentFrame,
  // REMOVED Spring from import
  spring, // ADDED spring function
  interpolate,
  interpolateColors,
  useVideoConfig,
} from "remotion";

interface AnswerOptionProps {
  texto: string;
  correcta: boolean;
  index: number; // Index for staggered animation
  highlightStartFrame: number; // Frame *within QuestionSection* when highlight begins
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  texto,
  correcta,
  index,
  highlightStartFrame,
}) => {
  const frame = useCurrentFrame(); // Frame *within* this AnswerOption component's timeline
  // Need fps for the spring function
  const { fps } = useVideoConfig(); // Import useVideoConfig

  // Staggered slide-in animation
  const delay = index * 5; // 5 frames delay per item
  const slideIn = spring({
    frame: frame - delay, // Start animation later based on index
    fps: fps, // Pass fps
    config: {
      damping: 20,
      stiffness: 100,
    },
    from: 100, // Start 100px to the right
    to: 0, // End at 0px translation
  });

  const opacityIn = spring({
    frame: frame - delay,
    fps: fps, // Pass fps
    config: {
      damping: 20,
      stiffness: 100,
    },
    from: 0,
    to: 1,
  });

  // Highlight animation
  // Only animate if it's the correct answer and frame is past highlight start
  const isHighlighting = correcta && frame >= highlightStartFrame;

  const highlightProgress = interpolate(
    frame,
    [highlightStartFrame, highlightStartFrame + 15], // Animate over 15 frames
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Interpolate background color for highlight
  const backgroundColor = isHighlighting
    ? interpolateColors(highlightProgress, [0, 1], ["#333", "#4CAF50"]) // Dark grey to Green
    : "#e99a3a"; // Default dark grey

  const borde = "#eeb443";
  // Interpolate border for highlight
  const borderColor = isHighlighting
    ? interpolateColors(highlightProgress, [0, 1], ["transparent", "#81C784"]) // Transparent to light green
    : "transparent"; // Default transparent

  // Interpolate scale slightly on highlight
  const scale = isHighlighting
    ? interpolate(highlightProgress, [0, 1], [1, 1.03])
    : 1;

  const numberToLetter = (n: number) => {
    if (n === 0) return "A";
    if (n === 1) return "B";
    if (n === 2) return "C";
    if (n === 3) return "D";
    if (n === 4) return "E";
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 80,
        minHeight: 130,
        padding: "0px 40px",
        width: "100%",
        boxSizing: "border-box",
        border: `5px solid #eeb443`,
        transform: `translateX(${slideIn}px) scale(${scale})`,
        opacity: opacityIn,
        transition:
          "border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease",
      }}
    >
      <div
        className="flex gap-4 items-center"
        style={{
          minHeight: 130,
        }}
      >
        <span
          style={{
            fontSize: 60,
            color: "white",
            textAlign: "left",
            lineHeight: 1.4,
            fontWeight: "bold",
            margin: 0,
          }}
        >
          {numberToLetter(index)}.
        </span>

        <div
          className="rounded-4 bg-white w-full px-4 h-full flex items-center"
          style={{
            minHeight: 130,
            borderRadius: 80,
            border: `5px solid #eeb443`,
          }}
        >
          <span
            style={{
              fontSize: 60,
              color: "#1d1d1b",
              textAlign: "left",
              lineHeight: 1.4,
              fontWeight: "bold",
              margin: 0,
              borderRadius: 80,
              minWidth: "100%",
              backgroundColor: "white",
            }}
          >
            {" "}
            {texto}
          </span>
        </div>
      </div>
    </div>
  );
};
