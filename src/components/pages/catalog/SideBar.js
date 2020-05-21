import React from 'react'
import Categories from './Categories'
import Filter from './Filter'
import '../../../assets/styles/sidebar.scss'


function SideBar() {

    return (

        <div className='sidebar__container'>
            <Categories />
            <Filter />
        </div>
    )
}

export default SideBar
