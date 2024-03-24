"use client";

import { useEffect, useState } from "react";

import { Package } from "@prisma/client";

export default function usePackagesFilter(query: string, list: Package[]) {
  const [filteredList, setFilteredList] = useState<Package[]>();

  useEffect(() => {
    if (!list) return;
    const filtered = list.filter(
      (item) =>
        item.packageTitle.toLowerCase().includes(query.toLowerCase()) ||
        item.locations.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredList(filtered);
  }, [query, list]);

  return { filteredList };
}
