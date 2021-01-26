import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import BoardInput from "./BoardInput";
import BoardTextarea from "./BoardTextarea";
import UserProfile from "../Common/UserProfile";
import Header from "../Common/Header";
import LogoutButton from "../Common/LogoutButton";
import writeIcon from "../Common/image/write.png";
import profile from "../Common/image/profile.png";
import comment from "../Common/image/comment.png";
import vote from "../Common/image/vote.png";
import back from "../Common/image/cancel.png";

const Container = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 10px;
`;

const Profilebox = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
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

//=================================
//             Add Board
//=================================

const BoardBox = styled.div`
  background-color: #fff;
  color: #353535;
  font-size: 13px;
  margin: 10px 10px 0px 10px;
  padding: 15px;
  border: 1px solid #ddd;
`;

const BoardUser = styled.div`
  display: flex;
  height: 20px;
  margin-bottom: 14px;
  justify-content: space-between;
`;

const BoardUserImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-right: 4px;
`;
const BoardUserID = styled.p`
  color: #353535;
  font-size: 11px;
  font-weight: bold;
  line-height: 20px;
`;

const Back = styled.img`
  width: 10px;
`;

const BoardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const BoardContent = styled.div`
  font-weight: normal;
  margin-bottom: 14px;
`;

const Buttons = styled.div`
  text-align: right;
`;

const ButtonImage = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 10px;
`;

const LikeCounted = styled.p`
  display: inline-block;
  color: #c62917;
  font-size: 13px;
  padding-left: 4px;
`;

const CommentCounted = styled.p`
  display: inline-block;
  color: #0ca5af;
  font-size: 13px;
  padding-left: 4px;
`;

function BoardView({ match }) {
  const userFrom = localStorage.getItem("userId");
  const [Content, setContent] = useState([]);
  const [inputs, setInput] = useState({
    boardTitle: "",
    boardContent: "",
  });
  const { boardTitle, boardContent } = inputs;
  const { like, setLike } = useState(0);

  useEffect(() => {
    FetchBoard();
  }, []);

  const FetchBoard = () => {
    axios.get("/board/getboard").then((response) => {
      console.log("Get Board : ", response);
      if (response.data.success) {
        setContent([...Content, ...response.data.boards]);
      } else {
        alert("게시글을 보여줄 수 없습니다.");
      }
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let variables = {
      boardFrom: userFrom,
      boardTitle: boardTitle,
      boardContent: boardContent,
      boardWriter: "익명",
    };
    axios.post("/board/upload", variables).then((response) => {
      if (response.status === 200) {
        console.log("Upload : ", response);
        alert("게시글이 등록되었습니다");
        setInput({
          boardTitle: "",
          boardContent: "",
        });
        FetchBoard();
        window.location.reload();
      } else {
        alert("게시글 업로드에 실패하였습니다.");
      }
    });
  };

  const handleLike = ({ userFrom, likeCnt }) => {
    let variables = {
      userFrom: userFrom,
      likeCnt: like,
    };
    axios
      .post("/board/like", variables)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onDeleteBoard = (boardFrom, board_id) => {
    let variables = {
      boardFrom: boardFrom,
      _id: board_id,
    };
    axios.post("/board/deleteBoard", variables).then((response) => {
      console.log("Delete : ", response);
      if (response.data.success) {
        alert("게시글 삭제에 성공했습니다.");
        FetchBoard();
        window.location.reload();
      } else {
        alert("게시글 삭제에 실패했습니다.");
      }
    });
  };

  const renderBoard = Content.map((board, index) => {
    return (
      <React.Fragment key={index}>
        <BoardBox>
          <BoardUser>
            <span style={{ display: "flex" }}>
              <BoardUserImg src={profile} alt="profile" />
              <BoardUserID>익명</BoardUserID>
            </span>
            <span>
              <button onClick={() => onDeleteBoard(board.boardFrom, board._id)}>
                <Back src={back} alt="back" />
              </button>
            </span>
          </BoardUser>
          <Link to={`${match.url}${board._id}`}>
            <BoardTitle>{board.boardTitle}</BoardTitle>
            <BoardContent>{board.boardContent}</BoardContent>
          </Link>
          <Buttons>
            <button onClick={handleLike}>
              <ButtonImage src={vote} alt="vote" />
              <LikeCounted>{like}</LikeCounted>
            </button>
            <button>
              <ButtonImage src={comment} alt="comment" />
              <CommentCounted>0</CommentCounted>
            </button>
          </Buttons>
        </BoardBox>
      </React.Fragment>
    );
  });

  return (
    <Container>
      <Header title="자유게시판" />
      <Profilebox>
        <UserProfile boardPage={true} />
        <LogoutButton boardPage={true} />
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
      {renderBoard}
    </Container>
  );
}

export default withRouter(BoardView);
