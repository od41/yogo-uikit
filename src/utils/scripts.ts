import { NextRouter } from "next/router";

export const switchPage = (link: string, router: NextRouter) => {
    router.push({ pathname: link }, undefined, {
      shallow: true,
    });
  };