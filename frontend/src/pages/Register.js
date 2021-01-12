import React, { useEffect, useState } from "react";
import axios from "axios";
import CheckIdButton from "../components/Register/ChcekIdButton";
import RegisterInput from "../components/Register/RegisterInput";
import RegisterButton from "../components/Register/RegisterButton";
import RegisterSelect from "../components/Register/RegisterSelect";
import SchoolSearchResult from "../components/Register/SchoolSearchResult";

const schoolArr = [
  "서울대학교",
  "카이스트",
  "포항공과대학교",
  "연세대학교",
  "고려대학교",
  "서강대학교",
  "성균관대학교",
  "한양대학교",
  "이화여자대학교",
  "중앙대학교",
  "경희대학교",
  "서울시립대학교",
  "한국외국어대학교",
  "광운대학교",
  "동국대학교",
  "건국대학교",
  "홍익대학교",
  "아주대학교",
  "인하대학교",
  "숙명여자대학교",
  "국민대학교",
  "세종대학교",
  "숭실대학교",
  "덕성여자대학교",
  "서울여자대학교",
].sort();

function Register({ history }) {
  const [inputs, setInput] = useState({
    userId: "",
    userPw: "",
    userEmail: "",
    userNickname: "",
    usableId: false,
  });

  const { userId, userPw, userEmail, userNickname, usableId } = inputs;

  const [option, setOption] = useState("2014");

  const entranceYearArray = [2014, 2013, 2012, 2011, 2010];

  const [schoolInput, setSchoolInput] = useState("");
  const [searchResult, setSearchResult] = useState(schoolArr);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const checkId = (e) => {
    e.preventDefault();
    axios
      .post("/register/checkId", {
        id: { userId },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("사용가능한 아이디입니다.");
          setInput({
            ...inputs,
            usableId: true,
          });
        } else if (response.status === 404) {
          alert("다른 아이디를 입력해주세요");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleOption = (e) => {
    setOption(e.target);
  };

  const handleSearch = (e) => {
    setSchoolInput(e.target.value);
    const result = schoolArr.filter((school) => {
      return school.includes(e.target.value);
    });
    setSearchResult(result);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSchoolInput(e.target.textContent);
  };

  const SignUp = () => {
    if (usableId === false) {
      alert("아이디 중복확인을 해주세요");
      return;
    }
    if (!userId || !userPw || !userEmail || !userNickname) {
      alert("필수 항목을 작성해주세요");
      return;
    }
    axios
      .post("/register", {
        id: { userId },
        password: { userPw },
        email: { userEmail },
        nickname: { userNickname },
        entranceYear: { option },
        school: { schoolInput },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("회원가입완료!");
          history.push("./board");
        } else if (response.status === 404) {
          alert("회원가입실패!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={SignUp}>
        <RegisterInput
          labelName="아이디"
          name="userId"
          placeholder="아이디"
          onChange={onChange}
          value={userId}
        />
        <CheckIdButton onClick={checkId}>중복체크</CheckIdButton>
        <RegisterInput
          labelName="비밀번호"
          name="userPw"
          placeholder="비밀번호"
          onChange={onChange}
          value={userPw}
        />
        <RegisterInput
          labelName="이메일"
          name="userEmail"
          placeholder="이메일"
          onChange={onChange}
          value={userEmail}
        />
        <RegisterInput
          labelName="닉네임"
          name="userNickname"
          placeholder="닉네임"
          onChange={onChange}
          value={userNickname}
        />
        <RegisterSelect
          labelName="입학년도"
          handleOption={handleOption}
          option={option}
          dataArr={entranceYearArray}
        />
        <RegisterInput
          labelName="학교선택"
          name="userSchool"
          placeholder="학교를 검색하세요"
          onChange={handleSearch}
          value={schoolInput}
        />
        <SchoolSearchResult
          datas={searchResult}
          handleSearchClick={handleSearchClick}
        />
        <RegisterButton type="submit">회원가입</RegisterButton>
        {userId}
        {userPw}
        {userEmail}
        {userNickname}
        {option}
        {schoolInput}
      </form>
    </div>
  );
}

export default Register;
