"use client";

import { useEffect, useState } from "react";
import { isInteger } from "formik";

import { Package } from "@prisma/client";

export default function usePackagesFilter(query: string, list: Package[]) {
  const [filteredList, setFilteredList] = useState<Package[]>();

  useEffect(() => {
    if (!list) return;
    let filtered: Package[];
    if (query.toLowerCase().includes("lowest to highest")) {
      filtered = list.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (query.toLowerCase().includes("highest to lowest")) {
      filtered = list.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (isInteger(query)) {
      filtered = list.filter((item) => Number(item.price) <= Number(query));
    } else {
      filtered = list.filter(
        (item) =>
          item.packageTitle.toLowerCase().includes(query.toLowerCase()) ||
          item.locations.toLowerCase().includes(query.toLowerCase()),
      );
    }

    setFilteredList(filtered);
  }, [query, list]);

  return { filteredList };
}
