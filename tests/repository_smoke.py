from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
files = list(ROOT.glob("*.html")) + list(ROOT.glob("*.js"))
assert files, "no quiz source found"
text = "\n".join(p.read_text(encoding="utf-8") for p in files).lower()
assert "question" in text and "score" in text
print("Quiz App smoke check passed")
