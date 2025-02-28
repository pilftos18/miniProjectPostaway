export default class  UserModel{
    constructor(name, email, password,id){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }

    static singUp(name, email, password){
        const user = new UserModel(name,email,password);
        user.id = User.length +1;
        User.push(user);
        return user;
    }

    static getall(){
        return User;
    }

    static login(email, password){
        const user = User.find(u => u.email == email);
        return user
    }

    static getUserById(id){
        const user = User.find(u=>u.id == id);
        return user;
    }

} 

let  User = [
{
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123"
},
{
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "secret123"
}

]