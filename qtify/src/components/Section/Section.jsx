import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, data }) {
    const [showGrid, setShowGrid] = useState(true);

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <button className={styles.toggle} onClick={() => setShowGrid(!showGrid)}>{showGrid ? "Collapse" : "Show All"}</button>

            </div>
            {showGrid && (
                <div className={styles.grid}>
                    {
                        data.map((album) => {
                            return (
                                <Card image={album.image} title={album.title} follows={album.follows} slug={album.slug} />
                            )
                        })
                    }

                </div>
            )}

        </div>
    )
}

export default Section;