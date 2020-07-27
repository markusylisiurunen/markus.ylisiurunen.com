import React from "react";
import { Box } from "rebass";

const Aligner = ({ display, shift }) => {
  return (
    <Box
      sx={{
        borderLeftColor: "bg.subtle",
        borderLeftStyle: "dashed",
        borderLeftWidth: "1px",
        bottom: 0,
        display: display,
        left: `calc(24px + ${shift} * calc(min(1240px, 100vw) - 48px))`,
        position: "absolute",
        top: 0,
        width: 0,
        zIndex: -999,
      }}
    />
  );
};

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "1240px",
        mx: "auto",
        position: "relative",
        px: 6,
        width: "100%",
      }}
    >
      <Box sx={{ px: 3 }}>{children}</Box>

      <Aligner display="block" shift={0 / 3} />
      <Aligner display={["none", "block"]} shift={1 / 3} />
      <Aligner display={["none", "block"]} shift={2 / 3} />
      <Aligner display="block" shift={3 / 3} />
    </Box>
  );
};

export default Container;
