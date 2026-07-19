import { type KeyboardEvent as ReactKeyboardEvent, useCallback, useEffect, useMemo, useRef } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { type GalleryTheme, screenshots, type Screenshot } from '../data';
import { Reveal } from '../motion';

const filters: GalleryTheme[] = ['all', 'light', 'dark'];

function ScreenModal({ item, visible, onSelect, onClose }: { item: Screenshot; visible: Screenshot[]; onSelect: (id: string) => void; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const index = visible.findIndex((screen) => screen.id === item.id);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onSelect(visible[(index + 1) % visible.length].id);
      if (event.key === 'ArrowLeft') onSelect(visible[(index - 1 + visible.length) % visible.length].id);
      if (event.key === 'Tab') {
        const controls = Array.from(document.querySelectorAll<HTMLElement>('.screen-modal button'));
        if (!controls.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener('keydown', onKey);
      previousFocus.current?.focus();
    };
  }, [item.id, onClose, onSelect, visible]);

  const index = visible.findIndex((screen) => screen.id === item.id);
  const previous = visible[(index - 1 + visible.length) % visible.length];
  const next = visible[(index + 1) % visible.length];

  return <m.div className="screen-modal" role="dialog" aria-modal="true" aria-labelledby="screen-modal-title" aria-describedby="screen-modal-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.currentTarget === event.target && onClose()}>
    <m.div className="modal-card" initial={reduced ? { opacity: 0 } : { opacity: 0, scale: .94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: reduced ? .12 : .35 }}>
      <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label="Close screenshot preview">×</button>
      <div className="modal-info"><span className={'mode-pill ' + item.theme}>{item.theme} mode</span><h2 id="screen-modal-title">{item.title}</h2><p id="screen-modal-description">{item.description}</p><small>Use ← → keys to browse</small></div>
      <div className="modal-phone"><img src={item.src} alt={item.alt} width="840" height="1867" /></div>
      <button className="modal-arrow previous" type="button" onClick={() => onSelect(previous.id)} aria-label={'Previous: ' + previous.title}>←</button>
      <button className="modal-arrow next" type="button" onClick={() => onSelect(next.id)} aria-label={'Next: ' + next.title}>→</button>
    </m.div>
  </m.div>;
}

export function ScreenshotGallery({ limit }: { limit?: number }) {
  const [params, setParams] = useSearchParams();
  const reelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rawTheme = params.get('theme');
  const filter: GalleryTheme = filters.includes(rawTheme as GalleryTheme) ? rawTheme as GalleryTheme : 'all';
  const visible = useMemo(() => {
    const list = filter === 'all' ? screenshots : screenshots.filter((screen) => screen.theme === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);
  const selectedId = params.get('screen');
  const selected = screenshots.find((screen) => screen.id === selectedId) ?? null;

  const updateParams = useCallback((next: { theme?: GalleryTheme; screen?: string | null }) => {
    setParams((current) => {
      const result = new URLSearchParams(current);
      if (next.theme) result.set('theme', next.theme);
      if (next.screen === null) result.delete('screen');
      else if (next.screen) result.set('screen', next.screen);
      return result;
    }, { replace: true });
  }, [setParams]);

  useEffect(() => {
    if (selected && !visible.some((screen) => screen.id === selected.id)) updateParams({ screen: null });
  }, [selected, updateParams, visible]);

  const selectScreen = useCallback((id: string) => updateParams({ screen: id }), [updateParams]);
  const closeScreen = useCallback(() => updateParams({ screen: null }), [updateParams]);
  const onReelKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    const cards = Array.from(reelRef.current?.querySelectorAll<HTMLButtonElement>('.screen-card') ?? []);
    if (!cards.length) return;
    const activeIndex = cards.indexOf(document.activeElement as HTMLButtonElement);
    if (activeIndex < 0) return;
    event.preventDefault();
    const targetIndex = event.key === 'Home' ? 0 : event.key === 'End' ? cards.length - 1 : event.key === 'ArrowRight' ? Math.min(activeIndex + 1, cards.length - 1) : Math.max(activeIndex - 1, 0);
    cards[targetIndex].focus();
    cards[targetIndex].scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
  };

  return <>
    <div className="gallery-toolbar">
      <div><span className="eyebrow">Real app screens</span><h2>Not a mockup. <em>This is Yaari24.</em></h2></div>
      <div className="filter-tabs" role="group" aria-label="Filter screenshots by theme">
        {filters.map((option) => <button key={option} className={filter === option ? 'active' : ''} type="button" aria-pressed={filter === option} onClick={() => updateParams({ theme: option, screen: null })}>{option === 'all' ? 'All' : option}</button>)}
      </div>
    </div>
    <div ref={reelRef} className="screen-reel" aria-label="Yaari24 app screenshot gallery. Use Left and Right arrow keys to browse." onKeyDown={onReelKeyDown}>
      {visible.map((screen, index) => <Reveal className={'reel-item tilt-' + (index % 3)} key={screen.id} delay={Math.min(index * .04, .2)}>
        <button type="button" className="screen-card" onClick={() => updateParams({ screen: screen.id })} aria-label={'Open larger preview of ' + screen.title}>
          <span className={'mode-pill ' + screen.theme}>{screen.theme}</span>
          <div className={'phone-frame ' + screen.theme}><span className="phone-speaker" /><img src={screen.src} alt={screen.alt} width="840" height="1867" loading="lazy" decoding="async" /></div>
          <span className="screen-card-copy"><strong>{screen.title}</strong><small>{screen.description}</small></span>
        </button>
      </Reveal>)}
    </div>
    {selected ? <ScreenModal item={selected} visible={visible} onSelect={selectScreen} onClose={closeScreen} /> : null}
  </>;
}
