import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

// const data = {
//   isNew: true,
//   imageURL:
//     "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
//   //   name: "Wayfarer Classic",
//   price: 4.5,
//   rating: 4.2,
//   numReviews: 34,
//   details: "Women Java compat boot",
// };

function Rating({ rating, numReviews }) {
  return (
    <Box border={"0px solid red"} display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ShopBootSaleCard({
  isNew,
  name,
  imageURL,
  price,
  rating,
  numReviews,
  details,
}) {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      border="0px solid red"
      height={"400px"}
      padding={0}
    >
      <Box
        //   bg={useColorModeValue("white", "gray.800")}
        width="250px"
        height={{ base: "auto", md: "400px" }}
        border="0px solid red"
      >
        {isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          border={"0px solid green"}
          width={{ base: "60%", md: "80%" }}
          margin="auto"
          src={imageURL}
          alt={`Picture of ${name}`}
        />
        <br />

        <Box p="6" border={"0px solid blue"} width="100%">
          <Box>
            {isNew && (
              <Badge
                backgroundColor={"white"}
                px="2"
                fontSize="l"
                color="#0073ae"
              >
                Sale
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="center" alignContent="baseline">
            <Box fontSize="xl" fontWeight="bold" lineHeight="tight" isTruncated>
              {name}
            </Box>
          </Flex>

          <p>{details}</p>
          <Box alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {price}
            </Box>

            <Rating rating={rating} numReviews={numReviews} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default ShopBootSaleCard;