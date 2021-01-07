import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso('Venta de un dept',300),
        new Egreso('Ropa',440)
    ];

    eliminar(egreso:Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}