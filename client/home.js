import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './home.html';

Template.home.onCreated(function() {
    Session.set('AIR BRAKES', '33');
    Session.set('COMBINATION', '35');
    Session.set('DOUBLE/TRIPLE', '35');
    Session.set('GENERAL KNOWLEDGE', '111');
    Session.set('HAZARDOUS MATERIAL', '49');
    Session.set('PASSENGER', '33');
    Session.set('TANKER', '26');
});

Template.home.helpers({

});

Template.home.events({
    'click #selectTest'(event){
        Session.set('selectTest', event.target.textContent)
        var getNum = Session.get('selectTest')
        Session.set('quesVal', Session.get(getNum))
    }

});
