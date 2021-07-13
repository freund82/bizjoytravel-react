import React from 'react'
import {Link} from 'react-router-dom'


function Catalog(){
    return(
        <div>
            <h1>Каталог туров</h1>
            <p>Проверка</p>
            <Link to='/test'>
       Домой
       </Link>
        </div>
    )
}

export default Catalog