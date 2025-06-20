import React from "react";
// REMOVED Text from import
import { AbsoluteFill } from "remotion";
import { Alternative } from "./types";
import { AnswerOption } from "./AnswerOption";
interface QuestionSectionProps {
  titleText: string;
  alternativas: Alternative[];
  highlightStartFrame: number; // The frame *within this sequence* when highlighting starts
}

export const QuestionSection: React.FC<QuestionSectionProps> = ({
  titleText,
  alternativas,
  highlightStartFrame,
}) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-start", // Align to top
        alignItems: "center",
        padding: "120px 50px", // Top/Bottom padding, Left/Right padding
        backgroundColor: "white", // Ensure background is set if this is not the root
      }}
    >
      {/* Question Title - REPLACED Text with h2 tag */}
      <h2
        style={{
          fontSize: 85,
          color: "#386fb3",
          textAlign: "center",
          marginBottom: 80,
          lineHeight: 1.3,
          fontWeight: "bold",
          margin: 0, // Reset default h2 margin
        }}
      >
        {titleText}
      </h2>

      <img
        src={"/timer.png"}
        style={{
          height: 100,
          width: 100,
        }}
      />
      <img
        style={{
          height: 500,
          width: 500,
        }}
        src={
          "https://storage.googleapis.com/senales_transito/186114536368_970762033940.svg"
        }
      />

      {/* Answer Options Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%", // Take full width of padding area
          gap: 30, // Space between answer options
        }}
      >
        {alternativas.map((alt, index) => (
          <AnswerOption
            key={index} // Use index as key if no unique ID is available
            texto={alt.texto}
            correcta={alt.correcta}
            index={index} // Pass index for staggered animation
            highlightStartFrame={highlightStartFrame}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
