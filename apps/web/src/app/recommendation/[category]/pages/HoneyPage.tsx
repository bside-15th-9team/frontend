import { RecommendationCategory } from '@/app/type';
import ContentItem from '../components/HoneyContentItem';

interface HoneyPageProps {
  category: RecommendationCategory;
}

export default function HoneyPage({ category }: HoneyPageProps) {
  return (
    <div>
      <div className="mt-10 text-[22px] font-medium">
        <div>뻔한 재료들의 놀라운 변신</div>
        <div>편의점 꿀조합</div>
      </div>
      <div className="mt-[30px] flex flex-col gap-[30px]">
        <ContentItem
          imageURL={''}
          subTitle={'편의점 꿀조합의 정석!'}
          mainTitle={'마크정식'}
        />
        <ContentItem
          imageURL={''}
          subTitle={'편의점 꿀조합의 정석!'}
          mainTitle={'마크정식'}
        />
        <ContentItem
          imageURL={''}
          subTitle={'편의점 꿀조합의 정석!'}
          mainTitle={'마크정식'}
        />
        <ContentItem
          imageURL={''}
          subTitle={'편의점 꿀조합의 정석!'}
          mainTitle={'마크정식'}
        />
        <ContentItem
          imageURL={''}
          subTitle={'편의점 꿀조합의 정석!'}
          mainTitle={'마크정식'}
        />
      </div>
    </div>
  );
}
