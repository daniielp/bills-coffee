import Link from 'next/link';
import { HomeIcon, User } from 'lucide-react';

interface StorecardProps {
    title: string;
    id: string;
    cost: string;
}

const Storecard = ({ title, id, cost }: StorecardProps) => {

    let imageURL;
    switch (id) {
        case 'beans':
            imageURL = '/kupon-beans.svg'
            break;
        case 'chai':
            imageURL = '/kupon-chai.svg'
            break;
        case 'coffee-date':
            imageURL = '/kupon-date.svg'
            break;
        case 'combo':
            imageURL = '/kupon-combo.svg'
            break;
        case 'croissant':
            imageURL = '/kupon-croissant.svg'
            break;
        case 'cup':
            imageURL = '/kupon-kop.svg'
            break;
        default:
            imageURL = '/kupon-kop.svg'
            break;
    }

    return (
        <div className='bg-[#FF7A4A] rounded-xl flex flex-col items-center'>
            <h2 className='text-white'>{title}</h2>
            <img className='w-30' src={imageURL} alt={title} />
            <div className='flex flex-row items-center pr-2 gap-2 border-bill-lime border-2 rounded-2xl'>
                <p className='bg-bill-lime px-2 rounded-2xl'>Køb</p>
                <p>{cost}</p>
            </div>
        </div>
    );
};

export default Storecard;

