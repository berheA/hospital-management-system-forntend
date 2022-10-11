
export class MedicalCenter {
    
     
    constructor( 
         public medicalCenterId: number,
         public medicalCenterName:string,
         public phone: number,
         public  email: string,
         public medicalCenterCity: string,
         public medicalCenterState: string,
         public medicalCenterStreetAddress: string,
         public medicalCenterZip: number,
         public specialService: any
        )
        {}

}