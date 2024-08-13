import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { title, link, logo, logoWhite } = client;
  return (
    <div className="ud-single-logo mb-5 cursor-pointer mr-10 max-w-[140px] opacity-50 ease-in-out duration-500 transition-all hover:opacity-100">
        <Image
          src={logo}
          alt={title}
          className="dark:hidden"
          width={140}
          height={40}
        />
        <Image
          src={logoWhite}
          alt={title}
          className="hidden dark:block"
          width={140}
          height={40}
        />
    </div>
  );
};

export default SingleClient;
