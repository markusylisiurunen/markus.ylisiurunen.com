import React from "react";
import { Box } from "rebass";

const Divider = () => {
  return (
    <Box
      sx={{
        borderTopColor: "bg.subtle",
        borderTopStyle: "dashed",
        borderTopWidth: "1px",
        mx: -3,
      }}
    />
  );
};

export default Divider;
