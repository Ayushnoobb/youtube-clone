

const apiKey :string = import.meta.env.VITE_YOUTUBE_URI
const url:string = `https://www.googleapis.com/youtube/v3/commentThreads?key=${apiKey}&part=snippet,replies&maxResults=20&videoId=8l4ZjN4MXuQ`;

export interface YouTubeCommentThread {
  kind: string;
  etag: string;
  id: string;
  snippet: {
      channelId: string;
      videoId: string;
      topLevelComment: {
          kind: string;
          etag: string;
          id: string;
          snippet: {
              channelId: string;
              videoId: string;
              textDisplay: string;
              textOriginal: string;
              authorDisplayName: string;
              authorProfileImageUrl: string;
              authorChannelUrl: string;
              authorChannelId: {
                  value: string;
              };
              canRate: boolean;
              viewerRating: string;
              likeCount: number;
              publishedAt: string;
              updatedAt: string;
          };
      };
      canReply: boolean;
      totalReplyCount: number;
      isPublic: boolean;
  };
  replies: {
      // Define the structure for replies if needed
  };
}
function Comment(){
  return fetch(url)
}



export default Comment