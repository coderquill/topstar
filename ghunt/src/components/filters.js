import React, { useState, useEffect } from "react"; 
import { Box, Icon, Select, Button, Menu, MenuButton, MenuList, MenuItem, Stack } from "@chakra-ui/core";
import languages from '../data/languages.json';
import { FaTable, FaList } from "react-icons/fa";

export function Filters(props) {

    const {onViewChange, viewType, onDateJumpChange, dateJump, language, onLanguageChange } = props;
    
    
    
    return (
        <Stack isInline>
            <Select value={language} onChange={(e)=>onLanguageChange(e.target.value)}>
                {languages.map((language) => (
                    <option key={language.value} value={language.value}>{language.title}</option>
                ))}
            </Select>
            <Menu>
                <MenuButton 
                textAlign='left'
                w = '250px'
                justifyContent = 'flex-start'
                as={Button} 
                bg='white' 
                borderWidth={1} 
                px='15px' 
                fontWeight={400} 
                _focus={{boxShadow:'none'}}
                >
                <Icon name='calendar' mr={3}/>
                <Box as='span' textTransform="capitalize">{dateJump}</Box>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={()=>onDateJumpChange('day')}>Daily</MenuItem>
                    <MenuItem onClick={()=>onDateJumpChange('week')} >Weekly</MenuItem>
                    <MenuItem onClick={()=>onDateJumpChange('month')}>Monthly</MenuItem>
                    <MenuItem onClick={()=>onDateJumpChange('year')}>Yearly</MenuItem>
                </MenuList>
            </Menu>

            <Stack isInline spacing={0} borderBottomWidth={1} rounded='5px' alignItems='center' ml='10px'>
                <Button h='100%'
                   // onClick={() => setViewType('grid') }
                    onClick={()=>onViewChange('grid')}
                    fontWeight={400}
                    roundedRight={0}
                    bg = {viewType === 'grid' ? 'gray.200' : 'white'}
                    leftIcon={FaTable}
                >
                Grid
                </Button>
                <Button h='100%' 
                    onClick={() => onViewChange('list') }
                    fontWeight={400}
                    roundedLeft={0}
                     bg = {viewType === 'list' ? 'gray.200' : 'white'}
                    leftIcon={FaList}
                >
                 List
                </Button>
            </Stack>

        </Stack>
    );
}