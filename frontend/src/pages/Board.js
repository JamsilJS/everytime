import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import UserProfile from "../components/Board/UserProfile";
import BoardInput from "../components/Board/BoardInput";
import BoardTextarea from "../components/Board/BoardTextarea";
import BoardArticle from "../components/Board/BoardArticle";
import profile from "../components/image/profile.png";
import logo from "../components/image/logo.jpg";
import writeIcon from "../components/image/write.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutUser } from "../_actions/user_actions";

const Container = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 10px;
`;

const Header = styled.div`
  background-color: #fff;
  width: 100%;
  height: 56px;
  padding: 0px 12px;
  font-size: 15px;
  text-align: left;
  line-height: 56px;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
  vertical-align: middle;
  cursor: pointer;
`;

const HeaderTitle = styled.span`
  color: #454545;
  font-weight: bold;
`;

const Profilebox = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

const Profilebtn = styled.button`
  display: inline-block;
  width: 64px;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 15px 3px;
  font-size: 13px;
  line-height: 28px;
  color: #505050;
`;

const BoardForm = styled.form`
  position: relative;
  height: 165px;
  margin: 0px 10px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const InputButton = styled.button`
  background-color: #c62917;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 38px;
  height: 38px;
`;

const InputIcon = styled.img`
  width: 38px;
  height: 38px;
`;

function Board({ history }) {
  const dispatch = useDispatch();
  const [inputs, setInput] = useState({
    boardTitle: "",
    boardContent: "",
  });

  const { boardTitle, boardContent } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/board/register", {
        boardTitle: boardTitle,
        boardContent: boardContent,
        writer: "익명",
        comment: '',
        like: '',
      })
      .then((response) => {
        if (response.status === 200) {
          alert("게시글이 등록되었습니다");
        };
        setInput({
          boardTitle: "",
          boardContent: "",
        });
      })
      .catch((error) => {
        alert("게시글 업로드에 실패하였습니다.");
      });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser())
      .then((response) => {
        console.log(response);
        if (response.payload.logoutSuccess) {
          history.push("./");
        } else {
          alert("로그아웃에 실패했습니다");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("/board/register")
      .then((response) => {
        if(response.status === 200) {
          if(response.data.length > 0) {
            setShow(true);
          }
          console.log(response.data[0]);
          setTitle(response.data[0].board_title);
          setContent(response.data[0].board_content);
        } else {
          alert("게시글을 보여줄 수 없습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <Container>
      <Header>
        <Link to="/Board">
          <Logo src={logo} alt="logo" />
        </Link>
        <HeaderTitle>자유게시판</HeaderTitle>
      </Header>
      <Profilebox>
        <UserProfile
          profileImage={profile}
          id="nm1993"
          name="박지연"
          nickname="쿠크바사삭"
        />
        <Link to="/MyPage">
          <Profilebtn>내정보</Profilebtn>
        </Link>
        <Link to="/">
          <Profilebtn onClick={handleLogout}>로그아웃</Profilebtn>
        </Link>
      </Profilebox>
      <BoardForm onSubmit={onSubmit}>
        <BoardInput
          name="boardTitle"
          placeholder="제목을 작성해주세요."
          value={boardTitle}
          onChange={onChange}
        />
        <BoardTextarea
          name="boardContent"
          placeholder="여기를 눌러서 글을 작성할 수 있습니다."
          value={boardContent}
          onChange={onChange}
        />
        <InputButton type="submit">
          <InputIcon src={writeIcon} />
        </InputButton>
      </BoardForm>
      { Show &&
        <BoardArticle 
          title={Title}
          content={Content}
        />
      }
    </Container>
  );
}

export default withRouter(Board);
