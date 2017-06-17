import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const GenKnow = new Mongo.Collection('GenKnow');

if (Meteor.isServer) {

    Meteor.publish('GenKnow', function() {
        return GenKnow.find({});
    });
}

Meteor.methods({
    'getQuestions':function(){
         return GenKnow.find({}).fetch();
    }
});