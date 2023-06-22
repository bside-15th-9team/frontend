import { useState } from 'react';

import { Convenience } from '../type';

interface HotTrendProps {
  convenience: Convenience;
}
export default function HotTrend({ convenience }: HotTrendProps) {
  // TODO:(@brightchul) 개별 상태 확인용 코드, 요구사항 구현시 삭제
  const [v, setV] = useState(10);

  return (
    <div className="bg-white">
      <button onClick={() => setV(v + 1)}>{v} button</button>
      {convenience} 이번주 핫트렌드{v}
      {/* TODO:(@brightchul) 스크롤 발생용 코드 추후 제거 */}
      {Array(30)
        .fill(0)
        .map((o, idx) => (
          <div key={idx}>{o}</div>
        ))}
    </div>
  );
}