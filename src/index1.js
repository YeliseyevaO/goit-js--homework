

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin  extends User {
  static AccessLevel = {
    BASIC:'basic',
    SUPERUSER:'superuser',}
};
/*------18-----*/

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
accessLevel;
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  constructor({ email,accessLevel}){
      super(email);
    this.accessLevel = accessLevel;
    }
    

    
class User {
  email;
  constructor(email) {
    this.email = email;
  }
  get email() {
    return this.email;
  }
  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  accessLevel;
  blacklistedEmails=[];
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;

  }
blacklist(email) {
this.blacklistedEmails.push(email);
}
isBlacklisted(email) {
if (this.blacklistedEmails.includes(email)) {
return true;
}
return false;
}
  // Пиши код выше этой строки
}



const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
