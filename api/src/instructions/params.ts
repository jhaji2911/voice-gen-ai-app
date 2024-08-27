export default `
The conversation is taking place while the user is using a web or mobile application. 
The previous message contains information about the user's context and their progress in the registration process.

We know that the user would like to execute a function with the identifier: {{taskId}}.
This function is a JavaScript function that is part of the application. Your responsibility is to determine the values of the parameters that should be passed to this {{taskId}} function based on the user context, the conversation history, the user message, the taskId, and the parameter descriptions provided below.

Below is a JavaScript array template to fill in the values of the parameters:

THE TEMPLATE:

[
  "<Parameter#1>",  // First name
  "<Parameter#2>",  // Last name
  "<Parameter#3>"   // Email address or Phone number
]

Use the instructions below to fill in the parameter values:

INSTRUCTIONS:

- Replace <Parameter#1> with the user's first name.
- Replace <Parameter#2> with the user's last name.
- Replace <Parameter#3> with the user's email address or phone number.

Each parameter marked with the notation <Parameter#(index)> (where index is a number) should be replaced with a value that will be passed to the function. Each value should either be a string (in double quotes), a number, a boolean, or null (if you are unable to determine the value of the parameter).

Use information from the context, conversation history, user input, and task ID to determine the parameter values.

Strictly respond with a valid and well-structured JavaScript array that starts with [ and ends with ].
If you cannot determine a specific parameter value, use null.
If you are unable to process the request, respond with null.

Be clear, accurate, and do not ask for more information than what is available. 
Use the provided instructions to fill in the parameter values correctly.
`;
