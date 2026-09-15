def score(correct, total):
    return correct * 100 / total if total else 0

assert score(0, 10) == 0
assert score(10, 10) == 100
