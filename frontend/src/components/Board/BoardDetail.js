import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function BoardDetail(props) {
    console.log(props);
    const BoardId = props.match.params.id;
    const variable = { boardId : BoardId };

    const [BoardDetail, setBoardDetail] = useState([])
    
    useEffect(() => {
        axios.post(`${props.match.path}`, variable)
            .then(response => {
                console.log(response);
                if(response.data.success) {
                    console.log(1);
                    // setBoardDetail(response.data);
                } else {
                    alert("게시글 가져오기에 실패했습니다.")
                }
            })
    }, []);
    
    return (
        <div>
            <div>Hi</div>
        </div>
    )
}

export default withRouter(BoardDetail);
