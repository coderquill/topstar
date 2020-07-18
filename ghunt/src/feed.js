import React from 'react';
import { Box, Flex, SimpleGrid, Button } from "@chakra-ui/core";
import { PageHeader } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';
import { Repo } from './components/repo';

export function Feed() {
    return (
        <Box maxWidth='1200px' mx='auto'>
            <PageHeader />
            <Flex alignItems='center' justifyContent='space-between'>
                <GroupTitle />
                <Filters/>
            </Flex>
            <SimpleGrid columns={1} spacing='15px'>
                <Repo isListView = {false}/>
                <Repo isListView = {false}/>
                <Repo isListView = {false}/>
                <Repo isListView = {false}/>
                <Repo isListView = {false}/>
                <Repo isListView = {false}/>
                <Repo isListView = {false}/>
                <Repo isListView = {false}/>
                <Repo isListView = {false}/>
            </SimpleGrid>
            <Flex alignItems='center' justifyContent='center' mt='20px' mb = '20px'>
                <Button variantColor='blue'>Load next group</Button>
            </Flex>
        </Box>
    );
}