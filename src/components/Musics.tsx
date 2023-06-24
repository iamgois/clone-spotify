import { ChevronLeft, ChevronRight, Search, Users, User2 } from "lucide-react";

export default function Musics() {
  return (
    <div>
      {/* Top */}
      <div className="flex flex-1 items-center justify-between py-4 px-4 text-zinc-50 bg-[#3a5e40] gap-24">
        <div className="flex gap-2">
          <button>
            <ChevronLeft
              strokeWidth={1}
              className="bg-zinc-700 hover:bg-zinc-600 w-8 h-8 rounded-full"
            />
          </button>
          <button>
            <ChevronRight
              strokeWidth={1}
              className="bg-zinc-700 hover:bg-zinc-600 w-8 h-8 rounded-full"
            />
          </button>
        </div>

        <div className="flex flex-auto gap-2 bg-zinc-700 text-zinc-400 rounded-2xl items-center pl-4">
          <button>
            <Search />
          </button>
          <input
            type="text"
            placeholder="Search in Albums"
            className="bg-transparent pl-4 py-3 w-full rounded-2xl"
          />
        </div>

        <div className="flex gap-4 items-center justify-between">
          <button className="bg-zinc-50 text-zinc-900 font-semibold py-2 px-4 rounded-full">
            Upgrade
          </button>
          <Users className="bg-zinc-700 hover:bg-zinc-600 cursor-pointer p-2 w-10 h-10 rounded-full" />
          <User2 className="bg-zinc-700 hover:bg-zinc-600 cursor-pointer p-2 w-10 h-10 rounded-full" />
        </div>
      </div>

      {/* Albums */}
      <div>
        <h1 className="py-4 px-8 text-zinc-50 text-4xl font-bold">
          Good Morning
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-3 mx-8">
          <div className="w-full h-auto text-zinc-50 flex items-center bg-zinc-800 gap-4 rounded-md overflow-hidden">
            <img
              className="w-20 h-20"
              src={
                "https://m.media-amazon.com/images/I/81nFF-rXdRL._UF1000,1000_QL80_.jpg"
              }
              alt="astrowold album"
            />
            <p>Astroworld</p>
          </div>

          <div className="w-full h-auto text-zinc-50 flex items-center bg-zinc-800 gap-4 rounded-md overflow-hidden">
            <img
              className="w-20 h-20"
              src={
                "https://assets.papelpop.com/wp-content/uploads/2019/01/the-best.png"
              }
              alt="astrowold album"
            />
            <p>Best of Justin Bieber</p>
          </div>

          <div className="w-full h-auto text-zinc-50 flex items-center bg-zinc-800 gap-4 rounded-md overflow-hidden">
            <img
              className="w-20 h-20 object-cover"
              src={
                "https://i.scdn.co/image/ab6761610000e5eb489bc3d19c54822f9db3767a"
              }
              alt="astrowold album"
            />
            <p>This is Veigh</p>
          </div>

          <div className="w-full h-auto text-zinc-50 flex items-center bg-zinc-800 gap-4 rounded-md overflow-hidden">
            <img
              className="w-20 h-20 object-cover"
              src={
                "https://www.cartacapital.com.br/wp-content/uploads/2019/06/rap.maior-e1439584885987.jpg"
              }
              alt="astrowold album"
            />
            <p>Hollywood Rap</p>
          </div>

          <div className="w-full h-auto text-zinc-50 flex items-center bg-zinc-800 gap-4 rounded-md overflow-hidden">
            <img
              className="w-20 h-20"
              src={
                "https://lastfm.freetls.fastly.net/i/u/500x500/bfa6099a45c43b4baaa646079582cc6c.jpg"
              }
              alt="astrowold album"
            />
            <p>Peace & Love - Wiz Khalifa</p>
          </div>

          <div className="w-full h-auto text-zinc-50 flex items-center bg-zinc-800 gap-4 rounded-md overflow-hidden">
            <img
              className="w-20 h-20"
              src={
                "https://i.scdn.co/image/ab67706f000000027bd3578faaa6d80d3621b585"
              }
              alt="astrowold album"
            />
            <p>No corre</p>
          </div>
        </div>

        {/* Made for You */}

        <h1 className="py-4 px-8 text-zinc-50 text-4xl font-bold">
          Made for you
        </h1>

        <div className="flex justify-center gap-8 mx-8">
          <img
            className="w-full h-full rounded-md"
            src={
              "https://i.scdn.co/image/ab67706f000000027bd3578faaa6d80d3621b585"
            }
            alt="astrowold album"
          />
          <img
            className="w-full h-full rounded-md"
            src={
              "https://i.scdn.co/image/ab67706f000000027bd3578faaa6d80d3621b585"
            }
            alt="astrowold album"
          />
          <img
            className="w-full h-full rounded-md"
            src={
              "https://i.scdn.co/image/ab67706f000000027bd3578faaa6d80d3621b585"
            }
            alt="astrowold album"
          />
        </div>
      </div>
    </div>
  );
}
