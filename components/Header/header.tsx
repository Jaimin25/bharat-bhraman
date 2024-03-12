"use client";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { useSession } from "@/app/_providers/session-provider";
import { cn } from "@/app/_utils/cn";
import { Box, Heading, Link, Stack } from "@chakra-ui/react";

export default function HeaderSection() {
  const pathname = usePathname();

  const { isAuthSession } = useSession();

  const [viewAtTop, setViewAtTop] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scroll = window.scrollY;
      if (scroll > 64) {
        setViewAtTop(false);
      } else {
        setViewAtTop(true);
      }
    };
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 h-auto w-full bg-white text-black shadow-md transition",
        viewAtTop && pathname === "/" && "bg-transparent text-white shadow-none",
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
            {isAuthSession ? (
              <Link
                as={NextLink}
                href="/dashboard"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                as={NextLink}
                href="/auth/signin"
              >
                SignIn
              </Link>
            )}
          </Stack>
        </Box>
      </Box>
    </header>
  );
}
