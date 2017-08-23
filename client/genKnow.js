import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './genKnow.html';
import './home.html';
import './js.js';

import { AirBrakes } from '../imports/api/airBrakesQues.js';
import { Combination } from '../imports/api/combination.js';
import { DoubTrip } from '../imports/api/doubTrip.js';
import { GenKnow } from '../imports/api/genKnowQues.js';
import { Hazmat } from '../imports/api/hazmat.js';
import { Passenger } from '../imports/api/passenger.js';
import { Tanker } from '../imports/api/tanker.js';

    // console.log('in rendered', numOfQues)

Template.genKnow.onCreated = function(){
};

Template.genKnow.rendered = function(){

    $('#userMsg').text('THE MAXIMUM OF QUESTIONS FOR THE ' + Session.get('selectTest') + ' TEST IS ' + Session.get('quesVal'))
};

Template.genKnow.helpers({
});

Template.genKnow.events({
    // 'click .showSavedQues tr'(){
    //     $('.showSavedQues').css('display', 'none');
    //     $('.displaySpecQues').css('display', 'block');
    // },
    // 'click .displaySpecQues li'(){
    //     $('.showSavedQues').css('display', 'block');
    //     $('.displaySpecQues').css('display', 'none')
    // }

});