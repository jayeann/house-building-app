import { string } from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";

interface NoteProps {
  description: string;
}

function Note({ description }: NoteProps) {
  return (
    <Card className="mt-4 card-note">
      <Card.Body>
        <small>{description}</small>
      </Card.Body>
    </Card>
  );
}

export default Note;
