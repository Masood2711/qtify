import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, data, type }) {
    const [showGrid, setShowGrid] = useState(true);

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <button className={styles.toggle} onClick={() => setShowGrid(!showGrid)}>{showGrid ? "Collapse" : "Show All"}</button>

            </div>
            {showGrid && data.length > 0 && (
                <div className={styles.grid}>
                    {
                        data.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    follows={item.follows}
                                    likes={item.likes}
                                    slug={item.slug}
                                    type={type}
                                />
                            )
                        })
                    }

                </div>
            )}

        </div>
    )
}

export default Section;