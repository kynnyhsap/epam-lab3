class Gadalka {
    constructor() {
        this.lock = false;
    }

    start() {
        const name = this.fillName();
        if (this.lock) {
            this.done();
            return;
        }

        const age = this.fillAge();
        if (this.lock) {
            this.done();
            return;
        }

        this.prediction(name, age);
    }

    done() {
        if (!this.lock) return;

        alert('Сеанс звершено, гроші не повернемо =)');

        this.lock = false;
    }

    fillName() {
        const name = prompt("Введіть ім'я: ");

        if (!name) {
            const end = confirm("Вам потрібно розповісти про себе! Завершити сеанс?");
            if (end) {
                this.lock = true;
                return;
            }
            this.fillName()
        }

        return name;
    }

    fillAge() {
        const age = prompt("Скільки рочків? ");

        if (!age) {
            const end = confirm("Це необхідно, Процедура 18+. Завершити сеанс?");
            if (end) {
                this.lock = true;
                return;
            }
            this.fillAge()
        }

        if (parseInt(age) < 1 || parseInt(age) > 100) {
            alert('Якусь хрінь ввів) Спробуй ще раз, або заверши сеанс');
            const end = confirm("Завершити сеанс?");
            if (end) {
                this.lock = true;
                return;
            }
            this.fillAge()
        }

        if (parseInt(age) < 18) {
            alert('Сорі, ти ще малявка =)');
            this.lock = true;
            return;
        }

        return parseInt(age);
    }

    prediction(name, age) {
        const yearsLeft = Math.round(Math.random() * age);
        const kids = Math.floor(Math.random() * 4);

        alert(`У вас буде ${kids} дітей🤱🏿.
         Жити залишилось  всього ${yearsLeft} роки 🤷.‍`)
    }
}

const gadalka = new Gadalka();

