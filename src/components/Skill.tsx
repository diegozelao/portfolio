
interface SkillProps {
  image: JSX.Element,
  years: string,
  measure: number,
}

export function Skill(props : SkillProps) {
  
  return(
    <div className="experience-language">
      {props.image}
      <div className="experience-unit">
        <div className={`experience-measure measure-${props.measure}`}>
          <span>{props.years}</span>
        </div>
      </div>
    </div>
  )
}