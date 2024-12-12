"use client";

import { 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  UserButton 
} from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-x1 font-semibold">
        <div>
            Gallery
        </div>
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
            <UploadButton endpoint="imageUploader" />
              <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }   