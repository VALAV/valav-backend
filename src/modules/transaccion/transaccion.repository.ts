import {EntityRepository, Repository} from "typeorm";
import {Transaccion} from "./entities/transaccion.entity";
import { TipoTransaccion } from '../tipo-transaccion/entities/tipo-transaccion.entity';
import {getNow} from '../../assets/js/date.utils';

@EntityRepository(Transaccion)
export class TransaccionRepository extends Repository<Transaccion> {
    async saveOrUpdate(transaction: Transaccion) {
        return await this.save(transaction);
    }

    async findByTipoAndFecha(tipoTransaccion: TipoTransaccion, fechaComparacion: Date) {
        const hoy = getNow();
        console.log('hoy:', hoy, 'fecha:', fechaComparacion);
        return this.createQueryBuilder('trans')
          .where('trans.fecha <= :today AND trans.fecha >= :fecha AND trans.tipo_id = :tipo' ,
            {today: hoy, fecha: fechaComparacion, tipo: tipoTransaccion.id})
          .getMany();
    }
}
