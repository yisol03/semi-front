import React, { useState, useEffect } from 'react';

const MainContent = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setChartData(data));
    }, []);

    return (
        <>
            <div style={{ marginTop: '24px' }}></div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="fw-bold">
                    MY차트 50 <small className="text-muted fs-6" id="current-date"></small>
                </h3>
                <a href="#" className="text-decoration-none text-secondary">
                    더보기
                </a>
            </div>

            <div className="d-flex align-items-center mb-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="selectAll" />
                    <label className="form-check-label" htmlFor="selectAll">
                        {' '}
                        전체선택{' '}
                    </label>
                </div>
                <button className="btn btn-link text-decoration-none text-secondary ms-3">
                    <i className="bi bi-shuffle"></i> 셔플재생
                </button>
            </div>

            <ul id="chart-list">
                {chartData.map((song) => (
                    <li key={song.rank} className="chart-item">
                        <div className="title">{song.title}</div>
                        <div className="artist-name">{song.artist}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MainContent;
