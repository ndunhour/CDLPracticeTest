import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './airBrakes.html';

import { AirBrakes } from '../imports/api/airBrakesQues.js';

Template.airBrakes.onCreated(function airBrakesOnCreated() {
    console.log('big A', AirBrakes.find())
});

Template.airBrakes.helpers({

});

Template.airBrakes.events({

});
