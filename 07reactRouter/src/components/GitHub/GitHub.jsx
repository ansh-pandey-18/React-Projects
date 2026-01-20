import React from 'react'
import {useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'

function GitHub() {
    const data=useLoaderData()

    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ansh-pandey-18')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])                                   //useEffect k dependency empty hone k mtlb hme code ko sirf ek hi br chalana hai render hone k baad

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        GitHub Followers: {data.followers}
        <img src={data.avatar_url} width={300} alt="GitHub avatar" />   
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ansh-pandey-18')
    return response.json()
}

/*
1. In this GitHub component, we need to fetch GitHub followers and avatar from API and display it.
2. The component uses useEffect to fetch data from the GitHub API and useState to render the fetched data.
3. However, since we are using react-router-dom, we can use loader function to fetch data before rendering the component.
*/