import entrenoPesoMuerto from "./assets/entreno peso muerto.png";

function App() {
  const whatsapp =
    "https://wa.me/34608963263?text=Hola%20%C3%81ngel%2C%20quiero%20reservar%20mi%20entrenamiento%20gratis";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            Ángel <span className="text-blue-600">Trainer</span>
          </div>

          <nav className="hidden md:flex gap-6 font-medium text-slate-700">
            <a href="#servicios">Servicios</a>
            <a href="#objetivos">Objetivos</a>
            <a href="#precios">Precios</a>
            <a href="#sobre-angel">Sobre Ángel</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a
            href={whatsapp}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-blue-700"
          >
            Entrenamiento gratis
          </a>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-bold uppercase tracking-widest mb-4">
              Entrenador personal en Sevilla
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Entrena con Ángel por solo{" "}
              <span className="text-blue-600">10€/hora</span>
            </h1>

            <p className="text-xl text-slate-700 mb-8">
              Primer entrenamiento gratis. Gimnasio incluido durante la sesión,
              rutina personalizada y entrenamientos adaptados a tu objetivo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsapp}
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-blue-700"
              >
                Reservar entrenamiento gratis
              </a>

              <a
                href="#servicios"
                className="border border-blue-600 text-blue-600 px-8 py-4 rounded-2xl font-bold text-center hover:bg-blue-50"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="bg-white/10 rounded-2xl p-6 mb-6">
              <p className="text-lg">Servicio principal</p>
              <h2 className="text-5xl font-black">10€/hora</h2>
              <p className="mt-2">Entrenamiento personal presencial</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Primer entreno gratis",
                "Gimnasio incluido",
                "Rutina personalizada",
                "Sevilla y alrededores",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white text-blue-700 rounded-2xl p-4 font-bold text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black text-center mb-4">
          ¿Qué incluye cada entrenamiento?
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          No necesitas experiencia previa. Ángel adapta cada sesión a tu nivel,
          tus horarios y tu objetivo.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Entrenamiento personal de 1 hora",
            "Acceso a gimnasio durante la sesión",
            "Rutina personalizada",
            "Corrección técnica",
            "Seguimiento de progreso",
            "Ubicaciones flexibles",
          ].map((item) => (
            <div
              key={item}
              className="p-6 rounded-3xl border bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black mb-4">
                ✓
              </div>
              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="objetivos" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">
            Entrenamientos según tu objetivo
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                [
                  "Ganar músculo",
                  "Hipertrofia, técnica y progresión para aumentar masa muscular.",
                ],
                [
                  "Ganar fuerza",
                  "Mejora tu rendimiento, estabilidad y control corporal.",
                ],
                [
                  "Perder grasa",
                  "Entrenamientos pensados para adelgazar de forma sostenible.",
                ],
                [
                  "Recomposición corporal",
                  "Pierde grasa y gana músculo con un plan adaptado.",
                ],
                [
                  "Mejorar cardio",
                  "Aumenta tu resistencia, energía y condición física.",
                ],
                [
                  "Movilidad y salud",
                  "Mejora postura, movilidad y prevención de molestias.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="bg-white p-7 rounded-3xl shadow-sm border"
                >
                  <h3 className="text-2xl font-black text-blue-600 mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <img
                src={entrenoPesoMuerto}
                alt="Ángel entrenando a una clienta"
                className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="precios" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black text-center mb-12">
          Precios claros y accesibles
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border-2 border-blue-600 p-8 shadow-xl">
            <p className="text-blue-600 font-bold uppercase">
              Entrenamiento personal
            </p>

            <h3 className="text-5xl font-black my-4">10€/hora</h3>

            <p className="text-slate-600 mb-6">
              Incluye entrenamiento, gimnasio durante la sesión, rutina y
              corrección técnica.
            </p>

            <ul className="space-y-3 mb-8">
              <li>✓ Primer entrenamiento gratis</li>
              <li>✓ Rutina personalizada</li>
              <li>✓ Adaptación a tu objetivo</li>
              <li>✓ Sevilla y alrededores</li>
            </ul>

            <a
              href={whatsapp}
              className="block bg-blue-600 text-white text-center py-4 rounded-2xl font-bold hover:bg-blue-700"
            >
              Reservar gratis
            </a>
          </div>

          <div className="rounded-3xl border p-8 shadow-sm bg-slate-50">
            <p className="text-blue-600 font-bold uppercase">
              Extra nutricional
            </p>

            <h3 className="text-5xl font-black my-4">+5€/semana</h3>

            <p className="text-slate-600 mb-6">
              Seguimiento nutricional personalizado para avanzar con una guía
              clara.
            </p>

            <ul className="space-y-3 mb-8">
              <li>✓ Plan semanal</li>
              <li>✓ Calorías adaptadas</li>
              <li>✓ Ajustes según evolución</li>
              <li>✓ Adaptado a gustos y horarios</li>
            </ul>

            <a
              href={whatsapp}
              className="block border border-blue-600 text-blue-600 text-center py-4 rounded-2xl font-bold hover:bg-blue-50"
            >
              Añadir nutrición
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">
              Nutrición personalizada
            </h2>

            <p className="text-xl text-blue-100">
              No se trata de hacer dietas imposibles, sino de tener una guía
              realista para comer mejor y progresar de forma constante.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Plan nutricional semanal",
              "Calorías adaptadas",
              "Organización de comidas",
              "Ajustes según evolución",
            ].map((item) => (
              <div
                key={item}
                className="bg-white text-blue-700 p-5 rounded-2xl font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-angel" className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-slate-50 border rounded-3xl p-8 md:p-12 shadow-sm">
          <p className="text-blue-600 font-bold uppercase tracking-widest mb-4">
            Sobre Ángel
          </p>

          <h2 className="text-4xl font-black mb-6">Ángel Trainer</h2>

          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              Ángel es entrenador personal titulado y con experiencia en
              entrenamiento enfocado a pérdida de grasa, ganancia muscular y
              mejora del rendimiento físico.
            </p>

            <p>
              Trabaja con entrenamientos adaptados al nivel de cada persona,
              priorizando siempre la técnica correcta, la prevención de lesiones
              y la constancia a largo plazo.
            </p>

            <p>
              Su objetivo es que aprendas a entrenar bien desde el principio,
              evitando errores comunes y consiguiendo resultados reales de forma
              segura y sostenible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {[
              "Entrenamientos personalizados",
              "Seguimiento cercano",
              "Ayuda con nutrición personalizada",
              "Corrección técnica y prevención de lesiones",
              "Adaptado para principiantes y nivel intermedio",
              "Entrenamientos en Sevilla y alrededores",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-4 border font-bold text-slate-700"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black text-center mb-12">
          Opiniones de alumnos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            [
              "Marta",
              "Empecé sin saber entrenar y desde el primer día me explicó todo paso a paso. Es muy profesional y muy cercano.",
            ],
            [
              "Enrique",
              "Lo mejor es que se adapta a tu nivel y no te hace sentir perdido en el gimnasio.",
            ],
            [
              "José",
              "Por el precio que tiene, está genial poder entrenar con alguien que te corrige, te guía y además te incluye el gimnasio.",
            ],
            [
              "Laura",
              "Con solo dos horas a la semana he notado muchísimo cambio. Además, aprendes técnica para entrenar mejor por tu cuenta y evitar lesiones.",
            ],
          ].map(([name, text]) => (
            <div
              key={name}
              className="bg-white border p-6 rounded-3xl shadow-sm"
            >
              <p className="text-slate-700 mb-6 leading-relaxed">“{text}”</p>
              <p className="font-bold text-blue-600">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-12">
            ¿Cómo funciona?
          </h2>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              "Contactas por WhatsApp",
              "Revisamos tu objetivo",
              "Primer entreno gratis",
              "10€/h / entreno",
              "Añades nutrición personalizada si quieres",
            ].map((step, i) => (
              <div
                key={step}
                className="bg-white p-6 rounded-3xl border text-center"
              >
                <div className="text-3xl font-black text-blue-600 mb-3">
                  {i + 1}
                </div>
                <p className="font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Reserva tu primer entrenamiento gratis
        </h2>

        <p className="text-xl text-slate-600 mb-8">
          Empieza sin compromiso. Prueba una sesión con Ángel y descubre cómo
          puede ayudarte.
        </p>

        <a
          href={whatsapp}
          className="inline-block bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700"
        >
          Hablar por WhatsApp
        </a>
      </section>

      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-bold">
            Ángel Trainer · Entrenador personal en Sevilla
          </p>
          <p className="text-slate-400">
            Entrenamientos presenciales en Sevilla y alrededores
          </p>
        </div>
      </footer>

      <a
        href={whatsapp}
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full font-black shadow-2xl hover:bg-green-600"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default App;