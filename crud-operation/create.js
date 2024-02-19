const mongoose = require('mongoose');
const db = require('../db');
const manager = require('../models/managerModel');

async function createmanager(name, age,role) {
  try {
    await db;
    const result = await manager.create({ name, age ,role});
    console.log('manager created:', result);
  } catch (error) {
    console.error('Error creating manager:', error);
  }
}

module.exports = createmanager;