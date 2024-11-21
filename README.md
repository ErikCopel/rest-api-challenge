# rest-api-challenge

## How to execute

## Using npm

### Clone this repo:
`git clone https://github.com/ErikCopel/rest-api-challenge.git` <br />
`cd rest-api-challenge`

### Intall dependencies:
`npm install`

### Init server:
`npm start`

## Using docker

### Build image

```sudo docker build -t rest-api-challenge .```

### Run image

```sudo docker run -p 3000:3000 rest-api-challenge```

### Test API

```sudo docker run -it my-node-api npm test```

### API routes

| Method | Route                   | Description                                      |
|--------|----------------------------|-----------------------------------------------|
| POST   | `/api/devices`             | Adds a new device                             |
| GET    | `/api/devices`             | Lists all devices                             |
| GET    | `/api/devices/:id`         | Gets device by ID                             |
| PUT    | `/api/devices/:id`         | Updates device by ID                          |
| DELETE | `/api/devices/:id`         | Deletes device by ID                          |
| GET    | `/api/devices/search/:brand` | Search device by brand                    |

