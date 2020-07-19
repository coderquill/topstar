import React from 'react';
import { Brand } from './brand';
import { Button, Flex, Stack, } from "@chakra-ui/core";
import { FaGithub,  FaLinkedin} from 'react-icons/fa';
import { RiStarSmileLine} from 'react-icons/ri';

export function PageHeader() {
    return (
        <Flex justifyContent='space-between' alignItems='center' pt='15px'>
            <Brand />
            <Stack isInline >
                <Button as="a" href="https://github.com/coderquill/githunt/tree/master/ghunt" target="_blank" leftIcon={FaGithub}>View Source</Button>
                <Button as="a" href="https://linkedin.com/in/rupali-kavale" target="_blank" leftIcon={FaLinkedin} variantColor='blue'>LinkedIn</Button>  
                <Button as="a" href="https://coderquill.github.io/Rupali-Kavale/" target="_blank" leftIcon={RiStarSmileLine} variantColor='red'>About Me</Button>           
            </Stack>
        </Flex>
    );
}