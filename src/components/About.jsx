import React, { useEffect, useState } from 'react'
import sanityClient from "../client"
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import "./loading.css"

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

const About = () => {
    const [author,setAuthor] =useState(null)
    useEffect(()=>{
        sanityClient.fetch(`*[_type=="author"]{
            name,
            bio,
            "authorImage":image.asset->url}`)
            .then((data)=> setAuthor(data[0]))
            .catch(console.error)
    },[author])


    if(!author) return (
        <div class="loader">
          <div class="inner one"></div>
           <div class="inner two"></div>
           <div class="inner three"></div>
        </div>
    )

    return (
        <main className='relative '>
            <img className='absolute w-full' src="https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg" alt="" />
            <div className='p-10 lg:pt-48 containrt mx-auto relative '>
                <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
                    <img src={urlFor(author.authorImage).url()} className='rounded w-42 h-32 lg:h-64 mr-8 object-cover' alt={author.name} />
                    <div className='text-lg flex flex-col justify-center'>
                        <h1 className='cursive text-6xl text-green-300 mb-4'>
                            Hey ther, I'm
                            <span className=''>{author.name}</span>
                        </h1>
                        <div className='prose lg:prose-xl text-white'>
                            <BlockContent blocks={author.bio} projectId="001fsxbf" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
