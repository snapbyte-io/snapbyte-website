import samfwLogo from "../assets/samfw.gif";

export interface CustomerReview {
  id: string;
  name: string;
  website: string;
  logo: {
    src: string;
  };
  bandwidthPBPerMonth: number;
  storageTB: number;
  satisfactionNote: string;
}

export const customers: CustomerReview[] = [
    {
        id: "samfw",
        name: "SamFW",
        website: "https://samfw.com/",
        logo: samfwLogo,
        bandwidthPBPerMonth: 1.5,
        storageTB: 900,
        satisfactionNote: "We have been using Snapbyte's services for 2 years. Very satisfied with the performance and support!",
    },
];