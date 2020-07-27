import React from "react";
import { css } from "@emotion/core";
import { Box, Heading, Text } from "rebass";

import * as feather from "react-feather";

import useDownload from "../../hooks/useDownload";

import Row from "../../components/Row";
import Col from "../../components/Col";

const Navigation = () => {
  const downloadCVOnClick = useDownload(
    "https://markus-ylisiurunen.storage.googleapis.com/assets/cv-markus-ylisiurunen.pdf"
  );

  return (
    <Row>
      <Col order={[2, 1]} width={[3 / 3, 1 / 3]}>
        <Heading
          as="h3"
          color="text.dark"
          fontSize={4}
          fontWeight="500"
          lineHeight="base"
        >
          Want to work together?
        </Heading>
        <Text
          as="a"
          href="mailto:markus.ylisiurunen@gmail.com"
          color="text.soft"
          fontSize={3}
          fontWeight="400"
        >
          markus.ylisiurunen@gmail.com
        </Text>
      </Col>
      <Col order={[3, 2]} width={[3 / 3, 1 / 3]}>
        <Heading
          as="h1"
          color="text.dark"
          fontSize={4}
          fontWeight="500"
          lineHeight="base"
          mt={[2, 0]}
        >
          Markus Ylisiurunen
        </Heading>
        <Heading
          as="h1"
          color="text.soft"
          fontSize={3}
          fontWeight="400"
          lineHeight="base"
        >
          Software Engineer,{" "}
          <Text
            as="a"
            href="https://reaktor.com"
            target="_blank"
            color="text.soft"
          >
            Reaktor
          </Text>
        </Heading>
      </Col>
      <Col
        display="flex"
        order={[1, 3]}
        alignItems="center"
        justifyContent={["flex-start", "flex-end"]}
        width={[3 / 3, 1 / 3]}
      >
        <Box
          as="button"
          sx={{
            alignItems: "center",
            backgroundColor: "transparent",
            borderColor: "border.subtle",
            borderRadius: "64px",
            borderStyle: "solid",
            cursor: "pointer",
            display: "flex",
            height: "48px",
            outline: "none",
            paddingX: 5,
            position: "relative",
            transform: "perspective(800px) translateZ(0px)",
            transition: "box-shadow 0.3s ease-out, transform 0.3s ease-out",

            "&:hover": {
              boxShadow: "0px 18px 32px -20px hsla(240, 24%, 24%, 0.4)",
              transform: "perspective(800px) translateZ(40px)",
            },
          }}
          css={css`
            border-width: 3px;

            &:before,
            &:after {
              border-radius: inherit;
              bottom: 0;
              content: "";
              left: 0;
              position: absolute;
              right: 0;
              top: 0;
            }

            &:before {
              animation: gradient 5s ease infinite;
              margin: -3px;
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
              z-index: -9;
            }

            &:hover {
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
          onClick={downloadCVOnClick}
        >
          <feather.FileText color="hsl(240, 8%, 64%)" size="17px" />
          <Text as="span" sx={{ fontWeight: "500", ml: 3 }}>
            Download CV
          </Text>
        </Box>
      </Col>
    </Row>
  );
};

export default Navigation;
