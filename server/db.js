const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/gratitudeJournal');

const journalSchema = new Schema({
  entry: String,
  date: Number
});

const Entries = mongoose.model('gratitudeJournal', journalSchema);

exports.saveEntry = function (data, callback) {
  const entry = new Entries(data);
  entry.save((err) => {
    if(err) {
      callback(err);
    } else {
      callback(null);
      console.log("entry has been saved!")
    }
  })
};

exports.getEntryByDate = function (data, callback) {
  Entries.find({}, (err, docs) => {
    callback(err, docs);
  })
}