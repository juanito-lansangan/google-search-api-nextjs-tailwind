import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

function Search() {
  return <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="favicon"/>
            </Head>

            {/* Header */}
            <Header />
            {/* Search Results */}
        </div>
}

export default Search
