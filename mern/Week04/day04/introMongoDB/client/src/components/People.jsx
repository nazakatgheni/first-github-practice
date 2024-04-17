import axios from 'axios';
import React, { useState, useEffect } from 'react'

const People = () => {

    const [people, setPeople] = useState([]);
    console.log(people)

    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
            .then(res => {
                console.log(res.data.results)
                setPeople(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>People</h1>
            {
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Height</th>
                        </tr>
                    </thead>

                    <tbody>
                        {people.map((person, i) => {
                            return (
                                <tr key={i}>
                                    <td>{person.name}</td>
                                    <td>{person.height}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default People
