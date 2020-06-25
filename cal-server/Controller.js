const Day = require('./DayModel');
const isSameMonth = require('date-fns/isSameMonth');


const getInitialDays = async (req, res) => {
    await Day.find({ date: { "$gte": req.params.start, "$lt": req.params.end } }, '-_id date time', { sort: { date: 1 } }, (err, day) => {
        if (day == undefined) {
            return res.status(400).send({ success: false })
        }

        const size = day.length;
        const june = 30;
        //const july = 31;
        const current = new Date();
        //const next = addMonths(current, 1);

        let j = 0;
        let first = {};
        let second = {};

        for (let i = 0; i < size; i++) {
            let check = day[i].date;
            if (isSameMonth(current, check)) {
                first[i] = { 'time': day[i].time };
            }
            else {
                second[j] = { 'time': day[i].time };
                j++;
            }
        }

        const data = { first, second };
        return res.status(200).json({ data })
    }).lean()
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

        if (day.length <= 0) {
            return res.status(400).send({ success: false });
        }

        return res.status(200).json({ success: true, data: day })
    }).lean().catch(err => console.log(err))
}

const updateDay = async (req, res) => {
    try {
        let aTimes = req.body.time;
        if (aTimes.length <= 1) {
            aTimes = ["9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];
        }
        const doc = await Day.findOneAndUpdate(
            { date: { "$gte": req.body.date, "$lt": req.body.nextdate } },
            { time: aTimes },
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