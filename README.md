# Back-end

This is the home for documentation of the backend for the Spotify Song Suggester Application.

# Authorization

## - Register a new user

| Field    | Type   | Description                                 |
| -------- | ------ | ------------------------------------------- |
| username | String | Username for the user                       |
| password | String | Password for the user, hashed upon creation |

    Request Example:

    {
        username: "paulgeorge13",
        password: "laClippers"
    }

## - Authorizing an existing user

| Header | Header2 | Header 3 |
| ------ | ------- | -------- |
| Thing  | Thing 2 | Thing 5  |
| Thing3 | Thing 4 | Thing 6  |
