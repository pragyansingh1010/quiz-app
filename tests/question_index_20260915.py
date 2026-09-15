def valid_index(index, total):
    return 0 <= index < total

assert valid_index(0, 5)
assert valid_index(4, 5)
assert not valid_index(5, 5)
