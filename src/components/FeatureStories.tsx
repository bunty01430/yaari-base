import { featureStories } from '../data';
import { Reveal } from '../motion';

export function FeatureStories({ full = false }: { full?: boolean }) {
  const stories = full ? featureStories : featureStories.slice(0, 3);
  return <div className="story-stack">
    {stories.map((story, index) => <article className={'story-row accent-' + story.accent + ' ' + (index % 2 ? 'reverse' : '')} key={story.id} id={story.id}>
      <Reveal className="story-copy">
        <div className="story-title-line"><img src={story.icon} alt="" width="78" height="78" loading="lazy" /><div><span className="eyebrow">{story.kicker}</span><h2>{story.title}</h2></div></div>
        <p>{story.copy}</p>
        <span className="story-index">0{index + 1} / {String(stories.length).padStart(2, '0')}</span>
      </Reveal>
      <Reveal className="story-visual" delay={.08}>
        <div className="visual-grid" aria-hidden="true" />
        <span className="activity-tag"><i />{story.tag}</span>
        <div className="story-phone"><img src={story.screen} alt={story.alt} width="840" height="1867" loading="lazy" decoding="async" /></div>
        <span className="story-stamp">{index === 0 ? 'Say hi' : index === 1 ? 'Scene on?' : index === 2 ? 'Sent with yaari' : 'Treat your people'}</span>
      </Reveal>
    </article>)}
  </div>;
}
