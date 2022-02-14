Overview 
-------- 
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

## Running
### local
```
?> yarn install
?> yarn run build
?> yarn start
```
you can now open a browser at localhost:3000

to run cypress tests
``` 
?> yarn run cypress
```
to run unit tests
```
?> yarn run test
```
---
### docker
```
?> yarn run docker:build
?> yarn run docker:run
```
you can now open a browser at localhost:3030