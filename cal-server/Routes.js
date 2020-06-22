const express = require('express');

const DayCtrl = require('./Controller');

const router = express.Router();

router.get('/days/:start/:end', DayCtrl.getInitialDays);
router.get('/date/:date/:nextdate', DayCtrl.getDayByDay);
router.put('/date', DayCtrl.updateDay);

module.exports = router;