///  shows all the matches to the user
import React, { useEffect, useState } from "react";
import { useContract, useSigner, useProvider, useAccount } from "wagmi";
import {
  MatchCreator_CONTRACT_ADDRESS,
  Match_ABI,
} from "../../constants/constants";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Home.module.css";
import { ethers, utils } from "ethers";
