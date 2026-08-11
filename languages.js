(() => {
    const STORAGE_KEY = 'johns-masonry-roofing-language';
    const SUPPORTED_LANGUAGES = ['en', 'es', 'pl'];

    const translations = {
        es: {
            'A wall taken down and rebuilt': 'Un muro derribado y reconstruido',
            'Repair rather than rebuild': 'Reparar en lugar de reconstruir',
            'What grinding out actually looks like': 'Cómo se ve realmente el retiro del mortero',
            'A chimney taken back and rebuilt': 'Una chimenea desmontada y reconstruida',
            'What a failed parapet looks like from the roof': 'Cómo se ve un parapeto deteriorado desde el techo',
            'Flat roof work': 'Trabajo en techos planos',
            'Before': 'Antes',
            'During': 'Durante',
            'After': 'Después',
            'Taken down to what was still sound.': 'Derribado hasta la parte que seguía firme.',
            'Block core going back in, tied into the standing brick.': 'El núcleo de bloque vuelve a colocarse, unido al ladrillo existente.',
            'Face brick laid and pointed at the corner.': 'Ladrillo de fachada colocado y rejuntado en la esquina.',
            'Finished run with the coping on.': 'Tramo terminado con la albardilla colocada.',
            'Brick repair in Roseland, Chicago.': 'Reparación de ladrillo en Roseland, Chicago.',
            'Grinding the joints out, Dolton.': 'Retirando el mortero de las juntas, Dolton.',
            'Working across the elevation.': 'Avanzando por toda la fachada.',
            'Failed brick out, rubble on the roof.': 'Ladrillo dañado retirado, escombros sobre el techo.',
            'Rebuilt and pointed, new crown on.': 'Reconstruida y rejuntada, con corona nueva.',
            'Crown and cap finished.': 'Corona y sombrerete terminados.',
            'The joint behind the coping, opened up.': 'La junta detrás de la albardilla, abierta.',
            'Brick breaking down under the cap.': 'Ladrillo deteriorándose bajo la albardilla.',
            'New edge metal at the roof line.': 'Nuevo remate metálico en la línea del techo.',
            'Repointed and the coping sealed.': 'Rejuntado y albardilla sellada.',
            'Membrane down, edges sealed.': 'Membrana colocada, bordes sellados.',
            'The full run, finished.': 'El tramo completo, terminado.',
            'Brick wall rebuilt end to end': 'Muro de ladrillo reconstruido de extremo a extremo',
            'Tuckpointing in Dolton': 'Tuckpointing en Dolton',
            'Chimney rebuilt and crowned': 'Chimenea reconstruida y con corona nueva',
            'Parapet repointed, coping sealed': 'Parapeto rejuntado, albardilla sellada',
            'Flat roof, finished': 'Techo plano, terminado',
            'Light mode': 'Modo claro',
            'Dark mode': 'Modo oscuro',
            'Switch between light and dark mode': 'Cambiar entre modo claro y oscuro',
            'Forty-five years working the same neighborhoods. We are still here when the mortar has to be matched a second time.': 'Cuarenta y cinco años trabajando en los mismos barrios. Seguimos aquí cuando hay que igualar el mortero por segunda vez.',
            'The people who quote your job are the people who do it. Small enough to answer the phone, big enough to strip a roof in a day.': 'Quienes le dan el presupuesto son quienes hacen el trabajo. Suficientemente pequeños para contestar el teléfono y suficientemente grandes para retirar un techo en un día.',
            'A spot repair and a full rebuild are both real answers. We will tell you which one your wall actually needs.': 'Una reparación puntual y una reconstrucción completa son ambas respuestas válidas. Le diremos cuál necesita realmente su pared.',
            'See the full service area →': 'Ver toda el área de servicio →',
            'A few photos of the wall, taken straight on and from a few feet back, tell us a lot.': 'Unas fotos de la pared, tomadas de frente y desde unos metros atrás, nos dicen mucho.',
            'A photo from the ground, and one of any staining on the ceiling inside, both help.': 'Una foto desde el suelo, y otra de cualquier mancha en el techo interior, ayudan mucho.',
            'A photo of the worst wall tells us most of what we need to know.': 'Una foto de la pared en peor estado nos dice casi todo lo que necesitamos saber.',
            'A photo taken straight on at the top corner of the window shows us most of it.': 'Una foto de frente de la esquina superior de la ventana nos muestra casi todo.',
            'Building type, rough square footage and access notes help us scope it accurately.': 'El tipo de edificio, los metros cuadrados aproximados y notas de acceso nos ayudan a calcular con precisión.',
            'If you can safely photograph the wall from the roof, send that. If not, we will look.': 'Si puede fotografiar el muro desde el techo con seguridad, envíela. Si no, lo revisamos nosotros.',
            'Not sure if you are in range? Send the address and we will tell you straight.': '¿No sabe si está dentro de nuestra zona? Envíe la dirección y se lo decimos con franqueza.',
            'Photos of the damaged area, taken straight on, are the most useful thing you can send.': 'Fotos del área dañada, tomadas de frente, son lo más útil que puede enviarnos.',
            'Photos of the roof and of any ceiling staining inside help a lot.': 'Fotos del techo y de cualquier mancha en el cielorraso interior ayudan mucho.',
            'Rough dimensions and a photo of the existing surface get you a much closer number.': 'Las medidas aproximadas y una foto de la superficie actual le dan un número mucho más ajustado.',
            'Tell us the age of the building and whether the joints have been pointed recently.': 'Díganos la antigüedad del edificio y si las juntas se han rejuntado recientemente.',
            'Tell us the street and roughly how old the roof is.': 'Díganos la calle y aproximadamente qué antigüedad tiene el techo.',
            'Tell us what you are looking at. Photos help us give you a straight answer faster.': 'Cuéntenos qué está viendo. Las fotos nos ayudan a darle una respuesta clara más rápido.',
            'Age of roof, leaks, missing shingles...': 'Antigüedad del techo, goteras, tejas faltantes...',
            'Age of roof, leaks, storm damage...': 'Antigüedad del techo, goteras, daños por tormenta...',
            'Ceiling stains on the top floor, crumbling wall above the roof...': 'Manchas en el techo del último piso, muro deteriorado sobre el tejado...',
            'Cracked driveway, sunken walk, new patio slab...': 'Entrada agrietada, acera hundida, nueva losa de patio...',
            'Cracked mortar, leaking roof, chimney work...': 'Mortero agrietado, techo con goteras, trabajo de chimenea...',
            'Crumbling brick faces, a cracked wall, bulging section...': 'Caras de ladrillo desprendidas, pared agrietada, sección abombada...',
            'Crumbling chimney, leaning stack, water stains near the fireplace...': 'Chimenea deteriorada, tiro inclinado, manchas de agua junto al hogar...',
            'Crumbling mortar, damaged brick, chimney work...': 'Mortero deteriorado, ladrillo dañado, trabajo de chimenea...',
            'Crumbling mortar, gaps between bricks, white staining...': 'Mortero deteriorado, huecos entre ladrillos, manchas blancas...',
            'Damp interior walls, chalky white staining, previously sealed brick...': 'Paredes interiores húmedas, manchas blancas calcáreas, ladrillo ya sellado...',
            'Flat roof leak, facade repair, parking lot concrete...': 'Gotera en techo plano, reparación de fachada, concreto de estacionamiento...',
            'Rust stains above a window, cracked brick over an opening...': 'Manchas de óxido sobre una ventana, ladrillo agrietado sobre un vano...',
            'What you need, and where you are...': 'Qué necesita y dónde se encuentra...',
            'Roofing': 'Techos',
            'Masonry': 'Albañilería',
            'Tuckpointing': 'Tuckpointing',
            'Chimneys': 'Chimeneas',
            'Concrete': 'Concreto',
            'Commercial': 'Comercial',
            'Service Area': 'Área de servicio',
            'Service area': 'Área de servicio',
            'Brick, mortar and roofs since 1981': 'Ladrillo, mortero y techos desde 1981',
            'Get a Free Estimate': 'Solicite un presupuesto gratis',
            'Get a Free Roofing Estimate': 'Presupuesto gratis de techos',
            'Get a Free Tuckpointing Estimate': 'Presupuesto gratis de tuckpointing',
            'Get a Free Brick Repair Estimate': 'Presupuesto gratis de reparación de ladrillo',
            'Get a Free Chimney Estimate': 'Presupuesto gratis de chimenea',
            'Get a Free Lintel Estimate': 'Presupuesto gratis de dintel',
            'Get a Free Parapet Estimate': 'Presupuesto gratis de parapeto',
            'Get a Free Waterproofing Estimate': 'Presupuesto gratis de impermeabilización',
            'Get a Free Concrete Estimate': 'Presupuesto gratis de concreto',
            'Get a Free Masonry Estimate': 'Presupuesto gratis de albañilería',
            'Request a Commercial Estimate': 'Solicite un presupuesto comercial',
            'Request My Estimate': 'Solicitar mi presupuesto',
            'Back to the homepage': 'Volver al inicio',
            'Free Estimate': 'Presupuesto gratis',
            'Request a Free Estimate': 'Solicite un presupuesto gratis',
            'Free Roofing Estimate': 'Presupuesto gratis de techos',
            'Free Tuckpointing Estimate': 'Presupuesto gratis de tuckpointing',
            'Free Brick Repair Estimate': 'Presupuesto gratis de reparación de ladrillo',
            'Free Chimney Estimate': 'Presupuesto gratis de chimenea',
            'Free Lintel Estimate': 'Presupuesto gratis de dintel',
            'Free Parapet Estimate': 'Presupuesto gratis de parapeto',
            'Free Waterproofing Estimate': 'Presupuesto gratis de impermeabilización',
            'Free Concrete Estimate': 'Presupuesto gratis de concreto',
            'Free Masonry Estimate': 'Presupuesto gratis de albañilería',
            'Commercial Estimate': 'Presupuesto comercial',
            'Forty-five years of brick, mortar and roofs on the South Side': 'Cuarenta y cinco años de ladrillo, mortero y techos en el South Side',
            'John\'s Masonry and Roofing has been working in Chicago and the South Suburbs since 1981. Six men, one crew, no subcontracted strangers showing up at your house. We tuckpoint, we lay brick, we build chimneys, we pour concrete, and we tear off and replace roofs — shingle, flat and commercial.': 'John\'s Masonry and Roofing trabaja en Chicago y los suburbios del sur desde 1981. Seis hombres, un solo equipo, sin subcontratistas desconocidos en su casa. Hacemos tuckpointing, colocamos ladrillo, construimos chimeneas, vertemos concreto y retiramos y reemplazamos techos: de teja asfáltica, planos y comerciales.',
            'Since 1981': 'Desde 1981',
            'A six-man crew': 'Un equipo de seis personas',
            'Built to your budget': 'Ajustado a su presupuesto',
            'What we do': 'Lo que hacemos',
            'Recent jobs': 'Trabajos recientes',
            'Our work': 'Nuestro trabajo',
            'Where we work': 'Dónde trabajamos',
            'Full roof replacement in Harvey': 'Reemplazo completo de techo en Harvey',
            'A house tuckpointed top to bottom': 'Una casa con tuckpointing de arriba abajo',
            'Decking, paint and brick flower beds': 'Terraza, pintura y jardineras de ladrillo',
            'Brick & stone repair': 'Reparación de ladrillo y piedra',
            'Chimney repair & new chimneys': 'Reparación y construcción de chimeneas',
            'Lintel replacement': 'Reemplazo de dinteles',
            'Parapet walls': 'Muros de parapeto',
            'Masonry waterproofing': 'Impermeabilización de albañilería',
            'Waterproofing': 'Impermeabilización',
            'Concrete & flatwork': 'Concreto y pavimentos',
            'Commercial work': 'Trabajo comercial',
            'Commercial masonry': 'Albañilería comercial',
            'Lintels': 'Dinteles',
            'Home': 'Inicio',
            'Roofing in Chicago and the South Suburbs': 'Techos en Chicago y los suburbios del sur',
            'We take the old roof off, look at what is underneath, and build it back properly. Shingle roofs, flat roofs and commercial roofs — the same six-man crew that has been doing this since 1981.': 'Retiramos el techo viejo, revisamos lo que hay debajo y lo reconstruimos como corresponde. Techos de teja asfáltica, planos y comerciales, con el mismo equipo de seis personas desde 1981.',
            'A tear-off, done the way it should be': 'Un retiro completo, hecho como debe hacerse',
            'What a shingle roof replacement includes': 'Qué incluye el reemplazo de un techo de teja asfáltica',
            'Flat roofs': 'Techos planos',
            'Roof and wall usually fail together': 'El techo y la pared suelen fallar juntos',
            'Getting a price': 'Obtener un precio',
            'Tuckpointing in Chicago and the South Suburbs': 'Tuckpointing en Chicago y los suburbios del sur',
            'Mortar is the part of a brick wall that fails first. Tuckpointing is grinding the dead mortar out of the joints and packing new mortar in, so water runs off the wall instead of into it.': 'El mortero es la parte de una pared de ladrillo que falla primero. El tuckpointing consiste en retirar el mortero deteriorado de las juntas y colocar mortero nuevo, para que el agua escurra por la pared en lugar de entrar en ella.',
            'What tuckpointing actually is': 'Qué es realmente el tuckpointing',
            'How to tell you need it': 'Cómo saber si lo necesita',
            'Spot repairs and whole houses': 'Reparaciones puntuales y casas completas',
            'Matching the mortar': 'Igualar el mortero',
            'After the pointing': 'Después del tuckpointing',
            'Get a tuckpointing price': 'Obtenga un precio de tuckpointing',
            'Brick and stone repair': 'Reparación de ladrillo y piedra',
            'When the face of the brick is popping off, or a section of wall has moved, mortar work alone will not fix it. We cut the failed brick out and replace it with brick that matches.': 'Cuando la cara del ladrillo se desprende, o una sección de la pared se ha movido, el trabajo de mortero por sí solo no lo resuelve. Retiramos el ladrillo dañado y lo reemplazamos con ladrillo que combina.',
            'Spalling: why brick faces pop off': 'Descascarillado: por qué se desprende la cara del ladrillo',
            'Cracks, and which ones matter': 'Grietas, y cuáles importan',
            'Rebuilding a section of wall': 'Reconstruir una sección de pared',
            'Matching what is already there': 'Igualar lo que ya existe',
            'New brickwork, not just repair': 'Obra nueva de ladrillo, no solo reparación',
            'Get a brick repair price': 'Obtenga un precio de reparación de ladrillo',
            'Chimney repair, rebuilds and new chimneys': 'Reparación, reconstrucción y construcción de chimeneas',
            'A chimney takes weather on all four sides and gets looked at by nobody. We repair them, rebuild them from the roofline up, and build them new.': 'Una chimenea recibe el clima por sus cuatro lados y nadie la revisa. Las reparamos, las reconstruimos desde la línea del techo hacia arriba y las construimos nuevas.',
            'Why chimneys go before the rest of the house': 'Por qué las chimeneas se deterioran antes que el resto de la casa',
            'The crown is usually the culprit': 'La corona suele ser la causa',
            'What we do to chimneys': 'Lo que hacemos en las chimeneas',
            'Building a chimney new': 'Construir una chimenea nueva',
            'The flashing question': 'La cuestión del tapajuntas',
            'Get a chimney price': 'Obtenga un precio de chimenea',
            'The steel angle carrying the brick above your window rusts, and rusting steel swells. That swelling is what cracks the courses above your windows and lifts the brick off level.': 'El ángulo de acero que sostiene el ladrillo sobre su ventana se oxida, y el acero oxidado se expande. Esa expansión es lo que agrieta las hiladas sobre las ventanas y desnivela el ladrillo.',
            'What a lintel is and why it fails': 'Qué es un dintel y por qué falla',
            'How to spot it from the ground': 'Cómo detectarlo desde el suelo',
            'What the replacement involves': 'Qué implica el reemplazo',
            'Why this one should not wait': 'Por qué esto no debe esperar',
            'Get a lintel price': 'Obtenga un precio de dintel',
            'Parapet wall repair and rebuilds': 'Reparación y reconstrucción de muros de parapeto',
            'The parapet is the run of wall standing above your roofline. It is exposed on both faces and along the top, nobody ever sees it, and it is where a great many top-floor leaks actually start.': 'El parapeto es el tramo de pared que se levanta por encima de la línea del techo. Está expuesto por ambas caras y por arriba, nadie lo ve nunca, y es donde comienzan muchísimas filtraciones del último piso.',
            'Exposed on three sides': 'Expuesto por tres lados',
            'Why your top-floor ceiling is staining': 'Por qué se mancha el techo del último piso',
            'Coping stones and the top of the wall': 'Albardillas y la parte superior del muro',
            'Repair or rebuild': 'Reparar o reconstruir',
            'Get a parapet wall price': 'Obtenga un precio de muro de parapeto',
            'Masonry waterproofing and sealing': 'Impermeabilización y sellado de albañilería',
            'Sealing a brick wall extends the life of the repair underneath it. Sealing a wall that still needs repair traps the water inside and makes everything worse. The order matters more than the product.': 'Sellar una pared de ladrillo prolonga la vida de la reparación que hay debajo. Sellar una pared que aún necesita reparación atrapa el agua adentro y empeora todo. El orden importa más que el producto.',
            'What sealing does and does not do': 'Lo que el sellado hace y lo que no',
            'Why order of operations is the whole job': 'Por qué el orden de las tareas lo es todo',
            'When it is worth it': 'Cuándo vale la pena',
            'Coatings that seal the wall shut': 'Recubrimientos que sellan la pared por completo',
            'Get a waterproofing price': 'Obtenga un precio de impermeabilización',
            'Concrete driveways, walks, steps and slabs': 'Entradas, aceras, escalones y losas de concreto',
            'Flatwork is its own trade and we have been doing it alongside the brick for decades — driveways, public walks, porches, steps, garage and shed slabs, plus the cutting and removal to get the old one out.': 'El pavimento de concreto es un oficio propio y lo hacemos junto con el ladrillo desde hace décadas: entradas, aceras públicas, porches, escalones, losas de garaje y cobertizo, además del corte y retiro de lo viejo.',
            'What we pour': 'Lo que vertemos',
            'Why Chicago concrete cracks': 'Por qué se agrieta el concreto en Chicago',
            'Drainage, and where the water ends up': 'Drenaje, y a dónde va el agua',
            'Repair, replace, or leave it': 'Reparar, reemplazar o dejarlo',
            'Get a concrete price': 'Obtenga un precio de concreto',
            'Masonry work in Chicago and the South Suburbs': 'Trabajo de albañilería en Chicago y los suburbios del sur',
            'Forty-five years of brick and mortar on the South Side. Whatever the specific job turns out to be, it usually starts with the same question: where is the water getting in, and how long has it been doing it?': 'Cuarenta y cinco años de ladrillo y mortero en el South Side. Sea cual sea el trabajo, casi siempre empieza con la misma pregunta: ¿por dónde entra el agua y desde cuándo lo hace?',
            'Water is almost always the answer': 'El agua casi siempre es la respuesta',
            'The work, by type': 'El trabajo, por tipo',
            'Versatile enough to be worth one phone call': 'Lo bastante versátiles para una sola llamada',
            'Fitting the work to the budget': 'Ajustar el trabajo al presupuesto',
            'Get a masonry price': 'Obtenga un precio de albañilería',
            'Commercial roofing and masonry': 'Techos y albañilería comerciales',
            'Flat roofs, facades, parapets and lots. We work on commercial buildings across Chicago and the South Suburbs, and we schedule around your tenants and your trading hours rather than the other way round.': 'Techos planos, fachadas, parapetos y estacionamientos. Trabajamos en edificios comerciales de Chicago y los suburbios del sur, y organizamos el trabajo según sus inquilinos y su horario comercial, no al revés.',
            'Flat commercial roofs': 'Techos planos comerciales',
            'Commercial masonry and facades': 'Albañilería y fachadas comerciales',
            'Working around an operating business': 'Trabajar sin detener su negocio',
            'Concrete and lots': 'Concreto y estacionamientos',
            'Property managers and repeat work': 'Administradores de propiedades y trabajo recurrente',
            'Roofing contractor in Tinley Park, Illinois': 'Contratista de techos en Tinley Park, Illinois',
            'We work Tinley Park regularly and have done for years. Tear-offs, decking replacement, shingles and flat roofs, from a crew based in the South Suburbs rather than one driving in from three counties away.': 'Trabajamos en Tinley Park con regularidad desde hace años. Retiro de techos, reemplazo de entablado, tejas y techos planos, con un equipo de los suburbios del sur y no uno que viene de tres condados de distancia.',
            'What Tinley Park roofs are usually dealing with': 'A qué se enfrentan normalmente los techos de Tinley Park',
            'We check the deck before we shingle': 'Revisamos el entablado antes de colocar las tejas',
            'A local crew, not a storm chaser': 'Un equipo local, no cazadores de tormentas',
            'Masonry too, while we are out here': 'También albañilería, ya que estamos por aquí',
            'Get a Tinley Park roofing price': 'Obtenga un precio de techos en Tinley Park',
            'Chicago and the south suburbs. We are a six-man crew, not a franchise network, so our range is genuinely limited to the area we can service properly — and we would rather tell you that than take a deposit and a two-hour drive.': 'Chicago y los suburbios del sur. Somos un equipo de seis personas, no una red de franquicias, así que nuestro alcance se limita de verdad a la zona que podemos atender bien, y preferimos decírselo antes que aceptar un depósito y dos horas de camino.',
            'The towns we are in most weeks': 'Las ciudades donde estamos casi todas las semanas',
            'What the area has in common': 'Lo que la zona tiene en común',
            'What we can come out for': 'Para qué podemos ir',
            'Find out if we cover you': 'Averigüe si le damos servicio',
            'That page isn\'t here': 'Esa página no está aquí',
            'Home': 'Inicio',
            'Roofing': 'Techos',
            'Masonry': 'Albañilería',
            'Commercial Roofing': 'Techos comerciales',
            'Residential Roofing': 'Techos residenciales',
            'Residential': 'Residencial',
            'Masonry & Tuckpointing': 'Albañilería y tuckpointing',
            'Tuckpointing': 'Tuckpointing',
            'Service Areas': 'Áreas de servicio',
            'Service Area — Our Focus': 'Área principal de servicio',
            'Hero': 'Sección principal',
            'Lead form': 'Formulario de contacto',
            'Call now bar': 'Barra para llamar ahora',
            'Services and area': 'Servicios y área',
            'Call Now': 'Llame ahora',
            'Call: 312.485.3837': 'Llame: 312.485.3837',
            'Or Call: 312.485.3837': 'O llame: 312.485.3837',
            'Bold. Local. Reliable.': 'Sólido. Local. Confiable.',
            "The South Suburbs' Most Trusted Roofing Team": 'El equipo de techado de mayor confianza en los suburbios del sur',
            "Chicago's Trusted Masonry & Tuckpointing Experts": 'Expertos de confianza en albañilería y tuckpointing de Chicago',
            'Trusted Masonry': 'Albañilería de confianza',
            'Trusted Roof Repair': 'Reparación de techos de confianza',
            'the South Suburbs': 'los suburbios del sur',
            "John's Masonry and Roofing — Serving Chicago": "John's Masonry and Roofing — Sirviendo a Chicago",
            'Brick. Stone. Reliable.': 'Ladrillo. Piedra. Confianza.',
            'Phone': 'Teléfono',
            'Full name': 'Nombre completo',
            'Address (approx.)': 'Dirección (aproximada)',
            'Brief description': 'Descripción breve',
            'Upload photos (optional)': 'Suba fotos (opcional)',
            'Business name': 'Nombre del negocio',
            'Contact name': 'Nombre del contacto',
            'Email': 'Correo electrónico',
            'Business location': 'Ubicación del negocio',
            'Request My Inspection': 'Solicitar mi inspección',
            'Request My Estimate': 'Solicitar mi presupuesto',
            'Request Assessment': 'Solicitar evaluación',
            'Request Commercial Quote': 'Solicitar presupuesto comercial',
            'Get a Free Roof Inspection': 'Obtenga una inspección de techo gratis',
            'Get a Masonry Quote': 'Obtenga un presupuesto de albañilería',
            'Request Your Free Inspection': 'Solicite su inspección gratuita',
            'Request a Free Masonry Estimate': 'Solicite un presupuesto gratuito de albañilería',
            'Get Your Free Commercial Roof Assessment': 'Obtenga su evaluación gratuita de techo comercial',
            'Need immediate help? Call us now.': '¿Necesita ayuda inmediata? Llámenos ahora.',
            'Services We Provide': 'Servicios que ofrecemos',
            'Why local matters:': 'Por qué importa contratar localmente:',
            'Serving:': 'Atendemos:',
            'Same-Day Inspections': 'Inspecciones el mismo día',
            'Quick, honest assessments — we show up and evaluate.': 'Evaluaciones rápidas y honestas: llegamos y revisamos el problema.',
            'We guide you through claims so you get a fair outcome.': 'Lo guiamos durante el reclamo para ayudarle a obtener un resultado justo.',
            'Quick response times. Same-day when available. Upload photos to speed things up.': 'Respuesta rápida. Servicio el mismo día cuando esté disponible. Suba fotos para agilizar el proceso.',
            'Quick response times. Upload photos to get a faster quote.': 'Respuesta rápida. Suba fotos para recibir un presupuesto más pronto.',
            'Roof Repair & Leak Fixes': 'Reparación de techos y goteras',
            'Roof Replacement': 'Reemplazo de techo',
            'Gutters & Siding': 'Canaletas y revestimiento',
            'Quality shingles, drip edge, ice & water shield, and thorough cleanup — built to protect for years.': 'Tejas de calidad, borde de goteo, barrera contra hielo y agua y limpieza completa, todo instalado para proteger durante años.',
            'Fast response for leaks, storm damage, flashing repair, and small to mid-size fixes.': 'Respuesta rápida para goteras, daños por tormenta, reparación de tapajuntas y trabajos pequeños o medianos.',
            'We document damage, work with adjusters, and help get the right results — we fight for your home.': 'Documentamos los daños, trabajamos con los ajustadores y ayudamos a obtener el resultado correcto; defendemos su hogar.',
            'Protective upgrades to keep water away and protect your whole exterior.': 'Mejoras protectoras para alejar el agua y proteger todo el exterior.',
            "John's Roofing focuses on straightforward service: show up, diagnose honestly, and complete quality work on time. We treat your home like family — no games, no high-pressure sales.": "John's Roofing se enfoca en un servicio directo: llegar, diagnosticar con honestidad y completar un trabajo de calidad a tiempo. Tratamos su hogar como si fuera de nuestra familia, sin juegos ni ventas agresivas.",
            'Local crews. Local accountability. Real workmanship.': 'Equipo local. Responsabilidad local. Trabajo auténtico.',
            'Local crews know Chicago weather, local permitting, and neighborhood dynamics. We stand behind every job with accountability and a community-first approach.': 'Nuestros equipos conocen el clima de Chicago, los permisos locales y cada vecindario. Respaldamos cada trabajo con responsabilidad y compromiso con la comunidad.',
            'Tuckpointing Specialists': 'Especialistas en tuckpointing',
            'Brick & Stone Repair': 'Reparación de ladrillo y piedra',
            'Chimney & Concrete': 'Chimeneas y concreto',
            'Restore mortar joints for lasting strength and clean lines—also specialized in foundation work..': 'Restauramos juntas de mortero para lograr resistencia duradera y líneas limpias; también nos especializamos en cimentaciones.',
            'Fix spalling, cracks, or damaged facades with precision masonry work.': 'Reparamos desprendimientos, grietas y fachadas dañadas con trabajo de albañilería preciso.',
            'Expert restoration for chimneys, porches, and concrete surfaces.': 'Restauración experta de chimeneas, porches y superficies de concreto.',
            'Chicago & the South Suburbs — Oak Lawn, Tinley Park, Orland Park, Blue Island, Harvey, South Holland & more.': 'Chicago y los suburbios del sur: Oak Lawn, Tinley Park, Orland Park, Blue Island, Harvey, South Holland y más.',
            "John's Masonry and Roofing — Serving Chicago & the South Suburbs": "John's Masonry and Roofing — Sirviendo a Chicago y los suburbios del sur",
            "John's Roofing — Serving Chicago & the South Suburbs": "John's Roofing — Sirviendo a Chicago y los suburbios del sur",
            'Commercial Roofing Built for Chicago Business': 'Techos comerciales construidos para los negocios de Chicago',
            'Protect your investment with professional commercial roofing services. From flat roof installations to ongoing maintenance plans, we keep your business covered with minimal disruption and maximum reliability.': 'Proteja su inversión con servicios profesionales de techos comerciales. Desde instalaciones de techos planos hasta planes de mantenimiento, mantenemos su negocio protegido con mínima interrupción y máxima confiabilidad.',
            'Flat Roof Specialists': 'Especialistas en techos planos',
            'TPO, EPDM, and modified bitumen experts.': 'Expertos en TPO, EPDM y betún modificado.',
            'Emergency Response': 'Respuesta de emergencia',
            '24/7 emergency service for urgent leaks and storm damage.': 'Servicio de emergencia las 24 horas para goteras urgentes y daños por tormenta.',
            'Flexible Scheduling': 'Horarios flexibles',
            'Work around your business hours and schedule.': 'Trabajamos según el horario de su negocio.',
            'Transparent Pricing': 'Precios transparentes',
            'Flat Roof Installation': 'Instalación de techo plano',
            'Complete commercial flat roof systems designed for durability and weather resistance.': 'Sistemas completos de techo plano comercial diseñados para durar y resistir el clima.',
            'Roof Repair & Leak Detection': 'Reparación de techos y detección de goteras',
            'Fast response to commercial roof issues with minimal business disruption.': 'Respuesta rápida a problemas de techos comerciales con mínima interrupción del negocio.',
            'Roof Coatings': 'Recubrimientos para techos',
            'Protective coatings that restore and extend the life of your existing roof.': 'Recubrimientos protectores que restauran y prolongan la vida útil de su techo.',
            'Storm Damage Restoration': 'Restauración por daños de tormenta',
            'Gutter & Drainage Systems': 'Sistemas de canaletas y drenaje',
            'Commercial gutter installation and repair to protect your building foundation.': 'Instalación y reparación de canaletas comerciales para proteger los cimientos de su edificio.',
            'Maintenance Programs': 'Programas de mantenimiento',
            'Preventive maintenance plans that extend roof life and catch problems early.': 'Planes de mantenimiento preventivo que prolongan la vida del techo y detectan problemas a tiempo.',
            "Why Chicago Businesses Choose John's Roofing": "Por qué los negocios de Chicago eligen John's Roofing",
            'Commercial roofing experts': 'Expertos en techos comerciales',
            'Fully licensed commercial contractors with comprehensive liability coverage.': 'Contratistas comerciales con licencia y cobertura integral de responsabilidad.',
            'Minimal Disruption': 'Interrupción mínima',
            'We work nights, weekends, or around your business hours to minimize disruption.': 'Trabajamos de noche, los fines de semana o según su horario para minimizar interrupciones.',
            'Detailed Documentation': 'Documentación detallada',
            'Detailed reports': 'Informes detallados',
            'Photo reports, warranties, and maintenance records for your facility management.': 'Informes fotográficos, garantías y registros de mantenimiento para administrar sus instalaciones.',
            'Local Team': 'Equipo local',
            'Chicago-based crews who understand local building codes and weather challenges.': 'Equipos de Chicago que conocen los códigos de construcción locales y los retos del clima.',
            'Industries We Serve': 'Industrias que atendemos',
            'Retail stores • Office buildings • Warehouses • Restaurants • Medical facilities • Apartment complexes • Industrial facilities • Schools • Churches': 'Tiendas • Oficinas • Almacenes • Restaurantes • Centros médicos • Edificios de apartamentos • Instalaciones industriales • Escuelas • Iglesias',
            'TPO (Thermoplastic Polyolefin)': 'TPO (poliolefina termoplástica)',
            'EPDM (Rubber roofing)': 'EPDM (techo de caucho)',
            'Modified Bitumen': 'Betún modificado',
            'Built-up roofing (BUR)': 'Techo multicapa (BUR)',
            'Acrylic systems': 'Sistemas acrílicos',
            'Silicone coatings': 'Recubrimientos de silicona',
            'Rubber roof coating': 'Recubrimiento de techo de caucho',
            'Leak detection and repair': 'Detección y reparación de goteras',
            'Membrane repairs': 'Reparaciones de membrana',
            'Ponding water solutions': 'Soluciones para agua estancada',
            'Emergency patching': 'Parches de emergencia',
            'Emergency tarping': 'Colocación de lonas de emergencia',
            'Quarterly inspections': 'Inspecciones trimestrales',
            'Drain cleaning': 'Limpieza de desagües',
            'Minor repairs included': 'Reparaciones menores incluidas',
            'Fast repair timelines': 'Reparaciones rápidas',
            'Work with adjusters': 'Trabajo con ajustadores',
            'Energy-efficient options': 'Opciones de eficiencia energética',
            'Gutter guards': 'Protectores de canaletas',
            'Downspout repairs': 'Reparación de bajantes',
            'Scupper installation': 'Instalación de desagües laterales',
            'Internal drain systems': 'Sistemas de drenaje interno',
            'Maintenance Plans': 'Planes de mantenimiento',
            'Preventive care to extend roof life and avoid costly repairs.': 'Cuidado preventivo para prolongar la vida del techo y evitar reparaciones costosas.',
            "Fast response for businesses. We'll work around your schedule.": 'Respuesta rápida para negocios. Trabajaremos según su horario.',
            'What type of service are you looking for?': '¿Qué tipo de servicio necesita?',
            'Select one to get started:': 'Seleccione una opción para comenzar:',
            'What do you need?': '¿Qué necesita?',
            'Not sure yet? Browse our work.': '¿Todavía no está seguro? Vea nuestros trabajos.',
            '← Back to Services': '← Volver a servicios',
            'Our Work': 'Nuestros trabajos',
            'Quality craftsmanship across Chicago & the South Suburbs': 'Trabajo de calidad en Chicago y los suburbios del sur',
            'Commercial Concrete Work': 'Trabajo de concreto comercial',
            'Commercial concrete work': 'Trabajo de concreto comercial',
            'Residential driveway pour': 'Vaciado de entrada residencial',
            'Porch Concrete Work': 'Trabajo de concreto en porches',
            'Concrete porch work': 'Trabajo de concreto en porche',
            'Professional Concrete Cutting': 'Corte profesional de concreto',
            'Concrete cutting': 'Corte de concreto',
            'New Sidewalk Installation': 'Instalación de acera nueva',
            'Sidewalk installation': 'Instalación de acera',
            'Residential Driveway Expansion': 'Ampliación de entrada residencial',
            'Residential Driveway': 'Entrada residencial',
            'Concrete Repair Services': 'Servicios de reparación de concreto',
            'Concrete repair': 'Reparación de concreto',
            'Commercial Flat Roof Installation': 'Instalación de techo plano comercial',
            'Commercial flat roof': 'Techo plano comercial',
            'Commercial Roof Waterproofing': 'Impermeabilización de techo comercial',
            'Commercial roof coating': 'Recubrimiento de techo comercial',
            'TPO Roofing System': 'Sistema de techo TPO',
            'TPO roofing installation': 'Instalación de techo TPO',
            'Commercial Roof Repair': 'Reparación de techo comercial',
            'Commercial roof repair': 'Reparación de techo comercial',
            'Flat Roof Maintenance': 'Mantenimiento de techo plano',
            'Flat roof maintenance': 'Mantenimiento de techo plano',
            'Large-Scale Commercial Project': 'Proyecto comercial de gran escala',
            'Commercial roofing project': 'Proyecto de techo comercial',
            'Commercial Flat Roof System': 'Sistema de techo plano comercial',
            'Flat roof installation': 'Instalación de techo plano',
            'Masonry Foundation Repair': 'Reparación de cimentación de albañilería',
            'Masonry foundation work': 'Trabajo de cimentación de albañilería',
            'Chimney Masonry Work': 'Trabajo de albañilería en chimenea',
            'Chimney masonry work': 'Trabajo de albañilería en chimenea',
            'Welcome to John’s Masonry and Roofing': 'Bienvenido a John’s Masonry and Roofing',
            "Welcome to John's Masonry and Roofing": "Bienvenido a John's Masonry and Roofing",
            'Back to Home': 'Volver al inicio',
            'Thank You!': '¡Gracias!',
            "Your request has been received. A member of the John's Masonry and Roofing team will reach out soon to schedule your inspection or estimate.": "Recibimos su solicitud. Un miembro del equipo de John's Masonry and Roofing se comunicará pronto para programar su inspección o presupuesto.",
            'Describe your masonry needs': 'Describa sus necesidades de albañilería',
            'Brick repair, tuckpointing, chimney restoration...': 'Reparación de ladrillo, tuckpointing, restauración de chimenea...',
            'Leak, storm damage, missing shingles...': 'Gotera, daños por tormenta, tejas faltantes...',
            'New roof, leak repair, maintenance plan...': 'Techo nuevo, reparación de goteras, plan de mantenimiento...',
            'Chicago, IL or neighborhood': 'Chicago, IL o vecindario',
            'View full image:': 'Ver imagen completa:',
            'Close enlarged project photo': 'Cerrar foto ampliada del proyecto',
            'Enlarged project photo': 'Foto ampliada del proyecto'
            ,
            '"Local, honest, and they left the yard cleaner than they found it. Highly recommend."': '"Locales y honestos; dejaron el patio más limpio de como lo encontraron. Los recomiendo mucho."',
            "\"Professional, on time, and cleaned up completely after. My chimney hasn't looked this good in years.\"": '"Profesionales, puntuales y dejaron todo completamente limpio. Mi chimenea no se veía tan bien desde hace años."',
            '"They tuckpointed our whole back wall — looks brand new again. Great crew and fair pricing."': '"Rehicieron las juntas de toda la pared trasera y ahora parece nueva. Excelente equipo y precios justos."'
        },
        pl: {
            'A wall taken down and rebuilt': 'Mur rozebrany i odbudowany',
            'Repair rather than rebuild': 'Naprawa zamiast odbudowy',
            'What grinding out actually looks like': 'Jak naprawdę wygląda wycinanie spoin',
            'A chimney taken back and rebuilt': 'Komin rozebrany i odbudowany',
            'What a failed parapet looks like from the roof': 'Jak wygląda zniszczona attyka widziana z dachu',
            'Flat roof work': 'Prace na dachu płaskim',
            'Before': 'Przed',
            'During': 'W trakcie',
            'After': 'Po',
            'Taken down to what was still sound.': 'Rozebrane do miejsca, które było jeszcze zdrowe.',
            'Block core going back in, tied into the standing brick.': 'Rdzeń z bloczków wraca na miejsce, powiązany z istniejącą cegłą.',
            'Face brick laid and pointed at the corner.': 'Cegła licowa ułożona i wyspoinowana na narożniku.',
            'Finished run with the coping on.': 'Gotowy odcinek z założoną czapą.',
            'Brick repair in Roseland, Chicago.': 'Naprawa cegły w Roseland w Chicago.',
            'Grinding the joints out, Dolton.': 'Wycinanie spoin, Dolton.',
            'Working across the elevation.': 'Praca na całej elewacji.',
            'Failed brick out, rubble on the roof.': 'Zniszczona cegła usunięta, gruz na dachu.',
            'Rebuilt and pointed, new crown on.': 'Odbudowany i wyspoinowany, z nową czapą.',
            'Crown and cap finished.': 'Czapa i daszek gotowe.',
            'The joint behind the coping, opened up.': 'Rozwarta spoina za czapą muru.',
            'Brick breaking down under the cap.': 'Cegła krusząca się pod czapą.',
            'New edge metal at the roof line.': 'Nowa obróbka blacharska na linii dachu.',
            'Repointed and the coping sealed.': 'Wyspoinowane, czapa uszczelniona.',
            'Membrane down, edges sealed.': 'Membrana ułożona, krawędzie uszczelnione.',
            'The full run, finished.': 'Cały odcinek, gotowy.',
            'Brick wall rebuilt end to end': 'Mur ceglany odbudowany na całej długości',
            'Tuckpointing in Dolton': 'Spoinowanie w Dolton',
            'Chimney rebuilt and crowned': 'Komin odbudowany z nową czapą',
            'Parapet repointed, coping sealed': 'Attyka wyspoinowana, czapa uszczelniona',
            'Flat roof, finished': 'Dach płaski, gotowy',
            'Light mode': 'Tryb jasny',
            'Dark mode': 'Tryb ciemny',
            'Switch between light and dark mode': 'Przełącz między trybem jasnym a ciemnym',
            'Forty-five years working the same neighborhoods. We are still here when the mortar has to be matched a second time.': 'Czterdzieści pięć lat pracy w tych samych dzielnicach. Nadal jesteśmy, gdy zaprawę trzeba dobrać po raz drugi.',
            'The people who quote your job are the people who do it. Small enough to answer the phone, big enough to strip a roof in a day.': 'Ci, którzy wyceniają robotę, sami ją wykonują. Na tyle mali, żeby odebrać telefon, i na tyle duzi, żeby zerwać dach w jeden dzień.',
            'A spot repair and a full rebuild are both real answers. We will tell you which one your wall actually needs.': 'Naprawa punktowa i pełna odbudowa to obie realne odpowiedzi. Powiemy, której faktycznie potrzebuje Państwa ściana.',
            'See the full service area →': 'Zobacz cały obszar działania →',
            'A few photos of the wall, taken straight on and from a few feet back, tell us a lot.': 'Kilka zdjęć ściany, zrobionych na wprost i z kilku metrów, mówi nam bardzo dużo.',
            'A photo from the ground, and one of any staining on the ceiling inside, both help.': 'Zdjęcie z poziomu ziemi oraz zdjęcie ewentualnych zacieków na suficie w środku bardzo pomagają.',
            'A photo of the worst wall tells us most of what we need to know.': 'Zdjęcie ściany w najgorszym stanie mówi nam niemal wszystko, co musimy wiedzieć.',
            'A photo taken straight on at the top corner of the window shows us most of it.': 'Zdjęcie zrobione na wprost górnego narożnika okna pokazuje nam większość problemu.',
            'Building type, rough square footage and access notes help us scope it accurately.': 'Rodzaj budynku, przybliżony metraż i uwagi o dostępie pozwalają nam dokładnie oszacować zakres prac.',
            'If you can safely photograph the wall from the roof, send that. If not, we will look.': 'Jeśli może Pan/Pani bezpiecznie sfotografować mur z dachu, prosimy o zdjęcie. Jeśli nie, sprawdzimy to sami.',
            'Not sure if you are in range? Send the address and we will tell you straight.': 'Nie wiadomo, czy adres mieści się w naszym zasięgu? Prosimy go przesłać, a odpowiemy wprost.',
            'Photos of the damaged area, taken straight on, are the most useful thing you can send.': 'Zdjęcia uszkodzonego miejsca zrobione na wprost są najbardziej przydatne.',
            'Photos of the roof and of any ceiling staining inside help a lot.': 'Zdjęcia dachu oraz ewentualnych zacieków na suficie w środku bardzo pomagają.',
            'Rough dimensions and a photo of the existing surface get you a much closer number.': 'Przybliżone wymiary i zdjęcie obecnej nawierzchni pozwolą podać znacznie dokładniejszą kwotę.',
            'Tell us the age of the building and whether the joints have been pointed recently.': 'Prosimy podać wiek budynku i to, czy spoiny były ostatnio odnawiane.',
            'Tell us the street and roughly how old the roof is.': 'Prosimy podać ulicę i mniej więcej wiek dachu.',
            'Tell us what you are looking at. Photos help us give you a straight answer faster.': 'Prosimy opisać, co Państwo widzą. Zdjęcia pozwalają nam szybciej udzielić konkretnej odpowiedzi.',
            'Age of roof, leaks, missing shingles...': 'Wiek dachu, przecieki, brakujące gonty...',
            'Age of roof, leaks, storm damage...': 'Wiek dachu, przecieki, szkody po burzy...',
            'Ceiling stains on the top floor, crumbling wall above the roof...': 'Zacieki na suficie najwyższego piętra, krusząca się ściana nad dachem...',
            'Cracked driveway, sunken walk, new patio slab...': 'Pęknięty podjazd, zapadnięty chodnik, nowa płyta tarasu...',
            'Cracked mortar, leaking roof, chimney work...': 'Pęknięta zaprawa, przeciekający dach, prace przy kominie...',
            'Crumbling brick faces, a cracked wall, bulging section...': 'Kruszące się lico cegły, pęknięta ściana, wybrzuszony fragment...',
            'Crumbling chimney, leaning stack, water stains near the fireplace...': 'Kruszący się komin, przechylony trzon, zacieki przy kominku...',
            'Crumbling mortar, damaged brick, chimney work...': 'Krusząca się zaprawa, uszkodzona cegła, prace przy kominie...',
            'Crumbling mortar, gaps between bricks, white staining...': 'Krusząca się zaprawa, ubytki między cegłami, białe wykwity...',
            'Damp interior walls, chalky white staining, previously sealed brick...': 'Wilgotne ściany wewnętrzne, białe wykwity, cegła wcześniej impregnowana...',
            'Flat roof leak, facade repair, parking lot concrete...': 'Przeciek dachu płaskiego, naprawa elewacji, beton na parkingu...',
            'Rust stains above a window, cracked brick over an opening...': 'Rdzawe zacieki nad oknem, pęknięta cegła nad otworem...',
            'What you need, and where you are...': 'Czego Państwo potrzebują i gdzie się znajdują...',
            'Roofing': 'Dachy',
            'Masonry': 'Murarstwo',
            'Tuckpointing': 'Spoinowanie',
            'Chimneys': 'Kominy',
            'Concrete': 'Beton',
            'Commercial': 'Obiekty komercyjne',
            'Service Area': 'Obszar działania',
            'Service area': 'Obszar działania',
            'Brick, mortar and roofs since 1981': 'Cegła, zaprawa i dachy od 1981 roku',
            'Get a Free Estimate': 'Bezpłatna wycena',
            'Get a Free Roofing Estimate': 'Bezpłatna wycena dachu',
            'Get a Free Tuckpointing Estimate': 'Bezpłatna wycena spoinowania',
            'Get a Free Brick Repair Estimate': 'Bezpłatna wycena naprawy cegły',
            'Get a Free Chimney Estimate': 'Bezpłatna wycena komina',
            'Get a Free Lintel Estimate': 'Bezpłatna wycena nadproża',
            'Get a Free Parapet Estimate': 'Bezpłatna wycena attyki',
            'Get a Free Waterproofing Estimate': 'Bezpłatna wycena hydroizolacji',
            'Get a Free Concrete Estimate': 'Bezpłatna wycena betonu',
            'Get a Free Masonry Estimate': 'Bezpłatna wycena prac murarskich',
            'Request a Commercial Estimate': 'Zamów wycenę komercyjną',
            'Request My Estimate': 'Zamawiam wycenę',
            'Back to the homepage': 'Powrót na stronę główną',
            'Free Estimate': 'Bezpłatna wycena',
            'Request a Free Estimate': 'Zamów bezpłatną wycenę',
            'Free Roofing Estimate': 'Bezpłatna wycena dachu',
            'Free Tuckpointing Estimate': 'Bezpłatna wycena spoinowania',
            'Free Brick Repair Estimate': 'Bezpłatna wycena naprawy cegły',
            'Free Chimney Estimate': 'Bezpłatna wycena komina',
            'Free Lintel Estimate': 'Bezpłatna wycena nadproża',
            'Free Parapet Estimate': 'Bezpłatna wycena attyki',
            'Free Waterproofing Estimate': 'Bezpłatna wycena hydroizolacji',
            'Free Concrete Estimate': 'Bezpłatna wycena betonu',
            'Free Masonry Estimate': 'Bezpłatna wycena prac murarskich',
            'Commercial Estimate': 'Wycena komercyjna',
            'Forty-five years of brick, mortar and roofs on the South Side': 'Czterdzieści pięć lat cegły, zaprawy i dachów na South Side',
            'John\'s Masonry and Roofing has been working in Chicago and the South Suburbs since 1981. Six men, one crew, no subcontracted strangers showing up at your house. We tuckpoint, we lay brick, we build chimneys, we pour concrete, and we tear off and replace roofs — shingle, flat and commercial.': 'John\'s Masonry and Roofing pracuje w Chicago i na południowych przedmieściach od 1981 roku. Sześciu ludzi, jedna ekipa, żadnych obcych podwykonawców pod Państwa domem. Wykonujemy spoinowanie, murujemy, budujemy kominy, wylewamy beton oraz zrywamy i wymieniamy dachy — gontowe, płaskie i komercyjne.',
            'Since 1981': 'Od 1981 roku',
            'A six-man crew': 'Sześcioosobowa ekipa',
            'Built to your budget': 'Dopasowane do Państwa budżetu',
            'What we do': 'Czym się zajmujemy',
            'Recent jobs': 'Ostatnie realizacje',
            'Our work': 'Nasze prace',
            'Where we work': 'Gdzie pracujemy',
            'Full roof replacement in Harvey': 'Pełna wymiana dachu w Harvey',
            'A house tuckpointed top to bottom': 'Dom wyspoinowany od góry do dołu',
            'Decking, paint and brick flower beds': 'Taras, malowanie i ceglane rabaty',
            'Brick & stone repair': 'Naprawa cegły i kamienia',
            'Chimney repair & new chimneys': 'Naprawa i budowa kominów',
            'Lintel replacement': 'Wymiana nadproży',
            'Parapet walls': 'Attyki',
            'Masonry waterproofing': 'Hydroizolacja muru',
            'Waterproofing': 'Hydroizolacja',
            'Concrete & flatwork': 'Beton i nawierzchnie',
            'Commercial work': 'Prace komercyjne',
            'Commercial masonry': 'Murarstwo komercyjne',
            'Lintels': 'Nadproża',
            'Home': 'Strona główna',
            'Roofing in Chicago and the South Suburbs': 'Dachy w Chicago i na południowych przedmieściach',
            'We take the old roof off, look at what is underneath, and build it back properly. Shingle roofs, flat roofs and commercial roofs — the same six-man crew that has been doing this since 1981.': 'Zrywamy stary dach, sprawdzamy, co jest pod spodem, i odbudowujemy go porządnie. Dachy gontowe, płaskie i komercyjne — ta sama sześcioosobowa ekipa od 1981 roku.',
            'A tear-off, done the way it should be': 'Zerwanie dachu wykonane tak, jak należy',
            'What a shingle roof replacement includes': 'Co obejmuje wymiana dachu gontowego',
            'Flat roofs': 'Dachy płaskie',
            'Roof and wall usually fail together': 'Dach i ściana zwykle psują się razem',
            'Getting a price': 'Jak uzyskać wycenę',
            'Tuckpointing in Chicago and the South Suburbs': 'Spoinowanie w Chicago i na południowych przedmieściach',
            'Mortar is the part of a brick wall that fails first. Tuckpointing is grinding the dead mortar out of the joints and packing new mortar in, so water runs off the wall instead of into it.': 'Zaprawa jest tym elementem muru, który psuje się najszybciej. Spoinowanie polega na wyszlifowaniu zniszczonej zaprawy ze spoin i wypełnieniu ich nową, aby woda spływała po ścianie, a nie wnikała w nią.',
            'What tuckpointing actually is': 'Czym właściwie jest spoinowanie',
            'How to tell you need it': 'Jak rozpoznać, że jest potrzebne',
            'Spot repairs and whole houses': 'Naprawy punktowe i całe domy',
            'Matching the mortar': 'Dobór zaprawy',
            'After the pointing': 'Po spoinowaniu',
            'Get a tuckpointing price': 'Zamów wycenę spoinowania',
            'Brick and stone repair': 'Naprawa cegły i kamienia',
            'When the face of the brick is popping off, or a section of wall has moved, mortar work alone will not fix it. We cut the failed brick out and replace it with brick that matches.': 'Gdy lico cegły odpada albo fragment ściany się przesunął, sama zaprawa tego nie naprawi. Wycinamy zniszczoną cegłę i wstawiamy nową, dopasowaną do istniejącej.',
            'Spalling: why brick faces pop off': 'Łuszczenie: dlaczego odpada lico cegły',
            'Cracks, and which ones matter': 'Pęknięcia i te, które mają znaczenie',
            'Rebuilding a section of wall': 'Odbudowa fragmentu ściany',
            'Matching what is already there': 'Dopasowanie do tego, co już jest',
            'New brickwork, not just repair': 'Nowe murowanie, nie tylko naprawa',
            'Get a brick repair price': 'Zamów wycenę naprawy cegły',
            'Chimney repair, rebuilds and new chimneys': 'Naprawa, przebudowa i budowa kominów',
            'A chimney takes weather on all four sides and gets looked at by nobody. We repair them, rebuild them from the roofline up, and build them new.': 'Komin przyjmuje pogodę z czterech stron i nikt na niego nie patrzy. Naprawiamy kominy, odbudowujemy je od linii dachu w górę i budujemy nowe.',
            'Why chimneys go before the rest of the house': 'Dlaczego kominy niszczeją szybciej niż reszta domu',
            'The crown is usually the culprit': 'Zwykle winna jest czapa komina',
            'What we do to chimneys': 'Co robimy przy kominach',
            'Building a chimney new': 'Budowa nowego komina',
            'The flashing question': 'Kwestia obróbki blacharskiej',
            'Get a chimney price': 'Zamów wycenę komina',
            'The steel angle carrying the brick above your window rusts, and rusting steel swells. That swelling is what cracks the courses above your windows and lifts the brick off level.': 'Stalowy kątownik podtrzymujący cegłę nad oknem rdzewieje, a rdzewiejąca stal zwiększa objętość. To właśnie ten nacisk pęka warstwy cegieł nad oknami i wypycha mur z poziomu.',
            'What a lintel is and why it fails': 'Czym jest nadproże i dlaczego zawodzi',
            'How to spot it from the ground': 'Jak to rozpoznać z poziomu ziemi',
            'What the replacement involves': 'Na czym polega wymiana',
            'Why this one should not wait': 'Dlaczego z tym nie należy zwlekać',
            'Get a lintel price': 'Zamów wycenę nadproża',
            'Parapet wall repair and rebuilds': 'Naprawa i odbudowa attyk',
            'The parapet is the run of wall standing above your roofline. It is exposed on both faces and along the top, nobody ever sees it, and it is where a great many top-floor leaks actually start.': 'Attyka to fragment muru wystający ponad linię dachu. Jest wystawiona na pogodę z obu stron i od góry, nikt na nią nie zagląda, a to właśnie tam zaczyna się bardzo wiele przecieków na najwyższym piętrze.',
            'Exposed on three sides': 'Wystawiona z trzech stron',
            'Why your top-floor ceiling is staining': 'Dlaczego plami się sufit na najwyższym piętrze',
            'Coping stones and the top of the wall': 'Czapy murowe i górna część ściany',
            'Repair or rebuild': 'Naprawa czy odbudowa',
            'Get a parapet wall price': 'Zamów wycenę attyki',
            'Masonry waterproofing and sealing': 'Hydroizolacja i impregnacja muru',
            'Sealing a brick wall extends the life of the repair underneath it. Sealing a wall that still needs repair traps the water inside and makes everything worse. The order matters more than the product.': 'Impregnacja muru przedłuża trwałość naprawy, która jest pod spodem. Impregnacja ściany, która nadal wymaga naprawy, zamyka wodę w środku i pogarsza sprawę. Kolejność ma większe znaczenie niż sam preparat.',
            'What sealing does and does not do': 'Co daje impregnacja, a czego nie',
            'Why order of operations is the whole job': 'Dlaczego kolejność prac to podstawa',
            'When it is worth it': 'Kiedy warto',
            'Coatings that seal the wall shut': 'Powłoki, które całkowicie zamykają ścianę',
            'Get a waterproofing price': 'Zamów wycenę hydroizolacji',
            'Concrete driveways, walks, steps and slabs': 'Podjazdy, chodniki, schody i płyty betonowe',
            'Flatwork is its own trade and we have been doing it alongside the brick for decades — driveways, public walks, porches, steps, garage and shed slabs, plus the cutting and removal to get the old one out.': 'Nawierzchnie betonowe to osobne rzemiosło i wykonujemy je obok prac murarskich od dziesięcioleci — podjazdy, chodniki miejskie, ganki, schody, płyty pod garaże i szopy, a także cięcie i wywóz starego betonu.',
            'What we pour': 'Co wylewamy',
            'Why Chicago concrete cracks': 'Dlaczego beton w Chicago pęka',
            'Drainage, and where the water ends up': 'Odwodnienie i to, gdzie trafia woda',
            'Repair, replace, or leave it': 'Naprawić, wymienić czy zostawić',
            'Get a concrete price': 'Zamów wycenę betonu',
            'Masonry work in Chicago and the South Suburbs': 'Prace murarskie w Chicago i na południowych przedmieściach',
            'Forty-five years of brick and mortar on the South Side. Whatever the specific job turns out to be, it usually starts with the same question: where is the water getting in, and how long has it been doing it?': 'Czterdzieści pięć lat cegły i zaprawy na South Side. Niezależnie od tego, jaka to konkretnie robota, zwykle zaczyna się od tego samego pytania: którędy wchodzi woda i od jak dawna to robi?',
            'Water is almost always the answer': 'Odpowiedzią prawie zawsze jest woda',
            'The work, by type': 'Zakres prac według rodzaju',
            'Versatile enough to be worth one phone call': 'Na tyle wszechstronni, że wystarczy jeden telefon',
            'Fitting the work to the budget': 'Dopasowanie prac do budżetu',
            'Get a masonry price': 'Zamów wycenę prac murarskich',
            'Commercial roofing and masonry': 'Dachy i murarstwo komercyjne',
            'Flat roofs, facades, parapets and lots. We work on commercial buildings across Chicago and the South Suburbs, and we schedule around your tenants and your trading hours rather than the other way round.': 'Dachy płaskie, elewacje, attyki i parkingi. Pracujemy przy budynkach komercyjnych w Chicago i na południowych przedmieściach, dopasowując harmonogram do Państwa najemców i godzin pracy, a nie odwrotnie.',
            'Flat commercial roofs': 'Płaskie dachy komercyjne',
            'Commercial masonry and facades': 'Murarstwo komercyjne i elewacje',
            'Working around an operating business': 'Praca bez zamykania firmy',
            'Concrete and lots': 'Beton i parkingi',
            'Property managers and repeat work': 'Zarządcy nieruchomości i stała współpraca',
            'Roofing contractor in Tinley Park, Illinois': 'Wykonawca dachów w Tinley Park w stanie Illinois',
            'We work Tinley Park regularly and have done for years. Tear-offs, decking replacement, shingles and flat roofs, from a crew based in the South Suburbs rather than one driving in from three counties away.': 'Pracujemy w Tinley Park regularnie od lat. Zrywanie dachów, wymiana poszycia, gont i dachy płaskie — ekipa z południowych przedmieść, a nie firma dojeżdżająca z trzech hrabstw dalej.',
            'What Tinley Park roofs are usually dealing with': 'Z czym zwykle mają problem dachy w Tinley Park',
            'We check the deck before we shingle': 'Sprawdzamy poszycie, zanim położymy gont',
            'A local crew, not a storm chaser': 'Lokalna ekipa, a nie firma jeżdżąca za burzami',
            'Masonry too, while we are out here': 'Przy okazji także prace murarskie',
            'Get a Tinley Park roofing price': 'Zamów wycenę dachu w Tinley Park',
            'Chicago and the south suburbs. We are a six-man crew, not a franchise network, so our range is genuinely limited to the area we can service properly — and we would rather tell you that than take a deposit and a two-hour drive.': 'Chicago i południowe przedmieścia. Jesteśmy sześcioosobową ekipą, a nie siecią franczyzową, więc nasz zasięg naprawdę ogranicza się do obszaru, który możemy porządnie obsłużyć — i wolimy to powiedzieć wprost, niż przyjąć zaliczkę i jechać dwie godziny.',
            'The towns we are in most weeks': 'Miejscowości, w których bywamy niemal co tydzień',
            'What the area has in common': 'Co łączy ten obszar',
            'What we can come out for': 'Do czego możemy przyjechać',
            'Find out if we cover you': 'Sprawdź, czy obsługujemy Twój adres',
            'That page isn\'t here': 'Tej strony tu nie ma',
            'Home': 'Strona główna',
            'Roofing': 'Dachy',
            'Masonry': 'Usługi murarskie',
            'Commercial Roofing': 'Dachy komercyjne',
            'Residential Roofing': 'Dachy budynków mieszkalnych',
            'Residential': 'Budynki mieszkalne',
            'Masonry & Tuckpointing': 'Prace murarskie i spoinowanie',
            'Tuckpointing': 'Spoinowanie',
            'Service Areas': 'Obszar działania',
            'Service Area — Our Focus': 'Główny obszar działania',
            'Hero': 'Sekcja główna',
            'Lead form': 'Formularz kontaktowy',
            'Call now bar': 'Pasek szybkiego połączenia',
            'Services and area': 'Usługi i obszar',
            'Call Now': 'Zadzwoń teraz',
            'Call: 312.485.3837': 'Zadzwoń: 312.485.3837',
            'Or Call: 312.485.3837': 'Lub zadzwoń: 312.485.3837',
            'Bold. Local. Reliable.': 'Solidnie. Lokalnie. Niezawodnie.',
            "The South Suburbs' Most Trusted Roofing Team": 'Najbardziej zaufana ekipa dekarska na południowych przedmieściach',
            "Chicago's Trusted Masonry & Tuckpointing Experts": 'Zaufani specjaliści od prac murarskich i spoinowania w Chicago',
            'Trusted Masonry': 'Solidne usługi murarskie',
            'Trusted Roof Repair': 'Solidna naprawa dachów',
            'the South Suburbs': 'południowe przedmieścia',
            "John's Masonry and Roofing — Serving Chicago": "John's Masonry and Roofing — Chicago i okolice",
            'Brick. Stone. Reliable.': 'Cegła. Kamień. Solidność.',
            'Phone': 'Telefon',
            'Full name': 'Imię i nazwisko',
            'Address (approx.)': 'Przybliżony adres',
            'Brief description': 'Krótki opis',
            'Upload photos (optional)': 'Dodaj zdjęcia (opcjonalnie)',
            'Business name': 'Nazwa firmy',
            'Contact name': 'Osoba kontaktowa',
            'Email': 'E-mail',
            'Business location': 'Lokalizacja firmy',
            'Request My Inspection': 'Poproś o inspekcję',
            'Request My Estimate': 'Poproś o wycenę',
            'Request Assessment': 'Poproś o ocenę',
            'Request Commercial Quote': 'Poproś o wycenę komercyjną',
            'Get a Free Roof Inspection': 'Umów bezpłatną inspekcję dachu',
            'Get a Masonry Quote': 'Poproś o wycenę prac murarskich',
            'Request Your Free Inspection': 'Umów bezpłatną inspekcję',
            'Request a Free Masonry Estimate': 'Poproś o bezpłatną wycenę prac murarskich',
            'Get Your Free Commercial Roof Assessment': 'Umów bezpłatną ocenę dachu komercyjnego',
            'Need immediate help? Call us now.': 'Potrzebujesz natychmiastowej pomocy? Zadzwoń.',
            'Services We Provide': 'Nasze usługi',
            'Why local matters:': 'Dlaczego warto wybrać lokalną firmę:',
            'Serving:': 'Obsługujemy:',
            'Same-Day Inspections': 'Inspekcje tego samego dnia',
            'Quick, honest assessments — we show up and evaluate.': 'Szybka i uczciwa ocena — przyjeżdżamy i sprawdzamy problem.',
            'We guide you through claims so you get a fair outcome.': 'Pomagamy przejść przez proces zgłoszenia szkody, aby uzyskać uczciwy wynik.',
            'Quick response times. Same-day when available. Upload photos to speed things up.': 'Szybka reakcja. W miarę dostępności usługa tego samego dnia. Dodaj zdjęcia, aby przyspieszyć wycenę.',
            'Quick response times. Upload photos to get a faster quote.': 'Szybka reakcja. Dodaj zdjęcia, aby szybciej otrzymać wycenę.',
            'Roof Repair & Leak Fixes': 'Naprawa dachów i przecieków',
            'Roof Replacement': 'Wymiana dachu',
            'Gutters & Siding': 'Rynny i siding',
            'Quality shingles, drip edge, ice & water shield, and thorough cleanup — built to protect for years.': 'Wysokiej jakości gonty, obróbki, membrana przeciw wodzie i lodowi oraz dokładne sprzątanie — ochrona na lata.',
            'Fast response for leaks, storm damage, flashing repair, and small to mid-size fixes.': 'Szybka pomoc przy przeciekach, szkodach po burzy, naprawie obróbek i mniejszych pracach.',
            'We document damage, work with adjusters, and help get the right results — we fight for your home.': 'Dokumentujemy szkody, współpracujemy z rzeczoznawcami i pomagamy uzyskać właściwy rezultat — działamy w interesie Twojego domu.',
            'Protective upgrades to keep water away and protect your whole exterior.': 'Ulepszenia odprowadzające wodę i chroniące cały budynek.',
            "John's Roofing focuses on straightforward service: show up, diagnose honestly, and complete quality work on time. We treat your home like family — no games, no high-pressure sales.": "John's Roofing stawia na prostą obsługę: przyjeżdżamy, uczciwie diagnozujemy i terminowo wykonujemy dobrą pracę. Traktujemy Twój dom jak własny, bez gierek i natarczywej sprzedaży.",
            'Local crews. Local accountability. Real workmanship.': 'Lokalna ekipa. Lokalna odpowiedzialność. Prawdziwe rzemiosło.',
            'Local crews know Chicago weather, local permitting, and neighborhood dynamics. We stand behind every job with accountability and a community-first approach.': 'Nasze ekipy znają pogodę Chicago, lokalne pozwolenia i specyfikę dzielnic. Bierzemy odpowiedzialność za każdą pracę i działamy z myślą o lokalnej społeczności.',
            'Tuckpointing Specialists': 'Specjaliści od spoinowania',
            'Brick & Stone Repair': 'Naprawa cegły i kamienia',
            'Chimney & Concrete': 'Kominy i beton',
            'Restore mortar joints for lasting strength and clean lines—also specialized in foundation work..': 'Odnawiamy spoiny, zapewniając trwałość i estetykę; specjalizujemy się także w fundamentach.',
            'Fix spalling, cracks, or damaged facades with precision masonry work.': 'Precyzyjnie naprawiamy łuszczenie, pęknięcia i uszkodzone elewacje.',
            'Expert restoration for chimneys, porches, and concrete surfaces.': 'Fachowa renowacja kominów, ganków i powierzchni betonowych.',
            'Chicago & the South Suburbs — Oak Lawn, Tinley Park, Orland Park, Blue Island, Harvey, South Holland & more.': 'Chicago i południowe przedmieścia — Oak Lawn, Tinley Park, Orland Park, Blue Island, Harvey, South Holland i inne.',
            "John's Masonry and Roofing — Serving Chicago & the South Suburbs": "John's Masonry and Roofing — Chicago i południowe przedmieścia",
            "John's Roofing — Serving Chicago & the South Suburbs": "John's Roofing — Chicago i południowe przedmieścia",
            'Commercial Roofing Built for Chicago Business': 'Dachy komercyjne dla firm w Chicago',
            'Protect your investment with professional commercial roofing services. From flat roof installations to ongoing maintenance plans, we keep your business covered with minimal disruption and maximum reliability.': 'Chroń swoją inwestycję dzięki profesjonalnym usługom dachowym. Od montażu płaskich dachów po stałe plany konserwacji — zapewniamy ochronę firmy przy minimalnych zakłóceniach.',
            'Flat Roof Specialists': 'Specjaliści od dachów płaskich',
            'TPO, EPDM, and modified bitumen experts.': 'Specjaliści od TPO, EPDM i pap modyfikowanych.',
            'Emergency Response': 'Pomoc awaryjna',
            '24/7 emergency service for urgent leaks and storm damage.': 'Całodobowa pomoc przy pilnych przeciekach i szkodach po burzy.',
            'Flexible Scheduling': 'Elastyczne terminy',
            'Work around your business hours and schedule.': 'Dostosowujemy pracę do godzin działania firmy.',
            'Transparent Pricing': 'Przejrzyste ceny',
            'Flat Roof Installation': 'Montaż dachów płaskich',
            'Complete commercial flat roof systems designed for durability and weather resistance.': 'Kompletne systemy płaskich dachów komercyjnych zaprojektowane z myślą o trwałości i odporności na pogodę.',
            'Roof Repair & Leak Detection': 'Naprawa dachów i wykrywanie przecieków',
            'Fast response to commercial roof issues with minimal business disruption.': 'Szybka reakcja na problemy dachowe przy minimalnych zakłóceniach pracy firmy.',
            'Roof Coatings': 'Powłoki dachowe',
            'Protective coatings that restore and extend the life of your existing roof.': 'Powłoki ochronne odnawiające i przedłużające żywotność istniejącego dachu.',
            'Storm Damage Restoration': 'Naprawa szkód po burzy',
            'Gutter & Drainage Systems': 'Rynny i systemy odwodnienia',
            'Commercial gutter installation and repair to protect your building foundation.': 'Montaż i naprawa rynien komercyjnych chroniących fundamenty budynku.',
            'Maintenance Programs': 'Programy konserwacji',
            'Preventive maintenance plans that extend roof life and catch problems early.': 'Plany konserwacji zapobiegawczej, które przedłużają życie dachu i wcześnie wykrywają problemy.',
            "Why Chicago Businesses Choose John's Roofing": "Dlaczego firmy w Chicago wybierają John's Roofing",
            'Commercial roofing experts': 'Eksperci od dachów komercyjnych',
            'Fully licensed commercial contractors with comprehensive liability coverage.': 'Licencjonowani wykonawcy komercyjni z pełnym ubezpieczeniem odpowiedzialności.',
            'Minimal Disruption': 'Minimalne zakłócenia',
            'We work nights, weekends, or around your business hours to minimize disruption.': 'Pracujemy nocami, w weekendy lub poza godzinami działania firmy, aby ograniczyć zakłócenia.',
            'Detailed Documentation': 'Szczegółowa dokumentacja',
            'Detailed reports': 'Szczegółowe raporty',
            'Photo reports, warranties, and maintenance records for your facility management.': 'Raporty fotograficzne, gwarancje i dokumentacja konserwacji dla zarządzania obiektem.',
            'Local Team': 'Lokalna ekipa',
            'Chicago-based crews who understand local building codes and weather challenges.': 'Ekipy z Chicago, które znają lokalne przepisy budowlane i wyzwania pogodowe.',
            'Industries We Serve': 'Obsługiwane branże',
            'Retail stores • Office buildings • Warehouses • Restaurants • Medical facilities • Apartment complexes • Industrial facilities • Schools • Churches': 'Sklepy • Biurowce • Magazyny • Restauracje • Placówki medyczne • Budynki wielorodzinne • Obiekty przemysłowe • Szkoły • Kościoły',
            'TPO (Thermoplastic Polyolefin)': 'TPO (termoplastyczna poliolefina)',
            'EPDM (Rubber roofing)': 'EPDM (pokrycie gumowe)',
            'Modified Bitumen': 'Papa modyfikowana',
            'Built-up roofing (BUR)': 'Dach wielowarstwowy (BUR)',
            'Acrylic systems': 'Systemy akrylowe',
            'Silicone coatings': 'Powłoki silikonowe',
            'Rubber roof coating': 'Powłoka gumowa',
            'Leak detection and repair': 'Wykrywanie i naprawa przecieków',
            'Membrane repairs': 'Naprawa membran',
            'Ponding water solutions': 'Rozwiązania problemu stojącej wody',
            'Emergency patching': 'Awaryjne łatanie',
            'Emergency tarping': 'Awaryjne zabezpieczenie plandeką',
            'Quarterly inspections': 'Inspekcje kwartalne',
            'Drain cleaning': 'Czyszczenie odpływów',
            'Minor repairs included': 'Drobne naprawy w cenie',
            'Fast repair timelines': 'Szybkie terminy napraw',
            'Work with adjusters': 'Współpraca z rzeczoznawcami',
            'Energy-efficient options': 'Rozwiązania energooszczędne',
            'Gutter guards': 'Osłony rynien',
            'Downspout repairs': 'Naprawa rur spustowych',
            'Scupper installation': 'Montaż wpustów bocznych',
            'Internal drain systems': 'Wewnętrzne systemy odwodnienia',
            'Maintenance Plans': 'Plany konserwacji',
            'Preventive care to extend roof life and avoid costly repairs.': 'Konserwacja zapobiegawcza wydłużająca życie dachu i ograniczająca kosztowne naprawy.',
            "Fast response for businesses. We'll work around your schedule.": 'Szybka pomoc dla firm. Dostosujemy się do Twojego harmonogramu.',
            'What type of service are you looking for?': 'Jakiej usługi potrzebujesz?',
            'Select one to get started:': 'Wybierz opcję, aby rozpocząć:',
            'What do you need?': 'Czego potrzebujesz?',
            'Not sure yet? Browse our work.': 'Nie wiesz jeszcze? Zobacz nasze realizacje.',
            '← Back to Services': '← Powrót do usług',
            'Our Work': 'Nasze realizacje',
            'Quality craftsmanship across Chicago & the South Suburbs': 'Solidne wykonanie w Chicago i na południowych przedmieściach',
            'Commercial Concrete Work': 'Komercyjne prace betonowe',
            'Commercial concrete work': 'Komercyjne prace betonowe',
            'Residential driveway pour': 'Wylewanie podjazdu',
            'Porch Concrete Work': 'Prace betonowe przy ganku',
            'Concrete porch work': 'Prace betonowe przy ganku',
            'Professional Concrete Cutting': 'Profesjonalne cięcie betonu',
            'Concrete cutting': 'Cięcie betonu',
            'New Sidewalk Installation': 'Montaż nowego chodnika',
            'Sidewalk installation': 'Montaż chodnika',
            'Residential Driveway Expansion': 'Poszerzenie podjazdu',
            'Residential Driveway': 'Podjazd przy domu',
            'Concrete Repair Services': 'Naprawa betonu',
            'Concrete repair': 'Naprawa betonu',
            'Commercial Flat Roof Installation': 'Montaż komercyjnego dachu płaskiego',
            'Commercial flat roof': 'Komercyjny dach płaski',
            'Commercial Roof Waterproofing': 'Hydroizolacja dachu komercyjnego',
            'Commercial roof coating': 'Powłoka dachu komercyjnego',
            'TPO Roofing System': 'System dachowy TPO',
            'TPO roofing installation': 'Montaż dachu TPO',
            'Commercial Roof Repair': 'Naprawa dachu komercyjnego',
            'Commercial roof repair': 'Naprawa dachu komercyjnego',
            'Flat Roof Maintenance': 'Konserwacja dachu płaskiego',
            'Flat roof maintenance': 'Konserwacja dachu płaskiego',
            'Large-Scale Commercial Project': 'Duży projekt komercyjny',
            'Commercial roofing project': 'Komercyjny projekt dachowy',
            'Commercial Flat Roof System': 'Komercyjny system dachu płaskiego',
            'Flat roof installation': 'Montaż dachu płaskiego',
            'Masonry Foundation Repair': 'Naprawa fundamentów murowanych',
            'Masonry foundation work': 'Prace przy fundamentach murowanych',
            'Chimney Masonry Work': 'Prace murarskie przy kominie',
            'Chimney masonry work': 'Prace murarskie przy kominie',
            'Welcome to John’s Masonry and Roofing': 'Witamy w John’s Masonry and Roofing',
            "Welcome to John's Masonry and Roofing": "Witamy w John's Masonry and Roofing",
            'Back to Home': 'Powrót do strony głównej',
            'Thank You!': 'Dziękujemy!',
            "Your request has been received. A member of the John's Masonry and Roofing team will reach out soon to schedule your inspection or estimate.": "Otrzymaliśmy Twoje zgłoszenie. Przedstawiciel John's Masonry and Roofing wkrótce się skontaktuje, aby ustalić termin inspekcji lub wyceny.",
            'Describe your masonry needs': 'Opisz potrzebne prace murarskie',
            'Brick repair, tuckpointing, chimney restoration...': 'Naprawa cegły, spoinowanie, renowacja komina...',
            'Leak, storm damage, missing shingles...': 'Przeciek, szkody po burzy, brakujące gonty...',
            'New roof, leak repair, maintenance plan...': 'Nowy dach, naprawa przecieków, plan konserwacji...',
            'Chicago, IL or neighborhood': 'Chicago, IL lub dzielnica',
            'View full image:': 'Pokaż pełne zdjęcie:',
            'Close enlarged project photo': 'Zamknij powiększone zdjęcie realizacji',
            'Enlarged project photo': 'Powiększone zdjęcie realizacji'
            ,
            '"Local, honest, and they left the yard cleaner than they found it. Highly recommend."': '"Lokalna, uczciwa firma. Zostawili podwórko czystsze niż przed pracą. Zdecydowanie polecam."',
            "\"Professional, on time, and cleaned up completely after. My chimney hasn't looked this good in years.\"": '"Profesjonalnie, punktualnie i z dokładnym sprzątaniem. Mój komin od lat nie wyglądał tak dobrze."',
            '"They tuckpointed our whole back wall — looks brand new again. Great crew and fair pricing."': '"Odnowili spoiny na całej tylnej ścianie i wygląda jak nowa. Świetna ekipa i uczciwa cena."'
        }
    };

    const languageLabels = {
        en: 'Choose language',
        es: 'Elegir idioma',
        pl: 'Wybierz język'
    };

    const normalize = value => value.replace(/\s+/g, ' ').trim();

    function dynamicTranslation(text, language) {
        if (language === 'en') return text;

        const direct = translations[language]?.[text];
        if (direct) return direct;

        const prefixedImageLabel = text.match(/^View full image: (.+)$/);
        if (prefixedImageLabel) {
            const prefix = translations[language]['View full image:'];
            return `${prefix} ${dynamicTranslation(prefixedImageLabel[1], language)}`;
        }

        const masonryArea = text.match(/^Masonry in (.+)$/);
        if (masonryArea) {
            return language === 'es'
                ? `Albañilería en ${masonryArea[1]}`
                : `Usługi murarskie — ${masonryArea[1]}`;
        }

        const roofingArea = text.match(/^Roofing in (.+)$/);
        if (roofingArea) {
            return language === 'es'
                ? `Techos en ${roofingArea[1]}`
                : `Usługi dekarskie — ${roofingArea[1]}`;
        }

        const replacementArea = text.match(/^Replacement in (.+)$/);
        if (replacementArea) {
            return language === 'es'
                ? `y reemplazo en ${replacementArea[1]}`
                : `i wymiana — ${replacementArea[1]}`;
        }

        const tuckpointingArea = text.match(/^Tuckpointing in (.+)$/);
        if (tuckpointingArea) {
            return language === 'es'
                ? `y tuckpointing en ${tuckpointingArea[1]}`
                : `i spoinowanie — ${tuckpointingArea[1]}`;
        }

        const masonryHeading = text.match(/^Trusted Masonry & Tuckpointing in (.+)$/);
        if (masonryHeading) {
            return language === 'es'
                ? `Albañilería y tuckpointing de confianza en ${masonryHeading[1]}`
                : `Solidne usługi murarskie i spoinowanie — ${masonryHeading[1]}`;
        }

        const roofingHeading = text.match(/^Trusted Roof Repair & Replacement in (.+)$/);
        if (roofingHeading) {
            return language === 'es'
                ? `Reparación y reemplazo de techos de confianza en ${roofingHeading[1]}`
                : `Solidna naprawa i wymiana dachów — ${roofingHeading[1]}`;
        }

        const proudlyServing = text.match(/^Proudly Serving (.+)$/);
        if (proudlyServing) {
            return language === 'es'
                ? `Sirviendo con orgullo a ${proudlyServing[1]}`
                : `Z dumą obsługujemy ${proudlyServing[1]}`;
        }

        const cityMasonry = text.match(
            /^From brick repair to full wall restoration, John's Masonry and Roofing brings craftsmanship, care, and honesty to every job for (.+) homeowners\.$/
        );
        if (cityMasonry) {
            return language === 'es'
                ? `Desde la reparación de ladrillos hasta la restauración completa de muros, John's Masonry and Roofing aporta oficio, cuidado y honestidad a cada trabajo para propietarios de vivienda en ${cityMasonry[1]}.`
                : `Od naprawy cegieł po pełną renowację ścian, John's Masonry and Roofing zapewnia fachowość, staranność i uczciwość przy każdym zleceniu dla właścicieli domów w ${cityMasonry[1]}.`;
        }

        const cityRoofingLead = text.match(
            /^Fast inspections\. Fair prices\. Quality roofing you can count on — proudly serving (.+) homeowners with real dependability\. No out-of-state storm chasers — just a local team that stands behind every job\.$/
        );
        if (cityRoofingLead) {
            return language === 'es'
                ? `Inspecciones rápidas, precios justos y techos de calidad. Servimos con orgullo a propietarios en ${cityRoofingLead[1]} con un equipo local que respalda cada trabajo.`
                : `Szybkie inspekcje, uczciwe ceny i solidne dachy. Z dumą obsługujemy właścicieli domów w ${cityRoofingLead[1]} jako lokalna ekipa, która odpowiada za każdą pracę.`;
        }

        const localRoofing = text.match(
            /^John's Roofing is a local team serving (.+) and the surrounding South Suburbs\. Whether it's a small leak, storm damage, or a full roof replacement, we show up, diagnose honestly, and get the job done right for (.+) homeowners\.$/
        );
        if (localRoofing) {
            return language === 'es'
                ? `John's Roofing es un equipo local que atiende ${localRoofing[1]} y los suburbios del sur. Ya sea una gotera pequeña, daños por tormenta o el reemplazo completo del techo, llegamos, diagnosticamos con honestidad y hacemos bien el trabajo.`
                : `John's Roofing to lokalna ekipa obsługująca ${localRoofing[1]} i południowe przedmieścia. Niezależnie od tego, czy chodzi o mały przeciek, szkody po burzy czy pełną wymianę dachu, przyjeżdżamy, uczciwie diagnozujemy i wykonujemy pracę jak należy.`;
        }

        if (text === "From brick repair to full wall restoration, John's Masonry and Roofing brings craftsmanship, care, and honesty to every job. Serving Chicago and the South Suburbs.") {
            return language === 'es'
                ? "Desde la reparación de ladrillos hasta la restauración completa de muros, John's Masonry and Roofing aporta oficio, cuidado y honestidad a cada trabajo en Chicago y los suburbios del sur."
                : "Od naprawy cegieł po pełną renowację ścian, John's Masonry and Roofing zapewnia fachowość, staranność i uczciwość przy każdym zleceniu w Chicago i na południowych przedmieściach.";
        }

        if (text === "Fast inspections. Fair prices. Quality roofing you can count on — serving Chicago and the South Suburbs with real dependability. No out-of-state storm chasers — just a local team that stands behind every job.") {
            return language === 'es'
                ? 'Inspecciones rápidas, precios justos y techos de calidad para Chicago y los suburbios del sur. Somos un equipo local que respalda cada trabajo.'
                : 'Szybkie inspekcje, uczciwe ceny i solidne dachy w Chicago i na południowych przedmieściach. Jesteśmy lokalną ekipą odpowiedzialną za każdą pracę.';
        }

        if (text.startsWith("John's Roofing provides roofing services throughout Chicago and the South Suburbs")) {
            return language === 'es'
                ? "John's Roofing ofrece servicios de techado en Chicago y los suburbios del sur, incluidos Oak Lawn, Tinley Park, Orland Park, Blue Island, Harvey, South Holland, Markham, Calumet City, Dixmoor, Robbins, Joliet, Bolingbrook y Romeoville. Para reparación, reemplazo o restauración por tormenta, puede contar con nosotros."
                : "John's Roofing świadczy usługi dekarskie w Chicago i na południowych przedmieściach, w tym Oak Lawn, Tinley Park, Orland Park, Blue Island, Harvey, South Holland, Markham, Calumet City, Dixmoor, Robbins, Joliet, Bolingbrook i Romeoville. Możesz na nas liczyć przy naprawie, wymianie lub usuwaniu szkód po burzy.";
        }

        return text;
    }

    const originalTextNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let currentNode = walker.nextNode();

    while (currentNode) {
        const parentTag = currentNode.parentElement?.tagName;
        if (!['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parentTag)) {
            originalTextNodes.push({
                node: currentNode,
                original: currentNode.nodeValue || ''
            });
        }
        currentNode = walker.nextNode();
    }

    const translatedAttributes = ['placeholder', 'aria-label', 'title', 'alt'];
    const originalAttributes = [];
    document.querySelectorAll(translatedAttributes.map(attribute => `[${attribute}]`).join(',')).forEach(element => {
        translatedAttributes.forEach(attribute => {
            if (element.hasAttribute(attribute)) {
                originalAttributes.push({
                    element,
                    attribute,
                    original: element.getAttribute(attribute) || ''
                });
            }
        });
    });

    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.content || '';
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    languageSwitcher.setAttribute('role', 'group');

    [
        ['en', 'EN', 'English'],
        ['es', 'ES', 'Español'],
        ['pl', 'PL', 'Polski']
    ].forEach(([language, shortLabel, fullLabel]) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'language-button';
        button.dataset.language = language;
        button.textContent = shortLabel;
        button.setAttribute('aria-label', fullLabel);
        languageSwitcher.append(button);
    });

    document.body.append(languageSwitcher);

    function translatedTitle(language) {
        if (language === 'en') return originalTitle;


        const fixedTitles = {
            es: {
                'John\'s Masonry and Roofing — Chicago Masonry & Roofing Since 1981': 'John\'s Masonry and Roofing — Albañilería y techos en Chicago desde 1981',
                'Roofing Contractor in Chicago — Tear-Offs, Shingles & Flat Roofs | John\'s Masonry and Roofing': 'Contratista de techos en Chicago — retiro, tejas y techos planos | John\'s Masonry and Roofing',
                'Masonry Contractor in Chicago & the South Suburbs | John\'s Masonry and Roofing': 'Contratista de albañilería en Chicago y los suburbios del sur | John\'s Masonry and Roofing',
                'Tuckpointing in Chicago — Grinding & Repointing Brick | John\'s Masonry and Roofing': 'Tuckpointing en Chicago — rejuntado de ladrillo | John\'s Masonry and Roofing',
                'Brick & Stone Repair in Chicago — Spalling, Cracks, Rebuilds | John\'s Masonry and Roofing': 'Reparación de ladrillo y piedra en Chicago | John\'s Masonry and Roofing',
                'Chimney Repair & New Chimneys in Chicago | John\'s Masonry and Roofing': 'Reparación y construcción de chimeneas en Chicago | John\'s Masonry and Roofing',
                'Lintel Replacement in Chicago — Rusted Steel Above Windows | John\'s Masonry and Roofing': 'Reemplazo de dinteles en Chicago | John\'s Masonry and Roofing',
                'Parapet Wall Repair & Rebuilds in Chicago | John\'s Masonry and Roofing': 'Reparación de muros de parapeto en Chicago | John\'s Masonry and Roofing',
                'Masonry Waterproofing & Brick Sealing in Chicago | John\'s Masonry and Roofing': 'Impermeabilización y sellado de albañilería en Chicago | John\'s Masonry and Roofing',
                'Concrete Driveways, Sidewalks & Steps in Chicago | John\'s Masonry and Roofing': 'Entradas, aceras y escalones de concreto en Chicago | John\'s Masonry and Roofing',
                'Commercial Roofing & Masonry in Chicago | John\'s Masonry and Roofing': 'Techos y albañilería comerciales en Chicago | John\'s Masonry and Roofing',
                'Service Area — Chicago & the South Suburbs | John\'s Masonry and Roofing': 'Área de servicio — Chicago y los suburbios del sur | John\'s Masonry and Roofing',
                'Page Not Found — John\'s Masonry and Roofing': 'Página no encontrada — John\'s Masonry and Roofing'
            },
            pl: {
                'John\'s Masonry and Roofing — Chicago Masonry & Roofing Since 1981': 'John\'s Masonry and Roofing — murarstwo i dachy w Chicago od 1981',
                'Roofing Contractor in Chicago — Tear-Offs, Shingles & Flat Roofs | John\'s Masonry and Roofing': 'Wykonawca dachów w Chicago — zrywanie, gont i dachy płaskie | John\'s Masonry and Roofing',
                'Masonry Contractor in Chicago & the South Suburbs | John\'s Masonry and Roofing': 'Firma murarska w Chicago i na południowych przedmieściach | John\'s Masonry and Roofing',
                'Tuckpointing in Chicago — Grinding & Repointing Brick | John\'s Masonry and Roofing': 'Spoinowanie w Chicago — szlifowanie i fugowanie cegły | John\'s Masonry and Roofing',
                'Brick & Stone Repair in Chicago — Spalling, Cracks, Rebuilds | John\'s Masonry and Roofing': 'Naprawa cegły i kamienia w Chicago | John\'s Masonry and Roofing',
                'Chimney Repair & New Chimneys in Chicago | John\'s Masonry and Roofing': 'Naprawa i budowa kominów w Chicago | John\'s Masonry and Roofing',
                'Lintel Replacement in Chicago — Rusted Steel Above Windows | John\'s Masonry and Roofing': 'Wymiana nadproży w Chicago | John\'s Masonry and Roofing',
                'Parapet Wall Repair & Rebuilds in Chicago | John\'s Masonry and Roofing': 'Naprawa i odbudowa attyk w Chicago | John\'s Masonry and Roofing',
                'Masonry Waterproofing & Brick Sealing in Chicago | John\'s Masonry and Roofing': 'Hydroizolacja i impregnacja muru w Chicago | John\'s Masonry and Roofing',
                'Concrete Driveways, Sidewalks & Steps in Chicago | John\'s Masonry and Roofing': 'Podjazdy, chodniki i schody betonowe w Chicago | John\'s Masonry and Roofing',
                'Commercial Roofing & Masonry in Chicago | John\'s Masonry and Roofing': 'Dachy i murarstwo komercyjne w Chicago | John\'s Masonry and Roofing',
                'Service Area — Chicago & the South Suburbs | John\'s Masonry and Roofing': 'Obszar działania — Chicago i południowe przedmieścia | John\'s Masonry and Roofing',
                'Page Not Found — John\'s Masonry and Roofing': 'Nie znaleziono strony — John\'s Masonry and Roofing'
            }
        };

        return fixedTitles[language]?.[originalTitle] || originalTitle;
    }

    function applyLanguage(requestedLanguage) {
        const language = SUPPORTED_LANGUAGES.includes(requestedLanguage) ? requestedLanguage : 'en';
        document.documentElement.lang = language;
        document.documentElement.dataset.language = language;

        originalTextNodes.forEach(({ node, original }) => {
            const text = normalize(original);
            if (!text) {
                node.nodeValue = original;
                return;
            }

            const leadingWhitespace = original.match(/^\s*/)?.[0] || '';
            const trailingWhitespace = original.match(/\s*$/)?.[0] || '';
            node.nodeValue = `${leadingWhitespace}${dynamicTranslation(text, language)}${trailingWhitespace}`;
        });

        originalAttributes.forEach(({ element, attribute, original }) => {
            element.setAttribute(attribute, dynamicTranslation(original, language));
        });

        document.title = translatedTitle(language);
        const description = document.querySelector('meta[name="description"]');
        if (description) description.content = originalDescription;

        languageSwitcher.setAttribute('aria-label', languageLabels[language]);
        languageSwitcher.querySelectorAll('.language-button').forEach(button => {
            const active = button.dataset.language === language;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', String(active));
        });

        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch {
            // The switcher remains usable if browser storage is unavailable.
        }
    }

    languageSwitcher.addEventListener('click', event => {
        const button = event.target.closest('.language-button');
        if (button) applyLanguage(button.dataset.language);
    });

    let savedLanguage = 'en';
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (SUPPORTED_LANGUAGES.includes(stored)) savedLanguage = stored;
    } catch {
        // English remains the default if browser storage is unavailable.
    }

    applyLanguage(savedLanguage);
})();
