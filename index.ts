import inquirer from "inquirer";
import chalk from 'chalk';


class Player{
    name:string
    fuel:number = 100
    constructor(name:string){
        this.name = name;
    }
    fueldecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelincrease(){
        this.fuel = 100
    }


}
class Oponent{
    name:string
    fuel:number = 100
    constructor(name:string){
        this.name = name; 
    }
    fueldecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt({
    type:"input",
    name:"name",
    message:"Please Enter your name:"
});


let oponent = await inquirer.prompt({
    type:"list",
    name:"Select",
    message:"Select your oponent",
    choices:["Skeleton", "Assassin" , "Zombie"]
});


let p1 = new Player(player.name)
let o1 = new Oponent(oponent.Select)

do{
    if (oponent.Select == "Skeleton"){
               let ask = await inquirer.prompt({
            type:"list",
            name:"opt",
            message:"Select your oponent",
            choices:["Attack", "Drink portion" , "Run for Your life...."]
        });
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
           if(num > 0){
            p1.fueldecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
           }
           if(p1.fuel <= 0){
            console.log(chalk.red.bold.italic('You losse , Better luck next time'))
            process.exit()

           }
           if(num <= 0){
            p1.fueldecrease()
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
           }
           if(o1.fuel <= 0){
            console.log(chalk.green.bold.italic('You win'))
            process.exit()

           }
        }
        if(ask.opt == "Drink portion"){
           p1.fuelincrease()
           console.log(chalk.bold.italic.green(`your drink Health portion your fuel is ${p1.fuel}`))
        }
        if(ask.opt == "Run for Your life...."){
            console.log(chalk.red.bold.italic('You losse , Better luck next time'))
            process.exit()
        }
    
    }
// Assassin//
    if (oponent.Select == "Assassin"){
        let ask = await inquirer.prompt({
     type:"list",
     name:"opt",
     message:"Select your oponent",
     choices:["Attack", "Drink portion" , "Run for Your life...."]
 });
 if(ask.opt == "Attack"){
     let num = Math.floor(Math.random() * 2)
    if(num > 0){
     p1.fueldecrease()
     console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
     console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
    }
    if(p1.fuel <= 0){
     console.log(chalk.red.bold.italic('You losse , Better luck next time'))
     process.exit()

    }
    if(num <= 0){
     p1.fueldecrease()
     console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
     console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
    }
    if(o1.fuel <= 0){
     console.log(chalk.green.bold.italic('You win'))
     process.exit()

    }
 }
 if(ask.opt == "Drink portion"){
    p1.fuelincrease()
    console.log(chalk.bold.italic.green(`your drink Health portion your fuel is ${p1.fuel}`))
 }
 if(ask.opt == "Run for Your life...."){
     console.log(chalk.red.bold.italic('You losse , Better luck next time'))
     process.exit()
 }

}
// Zombie //
if (oponent.Select == "Zombie"){
    let ask = await inquirer.prompt({
 type:"list",
 name:"opt",
 message:"Select your oponent",
 choices:["Attack", "Drink portion" , "Run for Your life...."]
});
if(ask.opt == "Attack"){
 let num = Math.floor(Math.random() * 2)
if(num > 0){
 p1.fueldecrease()
 console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
 console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
}
if(p1.fuel <= 0){
 console.log(chalk.red.bold.italic('You losse , Better luck next time'))
 process.exit()

}
if(num <= 0){
 p1.fueldecrease()
 console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
 console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
}
if(o1.fuel <= 0){
 console.log(chalk.green.bold.italic('You win'))
 process.exit()

}
}
if(ask.opt == "Drink portion"){
p1.fuelincrease()
console.log(chalk.bold.italic.green(`your drink Health portion your fuel is ${p1.fuel}`))
}
if(ask.opt == "Run for Your life...."){
 console.log(chalk.red.bold.italic('You losse , Better luck next time'))
 process.exit()
}

}





}
while(true)


