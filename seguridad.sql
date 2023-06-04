-- --------------------------------------------------------
-- Host:                         dtrastoy.informaticapinguela.net
-- Versión del servidor:         10.3.35-MariaDB - MariaDB Server
-- SO del servidor:              Linux
-- HeidiSQL Versión:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla proyectoFinalDaw2223.anfitrion: ~0 rows (aproximadamente)

-- Volcando datos para la tabla proyectoFinalDaw2223.aviso: ~1 rows (aproximadamente)
INSERT INTO `aviso` (`id`, `imagen`, `texto`, `activo`, `vecinoId`, `comunidadId`) VALUES
	('1', 'no_image.jpg', 'Escaleras resvaladizas', 1, '1', '1');

-- Volcando datos para la tabla proyectoFinalDaw2223.comunidad: ~1 rows (aproximadamente)
INSERT INTO `comunidad` (`id`, `direccion`, `saldo`, `activo`) VALUES
	('1', 'C/Rouco varela nº18', 200000, 1);

-- Volcando datos para la tabla proyectoFinalDaw2223.comunidad_vecinos_vecino: ~2 rows (aproximadamente)
INSERT INTO `comunidad_vecinos_vecino` (`comunidadId`, `vecinoId`) VALUES
	('1', '1'),
	('1', '2');

-- Volcando datos para la tabla proyectoFinalDaw2223.evento: ~0 rows (aproximadamente)

-- Volcando datos para la tabla proyectoFinalDaw2223.gasto: ~1 rows (aproximadamente)
INSERT INTO `gasto` (`id`, `descripcion`, `cantidad`, `fecha`, `activo`, `comunidadId`) VALUES
	('1', 'Mantenimiento', 100, '04/06/2023', 1, '1');

-- Volcando datos para la tabla proyectoFinalDaw2223.grupo: ~0 rows (aproximadamente)

-- Volcando datos para la tabla proyectoFinalDaw2223.ingreso: ~1 rows (aproximadamente)
INSERT INTO `ingreso` (`id`, `descripcion`, `cantidad`, `fecha`, `activo`, `comunidadId`) VALUES
	('1', 'Pago comunidad', 100, '04/06/2023', 1, '1');

-- Volcando datos para la tabla proyectoFinalDaw2223.invitado: ~0 rows (aproximadamente)

-- Volcando datos para la tabla proyectoFinalDaw2223.opcion: ~0 rows (aproximadamente)

-- Volcando datos para la tabla proyectoFinalDaw2223.opcion_invitados_invitado: ~0 rows (aproximadamente)

-- Volcando datos para la tabla proyectoFinalDaw2223.presidente: ~1 rows (aproximadamente)
INSERT INTO `presidente` (`id`, `fechaInicio`, `fechaFin`, `activo`, `userId`) VALUES
	('1', '04/06/2023', '04/06/2024', 1, '1');

-- Volcando datos para la tabla proyectoFinalDaw2223.presidente_comunidades_comunidad: ~1 rows (aproximadamente)
INSERT INTO `presidente_comunidades_comunidad` (`presidenteId`, `comunidadId`) VALUES
	('1', '1');

-- Volcando datos para la tabla proyectoFinalDaw2223.reunion: ~1 rows (aproximadamente)
INSERT INTO `reunion` (`id`, `fecha`, `activo`, `comunidadId`) VALUES
	('1', '04/06/2023', 1, '1');

-- Volcando datos para la tabla proyectoFinalDaw2223.secretario: ~1 rows (aproximadamente)
INSERT INTO `secretario` (`id`, `fechaInicio`, `fechaFin`, `activo`, `userId`) VALUES
	('1', '04/06/2023', '04/06/2024', 1, '2');

-- Volcando datos para la tabla proyectoFinalDaw2223.secretario_comunidades_comunidad: ~1 rows (aproximadamente)
INSERT INTO `secretario_comunidades_comunidad` (`secretarioId`, `comunidadId`) VALUES
	('1', '1');

-- Volcando datos para la tabla proyectoFinalDaw2223.tema: ~0 rows (aproximadamente)

-- Volcando datos para la tabla proyectoFinalDaw2223.user: ~2 rows (aproximadamente)
INSERT INTO `user` (`id`, `nombre`, `email`, `fecha_nacimiento`, `num_telefono`, `imagen`, `activo`, `password`) VALUES
	('1', 'Diego', 'sondiegolt@gmail.com', '04/06/2023', 658679811, 'no_image.jpg', 1, 'abc123.'),
	('2', 'Maria del Carmen', 'meritras@gmail.com', '04/06/2023', 617725261, 'no_image.jpg', 1, 'abc123.');

-- Volcando datos para la tabla proyectoFinalDaw2223.vecino: ~2 rows (aproximadamente)
INSERT INTO `vecino` (`id`, `vivienda`, `activo`, `userId`) VALUES
	('1', '1ºizq', 1, '1'),
	('2', '1ºizq', 1, '2');

-- Volcando datos para la tabla proyectoFinalDaw2223.vecino_comunidad_comunidad: ~2 rows (aproximadamente)
INSERT INTO `vecino_comunidad_comunidad` (`vecinoId`, `comunidadId`) VALUES
	('1', '1'),
	('2', '1');

-- Volcando datos para la tabla proyectoFinalDaw2223.votacion_grupos: ~0 rows (aproximadamente)

-- Volcando datos para la tabla proyectoFinalDaw2223.votacion_vecinos: ~0 rows (aproximadamente)

-- Volcando datos para la tabla proyectoFinalDaw2223.votacion_vecinos_vecinos_vecino: ~0 rows (aproximadamente)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
