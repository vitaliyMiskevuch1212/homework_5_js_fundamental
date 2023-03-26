(function (){
    class Worker {
        constructor(fullName, dayRate, workingDays) {
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays;
            this._experience = 1.2;
        }

        showSalary() {
            const salary = this.dayRate * this.workingDays;
            console.log(`${this.fullName} salary: ${salary}`);
            return salary;
        }

        showSalaryWithExperience() {
            const salary = this.dayRate * this.workingDays * this._experience;
            console.log(`${this.fullName} salary: ${salary}`);
            return salary;
        }

        get showExp() {
            return this._experience;
        }

        set setExp(value) {
            this._experience = value;
        }

        static sortBySalary(workers) {
            workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
            workers.forEach((worker) => console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`));
        }
    }

    const worker1 = new Worker("John Johnson", 20, 23);
    console.log(worker1.fullName);
    worker1.showSalary();
    console.log("New experience: " + worker1.showExp);
    worker1.showSalaryWithExperience();
    worker1.setExp = 1.5;
    console.log("New experience: " + worker1.showExp);
    worker1.showSalaryWithExperience();

    const worker2 = new Worker("Tom Tomson", 48, 22);
    console.log(worker1.fullName);
    worker2.showSalary();
    console.log("New experience: " + worker2.showExp);
    worker2.showSalaryWithExperience();
    worker2.setExp = 1.5;
    console.log("New experience: " + worker2.showExp);
    worker2.showSalaryWithExperience();
    const worker3 = new Worker("Andy Ander", 29, 23);
    console.log(worker3.fullName);
    worker3.showSalary();
    console.log("New experience: " + worker3.showExp);
    worker3.showSalaryWithExperience();
    worker3.setExp = 1.5;
    console.log("New experience: " + worker3.showExp);
    worker3.showSalaryWithExperience();
    const workers = [worker1, worker2, worker3];
    Worker.sortBySalary(workers);
})();