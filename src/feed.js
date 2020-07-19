import React, { useState, useEffect } from 'react';
import { Box, Flex, SimpleGrid, Button } from "@chakra-ui/core";
import { PageHeader } from './components/page-header';
import { GroupTitle } from './components/group-title';
import { Filters } from './components/filters';
import { Repo } from './components/repo';
import { Loader } from './components/page-loader';
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

    const { loading, error, get } = useFetch('https://api.github.com');

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

        setRepositories([]);

    }, [dateJump, language]);

    useEffect(() => {
        if (!startDate) {
            return;
        }

        const filters = transformFilters({ language, startDate, endDate });
        const filtersQuery = new URLSearchParams(filters).toString();



        get(`/search/repositories?${filtersQuery}`).then((res) => {
            //reposirories has an object : {startDate, endDate, items:[](array of objects)}
            //console.log("res.item"+JSON.stringify(res.data.items));
            setRepositories([...repositories, { startDate, endDate, items: res.data.items }]);
            //console.log("repos"+JSON.stringify(repositories));
        });
    }, [startDate]);

    return (
        <Box maxWidth='1200px' mx='auto'>
            <PageHeader />
            { repositories.length === 0 && loading && <Loader/> }
            <Flex alignItems='center' justifyContent='space-between' mb='25px'>
                <GroupTitle
                    startDate={startDate}
                    endDate={endDate}
                />
                <Filters
                    viewType={viewType}
                    onViewChange={setViewType}
                    dateJump={dateJump}
                    onDateJumpChange={setDateJump}
                    language={language}
                    onLanguageChange={setLanguage}
                />
            </Flex>

            {repositories.map((repoGroup, counter: number) => {
                const groupTitle = counter > 0 && (
                    <Flex align="center" justify="center" mx='30px' my='30px'>
                        <GroupTitle
                            startDate={repoGroup.startDate}
                            endDate={repoGroup.endDate}
                        />
                    </Flex>


                )
                return (
                    <Box>
                        {groupTitle}
                        <SimpleGrid columns={viewType === 'list' ? 1 : 3} spacing='15px'>
                            {repoGroup.items.map(repo =>
                                <Repo isListView={viewType === 'list' ? true : false} repo={repo} />
                            )}
                        </SimpleGrid>
                    </Box>

                );
            })}


            <Flex alignItems='center' justifyContent='center' mt='20px' mb='20px'>
                <Button  onClick={() => {
                    setEndDate(startDate);
                    setStartDate(moment(startDate).subtract(1, dateJump).format());
                }} isLoading = {loading} variantColor='blue'>Load next group</Button>
            </Flex>
        </Box>
    );
}