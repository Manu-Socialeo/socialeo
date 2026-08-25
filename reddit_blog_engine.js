/**
 * SOCIALEO — REDDIT CONTENT ENGINE & BLOG AUTOMATION (reddit_blog_engine.js)
 * Connects with Reddit user u/Socialeo_ to extract high-traffic questions,
 * generate SEO-optimized blog masterclasses, and format Reddit syndication posts.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const CONFIG = {
  username: 'Socialeo_',
  targetSubreddits: ['webdev', 'entrepreneur', 'startups', 'SEO', 'UI_Design'],
  studioUrl: 'https://socialeo.vercel.app',
  author: 'Manpreeth N (Manu) — Founder & CEO @ Socialeo'
};

/**
 * Fetch top questions from a public subreddit
 */
function fetchSubredditHot(subreddit, limit = 5) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'www.reddit.com',
      path: `/r/${subreddit}/hot.json?limit=${limit}`,
      headers: {
        'User-Agent': 'SocialeoStudioBot/1.0 (by /u/Socialeo_)'
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const posts = (json.data?.children || []).map(p => ({
            id: p.data.id,
            title: p.data.title,
            subreddit: p.data.subreddit,
            score: p.data.score,
            url: `https://reddit.com${p.data.permalink}`,
            selftext: p.data.selftext?.substring(0, 300) || ''
          }));
          resolve(posts);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', err => resolve([]));
  });
}

/**
 * Format a blog post into a syndication-ready Reddit post with high value & backlink
 */
function generateRedditPostMarkdown(blog) {
  return `**${blog.title}**

${blog.excerpt}

---

### Key Technical & Strategic Insights:
${blog.takeaways.map((t, idx) => `${idx + 1}. **${t.heading}**: ${t.detail}`).join('\n')}

---

### Core Conclusion:
${blog.conclusion}

---
*Authored by Manpreeth N (Founder @ [Socialeo](${CONFIG.studioUrl}/blogs/${blog.slug}.html)) — Solopreneur digital product engineer crafting bespoke Next.js web applications, 3D WebGL experiences, and high-converting design systems.*`;
}

/**
 * CLI Runner
 */
async function main() {
  console.log('========================================================');
  console.log('  🚀 SOCIALEO REDDIT & BLOG SYNDICATION ENGINE');
  console.log('  Connected User: u/' + CONFIG.username);
  console.log('========================================================\n');

  console.log('🔍 Fetching top trending topics from target subreddits...\n');

  for (const sub of CONFIG.targetSubreddits) {
    const posts = await fetchSubredditHot(sub, 3);
    console.log(`📌 r/${sub} Trending Discussions (${posts.length} found):`);
    posts.forEach(p => {
      console.log(`   - [▲ ${p.score}] ${p.title.substring(0, 75)}...`);
    });
    console.log('');
  }

  console.log('✅ Reddit Content Extraction completed successfully!');
  console.log('👉 To write, preview, and syndicate blog posts directly, open: admin.html -> "Blog & Reddit Studio" tab.');
}

if (require.main === module) {
  main();
}

module.exports = {
  fetchSubredditHot,
  generateRedditPostMarkdown,
  CONFIG
};
