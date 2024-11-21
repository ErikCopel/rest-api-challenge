const { Device } = require('../models/deviceModel');


const devices = [];
let idCount = 1;


// 1. Add device;
exports.addDevice = async (req, res) => {
    try {
        const { name, brand } = req.body;
        if (!name || !brand) {
            return res.status(400).json({ error: 'name and brand are required' });
        }
        const newDevice = await Device.create({ name, brand });
        res.status(201).json(newDevice);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// 2. Get device by identifier;
exports.getDeviceById = async (req, res) => {
    try {
        const { id } = req.params;
        const device = await Device.findByPk(id);

        if (!device) {
            return res.status(404).json({ error: 'device not found' });
        }
        res.status(200).json(device);

    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }

};
// 3. List all devices;
exports.listAllDevices = async (req, res) => {
    try {
        const devices = await Device.findAll();
        res.status(200).json(devices);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// 4. Update device (full and partial);
exports.updateDevice = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Device.update(req.body, { where: { id } });
        if (!updated) {
            return res.status(404).json({ message: 'Dispositivo não encontrado' });
        }
        const updatedDevice = await Device.findByPk(id);
        res.status(200).json(updatedDevice);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar dispositivo', error: error.message });
    }
};
// 5. Delete a device;
exports.deleteDevice = (req, res) => {
    const { id } = req.params;
    const index = devices.findIndex((device) => device.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'device not found' });
    }
    devices.splice(index, 1);
    res.status(204).end();
};
// 6. Search device by brand;
exports.searchDeviceByBrand = (req, res) => {
    const { brand } = req.params;
    const filteredDevices = devices.filter((device) => device.brand === brand);
    res.json(filteredDevices);
};