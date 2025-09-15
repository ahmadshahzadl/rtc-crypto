import React from "react";

const youtubeVideos = [
  {
    title: "RTC - How to Trade Like a Pro | Rao Umer",
    embed: "https://www.youtube.com/embed/UU_CZTlVRn8?si=EFnzJ8aaUeQQeeFB",
    url: "https://www.youtube.com/watch?v=UU_CZTlVRn8",
  },
  {
    title: "RTC - Smart Money Concepts Explained",
    embed: "https://www.youtube.com/embed/YabA-kLv4rE?si=BUsWwQAYF8ThejGn",
    url: "https://www.youtube.com/watch?v=YabA-kLv4rE",
  },
  {
    title: "RTC - Volume Spread Analysis Masterclass",
    embed: "https://www.youtube.com/embed/TazeBFTe2-o?si=ez1kiNJwFCBGIfln",
    url: "https://www.youtube.com/watch?v=TazeBFTe2-o",
  },
  {
    title: "RTC - Institutional Trading Secrets",
    embed: "https://www.youtube.com/embed/DgfaeHEWArE?si=K47myyov-3HYb-vr",
    url: "https://www.youtube.com/watch?v=DgfaeHEWArE",
  },
];

const YoutubeVideosSection: React.FC = () => {
  return (
    <section
      className="youtube-videos-section"
      style={{
        padding: "3rem 1rem",
        width: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        position: "relative",
        boxSizing: "border-box",
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(32, 26, 46, 0.16) 40%, rgba(29, 29, 29, 0.1) 100%)",
        borderRadius: 0,
        maxWidth: "100vw",
      }}
    >
      <div
        className="youtube-header-3d"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.08em",
            color: "#6366f1",
            background: "rgba(99,102,241,0.08)",
            borderRadius: 12,
            padding: "0.3rem 1.2rem",
            marginBottom: 10,
          }}
        >
          RTC VIDEOS
        </span>
        <h2
          className="text-3xl font-bold text-center"
          style={{
            fontSize: "2rem",
            lineHeight: 1.2,
            margin: 0,
            fontWeight: "bold",
            // Responsive font sizes
            textShadow: "0 0 10px rgba(99,102,241,0.3)",
          }}
        >
          Featured
          <span
            style={{
              background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            &nbsp; YouTube Videos
          </span>
        </h2>
      </div>
      <div
        className="youtube-videos-flex"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.2rem",
          width: "100%",
          justifyContent: "center",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {youtubeVideos.map((video, idx) => (
          <div
            key={idx}
            className="youtube-card"
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 2px 12px 0 rgba(80,80,180,0.10)",
              cursor: "pointer",
              transition: "transform 0.2s",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid #6366f1",
              margin: 0,
              padding: 0,
              maxWidth: 275,
              width: "100%",
              minHeight: 160,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => window.open(video.url, "_blank")}
            title={video.title}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.04)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              className="youtube-card-iframe-container"
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 aspect ratio
                background: "#18181b",
                minHeight: 80,
                maxHeight: 120,
              }}
            >
              <iframe
                src={video.embed}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px 14px 0 0",
                  border: "none",
                  minHeight: 80,
                  maxHeight: 120,
                }}
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <div
              className="youtube-card-title-container"
              style={{
                width: "100%",
                height: 44,
                background: "rgba(255,255,255,0.08)",
                borderRadius: "0 0 14px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                padding: 0,
              }}
            >
              <h3
                className="youtube-card-title"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#a5b4fc",
                  margin: 0,
                }}
              >
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* No grid media queries needed for flex-wrap */}
    </section>
  );
};

export default YoutubeVideosSection;
