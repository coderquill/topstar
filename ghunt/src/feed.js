import React, {useState, useEffect} from 'react';
import { Box, Flex, SimpleGrid, Button } from "@chakra-ui/core";
import { PageHeader } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';
import { Repo } from './components/repo';
import moment from 'moment';
import useFetch from 'use-http/dist';

function transformFilters({ language, startDate, endDate }) {
    const transformedFilters = {};
    const languageQuery = language ? `language:${language} ` : "";
    const dateQuery = `created:${startDate}..${endDate}`;

    transformedFilters.q = languageQuery + dateQuery;
    transformedFilters.sort = "stars";
    transformedFilters.order = 'desc';
    
    return transformedFilters;
}


export function Feed() {

    const { loading, error, get } = useFetch('https://api.github.com',);
    
    const [viewType, setViewType] = useState('grid');
    const [dateJump, setDateJump] = useState('day');
    const [language, setLanguage] = useState();

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(moment().subtract(1, 'day').format());

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const endDate = moment().subtract(1, 'day').format();
        const startDate = moment(endDate).subtract(1, dateJump).format();
        
        setEndDate(endDate);
        setStartDate(startDate);

        
    }, [dateJump, language]);

    useEffect(() => {
        if (!startDate) {
            return;
        }

        const filters = transformFilters({ language, startDate, endDate });
        const filtersQuery = new URLSearchParams(filters).toString();



        get(`/search/repositories?${filtersQuery}`).then((res) => {
            setRepositories([
                ...repositories,
                {
                    startDate,
                    endDate,
                    items: res.items
                },
            ]);
        });
    }, [startDate]);

    return (
        <Box maxWidth='1200px' mx='auto'>
            <PageHeader />
            <Flex alignItems='center' justifyContent='space-between' mb = '25px'>
                <GroupTitle />
                <Filters
                    viewType={viewType}
                    onViewChange={setViewType}
                    dateJump={dateJump}
                    onDateJumpChange={setDateJump}
                    language={language}
                    onLanguageChange={setLanguage}
                />
            </Flex>
            <SimpleGrid columns={viewType==='list'? 1 : 3} spacing='15px'>
                <Repo isListView = {viewType==='list'?true:false}/>
                <Repo isListView = {viewType==='list'?true:false}/>
                <Repo isListView = {viewType==='list'?true:false}/>
                <Repo isListView = {viewType==='list'?true:false}/>
                <Repo isListView = {viewType==='list'?true:false}/>
                <Repo isListView = {viewType==='list'?true:false}/>
                <Repo isListView = {viewType==='list'?true:false}/>
                <Repo isListView = {viewType==='list'?true:false}/>
                <Repo isListView = {viewType==='list'?true:false}/>
                
            </SimpleGrid>
            <Flex alignItems='center' justifyContent='center' mt='20px' mb = '20px'>
                <Button variantColor='blue'>Load next group</Button>
            </Flex>
        </Box>
    );
}