import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { List, Gear, Bell, Search } from 'react-bootstrap-icons';

const Header = ({ onShowSidebar }) => {
    return (
        <Navbar expand="lg" className="main-header p-3" sticky="top">
            <Container fluid>
                {/* 모바일용 사이드바 토글 버튼 */}
                <button
                    onClick={onShowSidebar}
                    className="btn btn-icon d-md-none me-2"
                    aria-controls="sidebarOffcanvas"
                >
                    <List size={24} />
                </button>

                <Form className="search-bar d-flex flex-grow-1 me-3">
                    <Search className="search-icon" />
                    <Form.Control type="search" placeholder="검색" className="me-2" aria-label="Search" />
                </Form>

                {/* 헤더 메뉴 토글 버튼 (햄버거) */}
                <Navbar.Toggle aria-controls="headerNav" className="ms-auto" />

                {/* 헤더 메뉴 */}
                <Navbar.Collapse id="headerNav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#">이벤트</Nav.Link>
                        <Nav.Link href="#">이용권 구매</Nav.Link>
                        <Nav.Link href="#">보관함</Nav.Link>
                        <Nav.Link href="#">마이 페이지</Nav.Link>
                        <Nav.Link href="#" className="d-none d-lg-block ms-lg-4">
                            <Gear size={20} />
                        </Nav.Link>
                        <Nav.Link href="#" className="d-none d-lg-block">
                            <Bell size={20} />
                        </Nav.Link>
                        <Nav.Link href="#" className="ms-3">
                            <img
                                src="https://via.placeholder.com/32"
                                className="profile-pic rounded-circle"
                                alt="프로필"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
