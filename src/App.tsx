import RepoGithub from "./components/RepoGithub"
import SetTheme from "./components/SetTheme"
import Main from "./pages/Main"
function App() {
  
  return (
    <>
      <SetTheme className="divThemeChange" />
      <Main />
      <RepoGithub />
    </>
  )
}

export default App
