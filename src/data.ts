import { ServiceDetail, FaqItem } from './types';

export const PHONE_NUMBER_RAW = '5491164916818';
export const PHONE_NUMBER_DISPLAY = '+54 9 11 6491-6818';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'individual',
    title: 'Terapia Individual',
    shortDesc: 'Un refugio confidencial para tramitar ansiedad, angustia, crisis vitales, duelos, regulación afectiva y problemas de autoestima.',
    tags: ['Ansiedad y Estrés', 'Toma de decisiones', 'Límites sanos'],
    fullDesc: 'La psicoterapia individual sistémica se centra en comprender cómo tus vivencias, hábitos de pensamiento y relaciones impactan en tu bienestar emocional. No buscamos etiquetarte, sino desarticular patrones circulares de malestar e incorporar nuevas herramientas prácticas de afrontamiento.',
    symptoms: [
      'Cuadros de ansiedad, ataques de pánico o preocupaciones constantes',
      'Sentimiento de estancamiento vital, laboral o vocacional',
      'Dificultades para poner límites asertivos en relaciones interpersonales',
      'Elaboración de duelos, rupturas o transiciones evolutivas',
      'Desregulación afectiva, irritabilidad o baja autoestima'
    ],
    frequency: 'Semanal (inicial) / Quincenal',
    duration: '45 - 50 minutos',
    whatsappMessage: 'Hola Lic. Romina, quiero consultar por la terapia individual.'
  },
  {
    id: 'pareja',
    title: 'Terapia de Pareja',
    shortDesc: 'Espacio mediado e imparcial para transformar desacuerdos crónicos, reabrir el diálogo sincero y construir nuevos pactos de convivencia.',
    tags: ['Circuitos de discusión', 'Reencuentro íntimo', 'Separaciones conscientes'],
    fullDesc: 'Un dispositivo terapéutico neutral y seguro para parejas que atraviesan crisis, distanciamiento afectivo, dificultades en la comunicación o decisiones trascendentales. Analizamos la "danza vincular", desarticulando escaladas de conflicto y recreando acuerdos mutuos sostenibles.',
    symptoms: [
      'Discusiones recurrentes por los mismos motivos que terminan en desgaste',
      'Frialdad afectiva, desconexión íntima o pérdida de complicidad',
      'Crisis por infidelidad o quiebre de la confianza mutua',
      'Desacuerdos intensos en torno a proyectos compartidos, finanzas o familias de origen',
      'Acompañamiento en procesos de separación consciente y respetuosa'
    ],
    frequency: 'Semanal o Quincenal',
    duration: '50 - 60 minutos',
    whatsappMessage: 'Hola Lic. Romina, quiero consultar por la terapia de pareja.'
  },
  {
    id: 'familia',
    title: 'Terapia Familiar',
    shortDesc: 'Abordaje de dinámicas familiares complejas, crianza compartida, transiciones evolutivas y recomposición de roles ante crisis o mudanzas.',
    tags: ['Familias ensambladas', 'Adolescencia y crianza', 'Duelos familiares'],
    fullDesc: 'El enfoque sistémico nació precisamente del trabajo con familias. Reconoce que el síntoma de un miembro frecuentemente expresa una tensión en toda la red vincular. Intervenimos sobre las pautas de comunicación intergeneracional y las jerarquías para devolver armonía al hogar.',
    symptoms: [
      'Conflictos en la crianza compartida o dificultades con hijos adolescentes',
      'Desafíos de integración en familias ensambladas',
      'Impacto de enfermedades crónicas, pérdidas o cambios de ciclo familiar',
      'Rigidez en los roles familiares y dificultades de emancipación juvenil',
      'Falta de límites claros o silencios prolongados que generan tensión'
    ],
    frequency: 'Quincenal o mensual según acuerdos',
    duration: '60 minutos',
    whatsappMessage: 'Hola Lic. Romina, quiero consultar por la terapia familiar.'
  },
  {
    id: 'supervision',
    title: 'Supervisión Clínica',
    shortDesc: 'Orientación y mentoría técnica para psicólogos noveles. Revisión de hipótesis de caso, encuadre profesional y construcción de rol terapéutico.',
    tags: ['Psicólogos iniciantes', 'Viñetas clínicas UBA', 'Ética y encuadre'],
    fullDesc: 'Espacio de formación continuada y co-visión orientado a graduados recientes y colegas que buscan afianzar su práctica clínica desde la perspectiva sistémica relacional. Trabajamos sobre el caso real, las hipótesis diagnósticas, la neutralidad del terapeuta y el autocuidado profesional.',
    symptoms: [
      'Inseguridad en las primeras admisiones y diseño de encuadre',
      'Dudas en el diagnóstico diferencial y construcción de genogramas',
      'Sensación de entrampamiento o impasse terapéutico en un caso',
      'Manejo de situaciones de crisis vincular o urgencias subjetivas',
      'Desarrollo del estilo personal del terapeuta y ética profesional'
    ],
    frequency: 'A convenir (individual o quincenal)',
    duration: '50 minutos',
    whatsappMessage: 'Hola Lic. Romina, quiero consultar por la supervisión clínica.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'admision',
    category: 'general',
    question: '¿Cómo es la primera sesión o entrevista de admisión?',
    answer: 'La primera sesión es una conversación de apertura y conocimiento mutuo. Dialogamos sobre el motivo puntual que te genera inquietud, tus expectativas y el contexto en que se produce. Nos permite conocernos y delinear juntos la frecuencia de trabajo más conveniente para tu caso.'
  },
  {
    id: 'duracion',
    category: 'general',
    question: '¿Cuánto dura cada sesión psicoterapéutica?',
    answer: 'Las sesiones individuales tienen una duración habitual de 45 a 50 minutos. En los casos de terapia de pareja o familia, los encuentros pueden extenderse a 60 minutos para permitir la participación equitativa de todos los integrantes.'
  },
  {
    id: 'reintegros',
    category: 'honorarios',
    question: '¿Trabajás con reintegro de obras sociales o medicina prepaga?',
    answer: 'La atención es de carácter privado. Los honorarios pueden abonarse cómodamente mediante transferencia bancaria o Mercado Pago. Al finalizar cada mes o sesión se emite la factura electrónica profesional habilitada por AFIP / ARCA y Ministerio de Salud para que puedas tramitar el reintegro ante tu cobertura médica (OSDE, Swiss Medical, Galeno, Medicus u otras) en caso de que tu plan lo contemple.'
  },
  {
    id: 'virtual',
    category: 'modalidad',
    question: '¿Qué necesito para realizar terapia de forma virtual?',
    answer: 'Solo requerís un teléfono, tablet o computadora con cámara y micrófono, una conexión estable a internet y —lo más importante— un lugar cerrado y privado donde puedas expresarte con franqueza y sin interrupciones durante el tiempo del encuentro.'
  },
  {
    id: 'supervision-faq',
    category: 'supervision',
    question: '¿Cómo se gestiona la supervisión si soy psicólogo principiante?',
    answer: 'Podés comunicarte directamente indicando el motivo de supervisión. Acordamos un encuentro online o presencial en el que revisamos tu viñeta de caso, el mapa vincular sistémico, las hipótesis clínicas y el diseño de intervenciones terapéuticas orientadas a tus objetivos.'
  },
  {
    id: 'cancelaciones',
    category: 'general',
    question: '¿Cuál es la política de cancelación o reprogramación?',
    answer: 'Para cuidar el encuadre y la disponibilidad horaria del consultorio, solicitamos avisar con un mínimo de 24 horas de antelación para poder reprogramar el encuentro sin arancelamiento de la sesión reservada.'
  }
];
