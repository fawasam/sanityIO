import React, { useState,useEffect } from 'react'

import sanityClient from "../client"
import "./loading.css"

const Project = () => {
    const [projectData , setProjectData] =useState(null)
    useEffect(()=>{
        sanityClient.fetch(`*[_type=="project"]
        { title,date,place,description,link,tags,projectType }`)
        .then((data)=>setProjectData(data))
        .catch(console.error)
        console.log(projectData);
    },[projectData])
    if(!projectData) return (
        <div class="loader">
          <div class="inner one"></div>
           <div class="inner two"></div>
           <div class="inner three"></div>
        </div>
    )
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    welcome to my projects pade!
                </h2>

                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project,index)=>(

                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a href={project.link} alt={project.title} target="_blank" rel="noopener
                            noreffer">{project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4 ">
                            <span><strong className="font-bold">Finished on</strong>:
                            {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong>Company</strong>:{project.place}

                            </span>
                            <span>
                                <strong>Type</strong>: {project.projectType }
                            </span>
                            <p>
                                {project.description}
                            </p>
                            <a href={project.link} alt={project.title} target="_blank" rel="noopener
                            noreffer" >
                            <span> View The Projects</span>
                            </a>
                        </div>
                    </article>
                            ))}
                </section>

            </section>
        </main>
    )
}

export default Project
