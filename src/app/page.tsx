import Controllers from "@/components/Controllers";
import MyMusics from "@/components/MyMusics";
import Musics from "@/components/Musics";
import Player from "@/components/Player";

export default function Home() {
  return (
    <div className="bg-zinc-800 w-screen h-screen overflow-hidden">
      <div className="flex divide-x-8 divide-zinc-800">

        <div className="grid divide-zinc-800 divide-y-8 h-full">
          <Controllers />
          <MyMusics />
        </div>

        <div className="h-full w-full bg-zinc-700">
          <Musics />
        </div>

      </div>

      <div className="w-screen h-auto">
        <Player />
      </div>
    
    </div>
  );
}
