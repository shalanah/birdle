# Wordle Clone Challenge - Birdle

## Prompt

You can implement as close to the real UI as you want (preferably adding your own signature), but the key is to maintain the core functionality:

1. There must be one word per day.
2. A user can only guess six times, after which the word will be revealed.
3. Letters within a guess should be distinctly highlighted after a guess based on these groups: letters matching exact position in the target word, letters included in the target word (but in incorrect position) and letters not included in the target word.

## Video

TODO: Put video link here

## Other Notes

- First time using VITE, React + TS (together), and finally got around to using SVGR for the first time

## Future work

- Add localstorage or cookies to track and show progress
- Build out rest of UI around game (tracking streaks etc)
- Make responsive

## Investigation

Redux store of real wordle - maybe helps maybe not!

```js
{
  persist: {
    game: {
      id: 423,
      dayOffset: 423,
      boardState: [
        'grant',
        '',
        '',
        '',
        '',
        ''
      ],
      currentRowIndex: 1,
      status: 'IN_PROGRESS',
      timestamps: {
        lastPlayed: 1660699982797,
        lastCompleted: null
      }
    },
    settings: {
      hardMode: false,
      darkMode: true,
      colorblindMode: false
    },
    stats: {
      currentStreak: 0,
      maxStreak: 0,
      guesses: {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        fail: 0
      },
      winPercentage: 0,
      gamesPlayed: 0,
      gamesWon: 0,
      averageGuesses: 0
    }
  },
  overlays: {
    modal: null,
    page: null,
    error: null,
    isNavModalOpen: false,
    toasts: [],
    isPageClosing: false
  },
  'transient': {
    isAnimatingRow: false,
    lastRowInvalid: false,
    lastRowWin: false,
    isRestoringSession: false
  },
  api: {
    moogleGet: {
      isLoading: false,
      error: false,
      errorMessage: null,
      data: null,
      optedIn: false
    },
    mooglePost: {
      isLoading: false,
      error: false,
      lastFailedSaveData: null
    },
    solution: {
      isLoading: false,
      error: false,
      data: {
        solution: 'gruel',
        id: 423,
        dayOffset: 423
      }
    },
    profileInfo: {
      isLoading: false,
      error: false,
      data: null
    },
    appLoaded: true
  }
}

```
