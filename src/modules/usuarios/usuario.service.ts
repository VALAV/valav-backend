import { Injectable } from '@nestjs/common';
import { UsuarioTIUNDto } from './dto/usuarioTIUN.dto';
import { UsuarioTIUNRepository } from './repositories/usuariotiun.repository';
import { getCustomRepository } from 'typeorm';
import { UsuarioTIUN } from "./entities/usuariotiun.entity";
import {Usuario} from "./entities/usuario.entity";
import {UsuarioRepository} from "./repositories/usuario.repository";
import {Prestador} from "./entities/prestador.entity";
import {PrestadorRepository} from "./repositories/prestador.repository";

@Injectable()
export class UsuarioService {
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
    return usuarioTIUNRepository.crearUsuarioTIUN(usuarioTIUN);
  }

  async findUsuarioByEmail(email)

  findById(id: number): string {
    return `Retorno el usuario con id ${id} desde servicio`;
  }
}
