import os, re, time
from gtts import gTTS

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "audio")
os.makedirs(OUT, exist_ok=True)

def slug(s):
    return re.sub(r"^-+|-+$", "", re.sub(r"[^a-z0-9]+", "-", s.lower()))

text = open(os.path.join(HERE, "data", "punjabi.js"), encoding="utf-8").read()
seen, failed = set(), []
for m in re.finditer(r"\b[PN]\('([^']+)',\s*'([^']+)'", text):
    nat, s = m.group(1), slug(m.group(2))
    if s in seen:
        continue
    seen.add(s)
    for slow, name in ((False, s + ".mp3"), (True, s + "-slow.mp3")):
        path = os.path.join(OUT, name)
        if os.path.exists(path):
            continue
        for attempt in range(3):
            try:
                gTTS(nat, lang="pa", slow=slow).save(path)
                print("made", name)
                break
            except Exception as e:
                time.sleep(2)
        else:
            failed.append(name)
print("phrases:", len(seen), " failed:", len(failed))
if failed:
    print("Run the script again to retry:", failed)