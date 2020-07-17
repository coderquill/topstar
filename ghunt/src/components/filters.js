import React from "react";
import { Flex, Select } from "@chakra-ui/core";
import languages from '../data/languages.json';

console.log(languages)
export function Filters(){

    return(
        <Flex>
            <Select color='blue'>
               {languages.map((language) => (
                <option value={language.value}>{language.title}</option>
               ))}
            </Select>
        </Flex>
    );
}