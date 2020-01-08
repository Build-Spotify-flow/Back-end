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

| Field    | Type   | Description                   |
| -------- | ------ | ----------------------------- |
| username | String | Username for the created user |
| password | String | Password for the created user |

    Request Example:

    {
        username: "paulgeorge13",
        password: "laClippers"
    }

# Saving Songs

## -
