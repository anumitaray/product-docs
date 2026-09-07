---
sidebar_position: 1
title: Product Overview
slug: /intro
---

# Welcome to TaskPulse

**TaskPulse** is a lightweight, local-first developer productivity and workflow automation CLI. Designed specifically for software engineers, tech leads, and agile contributors, TaskPulse harmonizes terminal-based task tracking with Git branch automation and sprint analytics.

```text
   ______           __   ____        __          
  /_  __/___ ______/ /__/ __ \__  __/ /_______   
   / / / __ `/ ___/ //_/ /_/ / / / / // ___/ _ \ 
  / / / /_/ (__  ) ,< / ____/ /_/ / // (__ )  __/ 
 /_/  \__,_/____/_/|_/_/    \__,_/_/ \___/ \___/  
```

---

## Why TaskPulse?

Modern developers frequently context-switch between heavy web-based agile boards, pull requests, and the terminal. TaskPulse eliminates this friction by bringing task management directly into your active repository workspace:

- **⚡ Instant & Zero Latency**: No waiting on web pages to load. Runs offline with immediate terminal responses.
- **📁 Local-First Storage**: Tasks and metadata live in a git-tracked `.taskpulse/` directory, allowing your backlog to version alongside your code.
- **🌿 Native Git Integration**: Automatically attaches tasks to active Git branches, tracks commit messages, and detects completed PRs.
- **🤖 Workflow Automations**: Configure hooks to execute automated tests, linters, or send Slack/Discord notifications when task statuses change.
- **📊 Interactive Terminal UI**: Monitor your sprint backlog and burndown velocity using a rich curses-style ANSI board right in your terminal.

---

## Core Architecture

TaskPulse is engineered to be dependency-free at runtime, operating directly against your local environment:

```
┌────────────────────────────────────────────────────────┐
│                     TaskPulse CLI                      │
│        (Command Parser, Shell Hooks & ANSI TUI)        │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                   Core State Engine                    │
│    (Dependency Graph, Priority Scoring & Lifecycle)    │
└──────────────┬──────────────────────────┬──────────────┘
               │                          │
               ▼                          ▼
┌──────────────────────────────┐ ┌───────────────────────┐
│        Local Storage         │ │    Git Integrations   │
│ (.taskpulse/state.json, logs)│ │ (Branch & Commit Sync)│
└──────────────────────────────┘ └───────────────────────┘
```

---

## Documentation Roadmap

Explore the comprehensive guides below to learn how to install, configure, and master TaskPulse:

1. **[Installation Guide](./installation.md)** — Step-by-step installation instructions for macOS, Linux, and Windows.
2. **[Getting Started](./getting-started.md)** — A 5-minute hands-on tutorial covering workspace setup, task creation, and tracking.
3. **[User Guide](./user-guide.md)** — Comprehensive command reference, workflow automation, configuration specs, and troubleshooting.
