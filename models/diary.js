const Joi = require('joi');
const { Schema, model } = require('mongoose');
const { handleSchemaValidationErrors, formatToday } = require('../helpers');

const DATE_REGEXP = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

const mealSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Set name for product'],
	},
	amount: {
		type: Number,
		min: [1, 'The amount cannot be less than 1 gram'],
		required: [true, 'Set the amount of the product'],
	},
	calories: {
		type: Number,
		min: [1, 'The calories cannot be less than 1'],
		required: [true, 'Set the calories of the product'],
	},
	date: {
		type: String,
		default: formatToday(),
		match: DATE_REGEXP,
	},
	owner: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'user',
	},
}, {versionKey: false, timestamps: false});

mealSchema.post('save', handleSchemaValidationErrors);
const Meal = model('meal', mealSchema);

const workoutSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Set name for exercise'],
	},
	time: {
		type: Number,
		min: [1, 'The time cannot be less than 1 minute'],
		required: [true, 'Set the time of the exercise'],
	},
	calories: {
		type: Number,
		min: [1, 'The calories cannot be less than 1'],
		required: [true, 'Set the calories of the exercise'],
	}, 
	date: {
		type: String,
		default: formatToday(),
		match: DATE_REGEXP,
	},
	owner: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'user',
	},
}, {versionKey: false, timestamps: false});

workoutSchema.post('save', handleSchemaValidationErrors);
const Workout = model('workout', workoutSchema);

const getSchema = Joi.object({
	date: Joi.string().pattern(DATE_REGEXP).required(),
})

const postMealSchema = Joi.object({
	name: Joi.string().required(),
	amount: Joi.number().min(1).required(),
	calories: Joi.number().min(1).required(),
	date: Joi.string().pattern(DATE_REGEXP),
});

const postWorkoutSchema = Joi.object({
	name: Joi.string().required(),
	time: Joi.number().min(1).required(),
	calories: Joi.number().min(1).required(),
	date: Joi.string().pattern(DATE_REGEXP),
});

const deleteSchema = Joi.object({
	name: Joi.string().required(),
	date: Joi.string().pattern(DATE_REGEXP),
});

const schemas = {
	getSchema,
	postMealSchema,
	postWorkoutSchema,
	deleteSchema,
};

module.exports = {
	Meal,
	Workout,
	schemas,
}
