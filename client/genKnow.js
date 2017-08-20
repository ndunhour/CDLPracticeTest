import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './genKnow.html';

import { GenKnow } from '../imports/api/genKnowQues.js';
import { AirBrakes } from '../imports/api/airBrakesQues.js';


Template.blank.created = function(){
    Meteor.subscribe('AirBrakes');
};

Template.blank.rendered = function(){

};

Template.genKnow.helpers({
});

Template.genKnow.events({
    'click #startTest': function(e,t){
        $('.movementButts').css('display', 'block');
    }
});