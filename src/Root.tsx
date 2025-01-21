import "./tailwind.css";
import { Composition } from "remotion";
import { EducacionVial, myCompSchema } from "./EducacionVial";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
        id="EducacionVial"
        component={EducacionVial}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText:
            "¿Un filtro de aire sucio puede aumentar el consumo de combustible en un?",

          alternativas: [
            {
              texto: "1%",
              correcta: true,
            },
            {
              texto: "3%",
              correcta: true,
            },
            {
              texto: "2%",
              correcta: true,
            },
            {
              texto: "1.5%",
              correcta: true,
            },
          ],
        }}
      />
    </>
  );
};
