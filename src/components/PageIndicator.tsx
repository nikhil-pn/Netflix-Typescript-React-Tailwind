import React from 'react'

export default function PageIndicator({ pagesCount, currentPage, className }:{
    pagesCount: number,
    currentPage: number,
    className: string

}) {
    return (
        <ul className={` flex justify-end gap-1 pr-4 items-center  ${className}`}>
            {Array(pagesCount).fill(0).map((page, index) => (<li className={`h-[2px] w-3 ${currentPage === index ? "bg-gray-100" : "bg-gray-600"}`} key={index}></li>))}
        </ul>
    )
}
