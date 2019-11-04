import { Injectable } from '@nestjs/common';
import { UsuarioTIUNDto } from '../../modules/usuarios/dto/usuarioTIUN.dto';
import { UsuarioTIUNRepository } from '../../repositories/usuariotiun.repository';
import { getCustomRepository } from 'typeorm';

@Injectable()
export class UsuarioService {
  findAll(): string {
    return 'Retorno todos los usuarios desde servicio';
  }

  findById(id: number): string {
    return `Retorno el usuario con id ${id} desde servicio`;
  }

  createUsuarioTIUN(usuarioTIUN: UsuarioTIUNDto): Promise<string> {
    const usuarioRepository = getCustomRepository(UsuarioTIUNRepository);
    return usuarioRepository.crearUsuarioTIUN(usuarioTIUN);
  }
}
