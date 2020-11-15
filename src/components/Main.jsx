import { useState } from 'react'
import _ from 'lodash'
import neutral from '../img/neutral.png'
import up from '../img/up.png'
import down from '../img/down.png'
import SelectedUser from './SelectedUser.jsx'
import Pagination from './Pagination'

const Main = ({ isLoaded, sortedField, handleChangeField, filtered, direction }) => {
  const [selectedPerson, setSelectedPerson] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filtered.slice(indexOfFirstUser, indexOfLastUser);

  const sortingIcon = direction === 'asc' ? up : down;

  const selectUser = (slug) => (e) => {
    e.preventDefault();
    setSelectedPerson(filtered.filter(({ firstName }) => firstName === slug));
  };

  const changePage = (pageNumber) => (e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const head = ['firstName', 'lastName', 'email', 'phone'].map(slug => (
    <th key={slug} scope="col">
      <button className="btn border-0 d-flex " type='button' onClick={handleChangeField(slug)}>
        <h5 className="menu-title">{slug}</h5>
        <img
          src={sortedField !== slug
            ? neutral
            : sortingIcon}
          className="ml-2" alt="neutral"
        />
      </button>
    </th>
  ))
  return <>
    <div className="table-size">
      <table className="table table-striped">
        <thead>
          <tr>
            {head}
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(({ firstName, lastName, email, phone }) => {
            const id = _.uniqueId();
            return <tr key={id} onClick={selectUser(firstName)} className="text-align-center pointer">
              <th scope="row">{firstName}</th>
              <td className="w-25">{lastName}</td>
              <td className="w-25">{email}</td>
              <td className="w-25">{phone}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
    {isLoaded ? null
      : <div className="d-flex align-slugs-center">
        <strong>Loading in progress...</strong>
        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>}
    <SelectedUser selectedPerson={selectedPerson} />
    <Pagination
      currentPage={currentPage}
      usersPerPage={usersPerPage}
      totalPages={filtered.length}
      paginate={changePage}
    />
  </>
}

export default Main;
