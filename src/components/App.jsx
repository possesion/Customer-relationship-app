import { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import Main from './Main.jsx'
import _ from 'lodash'

const App = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [sortedField, setSortedField] = useState('');
    const [direction, setDirection] = useState(null);

    const invertDirection = { asc: 'desc', desc: 'asc' };

    let filtered = search.length === 0
        ? data
        : data.filter(user =>
            user.firstName.toLowerCase().includes(search.toLowerCase()) ||
            user.lastName.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.phone.toLowerCase().includes(search.toLowerCase()));
    // _______________________________________USER ON PAGE WITH FILTER

    const handleChangeField = (slug) => (e) => {
        e.preventDefault();
        setSortedField(slug)
        setDirection(sortedField === slug ? invertDirection[direction] : 'asc')
    };

    // _______________________________________SORTING WITHOUT LODASH
    // data.sort((a, b) => {
    //     return a[slug].toLowerCase() === b[slug].toLowerCase() ? 0
    //         : direction !== 'asc'
    //             ? (a[slug].toLowerCase() < b[slug].toLowerCase() ? 1 : -1)
    //             : (a[slug].toLowerCase() < b[slug].toLowerCase() ? -1 : 1)
    // })

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    };

    useEffect(() => {
        const fetchData = async () => {
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            await axios.get(proxyUrl + 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
                .then(response => {
                    setData(response.data)
                    setIsLoaded(true)
                })
        }
        fetchData();
    }, []);

    return <div className="container layout">
        <NavBar search={search} handleChange={handleChange} />
        <Main
            filtered={_.orderBy(filtered, sortedField, direction)}
            isLoaded={isLoaded}
            sortedField={sortedField}
            direction={direction}
            handleChangeField={handleChangeField}
        />
    </div>
}

export default App;