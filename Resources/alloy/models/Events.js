exports.definition = {
    config: {
        columns: {
            location: "string",
            time: "string",
            date: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "events"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("events", exports.definition, []);

collection = Alloy.C("events", exports.definition, model);

exports.Model = model;

exports.Collection = collection;