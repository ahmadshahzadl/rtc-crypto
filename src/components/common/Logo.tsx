import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 cursor-pointer ${className}`}>
      <div className="text-3xl font-extrabold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent m-0">
        RTC 
      </div>
      {/* Live Trading Status */}
      <div className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-[10px]"
      style={{paddingTop: '0.1rem', paddingBottom: '0.1rem', paddingLeft: '0.5rem', paddingRight: '0.5rem'}}
      >
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <span className="text-xs font-semibold text-emerald-500 tracking-wider"
        >LIVE</span>
      </div>
    </div>
  );
};

export default Logo;