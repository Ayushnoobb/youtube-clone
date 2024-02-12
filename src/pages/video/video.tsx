
import { Link, useLocation } from 'react-router-dom';
import { VideoType } from '../home/Home';
import Comment, { YouTubeCommentThread } from '../../features/comments/comment';
import { useEffect, useState } from 'react';
import LikeIcon from "../../assets/img/like-svgrepo-com.svg"
import Recommended from '../../Components/Recommended';


function Video():JSX.Element{

  const location = useLocation()
  const segment = location.pathname.split("/")
  const lastSegment = segment[segment.length - 1];
  const videoData:VideoType = location.state;
  const [comment , setComments] = useState<YouTubeCommentThread[]>([]);


  async function getComment(){

    try{
      const res = await Comment();
      if(!res.status){
        throw new Error("Status error")
      }
      const comments = await res.json();
      setComments(comments.items);

    } catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getComment();
    console.log(comment)
  },[])


  if(!videoData){
    return(
      <>
        <div className="container">
          <h2>OOPS ! Video not found</h2>
        </div>
      </>
    )
  }

  return (
    <div className="video__wrapper">
      <div className="container">
        <iframe src={`https://www.youtube.com/embed/${lastSegment}`} className='video__player'></iframe>
        <div className="video__individual-detail">
          <h2 className="video__individual-heading"><Link to={`https://www.youtube.com/${videoData.snippet.title}`}>{videoData.snippet.title}</Link></h2>
          <div className="creator">
            <img src="" alt="" />
            <h3 className="video__individual-creator">{videoData.snippet.channelTitle}</h3>
          </div>
          <p className='video__individual-creation-date'>{videoData.snippet.publishTime.split("T")[0]}</p>
          <p className='video__individual-description'>{videoData.snippet.description}</p>
        </div>
        <div className="video__row">
          <div className="video__threats">
            <h2 className='video__threats-title '>Comments</h2>
            {
              comment.length <= 0 ? (<p>No Comments to display</p>) :
              comment.map(cmnt =>{
                return(
                  <>
                    <div className="row commentor-row">
                      <div className="commentor-profile">
                        <img src={cmnt.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="Commentor-Profile" />
                      </div>
                      <div className="commentor-profile-detail">
                        <p className="commentor-name"><Link to={"#"}>@{cmnt.snippet.topLevelComment.snippet.authorDisplayName}</Link>  |  <span>{cmnt.snippet.topLevelComment.snippet.publishedAt.split("T")[0]}</span></p>
                        <p className='commentor-comment'>{cmnt.snippet.topLevelComment.snippet.textOriginal}</p>
                        <p className='commentor-like'><img src={LikeIcon} alt="" className='like-icon' />{cmnt.snippet.topLevelComment.snippet.likeCount}</p>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className="video-recommended">
            <h2 className='video__threats-title '>Recommended Videos</h2>
            <Recommended />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video