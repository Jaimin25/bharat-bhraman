import { Box, Heading } from "@chakra-ui/react";

export default function HeaderSection() {
  return (
    <header className="fixed h-auto w-screen bg-white shadow-md">
      <Box padding="8px">
        <Heading>Logo</Heading>
      </Box>
    </header>
  );
}
