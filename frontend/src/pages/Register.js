import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Common/Header";
import StyledBox from "../components/Style/styledBox";
import StyledContainer from "../components/Style/styledContainer";
import CheckIdButton from "../components/Register/ChcekIdButton";
import RegisterInput from "../components/Register/RegisterInput";
import RegisterButton from "../components/Register/RegisterButton";
import RegisterSelect from "../components/Register/RegisterSelect";
import SchoolSearchResult from "../components/Register/SchoolSearchResult";
import { useDispatch } from "react-redux";
import { registerUser } from "../_actions/user_actions";
import { withRouter } from "react-router-dom";

const SCHOOL_ARR = [
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
  "홍익대학교",
  "가천대학교",
  "경기대학교",
  "단국대학교",
  "동국대학교",
  "명지대학교",
  "신한대학교",
  "한국항공대학교",
  "서울과학기술대학교",
  "서울교육대학교",
  "가톨릭대학교",
  "한국예술종합학교",
  "한성대학교",
  "한국체육대학교",
  "상명대학교",
  "육군사관학교",
  "숭의여자대학교",
  "총신대학교",
  "서경대학교",
  "서울사이버대학교",
  "대진대학교",
  "한국산업기술대학교",
  "한세대학교",
  "용인대학교",
  "안양대학교",
  "연성대학교",
  "인하공업전문대학교",
  "동아방송예술대학교",
  "여주대학교",
  "동남보건대학교",
  "계원예술대학교",
  "성결대학교",
].sort();

const entranceYearArray = [];

for (let i = 2000; i < 2022; i++) {
  entranceYearArray.push(i);
}

function Register({ history }) {
  const dispatch = useDispatch();
  const [inputs, setInput] = useState({
    userId: "",
    userPw: "",
    userEmail: "",
    userNickname: "",
    usableId: false,
  });

  const { userId, userPw, userEmail, userNickname, usableId } = inputs;

  const [option, setOption] = useState("2014");

  const [schoolInput, setSchoolInput] = useState("");
  const [searchResult, setSearchResult] = useState(SCHOOL_ARR);

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
      .post(`/register/checkId/${userId}`, { id: userId })
      .then((response) => {
        if (response.status === 200) {
          alert("사용가능한 아이디입니다.");
          setInput({
            ...inputs,
            usableId: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        alert("다른 아이디를 입력해주세요");
      });
  };

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  const handleSearch = (e) => {
    setSchoolInput(e.target.value);
    const result = SCHOOL_ARR.filter((school) => {
      return school.includes(e.target.value);
    });
    setSearchResult(result);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSchoolInput(e.target.textContent);
  };

  const SignUp = (e) => {
    e.preventDefault();
    if (usableId === false) {
      alert("아이디 중복확인을 해주세요");
      return;
    }
    if (!userId || !userPw || !userEmail || !userNickname) {
      alert("필수 항목을 작성해주세요");
      return;
    }
    if (!SCHOOL_ARR.includes(schoolInput)) {
      alert("학교를 선택해주세요");
      return;
    }
    alert(
      `${userId}, ${userPw}, ${userEmail}, ${userNickname}, ${option}, ${schoolInput}`
    );
    let body = {
      id: userId,
      password: userPw,
      email: userEmail,
      nickname: userNickname,
      entranceYear: option,
      school: schoolInput,
    };
    dispatch(registerUser(body))
      .then((response) => {
        console.log(response);
        if (response.payload.success) {
          alert("회원가입완료!");
          history.push("./");
        } else {
          alert("회원가입실패!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <StyledContainer>
      <div>
        <Header link={"./"} title="회원가입" backbutton={true} />
        <StyledBox padding="18px 16px" lineHeight="20px">
          <form onSubmit={checkId}>
            <RegisterInput
              labelName="아이디"
              name="userId"
              placeholder="아이디"
              onChange={onChange}
              value={userId}
            />
            <CheckIdButton onClick={checkId}>중복체크</CheckIdButton>
          </form>
          <form onSubmit={SignUp}>
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

            {schoolInput && (
              <SchoolSearchResult
                datas={searchResult}
                handleSearchClick={handleSearchClick}
              />
            )}
            <RegisterButton type="submit">회원가입</RegisterButton>
          </form>
        </StyledBox>
      </div>
    </StyledContainer>
  );
}

export default withRouter(Register);
