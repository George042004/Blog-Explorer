import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import PostCard from '../components/PostCard';

const Home = () => {
    // const [posts,setPosts] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [page,setPage] = useState(1);
    const [totalpages,setTotalpages] = useState(10);
    const [fetcheddata,setFetcheddata] = useState([]);
    const [search,setSearch] = useState('');
    const [debouncesearch,setDebouncesearch] = useState('');

    const limit = 10;

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncesearch(search);
        },800);

        return ()=>{clearTimeout(timer);}
    },[search]);

    useEffect(()=>{
        async function fetching_data(){
           try{
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}&_page=${page}&_limit=${limit}`);
            const data = await response.json();
            setFetcheddata(data);
           }
           catch(err){
            throw new Error('failed to fetch data');
            // setError(err.message);
           }
           finally{
            setLoading(false);
           }
        }
        fetching_data();


    },[page,debouncesearch])
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} setPage={setPage}/>
      <PostCard fetcheddata={fetcheddata} loading={loading} error={error}/>
      <Pagination page={page} setPage={setPage} totalpages={totalpages} />
    </>
  )
}

export default Home
