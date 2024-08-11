import Link from "next/link";

import Image from "next/image";

import defaultImage from "@/assets/images/logo_valge.svg";


export const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="text-center py-8">
        <div className="flex justify-between my-4">
          <Link href="../#projektid" className="px-4">
            Works
          </Link>
          <Link href="../" className="logo-wrap relative h-20">
            <Image
              src={defaultImage}
              fill
              alt={"logo"}
              className="relative mb-2"
            />
            <div className="text-xl">veebiteed</div>
          </Link>
          <Link href="#kontakt" className="px-4">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};
