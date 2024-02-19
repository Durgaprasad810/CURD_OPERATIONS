
const mongoose = require('mongoose');
const db = require('../db');
const manager = require('../models/managerModel');

async function deletemanagers(filter) {
  try {
    await db;
    const result = await manager.deleteOne(filter);
    console.log('manger deleted:', result);
  } catch (error) {
    console.error('Error deleting manager:', error);
  }
}

module.exports = deletemanagers;
