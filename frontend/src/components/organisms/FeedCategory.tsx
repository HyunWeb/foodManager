import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainCard from "../molecules/MainCard";
import HeadingAtom from "../atoms/HeadingAtom";
import axios from "axios";

interface FeedData {
  recipeID: number;
  title: string;
  describe: string;
  rating: number;
  img: string;
}

type Recipe = {
  recipeID: number;
  title: string;
  describe: string;
  img: string;
};

type Review = {
  id: number;
  userID: string;
  recipeID: number;
  rating: number;
};

const FeedList = styled.ul``;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeadingStyle = styled(HeadingAtom)`
  align-self: flex-start;
  margin-bottom: 20px;
`;

const route = process.env.REACT_APP_ROUTE;

const calculateReview = (
  recipes: Recipe[],
  reviews: Review[]
): FeedData[] => {
  const ratingMap: Record<number, { total: number; count: number }> = {};

  // 리뷰 데이터를 기반으로 recipeID별 총합과 개수 계산
  reviews.map((review) => {
    const { recipeID, rating } = review;
    if (!ratingMap[recipeID]) {
      ratingMap[recipeID] = { total: 0, count: 0 };
    }
    ratingMap[recipeID].total += rating;
    ratingMap[recipeID].count += 1;
  });

  // 레시피 데이터를 가공하여 결과 생성
  return recipes.map((recipe) => {
    const { recipeID, title, describe, img } = recipe;
    const ratingData = ratingMap[recipeID] || { total: 0, count: 0 };
    const averageRating =
      ratingData.count > 0 ? parseFloat((ratingData.total / ratingData.count).toFixed(1)) : 0;

    return { recipeID, title, describe, img, rating: averageRating };
  });
};

const processRecipeData = async () => {
  try {
    const res = await axios({
        method: "GET",
        url: `${route}/Recipe`,
        withCredentials: true,
    });

    // 서버에서 받은 데이터 구조 분해
    const { recipes, reviews } = res.data.data;

    // 데이터를 가공
    const processedData = calculateReview(recipes, reviews);

    return processedData; // 배열 반환
} catch (error) {
    console.error("Error fetching data:", error);
    return []; // 에러 발생 시 빈 배열 반환
}
}

export default function FeedCategory() {
  const [feeds, setFeeds] = useState<FeedData[]>([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const result = await processRecipeData();
      console.log(result);
      if(result !== undefined){
        setFeeds(result);
      }
      setLoading(false);
    };

    fetchItems();

    // setFeeds([
    //   { recipeID: 1, title: "요리제목1", detail: "부가설명1", rating: 3.5 },
    //   { recipeID: 2, title: "요리제목2", detail: "부가설명2", rating: 4 },
    //   { recipeID: 3, title: "요리제목3", detail: "부가설명3", rating: 5 },
    //   { recipeID: 4, title: "요리제목4", detail: "부가설명4", rating: 1 },
    // ]);
  }, []);
  return (
    <ContentWrap>
      <HeadingStyle level={3} color="#121212" $marginBottom="10px">
        레시피
      </HeadingStyle>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <FeedList>
          {feeds.map((feed) => (
            <MainCard
              img={feed.img}
              key={feed.recipeID}
              recipeID={feed.recipeID}
              title={feed.title}
              describe={feed.describe}
              rating={feed.rating}
            />
          ))}
        </FeedList>
      )}
    </ContentWrap>
  );
}
