# Websocket server base

This is a tiny websocket server app that I created once to help debug websocket issues from an Angular front end to a .NET back end. 

The back end was in GraphQL, with the Hot Chocolate framework, and it seemed like our connections would fail with a modern websocket package, but not with a deprecated one.

Turned out the websocket protocol was different between the two npm packages, and the back end still required the protocol of the deprecated package.

I later used this base to come up with a test scenario in Cypress, where the app's "test data mode" (affectionately named "offline mode") would combine msw.io with a custom Express server to intercept all data requests. But IIRC we never implemented that on the project, and then the project ended.
