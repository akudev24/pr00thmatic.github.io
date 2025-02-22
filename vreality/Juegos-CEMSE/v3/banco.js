let colors = {
  toHex: function (ox) { return '#' + ox.substr(2); },
  global: {
    wrong: '0xC14612',
    right: '0x12C185'
  },
  nino: {
    fill: '0xFFF3C8',
    stroke: '0xFFC907'
  },
  puber: {
    fill: '0xFFE790',
    stroke: '0xFF8D07'
  },
  adolescente: {
    fill: '0xFFC690',
    stroke: '0xFA6A35'
  },
  cuidador: {
    fill: '0xF5FEE2',
    stroke: '0x87BC1F'
  },
  educador: {
    fill: '0xE1FFA6',
    stroke: '0x5D8C01'
  },
  lider: {
    fill: '0xEAFFFA',
    stroke: '0x006E54'
  }
};
let banco = {
  trivia : {
    lider_1_1: [
      {
        question: '¿Cuáles son los roles de los líderes comunitarios?',
        answers: ['Crear planes o proyectos para la comunidad',
                  'Identificar problemáticas dentro de la comunidad',
                  'Promover la participación de los miembros de la comunidad',
                  'Coordinar con distintas instancias e instituciones',
                  'Todas son correctas' ],
        correctAnswer: 4,
      }, {
        question: 'Las y los líderes comunitarios para proteger a las niñas, niños y adolescentes pueden realizar acciones de prevención, identificación, atención y derivación de casos de violencia.',
        answers: ['Verdadero', 'Falso' ],
        correctAnswer: 0
      }, {
        question: '¿Qué ley se enfoca en la protección de las niñas, niños y adolescentes en Bolivia?',
        answers: ['La ley de educación Avelino Siñani -Elizardo Perez',
                  'La constitución',
                  'El código Niño, Niña y Adolescente o Ley 548' ],
        correctAnswer: 2
      }, {
        question: 'Según el Código Niño, Niña y Adolescente, ¿quiénes son los encargados de proteger el bienestar de los niños, niñas y adolescentes?',
        answers: ['El gobierno',
                  'Los padres y madres',
                  'El Estado, los gobernantes, las familias y la sociedad en general' ],
        correctAnswer: 2
      }
    ],
    cuidador_1_4: [
      {
        question: '¿Qué es el sexo?',
        answers: [
          'Tiene relación con tus características físicas y biológicas, si eres hombre o mujer.',
          'Son aquellas reglas que pone nuestra sociedad respecto a cómo debemos ser o actuar según nuestro sexo.',
          'Ninguna de las otras opciones'
        ],
        correctAnswer: 0
      }, {
        question: '¿Qué es el género?',
        answers: [
          'Tiene relación con tus características físicas y biológicas, si eres hombre o mujer.',
          'Son aquellas reglas que pone nuestra sociedad respecto a cómo debemos ser o actuar según nuestro sexo.',
          'Ninguna de las otras opciones'
        ],
        correctAnswer: 1
      }, {
        question: 'Los hombres pueden... Hay más de una respuesta correcta',
        answers: [
          'Ser fuertes y sensibles',
          'Hacerse cargo de sus hijas e hijos',
          'Tener cualquier profesión u ocupación'
        ],
        correctAnswer: [0,1,2]
      }, {
        question: 'Las mujeres pueden... Hay más de una respuesta correcta',
        answers: [
          'Ser fuertes y sensibles',
          'Hacerse  cargo de sus hijas e hijos',
          'Tener cualquier profesión u ocupación'
        ],
        correctAnswer: [0,1,2]
      }
    ],
    cuidador_2_3: [
      {
        question: '¿De quién o quiénes es la responsabilidad y obligación de realizar tareas domésticas y crianza de las hijas e hijos?',
        answers: [
          'Solo de las madres.',
          'Madres, padres y cuidadores.',
          'Solo de los padres.'
        ],
        correctAnswer: 1,
      }, {
        question: '¿Qué debemos evitar decir las madres, padres y cuidadores?',
        answers: [
          'Esto lo hacen solo las mujeres.',
          'Los hombres no lloran.',
          'Los niños no juegan con muñecas.',
          'Todas.'
        ],
        correctAnswer: 3
      }, {
        question: 'Las muñecas son juguetes para:',
        answers: [
          'Niñas', 'Niños', 'Todos y todas'
        ],
        correctAnswer: 2
      }, {
        question: 'Si soy testigo de alguna burla sexista yo debo:',
        answers: [
          'Reírme',
          'Manifestar mi inconformidad y explicar porque es equivocada esa burla sexista.',
          'No se puede hacer nada'
        ],
        correctAnswer: 1
      }, {
        question: 'Las mujeres siempre se deben encargar de las tareas del hogar.',
        answers: [ 'Verdadero', 'Falso' ],
        correctAnswer: 1
      }, {
        question: 'Los hombres nunca lloran',
        answers: [ 'Verdadero', 'Falso' ],
        correctAnswer: 1
      }
    ],
    cuidador_2_5: [
      {
        question: 'Es el caso de Rocío es una madre que prohíbe a su hija de 16 años salir con sus amigos. A ella le da mucho miedo que su hija se pueda meter en problemas o que sea víctima de cualquier tipo de violencia. ¿Qué podría hacer?',
        answers: [
          'Enseñarle a medir los peligros y evaluar las consecuencias para que cuando salga con sus amigos ella se proteja.',
          'Prohibirle salir.',
          'Permitirle que salga con sus amigos, no hay necesidad de enseñarle nada porque no hay peligros.'
        ],
        correctAnswer: 0
      }, {
        question: 'Rodolfo se enteró que su hija recibe muchos insultos de parte de sus compañeras de curso. Pero su hija no le contó nada al respecto ¿Qué podría hacer Rodolfo?',
        answers: [
          'Gritarles a las compañeras de su hija para que no vuelvan a tratarla mal.',
          'Mejorar la relación entre padre e hija para que ella sienta confianza de pedirle ayuda.',
          'Las niñas y niños son así, no hay por qué preocuparse.'
        ],
        correctAnswer: 1,
      }, {
        question: 'El hijo de Marta está por tener su primera novia y a ella no le gusta para nada la idea, porque distrae a su hijo de sus estudios. ¿Qué podría hacer Marta?',
        answers: [
          'Tratar mal a su novia, así ella ya no querrá verlo.',
          'Prohibirle que la vea.',
          'Escuchar y comprender sus emociones y deseos, a pesar de que no piensen igual.'
        ],
        correctAnswer: 2
      }
    ],
    nino_1_6: [ {
      dir: 'img/trivia/nino_1_6/',
      question: 'Anclaje-nina angustiada1.png',
      answers: [
        'Anclaje-nina angustiada1.png',
        'Anclaje-nina angustiada2.png',
        'Anclaje-nina angustiada3.png',
      ],
      correctAnswer: 1
    }, {
      dir: 'img/trivia/nino_1_6/',
      question: 'Anclaje-nino emociones-01.png',
      answers: [
        'Anclaje-nino emociones-03.png',
        'Anclaje-nino emociones-02.png',
        'Anclaje-nino emociones-01.png',
      ],
      correctAnswer: 2
    }, {
      dir: 'img/trivia/nino_1_6/',
      question: 'Anclaje-ninos tristes-02.png',
      answers: [
        'Anclaje-ninos tristes-02.png',
        'Anclaje-ninos tristes-03.png',
        'Anclaje-ninos tristes-01.png',
      ],
      correctAnswer: [1,2],
    }, {
      dir: 'img/trivia/nino_1_6/',
      question: 'Anclaje-nina en DNA-01.png',
      answers: [
        'Anclaje-nina en DNA-01.png',
        'Anclaje-nina en DNA-02.png',
        'Anclaje-nina en DNA-03.png',
      ],
      correctAnswer: [0,1]
    } ],
    nino_2_4: [ {
      dir: 'img/trivia/nino_2_4/',
      question: 'Anclaje-astronauta.png',
      answers: [
        'ninos.png',
        'ninas.png',
        'todas y todos.png'
      ],
      correctAnswer: [0,1,2]
    }, {
      dir: 'img/trivia/nino_2_4/',
      question: 'anclaje-emoticon.png',
      answers: [
        'ninos.png',
        'ninas.png',
        'todas y todos.png'
      ],
      correctAnswer: [0,1,2]
    }, {
      dir: 'img/trivia/nino_2_4/',
      question: 'Anclaje-objMedicos.png',
      answers: [
        'ninos.png',
        'ninas.png',
        'todas y todos.png'
      ],
      correctAnswer: [0,1,2]
    }, {
      dir: 'img/trivia/nino_2_4/',
      question: 'Anclaje-pelota.png',
      answers: [
        'ninos.png',
        'ninas.png',
        'todas y todos.png'
      ],
      correctAnswer: [0,1,2]
    }, {
      dir: 'img/trivia/nino_2_4/',
      question: 'Anclaje-superheroe.png',
      answers: [
        'ninos.png',
        'ninas.png',
        'todas y todos.png'
      ],
      correctAnswer: [0,1,2]
    } ],
    nino_2_5: [{
      dir: 'img/trivia/nino_2_5/',
      question: 'Anclaje-Rocio triste.png',
      answers: [
        'decoy.png',
      ],
      correctAnswer: 1
    }, {
      dir: 'img/trivia/nino_2_5/',
      question: 'Anclaje-abrazo.png',
      answers: [
        'decoy.png',
      ],
      correctAnswer: 0
    }, {
      dir: 'img/trivia/nino_2_5/',
      question: 'Anclaje-nina enojada.png',
      answers: [
        'decoy.png',
      ],
      correctAnswer: 1
    }, {
      dir: 'img/trivia/nino_2_5/',
      question: 'Anclaje-padre hija.png',
      answers: [
        'decoy.png',
      ],
      correctAnswer: 0
    }, {
      dir: 'img/trivia/nino_2_5/',
      question: 'Anclaje-Nina gritando.png',
      answers: [
        'decoy.png',
      ],
      correctAnswer: 1
    }, {
      dir: 'img/trivia/nino_2_5/',
      question: 'Anclaje-Nino hablando.png',
      answers: [
        'decoy.png',
      ],
      correctAnswer: 0
    }],
    puber_1_1: [ {
      question: '¿Qué cambios físicos atraviesan las mujeres en la adolescencia y pubertad?',
      answers: [
        'Crecimiento de pechos, ensanchamiento de caderas, crecimiento de vello y menstruación.',
        'No atraviesan cambios.',
        'Solamente crecen los pechos.'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué cambios físicos atraviesan los hombres en la adolescencia y pubertad?',
      answers: [
        'Ensanchamiento de la espalda, crecimiento del pene y los testículos, erecciones, crecimiento de vello, cambio de voz.',
        'No atraviesan cambios.',
        'Solamente crece la barba'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué es la menstruación?',
      answers: [
        'Es un sangrado que sale por la vagina que puede durar entre 3 y 7 días y es un proceso natural por el que atraviesan todas las mujeres.',
        'Es un estado de ánimo de las mujeres.'
      ],
      correctAnswer: 0
    }, {
      question: '¿Cuánto dura el ciclo menstrual?',
      answers: [
        'En promedio dura 28 días, sin embargo, puede tener una duración menor o mayor.',
        'En promedio dura 40 días',
        'En promedio dura 50 días'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué es la sexualidad?',
      answers: [
        'La sexualidad es la forma de conocer nuestro cuerpo, es una forma de expresión y comunicación afectiva relacionada con los sentimientos, emociones, ternura y amor.',
        'La sexualidad hace referencia a las relaciones sexuales.'
      ],
      correctAnswer: 0
    }, {
      question: '¿La sexualidad se vive solo a través de nuestros órganos reproductivos?',
      answers: [
        'No, la sexualidad puede ser vivida a través de todo nuestro cuerpo y sentidos, incluyendo nuestros valores, actitudes, sentimientos, interacciones y conductas.',
        'Sí, la sexualidad solamente es la vivencia con los órganos sexuales.'
      ],
      correctAnswer: 0
    } ],
    puber_1_6: [ {
      question: ' ¿Qué significa ser sujeto de derechos?',
      answers: [
        'Que somos personas con derechos que deben ser respetados y garantizados.',
        'Que vivimos en un país con leyes'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué implica el derecho a la protección?',
      answers: [
        'Vivir en un contexto seguro y ser protegido de cualquier tipo de maltrato.',
        'Vivir con miedo en el hogar y el colegio.'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué implica el derecho a la no discriminación?',
      answers: [
        'No sufrir ningún tipo de discriminación por mi edad, género, etnia, clase social, religión, preferencia sexual, etc.',
        'Vivir en un contexto seguro y ser protegido de cualquier tipo de maltrato, violencia o explotación.'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué implica el derecho a la participación?',
      answers: [
        'Ser escuchado y que mi opinión sea tomada en cuenta.',
        'Ser educado en una institución del estado.'
      ],
      correctAnswer: 0
    }, {
      question: '¿Cuál de los siguientes derechos está relacionado a la sexualidad?',
      answers: [
        'Derecho a la protección',
        'Derecho a la identidad',
        'Derecho a decidir sobre mi cuerpo',
        'Derecho a la no discriminación'
      ],
      correctAnswer: 2
    }, {
      question: '¿Cuál de estos derechos me permite decidir si quiero tener hijos o no y a qué edad?',
      answers: [
        'Derecho a decidir sobre mi vida reproductiva.',
        'Derecho a la protección',
        'Derecho a la identidad'
      ],
      correctAnswer: 0
    } ],
    puber_1_7: [ {
      question: '¿A qué nos referimos cuando hablamos de sexo?',
      answers: [
        'Son aquellas características físicas y biológicas que diferencian a los hombres de las mujeres.',
        'Son aquellas normas culturales que nos dicen cómo deben ser las mujeres y los hombres.'
      ],
      correctAnswer: 0
    }, {
      question: '¿A qué nos referimos cuando hablamos de género?',
      answers: [
        'El género son aquellas normas culturales que nos dicen cómo deben ser las mujeres y los hombres.',
        'El género son las  características físicas y biológicas que diferencian a los hombres de las mujeres.'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué son los roles de género?',
      answers: [
        'Son expectativas de cómo deben actuar los hombres y mujeres y qué roles deben cumplir en la sociedad.',
        'Son las formas naturalmente aprendidas de cómo  deben comportarse los hombres y mujeres.'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué son los estereotipos de género?',
      answers: [
        'Son prejuicios sobre cómo deben ser los hombres o las mujeres.',
        'Son las características biológicas de las mujeres y hombres.'
      ],
      correctAnswer: 0
    } ],
    puber_1_9: [ {
      question: '¿Qué es la orientación sexual?',
      answers: [
        'Es a quién te sientes atraído o atraída, física, sexual y románticamente.',
        'Es tu sexo biológico'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué significa ser heterosexual?',
      answers: [
        'Sentirse atraído o atraída por una persona del sexo opuesto.',
        'Sentirse atraído o atraída por una persona del  mismo sexo.'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué significa ser homosexual?',
      answers: [
        'Sentirse atraído o atraída por una persona del mismo sexo.',
        'Sentirse atraído o atraída por una persona del otro sexo'
      ],
      correctAnswer: 0,
    }, {
      question: '¿Qué significa ser bisexual?',
      answers: [
        'Sentirse atraído o atraída por hombre y por mujeres.',
        'Sentirse atraído solamente hacia mujeres'
      ],
      correctAnswer: 0,
    }, {
      question: '¿Qué es la identidad de género?',
      answers: [
        'Es cómo te sientes, defines y expresas tu género.',
        'Es tu sexo biológico'
      ],
      correctAnswer: 0
    } ],
    puber_1_13: [ {
      question: '¿Cómo podemos manejar de mejor manera nuestras emociones?',
      answers: [
        'Reconociendo nuestras emociones y cómo actuamos cuando las sentimos.',
        'Utilizando formas positivas para expresar nuestras emociones.',
        'Respirando profundo o utilizar otras técnicas para evitar actuar de forma impulsiva',
        'Todas las respuestas son correctas'
      ],
      correctAnswer: 3
    }, {
      question: '¿En qué nos ayuda la empatía?',
      answers: [
        'Nos permite comprender las emociones de los demás y ponernos en su lugar.',
        'Nos permite tener una posición firme de nuestros pensamientos.'
      ],
      correctAnswer: 0,
    }, {
      question: '¿Qué es la negociación?',
      answers: [
        'Se trata de llegar a acuerdos que permitan resolver el conflicto.',
        'Se trata de discutir con la otra persona y reconozca que yo tengo la razón'
      ],
      correctAnswer: 0
    }, {
      question: '¿Qué es el reconocimiento?',
      answers: [
        'Es tolerar, respetar y comprender a la otra persona, su posición, su opinión y sus emociones.',
        'Es saber que la otra persona puede hablar, aunque no la escuche.'
      ],
      correctAnswer: 0
    }, {
      question: '¿A qué se refiere la colaboración en la resolución de conflictos?',
      answers: [
        'Se refiere a que ambas partes deben participar activamente en la resolución del conflicto.',
        'Se refiere a que puedo apoyarme en otras personas para que me den la razón cuando tengo una discusión.'
      ],
      correctAnswer: 0
    } ]
  },

  unir: {
    lider_1_2: {
      left: [ 'Equidad de género', 'Mecanismo de protección basado en la comunidad (MPBC)',
              'Acciones de prevención', 'Acciones de atención de casos', 'Acciones de respuesta' ],
      right: [
        'Se refiere a la dignidad y los derechos que poseen tanto hombres como mujeres.',
        'Es un grupo de personas que trabaja de manera coordinada para promover la protección de las NNA frente a cualquier forma de violencia.',
        'Realización de charlas, talleres, ferias y campañas de sensibilización sobre los derechos de las NNA.',
        'Identificación de casos de violencia, remisión de los mismos a las Defensorías y Policía y acompañamiento en el proceso de denuncia.',
        'Creación de rutas y protocolos para casos de violencia.',
      ]
    },
    lider_1_3: {
      left: [ 'Violencia psicológica', 'Violencia física', 'Violencia sexual', 'Ruta crítica',
              'Protocolo de atención' ],
      right: [
        'Amenazas, insultos, críticas, comentarios malintencionados, aislar a una persona de su familia, amigos o amigas u otros miembros de su comunidad.',
        'Golpes, patadas, empujones y cualquier tipo de acto que implique un daño físico a otra persona.',
        'Obligar a una persona a realizar algún acto de tipo sexual sin su consentimiento. Puede ser: acoso sexual, abuso sexual, violación. también puede estar relacionado a trata y tráfico.',
        'Es una herramienta que visibiliza los distintos pasos a tomar en caso de violencia.',
        'Reglamento que especifica las acciones que deben tomar las distintas instituciones y profesionales que atienden casos de violencia de género.',
      ]
    },
    lider_1_5: {
      left: [ 'La trata', 'La violencia sexual comercial', 'El tráfico de personas', 'La“Ley Integral Contra la Trata y Tráfico de Personas”' ],
      right: [
        'Es un delito que consiste en poner a una persona en una situación de explotación para obtener un beneficio propio.',
        'Es un delito conexo a la trata y tráfico de personas, en el cual se da la comercialización sexual de personas menores de dieciocho años de edad.',
        'Es un delito en el cual se facilita la entrada ilegal de una persona a un país que no es el suyo, esto con el fin de obtener un beneficio financiero u otro beneficio de orden material.',
        'Es una norma que tiene como objetivo combatir la trata y tráfico de personas, y delitos conexos.',
      ]
    },
    lider_2_1: {
      left: [
        'Incidencia política', 'Derecho a la participación', 'Empoderamiento'
      ],
      right: [
        'Proceso debidamente planificado que tiene como objetivo influir sobre las políticas públicas que contribuyan al bienestar de las personas.',
        'Permite que puedan expresar sus opiniones en todo los asuntos que las y los involucran, que sean escuchadas y escuchados y que puedan elegir sus propios beneficios.',
        'El impacto que tiene la participación en su desarrollo personal está relacionado con el desarrollo de la autoestima, la autonomía, las habilidades sociales, la identidad, la solidaridad, la seguridad y la dignidad.'
      ],
      answers: [
        [0,0], [1,1], [2,2]
      ]
    },
    puber_1_8: {
      left: [
        'Autoconocimiento', 'Autocuidado', 'Autonomía en la toma de decisiones', 'Empatía'
      ],
      right: [
        'Proceso que nos permite conocernos, aceptarnos y valorarnos.',
        'Acciones que realizamos para asegurar nuestro bienestar. Están acorde a lo que somos, lo que queremos y a nuestros planes.',
        'Capacidad de decidir sobre los distintos aspectos de tu vida de manera libre y sin presiones de los demás.',
        'Capacidad de conocer, respetar y comprender a los demás sin juzgarlos.'
      ],
      answers: [
        [0,0], [1,1], [2,2], [3,3]
      ]
    },
    puber_1_12: {
      left: [
        'Consentimiento sexual', 'El consentimiento es libre', 'El consentimiento debe ser específico', 'El consentimiento es reversible', 'Violencia sexual'
      ],
      right: [
        'Es un acuerdo entre dos personas para participar en una actividad sexual.',
        'No debe existir ningún tipo de presión, amenaza o chantaje de por medio.',
        'Puedo decir que sí una vez y decir que no en otras ocasiones; o decir que sí sólo a algunas cosas y a otras no.',
        'Puedo cambiar de parecer después de haber dicho que sí. ',
        'Cualquier contacto de tipo sexual en el cual no existe consentimiento de ambas personas.'
      ],
      answers: [
        [0,0], [1,1], [2,2], [3,3], [4,4]
      ]
    },
    puber_1_14: {
      left: [
        'Si te sientes en peligro en la calle y estás sola o solo',
        'No aceptes bebidas de extraños,',
        'En caso de violencia en tu familia o de pareja,',
        'En caso de abuso o violación,'
      ],
      right: [
        'puedes acercarte a un adulto y comentarle la situación.',
        'recuerda que nadie debe obligarte a consumir alcohol o drogas',
        'recurre a un adulto de confianza y realiza la denuncia en una defensoría o en la policía.',
        'recuerda no cambiarte ni bañarte, recurrir a un adulto de confianza y acudir a la defensoría o policía para realizar la denuncia.'
      ],
      answers: [
        [0,0], [1,1], [2,2], [3,3]
      ]
    },
    puber_1_1: {
      dir: 'img/unir/puber_1_1/',
      left: [
        'Comer frutas', 'Higiene', 'Higiene dental', 'Comer verduras', 'Cambios físicos'
      ],
      right: [
        'Unir-cambios fisicos1.png',  'unir-comer verduras1.png',   'unir-higiene3.png',
        'Unir-cambios fisicos2.png',  'unir-comer verduras2.png',   'unir-higiene4.png',
        'unir-comer frutas1.png',      'unir-higiene1.png',
        'unir-comer frutas2.png',      'unir-higiene2.png'
      ],
      answers: [
        [0, 6], [0, 8],
        [1, 2], [1, 5],
        [2, 9],
        [3, 1,], [3, 4],
        [4, 0, 3]
      ]
    }
  },

  ordenar: {
    lider_2_1: [
      {
        category: 'Se garantiza el derecho a la participación',
        label: 'Una familia debe mudarse, los padres tienen una conversación con sus hijos al respecto.'
      }, {
        category: 'Se garantiza el derecho a la participación',
        label: 'En la feria de la comunidad, los adolescentes organizan actividades de su agrado.'
      }, {
        category: 'Se garantiza el derecho a la participación',
        label: 'En la escuela, se realizan las elecciones del centro de estudiantes.'
      }, {
        category: 'No se garantiza el derecho a la participación',
        label: 'Los padres de una familia deciden cambiar de colegio a sus hijas, sin consultarles.'
      }, {
        category: 'No se garantiza el derecho a la participación',
        label: 'Los adolescentes de una escuela desean hacer una queja, sin embargo, el director no los atiende.'
      }, {
        category: 'No se garantiza el derecho a la participación',
        label: 'Los niños, niñas y adolescentes no pueden asistir a las asambleas de la comunidad.'
      }
    ],
    puber_1_15: [
      {
        category: 'Peligros de las Tecnologías de Información y Comunicación (TICs)',
        label: 'Un desconocido te manda una solicitud de amistad',
      }, {
        category: 'Peligros de las Tecnologías de Información y Comunicación (TICs)',
        label: 'Alguien te pide o envía fotografías íntimas'
      }, {
        category: 'Peligros de las Tecnologías de Información y Comunicación (TICs)',
        label: 'Cyberbullying (burlas, mensajes o comentarios violentos)'
      }, {
        category: 'Trata y Tráfico',
        label: 'Una adolescente responde a un anuncio laboral en el que ofrecen mucho dinero por pocas horas de trabajo.'
      }, {
        category: 'Trata y Tráfico',
        label: 'Una adolescente se encuentra con una persona que conoció por internet, es retenida y no puede volver a casa.'
      }, {
        category: 'Trata y Tráfico',
        label: 'Un adolescente es llevado a otro país o ciudad para realizar trabajos forzados.'
      }
    ],
    puber_1_2: [
      {
        category: 'Autoconocimiento',
        label: 'Conozco las partes de mi cuerpo y sus funciones'
      }, {
        category: 'Autoconocimiento',
        label: 'Conozco y acepto mis rasgos (color de piel, ojos y cabello)'
      }, {
        category: 'Autoconocimiento',
        label: 'Reconozco aspectos físicos que me hacen única o único. '
      // }, {
      //   category: 'Autoconocimiento',
      //   label: 'Es un proceso que se da a lo largo de la vida'
      }, {
        category: 'Autocuidado',
        label: 'Nadie puede tocar mi cuerpo sin mi consentimiento'
      }, {
        category: 'Autocuidado',
        label: 'Me alimento de manera correcta y balanceada '
      }, {
        category: 'Autocuidado',
        label: 'Realizo el ejercicio o actividad física de mi preferencia'
      // }, {
      //   category: 'Autocuidado',
      //   label: 'Tengo horarios de descanso regulares'
      }
    ],
    puber_1_11: [
      {
        category: 'Relaciones positivas',
        label: 'Te escucha'
      }, {
        category: 'Relaciones positivas',
        label: 'Te apoya para lograr tus metas'
      }, {
        category: 'Relaciones positivas',
        label: 'Respeta tu espacio'
      // }, {
      //   category: 'Relaciones positivas',
      //   label: 'Confía en ti cuando sales con tus amigos o amigas'
      }, {
        category: 'Relaciones tóxicas',
        label: 'Te pide tus contraseñas'
      }, {
        category: 'Relaciones tóxicas',
        label: 'Se molesta si no quieres ser afectuoso o afectuosa en público'
      }, {
        category: 'Relaciones tóxicas',
        label: 'Te ignora o te hace la ley del hielo cuando está enojado o enojada'
      // }, {
      //   category: 'Relaciones tóxicas',
      //   label: 'Es celoso o celosa'
      }
    ]
  },

  sopa: {
    lider_1_1: '[{"capsule":{"origin":{"r":0,"c":0},"end":{"r":12,"c":12}},"word":"PARTICIPACION"},{"capsule":{"origin":{"r":5,"c":0},"end":{"r":5,"c":9}},"word":"PROTECCION"},{"capsule":{"origin":{"r":4,"c":11},"end":{"r":12,"c":11}},"word":"EDUCACION"},{"capsule":{"origin":{"r":8,"c":1},"end":{"r":8,"c":9}},"word":"IDENTIDAD"},{"capsule":{"origin":{"r":12,"c":2},"end":{"r":8,"c":2}},"word":"SALUD"},{"capsule":{"origin":{"r":1,"c":4},"end":{"r":1,"c":11}},"word":"LIBERTAD"}]',
    puber_1_3: '[{"capsule":{"origin":{"r":7,"c":2},"end":{"r":7,"c":9}},"word":"GONORREA"},{"capsule":{"origin":{"r":0,"c":5},"end":{"r":8,"c":5}},"word":"SECRECION"},{"capsule":{"origin":{"r":0,"c":5},"end":{"r":6,"c":11}},"word":"SIFILIS"},{"capsule":{"origin":{"r":6,"c":9},"end":{"r":4,"c":11}},"word":"VIH"},{"capsule":{"origin":{"r":8,"c":0},"end":{"r":8,"c":5}},"word":"CONDON"},{"capsule":{"origin":{"r":5,"c":1},"end":{"r":9,"c":1}},"word":"ARDOR"},{"capsule":{"origin":{"r":6,"c":8},"end":{"r":11,"c":8}},"word":"HERPES"},{"capsule":{"origin":{"r":11,"c":0},"end":{"r":11,"c":8}},"word":"HEPATITIS"},{"capsule":{"origin":{"r":4,"c":2},"end":{"r":4,"c":8}},"word":"ULCERAS"}]'
  },

  crucigrama: {
    lider_1_4: '{"words":[{"capsule":{"origin":{"r":0,"c":8},"end":{"r":10,"c":8}},"word":"CAPACIDADES","number":{"position":{"x":143,"y":33},"number":1},"hint":{"text":"1: Las (...) son fortalezas que tenemos o podemos desarrollar para enfrentar de manera exitosa un desastre o una emergencia","position":{"x":34,"y":300}}},{"capsule":{"origin":{"r":6,"c":0},"end":{"r":6,"c":17}},"word":"GESTION DE RIESGOS","number":{"position":{"x":15,"y":129},"number":2},"hint":{"text":"2: La (...) son las diversas acciones que los gobiernos y los miembros de una comunidad deben realizar para reducir los riesgos y vivir más seguros.","position":{"x":34,"y":327}}},{"capsule":{"origin":{"r":4,"c":1},"end":{"r":9,"c":1}},"word":"RIESGO","number":{"position":{"x":31,"y":97},"number":3},"hint":{"text":"3: El (...) es el cálculo de los potenciales daños o pérdidas que se podrían producir tomando en cuenta las amenazas, las vulnerabilidades y las capacidades.","position":{"x":34,"y":354}}},{"capsule":{"origin":{"r":9,"c":4},"end":{"r":9,"c":17}},"word":"VULNERABILIDAD","number":{"position":{"x":79,"y":177},"number":4},"hint":{"text":"4: La (...) es una debilidad que tenemos en caso de que se presente una amenaza.","position":{"x":34,"y":381}}},{"capsule":{"origin":{"r":3,"c":2},"end":{"r":3,"c":14}},"word":"MEMORIA LOCAL","number":{"position":{"x":47,"y":81},"number":5},"hint":{"text":"5: La (...) de eventos adversos es una herramienta que nos permite realizar el análisis de riesgos como un primer paso para prevenir y gestionar una emergencia.","position":{"x":34,"y":408}}},{"capsule":{"origin":{"r":1,"c":8},"end":{"r":1,"c":15}},"word":"AMENAZAS","number":{"position":{"x":143,"y":49},"number":6},"hint":{"text":"6: Factores externos que representan un riesgo o peligro.","position":{"x":34,"y":435}}}],"numberStyle":{"font":"8px Helvetica","color":"#000000"},"hintStyle":{"color":"#000000","font":"15px Helvetica","wordWrap":{"width":290}}}',
    puber_1_4: '{"words":[{"capsule":{"origin":{"r":3,"c":2},"end":{"r":3,"c":11}},"word":"COMPARTIDA","number":{"position":{"x":47,"y":81},"number":1},"hint":{"text":"1: El uso de métodos anticonceptivos es una responsabilidad (...)","position":{"x":34,"y":300}}},{"capsule":{"origin":{"r":0,"c":7},"end":{"r":9,"c":7}},"word":"EMERGENCIA","number":{"position":{"x":127,"y":33},"number":2},"hint":{"text":"2: Puede tomarse una pastilla de (...) hasta 3 días después de una relación sin protección.","position":{"x":34,"y":327}}},{"capsule":{"origin":{"r":6,"c":5},"end":{"r":6,"c":10}},"word":"CONDON","number":{"position":{"x":95,"y":129},"number":3},"hint":{"text":"3: Es un método de barrera que previene el contagio de ITS y el embarazo.","position":{"x":34,"y":354}}},{"capsule":{"origin":{"r":9,"c":7},"end":{"r":9,"c":20}},"word":"ANTICONCEPTIVA","number":{"position":{"x":127,"y":177},"number":4},"hint":{"text":"4: Debes tomar una pastilla (...) cada día a la misma hora.","position":{"x":34,"y":381}}},{"capsule":{"origin":{"r":4,"c":13},"end":{"r":11,"c":13}},"word":"IMPLANTE","number":{"position":{"x":223,"y":97},"number":5},"hint":{"text":"5: Es colocado debajo de la piel en el brazo y previene el embarazo hasta por 4 años.","position":{"x":34,"y":408}}},{"capsule":{"origin":{"r":4,"c":12},"end":{"r":4,"c":14}},"word":"DIU","number":{"position":{"x":207,"y":97},"number":6},"hint":{"text":"6: Es un método que debe ser colocado dentro del útero.","position":{"x":34,"y":435}}}],"numberStyle":{"font":"8px Helvetica","color":"#000000"},"hintStyle":{"color":"#000000","font":"15px Helvetica","wordWrap":{"width":290}}}'
  },

  palabrasFaltantes : {
    cuidador_1_2: "1. Las Infecciones de _transmisión_ sexual son enfermedades que se contagian durante las relaciones _sexuales_ sin protección.\n\n" +
      "2. La mejor forma de prevenir las ITS y el embarazo es el correcto uso del _condón_.\n\n" +
      "3. Violencia sexual es:\n" +
      "   - Si alguien toca tus pechos, nalgas, boca o genitales sin tu _consentimiento_.\n" +
      "   - Si alguien te fuerza a que lo _beses_.\n" +
      "   - Si alguien te obliga a sacarte _fotografías_ sin ropa o en posiciones eróticas.",

    cuidador_1_7: "Hace mucho tiempo cerca a un lago se inundaron varias casas, entre ellas la casa de Pedro y Fabiola. Durante todo el día no había parado de _llover_. Entonces, Pedro y Fabiola sintieron mucha _preocupación_ porque su casa y su familia estaban en riesgo. A pesar de esta emoción, Pedro trató de _calmarse_, para ello _respiró_ profundamente y de esa manera pudo sacar de su _casa_, sanos y salvos a sus dos hijas e hijo, quienes estaban con mucho _miedo_. Llegaron a un lugar _seguro_ pero Pedro y Fabiola sabían que tenían que estar alerta para _cuidar_ y _proteger_ a su familia, porque en estas situaciones las _niñas, niños y adolescentes_ son más _vulnerables_ y corren más peligro." +
      "Durante varios días tuvieron que vivir en un _Refugio_, por eso Fabiola les explicó a sus hijas e hijos que ahora más que nunca se tenían que _cuidar_ entre todos, porque hay mucha gente que puede aprovechar esta situación para cometer _abuso sexual_. Y les recordaron que como su madre y padre estaban para _cuidarlos_ y _amarlos_,  y que entre todos resolverán cualquier problema.",

    puber_1_5: "La violencia sexual se refiere a cualquier\n contacto _no deseado_. Sucede cuando alguien te fuerza o presiona física o \nemocionalmente (_amenazas_, chantajes) a que hagas alguna cosa de tipo sexual.\n\n" +
      "Dentro de lo que se considera violencia sexual se encuentra el abuso sexual y la _violación_. El abuso sexual refiere a varias situaciones como: toques, frotes, mostrar las partes íntimas, mostrar pornografía, etc. Todas estas _sin consentimiento_. La violación tiene que ver con tener una relación sexual forzada.\n\n" +
      "Si vives una situación de violencia sexual debes: buscar un lugar seguro, contarle lo sucedido a \nun _adulto_, no cambiarte de ropa o bañarte (en caso de violación) y realizar la _denuncia_ en la policía o en la defensoría de la Niñez y Adolescencia."
  },

  ahorcado: {
    puber_1_3: [
      'Derecho a decidir sobre mi cuerpo',
      'Derecho a vivir seguro y protegido',
      'Derecho a ser incluido'
    ],
    puber_1_10: [
      'Buena comunicacion',
      'Respeto',
      'Violencia',
      'Desconfianza'
    ]
  }
};
