import React from "react"
import PropTypes from "prop-types"
import { Box, Flex } from "rebass"

const Image = ({ src, alt }) => {
  return (
    <Flex
      sx={{
        alignItems: "center",
        flexDirection: "column",
        marginY: 10,
        width: "100%",
      }}
    >
      <Box as="img" src={src} alt={alt} sx={{ mt: 0, mb: 4 }} />
      <Box as="span" sx={{ color: "text.soft", fontSize: 3 }}>
        {alt}
      </Box>
    </Flex>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Image
