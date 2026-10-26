"""Keep the display glyphs used by the static site; preserve the source font."""
from pathlib import Path
from fontTools import subset
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parents[1]
characters = set(chr(n) for n in range(32, 127))
for folder in ("app", "components", "lib"):
    for source in (root / folder).rglob("*"):
        if source.suffix in (".ts", ".tsx"):
            characters.update(source.read_text(encoding="utf-8"))

font = TTFont(root / "public/fonts/BlackHanSans-Regular.ttf")
subsetter = subset.Subsetter()
subsetter.populate(unicodes={ord(char) for char in characters})
subsetter.subset(font)
destination = root / "public/fonts/BlackHanSans-UI.ttf"
font.save(destination)
print(f"{destination.name}: {destination.stat().st_size:,} bytes")
