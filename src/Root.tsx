import "./tailwind.css";
import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";
import { QuizData } from "./types"; // Import if you created types.ts

// Your quiz data object
const quizDataItem: QuizData = {
  introText: "¿Sabes estas señales?",
  titleText: "¿Sabes qué indica esta señal de tránsito?",
  alternativas: [
    {
      texto: "Dirección obligada",
      correcta: false,
    },
    {
      texto: "Paso Vértice",
      correcta: true,
    },
    {
      texto: "Tránsito en ambos sentidos",
      correcta: false,
    },
    /*  {
      texto: "3",
      correcta: false,
    },
    {
      texto: "16",
      correcta: true,
    }, */
  ],
};

// Define the timing (in frames)
const fps = 30;
const introDuration = 1 * fps; // 2 seconds
const questionDuration = 5 * fps; // 5 seconds showing question and answers
const highlightDuration = 3 * fps; // 3 seconds highlighting the answer
const endDuration = 3 * fps; // 3 seconds highlighting the answer
const totalDuration =
  introDuration + questionDuration + highlightDuration + endDuration;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="QuizVideo"
        component={MyVideo}
        durationInFrames={totalDuration}
        fps={fps}
        width={1080}
        height={1920}
        defaultProps={{
          data: quizDataItem,
          introDuration,
          questionDuration,
          highlightDuration,
        }}
      />
      {/* You could add more compositions here for other questions */}
    </>
  );
};
