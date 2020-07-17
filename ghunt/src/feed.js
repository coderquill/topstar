import React from 'react';
import { Box } from "@chakra-ui/core";
import { PageHeader } from './components/page-header';

export function Feed() {
    return (
        <Box maxWidth='1200px' mx='auto'>
            <PageHeader />
        </Box>
    );
}