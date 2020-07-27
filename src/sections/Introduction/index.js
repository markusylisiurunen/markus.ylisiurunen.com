import React from "react";
import { GitHub, Linkedin } from "react-feather";
import { Flex, Text } from "rebass";

import Row from "../../components/Row";
import Col from "../../components/Col";

const Introduction = () => {
  return (
    <Row>
      <Col shift={[0, 1 / 3]} width={[3 / 3, 2 / 3]}>
        <Text as="p" fontFamily="prose" fontSize={6} mb={5}>
          Hi!
        </Text>
        <Text as="p" fontFamily="prose" fontSize={6}>
          I’m a detail-oriented software engineer with a passion for building
          high-quality solutions for real-world problems. Quality, impact and
          user experience are the aspects I consider to be the most important.
        </Text>
        <Flex mt={10} alignItems="center">
          <GitHub display="block" size="18px" />
          <Text
            as="a"
            href="https://github.com/markusylisiurunen"
            target="_blank"
            color="text.neutral"
            fontSize={4}
            fontWeight="400"
            ml={3}
          >
            Github
          </Text>
        </Flex>
        <Flex mt={4} alignItems="center">
          <Linkedin display="block" size="18px" />
          <Text
            as="a"
            href="https://www.linkedin.com/in/markus-ylisiurunen-654720174/"
            target="_blank"
            color="text.neutral"
            fontSize={4}
            fontWeight="400"
            ml={3}
          >
            Linkedin
          </Text>
        </Flex>
      </Col>
    </Row>
  );
};

export default Introduction;
