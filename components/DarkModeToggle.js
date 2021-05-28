import { useTheme } from 'next-themes'

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
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