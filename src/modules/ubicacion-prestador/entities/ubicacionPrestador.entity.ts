import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Prestador} from "../../usuarios/entities/prestador.entity";

@Entity({name: 'ubicacion_prestador'})
export class UbicacionPrestador {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @ManyToOne(type => Prestador, prestador => prestador.ubicaciones)
    @JoinColumn({name: 'pres_id'})
    prestador: Prestador;

    @Column({name: 'pres_lat'})
    latitud: number;

    @Column({name: 'pres_lng'})
    longitud: number;

    @Column({name: 'detalles'})
    detalles: string;

    constructor(prestador: Prestador, latitud: number, longitud: number, detalles: string = null) {
        this.prestador = prestador;
        this.latitud = latitud;
        this.longitud = longitud;
        this.detalles = detalles;
    }
}