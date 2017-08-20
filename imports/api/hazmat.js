import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Hazmat = new Mongo.Collection('hazmat');

if (Meteor.isServer) {

    Meteor.publish('Hazmat', function() {
        return Hazmat.find({});
    });
}

Meteor.methods({

});