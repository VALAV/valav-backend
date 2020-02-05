import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioTIUN} from "../../usuarios/entities/usuariotiun.entity";
import {Prestador} from "../../usuarios/entities/prestador.entity";
import {EstadoTransaccion} from "../../estado-transaccion/entities/estado-transaccion.entity";
import {TipoTransaccion} from "../../tipo-transaccion/entities/tipo-transaccion.entity";

@Entity({name: 'transaccion'})
export class Transaccion {
    @PrimaryGeneratedColumn({name: 'id'}) private _id: number;

    @ManyToOne(type => UsuarioTIUN, usuario => usuario.transacciones)
    @JoinColumn({name: 'utiun_id'}) private _usuarioTIUN: UsuarioTIUN;

    @ManyToOne(type => Prestador, prestador => prestador.transacciones)
    @JoinColumn({name: 'pres_id'}) private _prestador: Prestador;

    @Column({name: 'valor_pesos'}) private _valorPesos: number;

    @Column({name: 'valor_pts'}) private _valorPts: number;

    @Column({name: 'fecha'}) private _fecha: Date;

    @OneToMany(type => EstadoTransaccion, estado => estado.transacciones)
    @JoinColumn({name: 'estado_id'}) private _estado: EstadoTransaccion;

    @OneToMany(type => TipoTransaccion, tipo => tipo.transacciones)
    @JoinColumn({name: 'tipo_id'}) private _tipo: TipoTransaccion;

    constructor(usuario: UsuarioTIUN, prestador: Prestador, valorPesos: number = 0, valorPts: number = 0, fecha: Date,
                estado: EstadoTransaccion = null, tipo: TipoTransaccion = null)
    {
        this._usuarioTIUN = usuario;
        this._prestador = prestador;
        this._valorPesos = valorPesos;
        this._valorPts = valorPts;
        this._fecha = fecha;
        this._estado = estado;
        this._tipo = tipo;
    }


    set id(value: number) {
        this._id = value;
    }

    set usuarioTIUN(value: UsuarioTIUN) {
        this._usuarioTIUN = value;
    }

    set prestador(value: Prestador) {
        this._prestador = value;
    }

    set valorPesos(value: number) {
        this._valorPesos = value;
    }

    set valorPts(value: number) {
        this._valorPts = value;
    }

    set fecha(value: Date) {
        this._fecha = value;
    }

    set estado(value: EstadoTransaccion) {
        this._estado = value;
    }

    set tipo(value: TipoTransaccion) {
        this._tipo = value;
    }
}