import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import Player from './components/Player';

function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    const handleSidebarClose = () => setShowSidebar(false);
    const handleSidebarShow = () => setShowSidebar(true);

    return (
        <>
            {/* 1. 헤더: 페이지 최상단에 고정 */}
            <Header onShowSidebar={handleSidebarShow} />

            <div className="container-fluid">
                <div className="row">
                    {/* 2. 데스크톱용 사이드바: 넓은 화면에서만 보이는 컬럼 */}
                    <nav id="sidebar" className="col-md-2 d-none d-md-block p-4">
                        <Sidebar />
                    </nav>

                    {/* 3. 모바일용 Offcanvas 사이드바: 햄버거 버튼으로 제어 */}
                    <Offcanvas show={showSidebar} onHide={handleSidebarClose} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>메뉴</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Sidebar />
                        </Offcanvas.Body>
                    </Offcanvas>

                    {/* 4. 메인 콘텐츠 영역: 나머지 공간을 모두 차지 */}
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div className="row">
                            <div className="col-lg-8">
                                <MainContent />
                            </div>
                            <div className="col-lg-4">
                                <RightSidebar />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* 5. 플레이어 */}
            <Player />
        </>
    );
}

export default App;
