import React from "react";
import { css } from "@emotion/core";
import { Box, Flex, Heading, Text } from "rebass";

import Row from "../../components/Row";
import Col from "../../components/Col";
import Spacer from "../../components/Spacer";

const Skill = ({ name, level }) => {
  return (
    <Flex
      tabIndex="-1"
      sx={{
        alignItems: "center",
        borderColor: "border.neutral",
        borderRadius: "20px",
        borderStyle: "solid",
        borderWidth: "1px",
        cursor: "pointer",
        height: ["34px", "36px"],
        mb: 4,
        mx: 2,
        outline: "none",
        position: "relative",
        px: [3, 4],
      }}
      css={css`
        &:hover .skill__level,
        &:focus .skill__level {
          opacity: 1;
          transform: translate3d(-50%, 0px, 0px);
        }
      `}
    >
      <Text as="span" fontWeight="500">
        {name}
      </Text>
      {level && (
        <Text
          as="span"
          className="skill__level"
          sx={{
            backgroundColor: "text.dark",
            borderRadius: "14px",
            height: "28px",
            left: "50%",
            lineHeight: "28px",
            opacity: 0,
            pointerEvents: "none",
            position: "absolute",
            px: 3,
            top: "-36px",
            transform: "translate3d(-50%, 8px, 0px)",
            transition: "opacity 120ms linear, transform 120ms ease-out",
          }}
        >
          <Text as="span" color="#FFFFFF" fontSize={2}>
            {level}
          </Text>
        </Text>
      )}
    </Flex>
  );
};

const SkillGroup = ({ title, description, children }) => {
  return (
    <Row>
      <Col width={[3 / 3, 1 / 3]}>
        <Heading
          as="h3"
          color="text.dark"
          fontSize={[4, 6]}
          fontWeight="500"
          lineHeight="base"
          mb={1}
        >
          {title}
        </Heading>
        <Text as="p" color="text.soft" mb={4}>
          {description}
        </Text>
      </Col>
      <Col width={[3 / 3, 2 / 3]}>
        <Flex flexWrap="wrap" mx={-2} mb={-4}>
          {children}
        </Flex>
      </Col>
    </Row>
  );
};

const Skills = () => {
  return (
    <Box>
      <Row>
        <Col shift={[0 / 3, 1 / 3]} width={[3 / 3, 2 / 3]}>
          <Heading as="h2" fontSize={[10, 11]}>
            Skills
          </Heading>
        </Col>
      </Row>
      <Spacer height={["40px", "64px"]} />
      <SkillGroup
        title="Languages"
        description="Languages that I know a thing or two about."
      >
        {[
          { name: "Javascript / Node.js", level: "Pro" },
          { name: "Typescript", level: "Pro" },
          { name: "Python", level: "Pro" },
          { name: "Go", level: "Comfortable" },
          { name: "HTML", level: "Pro" },
          { name: "CSS", level: "Pro" },
          { name: "Sass", level: "Pro" },
          { name: "SQL", level: "Pro" },
          { name: "C++", level: "Comfortable" },
          { name: "GraphQL", level: "Pro" },
          { name: "Java", level: "Used" },
          { name: "Scala", level: "Used" },
          { name: "C#", level: "Used" },
          { name: "R", level: "Comfortable" },
          { name: "PHP", level: "Comfortable" },
          { name: "Matlab", level: "Comfortable" },
        ].map((skill) => (
          <Skill name={skill.name} level={skill.level} key={skill.name} />
        ))}
      </SkillGroup>
      <Spacer height={["48px", "96px"]} />
      <SkillGroup
        title="Libraries"
        description="Libraries that I know a thing or two about."
      >
        {[
          { name: "React", level: "Pro" },
          { name: "Express.js", level: "Pro" },
          { name: "Vue", level: "Pro" },
          { name: "Apollo", level: "Pro" },
          { name: "Redux", level: "Pro" },
          { name: "Gatsby", level: "Pro" },
          { name: "Next.js", level: "Pro" },
          { name: "styled-components", level: "Pro" },
          { name: "styled-system", level: "Pro" },
          { name: "Emotion", level: "Pro" },
          { name: "Jest", level: "Pro" },
          { name: "node-postgres", level: "Pro" },
          { name: "Moment", level: "Pro" },
          { name: "Cypress", level: "Pro" },
          { name: "Hugo", level: "Comfortable" },
          { name: "sqlx", level: "Comfortable" },
          { name: "zap", level: "Comfortable" },
          { name: "NumPy", level: "Comfortable" },
          { name: "amqplib", level: "Comfortable" },
          { name: "io-ts", level: "Comfortable" },
          { name: "Puppeteer", level: "Comfortable" },
          { name: "Qt", level: "Comfortable" },
          { name: "scikit-learn", level: "Comfortable" },
          { name: "Django", level: "Used" },
          { name: "Akka", level: "Used" },
          { name: "And a lot more..." },
        ].map((skill) => (
          <Skill name={skill.name} level={skill.level} key={skill.name} />
        ))}
      </SkillGroup>
      <Spacer height={["48px", "96px"]} />
      <SkillGroup
        title="Others"
        description="Other tools that I know a thing or two about."
      >
        {[
          { name: "Docker", level: "Pro" },
          { name: "Microservices", level: "Pro" },
          { name: "Serverless", level: "Pro" },
          { name: "MongoDB", level: "Pro" },
          { name: "PostgreSQL", level: "Pro" },
          { name: "Pub/Sub", level: "Pro" },
          { name: "Figma", level: "Pro" },
          { name: "Websocket", level: "Pro" },
          { name: "Kubernetes", level: "Comfortable" },
          { name: "GCP", level: "Comfortable" },
          { name: "AWS", level: "Comfortable" },
          { name: "Nginx", level: "Comfortable" },
          { name: "RabbitMQ", level: "Comfortable" },
          { name: "Terraform", level: "Comfortable" },
          { name: "Ansible", level: "Comfortable" },
          { name: "Vagrant", level: "Comfortable" },
          { name: "Stripe", level: "Comfortable" },
          { name: "Shopify", level: "Comfortable" },
          { name: "Jenkins", level: "Used" },
          { name: "Spark", level: "Used" },
          { name: "And a lot more..." },
        ].map((skill) => (
          <Skill name={skill.name} level={skill.level} key={skill.name} />
        ))}
      </SkillGroup>
    </Box>
  );
};

export default Skills;
