import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const DoubTrip = new Mongo.Collection('doubTrip');

if (Meteor.isServer) {

    Meteor.publish('DoubTrip', function() {
        return DoubTrip.find({});
    });
}

Meteor.methods({

});