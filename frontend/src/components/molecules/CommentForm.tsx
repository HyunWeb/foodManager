import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import IconButtonAtom from "../atoms/IconButtonAtom";
import { FaCircleArrowUp } from "react-icons/fa6";
import axios from "axios";
import { CommentContext } from "../pages/View";
import { useContext } from "react";
const Form = styled.form`
  position: fixed;

  bottom: 60px;
  background-color: #ffffff;
  width: 100%;
  height: 80px;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
`;
const Input = styled.input`
  background-color: #ffffff;
  box-shadow: inset 0 0px 5px rgba(0, 0, 0, 0.25);
  width: 90%;
  height: 45px;
  border-radius: 20px;
  padding-left: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Button = styled.button`
  position: absolute;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  border-radius: 50%;
`;
interface CommentListProps {
  commentID: number;
  userID: string;
  date: string;
  content: string;
}
export default function CommentForm() {
  const [content, setcontent] = useState("");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const text = useContext(CommentContext);
  const contented = (e: React.FormEvent) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:8000/posting/${id}/comment`,
      data: {
        content: content,
      },
      withCredentials: true,
    }).then((res) => {
      if (res.data.result == true) {
        axios({
          method: "GET",
          url: `http://localhost:8000/posting/${id}`,
          withCredentials: true,
        }).then((res) => {
          console.log(res.data);
          text?.setCommentList(res.data.comment);
          setcontent("");
        });
      } else {
        alert(res.data.message);
      }
    });
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
    
      <Input
        type="text"
        placeholder="댓글을 입력해 주세요"
        value={content}
        onChange={(e) => {
          setcontent(e.target.value);
        }}
      />
      <Button type="button">
        <FaCircleArrowUp size={35} color="#FE8D00" />
      </Button>
    </Form>
  );
}
