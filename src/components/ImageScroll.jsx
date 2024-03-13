import styles from "./ImageScroll.module.css";
function ImageScroll({ images }) {
  return (
    <>
      {" "}
      <h3 className={styles.title}>Production:</h3>
      <div className={styles.images}>
        {images?.map((curr) => (
          <div className={styles.container}>
            <img
              src={`http://image.tmdb.org/t/p/w500` + curr?.logo_path}
              className={styles.img}
            />
            <p>{curr.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageScroll;
