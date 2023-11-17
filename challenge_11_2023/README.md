
#  Pyramid builder

An egyptian cat wants to build a pyramid made of character and it wants to put its name inside of it

  

##  Table of Contents

  

-  [Installation](#installation)

-  [Usage](#usage)

-  [Constraints](#constraints)

-  [How to](#how-to)

  
  

##  Installation

  

1. Clone repository:

```bash

git  clone [repository_url]

```

2. Checkout correct directory

```bash

cd  /challenge_11_2023

```

3. Install dependencies:

```bash

pnpm  install

```

  

##  Usage

To run the challenge: Recommended if you just want to see the result

```bash

pnpm  start

```

  

To run the challenge with watcher. Recommended if you want to play with it

  

```bash

pnpm  start:dev

```

  

##  Constraints

1. The level of the pyramid shoud be >=3. If it's less than 3 it should throw an error

2. The Cat's name should be in the line that fits the name. If the name doesn't fit in any pyramid line, it should throw an Error

3. This function only accepts characters in uppercase and numbers, otherwise it should throw an Error

  

##  How to:

  

1. Go to entry file `src/index.ts`

2. locate: `const pyramid = pyramidBuilder(16, "S", "SONATAFY")` at line 35

3. Change values to see result of pyramid or Error