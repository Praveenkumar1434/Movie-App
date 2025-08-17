import { Children, createContext, useState , useEffect } from "react";

export const WatchListContext = createContext();


export const WatchListProvider = ({children})  =>{
    const [watchlist, setWatchlist] = useState([]);
    const [genreList, setGenereList] = useState([]);

    useEffect(()=>{
        let url=`https://api.themoviedb.org/3/genre/movie/list?api_key=ec30ad2855fd50a07e048db8cb9b7be3`
    
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setGenereList(data.genres || []));
      },[])



    const toggleWatchlist = (movie) =>{
        const index = watchlist.findIndex((m)=>m.id===movie.id);

        if(index===-1){
            setWatchlist([...watchlist, movie])
        }else{
            setWatchlist([...watchlist.slice(0,index),...watchlist.slice(index+1)]);
        }
    }
    return (
        <WatchListContext.Provider value={{
            watchlist, toggleWatchlist,genreList
        }}>
            {children}
        </WatchListContext.Provider>
    )
}