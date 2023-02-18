import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

const Results = ({ results }) => {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex 3xl:flex-wrap 3xl:justify-center'>
      {results?.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

export default Results
