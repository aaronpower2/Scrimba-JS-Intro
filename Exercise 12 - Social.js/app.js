let user = {
    firstName: 'Aaron',
    lastName: 'Power',
    preferredName: 'Aaron',
    age: 37,
    profile: function() {
        return `First name:\t\t${this.firstName}\nLast name:\t\t${this.lastName}\nPreferred name:\t${this.preferredName}\nAge:\t\t\t${this.age}\nJoin date:\t\t${this.joinDate}\n---------\nInterests\n---------\nTech: ${this.interests.technology}\nLifestyle: ${this.interests.lifestyle}\nEnvironmental: ${this.interests.Environmental}`;
    },
    interests: {
        technology: ['Coding', 'SaaS', 'Social platforms'],
        lifestyle: ['food', 'exercise', 'social distancing'],
        Environmental: ['renewable energy', 'sustainable farming']
    },
    friends: [
        {
            firstName: 'Jun',
            lastName: 'Esperitu',
            preferredName: 'Jun',
            interests: {
                technology: ['blockchain', 'big data', 'Social platforms'],
                lifestyle: ['HIIT', 'travel', 'parenthood'],
                Environmental: ['rare earth mining', 'hydroponics']
            }
        },
        {
            firstName: 'Kyle',
            lastName: 'Hussain',
            preferredName: 'Kyle',
            interests: {
                technology: ['blockchain', 'big data', 'Social platforms'],
                lifestyle: ['HIIT', 'travel', 'parenthood'],
                Environmental: ['rare earth mining', 'hydroponics']
            }
        }
    ],
    friendsList: function() {

        return `---------\nFriends\n---------\nFirst name: ${this.friends[0].firstName}\nLast name: ${this.friends[0].lastName}\nJoin date: ${this.friends[0].joinDate}\n---------\nInterests\n---------\n\tTech: ${this.friends[0].interests.technology}\n\tLifestyle: ${this.friends[0].interests.lifestyle}\n\tEnvironment: ${this.friends[0].interests.Environmental}`

        }
}
// user.joinDate = '26/08/2020';
// user.friends[0].interests.education = ['self study', 'PhD'];
// user.friends[0].joinDate = '01/01/2019';
// console.log(user.profile());
// console.log(user.friendsList());
// user.friends[0].interests.Environmental.push('Global warming');
// console.log(user.friendsList());
// user.interests.technology.push('photovoltaic arrays');
// console.log(user.profile());

// console.log(user.interests.technology.length);
// console.log(user.friendsList());
function printUser(user) {
    return console.log(user.profile() +'\n' + user.friendsList())
}
printUser(user);

let domtest = document.getElementById('div1');
console.log(domtest);
console.dir(domtest);