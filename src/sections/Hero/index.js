import React from "react";
import { useSpring, animated, config } from "react-spring";
import { Box, Heading } from "rebass";

import useAnimationSequence from "../../hooks/useAnimationSequence";

const Letter = ({ letter, delayIn, delayOut, show }) => {
  const STATE_IN = { opacity: 1, shift: 0 };
  const STATE_OUT = { opacity: 0, shift: 64 };

  const animation = useSpring({
    config: config.wobbly,
    from: STATE_OUT,
    to: show ? STATE_IN : STATE_OUT,
    delay: show ? delayIn : delayOut,
  });

  return (
    <animated.span
      style={{
        display: "inline-block",

        opacity: animation.opacity.interpolate((v) =>
          v < 0.2 ? 0 : (v - 0.2) * (1 / (1 - 0.2))
        ),

        transform: animation.shift.interpolate(
          (v) => `translate3d(0px, ${v}px, 0px)`
        ),
      }}
    >
      {letter}
    </animated.span>
  );
};

const Hero = () => {
  const words = ["Develop", "Design", "Craft", "Learn", "Iterate"];

  const state = useAnimationSequence(
    5000,
    [
      {
        at: 0,
        reducer: (_, [meta, setMeta]) => {
          const nextIndex = meta.word + 1 === words.length ? 0 : meta.word + 1;

          setMeta({ ...meta, word: nextIndex });

          return {
            letters: words[nextIndex]
              .split("")
              .map((letter) => ({ letter, show: true })),
          };
        },
      },
      {
        at: 4000,
        reducer: (state) => ({
          letters: state.letters.map((letter) => ({ ...letter, show: false })),
        }),
      },
    ],
    { letters: [] },
    { word: -1 }
  );

  return (
    <Box
      sx={{
        // this is a bit of a hack because I did not want to break the container
        ml: "calc(-1 * ((100vw - min(1240px, 100vw)) / 2 + 36px))",

        width: "100vw",
      }}
    >
      <Heading
        as="h2"
        fontSize="min(348px, 23vw)"
        fontWeight="800"
        textAlign="center"
      >
        {state.letters.length === 0 ? (
          <span>&nbsp;</span>
        ) : (
          state.letters.map(({ letter, show }, i) => (
            <Letter
              letter={letter}
              show={show}
              delayIn={i * 50}
              delayOut={i * 50} // Note: animate out from the end: (state.letters.length - 1) * 50 - i * 50
              key={state.letters
                .map(({ letter }) => letter)
                .join("")
                .slice(0, i)}
            />
          ))
        )}
      </Heading>
    </Box>
  );
};

export default Hero;
