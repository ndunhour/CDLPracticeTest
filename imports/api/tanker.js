import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tanker = new Mongo.Collection('tanker');

if (Meteor.isServer) {

    Meteor.publish('Tanker', function() {
        return Tanker.find({});
    });
}

Meteor.methods({

});