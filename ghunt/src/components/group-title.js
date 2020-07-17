import React from 'react';
import { Box, Text } from "@chakra-ui/core";

export function GroupTitle() {
    return (
        <Text fontSize='24px' fontWeight={700}>
            This week <Text fontSize='15px' fontWeight={500} color='gray.500' ml='5px' as='span'>17th july 2020 </Text>
        </Text>
    );
}