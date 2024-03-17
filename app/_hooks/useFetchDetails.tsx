"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { useToast } from "../_providers/toast-provider";

export default function useFetchDetails<T>(url: string, data: { key: string; value: string }[]) {
  const { toastError } = useToast();

  const [isFetchingDetails, setIsFetchingDetails] = useState<boolean>(true);
  const [resData, setResData] = useState<T | undefined>();

  useEffect(() => {
    setIsFetchingDetails(true);
    (async () => {
      const params = Object.fromEntries(data.map((item) => [item.key, item.value]));

      try {
        const res = await axios.get(url, {
          params: params,
        });
        setIsFetchingDetails(false);

        if (res.data.statusCode === 200) {
          setResData(res.data.details);
        } else {
          toastError("Error", res.data.message);
        }
      } catch (error) {
        setIsFetchingDetails(false);
        toastError("Error", (error as Error).message);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { resData, isFetchingDetails };
}
