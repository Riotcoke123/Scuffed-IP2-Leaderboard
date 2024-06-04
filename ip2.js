const axios = require('axios');
const fs = require('fs');
const path = require('path');

const urls = [
    'https://scored.co/api/v2/post/hotv2.json?community=IP2Always',
    'https://scored.co/api/v2/post/newv2.json?community=IP2Always'
];

const headers = {
    'X-API-KEY': 'uhy4Vpma7mt1UlZgsCwn8ZXPKjY8HA228J+LqQUo7JQ=',
    'X-API-SECRET': '73kWos4hhgk6TpdONIqaJyH-HozddSkPMKS4h7hPqI8=',
    'Referer': 'https://communities.win/c/IP2Always/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'X-Xsrf-Token': '07e7f94e-0973-4172-bac8-0448ac0ace04',
    'X-Api-Platform': 'Scored-Desktop'
};

async function fetchPosts(url) {
    try {
        const response = await axios.get(url, { headers });
        return response.data.posts;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return [];
    }
}

async function main() {
    const [hotPosts, newPosts] = await Promise.all(urls.map(fetchPosts));

    const allPosts = [...hotPosts, ...newPosts];

    const userMap = new Map();

    allPosts.forEach(item => {
        const score = item.vote_state * 365;
        const author = item.author;

        if (!userMap.has(author) || userMap.get(author).score < score) {
            userMap.set(author, { score, author });
        }
    });

    const results = Array.from(userMap.values());

    results.sort((a, b) => b.score - a.score);

    const sortedResults = results.map((result, index) => ({
        rank: `#${index + 1}`,
        score: result.score,
        username: result.author,
        userLink: `https://communities.win/u/${result.author}`
    }));

    const outputPath = path.join('C:', 'Users', 'srrm4', 'OneDrive', 'Desktop', 'output.json');
    fs.writeFileSync(outputPath, JSON.stringify(sortedResults, null, 2), 'utf-8');
    console.log('Data written to output.json');
}

main();
