import React from 'react'

function Input({ handleValueChange, value, title, rest }) {
  return ( 
    <div>
    <label for={title} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
    <input type="text" onChange={(e) => handleValueChange(e)} id={title} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
</div>
  )
}

export default Input
