import React, {
  forwardRef,
  memo
} from 'react';

const Input = forwardRef(({ handleValueChange, value, title, error, ...rest }, ref) => {
  return ( 
    <div>
    <label for={title} class="text-secondaryText block mb-2 text-sm font-medium text-gray-900 ">{title}</label>
    <input ref={ref} {...rest} type="text" onChange={(e) => handleValueChange(e)} id={title} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" /> 
    {error && <span className='text-[12px] text-primaryText'>*{error.message}</span> }
</div>
  )
})

export default memo(Input)
