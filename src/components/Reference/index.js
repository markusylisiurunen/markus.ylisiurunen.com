import React, { useState, useEffect, useContext, useMemo } from "react"

const referenceContext = React.createContext(null)

export function useReference(referenceId) {
  const { references } = useContext(referenceContext)
  const [reference, setReference] = useState(null)

  useEffect(() => {
    if (!references) {
      return
    }

    const reference = references.find(
      (reference) => reference.id === referenceId
    )

    if (reference) {
      setReference(reference)
    }
  }, [references])

  return reference
}

export function ReferenceProvider({ children }) {
  const [references, setReferences] = useState([])

  function registerReference({ id, author, url }) {
    setReferences((previousReferences) => {
      const index = previousReferences.length + 1
      return [...previousReferences, { index, id, author, url }]
    })
  }

  return (
    <referenceContext.Provider value={{ references, registerReference }}>
      {children}
    </referenceContext.Provider>
  )
}

const Reference = ({ id, author, url }) => {
  const { references, registerReference } = useContext(referenceContext)

  const reference = useMemo(
    () => references.find((reference) => reference.id === id),
    [references]
  )

  useEffect(() => {
    registerReference({ id, author, url })
  }, [])

  if (!reference) {
    return null
  }

  return (
    <div id={id}>
      [{reference.index}] {reference.author} (
      <a href={reference.url}>{reference.url}</a>)
    </div>
  )
}

export default Reference
