import { Reveal } from '../motion';

const controls = [
  { icon: '/assets/app-icons/report.webp', title: 'Report', copy: 'Flag the exact message' },
  { icon: '/assets/app-icons/block.webp', title: 'Block', copy: 'Close the door instantly' },
  { icon: '/assets/app-icons/moderation.webp', title: 'Moderate', copy: 'Keep rooms welcoming' },
];

export function SafetyFlow({ compact = false }: { compact?: boolean }) {
  return <div className={'safety-flow ' + (compact ? 'compact' : '')}>
    <Reveal className="reported-message">
      <span className="avatar-mark">N</span>
      <div><small>@not_the_vibe</small><p>This message crossed the line.</p></div>
      <button type="button" aria-label="Open message actions">•••</button>
    </Reveal>
    <Reveal className="moderation-sheet" delay={0.1}>
      <div className="sheet-handle" />
      <span className="sheet-label">Choose an action</span>
      <div className="control-list">
        {controls.map((control) => <div key={control.title}><img src={control.icon} alt="" width="54" height="54" loading="lazy" /><span><strong>{control.title}</strong><small>{control.copy}</small></span></div>)}
      </div>
    </Reveal>
    <Reveal className="resolved-chip" delay={0.2}><img src="/assets/app-icons/shield-check.webp" alt="" width="46" height="46" loading="lazy" /><span><small>Review complete</small><strong>Space protected</strong></span></Reveal>
  </div>;
}
