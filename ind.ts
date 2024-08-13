interface Staff{
    // read only 
    readonly staffId: number;
    readonly startDate: Date;

    name: string,
    department: string
}

const staff: Staff = {
    staffId: 343234,
    startDate: new Date(),
    name: "Leonard",
    department: "Cyber Security"
}

staff.name = "Jessica";
// staff.staffId = 3242343423;

console.log(staff);
