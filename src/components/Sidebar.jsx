import React from 'react';

const Sidebar = () => {
    return (
        <>
            <a href="#" className="sidebar-logo">
                {' '}
                semi-project{' '}
            </a>
            <ul className="sidebar-nav mt-4">
                <li>
                    <a href="#">MY차트 50</a>
                </li>
                <li>
                    <a href="#">아티스트</a>
                </li>
                <li>
                    <a href="#">국내음악</a>
                </li>
                <li>
                    <a href="#">해외음악</a>
                </li>
                <li>
                    <a href="#">장르음악</a>
                </li>
                <li>
                    <a href="#">추천음악</a>
                </li>
                <li>
                    <a href="#">뮤직비디오</a>
                </li>
            </ul>
            <hr className="sidebar-divider" />
            <ul className="sidebar-nav">
                <li>
                    <a href="#">MY 음악 취향</a>
                </li>
                <li>
                    <a href="#">MY 음악 분석</a>
                </li>
                <li>
                    <a href="#">MY 좋아요</a>
                </li>
                <li>
                    <a href="#">MY 플레이리스트</a>
                </li>
                <li>
                    <a href="#">MY 아티스트</a>
                </li>
            </ul>
        </>
    );
};

export default Sidebar;
