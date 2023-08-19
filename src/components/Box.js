import React from 'react'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

export default function Box({id, text, handleDelete, handleEdit }) {
    return (
        <>
            <div className="boxes" id={id}>
                <div><span>{text}</span></div>
                <div className='icon'>
                    <FaEdit onClick={()=>{
                        handleEdit(id,text)
                    }} className='icons' />
                    <MdDelete onClick={()=>{
                        handleDelete(id)
                    }} className='icons' />
                </div>
            </div>
        </>
    )
}