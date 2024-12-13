
const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getGuide(id: string) {
    try {
        const response = await fetch(`${API_URL}/guides/${id}.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function getQuiz(id: string) {
    try {
        const response = await fetch(`${API_URL}/questions/${id}.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        return null
    }
}

export async function getCalenderDoor(id: string) {
    try {
        const response = await fetch(`${API_URL}/christmas-calender/${id}.json`);
        const data = await response.json() as { key: string, type: string };
        return data;
    } catch (error) {
        return null;
    }
}

export async function getCoupons() {
    try {
        const response = await fetch(`${API_URL}/coupons.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function getPoints(userId: string) {
    try {
        const existingPoints = await fetch(`${API_URL}/user-points/${userId}.json`, {
            method: "get",
        }).then(async (res) => parseInt(await res.text()));

        return isNaN(existingPoints) ? 0 : existingPoints;
    } catch (error) {
        return 0;
    }
}

export async function updatePoints(userId: string, points: number) {
    try {
        const existingPoints = await getPoints(userId);

        const pointsToUpdate = existingPoints + points;

        const updatedPoints = await fetch(`${API_URL}/user-points/${userId}.json`, {
            method: "put",
            body: JSON.stringify(pointsToUpdate)
        }).then(async (res) => parseInt(await res.text()) ?? 0);

        return updatedPoints;
    } catch (error) {
        return 0;
    }

}