import GitHubIcon from "./icons/Github";

export default function RepoGithub(){

  return (
    <div className="btnRepo">
      <a
        className="flex flex-row justify-around w-32 bg-transparent dark:bg-transparent"
        href="https://github.com/diegozelao/portfolio" 
        target="_blank" 
        rel="noopener noreferrer">
        <GitHubIcon />
        <h3 className="bg-transparent dark:bg-transparent">Repo</h3>
      </a>
    </div>
  )
}