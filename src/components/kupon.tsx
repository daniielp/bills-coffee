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
        <div className="w-full max-w-sm mx-auto">
            <img className="w-full" src="/coupon-full.svg" alt={title} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-xl font-bold">{title}</p>
            </div>
        </div>
    );
};

export default Coupon;