"""
Makes the Punjabi audio files for the app (free, uses Microsoft's neural voices through edge-tts).

One-time setup:      pip install edge-tts
Run it from the project folder (the one that holds index.html):
                     python make_audio.py

It reads data/punjabi.js and writes two files per phrase into the "audio" folder:
    ki-haal-hai.mp3          normal speed
    ki-haal-hai-slow.mp3     slow speed
Files that already exist are skipped, so you can run it again after adding lessons.
To redo everything:  python make_audio.py --force
To pick a voice:     python make_audio.py --list      (shows the Punjabi voices available)
                     python make_audio.py --voice pa-IN-VaaniNeural

Prototype quality only. Before a public release, have a native speaker listen to every file,
and replace any that sound wrong with a real recording saved under the same file name.
"""
import argparse
import asyncio
import os
import re
import sys

try:
    import edge_tts
except ImportError:
    sys.exit("edge-tts is not installed. Run:  pip install edge-tts")

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "data", "punjabi.js")
OUT = os.path.join(HERE, "audio")
NORMAL_RATE = "-5%"
SLOW_RATE = "-40%"


def slug(s):
    # Must match slug() in app.js exactly, because the app builds file names the same way.
    return re.sub(r"^-+|-+$", "", re.sub(r"[^a-z0-9]+", "-", s.lower()))


def read_items():
    text = open(DATA, encoding="utf-8").read()
    items, seen = [], set()
    for m in re.finditer(r"\b[PN]\('([^']+)',\s*'([^']+)'", text):
        nat, rom = m.group(1), m.group(2)
        s = slug(rom)
        if s and s not in seen:
            seen.add(s)
            items.append((s, nat))
    return items


async def pick_voice(wanted):
    voices = await edge_tts.list_voices()
    pa = [v for v in voices if v["Locale"].lower().startswith("pa-")]
    if wanted:
        return wanted, pa
    if not pa:
        return None, pa
    india = [v for v in pa if v["Locale"].lower() == "pa-in"] or pa
    female = [v for v in india if v.get("Gender") == "Female"]
    return (female or india)[0]["ShortName"], pa


async def make_one(sem, voice, text, rate, path, force):
    if os.path.exists(path) and not force:
        return "skipped"
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, voice, rate=rate).save(path)
                if os.path.getsize(path) > 500:
                    return "made"
            except Exception as e:  # network hiccup: wait and try again
                err = e
            await asyncio.sleep(1.5 * (attempt + 1))
        if os.path.exists(path):
            os.remove(path)
        return "FAILED"


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--force", action="store_true", help="remake files that already exist")
    ap.add_argument("--voice", help="voice short name, for example pa-IN-VaaniNeural")
    ap.add_argument("--list", action="store_true", help="list Punjabi voices and stop")
    args = ap.parse_args()

    voice, pa = await pick_voice(args.voice)
    if args.list:
        for v in pa:
            print(v["ShortName"], v.get("Gender", ""), v["Locale"])
        if not pa:
            print("No Punjabi voices found.")
        return
    if not voice:
        sys.exit("No Punjabi voice was found in edge-tts. Run  pip install -U edge-tts  and try again.")

    items = read_items()
    os.makedirs(OUT, exist_ok=True)
    print("Voice:", voice)
    print("Phrases:", len(items), "-> up to", len(items) * 2, "audio files in", OUT)

    sem = asyncio.Semaphore(4)
    jobs = []
    for s, nat in items:
        jobs.append(make_one(sem, voice, nat, NORMAL_RATE, os.path.join(OUT, s + ".mp3"), args.force))
        jobs.append(make_one(sem, voice, nat, SLOW_RATE, os.path.join(OUT, s + "-slow.mp3"), args.force))
    results = await asyncio.gather(*jobs)
    print("Made:", results.count("made"), " Skipped:", results.count("skipped"), " Failed:", results.count("FAILED"))
    if "FAILED" in results:
        print("Some files failed. Run the script again; it only redoes the missing ones.")


if __name__ == "__main__":
    asyncio.run(main())
