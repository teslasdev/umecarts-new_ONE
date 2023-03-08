import React from 'react'
import {RxCaretRight} from 'react-icons/rx'


const data = [
    {
        "id": 1,
        "name" : "Fashion",
        "color" : "#F1F2FD",
        "image" : require('../../../assets/icons/icon4.png')
    },
    {
        "id": 2,
        "name" : "Computing",
        "color" : "#FFF0FA",
        "image" : require('../../../assets/icons/icon5.png')
    },
    {
        "id": 3,
        "name" : "Electronics",
        "color" : "#FEF3F1",
        "image" : require('../../../assets/icons/icon2.png')
    },
    {
        "id": 4,
        "name" : "Furnitures",
        "color" : "#FAF2FC",
        "image" : require('../../../assets/icons/icon3.png')
    },
    {
        "id": 5,
        "name" : "Electronics",
        "color" : "#FEF3F1",
        "image" : require('../../../assets/icons/icon2.png')
    },
    {
        "id": 6,
        "name" : "Beauty",
        "color" : "#F0F8FF",
        "image" : require('../../../assets/icons/icon1.png')
    },
    {
        "id": 7,
        "name" : "Furnitures",
        "color" : "#FAF2FC",
        "image" : require('../../../assets/icons/icon3.png')
    },
    {
        "id": 8,
        "name" : "Electronics",
        "color" : "#FEF3F1",
        "image" : require('../../../assets/icons/icon2.png')
    },
    {
        "id": 9,
        "name" : "Beauty",
        "color" : "#F0F8FF",
        "image" : require('../../../assets/icons/icon1.png')
    },
    {
        "id": 10,
        "name" : "Electronics",
        "color" : "#FEF3F1",
        "image" : require('../../../assets/icons/icon2.png')
    },
    {
        "id": 11,
        "name" : "Beauty",
        "color" : "#F0F8FF",
        "image" : require('../../../assets/icons/icon4.png')
    },
    {
        "id": 12,
        "name" : "Computing",
        "color" : "#FFF0FA",
        "image" : require('../../../assets/icons/icon5.png')
    }
]

const Category = () => {
  return (
    <>
        <div className='um-product rounded-sm shadow-md'>
            <div className='um-product-header flex justify-between px-2 py-4 w-full items-center rounded-t-md bg-red-200'>
                <div>
                    <p className='font-bold text-xl'>Shop Categories</p>
                </div>

                <div className='relative um-header-button cursor-pointer'>
                    <span>
                        View
                    </span>
                    <span className='font-bold'>
                        <RxCaretRight />
                    </span>
                </div>
            </div>

            <div className='um-product-caret p-8 flex w-full flex-wrap gap-4'>
                {data.map((item) => {
                    return (
                        <div className="um-category" key={data.id}>
                            <div className="um-category-img" style={{background : `${item.color}`}}>
                                <img src={item.image} alt="" />
                            </div>

                            <h5 className='font-bold'>{item.name}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Category