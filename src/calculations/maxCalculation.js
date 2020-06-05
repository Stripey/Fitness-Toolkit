const RMCalculations = {
	Epley({ weight, reps }) {
		return weight * (1 + reps / 30.0);
	},

	Bryzcki({ weight, reps }) {
		if (reps > 36) reps = 36;
		return weight / (1.0278 - 0.0278 * reps);
	},

	McGlothin({ weight, reps }) {
		return (100 * weight) / (101.3 - 2.67123 * reps);
	},

	Lombardi({ weight, reps }) {
		return weight * reps ** 0.1;
	},

	OConner({ weight, reps }) {
		return weight * (1 + reps / 40.0);
	},

	Mayhew({ weight, reps }) {
		return (100.0 * weight) / (52.2 + 41.9 * Math.E ** (-0.055 * reps));
	},

	Wathen({ weight, reps }) {
		return (100.0 * weight) / (48.8 + 53.8 * Math.E ** (-0.075 * reps));
	},

	Wendler({ weight, reps }) {
		return weight * reps * 0.0333 + weight;
	},

	// This is an object with weight and reps
	Average(weight) {
		return (
			(this.Epley(weight) +
				this.Bryzcki(weight) +
				this.McGlothin(weight) +
				this.Lombardi(weight) +
				this.OConner(weight) +
				this.Mayhew(weight) +
				this.Wathen(weight) +
				this.Wendler(weight)) /
			8.0
		);
	},
};

export default RMCalculations;
