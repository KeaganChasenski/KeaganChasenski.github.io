---
title: 'Building with Claude Code: An Engineer''s Field Guide'
date: '2026-06-01'
description: 'A practical guide to using Claude Code — written while building my personal portfolio. Every step documented as it happened.'
---

*A practical guide written while building my personal portfolio — every step documented as it happened.*

---

## What is Claude Code?

Claude Code is Anthropic's agentic command-line tool for software development. Unlike chatting with Claude in a browser, Claude Code runs in your terminal, has direct access to your file system, can read and edit files, run commands, and iterate on a codebase autonomously.

Think of it as pairing with a highly capable engineer who can type faster than you, never gets frustrated, and will refactor your entire codebase at 11pm without complaint — but who still needs you to tell it what actually matters.

---

## Why this guide exists

I built this website using Claude Code as a deliberate learning exercise. I'm an engineer (BSc Electrical and Computer Engineering), so I can read and write code — but I wanted to understand how to work *with* an AI coding agent effectively, rather than just generating boilerplate and hoping for the best.

This is what I learned.

---

## Step 1 — Installation and setup

**Prerequisites:**
- Node.js 18+ installed
- An Anthropic API key (get one at console.anthropic.com)
- A terminal you're comfortable in

**Install Claude Code:**
```bash
npm install -g @anthropic-ai/claude-code
```

**Authenticate:**
```bash
claude
```
On first run, Claude Code will prompt you to authenticate with your Anthropic account or API key.

**Verify it's working:**
```bash
claude --version
```

**Tip:** Claude Code works best when you start it from the root directory of your project. It reads your file structure as context.

---

## Step 2 — Understanding how Claude Code thinks

Before you write your first prompt, understand the mental model:

Claude Code doesn't just respond to messages — it acts in a loop. It reads your request, looks at your files, plans a sequence of actions, executes them, checks the results, and iterates. This means:

1. **Specificity beats brevity.** "Build me a website" gets you generic output. "Build a single-page portfolio site in vanilla HTML/CSS/JS with a fixed top nav, serif headings using Cormorant Garamond from Google Fonts, and an off-white background (#F7F5F0)" gets you something real.

2. **Context is everything.** Claude Code reads your project files. If you have a `brief.md` or `design-notes.txt` in your project root, it will use them. I wrote my full design brief as a markdown file before starting — Claude Code referenced it throughout.

3. **It can be wrong.** It's a collaborator, not an oracle. Review what it produces. Ask it to explain decisions. Push back when something doesn't look right.

---

## Step 3 — Starting a project from scratch

Create your project folder and add a brief:

```bash
mkdir my-portfolio
cd my-portfolio
```

Create a `BRIEF.md` with your design direction, copy, and technical requirements. This is the single most valuable thing you can do before starting.

Then launch Claude Code and give it your first instruction:

```
Read BRIEF.md and then scaffold the project structure for a single-page
portfolio website. Create an index.html, a styles.css, and a main.js.
Don't write any content yet — just set up the file structure, link the
files correctly, and add the Google Fonts import for Cormorant Garamond
and Karla. Add a comment in each file explaining its purpose.
```

**Why this works:** You're asking Claude to do one scoped task — scaffolding — not "build the whole thing." This gives you a chance to review the foundation before it builds on top.

---

## Step 4 — Iterating section by section

Don't ask Claude Code to build everything at once. Work section by section:

```
Now build the hero section. Use the copy from BRIEF.md exactly as written.
The layout should be left-aligned, with the headline in Cormorant Garamond
at 72px, the subheadline in Karla at 18px, and the tagline in Karla italic
at 16px with the muted colour (#A8A49D). Add 120px top padding. No images
in this section.
```

After each section, open the file in your browser and look at it. Then come back and refine:

```
The hero padding looks too compressed on mobile. Add a media query so that
below 768px, the top padding reduces to 60px and the headline drops to 48px.
```

**Key principle:** The faster you can see something and react to it, the better your output will be. Don't let Claude Code run for 20 minutes without checking in.

---

## Step 5 — Debugging with Claude Code

When something breaks, describe exactly what you see:

```
The navigation links aren't scrolling smoothly to their sections. When I
click "Projects", the page jumps instead of scrolling. I have scroll-behavior:
smooth on the html element. Check the anchor IDs in index.html and the href
values in the nav — I think there might be a mismatch.
```

Claude Code will read your files, find the mismatch, and fix it. The key is being specific about what you observe, not just "it's broken."

---

## Step 6 — When to trust it, when to verify

**Trust Claude Code to:**
- Scaffold boilerplate and file structure
- Implement standard patterns (responsive nav, CSS grid, scroll animations)
- Refactor repetitive code
- Add accessibility attributes
- Write and explain CSS you're not sure about

**Always verify:**
- Visual output — open it in a browser, resize the window, check on mobile
- Any logic involving data or state
- File paths and imports — Claude Code occasionally hallucinates paths
- Anything that touches security (API keys, form submission)

**The rule I use:** If it's structural or visual, I trust and verify. If it's logical or consequential, I read every line before it runs.

---

## Step 7 — Prompting patterns that work

| Goal | Prompt pattern |
|---|---|
| Build a new section | "Build the [X] section using the copy in BRIEF.md. Layout: [describe]. No images yet." |
| Fix a visual issue | "The [element] looks [wrong] on [viewport]. Adjust [specific property] so that [desired result]." |
| Refactor | "The nav styles are duplicated in three places. Consolidate them into reusable CSS variables." |
| Explain a decision | "Why did you use flexbox here instead of grid? Walk me through the tradeoff." |
| Add a feature | "Add a scroll-triggered fade-in animation to each section. Use Intersection Observer, not a library. The animation should be: opacity 0→1, translateY 12px→0, over 300ms ease-out." |

---

## What I'd do differently

1. **Write the brief before you open Claude Code.** Don't plan as you go.
2. **Use version control from day one.** `git init` before the first Claude Code command. Commit after every working section.
3. **Ask it to explain, not just do.** "Build X and explain each decision" produced better output than "just build X" — it forced cleaner choices.
4. **Don't ask for too much in one prompt.** Broad prompts produce average results. Narrow prompts produce precise ones.

---

## Final thought

Claude Code doesn't make you a worse engineer. It makes you more of a *director* than a *typist*. The judgment about what to build, how it should look, and whether the output is actually good — that's still entirely yours.

The engineers who'll get the most out of tools like this are the ones who can give clear, specific direction and evaluate what comes back critically. Turns out that's just good engineering.

---

*Built with Claude Code. Source on [GitHub](https://github.com/KeaganChasenski)*
