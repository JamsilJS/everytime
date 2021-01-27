import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import BoardInput from "./BoardInput";
import BoardTextarea from "./BoardTextarea";
import UserProfile from "../Common/UserProfile";
import Header from "../Common/Header";
import LogoutButton from "../Common/LogoutButton";
import BoardButtons from './BoardButtons';
import AddBoard from './AddBoard';

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

function BoardView({ match }) {
  const userFrom = localStorage.getItem('userId');
  const writerFrom = localStorage.getItem('userNickname');
  const [WriterIcon, setWriterIcon] = useState(true);
  const [BoardWriter, setBoardWriter] = useState("익명");
  const [Content, setContent] = useState([]);
  const [inputs, setInput] = useState({
    boardTitle: "",
    boardContent: "",
  });
  const { boardTitle, boardContent } = inputs;

  useEffect(() => {
    FetchBoard();
  }, [])

  const FetchBoard = () => {
    axios.get("/board/getBoard")
      .then((response) => {
        //console.log("Get Board : ",response);
        if(response.data.success) {
          setContent(response.data.boards);
        } else {
          alert("게시글을 보여줄 수 없습니다.");
        }
      })
  }

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onIconClick = () => {
    if(WriterIcon){
      setWriterIcon(false);
      setBoardWriter(writerFrom);
    } else {
      setWriterIcon(true);
      setBoardWriter("익명");
    };
  }

  const onSubmit = (e) => {
    e.preventDefault();
    let variables = {
      userFrom: userFrom,
      boardTitle: boardTitle,
      boardContent: boardContent,
      boardWriter: BoardWriter,
    }
    axios.post("/board/upload", variables)
      .then((response) => {
        if (response.status === 200) {
          // console.log("Upload : ",response);
          // console.log("variables : ",variables);
          alert("게시글이 등록되었습니다");
          setInput({
            boardTitle: "",
            boardContent: "",
          })
          FetchBoard();
        } else {
          alert("게시글 업로드에 실패하였습니다.");
        }
      })
  };

  return (
    <Container>
      <Header title="자유게시판"/>
      <Profilebox>
        <UserProfile boardPage={true} />
        <LogoutButton boardPage={true}/>
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
        <BoardButtons 
          icon={WriterIcon}
          click={onIconClick} 
          submit={onSubmit}
        />
      </BoardForm>
      { Content && Content.map((board, index) => {
        // console.log('board',board)
        return(
            <React.Fragment key={index}>
              <Link to={`${match.url}/${board._id}`}>
                <AddBoard
                  id={board._id}
                  writer={board.boardWriter}
                  title={board.boardTitle}
                  content={board.boardContent}
                />
              </Link>
            </React.Fragment>
        )})
      }
    </Container>
  );
}

export default withRouter(BoardView);
