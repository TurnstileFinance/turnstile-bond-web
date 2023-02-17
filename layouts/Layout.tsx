export default function Layout({
  children,
}: {
  children: React.ReactNode;
  hasMargin?: boolean;
}): JSX.Element {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <main className="relative flex flex-1 flex-col">{children}</main>
    </div>
  );
}
