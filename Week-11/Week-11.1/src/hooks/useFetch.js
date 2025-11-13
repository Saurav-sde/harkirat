import { useState, useEffect } from "react";


// custom hooks
export function usePostTitle(){
    const[post, setPost] = useState({});

    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();
        setPost(json);
    }

    useEffect(() => {
       getPosts();
    }, [])

    return post.title;
}


export function useFetch(url, retryTime) {
    const[finalData, setFinalData] = useState({});
    const[loading, setLoading] = useState(true);

    const[isFirstLoad, setIsFirstLoading] = useState(true);

    console.log(url);
    
    async function getDetails() {
        // show loader only for first load
        if(isFirstLoad)
            setLoading(true);

        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);

        // after first fetch, no more loaders
        if(isFirstLoad)
        {
            setLoading(false);
            setIsFirstLoading(false);
        }
    }

    useEffect(() => {
        getDetails();
    }, [url])

    useEffect(() => {
        let clock = setInterval(getDetails, retryTime * 1000);

        // this will run when it unmounts, this is known as cleanup
        return function() { 
            console.log("on unmount");
            clearInterval(clock);
        }
    }, [url, retryTime]);

    return {
        finalData,
        loading
    };
}



