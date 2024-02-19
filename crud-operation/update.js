
const mongoose = require('mongoose');
const db = require('../db');
const manager = require('../models/managerModel');

async function updatemanager(filter, update) {
  try {
    await db;
    const result = await manager.updateMany(filter, update);
    console.log('manager updated:', result);
  } catch (error) {
    console.error('Error updating manager:', error);
  }
}

module.exports = updatemanager;
