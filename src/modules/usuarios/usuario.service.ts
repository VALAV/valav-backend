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

@Injectable()
export class UsuarioService {
  constructor(private readonly rolService: RolService) {}

  async findAllUsuarios(): Promise<Usuario[]> {
    const usuarioRepository = getCustomRepository(UsuarioRepository);
    return await usuarioRepository.findAll();
  }

  async findAllUsuariosTIUN(): Promise<UsuarioTIUN[]> {
    const usuarioTIUNRepository = getCustomRepository(UsuarioTIUNRepository);
    return await usuarioTIUNRepository.findAll();
  }

  async findAllPrestadores(): Promise<Prestador[]> {
    const prestadorRepository = getCustomRepository(PrestadorRepository);
    return await prestadorRepository.findAll();
  }

  async createUsuarioTIUN(usuarioTIUN: UsuarioTIUNDto): Promise<UsuarioTIUN> {
    const usuarioTIUNRepository = getCustomRepository(UsuarioTIUNRepository);
    return usuarioTIUNRepository.crearUsuarioTIUN(usuarioTIUN, this.syncGetRolById(usuarioTIUN.rolId));
  }

  async createPrestador(prestador: PrestadorDto): Promise<Prestador> {
    const prestadorRepository = getCustomRepository(PrestadorRepository);
    return prestadorRepository.crearPrestador(prestador, this.syncGetRolById(prestador.rolId));
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
}
