import useSWRV from "swrv";

export const useSwrv = () => {
  const result = useSWRV("key", () => null);
  console.log("SWRV", result);
};
