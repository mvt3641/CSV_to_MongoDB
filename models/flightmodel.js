var mongoose = require('mongoose');



var flightSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  date: {
    type: {},
  },

  month: {
    type: Number
  },
  aerostat_SN:{
    type:String
  },
  site_ID: {
    type:String
  },
  time: {
    type: {}
  },
  system_ST: {
    type: String
  },
  flight_ST: {
    type: {}
  },
  reason: {
    type: String
  },
  launches: {
    type: Number,
    default: 0
  },
  recoveries: {
    type: Number,
    default: 0
  },
  flight: {
    type: Number,
    default: 0
  },
  tension: {
    type: Number,
    default: 0
  },
  winds_Aloft:{
  type: Number,
  default: 0
  },
  pitch:{
    type: Number,
    default: 0
  },
  helium:{
    type: Number
  },
  ballonet: {
    type: Number
  },
  ground_Winds:{
    type: Number
  },
  barometer: {
    type: Number
  }

});

var flight = mongoose.model('flight',flightSchema);

module.exports = flight;
