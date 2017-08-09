import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './genKnow.html';

import { GenKnow } from '../imports/api/genKnowQues.js';


Template.blank.created = function(){
};

Template.blank.rendered = function(){
    displayQuestion();

};

Template.genKnow.helpers({
});

Template.genKnow.events({
    'click #startTest': function(e,t){
        $('.movementButts').css('display', 'block');
    },

});