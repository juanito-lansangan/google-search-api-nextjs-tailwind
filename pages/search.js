import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY, CONTEXT_KEY} from '../keys'
import MockResponse from '../MockResponse'
import SearchResults from '../components/SearchResults'

function Search({results}) {
  return <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="favicon"/>
            </Head>

            {/* Header */}
            <Header />
            {/* Search Results */}
            <SearchResults results={results} />
        </div>
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex =  context.query.start || '0';

    const data = useDummyData
    ? MockResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1/?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(response => response.json());

    return {
        props: {
            results: data
        }
    };
}