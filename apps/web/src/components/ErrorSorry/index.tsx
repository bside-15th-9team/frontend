'use client';

import SorryIcon from '@/components/icons/SorryIcon';
import Link from 'next/link';

interface ErrorProps {
  redirectUrl?: string;
  mainText?: string;
  buttonText?: string;
}

export default function ErrorSorry({
  redirectUrl = '/main/ALL',
  mainText = '요청한 페이지를 찾을 수 없어요.',
  buttonText = '홈으로 돌아가기',
}: ErrorProps) {
  return (
    <div className="mt-36 flex flex-col items-center px-20">
      <SorryIcon />
      <div className="text-main1 mt-3 text-4xl font-bold">Sorry...</div>
      <div className="text-main1 text-lg font-bold">{mainText}</div>
      <div className="mt-10 w-full">
        <Link
          href={redirectUrl}
          className="block w-full rounded-[7px] bg-[#1E1C1C] py-3 text-white"
        >
          <span className="flex items-center justify-center gap-1">
            {buttonText}
          </span>
        </Link>
      </div>
    </div>
  );
}
