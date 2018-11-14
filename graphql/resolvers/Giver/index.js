import Giver from '../../../models/Giver';

export default {
	Query: {
		giver: (root, args) => {
		  return new Promise((resolve, reject) => {
			Giver.findOne(args).exec((err, res) => {
			  err ? reject(err) : resolve(res);
			});
		  });
		},
		givers: () => {
		  return new Promise((resolve, reject) => {
			Giver.find({})
			  .populate()
			  .exec((err, res) => {
				err ? reject(err) : resolve(res);
			  });
		  });
		}
	  },
	  Mutation: {
		addGiver: (root, { id, name, exclude }) => {
		  const newGiver = new Giver({ id, name, exclude });

		  return new Promise((resolve, reject) => {
			newGiver.save((err, res) => {
			  err ? reject(err) : resolve(res);
			});
		  });
		},
		editGiver: (root, { id, name, exclude }) => {
		  return new Promise((resolve, reject) => {
			Giver.findOneAndUpdate({ id }, { $set: { name, exclude } }).exec(
			  (err, res) => {
				err ? reject(err) : resolve(res);
			  }
			);
		  });
		},
		deleteGiver: (root, args) => {
		  return new Promise((resolve, reject) => {
			Giver.findOneAndRemove(args).exec((err, res) => {
			  err ? reject(err) : resolve(res);
			});
		  });
		}
	  }
	};
}
