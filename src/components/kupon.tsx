
import Link from 'next/link';
import { HomeIcon, User } from 'lucide-react';

interface StorecardProps {
    title: string;
    id: string;
    cost: string;
}

const Coupon = ({ title, id}: StorecardProps) => {

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
        <div>
            <img className='' src="/coupon-full.svg" alt={title} />
            <div>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Coupon;
