import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from '../hooks/useTheme'

interface Props extends React.ComponentProps<'div'> {}

export default function SetTheme(props: Props) {
  const {darkMode, handleTheme} = useTheme()
  
  return (
    <div {...props}>
      {darkMode ? 
        <MdLightMode className="btnThemeChange" onClick={handleTheme} />
        :
        <MdDarkMode className="btnThemeChange" onClick={handleTheme} />
      }
    </div>
  )

}