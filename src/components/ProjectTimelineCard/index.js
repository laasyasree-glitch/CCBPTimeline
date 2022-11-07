import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <div>
      <img src={imageUrl} alt="project" />
      <h1>{projectTitle}</h1>
      <AiFillCalendar />
      <p>{duration}</p>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
