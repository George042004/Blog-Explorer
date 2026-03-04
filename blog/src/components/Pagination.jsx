
const Pagination = ({page, setPage,totalpages}) => {
  return (
    <footer className="pagination">
        <button disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
        <p>Page:{page}</p>
        <button disabled={page===totalpages} onClick={()=>setPage(page+1)}>next</button>
    </footer>
  )
}

export default Pagination
