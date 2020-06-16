const Day = require('./DayModel');

const getDayById = async (req, res) => {
    await Day.findOne({ _id: req.params.id }, (err, day) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!day) {
            return res
                .status(404)
                .json({ success: false, error: `Day not found` })
        }
        return res.status(200).json({ success: true, data: day })
    }).catch(err => console.log(err))
}

const getDays = async (req, res) => {
    await Day.find({}, (err, days) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!days.length) {
            return res
                .status(404)
                .json({ success: false, error: `Day not found` })
        }
        console.log(days);
        return res.status(200).json({ success: true, data: days })
    }).catch(err => console.log(err))
}

const getDayByDay = async (req, res) => {
    await Day.find({ date: {"$gte": req.params.date, "$lt": req.params.nextdate } }, (err, day) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!day) {
            return res
                .status(404)
                .json({ success: false, error: `Day not found` })
        }
        return res.status(200).json({ success: true, data: day })
    }).catch(err => console.log(err))
}

const updateDay = async (req, res) => {
    try {
        const doc = await Day.findOneAndUpdate(
            { date: {"$gte": req.params.date, "$lt": req.params.nextdate } },
            { time: req.body.time },
            { new: true })

        return res.status(200).json({ success: true, data: doc })
    }
    catch (err) {
        console.log(err.response);
        return res.status(404).json({success: false, error: err.response})
    }
}

module.exports = {
    getDayById,
    getDays,
    getDayByDay,
    updateDay
};