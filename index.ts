export{}
const inquirer = require('inquirer');
import { uniqueNamesGenerator, Config, names, countries, languages, animals, colors, starWars } from 'unique-names-generator';
let config0: Config = {
    dictionaries: [names]
  }
let characterName: string = uniqueNamesGenerator(config0);
let config1: Config = {
    dictionaries: [countries]
}
let countryName: string = uniqueNamesGenerator(config1);
let config2: Config = {
    dictionaries: [languages]
}
let lang: string = uniqueNamesGenerator(config2);
let config3: Config = {
    dictionaries: [animals]
}
let anim: string = uniqueNamesGenerator(config3);
let config4: Config = {
    dictionaries: [colors]
}
let col: string = uniqueNamesGenerator(config4);
let config5: Config = {
    dictionaries: [starWars]
}
let star: string = uniqueNamesGenerator(config5);
let age = Math.floor(Math.random() * 63);
let ph_no = `+111${Math.floor(Math.random() * 6365354163)}`;
inquirer
  .prompt([
    {
        type:"input",
        name:"user_id",
        message:"Enter your user id?"
    },
    {
        type:"input",
        name:"user_pin",
        message:"Enter your pin code?"
    }
  ])
  .then((answers) => {
    let pin = answers.user_pin;
    let id = answers.user_id;
    let user_data = 
    {
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
    }
    console.log('Your account is unlocked please check your information');
    console.log(user_data); 
    console.log('<<<<<<<<<<<<All ATM functionalities are unlocked>>>>>>>>>>>>>');  
    console.log('********You can now retrieve your amount---*******');  
});

