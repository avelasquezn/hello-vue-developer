/**
 * Developer entity
 * @description
 * This class represents a developer entity.
 * @property {string} firstName - The first name of the developer.
 * @property {string} lastName - The last name of the developer.
 * @property {string} fullName - The full name of the developer.
 */
export class Developer {
    firstName;
    lastName;

    /**
     * Create a developer entity
     * @param firstName
     * @param lastName
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Get the full name of the developer
     * @returns {string} The full name of the developer
     */
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}