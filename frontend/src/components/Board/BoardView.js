import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import StyledBox from "../Style/styledBox";
import AddBoard from "./Section/AddBoard";
import BoardInput from "./Section/BoardInput";
import CheckNickname from "./Section/CheckNickname";
import BoardTextarea from "./Section/BoardTextarea";
import UserProfile from "./Section/UserProfile";
import LogoutButton from "../Common/LogoutButton";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Pagination from "@material-ui/lab/Pagination";

const Profilebox = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 8px;
`;
const Profilebtn = styled.div`
  display: inline-block;
  width: 64px;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 12px 4px;
  font-size: 13px;
  line-height: 28px;
  color: #505050;
  pointer: cursor;
`;
const BoardForm = styled.form`
  position: relative;
  height: 165px;
  border: 1px solid #ddd;
  margin: 0px -1px;
  box-sizing: border-box;
`;

const PaginationBox = styled.div`
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
`;

function BoardView({ history, match }) {
  const userFrom = localStorage.getItem("userId");
  const writerFrom = localStorage.getItem("userNickname");
  const [totalPage, settotalPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
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
    console.log('fetch')
  }, [currentPage]);

  const FetchBoard = () => {
    axios
      .post("/board/getBoard", { page: currentPage })
      .then((response) => {
        if (response.data.success) {
          setContent(response.data.boards);
          settotalPage(Math.ceil(response.data.count/5));
        } else {
          alert("게시글을 보여줄 수 없습니다.");
        }
      });
  };

  const onRemove = (id) => {
    setContent(Content.filter((Content) => Content._id !== id));
    FetchBoard();
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onIconClick = () => {
    if (WriterIcon) {
      setWriterIcon(false);
      setBoardWriter(writerFrom);
    } else {
      setWriterIcon(true);
      setBoardWriter("익명");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!boardTitle) {
      alert(`제목을 작성해주세요`);
      return;
    } else if (!boardContent) {
      alert(`내용을 작성해주세요`);
      return;
    } else if (boardContent.length > 300) {
      alert(`내용을 300자 이내로 작성해주세요`);
      return;
    }
    let variables = {
      userFrom: userFrom,
      boardTitle: boardTitle,
      boardContent: boardContent,
      boardWriter: BoardWriter,
    };
    axios.post("/board/upload", variables).then((response) => {
      if (response.status === 200) {
        setInput({
          boardTitle: "",
          boardContent: "",
        });
        FetchBoard();
      } else {
        alert("게시글 업로드에 실패하였습니다.");
      }
    });
  };

  const handlePageChange = (e) => {
    const currentPage = parseInt(e.target.textContent);
    setcurrentPage(currentPage);
  };
  return (
    <>
      <Header title="자유게시판" link="/board" />
      <StyledBox backColor="#fafafa" padding="10px 0px" lineHeight="auto">
        <Profilebox>
          <UserProfile boardPage={true} />
          <Link to="/mypage">
            <Profilebtn>내정보</Profilebtn>
          </Link>
          <Profilebtn>
            <LogoutButton />
          </Profilebtn>
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
          <CheckNickname
            icon={WriterIcon}
            click={onIconClick}
            submit={onSubmit}
          />
        </BoardForm>
        {Content &&
          Content.map((board, index) => {
            return (
              <React.Fragment key={index}>
                <AddBoard
                  id={board._id}
                  user={board.userFrom._id}
                  time={board.createdAt}
                  writer={board.boardWriter}
                  title={board.boardTitle}
                  content={board.boardContent}
                  history={`${history}`}
                  onRemove={onRemove}
                />
              </React.Fragment>
            );
          })}
        <PaginationBox>
          <Pagination
            count={totalPage}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            size="small"
            hidePrevButton
            hideNextButton
          />
        </PaginationBox>
        <Footer />
      </StyledBox>
    </>
  );
}

export default withRouter(BoardView);
