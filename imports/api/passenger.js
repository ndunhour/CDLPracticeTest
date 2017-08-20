import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Passenger = new Mongo.Collection('passenger');

if (Meteor.isServer) {

    Meteor.publish('Passenger', function() {
        return Passenger.find({});
    });
}

Meteor.methods({

});