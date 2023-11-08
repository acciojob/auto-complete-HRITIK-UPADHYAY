import React, {useState} from "react";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const Search = () => {
    const [arr, setArr] = useState(fruits);

    function handleOutput(e) {
        setArr(fruits.filter(item => item.includes(e.target.value)));
    }

    return (
        <div>
            <input type="text" onChange={handleOutput}/>
            
            <ul>
                {
                    arr && arr.map(item => (
                        <li> {item} </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default Search;