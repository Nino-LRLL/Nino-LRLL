const { createCanvas } = require('canvas');
const GIFEncoder = require('gifencoder');
const axios = require('axios');
const fs = require('fs');

async function getStats(username, token) {
    const query = `query($login:String!) {
        user(login:$login) {
            contributionsCollection {
                contributionCalendar {
                    totalContributions
                    weeks { contributionDays { contributionCount color } }
                }
            }
        }
    }`;
    const res = await axios.post('https://api.github.com/graphql', 
        { query, variables: { login: username } },
        { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = res.data.data.user.contributionsCollection.contributionCalendar;
    return {
        days: data.weeks.flatMap(w => w.contributionDays).slice(-100),
        total: data.totalContributions
    };
}

async function draw() {
    const user = process.argv[2];
    const token = process.env.CONTRIBUTION_TOKEN; // Updated Secret Name
    const { days, total } = await getStats(user, token);

    const encoder = new GIFEncoder(600, 350);
    encoder.createReadStream().pipe(fs.createWriteStream('contribution-game.gif'));
    encoder.start();
    encoder.setRepeat(0);
    encoder.setDelay(60);

    const canvas = createCanvas(600, 350);
    const ctx = canvas.getContext('2d');

    for (let f = 0; f < 60; f++) {
        // Space Background
        ctx.fillStyle = '#0d1117';
        ctx.fillRect(0, 0, 600, 350);

        // Retro Grid HUD
        ctx.strokeStyle = '#1f6feb';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(10, 10, 580, 330);

        // Scoreboard
        ctx.fillStyle = '#39d353';
        ctx.font = 'bold 16px "Courier New"';
        ctx.fillText(`PLAYER: ${user.toUpperCase()}`, 30, 40);
        ctx.fillText(`XP: ${total}`, 480, 40);

        // Contribution Enemies
        days.forEach((day, i) => {
            const x = (i % 20) * 26 + 45;
            const y = Math.floor(i / 20) * 22 + 70;
            ctx.fillStyle = day.color === '#ebedf0' ? '#161b22' : day.color;
            
            // Interaction: if laser passes through x
            const shipX = (f * 15) % 600;
            if (Math.abs(x - shipX) < 10) ctx.fillStyle = '#ffffff'; 
            
            ctx.fillRect(x, y, 18, 18);
        });

        // Hero Ship
        const shipX = (f * 15) % 600;
        ctx.fillStyle = '#58a6ff';
        ctx.beginPath();
        ctx.moveTo(shipX + 10, 310); // Nose
        ctx.lineTo(shipX + 25, 340); // Wing R
        ctx.lineTo(shipX - 5, 340);  // Wing L
        ctx.fill();

        // Laser Fire
        ctx.strokeStyle = '#ff3e3e';
        ctx.lineWidth = 3;
        ctx.strokeRect(shipX + 9, 0, 2, 310);

        encoder.addFrame(ctx);
    }
    encoder.finish();
}
draw();

