import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Intro } from "./Intro";
import { QuestionSection } from "./QuestionSection";
import { QuizData } from "./types"; // Import if you created types.ts
import { Logo } from "./HelloWorld/Logo";

interface MyVideoProps {
  data: QuizData;
  introDuration: number;
  questionDuration: number;
  highlightDuration: number;
}

export const MyVideo: React.FC<MyVideoProps> = ({
  data,
  introDuration,
  questionDuration,
  highlightDuration,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "white" }}>
      {" "}
      {/* Dark background */}
      {/* Intro Sequence */}
      <Sequence from={0} durationInFrames={introDuration}>
        <Logo />
        <Intro text={data.introText} />
      </Sequence>
      {/* Question and Answers Sequence */}
      {/* This sequence starts after the intro and runs for the remaining duration */}
      <Sequence
        from={introDuration}
        durationInFrames={questionDuration + highlightDuration}
      >
        <QuestionSection
          titleText={data.titleText}
          alternativas={data.alternativas}
          // Pass the frame index WITHIN this sequence when highlight should start
          highlightStartFrame={questionDuration}
        />
        <Logo />
      </Sequence>
      {/* Ending*/}
      <Sequence
        from={introDuration + questionDuration + highlightDuration}
        durationInFrames={400}
      >
        <Logo />

        <Intro text={"texto de salida"} />
      </Sequence>
    </AbsoluteFill>
  );
};
