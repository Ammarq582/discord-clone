import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

export default function Home() {

  return(
    <div className="p-5 flex justify-between">
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle/>
    </div>
  )
}
