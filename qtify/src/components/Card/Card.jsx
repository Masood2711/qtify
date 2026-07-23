import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, title, follows, likes, slug, type }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={image} alt={title} className={styles.image} />
                <div className={styles.bottom}>
                    <Chip
                        label={type === "song" ? `${likes} Likes` : `${follows} Follows`}
                        size="small"
                        variant="filled"
                        className={styles.chip}
                    />
                </div>
            </div>
            <p className={styles.title}>{title}</p>
        </div>
    );
}

export default Card;
