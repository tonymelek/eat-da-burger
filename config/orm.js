const connection = require('./connection')
const { promisify } = require('util')
const asyncQuery = promisify(connection.query).bind(connection)



//Select all
const orm = {
    selectAll: async function () {
        try {
            const result = await (asyncQuery('select * from burger_list'))
            return result
        }
        catch (err) {
            console.log(err);
        }
    },
    //Insert One
    insertOne: function (burger) {
        connection.query('insert into  burger_list (burger_name) values (?)', [burger], (err, data) => {
            if (err) {
                throw err
            } else {
                console.log(`${burger} has been added to the database`);
            }
        })
    },

    //Update One
    updateOne: function (id) {
        connection.query('update burger_list set is_selected=true where id=? ', [id], (err, data) => {
            if (err) {
                throw err
            } else {
                console.log(`${id} has been marked as selected`);
            }
        })
    }
    ,

    //Remove One
    removeOne: function (id) {
        connection.query('update burger_list set is_selected=false where id=? ', [id], (err, data) => {
            if (err) {
                throw err
            } else {
                console.log(`${id} has been marked as not selected`);
            }
        })
    },
    deleteOne: function (id) {
        connection.query('delete from burger_list where id=? ', [id], (err, data) => {
            if (err) {
                throw err
            } else {
                console.log(`${id} has been deleted`);
            }
        })
    }
}
module.exports = orm