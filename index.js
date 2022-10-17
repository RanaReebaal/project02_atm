"use strict";
exports.__esModule = true;
var inquirer = require('inquirer');
var unique_names_generator_1 = require("unique-names-generator");
var config0 = {
    dictionaries: [unique_names_generator_1.names]
};
var characterName = (0, unique_names_generator_1.uniqueNamesGenerator)(config0);
var config1 = {
    dictionaries: [unique_names_generator_1.countries]
};
var countryName = (0, unique_names_generator_1.uniqueNamesGenerator)(config1);
var config2 = {
    dictionaries: [unique_names_generator_1.languages]
};
var lang = (0, unique_names_generator_1.uniqueNamesGenerator)(config2);
var config3 = {
    dictionaries: [unique_names_generator_1.animals]
};
var anim = (0, unique_names_generator_1.uniqueNamesGenerator)(config3);
var config4 = {
    dictionaries: [unique_names_generator_1.colors]
};
var col = (0, unique_names_generator_1.uniqueNamesGenerator)(config4);
var config5 = {
    dictionaries: [unique_names_generator_1.starWars]
};
var star = (0, unique_names_generator_1.uniqueNamesGenerator)(config5);
var age = Math.floor(Math.random() * 63);
var ph_no = "+111".concat(Math.floor(Math.random() * 6365354163));
inquirer
    .prompt([
    {
        type: "input",
        name: "user_id",
        message: "Enter your user id?"
    },
    {
        type: "input",
        name: "user_pin",
        message: "Enter your pin code?"
    }
])
    .then(function (answers) {
    var pin = answers.user_pin;
    var id = answers.user_id;
    var user_data = {
        Name: characterName,
        Age: age,
        Account_ID: id,
        Account_Pin_Code: pin,
        Country_Name: countryName,
        Language: lang,
        Pet: anim,
        Fav_Colour: col,
        Fav_Star: star,
        Phone_No: ph_no
    };
    console.log('Your account is unlocked please check your information');
    console.log(user_data);
    console.log('<<<<<<<<<<<<All ATM functionalities are unlocked>>>>>>>>>>>>>');
    console.log('********You can now retrieve your amount---*******');
});
