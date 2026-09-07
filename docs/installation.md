---
sidebar_position: 2
title: Installation Guide
slug: /installation
---

# Installation Guide

TaskPulse is packaged for all major operating systems and can be installed via npm, Homebrew, or standalone pre-compiled binary installers.

---

## Prerequisites

Before installing TaskPulse, ensure your environment meets the minimum requirements:

| Requirement | Minimum Version | Recommended Version |
| :--- | :--- | :--- |
| **Node.js** (for npm install) | `v18.0.0` | `v20.x` or `v22.x` LTS |
| **Operating System** | Windows 10+, macOS 11+, or Linux (Ubuntu 20.04+, Debian 11+) | Latest stable release |
| **Git** | `v2.25.0` or higher | `v2.40+` |

---

## Installation Methods

### Method 1: Using npm / yarn / pnpm (Recommended)

Install globally on your system using your favorite Node package manager:

```bash
# Using npm
npm install -g taskpulse

# Using yarn
yarn global add taskpulse

# Using pnpm
pnpm add -g taskpulse
```

---

### Method 2: macOS & Linux via Homebrew

```bash
brew tap taskpulse/tap
brew install taskpulse
```

---

### Method 3: Windows PowerShell One-Liner

Run PowerShell as Administrator or current user and execute:

```powershell
irm https://taskpulse.dev/install.ps1 | iex
```

---

### Method 4: Standalone Binary (curl / bash)

Download and extract pre-built binaries with zero dependencies:

```bash
curl -fsSL https://taskpulse.dev/install.sh | bash
```

---

## Verifying the Installation

Confirm that TaskPulse is properly installed and accessible in your system `PATH`:

```bash
taskpulse --version
```

*Expected output:*
```text
taskpulse version 2.4.0 (x64-windows-msvc)
```

Run the health diagnostic tool to inspect your environment, git config, and shell capabilities:

```bash
taskpulse doctor
```

*Sample output:*
```text
[✓] Node runtime: v24.20.0
[✓] Git binary detected: /usr/bin/git (v2.45.0)
[✓] Git user: anumitaray <anumitaray@gmail.com>
[✓] ANSI terminal support: 24-bit TrueColor enabled
[✓] Configuration store: writable
TaskPulse is ready to use!
```

---

## Updating & Uninstalling

### Upgrading to the Latest Version

```bash
npm update -g taskpulse
# or with Homebrew:
brew upgrade taskpulse
```

### Uninstalling

```bash
npm uninstall -g taskpulse
# or with Homebrew:
brew uninstall taskpulse
```
