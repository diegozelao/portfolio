import BrIcon from '../components/icons/brIcon'
import UsIcon from '../components/icons/usIcon'

interface Props extends React.ComponentProps<'div'> {}

export default function Language(props: Props) {
  
  return (
    <div {...props} className="language">
      <div className="justify-center divInfoLanguage">
        <h2 className="py-4 text-3xl font-semibold underline underline-offset-3 md:py-1 2xl:text-4xl xl:text-3xl">
          Language
        </h2>
      </div>
      <div className="divInfoLanguage">
        <div className="flag">
          <BrIcon />
          <h3>PT-BR - Native Speaker</h3>
        </div>
        <div className="flag">
          <UsIcon />
          <h3>EN-US - Intermediate</h3>
        </div>
      </div>
      <div className="justify-center divInfoLanguage">
        <h2 className="py-4 text-3xl font-semibold underline underline-offset-3 md:py-1 2xl:text-4xl xl:text-3xl">
          Education Academic
        </h2>
      </div>
      <div className="divInfoLanguage">
        <div className="academic ">
          <h3 className='text-3xl'>🎓 </h3> -
          <h3 className='text-justify'>Computer Science Bachelors Degree</h3>
        </div>
      </div>
    </div>
  )
}