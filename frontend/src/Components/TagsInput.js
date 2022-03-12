import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./TagsInput.css";

const TagsInput = ({ setFormTags }) => {
    const [tags, setTags] = useState([]);

    const removeTags = (indexToRemove) => {
        const newTags = [...tags.filter((_, index) => index !== indexToRemove)];
        setTags(newTags);
        setFormTags(newTags);
    };

    const addTags = (event) => {
        if (event.target.value !== "") {
            const newTags = [...tags, event.target.value];
            setTags(newTags);
            setFormTags(newTags);
            event.target.value = "";
        }
    };

    return (
        <Container className="mb-3">
            <div className="tags-input">
                <ul id="tags">
                    {tags.map((tag, index) => (
                        <li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span
                                className="tag-close-icon"
                                onClick={() => removeTags(index)}
                            >
                                X
                            </span>
                        </li>
                    ))}
                </ul>
                <input
                    type="text"
                    onKeyUp={(event) =>
                        event.key === "Shift" ? addTags(event) : null
                    }
                    placeholder="Press Shift to add the tag"
                />
            </div>
        </Container>
    );
};

export default TagsInput;
