import Profile from "./Profile"
import Skills from "./Habilitys"
import Experience from "./Experience"
import Language from "./Language"

export default function Main() {
  return (
    <div className="classApp">
      <Profile />
      <Skills />
      <Experience />
      <Language />
    </div>
  )
}