import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../organisms/NavBar";
import { useParams, useSearchParams } from "react-router-dom";
import ViewTemplateRecipe from "../templates/ViewTemplateRecipe";
import ViewTemplatePosting from "../templates/ViewTemplatePosting";

const Container = styled.div`
  background-color: #ededed;
`;
export default function View() {
  const { id } = useParams<{ id: string }>();
  const [params] = useSearchParams();
  const type = params.get("type");
  console.log(type);

  const [starValue, setStarValue] = useState(0);
  const [RecipeData, setRecipeData] = useState({
    recipeID: 0,
    title: "",
    detail: "",
    image: "",
    time: "",
    mealCount: "",
    level: "",
    ingreName: "",
    amount: "",
    ingred: [
      {
        recipeID: 0,
        ingreName: "",
        amount: "",
      },
    ],
    step: [
      {
        stepNo: "",
        content: "",
      },
    ],
  });
  const [PostingData, setPostingData] = useState({
    postingID: 0,
    image: "",
    title: "",
    userId: "",
    date: "",
    feed: "",
  });
  const [CommentList, setCommentList] = useState([
    {
      commentID: 0,
      userId: "",
      date: "",
      comment: "",
    },
  ]);
  useEffect(() => {
    //댓글 데이터 업데이트
    setCommentList([
      {
        commentID: 1,
        userId: "user5678",
        date: "2024/12/25",
        comment:
          "국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원 과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는 부결된 것으로 본다.",
      },
      {
        commentID: 2,
        userId: "user9012",
        date: "2024/12/26",
        comment:
          "누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.",
      },
      {
        commentID: 3,
        userId: "user3456",
        date: "2024/12/27",
        comment:
          "국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다.",
      },
      {
        commentID: 4,
        userId: "홍길동",
        date: "2024/12/27",
        comment:
          "동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",
      },
    ]);
    // 포스팅 데이터 업데이트
    setPostingData({
      postingID: 1,
      image: "https://picsum.photos/500",
      title: "제목입니다.",
      userId: "user1234",
      date: "2024/12/25",
      feed: ` 모든 국민은 법률이 정하는 바에 의하여 국가기관에 문서로 청원할 권리를
          가진다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의
          자문에 응하기 위하여 국민경제자문회의를 둘 수 있다.`,
    });

    // 레시피 데이터 업데이트
    setRecipeData({
      recipeID: 1,
      title: "김치찌개",
      detail: "한국인의 소울푸드 김치찌개를 만드는 방법 입니다.",
      image: "https://picsum.photos/500",
      time: "15분",
      mealCount: "2인분",
      level: "하",
      ingreName: "감자",
      amount: "2개",
      ingred: [
        { recipeID: 1, ingreName: "감자", amount: "2개" },
        { recipeID: 2, ingreName: "양파", amount: "2개" },
        { recipeID: 3, ingreName: "애호박", amount: "300g" },
        { recipeID: 4, ingreName: "대파", amount: "400g" },
        { recipeID: 5, ingreName: "파프리카", amount: "100g" },
        { recipeID: 6, ingreName: "오징어", amount: "반마리" },
      ],
      step: [
        {
          stepNo: "1",
          content:
            "양파와 마늘 손질 양파는 얇게 슬라이스하고, 마늘은 다져줍니다.",
        },
        {
          stepNo: "2",
          content:
            "올리브유에 양파와 마늘 볶기 팬에 올리브유를 두르고, 양파와 마늘을 넣고 중불에서 투명해질 때까지 볶습니다.",
        },
        {
          stepNo: "3",
          content:
            "토마토 넣기 토마토는 작게 썰어 팬에 넣고, 5분 정도 끓여서 토마토가 부드럽게 익을 때까지 조리합니다.",
        },
        {
          stepNo: "4",
          content:
            "치즈 넣기 치즈를 작은 조각으로 썰어 팬에 넣고, 치즈가 녹을 때까지 저어줍니다.",
        },
        {
          stepNo: "5",
          content:
            "완성 모든 재료가 잘 섞이면 불을 끄고, 원하는 대로 소금과 후추로 간을 맞춰서 완성합니다.",
        },
      ],
    });
  }, []);

  return (
    <Container>
      {type === "recipe" ? (
        <ViewTemplateRecipe
          starValue={starValue}
          setStarValue={setStarValue}
          RecipeData={RecipeData}
        />
      ) : (
        <ViewTemplatePosting
          PostingData={PostingData}
          CommentList={CommentList}
        />
      )}
      <NavBar />
    </Container>
  );
}
