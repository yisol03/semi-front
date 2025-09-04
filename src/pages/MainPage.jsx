import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import RightSidebar from '../components/RightSidebar';
import Player from '../components/Player';

const MainPage = () => {
    // 모바일 사이드바의 열림/닫힘 상태를 관리합니다.
    const [showSidebar, setShowSidebar] = useState(false);
    const handleSidebarClose = () => setShowSidebar(false);
    const handleSidebarShow = () => setShowSidebar(true);

    return (
        <>
            {/* 모바일용 Offcanvas 메뉴 */}
            <Offcanvas show={showSidebar} onHide={handleSidebarClose} id="sidebarOffcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>메뉴</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Sidebar />
                </Offcanvas.Body>
            </Offcanvas>

            <div className="container-fluid">
                <div className="row">
                    {/* 데스크톱용 사이드바 */}
                    <nav id="sidebar" className="col-md-2 d-none d-md-block p-4">
                        <Sidebar />
                    </nav>

                    {/* 메인 영역 */}
                    <div className="col-md-10 ms-sm-auto">
                        <Header onShowSidebar={handleSidebarShow} />

                        <div className="d-flex">
                            <main className="col-12 col-md-7 p-4">
                                <MainContent />
                            </main>
                            <aside id="right-sidebar" className="col-12 col-md-5 p-4">
                                <RightSidebar />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

            <Player />
        </>
    );
};

export default MainPage;
