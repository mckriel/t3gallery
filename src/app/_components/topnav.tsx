import { 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  UserButton 
} from "@clerk/nextjs";

export function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-x1 font-semibold">
        <div>
            Gallery
        </div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }   