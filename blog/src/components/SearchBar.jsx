
const SearchBar = ({search,setSearch,setPage}) => {
  return (
     <nav className='navbar'>
        <h3 className='title'>Blog Explorer</h3>
        <div>
            <input className='search' type="text" placeholder='Search posts..' value={search} 
            onChange={(e)=>{
            setSearch(e.target.value)
            setPage(1)}
            }/>
            <button className='searchclear' onClick={()=>setSearch('')}>X</button>
        </div>
      </nav>
  )
}

export default SearchBar
