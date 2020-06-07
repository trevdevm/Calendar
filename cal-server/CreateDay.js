const Day = require('./DayModel');
const connect = require('./connect');

const uri = "mongodb+srv://trevdevm:beautifulT1%40R%40@cluster0-ndjmg.mongodb.net/test?retryWrites=true&w=majority";

const createDay = (Date) => {
    let day = new Day(Date);
    
}

connect(uri)
.then(
    Day
)
