import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="text-center border-t py-8">
        <small>Year: {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};
