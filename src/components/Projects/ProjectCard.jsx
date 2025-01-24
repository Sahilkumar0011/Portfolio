import React, { useState } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, video },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>

      {/* Watch Video Button */}
      {video && (
        <button onClick={handleVideoClick} className={styles.watchVideo}>
          Watch Video
        </button>
      )}

      <div className={styles.links}>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
    Link
        </a>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Source Code
        </a>
      </div>

      {/* Modal for Video */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handleCloseModal}>
              &times;
            </button>
            <iframe
              src={video.replace("view?usp=sharing", "preview")}
              title="Project Video"
              className={styles.video}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};
