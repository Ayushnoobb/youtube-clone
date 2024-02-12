import { useEffect, useState } from 'react'
import fetchAllVideos from '../features/AllVideos/AllVideos'
import { Link } from 'react-router-dom';
import { VideoType } from '../pages/home/Home';

function Recommended() {
  const [recommendedVideo , setRecommendedVideo] = useState<VideoType[]>([]);

  async function getRecommendedVideo(){
    try{
      const res = await fetchAllVideos();
      const data = await res.json();
      setRecommendedVideo(data.items)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getRecommendedVideo();
  },[])

  if(recommendedVideo.length<0){
    return(
      <>No Recommended Video to display</>
    )
  }

  return (
    <ul className="recommended-videos__list">
      {recommendedVideo.map((video,id) => (
        <Link   to={`/videos/${video.id.videoId}`} state={video} className='videos__list-item-individual'>
          <li key={id} className=''>
            <img src={video.snippet.thumbnails.default.url} alt="" className='videos__thumbnail' />
            <h2 className="videos__title" title={video.snippet.title}>{video.snippet.title}</h2>
            <div className="video__details">
              <p className="video__creator">{}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default Recommended