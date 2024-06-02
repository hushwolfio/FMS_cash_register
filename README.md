# FMS Code Challenge: Cash Register

# Languages/Frameworks used:
Vite Project with TypeScript, React, and Mantine for reusable component library, and Vitest/React Testing Library for the testing.

# Purpose
The challenge was to create a cash register that allowed you to add/remove in money in the denominations of $(1, 2, 5, 10, 20) then you could see what specific denominations there were in the cash register.  On top of this, you could dispense a specific amount and it will remove denominations descending from $20 and below.  If it's unable to do so, it will inform you it's unable to, otherwise, it will inform you of the specific denominations it has dispensed.

I went with Mantine ([www.mantine.dev](https://mantine.dev/)) because I like their component library, it has such a huge selection of components that can be used to create a full functional website with little to no styling required, and even if styling is needed, theme can be easily modified.  I chose to go with the default dark theme due to the fact it looks good and is easy on the eyes compared to the light theme.

## Installation

```bash
npm install
```

## Running
```bash
npm run dev
```

## Versions
npm 10+
node 20+