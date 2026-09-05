const https = require('https');
const fs = require('fs');
const path = require('path');

// Read from .env.local or process.env
function getApiKey() {
  const envPaths = [
    path.join(__dirname, '..', '.env.local'),
    path.join(__dirname, '..', '.env'),
    path.join(__dirname, '..', 'open-seo', '.env.local'),
    path.join(__dirname, '..', 'open-seo', '.env')
  ];

  for (const p of envPaths) {
    if (fs.existsSync(p)) {
      const content = fs.readFileSync(p, 'utf8');
      const match = content.match(/DATAFORSEO_API_KEY=["']?([^"'\r\n]+)["']?/i);
      if (match && match[1]) return match[1].trim();
    }
  }
  return process.env.DATAFORSEO_API_KEY || null;
}

const key = getApiKey();

console.log("=================================================");
console.log("       DATAFORSEO API CONNECTION TEST           ");
console.log("=================================================\n");

if (!key) {
  console.log("❌ No DATAFORSEO_API_KEY detected in .env.local or environment.");
  console.log("\nTo connect DataForSEO:");
  console.log("1. Get your free trial API key ($1 free credit) at https://dataforseo.com");
  console.log("2. Copy the Base64 API key provided in your DataForSEO dashboard.");
  console.log("3. Add it to .env.local as: DATAFORSEO_API_KEY=your_key_here");
  process.exit(1);
}

console.log("🔑 API Key detected. Testing live connection to DataForSEO API endpoint...\n");

const options = {
  hostname: 'api.dataforseo.com',
  path: '/v3/user',
  method: 'GET',
  headers: {
    'Authorization': `Basic ${key}`,
    'Content-Type': 'application/json'
  }
};

const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.status_code === 20000 && json.tasks && json.tasks[0] && json.tasks[0].result) {
        const user = json.tasks[0].result[0];
        console.log("✅ DataForSEO connection SUCCESSFUL!");
        console.log(`  - Account Email: ${user.email}`);
        console.log(`  - Account Balance: $${user.money || 0}`);
        console.log(`  - Currency: ${user.currency || 'USD'}`);
      } else {
        console.log(`⚠️ DataForSEO returned response (Code: ${json.status_code}): ${json.status_message || 'Check credentials'}`);
      }
    } catch(e) {
      console.error("❌ Failed to parse response from DataForSEO:", e.message);
    }
  });
});

req.on('error', err => {
  console.error("❌ Connection failed:", err.message);
});

req.end();
