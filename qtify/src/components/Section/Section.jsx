import React, { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import CustomTabs from "../../Tabs/Tabs";
import styles from "./Section.module.css";

function Section({ title, data, type, genres = [] }) {
    const [showGrid, setShowGrid] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("all");

    const handleTabChange = (event, newValue) => {
        setSelectedGenre(newValue);
    };

    const filteredSongs =
        selectedGenre === "all"
            ? data
            : data.filter((song) => song.genre.key === selectedGenre);

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h2>{title}</h2>

                {/* Albums only */}
                {type === "album" && (
                    <button
                        className={styles.toggle}
                        onClick={() => setShowGrid(!showGrid)}
                    >
                        {showGrid ? "Collapse" : "Show All"}
                    </button>
                )}
            </div>

            {/* Songs only */}
            {type === "song" && (
                <CustomTabs
                    genres={genres}
                    value={selectedGenre}
                    handleChange={handleTabChange}
                />
            )}

            {/* Albums */}
            {type === "album" &&
                (showGrid ? (
                    <div className={styles.grid}>
                        {data.map((item) => (
                            <Card
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                follows={item.follows}
                                likes={item.likes}
                                slug={item.slug}
                                type={type}
                            />
                        ))}
                    </div>
                ) : (
                    <Carousel
                        data={data}
                        renderComponent={(item) => (
                            <Card
                                image={item.image}
                                title={item.title}
                                follows={item.follows}
                                likes={item.likes}
                                slug={item.slug}
                                type={type}
                            />
                        )}
                    />
                ))}

            {/* Songs */}
            {type === "song" && (
                <Carousel
                    data={filteredSongs}
                    renderComponent={(item) => (
                        <Card
                            image={item.image}
                            title={item.title}
                            follows={item.follows}
                            likes={item.likes}
                            slug={item.slug}
                            type={type}
                        />
                    )}
                />
            )}
        </div>
    );
}

export default Section;