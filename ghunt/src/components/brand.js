import React from 'react';
import { Box,  Image, Flex,  Heading, Text } from "@chakra-ui/core";

export function Brand() {
    return (
        <Flex alignItems='center'>
            <Image src='/logo.png' />
            <Box ml='10px'>
                <Heading fontSize='25px'>GitHunt</Heading>
                <Text color='gray.600'>Most starred projects on GitHub</Text>
            </Box>
        </Flex>
    );
}