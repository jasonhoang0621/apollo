import { ObjectID } from "mongodb";

const resolvers = {
  Query: {
    students: async (_parent, _args, { studentModel }) => {
      return await studentModel.find({}).toArray();
    },
    student: async (_parent, args, { studentModel }) => {
      return await studentModel.findOne({ id: args.id });
    },
    classes: async (_parent, _args, { classModel }) => {
      return await classModel.find({}).toArray();
    },
    class: async (_parent, args, { classModel }) => {
      return await classModel.findOne({ id: args.id });
    },
  },
  Student: {
    class: async (parent, _args, { classModel }) => {
      return await classModel.findOne({ id: parent.classId });
    },
  },
  Class: {
    students: async (parent, _args, { studentModel }) => {
      return await studentModel.find({ classId: parent.id }).toArray();
    },
  },
  Mutation: {
    createStudent: async (_parent, args, { studentModel }) => {
      const newStudent = {
        id: ObjectID().toString(),
        name: args.name,
        age: args.age,
        classId: args.classId,
      };
      await studentModel.insertOne(newStudent);
      return newStudent;
    },
    createClass: async (_parent, args, { classModel }) => {
      const newClass = {
        id: ObjectID().toString(),
        name: args.name,
      };
      await classModel.insertOne(newClass);
      return newClass;
    },
  },
};

export default resolvers;
