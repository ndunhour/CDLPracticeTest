import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './nav.html';


Template.nav.onCeated = function(){
    console.log(Session.get('selectTest'));

};

Template.nav.rendered = function(){
        $('#testName').text(Session.get('selectTest'));

};

Template.nav.helpers({

});

Template.nav.events({

});
