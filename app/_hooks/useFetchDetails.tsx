"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { useToast } from "../_providers/toast-provider";

export default function useFetchDetails<T>(url: string, data: string) {
  const { toastError } = useToast();

  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [resData, setResData] = useState<T | undefined>();

  useEffect(() => {
    setIsFetching(true);
    (async () => {
      try {
        const res = await axios.get(url, {
          params: { data },
        });
        setIsFetching(false);

        if (res.data.statusCode === 200) {
          setResData(res.data.details);
        } else {
          toastError("Error", res.data.message);
        }
      } catch (error) {
        setIsFetching(false);
        toastError("Error", (error as Error).message);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { resData, isFetching };
}
