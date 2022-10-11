export class Appointment {
    constructor( 
         public appointmentId: number,
         public appointmentDate:string,
         public appointmentStatus: string,
        //  public patientId:number,
        //  public patientFirstName:string,
        //  public patientLastName:string,
        //  public email:string,
         public medicalCenter: any
        )
        {}

}