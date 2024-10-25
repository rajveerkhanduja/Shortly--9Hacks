import { Button } from "@/components/ui/Button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>hello</div>
      <Button>subscribe</Button>
      <UserButton/>
    </div>
  );
}
