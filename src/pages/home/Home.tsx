import { useEffect, useState } from 'react';
import fetchAllVideos from '../../features/AllVideos/AllVideos';
import { Link } from 'react-router-dom';

export interface VideoType {
  id: {
    videoId : string
  };
  snippet: {
    thumbnails: {
      default: {
        url: string;
      };
    },
    description:string,
    title:string,
    channelTitle:string,
    channelId : string,
    publishTime:string
  };
}

function Home(): JSX.Element {
  const [videos, setVideos] = useState<VideoType[]>([]);

  async function fetchVideos(): Promise<void> {
    try {
      const res = await fetchAllVideos();
      if (!res.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await res.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  if (videos.length === 0) {
    return <div className="container"><p>Loading...</p></div>;
  }

  return (
    <>
      <main className='main'>
        <div className="container">
          <ul className="videos__list">
            {videos.map((video,id) => (
              <Link   to={`/videos/${video.id.videoId}`} key={id} state={video} className='videos__list-item'>
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
        </div>
      </main>
    </>
  );
}

export default Home;
