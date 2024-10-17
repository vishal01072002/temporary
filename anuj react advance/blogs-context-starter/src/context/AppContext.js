import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// step 1 context create
export const AppContext = createContext();

// data laane ka kam context provider
// provider create
export default function AppContextProvider ({children}) {

    const[loading , setLoading] = useState(false);
    const[posts , setPosts] = useState([]);
    const[page , setPage] = useState(1);
    const[totalPages , setTotalPages] = useState(null);
    

    // data filling

    async function fetchBlogPosts (page=1) {
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;
        //console.log(url);

// API call
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }

        catch(error) {
            console.log("error in fetching data");
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }

        setLoading(false);
    }

    function handlePageChange () {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

// step 2 provider apply
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
    
}