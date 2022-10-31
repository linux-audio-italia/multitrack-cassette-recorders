import Image from "next/image";

const Gallery = ({ images, href }) => {
  const gallery =
    images.length === 0 ? (
      <li>
        There are no images available. If you want to contribute with images,
        upload them to the folder <code>public/images/models{href}</code>
      </li>
    ) : (
      images.map(({ size, path }) => (
        <li key={path}>
          <a
            className="ModelDetail-imageContainer"
            href={path}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={path}
              alt={path}
              width={size.width}
              height={size.height}
            />
          </a>
        </li>
      ))
    );

  return (
    <section className="ModelDetail-gallery">
      <h3>Pictures</h3>
      <ul>{gallery}</ul>
    </section>
  );
};

export default Gallery;
