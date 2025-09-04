import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Google, Linkedin } from 'react-bootstrap-icons';

const LoginPage = () => {
    // 'Sign Up' 패널이 활성화되었는지 추적하는 상태
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => setIsSignUpActive(true);
    const handleSignInClick = () => setIsSignUpActive(false);

    return (
        <div className="login-page-body">
            {/* isSignUpActive 상태에 따라 클래스 이름이 동적으로 바뀝니다. */}
            <div className={`login-container ${isSignUpActive ? 'right-panel-active' : ''}`} id="container">
                {/* 회원가입 폼 */}
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>계정 생성</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <Facebook />
                            </a>
                            <a href="#" className="social">
                                <Google />
                            </a>
                            <a href="#" className="social">
                                <Linkedin />
                            </a>
                        </div>
                        <input type="text" placeholder="이름" />
                        <input type="email" placeholder="이메일" />
                        <input type="password" placeholder="비밀번호" />
                        <input type="password" placeholder="비밀번호 확인" />
                        <button>회원가입</button>
                    </form>
                </div>
                {/* 로그인 폼 */}
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>로그인</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <Facebook />
                            </a>
                            <a href="#" className="social">
                                <Google />
                            </a>
                            <a href="#" className="social">
                                <Linkedin />
                            </a>
                        </div>
                        <input type="email" placeholder="이메일" />
                        <input type="password" placeholder="비밀번호" />
                        <button>로그인</button>
                        <a href="#">비밀번호를 잊으셨나요?</a>
                        <Link to="/" className="to-main-link">
                            메인으로 돌아가기
                        </Link>
                    </form>
                </div>
                {/* 오버레이 (애니메이션 패널) */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>돌아오신 것을 환영해요!</h1>
                            <p>계속 연결하려면 개인 정보로 로그인하세요.</p>
                            <button className="ghost" onClick={handleSignInClick}>
                                로그인
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>안녕하세요!</h1>
                            <p>개인 정보를 입력하고 여정을 시작하세요.</p>
                            <button className="ghost" onClick={handleSignUpClick}>
                                가입하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
