import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container mx-auto py-12 text-center border-b">
      <div>
        <h1 className="text-2xl md:text-4xl">
          Heading 1
        </h1>
        <p className="my-6 text-lg">
          Follow me on{" "}
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            Here
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
