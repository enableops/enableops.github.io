import React, { useState } from "react";

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";
import TerminalIcon from "@mui/icons-material/Terminal";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import Link from "@docusaurus/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#58a5f0",
      contrastText: "#fff",
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const duration = 12;
const timeToSwitch = 0.2;
const switchSpeed = 0.05;

const animatedBlock = (image, x, y, rotate) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    >
      <motion.div
        style={{ scale: 0.0 }}
        animate={{
          x: [0, x, x],
          y: [0, y, y],
          scale: [0.0, 0.5, 0.5],
          rotate: [0, rotate, rotate],
        }}
        transition={{
          times: [timeToSwitch, timeToSwitch + switchSpeed, 1],
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 0.95],
            rotate: [0, -1],
          }}
          transition={{
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img src={image} style={{ height: 300 }} alt="Logo" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const OverviewFlow = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid item md={5}>
            <Stack spacing={2} justifyContent="flex-start">
              <h1 style={{ fontSize: "2.9em" }}>
                Effortless GitOps, CI/CD on Kubernetes for developers
              </h1>
              <Link
                to="/docs/intro"
                className="button button--secondary button--lg"
              >
                Deploy dev and production in 15 min
              </Link>
              <span>
                🍰 <em>zero knowledge required </em>
              </span>
            </Stack>
          </Grid>
          <Grid
            item
            md={7}
            style={{ position: "relative", textAlign: "center" }}
          >
            {animatedBlock(
              "https://styles.redditmedia.com/t5_4wmnyu/styles/communityIcon_2pv56jvnhlh71.png",
              100,
              -100,
              12
            )}
            {animatedBlock(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1234px-Kubernetes_logo_without_workmark.svg.png",
              0,
              120,
              3
            )}
            {animatedBlock(
              "https://blogs.vmware.com/cloudprovider/files/2019/04/og-image-8b3e4f7d-blog-aspect-ratio.png",
              120,
              50,
              -10
            )}
            {animatedBlock(
              "https://miro.medium.com/max/566/1*CdKKJPCgmansKROEz_YufA.png",
              -50,
              -100,
              -15
            )}
            {animatedBlock(
              "https://miro.medium.com/max/918/1*xcQGl-ZqVIOGsfK9QX8fIA.png",
              -160,
              0,
              30
            )}
            <motion.div
              style={{ scale: 0.8 }}
              animate={{
                scale: [0.8, 0.1],
                x: [0, -20],
                y: [0, -20],
              }}
              transition={{
                times: [timeToSwitch, timeToSwitch + switchSpeed],
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 0.95],
                  rotate: [0, -1],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img
                  src="img/small-logo.png"
                  style={{ height: 300 }}
                  alt="Logo"
                />
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default OverviewFlow;
