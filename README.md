# Step Wizard for React

<p>
  <a href="https://www.npmjs.com/package/step-wizard-react">
    <img src="https://img.shields.io/npm/dt/step-wizard-react.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/step-wizard-react">
    <img src="https://img.shields.io/npm/dm/step-wizard-react.svg?sanitize=true" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/step-wizard-react">
    <img src="https://img.shields.io/npm/v/step-wizard-react.svg?sanitize=true" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/step-wizard-react">
    <img src="https://img.shields.io/npm/l/step-wizard-react.svg?sanitize=true" alt="License">
  </a>
</p>

## Getting Started

These instructions will get you a copy of the component up and running on your local machine.

### Installing

You can install step-wizard-react component by npm or yarn.

```bash
npm i step-wizard-react
# or
yarn add step-wizard-react
```

After download, step-wizard-react will be ready to use in your React applications.

### Usage

Add the step-wizard-react component to the page you want to use.

```js
import Wizard from "step-wizard-react";
```

Step Wizard React takes all your needs from you. <br />
Thus, it allows you to make all design changes or positioning as you wish. <br />

Required fields expected from you:

- <b>values</b>: The structure you want to split into steps. <a href="#">You can view the examples here.</a>
- <b>nextButtonRef</b>: The reference of the button to click to proceed to the next step.
- <b>backButtonRef</b>: The reference of the button to click to move to the previous step.

The simplest example use:

```js
import React, { useRef } from "react";
import Wizard from "step-wizard-react";

const App = () => {
  const nextButtonRef = useRef();
  const backButtonRef = useRef();

  const values = {
    "Step 1": "Hello!",
    "Step 2": "Your description",
    "Step 3": <h3>You have completed all the steps.</h3>,
  };

  return (
    <React.StrictMode>
      <Wizard
        values={values}
        nextButtonRef={nextButtonRef}
        backButtonRef={backButtonRef}
      />

      <button ref={backButtonRef}>Back</button>
      <button ref={nextButtonRef}>Next</button>
    </React.StrictMode>
  );
};

export default App;
```

## Versioning

We use [GitHub](https://github.com/mehmetsagir/step-wizard-react) for versioning.

## Authors

- **[Mehmet Sağır](https://github.com/mehmetsagir)**

## License

Licensed under the MIT license, see [LICENSE](https://github.com/mehmetsagir/step-wizard-react/blob/master/LICENSE) for details.
