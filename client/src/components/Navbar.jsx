import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';

export default function Navbar(){
    
    return (
        <nav className="w-full bg-black px-4 py-2 flex items-center justify-between border-b border-neutral-500 sticky top-0">
            <span className='text-orange-400 text-2xl font-bold'>Mega SSH UDP</span>
            <div className='flex items-center gap-4 font-bold'>
                <Link to={'/'} className='bg-neutral-800 px-4 py-1 rounded-[4px] hover:bg-neutral-700 transition-all flex items-center gap-2 border-b-2 border-orange-700 hover:border-transparent'>
                    <AiOutlineHome size={18} />
                    <span>Home</span>
                </Link>
                <Link to={'/about'} className='bg-neutral-800 px-4 py-1 rounded-[4px] hover:bg-neutral-700 transition-all flex items-center gap-2 border-b-2 border-orange-700 hover:border-transparent'>
                    <AiOutlineInfoCircle size={18} />
                    <span>About</span>
                </Link>
            </div>
        </nav>
    );
};