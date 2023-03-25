import React from 'react'
import { useGetData } from '../context/StorageContext'

export default function List() {
    const listData = useGetData()

    console.log(listData)
  return (
    <div>List</div>
  )
}
