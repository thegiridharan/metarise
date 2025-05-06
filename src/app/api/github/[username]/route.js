import axios from 'axios';

const GITHUB_URL = "https://api.github.com/users/{username}/repos";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET(req, { params }) {
    const { username } = params;  // Extract username from URL params

    try {
        const headers = {
            Authorization: `token ${GITHUB_TOKEN}`,
        };

        // Sending the GET request to GitHub API
        const response = await axios.get(GITHUB_URL.replace("{username}", username), {
            headers,
        });

        return new Response(JSON.stringify(response.data), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: 'Failed to fetch GitHub repos' }),
            { status: 500 }
        );
    }
}
