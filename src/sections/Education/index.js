import React from "react";
import { Box, Flex, Heading, Text } from "rebass";

import Row from "../../components/Row";
import Col from "../../components/Col";
import Spacer from "../../components/Spacer";
import File from "../../components/File";

const School = ({ school, degree, start, end, children }) => {
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
          {school}
        </Heading>
        <Heading
          as="h4"
          color="text.dark"
          fontSize={4}
          fontWeight="400"
          lineHeight="base"
        >
          {degree}
        </Heading>
        <Text as="span" color="text.soft">
          {start} - {end}
        </Text>
      </Col>
      <Col width={[3 / 3, 2 / 3]}>{children}</Col>
    </Row>
  );
};

const Education = () => {
  return (
    <Box>
      <Row>
        <Col shift={[0 / 3, 1 / 3]} width={[3 / 3, 2 / 3]}>
          <Heading as="h2" fontSize={[10, 11]}>
            Education
          </Heading>
        </Col>
      </Row>
      <Spacer height={["40px", "64px"]} />
      <School
        school="Aalto University"
        degree="Master of Computer Science"
        start="09/2019"
        end="05/2021"
      >
        <Text as="p" fontFamily="prose" fontSize={5}>
          I am currently finishing my master’s degree from Aalto University
          majoring in Machine Learning, Data Science and Artificial
          Intelligence. As of now, my GPA is 4.56.
        </Text>
        <Spacer height="32px" />
        <Flex mx={-3} mb={-4} flexWrap="wrap">
          <Box width={[1, 1 / 2]} mb={4}>
            <File
              name="Study records (2020)"
              type="pdf"
              url="https://markus-ylisiurunen.storage.googleapis.com/assets/aalto-study-records-2020.pdf"
            />
          </Box>
        </Flex>
      </School>
      <Spacer height={["32px", "40px"]} />
      <School
        school="Tampere University of Technology"
        degree="Bachelor of Computer Science"
        start="08/2016"
        end="05/2019"
      >
        <Text as="p" fontFamily="prose" fontSize={5}>
          I studied computer science, majored in software engineering and
          minored in machine learning. My GPA after the bachelor’s degree was
          4.56.
        </Text>
        <Spacer height="32px" />
        <Flex mx={-3} mb={-4} flexWrap="wrap">
          <Box width={[1, 1 / 2]} mb={4}>
            <File
              name="Bachelor's Thesis"
              type="pdf"
              url="https://markus-ylisiurunen.storage.googleapis.com/assets/tuni-bachelors-thesis.pdf"
            />
          </Box>
          <Box width={[1, 1 / 2]} mb={4}>
            <File
              name="Study records"
              type="pdf"
              url="https://markus-ylisiurunen.storage.googleapis.com/assets/tuni-study-records.pdf"
            />
          </Box>
        </Flex>
      </School>
    </Box>
  );
};

export default Education;
