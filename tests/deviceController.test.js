const request = require('supertest');
const app = require('../app');

describe("Device API", () => {
    it("should add a device", async () => {
        const response = await request(app)
            .post('/api/devices')
            .send({
                name: 'iPhone',
                brand: 'Apple'
            });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('iPhone');
        expect(response.body.brand).toBe('Apple');
    });

    it("should list all devices", async () => {
        const response = await request(app)
            .get('/api/devices');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });

    it("should get a device by id", async () => {
        const response = await request(app)
            .get('/api/devices/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('iPhone');
        expect(response.body.brand).toBe('Apple');
    })

    it("should update a device", async () => {
    })

    it("should delete a device", async () => {
    })

    it("should search a device by brand", async () => {
    })
});