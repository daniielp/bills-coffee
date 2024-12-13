
import { auth } from "@clerk/nextjs/server";
import { getCoupons, getPoints, getUserCoupons } from "@/lib/api";
import KuponClient from "./kupon-client";

export default async function KuponPage() {
    const { userId } = await auth();
    
    if (!userId) {
        return <div>Please log in</div>;
    }

    const couponsData = await getCoupons();
    const currentPoints = await getPoints(userId);
    const userCoupons = await getUserCoupons(userId);

    const coupons = couponsData 
        ? Object.entries(couponsData).map(([key, value]) => ({
            id: key,
            ...(value as any)
        }))
        : [];

        const currentUserCoupons = coupons.filter(coupon => 
            Object.keys(userCoupons).includes(coupon.id)
        );

    return <KuponClient initialUserCoupons={currentUserCoupons} initialCoupons={coupons} initialPoints={currentPoints} userId={userId} />;
}