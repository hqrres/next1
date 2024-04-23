import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="kontakt" className="container mx-auto pb-20 mt-40">
      <div className="text-center py-8">
        <a className="mx-auto my-2 text-xl" href="mailto:elektrom@tutanota.com">elektrom@tutanota.com</a>
        {/* <small>Aasta: {new Date().getFullYear()}</small> */}
      </div>
    </footer>
  );
};
