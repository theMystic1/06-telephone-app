class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.update(phoneNumber));
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      console.log(`Dialing ${phoneNumber}`);
      this.notifyObservers(phoneNumber);
    } else {
      console.log("Phone number not found.");
    }
  }
}

class PhoneNumberObserver {
  update(phoneNumber) {
    console.log(`Dialed: ${phoneNumber}`);
  }
}

class SpecialObserver {
  update(phoneNumber) {
    console.log(`Now Dialing ${phoneNumber}`);
  }
}

// Example usage:
const telephone = new Telephone();

// Adding observers
const observer1 = new PhoneNumberObserver();
const observer2 = new SpecialObserver();
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Adding phone numbers
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("1234567890");

telephone.addPhoneNumber("2345678901");

// Dialing a phone number
telephone.dialPhoneNumber("1234567890");
telephone.dialPhoneNumber("2347023232"); // This number is not added, so it won't dial

// Removing a phone number
telephone.removePhoneNumber("1234567890");

// Dialing a removed phone number
telephone.dialPhoneNumber("1234567890"); // This number has been removed, so it won't dial
