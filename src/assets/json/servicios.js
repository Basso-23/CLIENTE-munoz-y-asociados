const servicios = [
  {
    id: 1,
    title: "Auditorías",
    subtitle: "Mantén el Control de tu Cumplimiento Legal",
    image: "audits",
    contenido: [
      {
        tipo: "Auditoría de estados financieros",
        descripcion:
          "Revisión exhaustiva de los estados financieros de una empresa para garantizar su precisión, integridad y conformidad con los principios contables y regulaciones pertinentes.",
      },
      {
        tipo: "Certificación de estados financieros para bancos",
        descripcion:
          "Evaluación de los estados financieros de una empresa para verificar su exactitud y proporcionar una garantía a los bancos u otras instituciones financieras sobre la situación financiera de la empresa.",
      },
      {
        tipo: "Auditorías a sistemas de control interno",
        descripcion:
          "Análisis detallado de los procedimientos y controles internos de una organización para identificar posibles deficiencias, riesgos y áreas de mejora en la gestión de riesgos y la prevención de fraudes.",
      },
      {
        tipo: "Auditorías Internas",
        descripcion:
          "Evaluación independiente de las operaciones, procesos y controles internos de una empresa realizada por su propio equipo de auditoría para mejorar la eficiencia, la eficacia y el cumplimiento de las políticas y regulaciones internas y externas.",
      },
      {
        tipo: "Auditorías Especiales (Due diligences)",
        descripcion:
          "Investigación exhaustiva y detallada de una empresa o de una operación específica, generalmente realizada antes de una transacción comercial, para evaluar su viabilidad, riesgos, oportunidades y cumplimiento legal.",
      },
      {
        tipo: "Auditorías forenses y peritajes judiciales",
        descripcion:
          "Investigación de posibles fraudes, irregularidades o disputas legales dentro de una empresa, utilizando técnicas forenses y proporcionando testimonio experto en procesos judiciales.",
      },
      {
        tipo: "Procedimientos previamente acordados de auditoría",
        descripcion:
          "Proceso de auditoría personalizado diseñado según las necesidades y requisitos específicos del cliente para evaluar áreas o aspectos particulares de su negocio o operaciones.",
      },
      {
        tipo: "Revisión de estados financieros",
        descripcion:
          "Evaluación detallada de los estados financieros de una empresa para detectar errores, inconsistencias o áreas de mejora, con el objetivo de proporcionar recomendaciones para su corrección y mejora.",
      },
      {
        tipo: "Compilaciones de estados financieros e información financiera",
        descripcion:
          "Preparación y presentación de estados financieros y otra información financiera de una empresa en forma de informes contables, sin realizar una revisión o auditoría exhaustiva de los mismos.",
      },
    ],
  },
  {
    id: 2,
    title: "Impuestos",
    subtitle: "Servicios Fiscales y Tributarios",
    image: "impuestos",
    contenido: [
      {
        tipo: "Preparación y/o de declaraciones de impuesto sobre la renta personas naturales",
        descripcion:
          "Servicio de preparación y presentación de declaraciones de impuestos sobre la renta para individuos.",
      },
      {
        tipo: "Preparación y/o de declaraciones de impuesto sobre la renta personas jurídicas",
        descripcion:
          "Servicio de preparación y presentación de declaraciones de impuestos sobre la renta para empresas y entidades jurídicas.",
      },
      {
        tipo: "Planificación fiscal para personas naturales y jurídicas",
        descripcion:
          "Asesoramiento especializado en estrategias y estructuras fiscales para individuos y empresas, con el objetivo de optimizar la carga impositiva de manera legal y eficiente.",
      },
      {
        tipo: "Solicitud de No Aplicación del Calculo Alterno del Impuesto sobre la Renta (CAIR)",
        descripcion:
          "Asistencia en la solicitud de la no aplicación del cálculo alterno del impuesto sobre la renta, un beneficio fiscal otorgado en determinadas circunstancias por la autoridad tributaria.",
      },
      {
        tipo: "Preparación y presentación de Declaraciones de ITBMS",
        descripcion:
          "Servicio de preparación y presentación de declaraciones del Impuesto sobre la Transferencia de Bienes Muebles y Servicios (ITBMS), un impuesto al valor agregado en Panamá.",
      },
      {
        tipo: "Preparación y presentación de Declaración de Dividendos",
        descripcion:
          "Servicio de preparación y presentación de declaraciones de dividendos, que pueden estar sujetos a impuestos en algunas jurisdicciones.",
      },
      {
        tipo: "Preparación y presentación de informe de compras e importaciones de bienes y servicios.",
        descripcion:
          "Elaboración y presentación de informes detallados sobre compras e importaciones de bienes y servicios, relevantes para la determinación de impuestos.",
      },
      {
        tipo: "Diagnóstico de impuestos",
        descripcion:
          "Evaluación exhaustiva de la situación fiscal de un individuo o empresa para identificar oportunidades de optimización y riesgos de cumplimiento.",
      },
      {
        tipo: "Auditoría de liquidaciones de impuestos",
        descripcion:
          "Revisión y verificación de las liquidaciones de impuestos realizadas previamente para garantizar su exactitud y conformidad con las regulaciones fiscales.",
      },
      {
        tipo: "Due diligences.",
        descripcion:
          "Investigación detallada y exhaustiva de la situación fiscal de una empresa o transacción comercial antes de su realización, para evaluar riesgos y oportunidades.",
      },
      {
        tipo: "Consultas ante la Dirección General de Ingresos -DGI",
        descripcion:
          "Servicio de asesoramiento y representación ante la autoridad tributaria para resolver consultas y cuestiones relacionadas con la interpretación y aplicación de las leyes fiscales.",
      },
      {
        tipo: "Declaración anual de Ingreso (Municipio)",
        descripcion:
          "Preparación y presentación de la declaración anual de ingresos ante las autoridades municipales, cumpliendo con los requisitos fiscales locales.",
      },
      {
        tipo: "Confección de formulario de 2% ITBI",
        descripcion:
          "Preparación y presentación del formulario correspondiente al Impuesto de Transferencia de Bienes Inmuebles (ITBI) del 2% sobre el valor de las transacciones inmobiliarias.",
      },
      {
        tipo: "Confección de Ganancia de Capital en Venta de Bienes Inmuebles 3%",
        descripcion:
          "Preparación y presentación del formulario de ganancia de capital por la venta de bienes inmuebles, sujeto a un impuesto del 3% en algunas jurisdicciones.",
      },
    ],
  },
  {
    id: 3,
    title: "Servicios Contables",
    subtitle: "Servicios Contables y Financieros",
    image: "contables",
    contenido: [
      {
        tipo: "Organización contable",
        descripcion:
          "Configuración inicial del sistema de contabilidad de la empresa.",
      },
      {
        tipo: "Controles y procedimientos",
        descripcion:
          "Establecimiento de políticas para garantizar la precisión de los registros financieros.",
      },
      {
        tipo: "Registro contable",
        descripcion: "Mantenimiento regular de registros financieros precisos.",
      },
      {
        tipo: "Elaboración de estados financieros",
        descripcion:
          "Preparación de informes que reflejan la situación financiera de la empresa.",
      },
      {
        tipo: "Supervisión mensual",
        descripcion:
          "Revisión regular de registros contables para asegurar su precisión.",
      },
    ],
  },
  {
    id: 4,
    title: "Asesorías",
    subtitle: "Asesoría Legal Integral",
    image: "asesoria",
    contenido: [
      {
        tipo: "Análisis, documentación y mejoras de procesos",
        descripcion:
          "Evaluación de los procedimientos existentes, documentación de los mismos y recomendaciones para optimizar la eficiencia y efectividad de las operaciones.",
      },
      {
        tipo: "Análisis y evaluación de riesgo operativo",
        descripcion:
          "Identificación y evaluación de posibles riesgos que podrían afectar las actividades comerciales de una empresa, con el fin de implementar medidas para mitigarlos.",
      },
      {
        tipo: "Presupuestos dinámicos y proyecciones financieras",
        descripcion:
          "Creación de presupuestos flexibles y proyecciones financieras que permiten a una empresa adaptarse a cambios en el entorno económico y empresarial.",
      },
      {
        tipo: "Reorganizaciones",
        descripcion:
          "Reestructuración de la organización empresarial, incluyendo cambios en la estructura organizativa, procesos y recursos, con el fin de mejorar la eficiencia y el rendimiento.",
      },
      {
        tipo: "Due diligences",
        descripcion:
          "Investigación exhaustiva de una empresa, proyecto o inversión antes de su realización, con el fin de evaluar su viabilidad, riesgos y oportunidades.",
      },
    ],
  },
  {
    id: 5,
    title: "Servicios de Planilla",
    subtitle: "Servicios de Nómina y Recursos Humanos",
    image: "planilla",
    contenido: [
      {
        tipo: "Cálculo de planilla, Vacaciones, Decimo XIII",
        descripcion:
          "Servicio de cálculo de salarios, vacaciones y decimotercero para empleados, asegurando el cumplimiento de las obligaciones laborales y legales.",
      },
      {
        tipo: "Cálculo de Liquidaciones",
        descripcion:
          "Proceso de cálculo de pagos finales para empleados que dejan la empresa, incluyendo beneficios y compensaciones adeudadas.",
      },
      {
        tipo: "Cálculo de Fondo de Cesantía",
        descripcion:
          "Determinación y gestión de los fondos de cesantía para los empleados, conforme a las regulaciones laborales y las políticas de la empresa.",
      },
      {
        tipo: "Manejo de SIPE (C.S.S.)",
        descripcion:
          "Administración de trámites y gestiones relacionadas con el Sistema de Ingreso y Permanencia (SIPE) de la Caja de Seguro Social (CSS).",
      },
      {
        tipo: "Preparación y presentación de Informe 03 de Planilla",
        descripcion:
          "Elaboración y presentación del informe 03 de planilla ante las autoridades laborales, cumpliendo con los requisitos legales y reglamentarios.",
      },
      {
        tipo: "Confección de Planillas Complementarias",
        descripcion:
          "Preparación de planillas adicionales para reflejar pagos, deducciones u otras transacciones no incluidas en la planilla principal.",
      },
      {
        tipo: "Gestión de RRHH (Reclutamiento y selección personal)",
        descripcion:
          "Proceso de reclutamiento, selección y contratación de personal, asegurando la incorporación de candidatos cualificados y adecuados para las necesidades de la empresa.",
      },
      {
        tipo: "Descripción y análisis de las posiciones de trabajo",
        descripcion:
          "Elaboración de descripciones detalladas de los roles y responsabilidades laborales, así como el análisis de las competencias y requisitos necesarios para cada posición dentro de la empresa.",
      },
    ],
  },
  {
    id: 6,
    title: "Prevención de Lavado de Activos",
    subtitle: "Conformidad y Gestión de Riesgos",
    image: "activos",
    contenido: [
      {
        tipo: "Inscripción en la Unidad de Análisis Financieros (UAF). (Acompañamiento en el cumplimiento de la ley 23)",
        descripcion:
          "Asistencia para el cumplimiento de la Ley 23, que involucra la inscripción en la Unidad de Análisis Financiero (UAF) para entidades sujetas a regulaciones contra el lavado de dinero y el financiamiento del terrorismo.",
      },
      {
        tipo: "Registro en la Super Intendencia de Sujetos no Financieros",
        descripcion:
          "Ayuda en el proceso de registro ante la Superintendencia de Sujetos no Financieros, en cumplimiento con las regulaciones aplicables a entidades que no son instituciones financieras pero están sujetas a supervisión y control.",
      },
    ],
  },
  {
    id: 7,
    title: "Servicios Legales",
    subtitle: "Soluciones Legales Integradas",
    image: "legal",
    contenido: [
      {
        tipo: "Constitución de Sociedades Anónimas",
        descripcion:
          "Servicio para establecer empresas con responsabilidad limitada y capital social dividido en acciones.",
      },
      {
        tipo: "Constitución de Fundaciones de Interés Privado",
        descripcion:
          "Ayuda en la creación de organizaciones sin fines de lucro, con propósitos específicos y patrimonio independiente.",
      },
      {
        tipo: "Disolución de Sociedades",
        descripcion:
          "Asistencia en el cese legal de operaciones de una empresa, liquidando activos y pasivos.",
      },
      {
        tipo: "Agentes Residentes",
        descripcion:
          "Representación legal requerida para empresas extranjeras con negocios en Panamá.",
      },
      {
        tipo: "Registros de marcas",
        descripcion:
          "Trámite legal para proteger marcas comerciales y propiedad intelectual.",
      },
      {
        tipo: "Constitución y asesoramiento en Asociaciones sin fines de Lucro",
        descripcion:
          "Apoyo en la creación y gestión de organizaciones con objetivos sociales, culturales o de otro tipo, sin fines de lucro.",
      },
      {
        tipo: "Redacción y revisión de contratos",
        descripcion:
          "Servicio legal para redactar, revisar y asesorar en contratos de diferentes tipos, como civiles, comerciales y laborales.",
      },
      {
        tipo: "Debida diligencia o Due Diligence Legal",
        descripcion:
          "Evaluación exhaustiva de la situación legal de una empresa o transacción antes de su realización.",
      },
      {
        tipo: "Registros Sanitarios",
        descripcion:
          "Trámite para obtener autorización legal para la comercialización y distribución de productos sanitarios.",
      },
      {
        tipo: "Asesoría Jurídica",
        descripcion:
          "Orientación y asistencia legal en diversas áreas del derecho.",
      },
      {
        tipo: "Dirección General de Ingresos (DGI). (Solicitud de RUC)",
        descripcion:
          "Trámite para obtener el Registro Único de Contribuyentes ante la autoridad fiscal.",
      },
      {
        tipo: "Consultas ante la Dirección General de Ingresos (DGI)",
        descripcion:
          "Servicio legal para resolver dudas y consultas con la autoridad fiscal.",
      },
      {
        tipo: "Procesos de Cobro Coactivo en la Dirección General de Ingresos (DGI)",
        descripcion: "Asistencia legal en casos de cobro de deudas fiscales.",
      },
      {
        tipo: "Ministerio de Comercio e Industrias (MICI) (Permiso de Operación)",
        descripcion:
          "Trámite para obtener autorización para operar comercialmente ante el Ministerio.",
      },
      {
        tipo: "Autoridad Nacional de Administración de Tierra (ANATI)",
        descripcion: "Trámites relacionados con la administración de tierras.",
      },
      {
        tipo: "Caja de Seguro Social (CSS). (Registro de nuevo patrono en CSS, Cierre de planilla ante CSS)",
        descripcion:
          "Trámites relacionados con el registro y cierre de empresas ante la seguridad social.",
      },
      {
        tipo: "Inscripción de Negocio ante Municipio de Panamá",
        descripcion:
          "Registro legal de empresas ante la autoridad municipal de Panamá.",
      },
      {
        tipo: "Cierre de Negocio ante Municipio de Panamá",
        descripcion:
          "Procedimiento legal para dar de baja una empresa registrada ante la autoridad municipal de Panamá.",
      },
      {
        tipo: "Migración",
        descripcion:
          "Asesoría legal en temas migratorios, como visas y permisos de residencia.",
      },
      {
        tipo: "Derecho Laboral",
        descripcion:
          "Asesoramiento legal en asuntos laborales, como consultas, reglamentos internos y permisos.",
      },
      {
        tipo: "Derecho de Familia",
        descripcion:
          "Asistencia legal en asuntos relacionados con el derecho de familia, como divorcios, custodia y manutención de hijos.",
      },
      {
        tipo: "Bienes Raíces",
        descripcion:
          "Asesoramiento legal en transacciones inmobiliarias, como compra, venta y arrendamiento de propiedades.",
      },
      {
        tipo: "Derecho Bancario",
        descripcion:
          "Asesoramiento legal en asuntos relacionados con el sistema bancario y financiero.",
      },
    ],
  },
  {
    id: 8,
    title: "Intermediacion Financiera",
    subtitle: "Servicios Financieros y Gestión Patrimonial",
    image: "finance",
    contenido: [
      {
        tipo: "Apertura de cuenta bancaria",
        descripcion:
          "Asistencia en la apertura de cuentas para individuos o empresas.",
      },
      {
        tipo: "Obtención de líneas de crédito",
        descripcion: "Gestión de créditos ante entidades financieras.",
      },
      {
        tipo: "Proyección financiera para cuentas bancarias",
        descripcion:
          "Preparación de proyecciones financieras para apertura de cuentas.",
      },
      {
        tipo: "Certificación de ingresos",
        descripcion:
          "Documentación que valida ingresos para créditos bancarios.",
      },
      {
        tipo: "Certificación de depósitos",
        descripcion: "Verificación de depósitos en instituciones financieras.",
      },
    ],
  },
  {
    id: 9,
    title: "Otros Servicios",
    subtitle: "Servicios Complementarios",
    image: "otro",
    contenido: [
      {
        tipo: "Registro para utilización de Facturador Electrónico Gratuito (DGI)",
        descripcion:
          "Asistencia en el proceso de registro para el uso del sistema de facturación electrónica gratuito proporcionado por la Dirección General de Ingresos (DGI).",
      },
      {
        tipo: "Domicilio fiscal para empresas",
        descripcion:
          "Servicio que ofrece una dirección legal para el registro de una empresa, cumpliendo con los requisitos de domicilio fiscal.",
      },
      {
        tipo: "Declaración de Patrimonio Familiar o primera vivienda",
        descripcion:
          "Ayuda en la declaración de bienes y propiedades familiares, especialmente relacionados con la primera vivienda, para beneficios fiscales u otros fines legales.",
      },
      {
        tipo: "Trámite de prescripción de impuesto sobre la renta, seguro educativo, impuesto de inmueble",
        descripcion:
          "Asesoramiento y gestión de trámites relacionados con la prescripción de impuestos sobre la renta, seguros educativos y otros impuestos de bienes inmuebles.",
      },
      {
        tipo: "Dominio de Internet",
        descripcion:
          "Servicio de registro y gestión de nombres de dominio en Internet para sitios web.",
      },
      {
        tipo: "Redes Sociales",
        descripcion:
          "Asesoramiento y gestión de perfiles en redes sociales para empresas, incluyendo estrategias de marketing y publicidad.",
      },
      {
        tipo: "Otros",
        descripcion:
          "Servicios adicionales no especificados anteriormente, que pueden variar según las necesidades del cliente y la empresa que los ofrece.",
      },
    ],
  },
];
export { servicios };
