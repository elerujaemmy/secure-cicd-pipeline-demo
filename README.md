# Secure CI/CD Pipeline Demo (SOC 2 Change Management)

This repository demonstrates how to enforce security/compliance gates in CI/CD using GitHub Actions.

## What it includes
- **CodeQL** static analysis
- **Semgrep** lightweight SAST with the `p/ci` ruleset
- **Gitleaks** to catch hardcoded secrets
- **Slack notification** on failures (optional via `SLACK_WEBHOOK_URL` secret)
- Uploads SARIF to GitHub Security tab

## SOC 2 Mapping

| Control ID | Description | Implementation |
|------------|-------------|----------------|
| CC8.1 | Change management policy | Require PRs + passing security checks before merge |
| CC8.2 | Testing & approval | CI gates run on PRs, approvals required |
| CC7.2 | Monitoring/security events | Alerts posted to Slack on failure |
| CC3.2 | Roles & responsibilities | Branch protection rules define approvers |

## Setup
1. Create a repo and push this workflow.
2. In GitHub, set **Branch protection rules**:
   - Require PR review (1+)
   - Require status checks to pass
   - Require signed commits (optional)
   - Require conversation resolution
3. Add repo **Secrets** (Settings → Secrets and variables → Actions):
   - `SLACK_WEBHOOK_URL` (optional)
4. Open a PR to trigger the workflows.

## Files
- `.github/workflows/security.yml` — main workflow
- `demo-app/` — tiny demo code to scan

