# Birdle

Use five letter words to guess the bird of the day. (for-fun wordle clone)

## Video

TODO: Put video here

## Fun firsts

- First time using VITE, React + TS (together), and finally got around to using SVGR for the first time

## Possible future improvements

- Add to localstorage with track daily progress
- Build out rest of UI around game (tracking, streaks, about, github link etc)
- Make responsive
- Update color scheme to be more bird friendly

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
