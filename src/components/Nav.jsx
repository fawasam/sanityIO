import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


const Nav = () => {
    return (
        <>
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <Link to="/" 
                    activeClassName='text-white'
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl cursive tracking-widest">
                        fwzam
                    </Link>
                    <Link to="/post"
                    activeClassName="text-red-100 bg-red-700" 
                    className="inline-flex  items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        Blogs
                    </Link>
                    <Link to="/project" 
                    activeClassName="text-red-100 bg-red-700" 
                    className="inline-flex  items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        Projects
                    </Link>
                    <Link to="/about" 
                    activeClassName="text-red-100 bg-red-700" 
                    className="inline-flex  items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        About Me 
                    </Link>
                </nav>
                    <div className="inline-flex py-3 px-3 my-6">
                        <SocialIcon  url="https://google.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                        <SocialIcon  url="https://google.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                        <SocialIcon  url="https://google.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}} />
                    </div>
            </div>
        </header>
            
        </>
    )
}

export default Nav
