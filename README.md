# Message board

To start an application execute following commands
```
npm install
npm run build
npm start
```
and open [http://localhost:3000/](http://localhost:3000/) in your browser.

# Roadmap
* Improve user authentication and add user authorization (currently user can provide his nickname at the index page)
* Add styling to pages (currently the only styled page is the chat view)
* Reference chats by ID instead of names to decouple data relations from appearance (currently the chat's identifier is it's verbose name)
* Use DB to store messages to fetch history for users on joining channels
* Subscribe to messages from current channel only
* Dockerize the application
* Use chunks for assets
* Use optimistic posting (do not send messages that belong to current user back and forth)
* Allow to create channels dynamically
