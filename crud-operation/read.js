
const mongoose = require('mongoose');
const db = require('../db');
const manager = require('../models/managerModel');

async function readmanager() {
  try {
    await db;
    const result = await manager.find();
    console.log('manager:', result);
  } catch (error) {
    console.error('Error reading manager:', error);
  }
}

module.exports = readmanager;
