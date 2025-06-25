import iconCalculator from "../../assets/icon-calculator.svg";
import iconKarma from "../../assets/icon-karma.svg";
import iconSupervisor from "../../assets/icon-supervisor.svg";
import iconTeamBuilder from "../../assets/icon-team-builder.svg";
import type { ServicesProps } from "./types";

export const services: ServicesProps[] = [
  {
    title: "Supervisor",
    text: "Monitors activity to identify project roadblocks",
    icon: iconSupervisor,
    alt: "Supervisor icon",
  },
  {
    title: "Team Builder",
    text: "Scans our talent network to create the optimal team for your project",
    icon: iconTeamBuilder,
    alt: "Team Builder icon",
  },
  {
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality",
    icon: iconKarma,
    alt: "Karma icon",
  },
  {
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates",
    icon: iconCalculator,
    alt: "Calculator icon",
  },
];
