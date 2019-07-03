const franchises = [
  {
    nombre: 'Autoseguro',
    concepto: 'Blindaje Automotores Anti Asalto y Anti Bandálico',
    tamanoLocal: '600 m2',
    aniosOperacion: '',
    numeroLocales: '5',
    inversion: '260.000',
    tiempoRetornoInversion: '18 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Buller Brewing Company',
    concepto: 'Cervecería Artesanal',
    tamanoLocal: '160 m2',
    aniosOperacion: '',
    numeroLocales: '5',
    inversion: '130.000',
    tiempoRetornoInversion: '24 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Casalnovo Concept Couture',
    concepto:
      'Venta y alquiler de indumentaria masculina, y complementos, de alta moda, en especial, para fiestas.',
    tamanoLocal: '',
    aniosOperacion: '',
    numeroLocales: '4',
    inversion: '35.000',
    tiempoRetornoInversion: '12 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Casimiro',
    concepto: 'Restaurante-Café Bar-Plaza de Juegos',
    tamanoLocal: '350 m2',
    aniosOperacion: '18',
    numeroLocales: '',
    inversion: '120.000',
    tiempoRetornoInversion: '',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Coffee Town',
    concepto: 'Cafetería',
    tamanoLocal: '60 - 80 m2',
    aniosOperacion: '',
    numeroLocales: '',
    inversion: '57.000',
    tiempoRetornoInversion: '< 18 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Compañía de Juguetes',
    concepto: 'Juguetería',
    tamanoLocal: '70 m2',
    aniosOperacion: '',
    numeroLocales: '',
    inversion: '64.000',
    tiempoRetornoInversion: '',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Dulce de Leche & CO',
    concepto:
      'Comercialización Dulce de Leche y Derivados/Complemntarios (Classic)',
    tamanoLocal: '40 m2',
    aniosOperacion: '',
    numeroLocales: '',
    inversion: '23.500',
    tiempoRetornoInversion: '> 8 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Dvigi Agua Pura',
    concepto: 'Comercialización de Purificadores de Agua',
    tamanoLocal: '6 - 16 m2',
    aniosOperacion: '37',
    numeroLocales: '',
    inversion: '27.500',
    tiempoRetornoInversion: '< 6 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Giro Didáctico',
    concepto: 'Juguetería Didáctica',
    tamanoLocal: '60 m2',
    aniosOperacion: '',
    numeroLocales: '',
    inversion: '70.000',
    tiempoRetornoInversion: '',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Honecker',
    concepto: 'Chocolates, alfajores, bombones, delicatessen',
    tamanoLocal: '',
    aniosOperacion: '',
    numeroLocales: '',
    inversion: '7.500',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Ka Wirth',
    concepto: 'Servicios de estética, en especial uñas y pestañas',
    tamanoLocal: '50 m2',
    aniosOperacion: '',
    numeroLocales: '12',
    inversion: '27.000',
    tiempoRetornoInversion: '< 10 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Kine Estetic',
    concepto:
      'Venta de articulos, equipamientos e insumos para kinesiologia, estetica, fitness, wellness y gimnasios (Showroom)',
    tamanoLocal: '',
    aniosOperacion: '',
    numeroLocales: '',
    inversion: '22.500',
    tiempoRetornoInversion: '',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'La Brigada',
    concepto: 'Parrilla Típica Argentina',
    tamanoLocal: '300 m2',
    aniosOperacion: '37',
    numeroLocales: '',
    inversion: '560.000',
    tiempoRetornoInversion: '24 - 30 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'La Payada',
    concepto: 'Venta de empanadas, pizzas y productos regionales tucumanos',
    tamanoLocal: '80 m2',
    aniosOperacion: '',
    numeroLocales: '',
    inversion: '65.000',
    tiempoRetornoInversion: '12 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Mascotas del Oeste',
    concepto: 'Productos y Servicios para mascotas',
    tamanoLocal: '',
    aniosOperacion: '',
    numeroLocales: '',
    inversion: '53.000',
    tiempoRetornoInversion: '< 12 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Pastas Ramos',
    concepto: 'Pastas Artesanales',
    tamanoLocal: '',
    aniosOperacion: '79',
    numeroLocales: '',
    inversion: '60.000',
    tiempoRetornoInversion: '12 - 18 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Piel Santa',
    concepto: 'Servicios de Depilación Láser',
    tamanoLocal: '',
    aniosOperacion: '',
    numeroLocales: '10',
    inversion: '40.000',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Saigon Noodle Bar',
    concepto: 'Resto-Bar de Gastronomía Vietnamita',
    tamanoLocal: '150 m2',
    aniosOperacion: '',
    numeroLocales: '2',
    inversion: '74.000',
    tiempoRetornoInversion: '< 16 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Seccoplac',
    concepto:
      'Fabricación y comercialización de Placas Antihumedad, Cielorrasos Incombustibles autoportantes y desmontables (Fábrica)',
    tamanoLocal: '',
    aniosOperacion: '8',
    numeroLocales: '',
    inversion: '425.800',
    tiempoRetornoInversion: '',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'The Barber Job',
    concepto: 'Barbería y Peluquería',
    tamanoLocal: '',
    aniosOperacion: '4',
    numeroLocales: '12',
    inversion: '50.000',
    tiempoRetornoInversion: '< 12 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'Vendo su Auto',
    concepto: 'Compraventa de rodados y servicios complementarios',
    tamanoLocal: '',
    aniosOperacion: '38',
    numeroLocales: '',
    inversion: '19.000',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Argentina',
  },
  {
    nombre: 'WikiUp',
    concepto: 'Enseñanza de Idiomas para todas las edades',
    tamanoLocal: '60 - 100 m2',
    aniosOperacion: '',
    numeroLocales: 'Más de 80',
    inversion: '20.000',
    tiempoRetornoInversion: '2 a 3 años',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Colombia',
  },
  {
    nombre: 'Heidy Heladería',
    concepto: 'Comercialización de helados, postres y bebidas (Express)',
    tamanoLocal: '50 - 80 m2',
    aniosOperacion: '30',
    numeroLocales: '1',
    inversion: '30.000',
    tiempoRetornoInversion: '20 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Ecuador',
  },
  {
    nombre: 'Mongos',
    concepto: 'Resto - Bar - Karaoke',
    tamanoLocal: '200 - 250 m2',
    aniosOperacion: '17',
    numeroLocales: '11',
    inversion: '90.000',
    tiempoRetornoInversion: '2 años',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Ecuador',
  },
  {
    nombre: 'Cosa Nostra',
    concepto: 'Trattoría y Pezzería (Comida Italiana)',
    tamanoLocal: '250 m2',
    aniosOperacion: '8',
    numeroLocales: '3',
    inversion: '175.000',
    tiempoRetornoInversion: '34 meses',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Ecuador',
  },
  {
    nombre: 'Los Pollos de la Tri',
    concepto: 'Asadero Deportivo',
    tamanoLocal: '100 - 150 m2',
    aniosOperacion: '7',
    numeroLocales: '5',
    inversion: '45.000',
    tiempoRetornoInversion: '2 años',
    disponibilidadTerritorial: 'Todo el Ecuador',
    paisOrigen: 'Ecuador',
  },
]

module.exports = { franchises }