const API_URL = "https://bills-coffee-default-rtdb.europe-west1.firebasedatabase.app"

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
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}