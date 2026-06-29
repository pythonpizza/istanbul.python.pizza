export type ProfileLink = {
  url: string;
  icon: string;
  label: string;
};

export const linkedInLink = (url: string): ProfileLink => ({
  url,
  icon: "/socials/linkedin.png",
  label: "LinkedIn",
});

export const githubLink = (url: string): ProfileLink => ({
  url,
  icon: "/socials/github.svg",
  label: "GitHub",
});

export const websiteLink = (url: string): ProfileLink => ({
  url,
  icon: "/socials/website.svg",
  label: "website",
});

export const twitterLink = (url: string): ProfileLink => ({
  url,
  icon: "/socials/twitter.png",
  label: "X/Twitter",
});
