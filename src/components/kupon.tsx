import Link from 'next/link';
import { HomeIcon, User } from 'lucide-react';

interface CouponProps {
    title: string;
    id: string;
    cost?: string;
}

const Coupon = ({ title, id }: CouponProps) => {
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

<div className="relative flex flex-col text-center">
    <img className="z-0 w-full" src="/coupon-full.svg" alt={title} />
    <p className="absolute bottom-4 inset-x-0 z-10 text-xl text-white font-bold">{title}</p>
</div>
    );
};

export default Coupon;