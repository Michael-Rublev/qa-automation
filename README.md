# QA Automation Landing (source)

Source of truth for public site:
- Source: `ai-test-automation-site/`
- Public deploy: `https://michael-rublev.github.io/qa-automation/`
- Deploy mirror repo path: `/tmp/qa-automation`

## Local checks
From workspace root:
```bash
python3 scripts/qa_automation_gate.py
```
Expected: `✅ QA-Automation gate PASSED`

## Release
From workspace root:
```bash
bash scripts/sync_qa_automation.sh "Release: <short message>"
```
Then verify in browser:
- https://michael-rublev.github.io/qa-automation/
- hard refresh
- smoke checks for nav/sections/CTA/mobile/footer

## Rollback
```bash
cd /tmp/qa-automation
git log --oneline -n 5
git revert --no-edit <bad_commit_sha>
git push
```

## Notes
- Do edits only in `ai-test-automation-site`, then sync.
- Avoid tunnel domains in production SEO tags.
