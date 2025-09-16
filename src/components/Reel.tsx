import React, { useState } from 'react';
import { REELS_VIDEOS } from '../objects/constants';
import { INSTAGRAM_LINK } from '../objects/constants';
import '../components/Reel.css';

const Reel: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Helper to play video when play button is clicked
  const handlePlay = (videoId: string) => {
    setPlayingId(videoId);
    setTimeout(() => {
      const videoEl = document.getElementById(`reel-video-${videoId}`) as HTMLVideoElement | null;
      if (videoEl) {
        videoEl.play();
      }
    }, 100);
  };

  return (
    <div className="reel-marquee-wrapper">
      <div className="reel-marquee">
        {[...REELS_VIDEOS, ...REELS_VIDEOS].map((video, idx) => {
          const isPlaying = playingId === video.id;
          return (
            <div
              className="reel-item"
              key={video.id + '-' + idx}
              onMouseEnter={() => {
                const marquee = document.querySelector('.reel-marquee') as HTMLElement;
                if (marquee) marquee.style.animationPlayState = 'paused';
              }}
              onMouseLeave={() => {
                const marquee = document.querySelector('.reel-marquee') as HTMLElement;
                if (marquee) marquee.style.animationPlayState = 'running';
              }}
            >
              <div className={`reel-video-container${isPlaying ? ' playing' : ''}`}
                style={{ position: 'relative' }}>
                <video
                  id={`reel-video-${video.id}`}
                  src={video.src}
                  className="reel-video"
                  muted={false}
                  loop
                  playsInline
                  controls={isPlaying}
                  style={{ filter: isPlaying ? 'none' : 'grayscale(1) brightness(0.7)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLVideoElement).style.filter = 'none'; }}
                  onMouseLeave={e => { if (!isPlaying) (e.currentTarget as HTMLVideoElement).style.filter = 'grayscale(1) brightness(0.7)'; }}
                  onClick={() => handlePlay(video.id)}
                  poster={video.thumbnail}
                />
                {!isPlaying && (
                  <button
                    className="reel-play-btn"
                    onClick={() => handlePlay(video.id)}
                    style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.8 }}
                  >
                    ▶
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* Instagram Button Below Marquee */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            color: '#E1306C',
            borderRadius: '30px',
            padding: '0.5rem 1.5rem',
            fontWeight: 600,
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            textDecoration: 'none',
            gap: '0.7rem',
            transition: 'background 0.2s',
          }}
        >
          <img
            src='/insta_logo.png'
            alt="Instagram"
            style={{ width: 36, height: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          />
          Follow us on Instagram
        </a>
      </div>
    </div>
  );
};

export default Reel;
