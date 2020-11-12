import allSafe from '../img/icon-s.png'

const NavBar = (props) => {
    const { search, handleChange, handleSubmit } = props;
    return (
        <nav className="navbar navbar-light bg-light px-4">
            <a href="#" className="navbar-brand">
                <span>
                    <img src={allSafe} className="mr-4" alt="allSafe" style={{ width: '42px' }} />
                </span>
                 CRM Allsafe
                 </a>
            <form className="form-inline form-position" onSubmit={handleSubmit}>
                <input onChange={handleChange} value={search} className="form-control form-size mr-sm-2 border-2" type="search" placeholder="Search" aria-label="Search" />
                <span className="search-icon">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                    </svg>
                </span>
            </form>
        </nav>
    )
};

export default NavBar;