const percision = 2;

const RMCalculations = {
	Epley({ weight, reps }) {
		return +(weight * (1 + reps / 30.0)).toFixed(percision);
	},

	Bryzcki({ weight, reps }) {
		if (reps > 36) reps = 36;
		return +(weight / (1.0278 - 0.0278 * reps)).toFixed(percision);
	},

	McGlothin({ weight, reps }) {
		return +((100 * weight) / (101.3 - 2.67123 * reps)).toFixed(percision);
	},

	Lombardi({ weight, reps }) {
		return +(weight * reps ** 0.1).toFixed(percision);
	},

	OConner({ weight, reps }) {
		return +(weight * (1 + reps / 40.0)).toFixed(percision);
	},

	Mayhew({ weight, reps }) {
		return +(
			(100.0 * weight) /
			(52.2 + 41.9 * Math.E ** (-0.055 * reps))
		).toFixed(percision);
	},

	Wathen({ weight, reps }) {
		return +(
			(100.0 * weight) /
			(48.8 + 53.8 * Math.E ** (-0.075 * reps))
		).toFixed(percision);
	},

	Wendler({ weight, reps }) {
		return +(weight * reps * 0.0333 + weight).toFixed(percision);
	},

	// This is an object with weight and reps
	Average(weight) {
		return +(
			(this.Epley(weight) +
				this.Bryzcki(weight) +
				this.McGlothin(weight) +
				this.Lombardi(weight) +
				this.OConner(weight) +
				this.Mayhew(weight) +
				this.Wathen(weight) +
				this.Wendler(weight)) /
			8.0
		).toFixed(percision);
	},
};

export default RMCalculations;
