import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import Link from "@docusaurus/Link";

const duration = 6;
const timeToSwitch = 0.5;
const switchSpeed = 0.1;

const floatingBlock = (image, height, scale, x, y, rotate) => {
  const randTimeToSwitch = timeToSwitch * (1 + Math.random() * 0.15);
  const randSwitchSpeed = switchSpeed * (1 + Math.random() * 0.5);
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
        style={{ x: x[0], y: y[0], scale: scale[0], rotate: rotate[0] }}
        animate={{
          x: [x[0], x[1], x[1]],
          y: [y[0], y[1], y[1]],
          scale: [scale[0], scale[1], scale[1]],
          rotate: [rotate[0], rotate[1], rotate[1]],
        }}
        transition={{
          times: [randTimeToSwitch, randTimeToSwitch + randSwitchSpeed, 1],
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <motion.img
          src={image}
          style={{ height: height }}
          animate={{
            scale: [1, 1 - 0.05 * (Math.random() * 2 - 1)],
            rotate: [0, Math.random() * 2 - 1],
          }}
          transition={{
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </div>
  );
};

const OverviewFlow = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} alignItems="flex-end" justifyContent="center">
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
        <Grid item md={7} style={{ position: "relative", textAlign: "center" }}>
          {floatingBlock(
            "img/banner/vault.png",
            300,
            [0.0, 0.6],
            [80, 120],
            [30, -90],
            [0, 22]
          )}
          {floatingBlock(
            "img/banner/tested.png",
            50,
            [0.0, 0.72],
            [80, 189],
            [148, 78],
            [0, -18]
          )}
          {floatingBlock(
            "img/banner/gke.png",
            300,
            [0.0, 0.51],
            [80, 195],
            [30, 35],
            [0, -15]
          )}
          {floatingBlock(
            "img/banner/terraform.png",
            300,
            [0.0, 0.36],
            [80, 152],
            [30, 145],
            [0, 15]
          )}
          {floatingBlock(
            "img/banner/argocd.png",
            300,
            [0.0, 0.43],
            [80, 9],
            [30, -100],
            [0, -11]
          )}
          {floatingBlock(
            "img/banner/duplicate.png",
            50,
            [0.0, 0.72],
            [100, -50],
            [148, 78],
            [0, 20]
          )}
          {floatingBlock(
            "img/banner/prometheus.png",
            300,
            [0.0, 0.26],
            [80, -37],
            [30, 0],
            [0, 20]
          )}
          {floatingBlock(
            "img/banner/rollback.png",
            50,
            [0.0, 0.72],
            [100, -60],
            [148, 182],
            [0, -7]
          )}
          {floatingBlock(
            "img/banner/kubernetes.png",
            300,
            [0.0, 0.5],
            [80, 21],
            [30, 126],
            [0, 0]
          )}

          <motion.div
            style={{ scale: 0.8 }}
            animate={{
              scale: [0.8, 0.12],
              x: [0, 77],
              y: [0, 11],
              rotate: [0, 13],
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
                src="img/banner/enableops.svg"
                style={{ height: 300 }}
                alt="Logo"
              />
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OverviewFlow;
