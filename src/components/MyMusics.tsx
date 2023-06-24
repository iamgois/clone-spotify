import { Library, Plus, ArrowRight, Search, ChevronDown } from "lucide-react";

export default function MyMusics() {
  return (
    <div className="bg-zinc-700 text-zinc-50 gap-2 flex flex-col">
      <div className="flex items-center justify-between py-4 px-4">
        <div className="flex font-semibold">
          <Library />
          <p>Your Library</p>
        </div>
        <div className="flex text-zinc-400 gap-4">
          <Plus />
          <ArrowRight />
        </div>
      </div>
      <div className="flex gap-2 px-4">
        <button className="bg-zinc-900 py-2 px-6 rounded-full hover:bg-zinc-800">
          Playlists
        </button>
        <button className="bg-zinc-900 py-2 px-6 rounded-full hover:bg-zinc-800">
          Artists
        </button>
      </div>
      <div className="flex items-center justify-between px-4">
        <Search />
        <p className="flex gap-2 text-zinc-400">
          Recents <ChevronDown />
        </p>
      </div>

      <div className="px-4 py-2 flex items-center gap-2">
        <img
          className="w-16 h-16 rounded-full"
          src={
            "https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-018166785ff8ed3e47c6e014e0f58618be107ddf.jpg"
          }
          alt="Travis Scott Profile Photo"
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Travis Scott</p>
          <p className="text-zinc-400">Artist</p>
        </div>
      </div>

      <div className="px-4 py-2 flex flex-1 items-center gap-2">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={
            "https://i0.statig.com.br/bancodeimagens/2l/a5/7c/2la57ct6jtj59iuxj33ja78bd.jpg"
          }
          alt="Travis Scott Profile Photo"
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Miley Cyrus</p>
          <p className="text-zinc-400">Artist</p>
        </div>
      </div>
    </div>
  );
}
