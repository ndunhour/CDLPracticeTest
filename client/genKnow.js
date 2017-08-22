import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './genKnow.html';
import './home.html';

import { AirBrakes } from '../imports/api/airBrakesQues.js';
import { Combination } from '../imports/api/combination.js';
import { DoubTrip } from '../imports/api/doubTrip.js';
import { GenKnow } from '../imports/api/genKnowQues.js';
import { Hazmat } from '../imports/api/hazmat.js';
import { Passenger } from '../imports/api/passenger.js';
import { Tanker } from '../imports/api/tanker.js';


Template.blank.created = function(){

};

Template.blank.rendered = function(){
};

Template.genKnow.helpers({
});

Template.genKnow.events({

});