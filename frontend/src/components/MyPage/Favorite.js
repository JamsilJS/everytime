import React from 'react'
import Header from '../Common/Header'

function Favorite() {
    return (
        <div>
            <Header title="내가 좋아한 글" link="/board" backbutton={true}/>
        </div>
    )
}

export default Favorite
