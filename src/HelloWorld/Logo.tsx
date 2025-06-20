import { AbsoluteFill } from "remotion";

export const Logo = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          backgroundColor: "#386fb3",
          width: "100%",
          height: 250,
          display: "flex",
          gap: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://storage.googleapis.com/hubdesign-repositorio/public/uploads/1737416681713-educacionviallogo.png"
          style={{
            width: 150,
          }}
        />
        <h1
          style={{
            fontSize: 86,
            color: "white",
            margin: 0,
          }}
        >
          educacionvial.cl
        </h1>
      </div>
    </AbsoluteFill>
  );
};
