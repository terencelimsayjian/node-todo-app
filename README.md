# Express Todo List Part 2

This is Part 4 of a series of labs working towards building your first full stack web app.

- [Part 1 - TDD todo list](https://github.com/wdi-sg/tdd-todo-list)
- [Part 2 - Mongo todo list](https://github.com/wdi-sg/mongo-todo-list)
- [Part 3 - Express todo list pt1](https://github.com/wdi-sg/express-todo-list-pt1)
- (optional) [Part 3.1 - Mocha, Chai and Supertest todo list](https://github.com/wdi-sg/mocha-todo-list)
- Part 4 - (this one)

So far you've built a TODO list Express JSON API and that's awesome! Now we're going to take it in another direction and instead of returning JSON data, you're going to render views using EJS.

Don't forget that you'll need to use [Method Override](https://www.npmjs.com/package/method-override) for you update and delete forms.

## Exercise

You'll need to the following routes and functionality:
- `/` Should render and EJS Landing Page for your website (renders: views/index.ejs)
- `/todos` Should render an EJS index page that lists the names and ids of all todos (renders: views/todos/index.ejs)
- `/todos/new` Should render an EJS page with a form that submits a POST requests to create the todos (renders: views/todos/new.ejs)
- `POST /todos` Should create a new Todo with the submitted form data then res.redirect to the show page (/todos/:id) for the newly created todo.
- `/todos/:id` Should render an EJS page that display the full details for the specified TODO (id equal to the req.params.id).
- `/todos/:id/edit` Should render an EJS page with a form that when submitted sends a PUT requests to update the specific TODO (renders: views/todos/edit.ejs)
- `PUT /todos/:id` Should update the specified TODO with the submitted form data then res.redirect to the show page (/todos/:id) for the newly created todo
- `DELETE /todos/:id` Should delete the specified TODO then res.redirect to the index page (/todos)

Include Bootstrap in your project and use it to style your website.

## Bonus
- Redirect to the index page if a Todo cannot be found on the show, edit, update and destroy routes
- Add buttons and links to your pages, so you don't need to type anything into the URL
- Pre-populate the Edit Form with the data from the Todo you are editing

## Additional Resources

- [http://www.embeddedjs.com/](http://www.embeddedjs.com/)
- [Use EJS to Template Your Node Application](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
