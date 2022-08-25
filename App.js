import "./App.css";
import CourseCard from "./componentes/CourseCard";

function App() {
  return (
    <div>
      <CourseCard
        titulo="Bienvenidos a mi pagina"
        descripcion="esta es una pagina grandiosa"
      />
      <CourseCard
        titulo="Mi nombre es Stefany Torres"
        descripcion="Bienvenidos al curso de porgramación"
      />
      <CourseCard
        titulo="Curso de Javascript"
        descripcion="Este curso esta diseñado para personas que quieran aprender todo lo que tiene que ver con Javascript"
      />
      <CourseCard
        titulo="Fin de mi pagina"
        descripcion="gracias por tu atención"
      />
    </div>
  );
}

export default App;
