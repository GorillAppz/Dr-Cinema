/* Centralized PropTypes Declaration */
import PropTypes from 'prop-types';

const { shape, number, string, bool, arrayOf, func, node, oneOfType, object, array } = PropTypes;

export const cinemaType = shape({
	id: number.isRequired,
	name: string,
	description: string,
	address: string,
	city: string,
	phone: string,
	website: string,
	google_map: string
});

export const cinemasType = arrayOf(
	cinemaType
);

export const stringType = string;
export const numberType = number;
export const funcType = func;
export const boolType = bool;
export const nodeType = node;
export const oneOfTypeType = oneOfType;
export const arrayType = array;
export const objectType = object;