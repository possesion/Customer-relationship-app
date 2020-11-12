import React from 'react'

const SelectedUser = ({ selectedPerson }) => {
  return <table className="selected-user mb-2">
    {selectedPerson && selectedPerson.map(({ address, description, firstName, lastName }, id) => {
      return <React.Fragment key={firstName}>
        <tr>
          <td id='testing' className="pl-3"><b>Выбран пользователь: </b></td>
          <td style={{ fontSize: '1.2rem' }}><b>{firstName} {lastName}</b></td>

        </tr>
        <tr>
          <td className="selected-description">Описание</td>
          <td>{description}</td>

        </tr>
        <tr>
          <td className="selected-description">Адрес проживания</td>
          <td >{address.streetAddress}</td>
        </tr>
        <tr>
          <td className="selected-description">Город</td>
          <td>{address.city}</td>
        </tr>
        <tr>
          <td className="selected-description">Провинция/штат</td>
          <td>{address.state}</td>
        </tr>
        <tr>
          <td className="selected-description">Индекс</td>
          <td>{address.zip}</td>
        </tr>
      </React.Fragment>
    })}
  </table>
}

export default SelectedUser;

