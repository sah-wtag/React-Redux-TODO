# Live link: https://sadman-todo.netlify.app/

# This is a todo project

## Intially
1. We have introduced 2 main redux part here, Todos and Filter. We have added actions and reducers for them with initial state.
2. We have setted up the redux store and provided the app component under this
3. We have Todolist component which shows the Todo component with multiple workablity
4. In Todo component we can Change Color(Red/Green/Yellow), Toggle status(Complete true/false), Delete the todo

## Footer
1. Updated the Footer component
2. Updated how many tasks left in footer dynamically with dynamic messages
3. We have enbaled the All, Incomplete and Complete status buttons for filtering, we also enabled BOLD syntax for the chosed status
4. In the footer, we have options to filter by 3 colors also, we have updated the footer component to select/unselect the colors and the colors shows when toggling/pressing (filtering is not implemented yet in Todolist component)

# Filtering Todo List
1. Filter by the status logic activated in todolist component
2. Filter by the colors logic activated in todolist component
3. Line through logic updated only for completed status in todo component

# Adding Todo, Complete all todo & Clear all completed Todo
1. Added the new todo adding feature in Header component
2. Updated the button Complete All Tasks that will complete all our todo
3. Updated the button Clear Completed Tasks that will remove all completed todo

# Adding a extra action to toggle all the completed
1. We added a new action InComplete that will toggle all task to complete false and added this in header component

# We set up asynchronous data loading from server
1. Created a LOADED action and add this in reducer
2. Created a middleware thunk(fetchTodos) to fetch data from our server
3. Removed the intial todos thus can fetch from server
4. Called the fetchTodos middleware via dispatch to load the json asynchronously

# Add todos in the local server
1. We have created Add todo thunk to add our todo in the server with the added actions
2. In the header we added the addTodo thunk in the new todo creation flow

# In this commit, We have enabled updating Todos
1. Update Complete status with updateStatus thunk
2. Update color  with updateColor thunk