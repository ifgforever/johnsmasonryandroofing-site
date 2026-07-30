(() => {
    const STORAGE_KEY = 'johns-masonry-roofing-language';
    const SUPPORTED_LANGUAGES = ['en', 'es', 'pl'];

    const translations = {
        es: {
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
            'Licensed. Insured. Family-owned.': 'Con licencia, asegurada y de propiedad familiar.',
            'Licensed & Insured': 'Con licencia y seguro',
            'Licensed & Local': 'Con licencia y local',
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
            'Same-day inspections • Insurance claim help': 'Inspecciones el mismo día • Ayuda con reclamos de seguro',
            'Same-Day Inspections': 'Inspecciones el mismo día',
            'Insurance Claim Help': 'Ayuda con reclamos de seguro',
            'Quick, honest assessments — we show up and evaluate.': 'Evaluaciones rápidas y honestas: llegamos y revisamos el problema.',
            'We guide you through claims so you get a fair outcome.': 'Lo guiamos durante el reclamo para ayudarle a obtener un resultado justo.',
            'Quick response times. Same-day when available. Upload photos to speed things up.': 'Respuesta rápida. Servicio el mismo día cuando esté disponible. Suba fotos para agilizar el proceso.',
            'Quick response times. Upload photos to get a faster quote.': 'Respuesta rápida. Suba fotos para recibir un presupuesto más pronto.',
            'Roof Repair & Leak Fixes': 'Reparación de techos y goteras',
            'Roof Replacement': 'Reemplazo de techo',
            'Storm Damage & Insurance Claims': 'Daños por tormenta y reclamos de seguro',
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
            'Detailed quotes with no hidden fees. Insurance claim assistance for qualifying projects.': 'Presupuestos detallados sin cargos ocultos. Ayuda con reclamos de seguro para proyectos que califican.',
            'Flat Roof Installation': 'Instalación de techo plano',
            'Complete commercial flat roof systems designed for durability and weather resistance.': 'Sistemas completos de techo plano comercial diseñados para durar y resistir el clima.',
            'Roof Repair & Leak Detection': 'Reparación de techos y detección de goteras',
            'Fast response to commercial roof issues with minimal business disruption.': 'Respuesta rápida a problemas de techos comerciales con mínima interrupción del negocio.',
            'Roof Coatings': 'Recubrimientos para techos',
            'Protective coatings that restore and extend the life of your existing roof.': 'Recubrimientos protectores que restauran y prolongan la vida útil de su techo.',
            'Storm Damage Restoration': 'Restauración por daños de tormenta',
            'Complete storm damage assessment and insurance claim assistance for businesses.': 'Evaluación completa de daños por tormenta y ayuda con reclamos de seguro para negocios.',
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
            'Documentation for insurance': 'Documentación para el seguro',
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
            "\"John's crew found the leak fast and handled the insurance claim with zero stress. Respectful, clean, and finished on time.\"": '"El equipo de John encontró la gotera rápidamente y manejó el reclamo de seguro sin estrés. Fueron respetuosos, limpios y terminaron a tiempo."',
            '"Local, honest, and they left the yard cleaner than they found it. Highly recommend."': '"Locales y honestos; dejaron el patio más limpio de como lo encontraron. Los recomiendo mucho."',
            "\"Professional, on time, and cleaned up completely after. My chimney hasn't looked this good in years.\"": '"Profesionales, puntuales y dejaron todo completamente limpio. Mi chimenea no se veía tan bien desde hace años."',
            '"They tuckpointed our whole back wall — looks brand new again. Great crew and fair pricing."': '"Rehicieron las juntas de toda la pared trasera y ahora parece nueva. Excelente equipo y precios justos."'
        },
        pl: {
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
            'Licensed. Insured. Family-owned.': 'Licencjonowana i ubezpieczona firma rodzinna.',
            'Licensed & Insured': 'Licencja i ubezpieczenie',
            'Licensed & Local': 'Lokalna firma z licencją',
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
            'Same-day inspections • Insurance claim help': 'Inspekcje tego samego dnia • Pomoc w sprawach ubezpieczeniowych',
            'Same-Day Inspections': 'Inspekcje tego samego dnia',
            'Insurance Claim Help': 'Pomoc w sprawach ubezpieczeniowych',
            'Quick, honest assessments — we show up and evaluate.': 'Szybka i uczciwa ocena — przyjeżdżamy i sprawdzamy problem.',
            'We guide you through claims so you get a fair outcome.': 'Pomagamy przejść przez proces zgłoszenia szkody, aby uzyskać uczciwy wynik.',
            'Quick response times. Same-day when available. Upload photos to speed things up.': 'Szybka reakcja. W miarę dostępności usługa tego samego dnia. Dodaj zdjęcia, aby przyspieszyć wycenę.',
            'Quick response times. Upload photos to get a faster quote.': 'Szybka reakcja. Dodaj zdjęcia, aby szybciej otrzymać wycenę.',
            'Roof Repair & Leak Fixes': 'Naprawa dachów i przecieków',
            'Roof Replacement': 'Wymiana dachu',
            'Storm Damage & Insurance Claims': 'Szkody po burzy i roszczenia ubezpieczeniowe',
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
            'Detailed quotes with no hidden fees. Insurance claim assistance for qualifying projects.': 'Szczegółowe wyceny bez ukrytych kosztów. Pomoc przy roszczeniach ubezpieczeniowych dla kwalifikujących się prac.',
            'Flat Roof Installation': 'Montaż dachów płaskich',
            'Complete commercial flat roof systems designed for durability and weather resistance.': 'Kompletne systemy płaskich dachów komercyjnych zaprojektowane z myślą o trwałości i odporności na pogodę.',
            'Roof Repair & Leak Detection': 'Naprawa dachów i wykrywanie przecieków',
            'Fast response to commercial roof issues with minimal business disruption.': 'Szybka reakcja na problemy dachowe przy minimalnych zakłóceniach pracy firmy.',
            'Roof Coatings': 'Powłoki dachowe',
            'Protective coatings that restore and extend the life of your existing roof.': 'Powłoki ochronne odnawiające i przedłużające żywotność istniejącego dachu.',
            'Storm Damage Restoration': 'Naprawa szkód po burzy',
            'Complete storm damage assessment and insurance claim assistance for businesses.': 'Pełna ocena szkód po burzy i pomoc firmom w sprawach ubezpieczeniowych.',
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
            'Documentation for insurance': 'Dokumentacja dla ubezpieczyciela',
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
            "\"John's crew found the leak fast and handled the insurance claim with zero stress. Respectful, clean, and finished on time.\"": '"Ekipa Johna szybko znalazła przeciek i bez stresu zajęła się sprawą ubezpieczeniową. Kulturalni, czyści i punktualni."',
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

        const roofingTitle = originalTitle.match(/^Roofing Contractor in (.+) \| John's Masonry and Roofing$/);
        if (roofingTitle) {
            return language === 'es'
                ? `Contratista de techos en ${roofingTitle[1]} | John's Masonry and Roofing`
                : `Usługi dekarskie — ${roofingTitle[1]} | John's Masonry and Roofing`;
        }

        const masonryTitle = originalTitle.match(/^Masonry & Tuckpointing Contractor in (.+) \| John's Masonry and Roofing$/);
        if (masonryTitle) {
            return language === 'es'
                ? `Contratista de albañilería y tuckpointing en ${masonryTitle[1]} | John's Masonry and Roofing`
                : `Usługi murarskie i spoinowanie — ${masonryTitle[1]} | John's Masonry and Roofing`;
        }

        const fixedTitles = {
            es: {
                "John's Masonry and Roofing — The South Suburbs' Most Trusted Roofing Team": "John's Masonry and Roofing — Techos de confianza en los suburbios del sur",
                "John's Masonry and Roofing — Chicago Masonry & Tuckpointing Experts": "John's Masonry and Roofing — Expertos en albañilería y tuckpointing de Chicago",
                "John's Masonry and Roofing — Commercial Roofing Services Chicago": "John's Masonry and Roofing — Techos comerciales en Chicago",
                "Thank You — John's Masonry and Roofing": "Gracias — John's Masonry and Roofing",
                "Welcome — John's Masonry and Roofing": "Bienvenido — John's Masonry and Roofing"
            },
            pl: {
                "John's Masonry and Roofing — The South Suburbs' Most Trusted Roofing Team": "John's Masonry and Roofing — Zaufane usługi dekarskie na południowych przedmieściach",
                "John's Masonry and Roofing — Chicago Masonry & Tuckpointing Experts": "John's Masonry and Roofing — Usługi murarskie i spoinowanie w Chicago",
                "John's Masonry and Roofing — Commercial Roofing Services Chicago": "John's Masonry and Roofing — Dachy komercyjne w Chicago",
                "Thank You — John's Masonry and Roofing": "Dziękujemy — John's Masonry and Roofing",
                "Welcome — John's Masonry and Roofing": "Witamy — John's Masonry and Roofing"
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
