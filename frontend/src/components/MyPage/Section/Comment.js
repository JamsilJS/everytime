import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Header from "../../Common/Header";
import AddComment from "../../Board/Section/AddComment";

function Comment() {
    const [MyComment, setMyComment] = useState([]);
    const getMyComment = () => {
        const userId = window.localStorage.getItem("userId");
        console.log(userId);
        axios
        .post('/comment/comments', { 'userFrom' : userId })
        .then((response) => {
            console.log(response);
            setMyComment(response.data.comments);
        })
        .catch((e) => alert(`좋아요한 게시글을 불러오는데 실패했습니다.`));
    };

    useEffect(() => {
        getMyComment();
    }, []);

    return (
        <>
            <Header title="내가 댓글 단 글" link="/board" backbutton={true} />
            { MyComment && MyComment.map((comment, index) => {
                // console.log('board',board)
                return(
                    <React.Fragment key={index}>
                        <Link to={`../board/${comment.boardFrom}`}>
                            <AddComment
                                id={comment.boardFrom}
                                time={comment.createdAt}
                                writer={comment.commentWriter}
                                title={comment.commentTitle}
                                content={comment.commentContent}
                            />
                        </Link>
                    </React.Fragment>
                )})
            }
        </>
    )
}

export default withRouter(Comment);