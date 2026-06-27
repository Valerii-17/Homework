import { API_URL, TOKEN_KEY } from "../constants";

export const loginUser = async (login, password) => {
    const response = await fetch(
        `${API_URL}/users?login=${login}`
    );

    const users = await response.json();

    if (!users.length) {
        return {
            success: false,
        };
    }

    const user = users[0];

    if (user.password !== password) {
        return {
            success: false,
        };
    }

    return {
        success: true,
        token: TOKEN_KEY,
        user,
    };
};