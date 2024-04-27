import styles from "./Video.module.css";
function Video({ id }) {
  //console.log(id);
  const embedlink = `http://www.youtube.com/embed/${id}?rel=0`;
  if (id) {
    return (
      <iframe
        width="560"
        height="315"
        src={embedlink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        allowFullScreen={true}
      ></iframe>
    );
  } else {
    return <div className={styles.notFound}>Trailer Not Found</div>;
  }
}

export default Video;
