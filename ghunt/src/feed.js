import React from 'react';
import { Brand } from './components/brand';
import { Box, Button, Image, Flex, Stack, Heading, Text } from "@chakra-ui/core";
import { FaGithub, FaChrome, FaTwitter, Fa500Px} from 'react-icons/fa';

export function Feed() {
    return (
        <Box maxWidth='1200px' mx='auto'>
            <Flex justifyContent='space-between' alignItems='center' pt = '15px'>
                <Brand/>
                <Stack isInline >
                    <Button leftIcon = {FaGithub}>View Source</Button>
                    <Button leftIcon = {FaChrome} variantColor='red'>Use Extension</Button>
                    <Button leftIcon = {FaTwitter} variantColor='blue'>Tweet</Button>
                </Stack>
            </Flex>
        </Box>
    );
}