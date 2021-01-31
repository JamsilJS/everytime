import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Header from "../../Common/Header";
import AddComment from "../../Board/Section/AddComment";

function Comment() {
   
    return (
        <>
            <Header title="내가 댓글 단 글" link="/board" backbutton={true} />
        </>
    )
}

export default withRouter(Comment);