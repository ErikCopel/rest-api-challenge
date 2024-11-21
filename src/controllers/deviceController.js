const { Device } = require('../models/deviceModel');

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
        const { name, brand } = req.body;

        if (!name || !brand) {
            return res.status(400).json({ message: 'Missing Name or Brand' });
        }

        const device = await Device.findByPk(id);
        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        device.name = name;
        device.brand = brand;
        await device.save();
        res.status(200).json(device);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar dispositivo', error: error.message });
    }
};
// 5. Delete a device;
exports.deleteDevice = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Device.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Dispositivo não encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar dispositivo', error: error.message });
    }
};
// 6. Search device by brand;
exports.searchDeviceByBrand = async (req, res) => {
    try {
        const { brand } = req.params;
        const devices = await Device.findAll({ where: { brand } });
        res.status(200).json(devices);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar dispositivos pela marca', error: error.message });
    }
};