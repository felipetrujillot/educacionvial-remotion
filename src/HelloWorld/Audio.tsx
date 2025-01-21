import { AbsoluteFill, Audio, staticFile } from "remotion";

export const MyAudio = ({
  audio,
  setActualView,
  volume = 1,
}: {
  audio: string;
  volume: number;

  setActualView: React.Dispatch<React.SetStateAction<"pregunta" | "respuesta">>;
}) => {
  const file = staticFile(audio);

  return (
    <AbsoluteFill>
      <Audio
        src={file}
        volume={volume}
        onEndedCapture={() => setActualView("respuesta")}
      />
    </AbsoluteFill>
  );
};
