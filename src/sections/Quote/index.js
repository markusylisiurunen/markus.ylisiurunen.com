import React from "react";
import { Box, Text } from "rebass";

import Row from "../../components/Row";
import Col from "../../components/Col";

const Quote = () => {
  return (
    <Row>
      <Col width={[3 / 3, 2 / 3]}>
        <Box
          sx={{
            position: "relative",
            pt: 6,
          }}
        >
          <Text
            as="span"
            sx={{
              color: "text.dark",
              fontFamily: "prose",
              fontSize: "256px",
              left: [-12, 0],
              lineHeight: "1",
              opacity: 0.04,
              position: "absolute",
              top: "-20px",
              zIndex: -9,
            }}
          >
            &rdquo;
          </Text>
          <Box as="blockquote" ml={[0, 10]}>
            <Text
              as="p"
              color="text.soft"
              fontFamily="prose"
              fontStyle="italic"
              fontSize={[8, 9]}
              lineHeight="1.4"
            >
              We are what we repeatedly do. Excellence, then, is not an act, but
              a habit.
            </Text>
            <Text
              as="footer"
              color="text.subtle"
              fontFamily="prose"
              fontStyle="italic"
              fontSize={4}
              mt={6}
            >
              Aristotle (or Will Durant)
            </Text>
          </Box>
        </Box>
      </Col>
    </Row>
  );
};

export default Quote;
