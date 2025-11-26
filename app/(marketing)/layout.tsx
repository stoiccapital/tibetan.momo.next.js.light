export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-brand-50/40 text-neutral-900 font-sans">
      {children}
    </div>
  );
}

