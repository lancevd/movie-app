import React from 'react';

import {GiPistolGun} from 'react-icons/gi'

const Categories = () => {
    const catItems = [
        {
            icon: <GiPistolGun />,
            name: 'Action',
            count: '1300',
            link: '#'
        },
        {
            icon: <GiPistolGun />,
            name: 'Fantasy',
            count: '1300',
            link: '#'
        },
        {
            icon: <GiPistolGun />,
            name: 'Comedy',
            count: '1300',
            link: '#'
        },
        {
            icon: <GiPistolGun />,
            name: 'Drama',
            count: '1300',
            link: '#'
        },
        {
            icon: <GiPistolGun />,
            name: 'Mystery',
            count: '1300',
            link: '#'
        },
        {
            icon: <GiPistolGun />,
            name: 'Horror',
            count: '1300',
            link: '#'
        },
        {
            icon: <GiPistolGun />,
            name: 'Romance',
            count: '1300',
            link: '#'
        },
        {
            icon: <GiPistolGun />,
            name: 'Thriller',
            count: '1300',
            link: '#'
        }
    ]
  return (
    <section id='categories' className='container'>
        <div className='flex flex-col lg:flex-row gap-x-12 justify-between'>
            <h2 className='text-2xl lg:text-6xl font-ubuntu font-bold text-white'>Choose the Type of Film You Like</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt magni aliquid atque culpa officia.</p>
        </div>

        <div className="space"></div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {catItems.map((cat)=>(
                <div className="cat-gridbox flex items-start flex-col xl:flex-row xl:items-center">
                <div className="bg-[#22262F] text-[#DF3A3A] rounded-xl text-2xl p-5">{cat.icon}</div>
                <div className="cat-gridbox-info">
                    <h5>{cat.name} </h5>
                    <p>{cat.count} Movies</p>
                    <a href={cat.link} className="cat-gridbox-link">View More</a>
                </div>
            </div>
            ))}

        </div>
    </section>
  )
}

export default Categories