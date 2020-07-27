import React from "react";
import { Box, Flex, Text } from "rebass";

import * as feather from "react-feather";

import useDownload from "../../hooks/useDownload";

const File = ({ name, type, url }) => {
  const downloadOnClick = useDownload(url);

  return (
    <Box width="100%" px={3}>
      <Flex
        as="button"
        sx={{
          alignItems: "center",
          backgroundColor: "transparent",
          borderColor: "border.neutral",
          borderRadius: "6px",
          borderStyle: "solid",
          borderWidth: "1px",
          cursor: "pointer",
          height: "44px",
          outline: "none",
          px: 4,
          textAlign: "left",
          transition: "background 120ms linear",
          width: "100%",

          "&:hover": {
            backgroundColor: "bg.hover",
          },
        }}
        onClick={downloadOnClick}
      >
        <Box sx={{ color: "text.file" }}>
          <feather.DownloadCloud display="block" size="18px" />
        </Box>
        <Flex sx={{ flexGrow: 1, ml: 3 }}>
          <Text
            as="span"
            sx={{
              flexGrow: 1,
              flexShrink: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Text>
          <Text as="span" color="text.subtle" sx={{ flexShrink: 0 }}>
            .{type}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default File;
