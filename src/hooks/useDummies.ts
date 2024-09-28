import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useDummies() {
  return useQuery({
    queryKey: ["dummy-data"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/dummies?populate=*`
      );
      const data = response.data;
      return data;
    },
  });
}
