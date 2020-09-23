import React from "react"
import { Box } from "rebass"

import { useReference } from "../Reference"

const Cite = ({ id }) => {
  const reference = useReference(id)

  if (!reference) {
    return null
  }

  return (
    <Box as="span" sx={{ whiteSpace: "nowrap" }}>
      [
      <Box as="a" href={`#${reference.id}`} sx={{ px: "2px" }}>
        {reference.index}
      </Box>
      ]
    </Box>
  )
}

export default Cite
