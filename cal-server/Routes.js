const express = require('express');

const DayCtrl = require('./Controller');

const router = express.Router();

router.get('/day/:id', DayCtrl.getDayById);
router.get('/days', DayCtrl.getDays);
router.get('/date/:date/:nextdate', DayCtrl.getDayByDay);
router.post('/date/:date/', DayCtrl.createOne);
router.put('/date/:date/:nextdate', DayCtrl.updateDay);

module.exports = router;