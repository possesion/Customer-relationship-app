
const Pagination = ({ totalPages, usersPerPage, paginate, currentPage }) => {
  const pageActiveStyle = 'page-item active';
  const pagesTotal = Math.ceil(totalPages / usersPerPage);
  // console.log(pagesTotal);
  const showPages = (firstPage) => {
    const pageCount = [];

    if (pagesTotal === 0) {
      return;
    }
    const iter = (num) => {
      pageCount.push(
        <li className={currentPage === num ? pageActiveStyle : 'page-item'} aria-current="page" key={num}>
          <a className="page-link" href="#" onClick={paginate(num)}>
            {num}
            <span className="sr-only">(current)</span>
          </a>
        </li>
      )
      if (pagesTotal === num) {
        return pageCount;
      }
      return iter(num + 1);
    }
    return iter(firstPage);
  }
  return <div>
    <nav aria-label="...">
      <ul className="pagination">
        {showPages(1)}
      </ul>
    </nav>
  </div>
}

export default Pagination;
