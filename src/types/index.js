/* Centralized PropTypes Declaration */
import PropTypes from 'prop-types';

const { shape, number, string, bool, arrayOf, func, node, oneOfType, object, array, oneOf } = PropTypes;

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

export const actorType = shape({
	name: string
});
export const actorsType = arrayOf(
	actorType
);

export const directorType = shape({
	name: string
});
export const directorsType = arrayOf(
	directorType
);

export const genreType = shape({
	ID: number,
	Name: string,
	NameEN: string
});

export const genresType = arrayOf(
	oneOfType([genreType, number])
);

export const idsType = shape({
	imdb: string,
	rotten: string,
	tmdb: string
});

export const trailerResultType = shape({
	id: string,
	iso_3166_1: string,
	iso_639_1: string,
	key: string,
	name: string,
	site: string,
	size: number,
	type: string,
	url: string
});
export const trailerResultsType = arrayOf(
	trailerResultType
);

export const trailerType = shape({
	id: number,
	results: trailerResultsType
});
export const trailersType = arrayOf(
	trailerType
);

export const movieType = shape({
	_id: string,
	actors_abridged: actorsType,
	alternativeTitles: string,
	directors_abridged: directorsType,
	genres: genresType,
	id: number,
	ids: idsType,
	omdb: string,
	plot: string,
	poster: string,
	title: string,
	trailers: trailersType,
	year: string,
	'release-dateIS': string
});
export const moviesType = arrayOf(
	movieType
);

export const showTimeType = shape({
	purchase_url: string,
	time: string
});
export const ShowTimesType = arrayOf(
	showTimeType
);

export const stringType = string;
export const numberType = number;
export const funcType = func;
export const boolType = bool;
export const nodeType = node;
export const oneOfTypeType = oneOfType;
export const arrayType = array;
export const objectType = object;