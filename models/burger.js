const orm = require('./../config/orm')
//Call Orm Functions

const burger = {
    select: async function () {
        const result = await orm.selectAll()
        return (result);
    },
    insert: function (burger) {
        orm.insertOne(burger)
    },
    update: function (id) {
        orm.updateOne(id)
    },
    remove: function (id) {
        orm.removeOne(id)

    },
    delete: function (id) {
        orm.deleteOne(id)
    }

}
module.exports = burger