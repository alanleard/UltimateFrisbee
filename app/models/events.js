exports.definition = {
	config: {
		columns: {
		    "location": "string",
		    "time": "string",
		    "date": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "events"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

