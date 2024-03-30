import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { userId } = auth();

  return (
    <header className="mb-5 flex items-center justify-between border-b px-8">
      <div className="flex h-20 items-center justify-center overflow-hidden">
        <Link href="/">
          <Image
            src="https://links.papareact.com/xgu"
            width={200}
            height={100}
            alt="logo"
            className="h-32 cursor-pointer object-contain"
          />
        </Link>
      </div>

      {userId ? (
        <div>
          <UserButton />
        </div>
      ) : (
        <SignInButton afterSignInUrl="/translate" mode="modal" />
      )}
    </header>
  );
};

export default Header;
