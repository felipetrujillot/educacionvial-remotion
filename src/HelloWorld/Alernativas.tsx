import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { FONT_FAMILY } from "./constants";
import { z } from "zod";

const alternativasCss: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  fontWeight: "bold",
  fontSize: 100,
  textAlign: "center",
  position: "absolute",
  bottom: 300,
  color: "white",
  width: "100%",
};

const myCompSchema = z.object({
  alternativas: z.array(
    z.object({
      texto: z.string(),
      correcta: z.boolean(),
    }),
  ),
  actualView: z.string(),
});

export const Alternativas: React.FC<z.infer<typeof myCompSchema>> = ({
  alternativas,
  actualView,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill>
      <div style={{ opacity, ...alternativasCss }}>
        {alternativas.map((a, k) => {
          return (
            <p
              style={{
                border: "white",
                borderWidth: "3px",
              }}
            >
              {a.texto}
            </p>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
