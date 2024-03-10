import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";

export default function FooterSection() {
  return (
    <Box>
      <Divider />
      <footer>
        <Box className="space-y-4 p-4 text-center">
          <Stack>
            <Heading>Logo</Heading>
          </Stack>
          <Text>©{new Date().getFullYear()} BharatBhraman, Pvt. Ltd. All rights reserved.</Text>
        </Box>
      </footer>
    </Box>
  );
}
