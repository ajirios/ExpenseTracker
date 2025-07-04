#   ExpenseTracker
You are tasked with building a simple financial app using React Native to help users manage their expenses and track their financial transactions.

Task Description:

In this application, you are required to create a multi-page application. The application will allow the user to sign in, sign out, visit dashboard, add an expense and access all the expenses.

The app should present SignIn screen first. You must use “admin” and “admin” as username and password respectively. Once user successfully sign-in, navigate to Dashboard screen.

On the Dashboard screen, the tool bar should present logout button. When user presses “Logout” button, the app should navigate back to Login screen.

The Dashboard screen should allow the user to view all the transactions. When user selects any transaction from the list, it takes user to next screen where user can see all the details of the selected transaction.

The Dashboard screen should also provide a feature to add a new transaction. It should ask user to input Date, Amount, Description, Location, Transaction Type (Credit, Debit, Refund) and Category (e.g., Shopping, Travel, Utility). Once user inputs all the details and presses “Add Transaction” button, it should validate all the fields and add a new transaction.

Navigation and Routing:

Use React Navigation library to implement multi-screen navigation within the application.
Configure appropriate navigation for navigating between different screens, ensuring a seamless user flow.
Technical Requirements:

Apply appropriate styling and design principles to create an intuitive and visually appealing user interface.
Ensure consistency in design elements, typography, colours, and layout across all screens.
Code must be written either in JavaScript or Typescript.
Implement state management to handle the data flow between different screens.