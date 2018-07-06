/* eslint-disable consistent-return */
/* this file holds the test Schema */
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Tests = new Mongo.Collection('Tests');

Tests.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Tests.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Tests.schema = new SimpleSchema({
  creator: {
    type: String,
    label: 'The ID of the user that create this Test',
  },
  createdAt: {
    type: String,
    label: 'The date this test was created.',
    autoValue() {
      if (this.isInsert) return (new Date()).toISOString();
    },
  },
  updatedAt: {
    type: String,
    label: 'The date this document was last updated.',
    autoValue() {
      if (this.isInsert || this.isUpdate) return (new Date()).toISOString();
    },
  },
  title: {
    type: String,
    label: 'The title of the test.',
  },
  question: {
    type: String,
    label: 'A question of in test.',
  },
});

Tests.attachSchema(Tests.schema);

export default Tests;

