import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Transaccion} from "../../transaccion/entities/transaccion.entity";

@Entity({name: 'estado_transaccion'})
export class EstadoTransaccion {
    @PrimaryColumn({name: 'id'})
    id: number;

    @Column({name: 'nombre'})
    nombre: string;

    @OneToMany(type => Transaccion, transaccion => transaccion.estado)
    transacciones: Transaccion[];
}