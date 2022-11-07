import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails
  return (
    <div>
      <h1>{courseTitle}</h1>
      <p>{description}</p>
      <p>{duration}</p>
      <AiFillClockCircle />
      {tagsList.map(each => (
        <p key={each.id}>{each.name}</p>
      ))}
    </div>
  )
}

export default CourseTimelineCard
