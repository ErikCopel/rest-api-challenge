How to execute

Clone this repo:
`git clone https://github.com/ErikCopel/rest-api-challenge.git`
`cd rest-api-challenge`

Intall dependencies:
`npm install`

Init server:
`npm start`

API routes

| Method | Route                   | Description                                      |
|--------|----------------------------|-----------------------------------------------|
| POST   | `/api/devices`             | Adds a new device                             |
| GET    | `/api/devices`             | Lists all devices                             |
| GET    | `/api/devices/:id`         | Gets device by ID                             |
| PUT    | `/api/devices/:id`         | Updates device by ID                          |
| DELETE | `/api/devices/:id`         | Deletes device by ID                          |
| GET    | `/api/devices/search/:brand` | Search device by brand                    |

