import React, { useEffect, useRef, useState } from "react"
import { Flex, Box, Button, Text } from "rebass"

function getProbabilities(getProbability) {
  return Object.keys(Array.from({ length: 10 }).fill(null)).reduce(
    (result, number) => ({ ...result, [number]: getProbability(number) }),
    {}
  )
}

const MNISTCanvas = ({ width, height }) => {
  // define the scale factor for the canvas
  const scaleFactor = 2

  const canvasRef = useRef(null)

  // the pixel values for the 28x28 image
  const [pixels, setPixels] = useState(null)

  // prediction probabilities for each number
  const [probabilities, setProbabilities] = useState(getProbabilities(() => 0))

  useEffect(() => {
    if (!canvasRef.current) return

    // grab and initialise the canvas' context
    const ctx = canvasRef.current.getContext("2d")

    ctx.lineCap = "round"
    ctx.lineWidth = 40

    ctx.strokeStyle = "#000000"

    // initialise the canvas' state
    const canvasState = { drawing: false, previousX: 0, previousY: 0 }

    /**
     * Handle `mousedown` events.
     */
    function onMouseDown(event) {
      const { layerX, layerY } = event

      canvasState.drawing = true

      canvasState.previousX = layerX * scaleFactor
      canvasState.previousY = layerY * scaleFactor
    }

    /**
     * Handle `mousemove` events.
     */
    function onMouseMove(event) {
      if (!canvasState.drawing) return

      const { previousX, previousY } = canvasState

      let { layerX, layerY } = event

      layerX *= scaleFactor
      layerY *= scaleFactor

      // only draw a line if we've moved `n` pixels away from previous location
      const distance = Math.sqrt(
        (layerX - previousX) ** 2 + (layerY - previousY) ** 2
      )

      if (distance < 10) return

      // draw the line on the canvas
      ctx.moveTo(previousX, previousY)
      ctx.lineTo(layerX, layerY)

      ctx.stroke()

      // update previous location
      canvasState.previousX = layerX
      canvasState.previousY = layerY
    }

    /**
     * Handle `mouseup` events.
     */
    function onMouseUp() {
      if (!canvasState.drawing) return

      canvasState.drawing = false

      canvasState.previousX = 0
      canvasState.previousY = 0

      // update the pixels to be predicted
      setPixels(getPixels())
    }

    /**
     * Get the 28x28 pixel values from the canvas.
     */
    function getPixels() {
      const { width, height } = ctx.canvas

      // we need to find the 28x28 pixel values for the image
      // --> we define a block and "convolute" over the image
      const blockWidth = Math.floor(width / 28)
      const blockHeight = Math.floor(height / 28)

      // output will be an array of arrays (rows of columns)
      const output = []

      for (let y = 0; y < 28; y += 1) {
        output.push([])

        for (let x = 0; x < 28; x += 1) {
          const left = x * blockWidth
          const top = y * blockHeight

          const blockImageData = ctx.getImageData(
            left,
            top,
            blockWidth,
            blockHeight
          )

          // filter out the alpha channel only
          const blockPixels = blockImageData.data.filter(
            (_, index) => index % 4 === 3
          )

          // compute the average for the pixel values (normalized to [0-1])
          const blockPixelSum = blockPixels.reduce(
            (sum, value) => sum + value,
            0
          )

          const blockPixelValue = blockPixelSum / blockPixels.length / 255

          output[y].push(blockPixelValue)
        }
      }

      return output
    }

    // attach event listeners to the canvas
    canvasRef.current.addEventListener("mousedown", onMouseDown)
    canvasRef.current.addEventListener("mousemove", onMouseMove)
    canvasRef.current.addEventListener("mouseleave", onMouseUp)
    canvasRef.current.addEventListener("mouseup", onMouseUp)

    return () => {
      canvasRef.current.removeEventListener("mousedown", onMouseDown)
      canvasRef.current.removeEventListener("mousemove", onMouseMove)
      canvasRef.current.removeEventListener("mouseleave", onMouseUp)
      canvasRef.current.removeEventListener("mouseup", onMouseUp)
    }
  }, [canvasRef])

  useEffect(() => {
    if (!pixels) return

    /**
     * Method for fetching the predictions from the API.
     */
    async function predict() {
      const res = await fetch(
        process.env.UNDERSTANDING_GRADIENT_DESCENT_MNIST_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pixels),
        }
      )

      const probabilities = await res.json()

      setProbabilities(getProbabilities((number) => probabilities[number]))
    }

    predict().catch((error) => console.log(error))
  }, [pixels])

  /**
   * Clear the canvas.
   */
  function clearCanvas() {
    if (!canvasRef.current) return

    // clear the canvas
    const ctx = canvasRef.current.getContext("2d")

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.beginPath()

    // set probabilities back to 0
    setProbabilities(getProbabilities(() => 0))
  }

  return (
    <Flex
      sx={{
        alignItems: "flex-start",
        marginY: 16,
      }}
    >
      <Box
        sx={{
          borderColor: "border.subtle",
          borderRadius: "6px",
          borderStyle: "solid",
          borderWidth: "1px",
          height: `${height}px`,
          overflow: "hidden",
          width: `${width}px`,
        }}
      >
        <canvas
          width={2 * width}
          height={2 * height}
          style={{
            height: `${height}px`,
            width: `${width}px`,
          }}
          ref={canvasRef}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          paddingLeft: 4,
        }}
      >
        <Button
          sx={{
            backgroundColor: "transparent",
            borderColor: "border.subtle",
            borderRadius: "6px",
            borderStyle: "solid",
            borderWidth: "1px",
            color: "hsl(0, 60%, 48%)",
            fontSize: 3,
            height: "40px",
            outline: "none",
            paddingY: 0,
            transition: "border-color 256ms ease-out",
            width: "100%",

            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "hsl(0, 40%, 64%)",
            },

            "&:focus": {
              backgroundColor: "transparent",
            },
          }}
          onClick={clearCanvas}
        >
          Clear canvas
        </Button>
        <Box
          sx={{
            marginTop: 6,
          }}
        >
          {Object.entries(probabilities).map(([number, probability]) => (
            <Flex
              sx={{
                alignItems: "center",
                marginBottom: 2,
              }}
              key={number}
            >
              <Text width="16px">{number}</Text>
              <Box
                sx={{
                  backgroundColor: "bg.subtle",
                  borderRadius: "6px",
                  flexGrow: 1,
                  height: "12px",
                  marginX: 4,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "hsl(112, 40%, 48%)",
                    height: "100%",
                    width: `${probability * 100}%`,
                  }}
                />
              </Box>
              <Text width="96px" textAlign="right">
                {(probability * 100).toFixed(1)} %
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </Flex>
  )
}

export default MNISTCanvas
