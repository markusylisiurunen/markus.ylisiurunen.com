import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { Box, Flex, Heading, Text } from "rebass";
import { ClassNames } from "@emotion/core";

import * as feather from "react-feather";

import Row from "../../components/Row";
import Col from "../../components/Col";
import Spacer from "../../components/Spacer";

const Card = ({ children }) => {
  const wrapper = useRef(null);
  const [props, set] = useSpring(() => ({
    xyz: [0, 0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <ClassNames>
      {({ css }) => (
        <animated.div
          className={css`
            align-items: stretch;
            display: flex;
            margin: 0px -6px;
            perspective: 800px;
            transform-style: preserve-3d;
            width: calc(100% + 12px);
          `}
          style={{
            zIndex: props.xyz.interpolate((x, y, z) => (z > 5 ? 999 : 0)),
          }}
        >
          <animated.div
            ref={wrapper}
            className={css`
              border-radius: 12px;
              border: solid 4px transparent;
              cursor: pointer;
              position: relative;
              transition: box-shadow 0.3s;
              width: 100%;
              will-change: transform;

              &:before,
              &:after {
                bottom: 0;
                content: "";
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
              }

              &:before {
                animation: gradient 5s ease infinite;
                border-radius: inherit;
                margin: -4px;
                opacity: 0;
                transition: opacity 0.3s;
                z-index: -99;

                background: linear-gradient(
                  -45deg,
                  #ee7752,
                  #e73c7e,
                  #23a6d5,
                  #23d5ab
                );

                background-size: 400% 400%;
              }

              &:after {
                background: #ffffff;
                border-radius: 9px;
                z-index: -9;
              }

              &:hover {
                box-shadow: 0px 56px 64px -48px hsla(240, 24%, 24%, 0.32);

                &:before {
                  opacity: 1;
                }
              }

              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}
            onMouseMove={(event) => {
              if (!wrapper.current) return;

              const bounding = wrapper.current.getBoundingClientRect();

              const [width, height, left, top] = [
                bounding.width,
                bounding.height,
                bounding.left,
                bounding.top,
              ];

              const [clientX, clientY] = [event.clientX, event.clientY];

              // transform the mouse position to range of [-1, 1]
              const offsetX = clientX - left;
              const offsetY = clientY - top;

              const x = -1 * (offsetY / (height / 2) - 1);
              const y = offsetX / (width / 2) - 1;

              // define multiplier for values in range of [-1, 1]
              const mult = 6;

              set({ xyz: [x * mult, y * mult, 40] });
            }}
            onMouseLeave={() => set({ xyz: [0, 0, 0] })}
            style={{
              transform: props.xyz.interpolate((x, y, z) => {
                return [
                  `translateZ(${z}px)`,
                  `rotateX(${x}deg)`,
                  `rotateY(${y}deg)`,
                ].join(" ");
              }),
            }}
          >
            {children}
          </animated.div>
        </animated.div>
      )}
    </ClassNames>
  );
};

const Project = ({ name, description, skills, icon, href }) => {
  return (
    <Card>
      <Box
        as="a"
        href={href}
        target="_blank"
        sx={{
          color: "inherit",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          px: 3,
          py: 5,
          textDecoration: "inherit",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mb: 5,
            }}
          >
            <Heading as="h3" fontSize={5} fontWeight="500">
              {name}
            </Heading>
            {icon}
          </Flex>
          <Text as="p">{description}</Text>
        </Box>
        <Flex sx={{ flexWrap: "wrap", mt: 6, mb: -2, mx: -1 }}>
          {skills.map((skill) => (
            <Flex
              sx={{
                alignItems: "center",
                borderColor: "border.neutral",
                borderRadius: "16px",
                borderStyle: "solid",
                borderWidth: "1px",
                height: "32px",
                mb: 2,
                mx: 1,
                px: 3,
              }}
              key={skill.name}
            >
              <Text as="span" fontSize={3} fontWeight="500">
                {skill.name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Card>
  );
};

const Projects = () => {
  return (
    <Box>
      <Row>
        <Col shift={[0 / 3, 1 / 3]} width={[3 / 3, 2 / 3]}>
          <Heading as="h2" fontSize={[10, 11]}>
            Projects
          </Heading>
        </Col>
      </Row>
      <Spacer height={["40px", "64px"]} />
      <Row alignItems="stretch">
        {[
          {
            name: "markus.ylisiurunen.com",
            description:
              "My personal website. Its purpose is to be my CV and present all relevant information in one place.",
            skills: ["React", "Next.js"],
            repository: {
              github:
                "https://github.com/markusylisiurunen/markus.ylisiurunen.com",
            },
          },
          {
            name: "hi.markus.im",
            description:
              "My (old) personal website. Its purpose was to be my CV and present all relevant information in one place.",
            skills: ["React", "Gatsby", "GraphQL"],
            repository: {
              github: "https://github.com/markusylisiurunen/hi.markus.im",
            },
          },
          {
            name: "Timeline",
            skills: ["Node.js", "Google APIs", "CLI"],
            description: "A CLI tool for tracking time based on labels.",
            repository: {
              github: "https://github.com/markusylisiurunen/timeline",
            },
          },
          {
            name: "CLI",
            skills: ["Node.js", "CLI"],
            description:
              "A minimal framework for building fully-featured CLI applications. Work in progress.",
            repository: {
              github: "https://github.com/markusylisiurunen/cli",
            },
          },
          {
            name: "Bouncing Box",
            skills: ["JavaScript", "Game"],
            description:
              "A Flappy Bird clone which was built with Vanilla JS for the browser.",
            repository: {
              gitlab:
                "https://gitlab.com/markusylisiurunen/wsd-2018-bouncing-box",
            },
          },
          {
            name: "Git Stats",
            skills: ["Node.js", "CLI", "Git"],
            description:
              "A CLI tool for getting contribution statistics for a Git repository.",
            repository: {
              github: "https://github.com/markusylisiurunen/git-stats",
            },
          },
          {
            name: "Car Accident Analysis",
            skills: ["Scala", "Apache Spark", "K-Means"],
            description:
              "Analysis of car accidents in Finland. This was a course assignment and is based on the K-Means algorithm.",
            repository: {
              gitlab:
                "https://gitlab.com/markusylisiurunen-school/tie-22307-data-intensive-programming",
            },
          },
          {
            name: "Live Support Widget",
            skills: ["Design", "Figma"],
            description:
              "A design project for an embeddable live chat support widget.",
            repository: {
              gitlab: "https://gitlab.com/markusylisiurunen/live-support",
            },
          },
          {
            name: "Markdown Table",
            skills: ["Node.js", "CLI"],
            description:
              "A tiny helper library for printing markdown compatible tables to terminal.",
            repository: {
              github: "https://github.com/markusylisiurunen/md-table",
            },
          },
          {
            name: "Vilkkulaattori",
            skills: ["Javascript", "HTML", "CSS"],
            description:
              "A small utility web application for a course for testing a pseudo programming language.",
            repository: {
              gitlab: "https://gitlab.com/markusylisiurunen/vilkkulaattori",
            },
          },
          {
            name: "Spring Simulation",
            skills: ["Python"],
            description: "A small spring simulation experiment in Python.",
            repository: {
              gitlab: "https://gitlab.com/markusylisiurunen/jousi-simulaatio",
            },
          },
        ].map((project) => (
          <Col
            width={[3 / 3, 1 / 3]}
            display="flex"
            alignItems="stretch"
            justifyItems="stretch"
            key={project.name}
          >
            <Project
              name={project.name}
              description={project.description}
              skills={project.skills.map((skill) => ({ name: skill }))}
              icon={
                project.repository.github ? (
                  <feather.GitHub display="block" size="20px" />
                ) : (
                  <feather.Gitlab display="block" size="20px" />
                )
              }
              href={project.repository.github || project.repository.gitlab}
            />
          </Col>
        ))}
      </Row>
    </Box>
  );
};

export default Projects;
