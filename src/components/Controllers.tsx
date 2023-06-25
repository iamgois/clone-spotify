import { Home, Search } from 'lucide-react'

export default function Controllers(){
    return(
        <div className="bg-zinc-700 text-zinc-300">
            <button className='flex gap-4 px-5 py-6 hover:text-zinc-100'>
                <Home />
                <p className='font-medium'>Home</p>
            </button>
            <button className='flex gap-4 px-5 py-6 hover:text-zinc-100'>
                <Search />
                <p className='font-medium'>Search</p>
            </button>
        </div>
    )
}