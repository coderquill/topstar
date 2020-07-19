import React from 'react';
import { Flex, Spinner } from '@chakra-ui/core';


export const Loader = () => (
    <Flex
        position="fixed"
        left={0}
        right={0}
        bottom={0}
        tom={0}
        alignItems="center"
        justifyContent="center"
        bg="white"
        zIndex={999}
    >
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />

    </Flex>
);

