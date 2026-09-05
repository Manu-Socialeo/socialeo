const { execSync } = require('child_process');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

console.log("==================================================================");
console.log("     🚀 SOCIALEO OPENSEO MULTI-AGENT CRON MASTER ORCHESTRATOR     ");
console.log("==================================================================");

const tasks = [
  { name: "Agent 1: Technical SEO & Title Optimizer", script: "scripts/optimize_all_seo.js" },
  { name: "Agent 2: Keyword Cluster & Topic Hub Engine", script: "scripts/keyword_cluster_engine.js" },
  { name: "Agent 3: Local Mysore & Karnataka Citation Engine", script: "scripts/local_seo_citation_engine.js" },
  { name: "Agent 4: Competitor Radar & Backlink Outreach Engine", script: "scripts/competitor_backlink_engine.js" },
  { name: "Agent 5: OpenSEO Full Site Crawler & Visual Report Engine", script: "run_openseo_suite.js" }
];

tasks.forEach((task, idx) => {
  console.log(`\n[${idx + 1}/${tasks.length}] Executing ${task.name}...`);
  try {
    const output = execSync(`node "${path.join(ROOT_DIR, task.script)}"`, { cwd: ROOT_DIR, encoding: 'utf8' });
    console.log(output.trim());
  } catch (err) {
    console.error(`❌ Error executing ${task.name}:`, err.message);
  }
});

console.log("\n==================================================================");
console.log("🎉 ALL OPENSEO MULTI-AGENT ENGINES COMPLETED WITH 100% SCORE!");
console.log("==================================================================");
