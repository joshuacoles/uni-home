import React from "react";
import { Module } from "../src/Module";

const moodle = (id: string) => `https://moodle.bath.ac.uk/course/view.php?id=${id}`
const panopto = (folderId: string) => `https://uniofbath.cloud.panopto.eu/Panopto/Pages/Sessions/List.aspx#folderID=%22${folderId}%22`

export default function SimpleCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}
    >
      <Module
        title="Analysis 2A"
        code="MA20128"
        moodleLink={moodle('56264')}
        panoptoLink={panopto("2dcc7778-ac25-4ab8-bf87-ac3301485b21")}
      />

      <Module
        title="ODEs & Control"
        code="MA20220"
        moodleLink={moodle("55241")}
        panoptoLink={panopto("41b1c229-0835-4116-8c07-ac4300fedbd3")}
      />

      <Module
        title="Algebra 2A"
        code="MA20216"
        moodleLink={moodle("52467")}
        panoptoLink={panopto("4a438c70-cfb0-4f1b-a40a-30448b731921")}
      />

      <Module
        title="Thermal"
        code="PH20029"
        moodleLink={moodle("1883")}
        panoptoLink={panopto("cf666947-3aa9-4e48-aa98-f8db77d2be2d")}
      />

      <Module
        title="Quantum & Atomic"
        code="PH20013"
        moodleLink={moodle("1899")}
        panoptoLink={panopto("ba9823af-0137-40e2-ae92-a12e0cfe4217")}
      />
    </div>
  );
}
