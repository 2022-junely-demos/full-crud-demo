# Bulletin Board CRUD

## /auth

    - Context for storing the current user (user, setUser state)
    - `Auth` component with form for user data (email, password)
        - submitting form, sends info to supabase, sets user in context
        - need `users.js` service for storing supabase calls
        - should redirect to /posts if you have a user
    - Once this is done - make a PR and review with team

## /posts

    - usePosts hook to fetch posts from supabase and store in state
    - will need posts service for loading data from supabase
    - `Posts` component that loads posts from usePosts
    - `PostCard` component for each individual post -- will eventually have an edit/delete but ignore for now
        - will receive title, description, user_id as props

## /posts/edit/:id

    - usePost hook to fetch individual post info
    - will need function in posts service to send update to supabase
    - `EditPost` component will use `PostForm` component
        - will receive a `handleSubmit` callback to allow us to reuse component in `/new` route

## /posts/new

    - will need function in posts service to send new data to supabase
    - `NewPost` will use `PostForm` component

## delete functionality

    - add on to the PostCard -- click handler
    - update your posts

## database schema

| column      | type                                              |
| ----------- | ------------------------------------------------- |
| id          | primary key                                       |
| user_id     | foreign key to the users table -- default `uid()` |
| title       | varchar                                           |
| description | varchar                                           |

## data RLS

- Users should be able to READ all rows
- Users should only be able to update / delete / edit their OWN posts
