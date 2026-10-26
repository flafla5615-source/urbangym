"""Export the Urban Gym vector lockup with outlined, locally licensed type."""

from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "public" / "brand"


def outline(font: TTFont, text: str, size: float, x: float, baseline: float, weight=None):
    location = {"wght": weight} if weight is not None else None
    glyphs = font.getGlyphSet(location=location)
    cmap = font.getBestCmap()
    scale = size / font["head"].unitsPerEm
    paths = []
    for char in text:
        glyph_name = cmap.get(ord(char), ".notdef")
        pen = SVGPathPen(glyphs)
        glyphs[glyph_name].draw(TransformPen(pen, (scale, 0, 0, -scale, x, baseline)))
        commands = pen.getCommands()
        if commands:
            paths.append(f'<path d="{commands}"/>')
        x += glyphs[glyph_name].width * scale
    return "\n".join(paths)


def main():
    display = TTFont(ROOT / "public/fonts/BlackHanSans-Regular.ttf")
    lettering = outline(display, "URBAN GYM", 23, 67, 31)
    lettering += "\n" + outline(display, "어반짐 평거점", 10, 68, 51)
    mark = '<g transform="translate(4 6) scale(.9)"><path d="M6 5h10v24c0 7 4.5 12 12 12s12-5 12-12V5h10v24c0 13-9 22-22 22S6 42 6 29V5Z"/><path d="M23 5h10v17H23z"/></g>'
    for suffix, color in (("", "#20221f"), ("-light", "#ffffff")):
        svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 64" fill="{color}"><title>어반짐 평거점 URBAN GYM</title>{mark}{lettering}</svg>\n'
        (DEST / f"urban-logo{suffix}.svg").write_text(svg, encoding="utf-8")
    print("Wrote public/brand/urban-logo.svg and urban-logo-light.svg")


if __name__ == "__main__":
    main()
