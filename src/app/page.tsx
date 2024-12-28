import Image from "next/image";
import FirstDisplay from "@/components/FirstDisplay";
import AnonymousMessage from "@/components/AnonymousMessage";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <FirstDisplay />
      <AnonymousMessage />
    </div>
  );
}
