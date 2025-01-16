// STRETCH
const cars = [
    {
        vin: "10110110110110111",
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: "manual",
    },

    {
        vin: "11111111111111111",
        make: "toyota",
        model: "corolla",
        mileage: 115000,
        title: "salvage",
        transmission: "manual",
    },

    {
        vin: "11111100000000202",
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: "manual",
    }
]

// exports.seed = function(knex) {
//     return knex("cars").truncate().then(() => {
//         return knex("cars").insert(cars)
//     })
// }

exports.seed = async function (knex) {
    await knex("cars").truncate()
    await knex("cars").insert(cars)
}
