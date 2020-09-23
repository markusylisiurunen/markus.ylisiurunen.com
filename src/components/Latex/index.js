import React from "react"
import ReactLatex from "react-latex"

const Latex = ({ block, children }) => {
  return <ReactLatex displayMode={block}>{`$$${children}$$`}</ReactLatex>
}

export default Latex
