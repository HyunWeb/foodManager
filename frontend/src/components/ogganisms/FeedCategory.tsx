import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainCard from "../molecules/MainCard";
import HeadingAtom from "../atoms/HeadingAtom";

interface FeedData {
  id: number;
  title: string;
  detail: string;
  rating: number;
}

const FeedList = styled.ul``;

export default function FeedCategory() {
  const [feeds, setFeeds] = useState<FeedData[]>([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setFeeds([
      { id: 1, title: "요리제목1", detail: "부가설명1", rating: 3.5 },
      { id: 2, title: "요리제목2", detail: "부가설명2", rating: 4 },
      { id: 3, title: "요리제목3", detail: "부가설명3", rating: 5 },
      { id: 4, title: "요리제목4", detail: "부가설명4", rating: 1 },
    ]);
    setLoading(false);
  }, []);
  return (
    <div>
      <HeadingAtom level={3} color="#121212" $marginBottom="10px">
        레시피
      </HeadingAtom>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <FeedList>
          {feeds.map((feed) => (
            <MainCard
              key={feed.id}
              title={feed.title}
              detail={feed.detail}
              rating={feed.rating}
            />
          ))}
        </FeedList>
      )}
    </div>
  );
}
