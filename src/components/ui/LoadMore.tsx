import React from 'react';
import { ChevronDown } from 'lucide-react';

interface LoadMoreProps {
  hasMore: boolean;
  onLoadMore: () => void;
  loading?: boolean;
  className?: string;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ 
  hasMore, 
  onLoadMore, 
  loading = false,
  className = ""
}) => {
  if (!hasMore) return null;

  return (
    <div className={`flex justify-center mt-12 ${className}`}>
      <button
        onClick={onLoadMore}
        disabled={loading}
        className="flex items-center gap-2 px-6 py-3 bg-transparent text-[#050505] font-nunito font-medium hover:bg-[#F5F5F7] transition-all duration-300 rounded-xl group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5 ${loading ? 'animate-bounce' : ''}`} />
        <span>{loading ? 'Loading...' : 'Load more'}</span>
      </button>
    </div>
  );
};