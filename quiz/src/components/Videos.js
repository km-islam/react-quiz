import { useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import InfiniteScroll from "react-infinite-scroll-component";

function Videos() {
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-use-before-define
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to="/quiz" kye={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <h3>No data found</h3>}
      {error && <h3>There was an error</h3>}
      {loading && <h3>Loading.....!</h3>}
    </div>
  );
}

export default Videos;
