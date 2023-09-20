import { useEffect } from 'react'
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const darkModeAtom = atomWithStorage('darkMode', false);

export function useTheme() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const handleTheme = () => {
    setDarkMode(!darkMode)
  }


  useEffect(() => {
    if (darkMode) {
      localStorage.removeItem('theme')
      document.body.classList.remove('light')
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark')
    } else {
      localStorage.removeItem('theme')
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      document.body.classList.add('light')
    }
    // console.log('darkMode: ', darkMode);
  }, [darkMode])
  
  return { darkMode, handleTheme }
}

export default useTheme