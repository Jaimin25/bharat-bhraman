import { LayoutGrid } from "@/components/Home/FeatureSection/SubSections/best-india-tours";
import North_India_Banner_Image from "@/public/feature_section_banners/North_India_Banner_Image.jpg";
import South_India_Banner_Image from "@/public/feature_section_banners/South_India_Banner_Image.jpg";
import West_India_Banner_Image from "@/public/feature_section_banners/West_India_Banner_Image.png";
import { Box, Heading } from "@chakra-ui/react";

export default function FeatureSection() {
  const card = [
    {
      id: 1,
      content: "East India Tour",
      className: "h-auto",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Buddha_statue_at_Buddha_Park_of_Ravangla%2C_Sikkim%2C_India_%281%29.jpg",
    },
    {
      id: 2,
      content: "West India Tour",
      className: "h-auto lg:col-span-2",
      thumbnail: West_India_Banner_Image,
    },
    {
      id: 3,
      content: "South India Tour",
      className: "h-auto lg:col-span-2",
      thumbnail: South_India_Banner_Image,
    },
    {
      id: 4,
      content: "Central India Tour",
      className: "h-auto",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/003_Front_View_%2833709016166%29.jpg/393px-003_Front_View_%2833709016166%29.jpg",
    },
    {
      id: 5,
      content: "North India Tour",
      className: "h-full lg:h-[60%] lg:col-span-3",
      thumbnail: North_India_Banner_Image,
    },
  ];
  return (
    <Box className="my-10 w-full">
      <Box textAlign="center">
        <Heading size="lg">Best India Tours</Heading>
      </Box>
      <div>
        <LayoutGrid cards={card} />
      </div>
    </Box>
  );
}
