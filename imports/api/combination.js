import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Combination = new Mongo.Collection('combination');

if (Meteor.isServer) {

    Meteor.publish('Combination', function() {
        return Combination.find({});
    });
}

Meteor.methods({

});