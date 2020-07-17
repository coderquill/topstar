import React from 'react';
import { Brand } from './brand';
import { Button, Flex, Stack, } from "@chakra-ui/core";
import { FaGithub, FaChrome, FaTwitter } from 'react-icons/fa';

export function PageHeader() {
    return (
        <Flex justifyContent='space-between' alignItems='center' pt='15px'>
            <Brand />
            <Stack isInline >
                <Button leftIcon={FaGithub}>View Source</Button>
                <Button leftIcon={FaChrome} variantColor='red'>Use Extension</Button>
                <Button leftIcon={FaTwitter} variantColor='blue'>Tweet</Button>
            </Stack>
        </Flex>
    );
}