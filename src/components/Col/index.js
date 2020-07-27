import React from "react";
import { Box } from "rebass";

function interpolateValueOrArray(values, interpolate) {
  return Array.isArray(values) ? values.map(interpolate) : interpolate(values);
}

const Col = ({ width, shift, children, ...props }) => {
  return (
    <Box
      width={interpolateValueOrArray(width, (v) => `${v * 100}%`)}
      ml={interpolateValueOrArray(shift, (v) => `${v * 100}%`)}
      sx={{
        flexGrow: 0,
        flexShrink: 0,
        mb: 6,
        px: 3,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

Col.defaultProps = {
  width: 1,
  shift: 0,
};

export default Col;
