export default function Ahref({
  href,
  children,
  blank,
}: {
  href: string;
  children: React.ReactNode;
  blank?: boolean;
}) {
  if (!blank) {
    return (
      <a href={href} className="font-semibold text-link">
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-link"
    >
      {children}
    </a>
  );
}
