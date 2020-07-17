import React from 'react';
import { Box, Flex } from "@chakra-ui/core";
import { PageHeader } from './components/page-header';
import { GroupTitle } from './components/group-title';

export function Feed() {
    return (
        <Box maxWidth='1200px' mx='auto'>
            <PageHeader />
            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTitle />
                <Box>

                </Box>
            </Flex>
        </Box>
    );
}