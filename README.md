# Punjabi Sikho (web prototype, version 1)

A static web app for testing a speaking-first Punjabi course. It is the same engine as Gujarati Shikho
with new content, colours and fonts.
It teaches listening, understanding and speaking. Learners do not need to read Gurmukhi script.
No build step and no dependencies. Progress is saved in each tester's own browser.

## What is in it
- 23 lessons and 4 checkpoints in four levels: First conversations, Family, Daily life, Festivals, food and fun
- Each lesson: learn cards (hear it, see it spelled the English way, see the meaning), then practice
- Practice types: listen and pick the meaning, pick how to say something, listen and pick the reply (small conversations), and "Now you say it"
- Normal and Slow audio buttons for every phrase
- Speaking practice: record yourself, play it back, or compare with the model voice. Nothing is scored automatically
- Checkpoint reviews, streak and XP, sequential unlocking
- A "Content review" screen for a native speaker (Testing tools > Open the content review list)
- Gurmukhi script is hidden by default. Turn it on in Testing tools > Show Punjabi script

## Audio
The app plays files from the `audio` folder. Each phrase has two files named from its "said as" text,
for example `ki-haal-hai.mp3` and `ki-haal-hai-slow.mp3`.
1. `pip install edge-tts` (once)
2. From this folder run `python make_audio.py`. It creates the `audio` folder (about 252 files) and skips files that already exist.
3. Keep `useRecordedAudio: true` in `config.js`.

To replace a file with a real human recording, save it under the same file name.

## Put it on GitHub and Vercel
Create an empty GitHub repository named `punjabi-sikho`, push everything (including `audio`), then import that
repository in Vercel with Framework Preset "Other" and no build command. Every push redeploys automatically.

## iOS app
The `ios-app` folder wraps this web app as a real iPhone app. See `ios-app/README-ios.md`.

## Change the lessons
All content is in `data/punjabi.js`. Each phrase is one line. If you change a phrase's "said as" text,
its audio file name changes too, so run `make_audio.py` again.

## Making another language from this app
Copy this folder, then change: `data/<language>.js` (and its `<script>` line in `index.html`), the fonts and
palette in `styles.css`, `config.js`, `make_audio.py` (data file and voice), and the names in `ios-app`.
The app code (`app.js`) does not mention any language: it reads the name, script and voice code from the data file.

## Testing tools
On the home screen, open "Testing tools" to unlock all lessons, show the Gurmukhi script, or reset progress.

## What to measure with testers
- How many finish lesson 1, and how many return the next day
- Which lessons people abandon
- Whether the audio is clear and the speed comfortable
- Whether recording themselves feels useful
- Whether they would pay, and for what
