import Link from "next/link";

export const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="text-center border-t py-8">
        <div className="flex items-center justify-center my-4 underline">
          <Link href="/" className="px-4">
            Link 1
          </Link>
          <Link href="/" className="px-4">
            Link 2
          </Link>
          <Link href="#" className="px-4">
            Link 3
          </Link>
          <Link href="#" className="px-4">
            Link 4
          </Link>
        </div>
      </div>
    </header>
  );
};
