DROP TABLE IF EXISTS public.transaccion;
DROP TABLE IF EXISTS public.ubicacion_prestador;
DROP TABLE IF EXISTS public.producto;
DROP TABLE IF EXISTS public.usuario_tiun;
DROP TABLE IF EXISTS public.prestador;
DROP TABLE IF EXISTS public.usuario;

DROP TABLE IF EXISTS public.tipo_producto;
DROP TABLE IF EXISTS public.estado_transaccion;
DROP TABLE IF EXISTS public.tipo_transaccion;documento
DROP TABLE IF EXISTS public.sector_prestador;
DROP TABLE IF EXISTS public.tipo_prestador;
DROP TABLE IF EXISTS public.tipo_documento;
DROP TABLE IF EXISTS public.rol;


-- CREACION DE TABLAS
CREATE TABLE IF NOT EXISTS public.rol (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.tipo_documento (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.tipo_prestador (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.sector_prestador (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.tipo_transaccion (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.estado_transaccion (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.tipo_producto (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.usuario (
    id              SERIAL PRIMARY KEY,
    email           VARCHAR(50) NOT NULL,
    habilitado      BOOLEAN NOT NULL,
    password        VARCHAR(60) NOT NULL,
    rol_id          INTEGER REFERENCES rol(id)
);

CREATE TABLE IF NOT EXISTS public.usuario_tiun (
    usuario_id      INTEGER REFERENCES usuario(id) UNIQUE NOT NULL,
    nombres         VARCHAR(50) NOT NULL,
    apellidos       VARCHAR(50) NOT NULL,
    tipo_doc_id     INTEGER REFERENCES tipo_documento(id),
    documento       VARCHAR(15) PRIMARY KEY,
    tiun            VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.prestador (
    pres_id      INTEGER REFERENCES usuario(id) UNIQUE NOT NULL,
    razon_social    VARCHAR(50) NOT NULL,
    nit             VARCHAR(50) NOT NULL,
    rut             VARCHAR(50) NOT NULL,
    intentos_cambio INTEGER NOT NULL,
    pts_entregados  INTEGER NOT NULL,
    pts_redimidos   INTEGER NOT NULL,
    tipo_id         INTEGER REFERENCES tipo_prestador(id),
    sector_id       INTEGER REFERENCES sector_prestador(id)
);

CREATE TABLE IF NOT EXISTS public.transaccion (
    id              SERIAL PRIMARY KEY,
    utiun_id        INTEGER REFERENCES usuario_tiun(usuario_id),
    pres_id         INTEGER REFERENCES prestador(pres_id),
    valor_pesos     REAL NOT NULL,
    valor_pts       INTEGER NOT NULL,
    fecha           TIMESTAMP NOT NULL,
    estado_id       INTEGER REFERENCES estado_transaccion(id),
    tipo_id         INTEGER REFERENCES tipo_transaccion(id)
);

CREATE TABLE IF NOT EXISTS public.ubicacion_prestador (
    id              SERIAL PRIMARY KEY,
    pres_id         INTEGER REFERENCES prestador(pres_id),
    pres_lat        REAL NOT NULL,
    pres_lng        REAL NOT NULL,
    detalles        VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS public.producto (
    id              SERIAL PRIMARY KEY,
    pres_id         INTEGER REFERENCES prestador(pres_id),
    valor_pts       INTEGER NOT NULL,
    valor_real      REAL NOT NULL,
    nombre          VARCHAR(30) NOT NULL,
    foto            TEXT
);


-- INSERTS EN TABLAS

INSERT INTO public.rol(nombre) VALUES ('Usuario TIUN');
INSERT INTO public.rol(nombre) VALUES ('Prestador servicios');

INSERT INTO public.tipo_documento(nombre) VALUES ('Cedula de Ciudadania');
INSERT INTO public.tipo_documento(nombre) VALUES ('Tarjeta de Identidad');

INSERT INTO public.estado_transaccion(nombre) VALUES ('Aprobada');
INSERT INTO public.estado_transaccion(nombre) VALUES ('Rechazada');

INSERT INTO public.tipo_transaccion(nombre) VALUES ('Asignacion');
INSERT INTO public.tipo_transaccion(nombre) VALUES ('Redimir');

INSERT INTO public.tipo_prestador(nombre) VALUES ('Publica');
INSERT INTO public.tipo_prestador(nombre) VALUES ('Privada');

INSERT INTO public.sector_prestador(nombre) VALUES ('Alimentos');
