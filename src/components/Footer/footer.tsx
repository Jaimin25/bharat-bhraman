import NextLink from "next/link";
import { FaFacebook, FaInstagram, FaLocationDot, FaPhone, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { TbDeviceLandlinePhone } from "react-icons/tb";

import { Box, Divider, Heading, Link, Stack, Text } from "@chakra-ui/react";

export default function FooterSection() {
  return (
    <Box>
      <Divider />
      <footer>
        <Box className="flex flex-col items-center space-y-4 bg-gray-900 px-4 py-8 text-center text-white">
          <Stack direction="column">
            <Heading fontSize="32px">
              <Link
                as={NextLink}
                href="/"
                _hover={{
                  underline: "none",
                }}
              >
                BharatBhraman
              </Link>
            </Heading>
            <Stack
              justifyContent="center"
              direction="row"
            >
              <Box>
                <FaFacebook className="h-6 w-6" />
              </Box>
              <Box>
                <FaInstagram className="h-6 w-6" />
              </Box>
              <Box>
                <FaXTwitter className="h-6 w-6" />
              </Box>
            </Stack>
          </Stack>
          <Box className="w-3/4 lg:w-1/3">
            <Divider />
          </Box>
          <Stack>
            <Box>
              <ul className="flex flex-wrap items-center justify-start gap-4  *:flex *:gap-2 sm:justify-center lg:mx-28 lg:px-20">
                <li>
                  <FaLocationDot className="h-6 w-6" />
                  <Text>Address</Text>
                </li>
                <li>
                  <TbDeviceLandlinePhone className="h-6 w-6" />
                  <Text>+91 120 5623234</Text>
                </li>
                <li>
                  <FaPhone className="h-6 w-6" />
                  <Text>+91 9424325523/67</Text>
                </li>
                <li>
                  <IoMdMail className="h-6 w-6" />
                  <Text>mail@bharatbhramantravels.in</Text>
                </li>
                <li>
                  <FaWhatsapp className="h-6 w-6" />
                  <Text>+91 98989 89898</Text>
                </li>
              </ul>
            </Box>
          </Stack>
          <Box className="w-3/4 lg:w-1/3">
            <Divider />
          </Box>
          <Text>©{new Date().getFullYear()} BharatBhraman, Pvt. Ltd. All rights reserved.</Text>
        </Box>
      </footer>
    </Box>
  );
}
