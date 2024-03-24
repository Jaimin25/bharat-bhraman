import { useEffect, useState } from "react";

import { Package } from "@prisma/client";

export default function usePackagesFilter(query: { type: string; value: string }, list: Package[]) {
  const [filteredList, setFilteredList] = useState<Package[]>();

  useEffect(() => {
    if (!list) return;
    let filtered: Package[] = list;

    if (query.type === "sort") {
      if (query.value.toLowerCase().includes("lowest to highest")) {
        filtered = list.sort((a, b) => Number(b.price) - Number(a.price));
      } else if (query.value.toLowerCase().includes("highest to lowest")) {
        filtered = list.sort((a, b) => Number(a.price) - Number(b.price));
      }
    }

    if (query.type === "budget") {
      if (Number(query.value) > 0) {
        filtered = list.filter((item) => Number(item.price) <= Number(query.value));
      }
    }

    if (query.type === "search") {
      filtered = list.filter(
        (item) =>
          item.packageTitle.toLowerCase().includes(query.value.toLowerCase()) ||
          item.locations.toLowerCase().includes(query.value.toLowerCase()),
      );
    }
    setFilteredList(filtered);
  }, [query, list]);

  return { filteredList };
}
