import { Home, Search } from 'lucide-react'

export default function Controllers(){
    return(
        <div className="bg-zinc-700 text-zinc-50">
            <div className='flex gap-4 px-5 py-6'>
                <Home />
                <p className='font-medium'>Home</p>
            </div>
            <div className='flex gap-4 px-5 py-6'>
                <Search />
                <p className='font-medium'>Search</p>
            </div>
        </div>
    )
}