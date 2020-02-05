import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Transaccion} from "../../transaccion/entities/transaccion.entity";

@Entity({name: 'tipo_transaccion'})
export class TipoTransaccion {
    @PrimaryColumn({name: 'id'})
    id: number;

    @Column({name: 'nombre'})
    nombre: string;

    @OneToMany(type => Transaccion, transaccion => transaccion.tipo)
    transacciones: Transaccion[];
}