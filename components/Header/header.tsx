"use client";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/app/_utils/cn";
import { Box, Heading, Link, Stack } from "@chakra-ui/react";

export default function HeaderSection() {
  const pathname = usePathname();

  const [viewAtTop, setViewAtTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      const scroll = window.scrollY;
      if (scroll > 0) {
        setViewAtTop(false);
      } else {
        setViewAtTop(true);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [viewAtTop, pathname]);

  return (
    <header
      className={cn(
        " fixed top-0 z-50 h-auto w-full text-white transition",
        !viewAtTop || (pathname !== "/" && "bg-white text-black shadow-md backdrop-blur-lg"),
      )}
    >
      <Box className="flex items-center p-2">
        <Box className="logo flex-1">
          <Link
            as={NextLink}
            href="/"
            _hover={{
              underline: "none",
            }}
          >
            <Heading>Logo</Heading>
          </Link>
        </Box>
        <Box>
          <Stack
            gap="30px"
            direction="row"
          >
            <Link
              as={NextLink}
              href=""
            >
              Packages
            </Link>
            <Link
              as={NextLink}
              href=""
            >
              Contact Us
            </Link>
            <Link
              as={NextLink}
              href="/auth/signin"
            >
              SignIn
            </Link>
          </Stack>
        </Box>
      </Box>
    </header>
  );
}
