import React, { useState, useEffect } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ThemeControll() {
  const [darkTheme, setDarkTheme] = useState(false)
  const handleTheme = () => {
    setDarkTheme(!darkTheme)
    document.documentElement.setAttribute('data-theme', darkTheme ? "dark" : "light")
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', "dark") 
  }, [])

  return ( 
      <label className="inline-flex justify-center items-center cursor-pointer gap-2">
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{ !darkTheme ? <DarkModeIcon />: <Brightness7Icon />}</span>
      <input type="checkbox" onChange={() => handleTheme()} value={darkTheme} className="sr-only peer" />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> 
      </label>
  )
}
