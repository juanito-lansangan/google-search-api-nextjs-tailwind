import Head from 'next/head'
import Avatar from '../components/Avatar'
import {MicrophoneIcon, SearchIcon, ViewGridIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const searchInutRef = useRef(null)
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInutRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
        <header className="flex w-full p-5 justify-between 
        text-sm text-gray-700">
          {/* left */}
          <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
          </div>

          {/* right */}
          <div className="flex space-x-4 items-center">
            <p className="link">Gmail</p>
            <p className="link">Images</p>

            {/* Icon */}
            <ViewGridIcon className="h-10 w-10 p-2 
            rounded-full hover:bg-gray-100 cursor-pointer" />
            {/* Avatar */}
            <Avatar url={"https://yt3.ggpht.com/yti/ANoDKi5ZRx4JGa_niNpWbCsCiz0d27ppOaItSbRwW-WS=s108-c-k-c0x00ffffff-no-rj"} />
          </div>
        </header>

      {/* body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        
        <div className="flex w-full mt-5 hover:shadow-lg 
        focus-within:shadow-lg max-w-md rounded-full border border-gray-200
        px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" ref={searchInutRef} className="focus:outline-none flex-grow" />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 
        justify-center mt-8 sm:space-y-0
        sm:flex-row sm:space-x-4">
          <button className="btn" onClick={search}>Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  )
}
