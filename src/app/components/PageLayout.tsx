import Header from "./Header";
import Navigation from "./Navigation";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white flex flex-col min-h-screen w-full">

      <Header />

      <Navigation />

      <div className="flex-1 w-full overflow-y-auto">
        {children}
      </div>

    </div>
  );
}