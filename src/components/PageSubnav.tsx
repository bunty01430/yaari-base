type PageSubnavItem = { href: string; label: string };

export function PageSubnav({ label = 'On this page', items }: { label?: string; items: PageSubnavItem[] }) {
  return <nav className="page-subnav" aria-label={label}>
    <div className="container page-subnav-inner">
      <span>{label}</span>
      <div>{items.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
    </div>
  </nav>;
}