import twitter_logo from "../../public//assets/X.png";
import youtube_logo from "../../public/assets/yt.png";
import medium_logo from "../../public/assets/Media.png";
import linkedin_logo from "../../public/assets/LinkedIn.png";
import reddit_logo from "../../public/assets/reddit_logo.png";
import telegram_logo from "../../public/assets/telegram_logo.png";
import discord_logo from "../../public/assets/discord_logo.png";
export const DESCRIPTION_LIST = [
  {
    heading: "Information gathering:",
    items: [
      {
        title:
          "Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.",
        subItems: [],
      },
      {
        title:
          "Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.",
        subItems: [],
      },
      {
        title:
          "Discussed client concerns and specific areas of focus for the audit.",
        subItems: [],
      },
    ],
  },
  {
    heading: "Manual Code Review:",
    items: [
      {
        title:
          "Conducted a line-by-line review of the smart contract code, focusing on:",
        subItems: [
          {
            title: "Vulnerability identification:",
            description:
              "Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues, etc",
          },
          {
            title: "Login flaws:",
            description:
              "Identifying inconsistencies or unintended behaviors in the code logic.",
          },
          {
            title: "Tokennomics correctness:",
            description:
              "Verifying if the code accurately implements the intended economic model and token distribution mechanisms.",
          },
          {
            title: "Solidity best practices:",
            description:
              "Compliance with secure coding standards and adherence to established guidelines.",
          },
        ],
      },
    ],
  },
  {
    heading: "Functional Testing:",
    items: [
      {
        title:
          "Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.",
        subItems: [],
      },
      {
        title:
          "Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.",
        subItems: [],
      },
      {
        title:
          "Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).",
        subItems: [],
      },
      {
        title:
          "Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.",
        subItems: [],
      },
    ],
  },
  {
    heading: "Automated Testing:",
    items: [
      {
        title:
          "Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.",
        subItems: [],
      },
      {
        title:
          "Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.",
        subItems: [],
      },
      {
        title:
          "Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.",
        subItems: [],
      },
    ],
  },
  {
    heading: "Reporting & Remediation:",
    items: [
      {
        title:
          "Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.",
        subItems: [],
      },
      {
        title:
          "Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.",
        subItems: [],
      },
      {
        title:
          "Collaborated with the CDP team to prioritize and address the identified issues.",
        subItems: [],
      },
      {
        title:
          "Conducted additional verification testing after vulnerability fixes were implemented.",
        subItems: [],
      },
    ],
  },
];

export const STARTEGY_LIST = [
  {
    heading: "Unauthorized Claim/Compound:",
    content:
      "Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.",
  },
  {
    heading: "Precision Loss in mintCDP():",
    content:
      "Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.",
  },
  {
    heading: "Multiplication Accuracy:",
    content:
      "Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.",
  },
  {
    heading: "Incorrect Share Allocation:",
    content:
      "The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.",
  },
  {
    heading: "Logic Error in Referral Handling:",
    content:
      "A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system",
  },
  {
    heading: "Referral Exploitation:",
    content:
      "Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.",
  },
];

export const REMEDIATION_LIST = [
  { item: "Implementation of reentrancy protection mechanisms." },
  {
    item: "Accurate handling of decimal values using established libraries or best practices.",
  },
  { item: "Revised calculations with proper scaling factors" },
  {
    item: "Fixing logic errors to ensure deposits and waiting periods are enforced.",
  },
  { item: "Addressing referral system vulnerabilities to prevent abuse." },
];

export const SOCIAL_LIST = [
  {
    title: "x",
    img: twitter_logo,
  },
  {
    title: "Linkedin",
    img: linkedin_logo,
  },
  {
    title: "Telegram",
    img: telegram_logo,
  },
  {
    title: "Reddit",
    img: reddit_logo,
  },
  {
    title: "Medium",
    img: medium_logo,
  },
  {
    title: "Discord",
    img: discord_logo,
  },
  {
    title: "Youtube",
    img: youtube_logo,
  },
];

export const AUDITS_LIST = [
  { title: "Ethereum Audit" },
  { title: "Polygon Audit" },
  { title: "BSC Audit" },
  { title: "Solana Audit" },
  { title: "NEAR Audit" },
  { title: "Algorand Audit" },
  { title: "Tezos Audit" },
  { title: "Hyperledger Fabric Audit" },
  { title: "L1 Audit" },
  { title: "Polkadot Audit" },
  { title: "Wallet Audit" },
  { title: "ZkSync Audit" },
  { title: "Starknet Audit" },
];

export const ECOSYSTEM_LIST = [
  { title: "QuillAI" },
  { title: "QuillCheck" },
  { title: "QuillShield" },
  { title: "QuillAcademy" },
  { title: "QuillMonitor" },
  { title: "Web3Suggest" },
  { title: "Explore All Tools" },
];

export const OTHER_SERVICES_LIST = [
  { title: "Red Teaming" },
  { title: "dApp Pentesting" },
  { title: "DeFi Diligence" },
  { title: "NFT Due Diligence" },
  { title: "Rug Pull Due Diligence" },
  { title: "Security Consultation" },
  { title: "Blockchain Forensics" },
  { title: "KYC (Know Your Customer)" },
];

export const QUICK_LINKS_LIST = [
  { title: "Pricing" },
  { title: "Audit Process" },
  { title: "Our Audits" },
  { title: "Testimonials" },
  { title: "Security Synopsis" },
  { title: "Blog" },
  { title: "Clients" },
  { title: "Careers" },
];

export const PROGRAMMES_LIST = [
  { title: "Refer-Earn-Secure" },
  { title: "WAGSI Grants" },
  { title: "Ambassador Program" },
  { title: "Partnership Program" },
];
