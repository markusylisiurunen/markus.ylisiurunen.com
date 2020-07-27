import React from "react";
import { Flex } from "rebass";

const Row = ({ children, ...props }) => {
  return (
    <Flex sx={{ flexWrap: "wrap", mb: -4, mx: -3 }} {...props}>
      {children}
    </Flex>
  );
};

export default Row;
