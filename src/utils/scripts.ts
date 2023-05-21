import { useRouter } from "next/router";

export const switchPage = (link: string) => {
    const router = useRouter()
    router.push({ pathname: link }, undefined, {
      shallow: true,
    });
  };