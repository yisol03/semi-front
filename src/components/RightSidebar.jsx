import React from 'react';

const RightSidebar = () => {
    return (
        <div
            className="collapse d-md-block"
            id="recommendCollapse"
            style={{ marginTop: '20px' }} // 위에 살짝 띄움
        >
            <div className="recommend-section mb-5">
                <div className="section-header">
                    <h5>추천 음악</h5>
                    <a href="#">{'>'}</a>
                </div>
                <div className="card-grid">
                    <div className="music-card">
                        <img src="https://via.placeholder.com/150" className="circular" />
                        <div className="card-title">돌고 돌아</div>
                        <div className="card-artist">세븐틴</div>
                    </div>
                    <div className="music-card">
                        <img src="https://via.placeholder.com/150" className="circular" />
                        <div className="card-title">Body & Soul</div>
                        <div className="card-artist">양요섭</div>
                    </div>
                </div>
            </div>

            <div className="recommend-section mb-5">
                <div className="section-header">
                    <h5>내 취향 앨범</h5>
                    <a href="#">{'>'}</a>
                </div>
                <div className="card-grid">
                    <div className="music-card">
                        <img src="https://via.placeholder.com/150" />
                        <div className="card-title">Chocolate Box</div>
                        <div className="card-artist">양요섭</div>
                    </div>
                    <div className="music-card">
                        <img src="https://via.placeholder.com/150" />
                        <div className="card-title">Love poem</div>
                        <div className="card-artist">아이유</div>
                    </div>
                </div>
            </div>

            <div className="recommend-section">
                <div className="section-header">
                    <h5>플레이리스트</h5>
                    <a href="#">{'>'}</a>
                </div>
                <div className="card-grid">
                    <div
                        className="playlist-card"
                        style={{
                            backgroundImage: "url('https://via.placeholder.com/300x150/ff7979/fff?text=Playlist1')",
                        }}
                    >
                        <div className="playlist-title">수면 맛집</div>
                        <div className="playlist-subtitle">Playlist</div>
                    </div>
                    <div
                        className="playlist-card"
                        style={{
                            backgroundImage: "url('https://via.placeholder.com/300x150/ff7979/fff?text=Playlist2')",
                        }}
                    >
                        <div className="playlist-title">K-pop 노동요</div>
                        <div className="playlist-subtitle">Playlist</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
