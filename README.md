<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <h1>Scuffed IP2 Leaderboard</h1>
    <p>This Node.js script fetches posts from two endpoints on scored.co, processes the data to calculate scores, and saves the results to a JSON file on your desktop. The script ensures no duplicate users are included and uses the highest score for each user.</p>
    <h2>Requirements</h2>
    <ul>
        <li>Node.js</li>
        <li>npm (Node Package Manager)</li>
    </ul>
    <h2>Installation</h2>
    <ol>
        <li>Clone the repository or download the script to your local machine.</li>
        <li>Open a terminal or command prompt.</li>
        <li>Navigate to the directory containing the script.</li>
        <li>Install the necessary dependencies by running:</li>
    </ol>
    <pre><code>npm install axios</code></pre>
    <h2>Usage</h2>
    <ol>
        <li>Ensure you have an active internet connection.</li>
        <li>Run the script using Node.js:</li>
    </ol>
    <pre><code>node path/to/your/script.js</code></pre>
    <p>Make sure to replace <code>path/to/your/script.js</code> with the actual path to the <code>ip2.js</code> script on your machine.</p>
    <h2>Script Details</h2>
    <p>The script performs the following steps:</p>
    <ol>
        <li>Fetches posts from two URLs:</li>
        <ul>
            <li><code>https://scored.co/api/v2/post/hotv2.json?community=IP2Always</code></li>
            <li><code>https://scored.co/api/v2/post/newv2.json?community=IP2Always</code></li>
        </ul>
        <li>Combines the fetched posts.</li>
        <li>Processes the posts to:</li>
        <ul>
            <li>Calculate scores using <code>vote_state * 365</code>.</li>
            <li>Ensure each user appears only once with their highest score.</li>
        </ul>
        <li>Sorts the results by score in descending order.</li>
        <li>Saves the results to <code>output.json</code> on your desktop.</li>
    </ol>
    <h2>Headers Used</h2>
    <p>The script includes the following headers in the requests:</p>
    <ul>
        <li><code>X-API-KEY</code></li>
        <li><code>X-API-SECRET</code></li>
        <li><code>Referer</code></li>
        <li><code>User-Agent</code></li>
        <li><code>X-Xsrf-Token</code></li>
        <li><code>X-Api-Platform</code></li>
    </ul>
    <h2>Output</h2>
    <p>The output file, <code>output.json</code>, is saved to your desktop and contains an array of objects with the following structure:</p>
    <pre><code>[
  {
    "rank": "#1",
    "score": 3650,
    "username": "exampleUser",
    "userLink": "https://communities.win/u/exampleUser"
  },
  ...
]
    </code></pre>
    <h2>Error Handling</h2>
    <p>If there is an error fetching data from either URL, the script will log the error to the console and continue processing the available data.</p>
    <h2>Contributing</h2>
    <p>If you would like to contribute to this project, please fork the repository and submit a pull request.</p>
    <h2>License</h2>
    <p>GNU General Public License (GPL).</p>
</body>

</html>
