import shortProfile from '../assets/profile.jpg';
import shortProfilepb from '../assets/profilepb.jpg';
import Profile from '../assets/me.jpg'
import Profilepb from '../assets/mepb.jpg'

import { useMediaQuery } from '../hooks/useMediaQuery';
import { useTheme } from '../hooks/useTheme';
// import { useEffect } from 'react';

interface Props extends React.ComponentProps<'div'> {}
export default function ProfileImage(props: Props) {
  const matches = useMediaQuery('(min-width: 768px)')
  const { darkMode } = useTheme()

  
  const shortimg = () => {
    return !darkMode ? shortProfile : shortProfilepb
  }
  const normlimg = () => {
    return !darkMode ? Profile : Profilepb
  }
  const selectThemeImg = (): string => {
    return !matches ? shortimg() : normlimg()
  }

  const selectImg = (): string => {
    if (matches) {
      return selectThemeImg()
    }
    return selectThemeImg()
  }

  return (
    <div {...props}>
      <img
        className="imgProfile"
        src={selectImg()} 
        alt="Profile"
        height={300}
        width={300}
      />
    </div>
  )
}