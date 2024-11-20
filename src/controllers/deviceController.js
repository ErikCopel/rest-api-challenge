
// Write a REST service that supports the management of a device database.
// Represented entities

// 1. Device
//     o Device name
//     o Device brand
//     o Creation time
const devices = [];
let idCount = 1;

// Supported operations

// 1. Add device;
exports.addDevice = (req, res) => {
    console.log(req.body);
    const { name, brand } = req.body;
    if (!name || !brand) {
        return res.status(400).json({ error: 'name and brand are required' });
    }
    const newDevice = {
        id: idCount++,
        name,
        brand,
        creationTime: new Date()
    };
    devices.push(newDevice);
    res.status(201).json(newDevice);
};
// 2. Get device by identifier;
exports.getDeviceById = (req, res) => {
};
// 3. List all devices;
exports.listAllDevices = (req, res) => {
    res.json(devices);
};
// 4. Update device (full and partial);
exports.updateDevice = (req, res) => {
};
// 5. Delete a device;
exports.deleteDevice = (req, res) => {
};
// 6. Search device by brand;
exports.searchDeviceByBrand = (req, res) => {
};