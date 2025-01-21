import { AbsoluteFill } from "remotion";

export const Logo = ({}) => {
  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <img
          style={{
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 40,
            width: "30%",
          }}
          src="https://storage.googleapis.com/hubdesign-repositorio/public/uploads/1737416681713-educacionviallogo.png"
        />
      </AbsoluteFill>

      <AbsoluteFill>
        <div>
          <h1
            style={{
              paddingLeft: 340,
              paddingTop: 72,
              fontSize: 86,
              color: "white",
            }}
          >
            educacionvial.cl
          </h1>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
