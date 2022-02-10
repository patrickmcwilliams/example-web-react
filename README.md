Overview 
-------- 
Implement a small browser-based application for pre-approving an investor for a potential investment in a financial vehicle. 
Requirements 
------------ 
Your application should lead a user through the initial portion of qualifying for an investment. It should consist of a landing page to collect basic info about both the investment they are interested in investing in and their own financial situation. Based on this, you should be able to make a simulated network call that will redirect the user to either a new account creation page or a 
disqualification notice. 
The styling should be simple, plain but deliberate. 
* Landing Page 
The initial page should show a simple form with inputs for the following field: 
Investment Amount (Currency) 
Investment Type (Text) eg. “Bond”, “Stocks”, “Real Estate” etc... 
Total Net Worth (Currency) 
User Estimated Yearly Income (Currency) 
User Estimated Credit Score (Number from 300-850) 
These fields are all required and should validate to type. Provide feedback to the user when they are incorrect or missing information. There should be space for marketing copy (Lorum Ipsem) and controls for moving forward. 
* Success Page 
If the api call does not return a disqualification message(see below), this page should have a “Congratulations you qualified” type of message, with some added text for next step instructions (Lorem Ipsum is fine) 
* Disqualification Page
Display a simple page with the disqualification message that comes from the api call as well as fake information to get in contact with a customer service. There should be no further way to get off this page or re-enter the information. 
* API call 
You should implement a mock fetch call for your backend communication. This call should have the same interface as the real fetch and return a promise wrapped response object. The response should return disqualify message (Lorem Ipsum is fine) if the Investment Amount is more than 1/5th of their Yearly Income, or their Estimated Credit is below 600, or their Investment Amount is more than 3% of their Total Net Worth. Otherwise it should return a positive qualification flag. A `Bad Request` response should be returned for any Investment Amount above $9,000,000. 
Technologies 
------------ 
We encourage you to use those technologies you are most comfortable with. However, the primary tools you'll be expected to use at this job are modern React/Redux. Displaying familiarity with these is useful and encouraged. Solutions that stray too far will not be considered. 
Questions 
--------- 
If you have any questions on the task presented here, we encourage you to reach out to you representative and we will strive to get you answers in a timely fashion. 
Thank you for your interest and taking the time to complete this. We know your time is valuable and we hope this experience helps both sides get a sense of the other in a quicker, more efficient manner.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
