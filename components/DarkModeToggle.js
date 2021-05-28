import { useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
        if (localStorage.getItem('theme') === 'undefined') {
            localStorage.setItem('theme', 'dark')   
        }
        setTheme(localStorage.getItem('theme'))
    }, [])

    return (
        <button
            className="fixed bottom-8 right-8 px-4 py-2 font-semibold rounded-md text-white bg-black dark:text-black dark:bg-white"
            onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
            }}
        >
            {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    )
}