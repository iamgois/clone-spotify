import { Shuffle, SkipBack, Play, SkipForward, Repeat, Volume2 } from 'lucide-react'

export default function Player(){
    return(
        <div className="absolute bottom-0 bg-zinc-800 h-20 w-screen flex items-center justify-center">
            <div className='flex items-center text-zinc-50 gap-24'>
                <div className="flex items-center gap-2 text-zinc-50">
                    <img src={'https://images.genius.com/63daa019698975c54c814ddd5070a21a.1000x1000x1.jpg'} className="w-12 h-12 rounded-md" />
                    <div>
                        <p className="font-bold">Novo Balanço</p>
                        <p className="font-thin text-xs">Veigh</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Shuffle size={16} />
                    <SkipBack size={16} />
                    <Play size={42} className='bg-zinc-200 text-zinc-800 p-2 rounded-full flex items-center justify-center' />
                    <SkipForward size={16} />
                    <Repeat size={16} />
                </div>
                <div className='flex items-center gap-2'>
                    <Volume2 />
                    <div className='h-2 w-36 bg-zinc-50 rounded-full' />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}