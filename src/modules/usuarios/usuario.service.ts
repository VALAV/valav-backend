import { Injectable } from '@nestjs/common';
import { UsuarioTIUNDto } from './dto/usuarioTIUN.dto';
import { UsuarioTIUNRepository } from './repositories/usuariotiun.repository';
import { getCustomRepository } from 'typeorm';
import { UsuarioTIUN } from "./entities/usuariotiun.entity";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioRepository } from "./repositories/usuario.repository";
import { Prestador } from "./entities/prestador.entity";
import { PrestadorRepository } from "./repositories/prestador.repository";
import { RolService } from "../rol/rol.service";
import { PrestadorDto } from './dto/prestador.dto';
import { EquivalenciasDto } from './dto/equivalencias.dto';
import * as dotenv from 'dotenv';

dotenv.config();

const INTENTOS_CAMBIO = +process.env.INTENTOS_CAMBIO_PRESTADOR;

@Injectable()
export class UsuarioService {
  constructor(private readonly rolService: RolService) {}

  async findAllUsuarios(): Promise<Usuario[]> {
    const usuarioRepository = getCustomRepository(UsuarioRepository);
    return await usuarioRepository.findAll();
  }

  async findUsuarioByEmail(email): Promise<Usuario[]>{
    const usuarioRepository = getCustomRepository(UsuarioRepository);
    return await usuarioRepository.findByEmail(email);
  }

  syncGetRolById(rolId) {
    return this.rolService.syncGetRolById(rolId);
  }

  findById(id: number): string {
    return `Retorno el usuario con id ${id} desde servicio`;
  }

  /**
   * Usuarios TIUN
   */
  async findAllUsuariosTIUN(): Promise<UsuarioTIUN[]> {
    const usuarioTIUNRepository = getCustomRepository(UsuarioTIUNRepository);
    return await usuarioTIUNRepository.findAll();
  }

  async createUsuarioTIUN(usuarioTIUN: UsuarioTIUNDto): Promise<UsuarioTIUN> {
    const usuarioTIUNRepository = getCustomRepository(UsuarioTIUNRepository);
    return usuarioTIUNRepository.crearUsuarioTIUN(usuarioTIUN, this.syncGetRolById(usuarioTIUN.rolId));
  }

  async getUsuarioTIUNById(id: number): Promise<UsuarioTIUN> {
    const usuarioTIUNRepository = getCustomRepository(UsuarioTIUNRepository);
    return usuarioTIUNRepository.getUsuarioById(id);
  }
  /**
   * Prestadores
   */
  async findAllPrestadores(): Promise<Prestador[]> {
    const prestadorRepository = getCustomRepository(PrestadorRepository);
    return await prestadorRepository.findAll();
  }

  async getPrestadorById(id: number): Promise<Prestador> {
    const prestadorRepository = getCustomRepository(PrestadorRepository);
    return await prestadorRepository.getById(id);
  }

  async createPrestador(prestador: PrestadorDto): Promise<Prestador> {
    const prestadorRepository = getCustomRepository(PrestadorRepository);
    return prestadorRepository.crearPrestador(prestador, this.syncGetRolById(prestador.rolId));
  }

  async getEquivalenciasByPrestador(presId: number) {
    const prestadorRepository = getCustomRepository(PrestadorRepository);
    let prestador = await prestadorRepository.getById(presId);
    if (prestador !== null && prestador !== undefined) {
      return {presId: prestador.usuario, valorPorPunto: prestador.valorPunto};
    }
  }

  async setNuevasEquivalencias(idPres: number, equivalencias: EquivalenciasDto) {
    const prestadorRepository = getCustomRepository(PrestadorRepository);
    const prestador = await prestadorRepository.getById(idPres);
    if (prestador !== undefined && prestador !== null) {
      if ( prestador.intentosCambio <= INTENTOS_CAMBIO && prestador.intentosCambio > 0) {
        let nuevosIntentos = prestador.intentosCambio - 1;
        prestador.intentosCambio = nuevosIntentos;
        prestador.valorPunto = equivalencias.valorPorPunto;
        return await prestadorRepository.updatePrestador(prestador);
      }
    }
  }
}
