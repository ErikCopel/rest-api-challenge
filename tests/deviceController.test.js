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
        const response = await request(app)
            .put('/api/devices/1')
            .send({
                name: 'Pixel',
                brand: 'Google'
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Pixel');
        expect(response.body.brand).toBe('Google');
    })

    it("should delete a device", async () => {
        const response = await request(app)
            .delete('/api/devices/1');
        expect(response.statusCode).toBe(204);
    })

    it("should search a device by brand", async () => {
        await request(app)
            .post('/api/devices')
            .send({
                name: 'iPhone',
                brand: 'Apple'
            });

        const response = await request(app)
            .get('/api/devices/search/Apple');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    })
});

describe("Error handling tests", () => {
    // ========== addDevice =========== 
    it("should return 400 for a missing name or brand when Adding Device", async () => {
    });
    // ========== getDeviceById ===========
    it("should return 404 for a non-existing device whenn Getting Device By ID", async () => {
    });
    // ========== updateDevice ===========
    it("should return 404 for a non-existing device during update", async () => {
    });

    it("should return 400 for a missing name or brand during update", async () => {
    });
    // ========== deleteDevice ===========
    it("should return 404 for a non-existing device during delete", async () => {
    });    
});