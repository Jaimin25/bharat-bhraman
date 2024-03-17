"use client";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";

import { useSession } from "@/app/_providers/session-provider";
import { cn } from "@/app/_utils/cn";
import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

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
        "fixed top-0 z-50 h-auto w-full bg-white px-4 text-black shadow transition",
        viewAtTop && pathname === "/" && "bg-transparent text-white shadow-none",
      )}
    >
      <Box className="flex items-center p-2">
        <Box className="logo flex-1">
          <Heading>
            <Link
              as={NextLink}
              href="/"
              _hover={{
                underline: "none",
              }}
            >
              Logo
            </Link>
          </Heading>
        </Box>
        <Box className="hidden lg:block">
          <Stack
            gap="30px"
            direction="row"
          >
            <Link
              as={NextLink}
              href="/tour_packages"
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
                href="/user/dashboard"
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
        <Box className="flex items-center lg:hidden">
          <Menu>
            <MenuButton>
              <IoMdMenu className="h-6 w-6" />
            </MenuButton>
            <MenuList>
              <NextLink href="/tour_packages">
                <MenuItem color="black">Packages</MenuItem>
              </NextLink>
              <NextLink href="">
                <MenuItem color="black">Contact Us</MenuItem>
              </NextLink>
              <MenuItem color="black">
                {isAuthSession ? (
                  <NextLink href="/user/dashboard">Dashboard</NextLink>
                ) : (
                  <NextLink href="/auth/signin">SignIn</NextLink>
                )}
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </header>
  );
}
