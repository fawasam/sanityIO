import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import sanityClient from "../client"
import "./loading.css"
const Post = () => {
    const [postData ,setPostData] =useState(null)
    useEffect(()=>{
        sanityClient.fetch(`*[_type=="post"]{ title,slug, mainImage{asset->{_id,url},alt} }`)
        .then((data)=>setPostData(data))
        .catch(console.error)
    },[postData])
    if(!postData) return (
        <div class="loader">
          <div class="inner one"></div>
           <div class="inner two"></div>
           <div class="inner three"></div>
        </div>
    )

    return (
        <main className=" min-h-screen p-12 ">
            <section className="container mx-auto">
                <h1 className="texr-5xl flex justify-center cursive">Blog Posts Page</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my page of blog posts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post,index)=>(
                        
                        <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative shadow leading-snug bg-white  hover:shadow-md">
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} 
                            className="w-full  h-full rounded-r object-cover absolute"
                            />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-black tex-lg font-bold px-3 py-4  bg-white rounded bg-opacity-75">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                        ))}
                </div>
            </section>
            
        </main>
    )
}

export default Post
