const Day = require('./DayModel');

const getInitialDays = async (req, res) => {
    await Day.find({ date: { "$gte": req.params.start, "$lt": req.params.end } }, '-_id date time', { sort: { date: 1 } }, (err, day) => {
        if (day == undefined || day.length <= 0) {
            return res.status(400).send({ success: false })
        }
        const size = day.length;
        const june = 30;
        const july = 31;

        let first = {};
        let second = {};
        for (let i = 0; i < june; i++) {
            first[i] = { 'time': day[i].time };
        }

        console.log(`size: ${size}`);
        let j = 0;
        for (let i = june; i < size; i++) {
            second[j] = { 'time': day[i].time };
            j++;
        }
        console.log(`second size: ${size}`);
        const data = { first, second };
        return res.status(200).json({ data })
    })
        .catch(err => {
            console.log(err)
            return res.status(404).send({ success: false, error: err.response })
        })
}

const getDayByDay = async (req, res) => {
    await Day.find({ date: { "$gte": req.params.date, "$lt": req.params.nextdate } }, (err, day) => {
        if (err) {
            return res.status(400).json({ success: false, error: err.response })
        }

        if (day.length == 0) {
            return res.status(400).send({ success: false });
        }

        return res.status(200).json({ success: true, data: day })
    }).catch(err => console.log(err))
}

const updateDay = async (req, res) => {
    try {
        const doc = await Day.findOneAndUpdate(
            { date: { "$gte": req.body.date, "$lt": req.body.nextdate } },
            { time: req.body.time },
            { new: true })

        return res.status(200).json({ success: true, data: doc });
    }
    catch (err) {
        console.log(err.response);
        return res.status(404).json({ success: false, error: err.response })
    }
}

module.exports = {
    getInitialDays,
    getDayByDay,
    updateDay
};