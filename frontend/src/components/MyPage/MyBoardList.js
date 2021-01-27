import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from "axios";
import Header from '../Common/Header';
import AddBoard from '../Board/AddBoard';

function MyBoardList({ match }) {
    const userFrom = localStorage.getItem('userId');
    const [MyBoard, setMyBoard] = useState([]);

    useEffect(() => {
        console.log(match);
        axios.post('/user/get/myBoard', {'boardFrom': userFrom})
            .then(response => {
                console.log(response.data);
                if(response.data.success) {
                    setMyBoard(response.data.boards);
                } else {
                    alert("즐겨찾기 정보를 가져오는데 실패했습니다.")
                }
            })
    }, [])

    return (
        <>
            <Header title="내가 쓴 글" backbutton={true} />
            { MyBoard && MyBoard.map((board, index) => {
                // console.log('board',board)
                return(
                    <React.Fragment key={index}>
                        <Link to={`../board/${board._id}`}>
                            <AddBoard
                            writer={board.boardWriter}
                            title={board.boardTitle}
                            content={board.boardContent}
                            />
                        </Link>
                    </React.Fragment>
                )})
            }
        </>
    )
}

export default withRouter(MyBoardList);
