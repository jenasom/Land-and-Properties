import React, { useState } from 'react';
import { Home, Trees } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: 'House' | 'Land';
  fallbackTitle?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Nigerian Real Estate Property',
  fallbackCategory = 'House',
  fallbackTitle,
  className = '',
  containerClassName = '',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${containerClassName}`}>
      {/* Skeleton Pulse */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-emerald-500 animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="w-full h-full min-h-[180px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3 text-emerald-400 backdrop-blur-sm border border-white/10">
            {fallbackCategory === 'Land' ? <Trees size={24} /> : <Home size={24} />}
          </div>
          <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">
            {fallbackCategory === 'Land' ? 'Verified Land Scheme' : 'Nigeria Estate House'}
          </span>
          <p className="text-sm font-medium text-slate-200 line-clamp-2 max-w-xs">
            {fallbackTitle || alt}
          </p>
          <span className="mt-3 text-[11px] text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/5">
            Verified Physical Allocation Guaranteed
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          {...rest}
        />
      )}
    </div>
  );
};
