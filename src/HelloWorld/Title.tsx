import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY } from "./constants";

const title: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  fontWeight: "bold",
  fontSize: 100,
  textAlign: "center",
  position: "absolute",
  top: 300,
  color: "white",
  width: "100%",
};

const word: React.CSSProperties = {
  marginLeft: 10,
  marginRight: 10,
  display: "inline-block",
};

export const Title: React.FC<{
  readonly titleText: string;
}> = ({ titleText }) => {
  const words = titleText.split(" ");

  return (
    <h1 style={title}>
      {words.map((t, i) => {
        return (
          <span
            key={t}
            style={{
              ...word,
              color: "white",
            }}
          >
            {t}
          </span>
        );
      })}
    </h1>
  );
};
