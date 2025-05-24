import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Modificar el tipo para aceptar string (ruta de imagen) en lugar de componente SVG
type FeatureItem = {
  title: string;
  image: string; // Cambiado de Svg a image
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Alistamiento de mercancías',
    image: require('@site/static/img/img1.jpg').default, // Usar .default para la imagen
    description: (
      <>
        Registra el alistamiento de mercancías en el sistema. Puedes agregar
        detalles como el nombre del producto, la cantidad y la ubicación de
        almacenamiento. Esto te ayudará a llevar un control preciso de tu
        inventario y a optimizar el proceso de preparación de despachos.
      </>
    ),
  },
  {
    title: 'Traslados De mercancías',
    image: require('@site/static/img/img2.jpg').default, // Cambiar a tu imagen
    description: (
      <>
        Realice traslados de mercancías entre diferentes ubicaciones y almacenes.
        Puedes registrar la información del traslado, como la fecha, el origen y
        el destino. Esto te permitirá llevar un control más eficiente de tus
        existencias y optimizar la logística.
      </>
    ),
  },
  {
    title: 'Gestion de entregas',
    image: require('@site/static/img/img3.jpg').default, // Cambiar a tu imagen
    description: (
      <>
        registre la información de las entregas realizadas. Puedes agregar detalles
        como la fecha de entrega, el destinatario y la ubicación. Esto te ayudará a
        llevar un control preciso de tus envíos y a mejorar la satisfacción del
        cliente. Además, podrás realizar un seguimiento de las entregas pendientes
        y gestionar cualquier incidencia que pueda surgir durante el proceso de
        entrega.
      </>
    ),
  },
];

// Modificar el componente Feature para usar img en lugar de Svg
function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img 
          className={styles.featureSvg} 
          src={image} 
          alt={title}
          role="img" 
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}