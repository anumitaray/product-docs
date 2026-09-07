---
sidebar_position: 3
title: Getting Started
slug: /getting-started
---

# Getting Started with TaskPulse

Get up and running with TaskPulse in under **5 minutes**. This tutorial guides you through initializing a workspace, creating and organizing tasks, linking with Git branches, and viewing your terminal dashboard.

---

## Step 1: Initialize Your Workspace

Navigate to any existing Git repository or project directory:

```bash
cd my-project
taskpulse init
```

*Interactive output:*
```text
✔ Initializing TaskPulse workspace in /path/to/my-project
✔ Created .taskpulse/state.json
✔ Created .taskpulse/config.json
✔ Added .taskpulse/cache to .gitignore
 Workspace ready! Type "taskpulse --help" for available commands.
```

---

## Step 2: Add Your First Task

Create tasks with titles, descriptions, priorities, tags, and estimated effort:

```bash
taskpulse task add "Implement user authentication middleware" \
  --priority high \
  --tag backend,auth \
  --estimate 3h
```

*Output:*
```text
[+] Created task #1: Implement user authentication middleware [HIGH] (tags: backend, auth)
```

Add a few more tasks to populate your backlog:

```bash
taskpulse task add "Setup PostgreSQL schema migrations" --priority high --tag database
taskpulse task add "Design responsive navigation navbar" --priority medium --tag frontend
taskpulse task add "Write unit tests for token validator" --priority low --tag backend,testing
```

---

## Step 3: View Your Backlog

List all pending tasks in an organized terminal table:

```bash
taskpulse list
```

*Output:*
```text
ID  PRIORITY  STATUS   TAGS              EST   TITLE
--------------------------------------------------------------------------------------
#1  HIGH      TODO     backend, auth     3h    Implement user authentication middleware
#2  HIGH      TODO     database          2h    Setup PostgreSQL schema migrations
#3  MEDIUM    TODO     frontend          4h    Design responsive navigation navbar
#4  LOW       TODO     backend, testing  1h    Write unit tests for token validator
```

---

## Step 4: Start Working on a Task

When you begin working on a task, mark it as in-progress. If Git integration is enabled, TaskPulse can automatically switch or create a dedicated feature branch:

```bash
taskpulse start 1 --branch
```

*Output:*
```text
Switched task #1 to IN_PROGRESS
Created and switched to Git branch: feat/1-implement-user-authentication-middleware
```

---

## Step 5: Complete the Task

Once your implementation and pull request are ready, mark the task as complete:

```bash
taskpulse done 1 --comment "JWT authentication middleware merged to main"
```

*Output:*
```text
Task #1 marked as COMPLETED!
Logged duration: 2h 45m (under estimated 3h)
Triggered hook: post-complete (notification sent)
```

---

## Step 6: Launch the Terminal Dashboard

For a full Kanban-style board visualization inside your terminal:

```bash
taskpulse board
```

Press `q` to exit the dashboard at any time.

---

## Next Steps

Now that you know the basics, explore advanced features in the **[User Guide](./user-guide.md)**, including custom automations, team sync, and JSON/Markdown export!
