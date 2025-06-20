import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Logo } from "./HelloWorld/Logo";
import { Subtitle } from "./HelloWorld/Subtitle";
import { Title } from "./HelloWorld/Title";
import { z } from "zod";
import { Alternativas } from "./HelloWorld/Alernativas";
import { MyAudio } from "./HelloWorld/Audio";
import { useState } from "react";

export const myCompSchema = z.object({
  introText: z.string(),
  titleText: z.string(),
  alternativas: z.array(
    z.object({
      texto: z.string(),
      correcta: z.boolean(),
    }),
  ),
});

export const EducacionVial: React.FC<z.infer<typeof myCompSchema>> = ({
  introText,
  titleText,
  alternativas,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Fade out the animation at the end
  const opacity = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 15],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const [actualView, setActualView] = useState<"pregunta" | "respuesta">(
    "pregunta",
  );

  // A <AbsoluteFill> is just a absolutely positioned <div>!
  return (
    <AbsoluteFill style={{ backgroundColor: "#2e75b6" }}>
      <AbsoluteFill style={{ opacity }}>
        <Logo />
        <MyAudio
          volume={1}
          audio="pregunta.mp3"
          setActualView={setActualView}
        />
        <MyAudio
          volume={0.6}
          audio="musica.mp3"
          setActualView={setActualView}
        />

        {actualView === "pregunta" ? (
          <Sequence from={0}>
            <Title titleText={titleText} />
          </Sequence>
        ) : null}

        {actualView === "respuesta" ? (
          <Sequence from={0}>
            <Title titleText={"Respuesta"} />
          </Sequence>
        ) : null}

        <Sequence from={0}>
          <Alternativas alternativas={alternativas} actualView={actualView} />
          <Subtitle />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
