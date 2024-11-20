const express = require('express');

const {
    addDevice,
    getDeviceById,
    listAllDevices,
    updateDevice,
    deleteDevice,
    searchDeviceByBrand
} = require('../controllers/deviceController');

const router = express.Router();

router.post('/', addDevice);
router.get('/', listAllDevices);
router.get('/:id', getDeviceById);
router.put('/:id', updateDevice);
router.delete('/:id', deleteDevice);
router.get('/search/:brand', searchDeviceByBrand);
