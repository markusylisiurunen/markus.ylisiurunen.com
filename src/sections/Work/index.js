import React from "react";
import { Box, Flex, Heading, Text } from "rebass";

import Row from "../../components/Row";
import Col from "../../components/Col";
import File from "../../components/File";
import Spacer from "../../components/Spacer";

const Workplace = ({ employer, title, start, end, children }) => {
  return (
    <Row>
      <Col width={[3 / 3, 1 / 3]}>
        <Heading
          as="h3"
          color="text.dark"
          fontSize={[4, 6]}
          fontWeight="500"
          lineHeight="base"
        >
          {employer}
        </Heading>
        <Heading
          as="h4"
          color="text.dark"
          fontSize={4}
          fontWeight="400"
          lineHeight="base"
        >
          {title}
        </Heading>
        <Text as="span" color="text.soft">
          {start} - {end}
        </Text>
      </Col>
      <Col width={[3 / 3, 2 / 3]}>{children}</Col>
    </Row>
  );
};

const Work = () => {
  return (
    <Box>
      <Row>
        <Col shift={[0 / 3, 1 / 3]} width={[3 / 3, 2 / 3]}>
          <Heading as="h2" fontSize={[10, 11]}>
            Work
          </Heading>
        </Col>
      </Row>
      <Spacer height={["40px", "64px"]} />
      <Workplace
        employer="Reaktor"
        title="Software Engineer"
        start="06/2020"
        end="09/2020"
      >
        <Text as="p" fontFamily="prose" fontSize={5} mb={4}>
          I was part of a team building a new e-commerce experience for a
          customer. We had to find clever ways to utilise existing solutions and
          build new capabilities on top of them. The project was fast-paced,
          very agile and iterative and we had a strict timeline for hitting the
          milestones in order to be on time for launch.
        </Text>
      </Workplace>
      <Spacer height={["32px", "40px"]} />
      <Workplace
        employer="Reaktor"
        title="Software Engineer"
        start="06/2019"
        end="09/2019"
      >
        <Text as="p" fontFamily="prose" fontSize={5}>
          I was part of a team with a total of two UI/UX designers and two
          developers building a web application with speech recognition
          capabilities for a customer from the ground up in about 3 months. I
          had to work with all aspects of the stack and take responsibility for
          many parts of the project.
        </Text>
      </Workplace>
      <Spacer height={["32px", "40px"]} />
      <Workplace
        employer="Intopalo Digital"
        title="Software Engineer"
        start="05/2017"
        end="06/2019"
      >
        <Text as="p" fontFamily="prose" fontSize={5} mb={4}>
          I was part of various customer projects doing front-end, back-end,
          architecture, DevOps and more. I had the opportunity to grow, learn
          new technologies and contribute to various projects during the time I
          was part of the team at Intopalo Digital.
        </Text>
        <Text as="p" fontFamily="prose" fontSize={5}>
          I received a certificate of appreciation which is given to few
          employees annually for their contributions during the last year.
        </Text>
        <Spacer height="32px" />
        <Flex mx={-3} mb={-4} flexWrap="wrap">
          <Box width={[1, 1 / 2]} mb={4}>
            <File
              name="Certificate of Appreciation"
              type="pdf"
              url="https://markus-ylisiurunen.storage.googleapis.com/assets/intopalo-certificate-of-appreciation.pdf"
            />
          </Box>
          <Box width={[1, 1 / 2]} mb={4}>
            <File
              name="Recommendation Letter"
              type="pdf"
              url="https://markus-ylisiurunen.storage.googleapis.com/assets/intopalo-recommendation-letter.pdf"
            />
          </Box>
        </Flex>
      </Workplace>
    </Box>
  );
};

export default Work;
