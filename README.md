## LA PAGINA ESTA DESARROLADA CON NEXT JS Y SE USA TAILWIND Y CSS PARA LOS ESTILOS

## PARA EDITAR

CON CONTROL + SHIFT + F VAS A PODER BUSCAR POR TODA LA APLICACION

- SI QUERES MODIFCAR EL NOMBRE DE LAS RUTAS
  BUSCA: " menuItems "

- SI QUERES MODIFCAR LOS PLANES DE ENTRENAMIENTO
  BUSCA: " plans "

- SI QUERES MODIFCAR LOS PLANES DE DIETA
  BUSCA: " dietPlans "

- SI QUERES MODIFCAR LOS CLIENTES
  BUSCA: " clients "

- PODES ENCONTRAR LOS DISTINTOS FONDOS DE PANTALLA BUSCANDO "FONDO DE PANTALLA"

- LOS CAMBIOS DE TITULOS, DESCRIPCIONES Y TEXTO ESTAN EN /COMPONENTS/SECTIONS -> EN CADA UNA ESTA COMENTADO DONDE ESTA EL TITULO DESCRIPCION ENTRE OTROS

- PARA CAMBIAR IMAGENES:

  - LAS IMAGENES SE GUARDAN EN PUBLIC/IMAGES
  - SI QUERES AGREGAR UNA IMAGEN BASTA CON AGREGAN UNA IMAGEN A PUBLIC/IMAGES (HACIENDO DRAG AND DROP O BOTON DERECHO - ABRIR - BUSCAR UNA IMAGEN Y SELECCIONAS)
  - RECOMIENDO QUE LE EDITES EL NOMBRE (BOTON DERECHO SOBRE LA IMAGEN + "CAMBIAR NOMBRE") A UNO QUE TE QUEDE COMODO.

  - PARA CAMBIAR IMAGENES, SIEMPRE TENES QUE REEMPLAZAR LO QUE ESTA DESPUES DE "IMAGES/" POR EL NOMBRE DEL ARCHIVO QUE QUERES PONER QUE ESTE EN PUBLIC/IMAGES

  EJEMPLO:
  ESTAS EN COMPONENTS/SECTIONS
  Y QUERES CAMBIAR EL FONDO DE PANTALLA QUE ES
  src="/images/FONDO01.jpg"

        LO QUE HACES ES AGREGAR EL ARCHIVO QUE VOS QUERES A PUBLIC/IMAGES POR EJEMPLO "MIARCHIVO.png"
        Y REEMPLAZAS LA RUTA   src="/images/FONDO01.jpg" POR   src="/images/MIARCHIVO.png"

## PARA CORRER EN DESARROLLO:

npm run dev

Y VISUALIZAR EN: [http://localhost:3000]

## Deployado en Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
