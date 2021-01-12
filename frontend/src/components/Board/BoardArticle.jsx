import React from 'react'
import styled from 'styled-components';

const BoardBox = styled.div`
  background-color: #fff;
  margin: 0px 10px;
  padding: 15px;
  border: 1px solid #ddd;

  color: #353535;
  font-size: 13px;
`

// const BoardUser = styled.div`
//   display: flex;
//   height: 20px;
//   margin-bottom: 10px;
// `

// const BoardUserImg = styled.img`
//   width: 20px;
//   height: 20px;
//   border-radius: 3px;
//   margin-right: 4px;
// `
// const BoardUserID = styled.p`
//   color: #353535;
//   font-size: 11px;
//   font-weight: bold;
//   line-height: 20px;
// `

const BoardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`

const BoardContent = styled.div`
  font-weight: normal;
  margin-bottom: 20px;
`

const Buttons = styled.div`
  width: 16px;
  height: 16px;
`

const Like = styled.button`
  width: 16px;
  height: 16px;
`

const Comment = styled.button`
  width: 16px;
  height: 16px;
`


const BoardArticle = (title, content) => {
    return (
        <BoardBox>
            {/* <BoardUser>
                <BoardUserImg src={profileImage} alt="profile"/>
                <BoardUserID>익명</BoardUserID>
            </BoardUser> */}
            <BoardTitle>{title}</BoardTitle>
            <BoardContent>{content}</BoardContent>
            <Buttons>
                <Like></Like>
                <Comment></Comment>
            </Buttons>
      </BoardBox>
    )
}

export default BoardArticle
