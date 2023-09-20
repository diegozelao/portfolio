import { Skill } from "../components/Skill";
import * as icon from "../components/icons/skillsIcon";


interface Props extends React.ComponentProps<'div'> {}

export default function Experience(props: Props) {
  
  return (
    <div {...props} className="experience">
        <div className="order-1 basicExp md:order-2">
          <h2 className="py-4 text-3xl font-semibold underline underline-offset-3 md:py-1 2xl:text-4xl xl:text-3xl">
            Experience
          </h2>
          <h3 className="text-xl text-center 2xl:text-2xl xl:text-2xl">
            5 years working as a Software Engineer.
          </h3>
          <h3 className="text-xl text-center 2xl:text-2xl xl:text-xl">
          Working as frontend and fullstack, creating features and keeping applications running.
          </h3>
        </div>
        <div className="order-2 basicTimeExp md:order-1">
          <Skill image={<icon.JavaScriptIcon />} measure={6} years="6 years"/>
          <Skill image={<icon.TypeScriptIcon />} measure={2} years="2 years"/>
          <Skill image={<icon.ReactIcon />} measure={4} years="4 years"/>
          <Skill image={<icon.NextIcon />} measure={2} years="2 years"/>
          <Skill image={<icon.AngularIcon />} measure={1} years="1 year"/>
          <Skill image={<icon.VueIcon />} measure={1} years="1 year"/>
        </div>
    </div>
  )
}