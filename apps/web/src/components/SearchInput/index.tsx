'use client';

import SearchIconButton from '../SearchIconButton';
import SearchIcon from '../icons/SearchIcon';

interface SearchInputProps {
  disabled?: boolean;
  placeholder?: string;
  onClick?: () => void;
  onSearch?: () => void;
  size?: 'small' | 'normal';
}

const sizeClasses = {
  small: 'h-[37px]',
  normal: 'h-[48px]',
} as const;

export default function SearchInput({
  onClick,
  onSearch,
  size = 'normal',
  ...props
}: SearchInputProps) {
  const inputSize = sizeClasses[size];

  return (
    <div
      className={`relative flex w-full items-center justify-between rounded-full bg-white pl-[20px] text-[17px] ${inputSize}`}
      onClick={onClick}
    >
      <input
        type="text"
        className="placeholder-[#D9D9D9]} w-full bg-transparent text-black"
        {...props}
      />
      <button className="absolute right-[10px] p-1" onClick={onSearch}>
        <SearchIcon type="black" />
      </button>
    </div>
  );
}
