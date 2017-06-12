import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const GenKnow = new Mongo.Collection('genKnow');

import '/Users/ndunhourowens/Coding_Projects/CDLPracticeTests/private/gk.js';

if (Meteor.isServer) {
  // This code only runs on the server
    // if (GenKnow.find().count() === 0){
    //     const insertGenKnow = [
    //     {   "q": "Favorite Color",
    //         "a": "Blue",
    //         "c": ["Blue", "Green", "Red", "Black"]},

    //     {   "q": "Favorite Truck",
    //         "a": "Ram",
    //         "c": ["Silverado", "Tundra", "Ram", "Titan"]},

    //     {   "q": "Favorite Animal",
    //         "a": "Dog",
    //         "c": ["Cat", "Dog", "Horse", "Fish"]},

    //     ];
        for(i=0; i<gk.length; i++){
            GenKnow.insert(gk[i]);
        }
    // }
    Meteor.publish('genKnow', function() {
        return GenKnow.find({});
    });
}

Meteor.methods({
    'getQuestions':function(){
         return GenKnow.find({}).fetch();
    }
});