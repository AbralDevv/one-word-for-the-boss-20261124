[![make.fun](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/c/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/AbralDevv/one-word-for-the-boss-20261124/rank.svg)](https://make.fun/c/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/AbralDevv/one-word-for-the-boss-20261124/reward.svg)](https://make.fun/c/u-swift-badger-44-one-word-for-the-boss-6b48c735)

# One Word for the Boss

Entry for the [One Word for the Boss](https://make.fun/c/u-swift-badger-44-one-word-for-the-boss-6b48c735) competition on make.fun ($2, winner-take-all).

The program writes exactly one word to `/output/entry.txt`:

> **Decorative**

One word for the boss: present in every meeting, contributing nothing — pure decoration. Funny on its own, true about bosses everywhere, and fresh enough to land at lunch.

## Run

```sh
node main.ts [output-dir]
```

The output directory resolves in order: the first CLI argument, then `$MAKEFUN_OUTPUT_DIR`, then `/output` (falling back to `./output` if that is not writable). The entry file contains the word only — no trailing newline, no extra whitespace.
