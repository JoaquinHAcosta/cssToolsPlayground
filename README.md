## Practice clsx + tailwindMerge

### clsx

Libreria de Javascript que gestiona las clases de CSS en componentes de React. Simplifica el proceso de asignar y combinar clases condicionales, evitando la escritura repetitiva y mejorando la legibilidad del codigo.

Ej:
// Combinar clases
const className = clsx('button', 'primary');

// Clases condicionales
const className = clsx('button', {
'active': isLoggedIn,
'disabled': isLoading,
});

// Interpolación de variables
const className = clsx('button', `size-${size}`);

---

### tailwind Merge

Libreria de Javascript usada para simplificar y mejorar la union de clases Tailwind CSS, util para cuando se manejan clases condicionales y es necesario evitar conflictos o repeticion de codigo

Ej:
// Combinar clases:
const className = merge('text-red-500', 'font-bold');

// Clases condicionales:
const isVisible = true;
const className = merge({
'block': isVisible,
'hidden': !isVisible,
});

// Con arrays:
const sizes = ['md', 'lg', 'xl'];
const className = merge(sizes.map(size => `w-${size}`));
# cssToolsPlayground
