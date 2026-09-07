---
sidebar_position: 4
title: User Guide
slug: /user-guide
---

# Complete User Guide

This guide covers advanced usage, command flags, configuration file schema, automation hooks, and troubleshooting for TaskPulse.

---

## Command Reference

The general syntax is:
```bash
taskpulse [command] [subcommand] [arguments] [flags]
```

### Common Commands

| Command | Arguments / Flags | Description |
| :--- | :--- | :--- |
| `init` | `[--template <name>]` | Initializes `.taskpulse/` configuration in the current directory |
| `task add` | `"<title>" [--priority] [--tag] [--assignee]` | Adds a new task to the project backlog |
| `list` | `[--status] [--priority] [--tag] [--sort]` | Lists tasks formatted in an interactive or tabular view |
| `start` | `<id> [--branch]` | Moves task status to `IN_PROGRESS` and optionally checks out a branch |
| `pause` | `<id> [--reason]` | Pauses active work and stops duration timer |
| `done` | `<id> [--comment]` | Marks a task as `COMPLETED` and records final metrics |
| `delete` | `<id> [--force]` | Deletes a task from the state index |
| `board` | `[--compact]` | Launches the interactive ANSI terminal Kanban board |
| `report` | `[--format json|md|csv]` | Exports sprint metrics, burndown status, and velocity summaries |
| `sync` | `[--remote <name>]` | Synchronizes local task state with team remote repository |

---

## Configuration Schema

TaskPulse is configured via `.taskpulse/config.json` or a root-level `taskpulse.config.json`:

```json
{
  "$schema": "https://taskpulse.dev/schemas/v2/config.json",
  "project": {
    "name": "Acme-Core",
    "version": "2.4.0",
    "defaultPriority": "medium"
  },
  "git": {
    "autoBranch": true,
    "branchPrefix": "feat/",
    "requireCleanWorkingDir": false,
    "commitHook": true
  },
  "priorities": ["critical", "high", "medium", "low"],
  "tags": ["backend", "frontend", "devops", "qa", "docs"],
  "notifications": {
    "slackWebhook": "https://hooks.slack.com/services/...",
    "onStatusChange": ["COMPLETED", "BLOCKED"]
  }
}
```

---

## Workflow Automation & Hooks

TaskPulse supports customizable lifecycle hooks located in `.taskpulse/hooks/`:

- **`pre-start.sh`**: Executes before moving a task to `IN_PROGRESS`. Useful for branch creation or pulling latest `main`.
- **`post-complete.sh`**: Executes when a task is finished. Ideal for formatting changelog entries or notifying Slack channels.
- **`on-blocked.sh`**: Triggers an alert when a task status changes to `BLOCKED`.

### Example: Slack Notification on Task Completion

Create `.taskpulse/hooks/post-complete.sh`:

```bash
#!/usr/bin/env bash
TASK_ID="$1"
TASK_TITLE="$2"

curl -X POST -H 'Content-type: application/json' \
  --data "{\"text\":\"🎉 Task #$TASK_ID ($TASK_TITLE) was marked as completed!\"}" \
  "$SLACK_WEBHOOK_URL"
```

---

## Filtering and Search Queries

You can combine filters to query specific subsets of tasks:

```bash
# List all high priority backend tasks
taskpulse list --priority high --tag backend

# Find all completed tasks assigned to anumitaray
taskpulse list --status COMPLETED --assignee anumitaray

# Output tasks in JSON format for automated scripting
taskpulse list --format json | jq '.[] | select(.priority == "high")'
```

---

## Data Export and Reporting

Export your sprint deliverables for stakeholder updates or documentation:

```bash
# Generate Markdown summary for release notes
taskpulse report --format md --output RELEASE_NOTES.md

# Generate CSV data for spreadsheet analysis
taskpulse report --format csv --output sprint-report.csv
```

---

## Troubleshooting & FAQ

### 1. Git branch auto-checkout fails
- **Cause**: Uncommitted changes in working directory.
- **Solution**: Commit or stash local changes before running `taskpulse start <id> --branch`, or pass `--no-branch` to skip branch creation.

### 2. State file merge conflicts
- **Cause**: Simultaneous edits to `.taskpulse/state.json` from two team members.
- **Solution**: Run `taskpulse sync --resolve` which automatically merges task IDs using TaskPulse's conflict-free deterministic resolution algorithm.

### 3. Missing terminal colors / broken symbols
- **Cause**: Windows Command Prompt without UTF-8 codepage enabled.
- **Solution**: Run `chcp 65001` in your terminal session or use Windows Terminal with PowerShell 7+.
