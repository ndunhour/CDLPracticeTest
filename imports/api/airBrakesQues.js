import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const AirBrakes = new Mongo.Collection('airBrakes');

if (Meteor.isServer) {

    Meteor.publish('AirBrakes', function() {
        return AirBrakes.find({});
    });
}

Meteor.methods({

});