import { Appointment } from "./appointment";

export class Patient {
    constructor( 
         public patientId:number,
         public userId:number,
         public age:number,
         public patientFirstName:string,
      public patientLastName:string,    
      public email:string,
      public appointment:any
        )
        {}

}


// export class Patient {
//     constructor( 
//          public patientId:number,
//          public age:number,
//          public patientFirstName:string,
//          public patientLastName:string,
//          public email:string,
//          public appointment:any,
//          public medicalCenter: any
        
//         )
//         {}

// }