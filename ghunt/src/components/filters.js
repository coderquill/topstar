import React, { useState, useEffect } from "react";
import { Flex, Select, Button, Menu, MenuButton, MenuList, MenuItem, Stack } from "@chakra-ui/core";
import languages from '../data/languages.json';
import { FaTable, FaList } from "react-icons/fa";

export function Filters() {

    
    const [viewType, setViewType] = useState( 'grid' );
    
    

    return (
        <Stack isInline>
            <Select color='blue'>
                {languages.map((language) => (
                    <option value={language.value}>{language.title}</option>
                ))}
            </Select>
            <Menu>
                <MenuButton as={Button} bg='white' borderWidth={1} px='30px' fontWeight={400} leftIcon='calendar' >
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem >
                        Attend a Workshop
                </MenuItem>
                </MenuList>
            </Menu>

            <Stack isInline spacing={0} borderBottomWidth={1} rounded='5px' alignItems='center' ml='10px'>
                <Button h='100%'
                    onClick={() => setViewType('grid') }
                    fontWeight={400}
                    roundedRight={0}
                    bg = {viewType === 'grid' ? 'gray.200' : 'white'}
                    leftIcon={FaTable}
                >
                Grid
                </Button>
                <Button h='100%' 
                    onClick={() => setViewType('list') }
                    fontWeight={400}
                    roundedLeft={0}
                     bg = {viewType === 'list' ? 'gray.200' : 'white'}
                    leftIcon={FaList}
                >
                 List
                </Button>
            </Stack >

        </Stack >
    );
}