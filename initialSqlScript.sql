DROP TABLE IF EXISTS public.usuario_tiun;
DROP TABLE IF EXISTS public.usuario;
DROP TABLE IF EXISTS public.rol;


-- CREACION DE TABLAS
CREATE TABLE IF NOT EXISTS public.rol (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.usuario (
    id              SERIAL PRIMARY KEY,
    nombre_usuario  VARCHAR(30) NOT NULL,
    habilitado      BOOLEAN NOT NULL,
    password        VARCHAR(50) NOT NULL,
    rol_id          INTEGER REFERENCES rol(id)
);

CREATE TABLE IF NOT EXISTS public.usuario_tiun (
    u_tiun_id       SERIAL PRIMARY KEY,
    nombres         VARCHAR(50) NOT NULL,
    apellidos       VARCHAR(50) NOT NULL,
    documento       VARCHAR(15) NOT NULL,
    usuario_id      INTEGER REFERENCES usuario(id)
);
-- INSERTS EN TABLAS

INSERT INTO public.rol(nombre) VALUES ('Usuario TIUN');
INSERT INTO public.rol(nombre) VALUES ('Prestador servicios');
