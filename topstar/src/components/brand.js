import React from 'react';
import { Box,  Image, Flex,  Heading, Text } from "@chakra-ui/core";

export function Brand() {
    return (
        <Flex alignItems='center'>
            <Image src='https://img.icons8.com/clouds/2x/github.png' />
            <Box ml='10px'>
                <Heading fontSize='25px'>TopStar</Heading>
                <Text color='gray.600'>Top starred repositories on GitHub</Text>
            </Box>
        </Flex>
    );
}
