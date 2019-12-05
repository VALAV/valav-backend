import { Injectable } from '@nestjs/common';
import { UsuarioTIUNDto } from './dto/usuarioTIUN.dto';
import { UsuarioTIUNRepository } from './repositories/usuariotiun.repository';
import { getCustomRepository } from 'typeorm';
import { UsuarioTIUN } from "./entities/usuariotiun.entity";

@Injectable()
export class UsuarioService {
  private usuarioTIUNRepository = getCustomRepository(UsuarioTIUNRepository);

  findAllUsuarioTIUN(): void {
    this.usuarioTIUNRepository.findAll();
  }

  findById(id: number): string {
    return `Retorno el usuario con id ${id} desde servicio`;
  }

  createUsuarioTIUN(usuarioTIUN: UsuarioTIUNDto): Promise<UsuarioTIUN> {
    return this.usuarioTIUNRepository.crearUsuarioTIUN(usuarioTIUN);
  }
}
